import * as React from 'react';
import { Icon } from '../atoms/icon';

export function Base(type, items, subType) {
  let prev;
  let next;
  if (type.split(' ').includes('overflow')) {
    next = <div className="next" />;
    prev = <div className="previous" />;
  }
  return (
    <div className={`tab ${type}`}>
      {prev}
      <a className="item active">{items[0]}</a>
      <a className={`item${subType === 'hover' ? ' selected' : ''}`}>{items[1]}</a>
      <a className="item">{items[2]}</a>
      {next}
    </div>
  );
}

export function Icons(type, subType) {
  return (
    <div className={`tab ${type}`}>
      <span className="item active">
        <Icon type="line" name="home" />
      </span>
      <span className="item">
        <Icon type="line" name="cart" />
      </span>
      <span className={`item ${subType}`}>
        <Icon type={subType === 'active' ? 'fill' : 'line'} name="notice-generic" />
      </span>
      <span className="item">
        <Icon type="line" name="location" />
      </span>
      <span className="item">
        <Icon type="line" name="mail" />
      </span>
    </div>
  );
}

export default function Tabs(props) {
  const items = ['itemA', 'itemB', 'itemC'];
  const type = props.type ? props.type : '';
  let content;
  const types = type.split(' ');

  if (types.indexOf('icons') >= 0) {
    content = Icons(type, props.subType);
  } else {
    content = Base(type, items, props.subType);
  }

  return content;
}
