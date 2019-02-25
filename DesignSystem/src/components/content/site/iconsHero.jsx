import * as React from 'react';

export default function iconsHero(props) {
  const iconList = props.iconList;

  function createIconList(list) {
    let listHTML = [];

    list.map((icon, key) => {
      const displayIcon = (
        <div className="icons-col col-xs-4 col-sm-2" key={key}>
          <i className={`rex-icon ${icon}`} />
        </div>
      );
      listHTML.push(displayIcon);
    });
    return listHTML;
  }

  const displayIcons = createIconList(iconList);

  return (
    <div className="icons-hero">
      <div className="row">
        {displayIcons}
      </div>
    </div>
  );
}
