import React from 'react'
import { BsBook } from 'react-icons/bs'
import Button from 'react-bootstrap/Button'

class NoteBookButton extends React.Component {
  state = {
    hovered: false
  }

  hoverButton = () => {
    this.setState({ hovered: !this.state.hovered })
  }

  render () {
    let jsx
    if (this.state.hovered === false) {
      jsx =
          <Button size='lg' id='notebooktoggle' className='ml-1 notebooktoggle' variant='dark' onMouseEnter={this.hoverButton} onMouseLeave={this.hoverButton} onClick={this.props.handleClick}><BsBook></BsBook></Button>
    } else {
      jsx =
          <Button size='lg' id='notebooktoggle' className='ml-1 notebooktoggle' variant='dark' style={{ fontSize: '5%' }} onMouseEnter={this.hoverButton} onMouseLeave={this.hoverButton} onClick={this.props.handleClick}>Open Notebook &#xbb;</Button>
    }
    return (
      <div>
        {jsx}
      </div>
    )
  }
}

export default NoteBookButton
