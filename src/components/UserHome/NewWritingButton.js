import React from 'react'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom'

class NewWritingButton extends React.Component {
  render () {
    return (
      <div>
        <Button onClick={this.props.newWritingModal} variant="dark" className="mr-2"> + New Writing</Button>
      </div>
    )
  }
}

export default withRouter(NewWritingButton)
