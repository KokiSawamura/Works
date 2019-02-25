import * as React from 'react';
import { LocalizationModal } from './localizationModal';
import { clearSearchAction } from 'domain/store/actions/searchAction';
import { toggleLocalizationAction } from 'domain/store/actions/localizationAction';


export function Localization(props) {
  const localization = props.localization;
  const currentLang = localization.currentLang ? localization.currentLang : 'English';
  const isOpen = localization.isOpen;

  return (
    <div id="localization" className="language-switcher">
      <div className="local-extended" onClick={ ()=> {toggleLocalizationAction(isOpen); clearSearchAction();}}>
        <i className="rex-icon world-l"></i>
        <small>{currentLang}</small>
      </div>

      <LocalizationModal localization={localization}/>
    </div>
  );
}
