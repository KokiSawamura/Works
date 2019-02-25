import * as React from 'react';
import { Image } from '../atoms/image';



export function Do(props) {
  
  const text = props.text;
  return (
    <div className="do">
      <h5 className="text-success">Do</h5>
      <p>{text}</p>
    </div>
  );
}

export function Dont(props) {
  const text = props.text;
  
  return (
    <div className="dont">
      <h5 className="text-danger">Don't</h5>
      <p>{text}</p>
    </div>
  );
}