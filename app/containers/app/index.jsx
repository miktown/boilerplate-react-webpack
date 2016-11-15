'use strict'

import React from 'react'
import InformesWrapper from '../content/main'

class AppWrapper extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      updated: 0
    }
  }

  componentWillMount () {
    // comprobar si hay datos en localstorage y coger
    // sino... mostrar loading coger datos del servicio y guardarlos a local storage
    this.dataStateEval()
  }

  dataUpdateSetter () {
    this.setDataStored('infomes_updated', new Date().getTime())
    return this.getDataStored('infomes_updated') || 0
  }

  getDataStored (key) {
    return JSON.parse(window.localStorage.getItem(key)) || false
  }

  setDataStored (key, data) {
    window.localStorage.setItem(key, JSON.stringify(data))
  }

  removeDataStored (key) {
    window.localStorage.removeItem(key)
    return this.getDataStored(key) === 0
  }

  doActualizar () {
    this.actualizarVista(this.getDataFromWp())
  }

  actualizarVista (informesUpdated) {
    this.setState({
      updated: informesUpdated
    })
  }

  getDataFromWp () {
    // todo - get data from wordpress
    return this.dataUpdateSetter()
  }

  dataStateEval () {
    let informesUpdated = this.getDataStored('infomes_updated')
    return informesUpdated ? this.actualizarVista(informesUpdated) : this.doActualizar()
  }

  render () {
    return <InformesWrapper
      updated={this.state.updated}
      onClick={this.doActualizar.bind(this)} />
  }

  // ...
}

// AppWrapper.propTypes = {
//   autoPlay: React.PropTypes.bool.isRequired,
//   maxLoops: React.PropTypes.number.isRequired,
//   posterFrameSrc: React.PropTypes.string.isRequired,
//   videoSrc: React.PropTypes.string.isRequired,
// }

// AppWrapper.defaultProps = {
//   autoPlay: false,
//   maxLoops: 10,
// }

export default AppWrapper
