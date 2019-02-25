import * as React from 'react';
import { Search } from './search/search';
import LocalizationToggle from './localization/localizationToggle';
import { ColorPicker } from './colorPicker/colorPicker';

export function Header(props) {
	const colorSelect = props.colorSelect;
	const localization = props.localization;
	const currentLang = localization.currentLang;
	
  return (
    <section id="header">
			<div className="row">
				<div className="col-xs-9">
					<Search search={props.search} currentLang={currentLang} />
				</div>
				<div className="col-xs-1">
					<ColorPicker colorSelect={colorSelect} />
				</div>
			</div>
    </section>
  );
}
