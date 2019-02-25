import * as React from 'react';

export default function Rating(props) {
  const isDisabled = props.type === 'disabled';
  const isHovered = props.type === 'hover';
  const type = (!isHovered && props.type) ? ` ${props.type}` : '';
  const condition = isDisabled ? null : `active${isHovered ? ' selected' : ''}`;

  return (
    <div className={`rating${type}`}>
      <span className={condition}>
        <i className={`rex-icon ${isDisabled ? 'favorite-l' : 'favorite-f'}`} />
      </span>
      <span className={condition}>
        <i className={`rex-icon ${isDisabled ? 'favorite-l' : 'favorite-f'}`} />
      </span>
      <span className={condition}>
        <i className={`rex-icon ${isDisabled ? 'favorite-l' : 'favorite-half-f'}`} />
      </span>
      <span className={isHovered ? 'selected' : null}>
        <i className="rex-icon favorite-l" />
      </span>
    </div>
  );
}
