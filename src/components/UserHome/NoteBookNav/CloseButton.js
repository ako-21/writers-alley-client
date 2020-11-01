import React from 'react'
import { BsChevronDoubleLeft } from 'react-icons/bs'
import ListGroup from 'react-bootstrap/ListGroup'
import './NoteBookNav.scss'

class CloseButton extends React.Component {
  render () {
    const jsx =
    // <Button size='sm' className='ml-1 notebooktoggleclose' variant='dark' style={{ marginTop: '5rem', fontSize: '1rem' }} onClick={this.props.handleClose}>Notebook &nbsp;<CgClose></CgClose></Button>
    <React.Fragment>
      <ListGroup className='ml-1 mb-1 notebooktoggleclose' onClick={this.props.handleClose} style={{ marginTop: '5rem' }}>
        <ListGroup.Item variant='light' style={{ fontSize: '1rem' }}>Notebook &nbsp;<BsChevronDoubleLeft></BsChevronDoubleLeft></ListGroup.Item>
      </ListGroup>
      <ListGroup className='ml-1'>
        <ListGroup.Item>Item Item Item</ListGroup.Item>
        <ListGroup.Item>Item Item Item</ListGroup.Item>
        <ListGroup.Item>Item Item Item</ListGroup.Item>
        <ListGroup.Item>Item Item Item</ListGroup.Item>
        <ListGroup.Item>Item Item Item</ListGroup.Item>
        <ListGroup.Item>Item Item Item</ListGroup.Item>
        <ListGroup.Item>Item Item Item</ListGroup.Item>
        <ListGroup.Item>Item Item Item</ListGroup.Item>
        <ListGroup.Item>Item Item Item</ListGroup.Item>
      </ListGroup>
    </React.Fragment>
    return (
      <div>
        {jsx}
      </div>
    )
  }
}

export default CloseButton
