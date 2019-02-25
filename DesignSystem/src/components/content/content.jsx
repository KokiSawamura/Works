import * as React from 'react';
import { clearSearchAction } from 'domain/store/actions/searchAction';
import { getContentSource } from './contentSource';


export default function Content(props) {
  let LANG;
  const contentSource = props.contentSource;
  const currentLang = props.localization.currentLang;
  const currentColor = props.currentColor;


  switch (currentLang) {
    case '日本語':
      LANG = 'jp';
      break;
    default:
      LANG = 'en';
      break;
  }

  const contentData = getContentSource(contentSource, LANG, currentColor);

  return (
    <section id="content" onClick={clearSearchAction}>
			{contentData}
    </section>
  );
}
