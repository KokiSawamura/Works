import * as React from 'react';
import { clearSearchAction } from 'domain/store/actions/searchAction';

export function SearchDropdown(props) {

  const searchResults = props.data;
  const resultsJSX = searchResults.map(function(searchResult, key) {
    let level2ResultsUl = null;
    const level2ResultsLi = searchResult.level2Result.map(function(item, key) {
      return(
        <li key={key}>
          <a href={searchResult.link} onClick={clearSearchAction}>
            <small>{item.text}</small>
          </a>
        </li>
      );
    });
    level2ResultsUl = <ul className="list-unstyled">{level2ResultsLi}</ul>;
    let dropdownPanel = null;
    if(searchResult.link !== '#'){
      dropdownPanel= (
        <span>
          <div className="col-md-4 left-result">
            <small>{searchResult.level1Result}</small>
          </div>
          <div className="col-md-8 right-result">
            {level2ResultsUl}
          </div>
        </span>
        );
    } else {
      dropdownPanel= (
        <div onClick={clearSearchAction} >
          <div className="col-md-8 left-result">
            <h3>{searchResult.level1Result}</h3>
            {level2ResultsUl}
          </div>
        </div>
        );
    }
    return(
      <div className="search-row" key={key} >
        <div className="row">
          {dropdownPanel}
        </div>
      </div>
    );
  });

  return (
    <div id="search-dropdown" className="search-suggestions content">
      {resultsJSX}
    </div>
  );
}