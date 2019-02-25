import * as React from 'react';

export default function colorPalette(props) {
  const colors = props.colors;
  const type = props.type;
  const currentColor = props.currentColor;
  let displayColors;
  


  function createColorList(list) {
    let colorsHTML = [];

    colors.map((colorGroup, key) => {
      const title = colorGroup.title;
      const primary = colorGroup.primary;
      const darker = colorGroup.darker;
      const lighter = colorGroup.lighter;

      const primaryStyleBg = {background: `#${primary}`};
      const darkerStyleBg = {background: `#${darker}`};
      const lighterStyleBg = {background: `#${lighter}`};
      const primaryStyleText = {color: `#${primary}`};
      const darkerStyleText = {color: `#${darker}`};
      const lighterStyleText = {color: `#${lighter}`};

  
      const displayColorGroup = (
        <div className="palette-display-col col-sm-6" key={key}>
          <div className="col-sm-6 palette-info">
            <h5>{title}</h5>
            <p>Primary: <span style={primaryStyleText}>#{primary}</span></p>
            <p>Lighter: <span style={lighterStyleText}>#{lighter}</span></p>
            <p>Darker: <span style={darkerStyleText}>#{darker}</span></p>
          </div>
          <div className="col-sm-6">
            <div className="swatch-sample primary" style={primaryStyleBg} />
            <div className="sub-colors">
              <div className="swatch-sample lighter" style={lighterStyleBg} />
              <div className="swatch-sample darker" style={darkerStyleBg} />
            </div>
          </div>
        </div>
      );
      colorsHTML.push(displayColorGroup);
    });
    return colorsHTML;
  }


  function createSubColorList(list, col1, col2, componentType) {
    let colorsHTML = [];

    colors.map((colorGroup, key) => {
      const title = colorGroup.title;
      const rgb = colorGroup.rgb;
      const hex = colorGroup.hex;
      const cmyk = colorGroup.cmyk;
      const pantone = colorGroup.pantone;
      const className = colorGroup.className;
      const hexStyleBg = {background: `#${hex}`};
      const hexStyleText = {color: `#${hex}`};
      const displayRgb = rgb? <p>RGB: <span>{rgb}</span></p>: '';
      const displayCmyk = cmyk? <p>CMYK: <span>{cmyk}</span></p>: '';
      const displayPantone = pantone? <p>Pantone: <span>{pantone}</span></p>: '';
      const displayClassName = className? ` ${className}`: '';
  
      const displayColorGroup = (
        <div className={`palette-display-col col-sm-6${displayClassName} ${componentType}`} key={key}>
          <div className={`col-sm-${col1} palette-info`}>
            <h5>{title}</h5>
            {displayRgb}
            <p>HEX: <span>#{hex}</span></p>
            {displayCmyk}
            {displayPantone}
          </div>
          <div className={`col-sm-${col2}`}>
            <div className="primary sub-color" style={hexStyleBg} />
          </div>
        </div>
      );
      colorsHTML.push(displayColorGroup);
    });
    return colorsHTML;
  }


  function createSystemColorsList(list, col1, col2, componentType) {
    let colorsHTML = [];

    colors.map((colorGroup, key) => {
      const title = colorGroup.title;
      const rgb = colorGroup.rgb;
      let hex = colorGroup.hex;
      const cmyk = colorGroup.cmyk;
      const pantone = colorGroup.pantone;
      const className = colorGroup.className;
      const displayRgb = rgb? <p>RGB: <span>{rgb}</span></p>: '';
      const displayCmyk = cmyk? <p>CMYK: <span>{cmyk}</span></p>: '';
      const displayPantone = pantone? <p>Pantone: <span>{pantone}</span></p>: '';
      const displayClassName = className? ` ${className}`: '';

      if (typeof hex === 'undefined') {
        switch (currentColor) {
          case 'red':
            hex = 'bf0000';
            break;
          case 'yellow':
            hex = 'ffa000';
            break;
          case 'green':
            hex = '4bcd00';
            break;
          case 'blue':
            hex = '00a0f0';
            break;
          case 'dark-blue':
            hex = '002896';
            break;
          case 'purple':
            hex = '7d00be';
            break;
          case 'pink':
            hex = 'ff41be';
            break;
        
          default:
            hex = 'bf0000';
            break;
        }
      }

      const hexStyleBg = {background: `#${hex}`};
      const hexStyleText = {color: `#${hex}`};
      const displayColor = className === 'brand-primary'? <div className="primary bg-primary sub-color" />: <div className="primary sub-color" style={hexStyleBg} />; 
  
      const displayColorGroup = (
        <div className={`palette-display-col col-sm-6${displayClassName} ${componentType}`} key={key}>
          <div className={`col-sm-${col1} palette-info`}>
            <h5>{title}</h5>
            {displayRgb}
            <p>HEX: <span style={hexStyleText}>#{hex}</span></p>
            {displayCmyk}
            {displayPantone}
          </div>
          <div className={`col-sm-${col2}`}>
            {displayColor}
          </div>
        </div>
      );
      colorsHTML.push(displayColorGroup);
    });
    return colorsHTML;
  }
  

  switch (type) {
    case 'sub-brand-colors':
      displayColors = createSubColorList(colors, 6, 6, '');
      break;

    case 'gray-scale-colors':
      displayColors = createSubColorList(colors, 8, 4, 'gray-scale-colors');
      break;
    
    case 'system-colors':
      displayColors = createSystemColorsList(colors, 8, 4, 'system-colors');
      break;
  
    default:
      displayColors = createColorList(colors);
      break;
  }
  

  return (
    <div className="icons-display palette-display">
      <div className="row">
        {displayColors}
      </div>
    </div>
  );
}
