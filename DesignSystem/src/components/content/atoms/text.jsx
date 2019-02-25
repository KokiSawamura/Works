import * as React from 'react';

export function Text(props) {
  const text = props.text;
  const type = props.type;

  let textExample = null;

  switch (type) {
    case 'lead':
      textExample = <p className="lead">{text}</p>;
      break;
    case 'large':
      textExample = <p className="large">{text}</p>;
      break;
    case 'small':
      textExample = <p className="small">{text}</p>;
      break;
    case 'extra-small':
      textExample = <p className="extra-small">{text}</p>;
      break;
    default:
      textExample = <p>{text}</p>;
      break;
  }

  return textExample;
}

export function TextWithLink(props) {
  const {
    text,
    linkedText,
    url,
    lang,
    target,
    style = props.style ? props.style : '',
  } = props;

  const STYLE = {
    default: '',
    lead: 'lead',
    large: 'large',
    small: 'small',
    esmall: 'extra-small',
  };

  TextWithLink.displayName = 'TextWithLink';

  TextWithLink.defaultProps = {
    style: STYLE.default,
  };

  switch (lang) {
    case 'jp':
      return (
        <p className={style}>{text}<a href={url} target={target}>{linkedText}</a></p>
      );

    default:
      return (
        <p className={style}>{text}<a href={url} target={target}>{linkedText}</a>.</p>
      );
  }
}

export function TextWithEmail(props) {
  const text = props.text;
  const address = props.address;

  return (
    <p>{text}<a href={`mailto:${address}`}>{address}</a></p>
  );
}


export function Link(props) {
  const text = props.text;
  const url = props.url;

  return (
    <a href={url}>
      {text}
    </a>
  );
}
