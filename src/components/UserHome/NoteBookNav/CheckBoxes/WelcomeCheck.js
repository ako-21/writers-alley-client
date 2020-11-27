import React from 'react'
import { RiCheckboxBlankCircleLine, RiCheckboxCircleLine } from 'react-icons/ri'
import { withRouter } from 'react-router-dom'

class WelcomeCheck extends React.Component {
  state = {
    checked: false
  }

  addCheck = () => {
    this.setState({ checked: true })
  }

  noCheck = () => {
    this.setState({ checked: false })
  }

  render () {
    let jsx
    if (this.state.checked === false) {
      jsx =
      <React.Fragment>
        <RiCheckboxBlankCircleLine onClick={this.addCheck}></RiCheckboxBlankCircleLine>
      </React.Fragment>
    } else if (this.state.checked === true) {
      jsx =
      <React.Fragment>
        <RiCheckboxCircleLine onClick={this.noCheck}></RiCheckboxCircleLine>
      </React.Fragment>
    }
    return (
      <React.Fragment>
        {jsx}
      </React.Fragment>
    )
  }
}

export default withRouter(WelcomeCheck)
