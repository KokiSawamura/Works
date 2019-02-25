import * as React from 'react';
import { updateCurrentColorAction } from 'domain/store/actions/colorPickerAction';
import { updatePreviewColorAction } from 'domain/store/actions/colorPickerAction';
import { toggleColorPickerAction } from 'domain/store/actions/colorPickerAction';
import { setCurrentColorCookie } from 'domain/middleware/cookie';
import { root } from 'domain/middleware/routes';


export function ColorSquare(props) {

  const color = props.data;
  let isOpen = props.isOpen;
  let linkTag = null;
  const previewColor = props.previewColor;
  // if(color === previewColor){
  //   let previewUrl = `${root}themes/${previewColor}.css`;
  //   if(NODE_ENV === 'development') {
  //      previewUrl = `http://localhost:9090${root}themes/${previewColor}.css`;
  //   }
  //     linkTag =  <link rel="stylesheet" href={previewUrl} />
  // }
  return (
    <div
      className={`color-square ${color}`}
      onMouseEnter={()=> {
        updatePreviewColorAction(color);
      }}
      onClick={()=> {
        updateCurrentColorAction(color);
        toggleColorPickerAction(isOpen);
        setCurrentColorCookie(color);
        // set animation class
      }}
    >
    {linkTag}
    </div>
  );
}
