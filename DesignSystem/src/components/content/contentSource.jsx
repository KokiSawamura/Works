import * as React from 'react';
import { ContentHeader } from './contentHeader';
// atoms
import Abbreviation from './atoms/abbreviation';
import Address from './atoms/address';
import Alignment from './atoms/alignment';
import Blockquote from './atoms/blockquote';
import Button from './atoms/button';
import { ContextualText, ContextualBackground } from './atoms/contextual-color';
import Description from './atoms/description';
import Heading from './atoms/heading';
import Icon from './atoms/icon';
import Image from './atoms/image';
import InputGroup from './atoms/input-group';
import LabelAndCheckbox from './atoms/label-and-checkbox';
import List from './atoms/list';
import Rating from './atoms/rating';
import Select from './atoms/select';
import Span from './atoms/span';
import Table from './atoms/table';
import TextArea from './atoms/text-area';
import Transformation from './atoms/transformation';
import { Text, Link, TextWithLink, TextWithEmail } from './atoms/text';
import { Mark, Delete, Strikethrough, Insert, Underline, Small, Bold, Italics } from './atoms/inline';
import Tags from './atoms/tags';
import Labels from './atoms/labels';
import MenuList from './atoms/menu-list';
import Checkbox from './atoms/checkbox';
import RadioButton from './atoms/radioButton';
import Switch from './atoms/switch';
import Stepper from './atoms/stepper';
import Slider from './atoms/slider';
import Tooltips from './atoms/tooltips';

// molecules
import Badges from './molecules/badges';
import Alerts from './molecules/alerts';
import Tabs from './molecules/tabs';
import Dropdowns from "./molecules/dropdowns";
import Breadcrumbs from './molecules/breadcrumbs';
import SearchBar from './molecules/SearchBar/searchBar';
import SearchSuggestions from './molecules/SearchBar/searchSuggestions';
import Pagination from './molecules/pagination';
import { Track } from './molecules/Track/Track';

// site
import ColorPalette from './site/colorPalette';
import Column from './site/column';
import { Do, Dont } from './site/doDont';
import Download from './site/download';
import DownloadList from './site/downloadList';
import IconsDisplay from './site/iconsDisplay';
import IconsHero from './site/iconsHero';
import Milestone from './site/milestone';
import Note from './site/note';
import Row from './site/row';
import Container from './site/container';
import Section from './site/section';
import SquareFrame from './site/squareFrame';
import TextWithAnchor from './site/textWithAnchor';
import WorkingExample from './site/workingExample';

const Assets = require.context('assets/img', false);


// this can props be a loop based of imported compnents
export function ComponentSelector(data, lang, currentColor, key) {

  switch (data.component) {
    case 'Tooltips':
      return (
        <Tooltips text={data.text} size={data.size} styles={data.styles} key={key} />
      );

    case 'Slider':
      return (
        <Slider disabled={data.disabled} type={data.type} icon={data.icon} iconType={data.iconType} key={key} />
      );

    case 'Stepper':
      return (
        <Stepper disabled={data.disabled} selectedRight={data.selectedRight} selectedLeft={data.selectedLeft} rightIcon={data.rightIcon} leftIcon={data.leftIcon} key={key} />
      );

    case 'Switch':
      return (
        <Switch type={data.type} key={key} />
      );

    case 'RadioButton':
      return (
        <RadioButton text={data.text[lang] ? data.text[lang] : data.text} id={data.id} name={data.name} label={data.label} status={data.status} key={key} />
      );

    case 'Checkbox':
      return (
        <Checkbox text={data.text[lang] ? data.text[lang] : data.text} id={data.id} type={data.type} key={key} />
      );

    case 'Dropdowns':
      return (
        <Dropdowns text={data.text} type={data.type} subtype={data.subtype} splitButton={data.splitButton} key={key} />
      );

    case 'Badges':
      return (
        <Badges type={data.type} icon={data.icon} iconType={data.iconType} linkLabel={data.linkLabel} text={data.text} />
      );

    case 'Labels':
      return (
        <Labels text={data.text} subtext={data.subtext} type={data.type} subtype={data.subtype} size={data.size} key={key} />
      );

    case 'Alerts':
      return (
        <Alerts text={data.text[lang]} title={data.title ? data.title[lang] : null} htmlText={data.htmlText ? data.htmlText[lang] : null} type={data.type} icon={data.icon} iconType={data.iconType} omitClose={data.omitClose} key={key} />
      );

    case 'Tabs':
      return (
        <Tabs type={data.type} subType={data.subType} key={key} />
      );

    case 'Breadcrumbs':
      return (
        <Breadcrumbs text={data.text} key={key} />
      );

    case 'Tags':
      return (
        <Tags text={data.text} type={data.type} icon={data.icon} key={key} />
      );

    case 'SearchBar':
      return (
        <SearchBar type={data.type} key={key} />
      );

    case 'SearchSuggestions':
      return (
        <SearchSuggestions type={data.type} text={data.text[lang]} key={key} />
      );

    case 'Rating':
      return (
        <Rating type={data.type} key={key} />
      );

    case 'Pagination':
      return (
        <Pagination type={data.type} subtype={data.subtype} withText={data.withText} prevText={data.prevText} nextText={data.nextText} activeNo={data.activeNo} total={data.total} key={key} />
      );

    case 'Track':
      return (
        <Track steps={data.steps} mobile={data.mobile} lang={lang} />
      );

    case 'MenuList':
      return (
        <MenuList type={data.type} list={data.list[lang]} currentLang={lang} icon={data.icon} iconType={data.iconType} defaultActive={data.defaultActive} key={key} />
      );

    case 'ColorPalette':
      return (
        <ColorPalette colors={data.colors} currentColor={currentColor} type={data.type} key={key} />
      );

    case 'TextWithAnchor':
      return (
        <TextWithAnchor text={data.text} style={data.style} lang={lang} key={key} />
      );

    case 'IconsDisplay':
      return (
        <IconsDisplay iconList={data.iconList} key={key} />
      );

    case 'IconsHero':
      return (
        <IconsHero iconList={data.iconList} key={key} />
      );

    case 'Row':
      return (
        <Row info={data} cols={data.cols} type={data.type} lang={lang} currentColor={currentColor} className={data.className} key={key} />
      );

    case 'Column':
      return (
        <Column info={data} cols={data.cols} type={data.type} lang={lang} className={data.className} currentColor={currentColor} key={key} />
      );

    case 'Container':
      return (
        <Container info={data} className={data.className} lang={lang} currentColor={currentColor} key={key} />
      );

    case 'Section':
      return (
        <Section info={data} className={data.className} lang={lang} currentColor={currentColor} key={key} />
      );

    case 'ContentHeader':
      return (
        <ContentHeader info={data} lang={lang} key={key} />
      );

    case 'WorkingExample':

      return (
        <WorkingExample info={data} lang={lang} key={key} />
      );

    case 'SquareFrame':

      return (
        <SquareFrame info={data} lang={lang} key={key} />
      );

    case 'Milestone':

      return (
        <Milestone complete={data.complete} period={data.period[lang]} month={data.month[lang]} title={data.title[lang]} list={data.list[lang]} key={key} />
      );

    case 'Heading':
      if (typeof data.secondary === 'undefined') {
        data.secondary = {};
      }
      return (
        <Heading type={data.type} text={data.text[lang]} id={data.id} secondary={data.secondary[lang]} key={key} />
      );

    case 'Text':
      return (
        <Text type={data.type} text={data.text[lang]} key={key} />
      );

    case 'Link':

      return (
        <Link url={data.url} text={data.text[lang]} key={key} />
      );

    case 'TextWithLink':

      return (
        <TextWithLink url={data.url} target={data.target} style={data.style} text={data.text[lang]} lang={lang} linkedText={data.linkedText[lang]} key={key} />
      );

    case 'TextWithEmail':

      return (
        <TextWithEmail text={data.text[lang]} address={data.address} key={key} />
      );

    case 'Span':

      return (
        <Span text={data.text[lang]} key={key} />
      );

    case 'List':

      return (
        <List type={data.type} list={data.list[lang]} currentLang={lang} key={key} />
      );

    case 'Description':

      return (
        <Description type={data.type} title={data.title[lang]} text={data.text[lang]} key={key} />
      );

    case 'Image':
      const src = Assets('./' + data.src[lang]);
      return (
        <Image responsive={data.responsive} src={src} type={data.type} option={data.option} key={key} />
      );

    case 'Note':

      return (
        <Note text={data.text[lang]} lang={lang} key={key} />
      );

    case 'Mark':

      return (
        <Mark text={data.text[lang]} key={key} />
      );

    case 'Delete':

      return (
        <Delete text={data.text[lang]} key={key} />
      );

    case 'Strikethrough':

      return (
        <Strikethrough text={data.text[lang]} key={key} />
      );

    case 'Insert':

      return (
        <Insert text={data.text[lang]} key={key} />
      );

    case 'Underline':

      return (
        <Underline text={data.text[lang]} key={key} />
      );

    case 'Small':

      return (
        <Small text={data.text[lang]} key={key} />
      );

    case 'Bold':

      return (
        <Bold text={data.text[lang]} key={key} />
      );

    case 'Italics':

      return (
        <Italics text={data.text[lang]} key={key} />
      );

    case 'Alignment':

      return (
        <Alignment text={data.text[lang]} type={data.type} key={key} />
      );

    case 'Transformation':

      return (
        <Transformation text={data.text[lang]} type={data.type} key={key} />
      );

    case 'Abbreviation':

      return (
        <Abbreviation textBefore={data.textBefore[lang]} attrMinified={data.attrMinified[lang]} attrExtended={data.attrExtended[lang]} textAfter={data.textAfter[lang]} type={data.type} key={key} />
      );

    case 'Address':

      return (
        <Address title={data.title[lang]} address={data.address[lang]} email={data.email} key={key} />
      );

    case 'Blockquote':

      return (
        <Blockquote quote={data.quote[lang]} author={data.author[lang]} key={key} />
      );

    case 'Table':

      return (
        <Table headings={data.headings[lang]} rows={data.rows[lang]} type={data.type} key={key} />
      );

    case 'InputGroup':

      return (
        <InputGroup type={data.type} state={data.state} helperText={data.helperText[lang]} placeHolder={data.placeHolder[lang]} label={data.label[lang]} key={key} />
      );

    case 'LabelAndCheckbox':

      return (
        <LabelAndCheckbox type={data.type} name={data.name} labels={data.labels[lang]} key={key} />
      );

    case 'Select':

      return (
        <Select type={data.type} name={data.name} options={data.options[lang]} type={data.type} state={data.state} key={key} />
      );

    case 'TextArea':

      return (
        <TextArea type={data.type} helperText={data.helperText[lang]} placeHolder={data.placeHolder[lang]} label={data.label[lang]} state={data.state} key={key} />
      );

    case 'Button':

      return (
        <Button text={data.text[lang]} type={data.type} size={data.size} optionalState={data.optionalState} option={data.option} innerIcon={data.innerIcon} disabled={data.disabled} icon={data.icon} iconPositionLeft={data.iconPositionLeft} key={key} />
      );

    case 'Icon':

      return (
        <Icon type={data.type} name={data.name} small={data.small} key={key} />
      );

    case 'Download':

      return (
        <Download name={data.name} url={data.url[lang] ? data.url[lang] : data.url} date={data.date} type={data.type} icon={data.icon} size={data.size} key={key} />
      );

    case 'DownloadList':

      return (
        <DownloadList data={data.data} lang={lang} key={key} />
      );


    case 'ContextualText':

      return (
        <ContextualText context={data.context} text={data.text[lang]} key={key} />
      );

    case 'ContextualBackground':

      return (
        <ContextualBackground context={data.context} text={data.text[lang]} key={key} />
      );

    case 'Do':

      return (
        <Do src={data.src} text={data.text[lang]} key={key} />
      );

    case 'Dont':

      return (
        <Dont src={data.src} text={data.text[lang]} key={key} />
      );

    default:

      return (
        <div className="text-danger" key={key}>Error, the <strong>{data.component}</strong> component doesn't exist</div>
      );

  }
}

export function getContentSource(contentSource, lang, currentColor) {

  return contentSource.map(function (data, key) {
    return ComponentSelector(data, lang, currentColor, key);
  });
}
