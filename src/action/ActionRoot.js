import React from "react";
import { connect } from "react-redux";
import { PageHeader, ActionList, List } from "../component";
import { compose, lifecycle, withHandlers } from "recompose";
import { fetchSchema } from "../schema/schema_actions.js";
import { values } from "lodash";

const enhance = compose(
  connect((state, ownProps) => ({
    schema: state.schema,
    ...ownProps
  })),
  lifecycle({
    componentDidMount() {
      this.props.dispatch(
        fetchSchema("https://devtest.yodata.me/test/schema.nt")
      );
    }
  })
);

const ActionRoot = ({ schema }) => (
  <div>
    <PageHeader title="Actions" />
    <List listItems={schema.actions} onClick={console.log} />
  </div>
);

export default enhance(ActionRoot);
