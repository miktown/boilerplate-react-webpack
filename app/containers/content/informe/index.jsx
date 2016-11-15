'use strict'

import React from 'react'
import Selector from './selector'

let datos = {
  infromesMenu: [
    {
      name: 'Profesores',
      selected: false
    },
    {
      name: 'Alumnos',
      selected: true
    },
    {
      name: 'Pedidos',
      selected: false
    },
    {
      name: 'Bajas',
      selected: false
    },
    {
      name: 'Altas',
      selected: false
    }
  ],
  informesZonas: [
    {
      name: 'Pozuelo',
      selected: false
    },
    {
      name: 'Majadahonda',
      selected: true
    },
    {
      name: 'Madrid',
      selected: false
    },
    {
      name: 'Toledo',
      selected: false
    }
  ]

}

class Informe extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      dataWork: datos
    }
  }

  selectorHandle (seleccionado, target) {
    let temp = this.state.dataWork
    this.state.dataWork[target].map((item) => {
      item.selected = item.name === seleccionado
    })
    this.setState({
      dataWork: temp
    })
  }

  selectorInformeHandle (seleccionado) {
    this.selectorHandle(seleccionado, 'infromesMenu')
  }

  selectorZonaHandle (seleccionado) {
    this.selectorHandle(seleccionado, 'informesZonas')
  }

  render () {
    return <div id='informes_wrapper'>
      <header className='headerInformes'>
        <Selector
          claseWrap='informeZonas'
          datosMenu={this.state.dataWork.informesZonas}
          onClickCallback={this.selectorZonaHandle.bind(this)} />
        <Selector
          claseWrap='informeInformes'
          datosMenu={this.state.dataWork.infromesMenu}
          onClickCallback={this.selectorInformeHandle.bind(this)} />
        <section className='filtrosInformes'>filtros</section>
        <section className='fechaInformes'>fecha</section>
      </header>
      <main className='viewInformes'>cuerpo</main>
    </div>
  }
}

Informe.propTypes = {
  updated: React.PropTypes.number,
  onClick: React.PropTypes.func.isRequired
}

export default Informe
