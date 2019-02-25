import * as React from 'react';
import { SearchDropdown } from './searchDropdown';
import { SearchField } from './searchfield';

export function Search(props) {
  const search = props.search;
  const searchData = search.searchData;
  const currentLang = props.currentLang;
  let lang = null;

  switch (currentLang) {
    case '日本語':
        lang = 'jp';
      break;
  
    default:
        lang = 'en';
      break;
  }

  let printSearchDropdown = null;
  if(search.isOpen) {
    if(searchData.length > 0){
      printSearchDropdown = <SearchDropdown data={searchData} />;
    } else {
      printSearchDropdown = <SearchDropdown data={search.error[lang]} />;
    }
  }

  return (
    <section id="search" className="rex-search">
      <SearchField search={search} currentLang={currentLang}/>
      {printSearchDropdown}
    </section>
  );
}
