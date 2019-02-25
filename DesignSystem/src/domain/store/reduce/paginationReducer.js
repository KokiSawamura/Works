import { setIn } from 'domain/store/reduce/main';
import { Sitemap } from 'domain/middleware/sitemap';
import { Routes } from 'domain/middleware/routes';
import { root } from 'domain/middleware/routes';


export function updatePagination(state, route) {
  const sections = Sitemap.CONTENT;
  const footer = state.content.footer;
  const previous = state.content.footer.previous;
  const next = state.content.footer.next;
  const pagesArray = [];
  const currentIndex = null;
  let previousPage = null;
  let nextPage = null;

  if (route == `${root}`) {
    route = `${root}rex/overview/what-s-rex/`;
  }

  // loop over sitemap and create an ordered array of the pages
  sections.map((section, index) => {
    const list = section.list;
    list.map((listItem, index) => {
      const pages = listItem.list;
      pages.map((page, index) => {
        pagesArray.push(page);
        if (page.url == route) {
        }
      });
    });
  });

  next.active = false;
  pagesArray.map((page, index) => {
    if (route == page.url) {
      if (index == 0) {
        previous.active = false;
      }
      if (index > 0) {
        previousPage = pagesArray[index - 1];
        previous.active = true;
        previous.link = previousPage.url;
        previous.text = previousPage.text;
      }
      if (index < pagesArray.length - 1) {
        nextPage = pagesArray[index + 1];
        next.active = true;
        next.link = nextPage.url;
        next.text = nextPage.text;
      }
      if (index > pagesArray.length - 1) {
        next.active = false;
      }
    }
  });

  return setIn(state, ['content', 'footer'], footer);
}
