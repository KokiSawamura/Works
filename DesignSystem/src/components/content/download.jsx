import * as React from 'react';

export function Download(props) {

  const downloadLink = props.downloadLink;
  const downloadText = props.downloadText;

  return(
    <a href={downloadLink} className="download-link">
      <h5>{downloadText}<span className="glyphicon glyphicon-chevron-right"></span></h5>
    </a>
  );
}