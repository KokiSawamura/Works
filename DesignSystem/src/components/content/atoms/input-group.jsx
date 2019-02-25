import * as React from 'react';

export default function InputGroup(props) {
  const conditions = {
    lang: props.lang,
    helperText: props.helperText,
    placeHolder: props.placeHolder,
    label: props.label,
    type: props.type,
    state: props.state,
    option: props.option,
    validation: props.validation,
    addOn: props.addOn,
    printHelperText: null,
    printLabel: null,
    printValidation: null,
    printIconLabel: null,
    printButton: null,
    toggleOption: '',
    passwordIcon: null,
    icon: null,
    stateClass: '',
    attributes: {
      type: props.type.length > 0 ? props.type : 'text',
    },
  };

  switch (conditions.type) {
    case 'password':
      conditions.passwordIcon = (<i className="rex-icon eye-ban-l" />);
      break;

    default:
      break;
  }


  switch (conditions.option) {
    case 'icon-label':
      conditions.toggleOption = ' with-icon-label';
      conditions.printIconLabel = (
        <div className="icon-container">
          <i className="rex-icon calendar-l" />
        </div>
      );
      break;

    default:
      break;
  }


  if (conditions.placeHolder) {
    conditions.attributes.placeholder = conditions.placeHolder;
  }


  function getValidationItems(validationList) {
    const listItems = [];
    Object.keys(validationList).forEach(key => {
      const listItem = validationList[key];
      let icon;
      let isResolved;
      const resolved = listItem.resolved;
      if (resolved) {
        icon = 'check';
        isResolved = 'resolved';
      } else {
        icon = 'sign-warning-f';
        isResolved = 'remaining';
      }
      listItems[key] = <small key={key} className={isResolved}><i className={`rex-icon ${icon}`} />{listItem.text[conditions.lang]}</small>;
    });
    return listItems;
  }


  switch (conditions.state) {
    case 'focus':
      conditions.stateClass = ' active';
      break;
    case 'error':
      conditions.icon = <span className="rex-icon sign-warning-f form-control-feedback" aria-hidden="true" />;
      conditions.stateClass = ' has-error';
      break;
    case 'readOnly':
      conditions.stateClass = ' input-group-read-only';
      break;
    case 'success':
      conditions.icon = <span className="rex-icon check form-control-feedback" aria-hidden="true" />;
      conditions.stateClass = ' has-success';
      break;
    case 'disabled':
      conditions.stateClass = ' input-group-disabled';
      conditions.attributes.disabled = 'disabled';
      break;
    case 'validation':
      conditions.icon = <span className="rex-icon sign-warning-f form-control-feedback" aria-hidden="true" />;
      conditions.stateClass = ' has-error';
      conditions.printValidation = getValidationItems(conditions.validation);
      break;

    default:
      break;
  }


  if (conditions.label) {
    conditions.printLabel = <label>{conditions.label}</label>;
  }
  if (conditions.helperText) {
    conditions.printHelperText = <small>{conditions.helperText}</small>;
  }


  const className = `input-area ${props.type}${conditions.stateClass}${conditions.toggleOption}`;

  return (
    <div className={className}>
      {conditions.printIconLabel}
      {conditions.printLabel}
      {conditions.printButton}
      <input {...conditions.attributes} />
      {conditions.passwordIcon}
      {conditions.icon}
      <div className="underline" />
      {conditions.printHelperText}
      {conditions.printValidation}
    </div>
  );
}
