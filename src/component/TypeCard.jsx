// @flow

import React from 'react';
import Card from './BasicCard';
import FieldEditable from './FieldEditable';
import { propTypes } from 'tcomb-react';
import t from 'tcomb';

const TypeCardProps = t.struct({
  header: t.maybe(t.String),
  meta: t.maybe(t.String),
  description: t.maybe(t.String),
  subject: t.Object,
  extra: t.Any,
  data: t.Any
});

export const TypeCard = (props: TypeCardProps) => {
  let url = `http://schema.org/${props.subject.label}`;
  let meta = <a href={url}>{url}</a>
  return (
    <Card
      header={props.subject.label}
      meta={meta}
      description={
        <FieldEditable
          entity={`/public/schema/${props.subject.label}`}
          attribute="description"
          value={props.subject.description}
        />
      }
      extra={props.extra}
    />
  );
};
TypeCard.propTypes = propTypes(TypeCardProps);

export default TypeCard;
