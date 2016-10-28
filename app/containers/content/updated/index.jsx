'use strict'

import React from 'react'

class UpdatedInfo extends React.Component {

  doActualizar (e) {
    e.preventDefault()
    this.props.onClick()
  }

  render () {
    return this.props.updated
      ? (<div className={'updatedInfo'}>
        <p>Datos de hace <strong>{this.props.updated}</strong><a onClick={this.doActualizar} href='!#1'>¿actualizar?</a></p>
      </div>) : null
  }
}

UpdatedInfo.propTypes = {
  updated: React.PropTypes.number,
  onClick: React.PropTypes.func.isRequired
}

export default UpdatedInfo
