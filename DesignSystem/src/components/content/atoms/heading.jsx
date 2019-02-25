import * as React from 'react';

export default function Heading(props) {
  const type = props.type;
  const	text = props.text;
  const id = props.id;
  const className = props.className;
  const	secondary = props.secondary;

  let component = null;
  let showSecondary = false;
  let options = {};
  if (id) { options.id = id; }
  if (className) { options.className = className; 

  if( (secondary != '') && (typeof secondary !== 'undefined') ) {
    showSecondary = true;
  }
  }

  switch (type) {
    case 'h2':
      component = <h2{...options}>{text}</h2>;

      if(showSecondary) {
        component = <h2{...options}>{text} <small>{secondary}</small></h2>;
      }

      break;
    case 'h3':
      component = <h3{...options}>{text}</h3>;

      if(showSecondary) {
        component = <h3{...options}>{text} <small>{secondary}</small></h3>;
      }

      break;
    case 'h4':
      component = <h4{...options}>{text}</h4>;

      if(showSecondary) {
        component = <h4{...options}>{text} <small>{secondary}</small></h4>;
      }

      break;
    case 'h5':
      component = <h5{...options}>{text}</h5>;

      if(showSecondary) {
        component = <h5{...options}>{text} <small>{secondary}</small></h5>;
      }

      break;
    case 'h6':
      component = <h6{...options}>{text}</h6>;

      if(showSecondary) {
        component = <h6{...options}>{text} <small>{secondary}</small></h6>;
      }

      break;
    default:
      component = <h1{...options}>{text}</h1>;

      if(showSecondary) {
        component = <h1{...options}>{text} <small>{secondary}</small></h1>;
      }
      break;
  }

  return component;
}
