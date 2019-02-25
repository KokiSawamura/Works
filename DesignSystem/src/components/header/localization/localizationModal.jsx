import * as React from 'react';
import { toggleLocalizationAction, 
          updateCurrentLangAction, 
          toggleLanguagePickerAction, 
          updatePreviewLangAction } from 'domain/store/actions/localizationAction';
import { getCurrentLangCookie, setCurrentLangCookie } from 'domain/middleware/cookie';


export function LocalizationModal(props) {

  const localization = props.localization;
  const languages = localization.languages;
  const currentLang = localization.currentLang;
  let previewLang = localization.previewLang;
  const isOpen = localization.isOpen;
  const isSelectOpen = localization.isSelectOpen;
  let isVisible = null;
  let selectedLanguage = null;
  let languageOptions = null;
  let SwitchToEnglish = null;
  let settingsHeader = 'Localization settings';
  let languageHeader = 'Language';
  let save = 'Save';
  let cancel = 'Cancel';
  let currentLangCookie = getCurrentLangCookie();

  if ( previewLang === '' || typeof previewLang === 'undefined') {
    previewLang = currentLang;
  }

  if (typeof currentLangCookie === 'undefined') {
    setCurrentLangCookie(currentLang);
  }

  // for setting the localization values to Japanese if Japanese is previewed
  switch (previewLang) {
    case '日本語':
        settingsHeader = '言語設定';
        languageHeader = '言語';
        save = '保存';
        cancel = 'キャンセル';
      break;
    default:
        settingsHeader = 'Localization settings';
        languageHeader = 'Language';
        save = 'Save';
        cancel = 'Cancel';
      break;
  }

  // for setting the visibility of the localization modal
  if (isOpen == true) {
    isVisible = 'visible';
  } else {
    isVisible = null;
  }

  if(isSelectOpen){
  languageOptions = languages.map( function(language, key) {

    let languageAttr = {
      'className': 'lang-option',
      'key': key,
      'onClick': ()=> {
          selectedLanguage = language;
          updatePreviewLangAction(language);
          toggleLanguagePickerAction(isSelectOpen);
        }
    }
    let isActive = null;
    if (language == previewLang) {
      languageAttr.className += ' active';
    }

    return(
      <div {...languageAttr}>
        {language}
      </div>
    );
  });
  } else {
    languageOptions  = null
  }

  const LocalSelectOptions = (
    <div className="local-select-options">
      <div className="lang-options">
        {languageOptions}
      </div>
    </div>
  );

  
  if (previewLang == 'English') {
    SwitchToEnglish = null;
  } else {
    SwitchToEnglish = (
      <a className="switch-to-en"
        onClick={ ()=> { 
          updateCurrentLangAction('English');
          updatePreviewLangAction('English');
          toggleLocalizationAction(isOpen);
          setCurrentLangCookie('English');
        }}
      >
        Switch to English
      </a>
    );
  }
  
    
  const LocationSettings = (
    <div className={`local-options ${isVisible}`}>
      <h5>{settingsHeader}</h5>
      <p>
        <span className="lang-icon"><i className="rex-icon switch-language-l"></i></span>
        <span className="lang-text">{languageHeader}</span>  
      </p>
      <div className="current-lang" onClick={ ()=> {toggleLanguagePickerAction(isSelectOpen)}}>
        <span>{previewLang}</span>
        <div className="dropdown-btn">
          <div className="arrow-down"></div>
        </div>
      </div>
      {LocalSelectOptions}
      <div className="local-actions">
        {SwitchToEnglish}
        <a type="button" 
          className="btn btn-default save"
          onClick={ ()=> { 
            updateCurrentLangAction(previewLang);
            toggleLocalizationAction(isOpen);
            setCurrentLangCookie(previewLang);
          }}>
          {save}
        </a>
        <a onClick={ ()=> { 
          toggleLocalizationAction(isOpen);
          updatePreviewLangAction(currentLang);
          toggleLanguagePickerAction(true);
        }}>
          {cancel}
        </a>
      </div>
    </div>
  );

  return (
    <div>
      <div className={`local-overlay ${isVisible}`} onClick={ ()=> {
        toggleLocalizationAction(isOpen);
        updatePreviewLangAction(currentLang);
        toggleLanguagePickerAction(true);
      }}> 
      </div>
      {LocationSettings}
    </div>
  );
}
