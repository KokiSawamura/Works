import * as React from 'react';

export default function Blockquote(props) {
  const quote = props.quote;
  const author = props.author;
  let printAuthor = null;

  if (author) {
    printAuthor = <footer><cite title="ロイター">{author}</cite></footer>;
  }

  return (
    <blockquote>
      <span className="rex-icon blockquote-left"></span>
      <p>{quote}</p>
      {printAuthor}
      <span className="rex-icon blockquote-right"></span>
    </blockquote>
  );
}
