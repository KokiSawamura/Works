import * as React from "react";
import { MenuItem } from "./menuItem";

export function Menu(props) {

	const list = props.menu;

  // UI
  const sideNav = list.map(function(item, keyList){

    let menu = item.menu;
    const localization = props.localization;
    const MenuItems = menu.map(function(subItem, keyItem) {
      return <MenuItem data={subItem} key={keyItem} localization={localization}/>;
    });

    return(
			<div className="menu-list" key={keyList}>
				<label>{item.text}</label>
				<ul className="list-unstyled">
          {MenuItems}
				</ul>
			</div>
    );
  });

  return (
		<div id="menu">
      {sideNav}
		</div>
  );
}
