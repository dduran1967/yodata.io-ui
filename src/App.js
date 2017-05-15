// @flow
import React from 'react'
import './style/App.css'
import Layout from './component/Layout'
import ViewSelector from './router/ViewSelector'

class App extends React.Component {
  render() {
    return (
      <Layout>
        <ViewSelector />
      </Layout>
    )
  }
}

export default App
