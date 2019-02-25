
const search = {
  searchString: '',
  isOpen: false,
  animation: '',
  searchData: [],
  siteText: null,
  lang: {},
  error: {
    en: [{
      link: '#',
      level1Result: 'Oh no!',
      level2Result: [
        {
          text: 'Sorry nothing matches that search',
        },
      ],
    }],
    jp: [{
      link: '#',
      level1Result: '申し訳ありません',
      level2Result: [
        {
          text: ' 検索に該当するデータはありませんでした',
        },
      ],
    }],
  },
};
export const Search = search;
