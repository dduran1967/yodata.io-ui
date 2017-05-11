// @flow

import React from "react";
import { compose, withHandlers, withProps, withState } from "recompose";
import Action from "../action/Action";
import withSchemaItem from "../schema/withSchemaItem";
import withLoader from "./Loading";
import SpringCard from "./SpringCard";

const ActionCard = compose(
  withSchemaItem(props => props.id),
  withLoader(props => {
    return !props.data;
  }),
  withState("open", "set_open", false),
  withProps(({ id, data }) => ({
    header: id,
    meta: data.description,
    json: new Action(id).mock(),
    potentialAction: {
      type: "THRUME/SEND",
      payload: {
        type: "SendAction",
        object: data,
        target: {
          contentType: "application/json",
          httpMethod: "POST",
          urlTemplate: "/u/thrume"
        }
      }
    }
  })),
  withHandlers({
    toggle: props => event => {
      let open = !props.open;
      props.set_open(open);
    }
  })
)(SpringCard);

export const ActionCards = ({ items = [] }: { items: Array<Resource> }) => (
  <div>
    {items.map(({ id }) => <ActionCard key={id} id={id} />)}
  </div>
);

export default ActionCard;
