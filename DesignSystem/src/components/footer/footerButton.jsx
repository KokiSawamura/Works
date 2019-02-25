import * as React from 'react';
import Button from '../content/atoms/button';

export function FooterButton(props) {

  const label = props.label;
  const link = props.link;
  let text = null;
  
  let buttonType = null;
  const localization = props.localization;
  const currentLang = localization.currentLang;
  
  switch (currentLang) {
    case '日本語':
        text = props.text.jp;
      break;  
    default:
        text = props.text.en;
      break;
  }

  if (label == 'Previous' || label == '前へ') {
    buttonType = 'chevron-left';
  } else {
    buttonType = 'chevron-right';
  }

  return(
    <div className="footer-button"> 
      <p>{label}</p>
      <h4 className="text-primary">{text}</h4>
      <Button href={link} type="outline" option="circle" innerIcon={buttonType} size="lg" key={text}/>
    </div>
  );
}