import * as React from 'react';

export default function TextArea(props) {
  const helperText = props.helperText;
  const placeHolder = props.placeHolder;
  const label = props.label;
  const type = props.type;
  const state = props.state;
  const stateText = props.stateText;
  let toggleDisabled;
  let toggleStatusText;

  let printHelperText = null;
  let printLabel = null;
  const attributes = {
    className: 'text-area',
  };

  switch (state) {
    case 'disabled':
      toggleDisabled = 'disabled';
      attributes.className = 'text-area disabled';
      break;
    case 'error':
      toggleStatusText = (
        <small className="remaining">
          <i className="rex-icon sign-warning-f" />
          <span>{stateText}</span>
        </small>);
      attributes.className = `${attributes.className} has-error`;
      break;
    case 'success':
      toggleStatusText = (
        <small className="resolved">
          <i className="rex-icon check" />
          <span>{stateText}</span>
        </small>);
      attributes.className = `${attributes.className} has-success`;
      break;
    case 'focus':
      attributes.className = `${attributes.className} active-textarea-div`;
      break;
    default:
      break;
  }


  if (placeHolder) {
    attributes.placeholder = placeHolder;
  }
  if (type) {
    attributes.className = `${attributes.className} ${type}`;
  }


  if (helperText) {
    printHelperText = <small>{helperText}</small>;
  }
  if (label) {
    printLabel = <label>label</label>;
  }

  return (
    <div {...attributes}>
      {printLabel}
      <textarea disabled={toggleDisabled} />
      {printHelperText}
      {toggleStatusText}
    </div>
  );
}
