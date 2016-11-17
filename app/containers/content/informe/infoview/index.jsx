'use strict'

import React from 'react'

class InformeView extends React.Component {

  render () {
    return <main className='viewInformes'>cuerpo</main>
  }
}

InformeView.propTypes = {
  claseWrap: React.PropTypes.string,
  datosMenu: React.PropTypes.array,
  onChangeCallback: React.PropTypes.func
}

export default InformeView
