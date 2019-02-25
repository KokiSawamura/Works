import { Sitemap } from 'domain/middleware/sitemap';

let Label = [],
  Menu = [],
  SubMenu = [],
  active = false,
  isOpen = false,
  isSelected = false,
  id = 0,
  label = '',
  sections = '',
  sectionTitle = '',
  contents = 'contents',
  title = '',
  url = '';

for (const i in Sitemap.CONTENT) {
  label = Sitemap.CONTENT[i].text;
  sections = Sitemap.CONTENT[i].list;

  Menu = [];

  for (const k in sections) {
    sectionTitle = sections[k].text;
    contents = sections[k].list;

    SubMenu = [];

    for (const x in contents) {
      title = contents[x].text;
      url = contents[x].url;

      SubMenu.push(
        {
          id,
          text: title,
          isSelected,
          link: url,
        },
			);

      id++;
    }

    Menu.push(
      {
        id,
        text: sectionTitle,
        active,
        isOpen,
        subMenu: SubMenu,
      },
		);

    id++;
  }

  Label.push(
    {
      id,
      text: label,
      menu: Menu,
    },
	);

  id++;
}

export const MenuList = Label;
