import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ComponentSelector } from '../contentSource';

function getContent(data, lang) {
  
  return data.map((info, key) => {
    const example = ComponentSelector(info, lang, key);
  
    return (
      <div key={key}>
        {example}
      </div>
    );
  });
}

export default function WorkingExample(props) {
  const data = props.info.data;
  const lang = props.lang;
  const content = getContent(data, lang);
 
  return (
    <div className="component-example working-example">
      {content}
    </div>
  );
}
