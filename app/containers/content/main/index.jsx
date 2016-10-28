'use strict'

import React from 'react'
import UpdatedInfo from '../updated'

class ContentWrapper extends React.Component {

  render () {
    return this.props.updated ? <UpdatedInfo {...this.props} /> : (<div>sin datos</div>)
  }
}

export default ContentWrapper
