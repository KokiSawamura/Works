import * as React from 'react';
import { clearSearchAction } from 'domain/store/actions/searchAction';
import { updateCurrentLangAction } from 'domain/store/actions/localizationAction';
import { setCurrentLangCookie } from 'domain/middleware/cookie';

const LANG_EN = 'English';
const LANG_JA = '日本語';

const changeLanguage = (lang) => {
  updateCurrentLangAction(lang);
  setCurrentLangCookie(lang);
  clearSearchAction();
};

const LocalizationToggle = (props) => {
  const { localization } = props;
  const { currentLang = LANG_EN } = localization;
  const nextLang = currentLang === LANG_EN ? LANG_JA : LANG_EN;

  return (
    <div id="localization" className="language-switcher">
      <div className="local-extended" onClick={() => { changeLanguage(nextLang); }} >
        <i className="rex-icon world-l" />
        <small>{nextLang}</small>
      </div>
    </div>
  );
};

export default LocalizationToggle;
