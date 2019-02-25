import * as React from 'react';
import { Icon } from './icon';

function ComponentSelector(type, items) {
  let component,
    listClass;

	switch (type) {
		case 'unstyled':
			listClass = 'list-unstyled';
			break;
		case 'inline':
			listClass = 'list-inline';
			break;
		case 'ordered':
			break;
		case 'note':
		case 'englishNote':
			listClass = 'list-unstyled';
			break;
		case 'list':
			listClass = 'list';
			break;
		case 'list menu':
			listClass = 'list menu';
			break;
		case 'submenu':
			listClass = 'submenu';
			break;
		case 'list icon':
			listClass = 'list menu icon';
			break;
		case 'list icon divider':
			listClass = 'list menu icon divider';
			break;
		default:
			break;
	}

	if (type === 'ordered') {
		component = <ol>{items}</ol>;
	} else {
		component = <ul className={listClass}>{items}</ul>;
	}

	return component;
}

function CreateItems(type, list, lang, icon, iconType, defaultActive) {
  let containsItems;
  if (type === 'submenu' || type.split(' ').includes('list')) {
    containsItems = true;
  }

	return list.map(function(item, key) {
		const text = item.text;
		const list = item.list;
		const boldedPhrase = item.boldedPhrase;
		const submenu = item.submenu;
		let includeNote = null;

		if(type == 'note') {
			includeNote = '※ ';
		} else if (type == 'englishNote') {
			includeNote = '* ';
		}

		// if there is a boldedPhrase data string, bold it and follow with text.
		if( typeof boldedPhrase != 'undefined' ) {
			return(
			<li key={key}>
				<strong>{boldedPhrase}</strong>{text}
				{CreateList(type, list)}
			</li>
			);
		}

    let options;
		if (containsItems) { options = 'item'; }
		if (submenu || key.toString() === defaultActive) { options += ' active'; }

		return(
			<li key={key} className={options}>
				{includeNote}{getInnerList(containsItems, icon, iconType, text)}
				{CreateList(type, list)}
				{submenu ? CreateList("submenu", submenu) : null}
			</li>
		);
	});
}

function getInnerList(containsItems, icon, iconType, text) {
  let content;
  if (containsItems && icon) {
    content = (
      <a className="link">
        <Icon name={icon} type={iconType} />
        {text}
      </a>
    );
  } else if (containsItems) {
    content = (
      <a className="link">
        {text}
      </a>
    );
  } else { content = text; }
  return content;
}

function isValidList(list) {
	let isValid = true;

	if(typeof list === 'undefined') {
		isValid = false;
	} else {

		if( list.length <= 0 ) {
			isValid = false;
		}
	}

	return isValid;
}

function CreateList(type, list, lang, icon, iconType, defaultActive) {
	let component = null;

	if(isValidList(list)) {
		const items = CreateItems(type, list, lang, icon, iconType, defaultActive);
		component = ComponentSelector(type, items);
	}

  return component;
}

export default function MenuList(props) {
	const type = props.type;
	const list = props.list;
	const lang = props.currentLang;
	const icon = props.icon;
	const iconType = props.iconType;
	const defaultActive = props.defaultActive;

	return CreateList(type, list, lang, icon, iconType, defaultActive);
}
