import React from 'react'
import {render} from 'react-dom'

class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      name: props.name || 'Mike'
    }
  }

  render () {
    return (<p> Hello React y {this.state.name}!</p>)
  }
}

render(<App name='Moo' />, document.getElementById('informesappria'))
