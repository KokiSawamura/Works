import * as React from 'react';
import { Pagination } from './pagination';

export function Footer(props) {
  const footer = props.footer;
  const previous = footer.previous;
  const next = footer.next;
  const localization = props.localization;
  const year = new Date().getFullYear().toString();

  return (
    <footer>
      <Pagination previous={previous} next={next} localization={localization} />
      <div className="footer-note clearfix">
        <p className="copyright extra-small">© {year} Rakuten COED Department</p>
        <p className="contact extra-small">
          Contact: <a href="mailto:card-cwd-production-web-design@mail.rakuten.com">card-cwd-production-web-design@mail.rakuten.com</a>
        </p>
      </div>
    </footer>
  );
}
