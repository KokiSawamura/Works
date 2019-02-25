import * as React from 'react';
import Heading from './atoms/heading';
import Text from './atoms/text';


export function ContentHeader(props) {

  const component = props.info.component;
  const data = props.info.data;
  const target = props.info.target;
  const lang = props.lang;

  const content = data.map(function(info, key) {
    let component = null;

      switch (info.component) {
        case 'Heading':
          component = <Heading type={info.type} text={info.text[lang]} key={key}/>;
          break;
        case 'Text':
          component = <Text type={info.type} text={info.text[lang]} key={key}/>;

          break;
      }
    

    return component;
  });

    return (
      <section id="content-header">
        {content}
      </section>
    );

}
