import * as React from 'react';

export default function Abbreviation(props) {
  const textBefore = props.textBefore;
  const attrMinified = props.attrMinified;
  const attrExtended = props.attrExtended;
  const textAfter = props.textAfter;
  return (
    <div>
      <p>
        {textBefore} <abbr title={attrExtended}>{attrMinified}</abbr>{textAfter}
      </p>
    </div>
  );
}
