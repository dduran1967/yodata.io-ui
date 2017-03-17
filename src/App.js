import React from 'react'
import './style/index.scss'
import 'codemirror/lib/codemirror.css'
import Sidebar from './component/Sidebar'
import ViewSelector from './view'
import {getContext, withContext, compose} from 'recompose'

const App = props => (
  <div>
    <div className="d-flex flex-row">
      <Sidebar router={props.router}/>
      <div id="contentWrapper" className="w-100">
        <main id="mainContent">
          <ViewSelector />
        </main>
      </div>
    </div>
  </div>
)

const enhance = compose(
  getContext({router: React.PropTypes.object}),
  withContext({router: React.PropTypes.object}, ctx => ctx)
)

export default enhance(App)