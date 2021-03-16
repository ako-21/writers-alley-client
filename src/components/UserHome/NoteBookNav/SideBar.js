import React from 'react'
import { BsChevronDoubleLeft } from 'react-icons/bs'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import ChecklistBar from './ChecklistBar'
import PrewritingBar from './PrewritingBar'

class SideBar extends React.Component {
  render () {
    const jsx =
    // <Button size='sm' className='ml-1 notebooktoggleclose' variant='dark' style={{ marginTop: '5rem', fontSize: '1rem' }} onClick={this.props.handleClose}>Notebook &nbsp;<CgClose></CgClose></Button>
    <React.Fragment>
      <ListGroup className='ml-1 mb-1 notebooktoggleclose' onClick={this.props.handleClose} style={{ marginTop: '3rem' }}>
        <Button size='lg' variant='light' style={{ fontSize: '1rem', borderSize: '1rem', borderColor: 'rgba(0, 0, 0, 0.125)' }}>Notebook &nbsp;<BsChevronDoubleLeft></BsChevronDoubleLeft></Button>
      </ListGroup>
      <ListGroup className='ml-1'>
        <ListGroup.Item as="li" active={this.props.writing.phase === 'checklist'} style={{ textAlign: 'center' }}><ChecklistBar clickChangePhase={this.props.clickChangePhase} isComplete={this.props.isComplete} userToken={this.props.userToken} writingId={this.props.writingId}></ChecklistBar></ListGroup.Item>
        <ListGroup.Item as="li" active={this.props.writing.phase === 'prewriting'} style={{ textAlign: 'center' }}><PrewritingBar clickChangePhase={this.props.clickChangePhase} userToken={this.props.userToken} writingId={this.props.writingId}></PrewritingBar></ListGroup.Item>
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

export default SideBar
