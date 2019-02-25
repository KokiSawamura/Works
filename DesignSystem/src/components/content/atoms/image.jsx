import * as React from 'react';

export default function Image(props) {
  // console.log('props', props)
  // const lang = props.lang;
  const src = props.src;
  const type = props.type;
  const responsive = props.responsive;
  const option = props.option;
  // console.log('src', src)
  // console.log('lang', lang);

  let attributes = {
    src: src
  };
  attributes.src = src;

  if(responsive) {
    attributes.className = 'img-responsive';
  } else {
    attributes.className = '';
  }

  switch (type) {
    case 'rounded':
      if(responsive) {
        attributes.className += ' img-rounded';		
      } else {
        attributes.className += 'img-rounded';
      }
      break;
    case 'circle':
      if(responsive) {
          attributes.className += ' img-circle';
        } else {
          attributes.className += 'img-circle';		
        }
      break;
    case 'thumbnail':
      if(responsive) {
          attributes.className += ' img-thumbnail';		
        } else {
          attributes.className += 'img-thumbnail';		
        }
      break;
  
    default:
      break;
  }

  switch (option) {
    case 'border':
      if (responsive) {
        attributes.className += ' img-border';
      }
      break;
  
    default:
      break;
  }
  

  return (
    <img
      {...attributes}
    />
  );
}
