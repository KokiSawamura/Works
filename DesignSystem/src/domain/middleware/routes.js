export const root = '/design/';
// Rex
export const OVERVIEW = `${root}rex/overview`;
export const VISUAL_CONCEPTS = `${root}rex/visual-concepts`;
export const LOGO = `${root}rex/brand-and-logo-guidelines`;
// Rkit
export const RKIT = `${root}rkit/overview`;
export const REDIRECTS = `${root}rkit/redirects`;
export const BANNER = `${root}rkit/banner`;
export const SPACING = `${root}rkit/spacing`;
export const SEPARATOR = `${root}rkit/separator`;
export const CARDFACE = `${root}rkit/cardface`;
export const MODAL = `${root}rkit/modal`;
export const CARD_ICONS = `${root}rkit/icons`;
// The basics
export const TYPOGRAPHY = `${root}the-basics/typography`;
export const GRID = `${root}the-basics/grid`;
export const TABLES = `${root}the-basics/tables`;
export const FORMS = `${root}the-basics/forms`;
export const BUTTONS = `${root}the-basics/buttons`;
export const IMAGES = `${root}the-basics/images`;
export const COLORS = `${root}the-basics/colors`;
export const MOTION = `${root}the-basics/motion`;
export const ICONS = `${root}the-basics/icons`;
export const ICON_REGULATIONS = `${root}the-basics/icons/regulations`;
// Components
export const ALERTS = `${root}components/alerts`;
export const BREADCRUMBS = `${root}components/breadcrumbs`;
export const CAROUSELS = `${root}components/carousels`;
export const CONTAINERS = `${root}components/containers`;
export const INDICATORS = `${root}components/indicators`;
export const LIST_VIEWS = `${root}components/list_views`;
export const PAGINATION = `${root}components/pagination`;
export const RATINGS = `${root}components/ratings`;
export const SEARCH = `${root}components/search`;
export const TABS = `${root}components/tabs`;
export const TAGS = `${root}components/tags`;
export const TRACK = `${root}components/track`;
// Resources
export const DOWNLOADS = `${root}downloads`;
export const SITE_INDEX = `${root}`;
export const SITE_ROOT = `${root}`;

export const Routes = {
  // Site
  SITE_INDEX,
  SITE_ROOT,

  //
  // ReX
  //

  // ReX - Overview
  WHATS_REX: `${OVERVIEW}/what-s-rex/`,
  UX_METAPHOR: `${OVERVIEW}/ux-metaphor/`,
  UX_VALUES: `${OVERVIEW}/ux-values/`,
  DESIGN_PHIL: `${OVERVIEW}/design-philosophy/`,
  ROADMAP: `${OVERVIEW}/roadmap/`,

  // ReX - Visual concepts
  COLOR: `${VISUAL_CONCEPTS}/color/`,
  SHAPE: `${VISUAL_CONCEPTS}/shape/`,
  MOTION: `${VISUAL_CONCEPTS}/motion/`,

  // ReX - Brand and logo guideline
  BRAND_OVERVIEW: `${LOGO}/overview/`,
  CORPORATE_BRAND: `${LOGO}/corporate-brand/`,
  SUB_BRAND: `${LOGO}/sub-brand/`,
  SYMBOL: `${LOGO}/symbol/`,

  //
  // R-kit
  //
  WHATS_RKIT: `${RKIT}/what-s-rkit/`,
  REDIRECTS: `${REDIRECTS}/regulations/`,
  BANNER: `${BANNER}/regulations/`,
  SPACING: `${SPACING}/overview/`,
  SEPARATOR: `${SEPARATOR}/overview/`,
  CARDFACE: `${CARDFACE}/regulations/`,
  MODAL: `${MODAL}/overview/`,
  CARD_ICONS: `${CARD_ICONS}/usage/`,

  //
  // The basics
  //

  // The basics - Typography
  TYPOGRAPHY: `${TYPOGRAPHY}/overview/`,
  HEADINGS: `${TYPOGRAPHY}/headings/`,
  DISPLAY: `${TYPOGRAPHY}/display/`,
  BODY_TEXT: `${TYPOGRAPHY}/body-text/`,
  TEXT_FORMAT: `${TYPOGRAPHY}/text-formatting/`,
  BLOCKQUOTES: `${TYPOGRAPHY}/blockquotes/`,
  LISTS: `${TYPOGRAPHY}/lists/`,

  // The basics - Grid
  GRID: `${GRID}/overview/`,
  BREAK_POINTS: `${GRID}/break-points/`,

  // The basics - Tables
  TABLES: `${TABLES}/overview/`,
  TABLES_EXAMPLE: `${TABLES}/basic-example/`,
  STRIPED_ROWS: `${TABLES}/striped-rows/`,
  BORDERED_TABLE: `${TABLES}/bordered-table/`,
  CONDENSED_TABLE: `${TABLES}/condensed-table/`,
  TABLES_STATE: `${TABLES}/states/`,

  // The basics - Forms
  FORMS: `${FORMS}/overview/`,
  VERTICAL_FORM: `${FORMS}/vertical-forms/`,
  INLINE_FORM: `${FORMS}/inline-forms/`,
  FORMS_ELEMENTS: `${FORMS}/form-elements/`,
  FORMS_STATES_AND_VALIDATION: `${FORMS}/forms-states-and-validation/`,
  FORMS_CONDITIONAL_FIELDS: `${FORMS}/conditional-fields/`,
  FORMS_COMMON_PATTERNS: `${FORMS}/common-patterns/`,

  // The basics - Buttons
  BUTTONS: `${BUTTONS}/types/`,
  BUTTONS_OPTIONS: `${BUTTONS}/options/`,
  BUTTONS_STATES: `${BUTTONS}/states/`,
  BUTTONS_BACK_TO_TOP_BUTTON: `${BUTTONS}/back-to-top-button/`,

  // The basics - Images
  IMAGES: `${IMAGES}/image-shapes/`,
  RESPONSIVE_IMAGES: `${IMAGES}/responsive-images/`,

  // The basics - Colors
  COLORS: `${COLORS}/overview/`,
  CONTEXTUAL_COLORS: `${COLORS}/contextual-colors/`,
  SWATCHES: `${COLORS}/swatches/`,

  // The basics - Motion
  REX_MOTION: `${MOTION}/rex-motion/`,
  DURATION_EASING: `${MOTION}/duration-and-easing/`,
  TRANSFORMATION: `${MOTION}/transformation/`,

  // The basics - Icons
  ICONS: `${ICONS}/overview/`,
  ICON_REGULATIONS: `${ICONS}/regulations/`,
  ICON_USAGE: `${ICONS}/usage/`,
  ICON_VS_ILLUSTRATION: `${ICONS}/icon_vs_illustration/`,

  //
  // Components
  //

  // Components - Alerts
  ALERTS: `${ALERTS}/overview/`,
  ALERTS_TYPES: `${ALERTS}/types/`,

  // Components - BREADCRUMBS
  BREADCRUMBS: `${BREADCRUMBS}/overview/`,

  // Components - Carousels
  CAROUSELS: `${CAROUSELS}/overview/`,
  CAROUSELS_ELEMENTS: `${CAROUSELS}/elements/`,
  MARKETING_CAROUSELS: `${CAROUSELS}/marketing/`,
  CAROUSELS_OVERFLOWS: `${CAROUSELS}/overflows/`,
  CAROUSELS_IMAGE: `${CAROUSELS}/image/`,

  // Components - Containers
  CONTAINERS_PANELS: `${CONTAINERS}/panels/`,
  CONTAINERS_CARDS: `${CONTAINERS}/cards/`,

  // Components - Indicators
  INDICATORS: `${INDICATORS}/overview/`,
  INDICATORS_BADGES: `${INDICATORS}/badges/`,
  INDICATORS_LABELS: `${INDICATORS}/labels/`,
  INDICATORS_PROMOTION_STICKERS: `${INDICATORS}/promotion-stickers/`,

  // Components - List views
  LIST_VIEWS: `${LIST_VIEWS}/overview/`,
  LIST_VIEWS_CONTENT_LISTS: `${LIST_VIEWS}/content-lists/`,
  LIST_VIEWS_MENU_LISTS: `${LIST_VIEWS}/menu-lists/`,

  // Components - Pagination
  PAGINATION: `${PAGINATION}/overview/`,
  PAGINATION_ALTERNATIVES: `${PAGINATION}/alternatives/`,
  PAGINATION_PREVIOUS_NEXT_NAVIGATION: `${PAGINATION}/previous-next-navigation/`,

  // Components - Ratings
  RATINGS: `${RATINGS}/overview/`,

  // Components - Search
  SEARCH: `${SEARCH}/overview/`,
  SEARCH_TYPES: `${SEARCH}/types/`,
  SEARCH_SUGGESTIONS: `${SEARCH}/suggestions/`,

  // Components - Tabs
  TABS: `${TABS}/overview/`,

  // Components - Tags
  TAGS: `${TAGS}/overview/`,

  // Components - Track
  TRACK: `${TRACK}/overview/`,
  TRACK_ELEMENTS: `${TRACK}/elements/`,

  //
  // Downloads
  //
  DOWNLOADS_COLORS: `${DOWNLOADS}/colors/`,
  DOWNLOADS_LOGOS: `${DOWNLOADS}/logos/`,
  DOWNLOADS_FONTS: `${DOWNLOADS}/fonts/`,
  DOWNLOADS_SKETCH: `${DOWNLOADS}/sketch/`,
  DOWNLOADS_ICONS: `${DOWNLOADS}/icons/`,
};
