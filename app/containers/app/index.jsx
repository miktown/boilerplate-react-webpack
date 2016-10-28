'use strict'

import React from 'react'
import ContentWrapper from '../content/main'

class AppWrapper extends React.Component {

  componentWillMount () {
    // comprobar si hay datos en localstorage y coger
    // sino... mostrar loading coger datos del servicio y guardarlos a local storage
    this.dataStateEval()
  }

  dataUpdateSetter () {
    this.setDataStored('infomes_updated', new Date().getTime(), true)
    this.setState({
      updated: this.getDataStored('infomes_updated') || 0
    })
  }

  getDataStored (key) {
    return JSON.parse(window.localStorage.getItem(key)) || false
  }

  setDataStored (key, data, updated) {
    window.localStorage.setItem(key, JSON.stringify(data))
    if (!updated) this.dataUpdateSetter()
  }

  removeDataStored (key) {
    window.localStorage.removeItem(key)
    return this.getDataStored(key) === false
  }

  getDataFromWp () {
    this.dataStateEval()
  }

  doActualizar () {
    console.log('clicked!!!!')
    let self = this
    this.setState({
      updated: 0
    }, self.getDataFromWp())
  }

  dataStateEval () {
    let key = 'mike01'
    let val = ['uno', 'dos']
    this.setDataStored(key, val)
    console.log(this.getDataStored(key))
    console.log('remove', this.removeDataStored(key))
    console.log(this.getDataStored(key))
  }

  render () {
    return <ContentWrapper
      updated={this.state.updated}
      onClick={this.doActualizar} />
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

AppWrapper.state = {
  updated: 0
}

export default AppWrapper
