import {
  setIn,
} from 'domain/store/reduce/main';
import {
  Routes,
} from 'domain/middleware/routes';
import {
  flatMapDeep,
} from 'lodash';

export function updateSearchText(state, text) {
  const search = state.content.search;
  if (text.length > 0) {
    search.searchString = text;
  } else {
    search.searchString = '';
    search.isOpen = false;
  }
  return setIn(state, ['content', 'search'], search);
}
export function clearSearch(state) {
  const search = state.content.search;
  search.isOpen = false;
  search.searchString = '';
  if (document) {
    const input = document.querySelector('#searchfield input');
    input.value = '';
    input.text = '';
  }
  return setIn(state, ['content', 'search'], search);
}

// Added for TextWithAnchor Json Structure
function flattenAnchors(arr) {
  if (typeof arr !== 'string') {
    const result = arr.map((obj) => {
      if (typeof obj.text !== 'undefined') {
        return `${obj.text} `;
      }
    });
    return result.join();
  }
  return arr;
}

export function updateSearchResults(state) {
  //Get all json
  const DataSource = require.context('assets/json', true, /\.json$/);
  const search = state.content.search;
  // get search text
  const searchString = search.searchString;
  //Get Language
  const currentLang = state.content.localization.currentLang;
  let lang = null;
  switch (currentLang) {
    case '日本語':
      lang = 'jp';
      break;
    default:
      lang = 'en';
      break;
  }
  if (searchString.length > 1) {
    // If you haven't searched before store site text in state
    if (search.siteText === null) {
      const siteText = {};
      // Store all the Site text in routes as keys of an Object
      Object.keys(Routes).map((key) => {
        let contentSource;
        const routeKey = Routes[key];
        let jsonFile = `.${routeKey}.json`;
        const result = [];

        jsonFile = jsonFile.replace('/.json', '.json');
        try {
          contentSource = DataSource(jsonFile);
        } catch (e) {
          contentSource = false;
        }
        if (contentSource !== false) {
          contentSource.map((section) => {
            if (typeof section.data !== 'undefined') {
              section.data.map((component) => {
                const text = typeof component.text !== 'undefined' ? component.text : false;
                if (text !== false) {
                  result.push(text);
                }
              });
            } else {
              const text = typeof section.component.text !== 'undefined' ? section.component.text : false;
              if (text !== false) {
                result.push(text);
              }
            }
          });
          siteText[routeKey] = result;
        }
      });
      // Return sitetext to the state
      search.siteText = siteText;
    }

    // Actualy Search part
    search.searchData = [];
    Object.keys(search.siteText).map((text) => {
      // Maps over routes
      const sectionText = search.siteText[text];
      sectionText.map((subtext) => {
        // get text from json and make lower case
        const flatString = flattenAnchors(subtext[lang]);
        const haystack = flatString.toLowerCase();
        const needle = searchString.toLowerCase();
        if (haystack.indexOf(needle) > -1) {
          // look for the search term and return truncated text for dropdown
          const returnText = haystack.length > 100 ? `${flatString.substring(0, 100)}...` : flatString;
          search.searchData.push({
            link: text,
            level1Result: sectionText[0][lang],
            level2Result: [{
              text: returnText,
            }],
          });
        }
      });
    });
    // opens dropdown
    search.isOpen = true;
  }
  return setIn(state, ['content', 'search'], search);
}
