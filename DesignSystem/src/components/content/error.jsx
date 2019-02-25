import * as React from 'react';
import { Routes } from 'domain/middleware/routes.js';
const Path = require.context('assets/img', false);

export function Error(props) {
  const errorImgSrc = Path('./imgNotFound@2x.png');
  const downloadLink = props.downloadLink;
  const downloadText = props.downloadText;

  return(
    <div>
      <div className="col-xs-6">
        <img className="img-responsive" src={errorImgSrc} />
      </div>
      <div className="col-xs-6">
        <h1>Oh no!</h1>
        <p>The page you were looking for was either moved or not found.</p>
        <h2>What do I do?</h2>
        <ul>
          <li>Check your URL, maybe it was wrong?</li>
          <li>If you’re sure this is an error, please <a href="mailto: cmo-rex@mail.rakuten.com">report it</a></li>
          <li>Go back to <a href={Routes.SITE_INDEX}>homepage</a></li>
        </ul>
      </div>
    </div>
  );
}
