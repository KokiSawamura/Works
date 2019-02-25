import * as React from 'react';
import { SubMenu } from './subMenu';
import { setMenuActiveAction } from 'domain/store/actions/menuAction';

export function MenuItem(props) {

  const active = props.data.active;
  const isOpen = props.data.isOpen;
  const text = props.data.text;
  const subMenu = props.data.subMenu;
  const localization = props.localization;
	const id = props.data.id;

	let options = {};

  let subMenuOption = null;

  if( isOpen === true) {
    subMenuOption = <SubMenu isOpen={false} data={subMenu} localization={localization}/>;
  } 

  if( active === true) {
    options = {
      'className': 'text-primary'
    };
  }


  return (
    <li>
      <span
        {...options}
				onClick={()=> {
						setMenuActiveAction(id);
            //smooth scroll needed here
					}
				}
			>
      	{text}
      </span>
      { subMenuOption }
    </li>
  );
}
