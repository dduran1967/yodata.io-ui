import React from 'react';
import {Grid, GridColumn} from 'semantic-ui-react';

class Page extends React.Component {
  render() {
    let {children, ...rest} = this.props;
    return (
      <Grid>
        <GridColumn>{children}</GridColumn>
      </Grid>
    );
  }
}

export default Page;
