'use strict'

import React from 'react'

class AppWrapper extends React.Component {

  setNameFromProps (text) {
    let defaultText = 'World'
    return (text && typeof text === 'string' && text.length > 0) ? text : defaultText
  }

  render () {
    return <p>Hello <strong>{this.setNameFromProps(this.props.name)}</strong></p>
  }
}

export default AppWrapper
