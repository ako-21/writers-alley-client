import React from 'react'
import Button from 'react-bootstrap/Button'
// import InputGroup from 'react-bootstrap/InputGroup'
// import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

class ClusteringInput extends React.Component {
  constructor (props) {
    super(props)
    this.addClick = this.addClick.bind(this)
    this.textInput = React.createRef()
    this.closeModal = this.closeModal.bind(this)
    this.state = {
      showModal: false,
      modalMessage: ''
    }
  }

  addClick () {
    event.preventDefault()
    if (this.textInput.current.value !== '') {
      this.props.addInfo(this.textInput.current.value)
      this.textInput.current.value = ''
    } else {
      this.props.showModal('Please Enter a non empty value')
    }
  }

  closeModal () {
    this.setState({ showModal: false })
  }

  render () {
    return (
      <div>
        <Form className="cluster-form" onSubmit={this.addClick}>
          <Form.Row className="mt-1 col-12">
            <Col className="col-10">
              <Form.Control
                ref={this.textInput}
                as="input"
                required
                placeholder={this.props.clusternavactive === '' ? 'Topic' : 'Idea'} />
            </Col>
            <Col className="col-2">
              <Button type="submit" variant="dark" size="small">Add</Button>
            </Col>
          </Form.Row>
        </Form>
      </div>
    )
  }
}

export default ClusteringInput
