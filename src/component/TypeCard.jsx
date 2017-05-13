// @flow

import React from 'react'
import Card from './BasicCard'
import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import FieldEditable from './FieldEditable'
import { propTypes } from 'tcomb-react'
import t from 'tcomb'

const TypeCardProps = t.struct({
  header: t.maybe(t.String),
  meta: t.maybe(t.String),
  description: t.maybe(t.String),
  subject: t.Object,
  extra: t.Any,
  data: t.Any,
  dispatch: t.Function,
});

export const TypeCard = (props: TypeCardProps) => {
  return (
    <Card
      header={props.subject.label}
      meta={`http://schema.org/${props.subject.label}`}
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

export default compose(
  connect((state, props) => {
    return {
      data: state.db[ props.subject && props.subject.id ],
    };
  }),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      let { subject, dispatch } = nextProps;
      if (subject && dispatch) {
        dispatch({
          type: 'DB/SUBSCRIBE',
          payload: {
            name: subject.id,
            object: `/public/schema/${subject.id}`,
          },
        });
      }
    },
  }),
)(TypeCard);
