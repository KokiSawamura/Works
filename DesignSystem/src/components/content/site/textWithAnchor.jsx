import * as React from 'react';

export default function TextWithAnchor(props) {
  const lang = props.lang;
  const text = props.text[lang];

  function createDisplayText(textList) {

    return textList.map((textObj, key) => {
      const {
        text: textDisplay,
        type,
        href,
        target,
      } = textObj;
      let displayLink = null;

      const textLine = (
        <span key={textDisplay}>
          {textDisplay}
        </span>
      );

      switch (type) {
        case 'mail':
          displayLink = <a href={`mailto:${href}`} key={key}>{textLine}</a>;
          break;
        case 'link':
          displayLink = <a href={href} target={target} key={key}>{textLine}</a>;
          break;
        case 'strong':
          displayLink = <strong key={key}>{textLine}</strong>;
          break;
        default:
          displayLink = textLine;
      }

      return displayLink;
    });
  }

  const STYLE = {
    default: '',
    lead: 'lead',
    large: 'large',
    small: 'small',
    esmall: 'extra-small',
  };

  const displayText = createDisplayText(text);
  displayText.displayName = 'displayText';
  displayText.defaultProps = {
    style: STYLE.default,
  };

  const style = props.style ? props.style : '';

  return (
    <p className={style}>
      {displayText}
    </p>
  );
}
