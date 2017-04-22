// @flow

import React from 'react'
import {connect} from 'react-redux'
import {compose, lifecycle} from 'recompose'
import {fetchUrl} from '../db/dbActions'
import {DB_ORIGIN} from '../db/db-config'
import CodeEditor from './CodeEditor'
import {withLoader} from './Loading'
import stringify from './stringify'


export function DataBrowserView({data = {}}) {
  return (
    <div>
      <CodeEditor value={stringify(data)}/>
    </div>
  );
}

const mapStateToProps = state => {
  let origin = DB_ORIGIN; //todo: put origin in state
  let {user} = state;
  let ready = (user && user.currentUser && user.currentUser.uid);
  let path, dataPath, dataUrl, data, uid;
  if (ready) {
    uid = user.currentUser.uid;
    path = state.router.route.path;
    dataPath = path.replace("u", uid);
    dataUrl = origin + dataPath;
    data = state.db[dataPath];
    return {
      isLoading: false,
      uid,
      path,
      dataPath,
      dataUrl,
      data
    }
  } else {
    return {isLoading: true}
  }
};

const DataBrowserContainer = compose(
  connect(mapStateToProps),
  withLoader(props => props.isLoading),
  lifecycle({
    componentDidMount() {
      let {dispatch, dataPath, isLoading} = this.props;
      if (isLoading) {
        console.error('DID MOUNT CALLED WHILE LOADING!!!!')
      } else {
        dispatch(fetchUrl(dataPath));
      }
    }
  })
);

export default DataBrowserContainer(DataBrowserView);
