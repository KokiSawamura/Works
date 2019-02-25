import * as React from 'react';

export function TrackStep(props) {
  
  const text = props.text;
  const conditionMet = props.conditionMet;
  const index = props.index;
  const current = props.current;
  const displayText = props.displayText;
  const stepsLength = props.stepsLength;
  

  let displayLine;
  let toggleCurrent = '';
  let toggleCurrentSpan;
  let toggleConditionMet = '';
  let toggleCheck;

  if (index != stepsLength) {
    displayLine = <div className="track-step-connector">
      <span className="track-line"></span>
    </div>
  }

  if (current == true) {
    toggleCurrent = ' current';
    toggleCurrentSpan = <span className="check-indicator-inner"></span>
  }

  if (conditionMet == true) {
    toggleConditionMet = ' condition-met';
    if (current == false) {
      toggleCheck = <i className="rex-icon check"></i>
    }
  }

  const toggleText = displayText === true ? <span className="track-text">{text}</span> : null;

  function toggleClassName(toggleConditionMet, toggleCurrent){
    return `track-step ${toggleConditionMet} ${toggleCurrent}`;
  }

  return(
    <div className={toggleClassName(toggleConditionMet, toggleCurrent)}>
      <div className={`check-indicator`}>
        {toggleCurrentSpan}
        {toggleCheck}
        {toggleText}
      </div>
      {displayLine}    
    </div>
  );
}