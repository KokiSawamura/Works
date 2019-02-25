import * as React from 'react';

export default function Button(props) {

  const text = props.text;
  const type = props.type;
  const size = props.size;
  const option = props.option;
  const innerIcon = props.innerIcon;
  const href = props.href;
  const optionalState = props.optionalState;
  const attr = {type: 'button'};
  const disabled = props.disabled;
  const icon = props.icon;
  const iconPositionLeft = props.iconPositionLeft;

  let textExample = null;

  function generateBtnClasses(types) {
    let btnClasses = 'btn';

    function checkButtonType(type) {
      switch (type) {
      case 'default':
        btnClasses += ' btn-default';
        break;
      case 'outline':
        btnClasses += ' btn-default btn-outline';
        break;
      case 'link':
        btnClasses += ' link';
        break;
      case 'link button':
        btnClasses += ' btn-link';
        break;
      default:
        btnClasses += ' btn-default';
        break;
      }
    }

    function checkButtonSize(size) {
      switch (size) {
      case 'xl':
        btnClasses += ' btn-xl';
        break;
      case 'lg':
        btnClasses += ' btn-lg';
        break;
      case 'sm':
        btnClasses += ' btn-sm';
        break;
      }
    }

    function checkButtonColor(optionalState) {
      switch (optionalState) {
      case 'success':
        btnClasses += ' btn-success';
        break;
      case 'info':
        btnClasses += ' btn-info';
        break;
      case 'warning':
        btnClasses += ' btn-warning';
        break;
      case 'danger':
        btnClasses += ' btn-danger';
        break;
      }
    }

    function checkButtonOption(option, size, type, innerIcon, icon, disabled) {
      // HACK
      switch (option) {

        case 'pill':
          btnClasses += ' btn-pill';
          break;

        case 'text':
          btnClasses += ' btn-text';
          break;

        // circle buttons
        case 'circle':
          btnClasses = 'btn btn-circle';
          // switch circle size
          switch (size) {
            case 'xl':
              btnClasses += ' btn-circle-xl';
              break;
            case 'lg':
              btnClasses += ' btn-circle-lg';
              break;
            case 'sm':
              btnClasses += ' btn-circle-sm';
              break;
          }
          // switch circle type
          switch (type) {
            case 'outline':
              btnClasses += ' btn-outline';
              break;
            case 'link':
              btnClasses = '';
              break;
            default:
              btnClasses += ' btn-default';
              break;
          }
          // switch iner icon
          switch (innerIcon) {
            case 'chevron-left':
              btnClasses += ' rex-icon chevron-left';
              break;
            case 'chevron-right':
              btnClasses += ' rex-icon chevron-right';
              break;
            case 'plus':
              btnClasses += ' rex-icon plus';
              break;
            case 'minus':
              btnClasses += ' rex-icon minus';
              break;
            case 'chevron-top':
              btnClasses += ' rex-icon chevron-top';
              break;
          }
          break;

        case 'square':
          btnClasses = 'btn btn-square';
          // switch circle type
          switch (type) {
            case 'outline':
              btnClasses += ' btn-outline';
              break;
            case 'link':
              btnClasses = '';
              break;
            default:
              btnClasses += ' btn-default';
              break;
          }
          // switch iner icon
          switch (innerIcon) {
            case 'chevron-left':
              btnClasses += ' rex-icon chevron-left';
              break;
            case 'chevron-right':
              btnClasses += ' rex-icon chevron-right';
              break;
            case 'plus':
              btnClasses += ' rex-icon plus';
              break;
            case 'minus':
              btnClasses += ' rex-icon minus';
              break;
            case 'chevron-top':
              btnClasses += ' rex-icon chevron-top';
              break;
          }
      }
      if (icon) { btnClasses += ' icon'; }
      if (icon === 'loading') { btnClasses += ' loading'; }
      if (disabled) { btnClasses += ' disabled'; }
    }

    checkButtonType(type);
    checkButtonSize(size);
    checkButtonColor(optionalState);
    checkButtonOption(option, size, type, innerIcon, icon, disabled);
    return btnClasses;
  }

  const btnClasses = generateBtnClasses(type);

  attr.className = btnClasses;
  attr.href = href;

  let content = '';
  if (icon === 'loading') {
    content = (<a {...attr}>{text}</a>);
  } else if (icon && iconPositionLeft) {
    content = (
      <a {...attr}>
        <span className={`rex-icon ${icon} left`} />
        { text }
      </a>
    );
  } else if (icon && !iconPositionLeft) {
    content = (
      <a {...attr}>
        { text }
        <span className={`rex-icon ${icon}`} />
      </a>
    );
  } else {
    content = (<a {...attr}>{text}</a>);
  }
  return content;
}
