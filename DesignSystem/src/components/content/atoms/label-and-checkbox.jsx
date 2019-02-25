import * as React from 'react';

export default function LabelAndCheckbox(props) {
  const type = props.type.length > 0 ? props.type : 'checkbox';
  const labels = props.labels;
  const name = props.name;

  let printLabelAndCheckboxes = labels.map(function(label, index) {

    const id = label.id;
    const text = label.text;    

    return(
      <div className="label-and-checkbox" key={index}>
        <label htmlFor={id}>
          <input name={name} type={type} id={id} />
          <span>{text}</span>
        </label>
      </div>
    );
  });

  return(
    <div>
      {printLabelAndCheckboxes}
    </div>
  );
}