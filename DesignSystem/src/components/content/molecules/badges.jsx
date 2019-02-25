import * as React from 'react';
import { Icon } from '../atoms/icon';

export default function Badges(props) {
  const classes = {
    badgeWrapper: 'badge',
    badge: 'badge',
  };
  const { text, icon, iconType, linkLabel } = props;
  let content;

  switch (props.type) {
    case 'round':
      classes.badge += ' round';
      break;
    case 'pill':
      classes.badge += ' pill';
      break;
    case 'empty':
      classes.badge += ' empty';
      break;
    default:
  }

  if (icon) {
    content = <Icon type={iconType} name={icon} />;
    classes.badgeWrapper = 'badge icon';
  }

  if (linkLabel) {
    content = <a>{linkLabel}</a>;
    classes.badgeWrapper = 'badge link';
  }

  return (
    <span className={classes.badgeWrapper}>
      {content}
      <span className={classes.badge}>{text}</span>
    </span>
  );
}
