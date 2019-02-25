import * as React from 'react';
import { Icon } from './icon';

export default function Stepper(props) {
  const options = {
    status: '',
    stepperMinus: '',
    stepperPlus: '',
  };

  if (props.disabled) { options.status = 'disabled'; }
  if (props.selectedLeft) { options.stepperMinus = 'clicked'; }
  if (props.selectedRight) { options.stepperPlus = 'clicked'; }

  return (
    <div className={`stepper-area ${options.status}`}>
      <span className={`stepper-minus ${options.stepperMinus}`}>
        <Icon name={props.leftIcon} />
      </span>
      <span className={`stepper-plus ${options.stepperPlus}`}>
        <Icon name={props.rightIcon} />
      </span>
    </div>
  );
}
