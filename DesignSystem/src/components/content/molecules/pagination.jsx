import * as React from 'react';
import { Icon } from '../atoms/icon';

export function getBase(type, subtype, withText) {
  return (
    <ul className={`pagination ${type}`}>
      <li className="previous"><Icon name="chevron-left" /></li>
      <li className={`link ${subtype}`}><a>1</a></li>
      <li className="link"><a>2</a></li>
      <li className="link"><a>3</a></li>
      <li className="link ellipsis" />
      <li className="link"><a>8</a></li>
      <li className="next"><Icon name="chevron-right" /></li>
      {withText ? (<p className="text">160-180 of 1980 in the results</p>) : null}
    </ul>
  );
}

export function getNextPrevButton(type, prevText, nextText, splittedType) {
  const containsTitle = splittedType.includes('title');

  return (
    <div className={`pagination ${type}`}>
      {containsTitle ? <span className="title-prev">Prev</span> : null}
      <a className="previous">
        <Icon name="chevron-left" />
        {prevText}
      </a>
      {containsTitle ? <span className="title-next">Next</span> : null}
      <a className="next">
        {nextText}
        <Icon name="chevron-right" />
      </a>
    </div>
  );
}

export function getArrowPagination(type) {
  return (
    <div className={`pagination ${type}`}>
      <a className="previous">
        <Icon name="chevron-left" />
      </a>
      <a className="next">
        <Icon name="chevron-right" />
      </a>
    </div>
  );
}

export function getMobilePagination(type, total, activeNo) {
  return (
    <div className={`pagination ${type}`}>
      <a className="previous">
        <Icon name="chevron-left" />
      </a>
      <div className="pagination-content">
        {total}
        <div className="pagination-divider" />
        {activeNo}
      </div>
      <a className="next">
        <Icon name="chevron-right" />
      </a>
    </div>
  );
}

export default function Pagination(props) {
  const type = props.type || '';
  const splittedType = props.type ? props.type.split(' ') : [];
  const subtype = props.subtype || '';

  let content;

  if (splittedType.includes('arrow')) {
    content = getArrowPagination(type);
  } else if (splittedType.includes('button')) {
    content = getNextPrevButton(type, props.prevText, props.nextText, splittedType);
  } else if (splittedType.includes('mobile')) {
    content = getMobilePagination(type, props.total, props.activeNo);
  } else {
    content = getBase(type, subtype, props.withText);
  }

  return content;
}
