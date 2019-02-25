import * as React from 'react';
import { Icon } from '../atoms/icon';

export function list(type, title, messages) {
  return (
    <ul className={`alert ${type}`}>
      <li className="title">{title}</li>
      {messages.map((message, index) => <li className="message" key={index.toString()}>{message}</li>)}
    </ul>
  );
}

export function base(type, messages, htmlText, icon, iconType, omitClose) {
  const closeIcon = omitClose ? null : (
    <a className="close">
      <Icon name="x" />
    </a>
  );

  // eslint-disable-next-line react/no-danger
  const message = htmlText ? (<span dangerouslySetInnerHTML={{ __html: htmlText }} />) : messages[0];

  return (
    <div className={`alert ${type}`}>
      <Icon name={icon} type={iconType} />
      {message}
      {closeIcon}
    </div>
  );
}

export default function Alerts(props) {
  const {
    text = [],
    title,
    htmlText,
    type = '',
    icon,
    iconType,
    omitClose = false,
  } = props;

  return props.type === 'alert-list' ? list(type, title, text) : base(type, text, htmlText, icon, iconType, omitClose);
}
