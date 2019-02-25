import * as React from 'react';
import { updateSearchTextAction, updateSearchResultsAction } from 'domain/store/actions/searchAction';


export function SearchField(props) {

  const currentLang = props.currentLang;
  let placeholder = null;

  switch (currentLang) {
    case '日本語':
        placeholder = '検索';
      break;
  
    default:
        placeholder = 'Search';
      break;
  }

  function searchText(e){
      updateSearchTextAction(e.target.value);
  }
  function searchOnClick(){
      updateSearchResultsAction();
  }
  function watchEnter(e){
    if (e.key === 'Enter') {
      searchOnClick();
    }
  }
  return (
    <div id="searchfield" className="input-group">
      <div className="search-input-wrapper">
        <input type="text" value={props.searchText} onChange={searchText} placeholder={placeholder}  onKeyPress={watchEnter} />
      </div>
      <button className="btn btn-primary search-btn" onClick={searchOnClick}>
        <i className="rex-icon search"></i>
      </button>
    </div>
  );
}
