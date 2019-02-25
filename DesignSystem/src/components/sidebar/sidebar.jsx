import * as React from 'react';
import { clearSearchAction } from 'domain/store/actions/searchAction';
import { root } from 'domain/middleware/routes';
import { Menu } from './menu/menu';
import logo from '../../assets/img/rex-rkit_logo.svg';

export default function Sidebar(props) {
  const localization = props.localization;
  const body = document.body;
  const html = document.documentElement;
  const documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  const style = {
    height: `${documentHeight} px`,
  };
  const menu = props.menu;

  return (
    <section id="sidebar" onClick={clearSearchAction}>
      <div id="logo">
        <a href={`${root}`}>
          <img src={logo} alt="ReX Design System" />
        </a>
      </div>
      <nav style={style}>
        <Menu menu={menu} localization={localization} />
      </nav>
    </section>
  );
}
