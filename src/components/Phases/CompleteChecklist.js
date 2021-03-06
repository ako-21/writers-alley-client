import React from 'react'
// import axios from 'axios'
// import apiUrl from './../../apiConfig'
// import Form from 'react-bootstrap/Form'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import Button from 'react-bootstrap/Button'
// import ListGroup from 'react-bootstrap/ListGroup'
// import { FaCheck } from 'react-icons/fa'
import Spinning from './../Spinner/Spinner3'
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
// import Tooltip from 'react-bootstrap/Tooltip'
// import { CSSTransition } from 'react-transition-group'

class CompleteChecklist extends React.Component {
  state = {
    loading: true,
    runningIf: ''
  }
  componentDidMount () {
    setTimeout(() => { this.setState({ loading: false }) }, 1000)
  }

  // checklistComplete = () => {
  //   axios({
  //     method: 'PATCH',
  //     url: apiUrl + '/writings/' + this.props.writingId,
  //     headers: {
  //       'Authorization': `Bearer ${this.props.userToken}`
  //     },
  //     data: {
  //       checklist: {
  //         isComplete: true,
  //         writingId: this.props.writingId
  //       }
  //     }
  //   })
  //     .then(() => this.props.getWritingDetailChecklist())
  //     .then(() => this.setState({ runningIf: 'false' }))
  // }
  //
  // checklistIncomplete = () => {
  //   axios({
  //     method: 'PATCH',
  //     url: apiUrl + '/writings/' + this.props.writingId,
  //     headers: {
  //       'Authorization': `Bearer ${this.props.userToken}`
  //     },
  //     data: {
  //       checklist: {
  //         isComplete: false,
  //         writingId: this.props.writingId
  //       }
  //     }
  //   })
  //     .then(() => this.props.getWritingDetailChecklist())
  //     .then(() => this.setState({ runningIf: 'false' }))
  // }

  render () {
    let jsx
    let total = 0
    let totalComplete = 0
    let userReqsTotal = 0
    let programReqsTotal = 0
    let userCompleteTotal = 0
    let programCompleteTotal = 0

    if (this.state.loading === true) {
      jsx = (
        <Spinning></Spinning>
      )
    } else {
      if (this.props.userReqs.length > 0) {
        const tallyUserReqs = (arr) => {
          userReqsTotal = userReqsTotal + 1
        }
        const tallyUserComplete = (arr) => {
          if (arr.isChecked === true) {
            userCompleteTotal = userCompleteTotal + 1
          }
        }
        this.props.userReqs.forEach(tallyUserReqs)
        this.props.userReqs.forEach(tallyUserComplete)
      }
      if (this.props.programReqs.length > 0) {
        const tallyProgramReqs = (arr) => {
          programReqsTotal = programReqsTotal + 1
        }
        const tallyProgramComplete = (arr) => {
          if (arr.isChecked === true) {
            programCompleteTotal = programCompleteTotal + 1
          }
        }
        this.props.programReqs.forEach(tallyProgramReqs)
        this.props.programReqs.forEach(tallyProgramComplete)
      }
      if (!this.props.userReqs || this.props.userReqs.length === 0) {
        userReqsTotal = 0
        userCompleteTotal = 0
      }
      if (!this.props.programReqs || this.props.programReqs.length === 0) {
        programReqsTotal = 0
        programCompleteTotal = 0
      }
      total = programReqsTotal + userReqsTotal
      totalComplete = programCompleteTotal + userCompleteTotal
      if (this.props.runningIf === true) {
        if (programReqsTotal === 0 && userReqsTotal === 0) {
          jsx = (
            <React.Fragment>
            </React.Fragment>
          )
        } else if (!this.props.userReqs && !this.props.programReqs) {
          jsx = (
            <React.Fragment>
            </React.Fragment>
          )
        } else {
          if (totalComplete === total) {
            this.props.writingComplete()
            jsx = (
              <div className="ml-2">
                &#10004;&nbsp;&nbsp;{total}/{total} Complete
              </div>
            )
          } else {
            this.props.writingIncomplete()
            jsx = (
              <div className="ml-2">
                {totalComplete}/{total} Complete
              </div>
            )
          }
        }
      } else {
        if (programReqsTotal === 0 && userReqsTotal === 0) {
          jsx = (
            <React.Fragment>
            </React.Fragment>
          )
        } else if (!this.props.userReqs && !this.props.programReqs) {
          jsx = (
            <React.Fragment>
            </React.Fragment>
          )
        } else {
          if (totalComplete === total) {
            jsx = (
              <div className="ml-2">
                &#10004;&nbsp;&nbsp;{total}/{total} Complete
              </div>
            )
          } else {
            jsx = (
              <div className="ml-2">
                {totalComplete}/{total} Complete
              </div>
            )
          }
        }
      }
    }
    return (
      <React.Fragment>
        {jsx}
      </React.Fragment>
    )
  }
}

export default CompleteChecklist
