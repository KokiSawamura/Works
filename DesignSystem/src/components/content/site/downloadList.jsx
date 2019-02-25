import * as React from 'react';

export default function DownloadList(props) {
  const content = props.data.map((d, i) => {
    const {
      text,
      subText,
      iconColor,
    } = d;
    const url = d.url[props.lang];
    let textClass = 'name';
    let link;

    if (subText) {
      link = <a href={url} className="link" target="_blank">{subText}</a>;
    } else {
      textClass += ' middle';
    }
    return (
      <div className="download-list-row col-xs-12" key={i.toString()}>
        <div className="col-xs-1">
          <i className={`rex-icon logo ${iconColor}`} />
        </div>
        <div className="col-xs-2">
          <div className={textClass}>{text}</div>
          {link}
        </div>
        <div className="col-xs-9">
          {url}
        </div>
      </div>
    );
  });

  return (
    <div className="download-list-component">
      {content}
    </div>
  );
}
