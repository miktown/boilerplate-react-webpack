'use strict'

import React from 'react'

class Informe extends React.Component {

  render () {
    return <div id='informes_wrapper'>
        <header className="headerInformes">cabecera</header>
        <main className="viewInformes">cuerpo</main>
      </div>
  }
}

Informe.propTypes = {
  updated: React.PropTypes.number,
  onClick: React.PropTypes.func.isRequired
}

export default Informe
