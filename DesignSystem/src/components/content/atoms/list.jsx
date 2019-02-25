import * as React from 'react';

function ComponentSelector(type, items) {
	let component = null;

	switch (type) {
		case 'unstyled':
			component = <ul className="list-unstyled">{items}</ul>;
			break;
		case 'inline':
			component = <ul className="list-inline">{items}</ul>;
			break;
		case 'ordered':
			component = <ol>{items}</ol>;
			break;
		case 'note':
		case 'englishNote':
			component = <ul className="list-unstyled">{items}</ul>;
			break;

		default:
			component = <ul>{items}</ul>;
			break;
	}

	return component;
}

function CreateItems(type, list, lang) {

	return list.map(function(item, key) {

		const text = item.text;
		const htmlText = item.htmlText;
		const list = item.list;
		const boldedPhrase = item.boldedPhrase;
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

		const message = htmlText ? (<span dangerouslySetInnerHTML={{ __html: htmlText }} />) : text;

		return(
			<li key={key}>
				{includeNote}{message}
				{CreateList(type, list)}
			</li>
		);
	});
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

function CreateList(type, list, lang) {
	let component = null;

	if(isValidList(list)) {
		const items = CreateItems(type, list, lang);
		component = ComponentSelector(type, items);
	}

  return component;
}

export default function List(props) {
	const type = props.type;
	const list = props.list;
	const lang = props.currentLang;

	return CreateList(type, list, lang);
}
