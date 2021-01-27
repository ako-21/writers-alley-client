import React from 'react'
import { ImCheckboxChecked } from 'react-icons/im'
import { withRouter } from 'react-router-dom'

class WelcomeCheck extends React.Component {
  render () {
    return (
      <React.Fragment>
        <ImCheckboxChecked></ImCheckboxChecked>
      </React.Fragment>
    )
  }
}

export default withRouter(WelcomeCheck)
