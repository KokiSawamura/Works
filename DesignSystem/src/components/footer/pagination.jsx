import * as React from 'react';
import { FooterButton } from './footerButton';

export function Pagination(props) {
  const previous = props.previous;
  const previousActive = previous.active;
  const previousText = previous.text;
  const previousLink = previous.link;
  const next = props.next
  const nextActive = next.active;
  const nextText = next.text;
  const nextLink = next.link;
  const localization = props.localization;
  const currentLang = localization.currentLang;
  
  let printPrevious = null;
  let printNext = null;
  let label = '';



  if (previousActive) {
    let label = null;
    switch (currentLang) {
      case '日本語':
          label = '前へ';
        break;
      default:
          label = 'Previous';
        break;
    }
    printPrevious = <FooterButton text={previousText} label={label} link={previousLink} localization={localization}/>
  }

  if (nextActive) {
    let label = null;
    switch (currentLang) {
      case '日本語':
          label = '次へ';
        break;
      default:
          label = 'Next';
        break;
    }
    printNext = <FooterButton text={nextText} label={label} link={nextLink} localization={localization}/>
  }

  return (
    <section id="pagination">
      <div className="row">
        <div className="col-xs-6">
          {printPrevious}
        </div>
        <div className="col-xs-6">
          {printNext}
        </div>
      </div>
    </section>
  );
}
