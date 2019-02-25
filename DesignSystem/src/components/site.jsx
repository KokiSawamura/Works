import * as React from 'react';
import Sidebar from './sidebar/sidebar';
import Page from './content/page';

export function Site(props) {
  const menu = props.menu;
  const tabs = props.tabs;
  const footer = props.footer;
  const colorSelect = props.colorSelect;
  const localization = props.localization;
  const contentSource = props.route.contentSource;
  const search = props.search;
  return (
    <div id="site">
      <div className="row">
        <div id="boxSidebar" className="col-xs-3 col-xl-2">
          <Sidebar menu={menu} colorSelect={colorSelect} localization={localization} />
        </div>
        <div id="boxPage" className="col-xs-9 col-xl-10">
          <Page tabs={tabs} footer={footer} search={search} colorSelect={colorSelect} contentSource={contentSource} localization={localization} />
        </div>
      </div>
    </div>
  );
}
