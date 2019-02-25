import * as React from 'react';

export function Mark(props) {
  const text = props.text;
  return (
    <mark>{text}</mark>
  );
}

export function Delete(props) {
  const text = props.text;
  return (
    <del>{text}</del>
  );
}

export function Strikethrough(props) {
  const text = props.text;
  return (
    <s>{text}</s>
  );
}

export function Insert(props) {
  const text = props.text;
  return (
    <ins>{text}</ins>
  );
}

export function Underline(props) {
  const text = props.text;
  return (
    <u>{text}</u>
  );
}

export function Small(props) {
  const text = props.text;
  return (
    <small>{text}</small>
  );
}

export function Bold(props) {
  const text = props.text;
  return (
    <strong>{text}</strong>
  );
}

export function Italics(props) {
  const text = props.text;
  return (
    <em>{text}</em>
  );
}