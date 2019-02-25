import { getVisibleSectionCookie } from 'domain/middleware/cookie';

const TabsData = {
  enabled: true,
  list: [
    {
      text: {
        en: 'Designer',
        jp: 'デザイナー',
      },
      active: false,
      cookieValue: 'designer',
    },
    {
      text: {
        en: 'Developer',
        jp: 'デベロッパー',
      },
      active: true,
      cookieValue: 'developer',
    },
  ],
};

const visibleSection = getVisibleSectionCookie();

if (visibleSection == 'designer') {
  TabsData.list[0].active = true;
  TabsData.list[1].active = false;
} else if (visibleSection == 'developer') {
  TabsData.list[0].active = false;
  TabsData.list[1].active = true;
}

export const Tabs = TabsData;
