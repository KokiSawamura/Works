import React, { Component } from 'react';
import { TrackStep } from './TrackStep';

export function Track(props) {

  const id = props.id;
  const steps = props.steps;
  const mobile = props.mobile;
  const lang = props.lang;
  const renderSteps = displaySteps(steps, mobile);  
  const toggleMobile = (mobile === true) ? ' mobile' : '';


  function displaySteps(steps, mobile) {
    let displaySteps = [];
    let stepsLength = steps.length - 1;
        
    for (const key in steps) {
      let step = steps[key];
      const text = step.text[lang];
      const conditionMet = step.conditionMet;
      const current = step.current;
      const displayText = (mobile === false);

      displaySteps[key] = <TrackStep key={key} text={text} displayText={displayText} index={key} stepsLength={stepsLength} conditionMet={conditionMet} current={current} text={text}/>;
    }
  
    return displaySteps;
  }

  
  return(
    <div id={id} className={`track${toggleMobile}`}>
      {renderSteps}
    </div>
  )
}
