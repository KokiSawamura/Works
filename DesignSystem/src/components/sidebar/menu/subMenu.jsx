import * as React from 'react';
import { SubMenuItem } from './subMenuItem';

export function SubMenu(props) {

  const subMenu = props.data;
  const localization = props.localization;
  const subMenuItems = subMenu.map(function(item, key) {
    return <SubMenuItem data={item} key={key} localization={localization}/>

  });

  return (
    <ul className="opened rex-motion skrinkHeight">
      {subMenuItems}
    </ul>
  );
}