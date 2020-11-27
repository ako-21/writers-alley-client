import React from 'react'
import { BsBook, BsChevronDoubleRight } from 'react-icons/bs'
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
          <Button size='lg' id='notebooktoggle' className='ml-1 notebooktoggle' variant='dark' style={{ fontSize: '1rem' }} onMouseEnter={this.hoverButton} onMouseLeave={this.hoverButton} onClick={this.props.handleClick}>Notebook&nbsp;<BsChevronDoubleRight></BsChevronDoubleRight></Button>
    }
    return (
      <div>
        {jsx}
      </div>
    )
  }
}

export default NoteBookButton
