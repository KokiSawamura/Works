import * as React from 'react';

export default function Select(props) {

  const options = props.options;
  const name = props.name;
  const type = props.type;
  const state = props.state;
  let displayArrow;
  let attributes = {
    name: name
  }

  let printOptions = options.map(function(option, index) {
    const value = option.value;
    const text = option.text;
    return <option value={value} key={index}>{text}</option>
  });

  switch (state) {
    case 'disabled':
        attributes.disabled = 'disabled';
      break;

    default:
      break;
  }

  switch (type) {
    case 'multiple':
      attributes.multiple = 'multiple';
      displayArrow = '';
      break;
    case 'single':
      displayArrow = <span className="select-arrow" />;
      break;

    default:
      break;
  }

  return(
    <div className="select-wrapper">
      <select  {...attributes}>
        {printOptions}
      </select>
      {displayArrow}
    </div>
  );
}
