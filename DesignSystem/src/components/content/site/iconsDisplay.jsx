import * as React from 'react';

export default function iconsDisplay(props) {
  const iconList = props.iconList;

  function createIconList(list) {
    let listHTML = [];

    iconList.map((iconArray, key) => {
      const icon1 = iconArray.icon1;
      const icon2 = iconArray.icon2;
      const text = iconArray.text;
  
      const displayIcon = (
        <div className="icons-display-col col-sm-6" key={key}>
          <div className="col-sm-2">
            <i className={`rex-icon ${icon1}`} />
          </div>
          <div className="col-sm-2">
            <i className={`rex-icon ${icon2}`} />
          </div>
          <div className="col-sm-8">
            <p>{text}</p>
          </div>
        </div>
      );
      listHTML.push(displayIcon);
    });
    return listHTML;
  }

  const displayIcons = createIconList(iconList);

  return (
    <div className="icons-display">
      <div className="row">
        {displayIcons}
      </div>
    </div>
  );
}
