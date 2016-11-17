'use strict'

import React from 'react'

class Filtros extends React.Component {

  componentWillMount () {
    // this.createMenu()
  }

  render () {
    return this.props.filtros
      ? <section className='filtrosInformes'>filtrossss</section> : null
  }
}

Filtros.propTypes = {
  filtros: React.PropTypes.array,
  onChangeCallback: React.PropTypes.func
}

export default Filtros
