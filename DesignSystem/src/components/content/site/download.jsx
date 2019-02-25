import * as React from 'react';

export default function Download(props) {

  // const headings = props.headings;
  const name = props.name;
  // const size = props.size;
  const date = props.date;
  const url = props.url;
  const type = props.type;
  let content = null;
  let icon = props.icon;
  let iconClass = 'rex-icon ';

  if (typeof icon === 'undefined') {
    icon = 'folder-l';
  }
  iconClass += icon;


  switch (type) {
    case 'no-date': content = (
      <div className="col-xs-12">
        <i className={iconClass}></i>{name}
      </div>
    );
      break;
  
    default: content = (
        <span>
          <div className="col-xs-8">
            <i className={iconClass}></i>{name}
          </div>
          <div className="col-xs-4">
            <span>{date}</span>
          </div>
        </span>
        );
      break;
  }
 

  return (
    <div className="download-component">
      <a href={url} target="_blank">
        {content}
      </a>
    </div>
  );
}
