import * as React from 'react';

export default function SearchSuggestions(props) {
  const type = props.type;
  const displayType = type? ` ${type}`: '';
  const text = props.text;
  let displaySearchRows;

  function createContentSearchRows(results) {
    let searchRows = [];

    results.map((result, key)=> {
      const section = result.section;
      const list = result.list;

      function displaySearchResults(list) {
        let searchResults = [];
        list.map((item, key) => {
          searchResults.push(<li key={key}><a><small>{item}</small></a></li>);
        });
        return searchResults;
      } 

      const searchRow = (
        <div className="search-row" key={key}>
          <div className="row">
            <div className="col-md-4 left-result">
              <small>{section}</small>
            </div>
            <div className="col-md-8 right-result">
              <ul className="list-unstyled">
                {displaySearchResults(list)}
              </ul>
            </div>
          </div>
        </div>
      );
      searchRows.push(searchRow);
    });
    return searchRows;
  }

  function createQuerySearchRows(results) {

    function createSearchRows(results) {
      let searchRowsHTML = [];
      results.map((result, key)=> {
        const text = result.displayText;
        searchRowsHTML.push(<div className="search-row" key={key}><span>{text}</span></div>);
      });
      return searchRowsHTML;
    }

    const searchRows = (
      <div className="search-rows">
        {createSearchRows(results)}
      </div>
    );
    return searchRows;
  }

  switch (type) {
    case 'query':
      displaySearchRows = createQuerySearchRows(text);
      break;
    case 'content':
      displaySearchRows = createContentSearchRows(text);
      break;
  
    default:
      break;
  }

  return(
    <div className={`search-suggestions${displayType}`}>
      {displaySearchRows}
    </div>
  );
}

