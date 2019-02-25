import * as React from 'react';
import List from '../atoms/list';

export default function Milestone(props) {

  const complete = props.complete;
  const period = props.period;
  const month = props.month;
  const title = props.title;
  const list = props.list;

  let milestoneClasses = 'milestone';
  let checkCircle = null;

  if (complete) {
    milestoneClasses += ' completed';
    checkCircle = <i className="rex-icon check"></i>;
  }

  return(
    <div className={milestoneClasses}>
      <div className="col-xs-2">
        <p className="period">{period}</p>
        <p className="month">{month}</p>
      </div>
      <div className="col-xs-1">
        <div className="bubble">{checkCircle}</div>
        <div className="little-pole"></div>
      </div>
      <div className="col-xs-9">
        <h3>{title}</h3>
        <List type="unstyled" list={list} />
      </div>
    </div>
  );
}
