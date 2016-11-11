'use strict'

import React from 'react'
import UpdatedInfo from '../updated'
import Informe from '../informe'

class InformesWrapper extends React.Component {

  render () {
    return <div>
      <Informe
        {...this.props} />
      <UpdatedInfo
        {...this.props} />
    </div>
  }
}

export default InformesWrapper
