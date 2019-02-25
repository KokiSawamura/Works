import * as React from 'react';
import { Icon } from '../../atoms/icon';

export default function SearchBar(props) {
  const type = props.type;
  const displayType = type ? ` ${type}` : '';
  let scope;
  const scopeText = props.scopeText ? props.scopeText : 'All';
  if (type.split(' ').includes('scope')) {
    scope = (
      <div className="search-selection">
        {scopeText}
      </div>
    );
  }

  return (
    <div className={`rex-search${displayType}`}>
      <div className="input-group">
        <div className="search-input-wrapper">
          {scope}
          <input type="text" placeholder="Search" />
        </div>
        <div className="search-btn">
          <Icon name="search" />
        </div>
      </div>
    </div>
  );
}
