import * as React from 'react';
import { ColorList } from './colorList';
import { clearSearchAction } from 'domain/store/actions/searchAction';

export function ColorPicker(props) {

  const colorSelect = props.colorSelect;

  return (
    <section id="color-picker" onClick={clearSearchAction}>
      <ColorList data={colorSelect} />
    </section>
  );
}
