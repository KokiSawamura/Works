import * as React from 'react';
import { ColorSquare } from './colorSquare';
import { toggleColorPickerAction } from 'domain/store/actions/colorPickerAction';
import { updatePreviewColorAction } from 'domain/store/actions/colorPickerAction';


export function ColorList(props) {

  let isOpen = props.data.isOpen;
  const animation = props.data.animation;

  const currentColor = props.data.currentColor;
  const colorVariables = props.data.colors;
  const previewColor = props.data.previewColor;
  let printColorOptions = null;
  let currentColorOpen = null;
    const ColorSquares = colorVariables.map( function(color, key) {

      return(
        <ColorSquare
          data={color}
          key={key}
          isOpen={isOpen}
          previewColor={previewColor}
        />
      );
    });
  if (isOpen == true) {
    currentColorOpen = 'current-color-open';
    printColorOptions = <div className="color-options open">{ColorSquares}</div>
  } else {
    printColorOptions = <div className="color-options ">{ColorSquares}</div>
  }

  return (
    <section
      id="color-list"
      className={`rex-motion ${animation}`}
      onMouseLeave={ ()=> {
        updatePreviewColorAction(currentColor);
      }}
    >
      <div
        id="current-color"
        className={`color-square ${currentColor} ${currentColorOpen}`}
        onClick={ () => {
          toggleColorPickerAction(isOpen);
        }}
      >
        <i className="rex-icon fill-color-l"></i>
      </div>
      {printColorOptions}
    </section>
  );
}
