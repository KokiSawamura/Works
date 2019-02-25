import * as React from 'react';

export default function InputSwitch(props) {
  const switchClass = props.type ? props.type : '';
  const checked = props.type && props.type.split(' ').indexOf('selected') > -1 ? 'checked' : null;
  const id = props.type ? `rex-switch-${props.type.replace(/ /g, '-')}` : 'rex-switch';

  return (
    <div className={`switch-area ${switchClass}`}>
      <input type="checkbox" id={id} defaultChecked={checked} />
      <label htmlFor={id} className="switch-label" />
    </div>
  );
}
