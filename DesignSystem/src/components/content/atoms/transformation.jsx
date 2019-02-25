import * as React from 'react';

export default function Transformation(props) {

  const type = props.type;
  const text = props.text;
  let component = null;

	switch (type) {
		case 'lowercase':
			component = <p className="text-lowercase">{text}</p>;
			break;
		case 'uppercase':
			component = <p className="text-uppercase">{text}</p>;
			break;
    case 'capitalize':
			component = <p className="text-capitalize">{text}</p>;
			break;

		default:
			component = <p>{text}</p>;
			break;
	}

	return component;
}
