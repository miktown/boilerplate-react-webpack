'use strict'

import React from 'react'
import {render} from 'react-dom'
import AppWrapper from './containers/app'

class App extends React.Component {

  render () {
    return <AppWrapper name={'Moo'} />
  }
}

render(<App />, document.getElementById('informesappria'))
