import React from 'react'

import './index.scss';

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="wrapper">
        {this.props.children}
      </div>
    )
  }
}