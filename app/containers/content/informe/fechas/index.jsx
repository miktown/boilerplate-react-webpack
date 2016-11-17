'use strict'

import React from 'react'
import DatePicker from 'react-datepicker'

class Fechas extends React.Component {

  handleChangeStart (date) {
    this.props.onChangeDate(date, this.props.dateEnd)
  }
  handleChangeEnd (date) {
    this.props.onChangeDate(this.props.dateStart, date)
  }

  render () {
    return <section className='fechaInformes'>
        Desde:
      <DatePicker
        selected={this.props.dateStart}
        onChange={this.handleChangeStart.bind(this)}
        dateFormat='DD/MM/YYYY'
        locale='es-es'
        maxDate={this.props.dateEnd}
        popoverAttachment='top left'
        popoverTargetAttachment='top left'
        popoverTargetOffset='29px -75px' />

        Hasta:
      <DatePicker
        selected={this.props.dateEnd}
        onChange={this.handleChangeEnd.bind(this)}
        dateFormat='DD/MM/YYYY'
        locale='es-es'
        minDate={this.props.dateStart}
        popoverAttachment='top left'
        popoverTargetAttachment='top left'
        popoverTargetOffset='29px -75px' />
    </section>
  }
}

Fechas.propTypes = {
  onChangeDate: React.PropTypes.func
}

export default Fechas
