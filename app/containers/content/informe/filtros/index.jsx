'use strict'

import React from 'react'

class Filtros extends React.Component {

  componentWillMount () {
    // this.createMenu()
  }

  render () {
    return this.props.filtros
      ? <section className={this.props.claseWrap}>filtrossss</section> : null
  }
}

Filtros.propTypes = {
  claseWrap: React.PropTypes.string,
  filtros: React.PropTypes.array,
  onChangeCallback: React.PropTypes.func
}

export default Filtros
