import * as React from 'react';

export default function Alignment(props) {

  const type = props.type;
  const text = props.text;
	let component = null;

	switch (type) {
		case 'left':
			component = <p className="text-left">{text}</p>;
			break;
		case 'center':
			component = <p className="text-center">{text}</p>;
			break;
    case 'right':
			component = <p className="text-right">{text}</p>;
			break;
    case 'justify':
			component = <p className="text-justify">{text}</p>;
			break;
    case 'nowrap':
			component = <p className="text-nowrap">{text}</p>;
			break;

		default:
			component = <p className="text-left">{text}</p>;
			break;
	}

	return component;
}