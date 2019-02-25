import * as React from 'react';

export default function Address(props) {
  const title = props.title;
  const addressLines = props.address;
  const email = props.email;

  const printAddress = addressLines.map(function(line, key) {
      return(
        <div key={key}>
          <span>{line}</span><br />
        </div>
      );
    }
  );

  return (
    <div>
      <address>
        <strong>{title}</strong>
        {printAddress}
      </address>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  );
}
