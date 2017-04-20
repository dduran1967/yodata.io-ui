import React from 'react';
import {Grid, GridColumn} from 'semantic-ui-react';

class Page extends React.Component {
  render() {
    let {children} = this.props;
    return (
      <Grid>
        <GridColumn style={{paddingBottom: '200px'}}>{children}</GridColumn>
      </Grid>
    );
  }
}

export default Page;
