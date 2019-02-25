import * as React from 'react';

export function getTag(type, text, isDisplayedIcon) {
  return isDisplayedIcon ? (
    <div className={`tag${type}`}>
      <span className="content">{text}</span>
      {isDisplayedIcon ? <span className="close" /> : null}
    </div>
  ) : (<div className={`tag${type}`}>{text}</div>);
}

export default function Tags(props) {
  const text = props.text ? props.text : '';
  const type = props.type ? ` ${props.type}` : '';
  const isDisplayedIcon = type.split(' ').includes('icon');

  return getTag(type, text, isDisplayedIcon);
}
