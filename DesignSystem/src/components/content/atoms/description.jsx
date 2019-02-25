import * as React from 'react';

export default function Description(props) {
	const type = props.type;
	const title = props.title;
	const text = props.text;
	let options = {};

	if(type == 'horizontal') {
		options = {
      'className': 'dl-horizontal'
    };
	}

	return (
		<dl {...options}>
			<dt>{title}</dt>
			<dd>{text}</dd>
		</dl>
	);
}
