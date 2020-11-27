import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class NewWritingModal extends React.Component {
  render () {
    const jsx =
    // <Button size='sm' className='ml-1 notebooktoggleclose' variant='dark' style={{ marginTop: '5rem', fontSize: '1rem' }} onClick={this.props.handleClose}>Notebook &nbsp;<CgClose></CgClose></Button>
    <React.Fragment>
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>What&apos;s the title of your new writing?</Modal.Title>
        </Modal.Header>
        <Form onSubmit={this.props.onSubmit}>
          <Form.Control onChange={this.props.onChange} value={this.value} name="title" required={true} size="lg" type="input" placeholder="input title here"></Form.Control>
          <Modal.Footer>
            <Button variant="outline-dark" onClick={this.props.onClick}>
    Cancel
            </Button>
            <Button variant="dark" type="submit">
    Go&#xbb;
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </React.Fragment>
    return (
      <div>
        {jsx}
      </div>
    )
  }
}

export default NewWritingModal
