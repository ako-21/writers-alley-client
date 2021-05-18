import React from 'react'
import { Editor, EditorState } from 'draft-js'
// import axios from 'axios'
// import apiUrl from './../../apiConfig'
// import Form from 'react-bootstrap/Form'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import Button from 'react-bootstrap/Button'
// import ListGroup from 'react-bootstrap/ListGroup'
// import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
// import Tooltip from 'react-bootstrap/Tooltip'
// import Button from 'react-bootstrap/Button'
// import Figure from 'react-bootstrap/Figure'

class FreeWritingEditor extends React.Component {
  state = {
    editorState: EditorState.createEmpty()
  }

  onChange = (editorState) => {
    this.setState({ editorState })
  }

  render () {
    return (
      <Editor
        editorState={this.state.editorState}
        onChange={this.onChange}
        placeholder="cunt"
      />
    )
  }
}

export default FreeWritingEditor
