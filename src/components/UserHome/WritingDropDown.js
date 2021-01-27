import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { Switch, Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from './../../apiConfig'

class WritingDropDown extends React.Component {
  state = {
    writings: null,
    selected: false,
    id: null
  }

  getRequest = () => {
    axios({
      url: `${apiUrl}/writings`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      }
    })
      .then(response => {
        this.setState({
          writings: response.data.writings
        })
      })
  }

  // toFalse = () => {
  //   this.setState({ selected: false })
  // }

  componentDidMount () {
    axios({
      url: `${apiUrl}/writings`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      }
    })
      .then(response => {
        this.setState({
          writings: response.data.writings
        })
      })
      .catch(error => {
      // handle error
        console.log(error)
      })
  }

  shouldComponentUpdate () {
    return true
  }
  componentDidUpdate (prevProps) {
    if (this.props.added !== prevProps.added) {
      this.getRequest()
    }
  }

  render () {
    if (this.state.selected === true) {
      if (this.props.match.params.id === this.state.id) {
        return <div>
          <DropdownButton variant="outline-dark" title="writings">
            {this.state.writings.map(writing => (
              <Dropdown.Item onClick={event => { this.setState({ selected: true, id: writing._id }) }} key={writing._id} id={writing._id} onMouseEnter={() => { document.getElementById(writing._id).style.backgroundColor = '#343a40'; document.getElementById(writing._id).style.color = 'white' }} onMouseLeave={() => { document.getElementById(writing._id).style.backgroundColor = 'transparent'; document.getElementById(writing._id).style.color = 'black' }}>{writing.title}</Dropdown.Item>
            ))}
          </DropdownButton>
        </div>
      } else {
        return <Switch><Redirect to={{ pathname: '/writings/' + this.state.id, props: { user: this.props.user } }} /></Switch>
      }
    }
    let jsx
    if (this.state.writings === null) {
      jsx =
      <div>
      </div>
    } else if (this.state.writings.length === 0) {
      jsx =
      <div>
      </div>
    } else {
      jsx =
      <div>
        <DropdownButton variant="outline-dark" title="writings">
          {this.state.writings.map(writing => (
            <Dropdown.Item onClick={event => { this.setState({ selected: true, id: writing._id }) }} key={writing._id} id={writing._id} onMouseEnter={() => { document.getElementById(writing._id).style.backgroundColor = '#343a40'; document.getElementById(writing._id).style.color = 'white' }} onMouseLeave={() => { document.getElementById(writing._id).style.backgroundColor = 'transparent'; document.getElementById(writing._id).style.color = 'black' }}>{writing.title}</Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
    }
    return (
      <div>
        {jsx}
      </div>
    )
  }
}

export default withRouter(WritingDropDown)
