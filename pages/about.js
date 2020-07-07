import React from 'react'
import { withRouter } from 'next/router'
import Child from '../components/Child'
import Head from 'next/head'

class About extends React.Component {
  render() {
    return (
      <div>
        
        <div>
          <span>about page! name is : {this.props.router.query.name}</span>
          <h3>子组件</h3>
          <Child></Child>
        </div>
      </div>

    )
  }
}

export default withRouter(About)