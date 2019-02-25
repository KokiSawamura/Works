import * as React from 'react';
import { Icon } from './icon';
import Tooltip from '../atoms/tooltips';

export function getOptionalContent(icon, iconType, type) {
  let content;
  if (icon) {
    content = <Icon name={icon} type={iconType} />;
  } else if (type === 'range-tooltip') {
    content = <Tooltip text="50" styles={{ left: '50%' }} />;
  }
  return content;
}

export function sliderDefault(activeClass, icon, iconType, type) {
  return (
    <div className={`slider-wrapper ${activeClass}`}>
      { getOptionalContent(icon, iconType, type) }
      <span style={{ width: '50%' }} className="slider-line" />
      <input className="slider" value="50" type="range" min="1" max="100" readOnly />
    </div>
  );
}

export function multiRangeContent(activeClass) {
  return (
    <div className={`slider-wrapper ${activeClass}`}>
      <span style={{ width: '50%' }} className="slider-line" />
      <Tooltip text="0" styles={{ left: '0%' }} />
      <input className="slider min" value="0" type="range" min="1" max="100" readOnly />
      <Tooltip text="50" styles={{ left: '50%' }} />
      <input className="slider max" value="50" type="range" min="1" max="100" readOnly />
    </div>
  );
}

export default function Slider(props) {
  let activeClass = props.type ? props.type : '';
  if (props.disabled) { activeClass += 'disabled'; }
  if (props.icon) { activeClass += 'icon'; }
  let content;

  if (props.type === 'range-tooltip ranges') {
    content = multiRangeContent(activeClass);
  } else {
    content = sliderDefault(activeClass, props.icon, props.iconType, props.type);
  }
  return content;
}
