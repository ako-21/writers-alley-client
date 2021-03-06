import React from 'react'
// import axios from 'axios'
// import apiUrl from './../../../apiConfig'
import WelcomeCheck from './CheckBoxes/WelcomeCheck'

class ChecklistBar extends React.Component {
  // state = {
  //   isChecked: ''
  // }
  // componentDidMount () {
  //   return axios({
  //     url: apiUrl + '/writings/' + this.props.writingId,
  //     method: 'GET',
  //     headers: {
  //       'Authorization': `Bearer ${this.props.userToken}`
  //     }
  //   })
  //     .then((res) => this.setState({ isChecked: res.data.writing.checklist.isComplete }))
  // }
  render () {
    let jsx
    if (this.props.isComplete === true) {
      jsx = (
        <div type="button" data-name="checklist" onClick={this.props.clickChangePhase}>Checklist&nbsp;<WelcomeCheck></WelcomeCheck></div>
      )
    } else {
      jsx = (
        <div type="button" data-name="checklist" onClick={this.props.clickChangePhase}>Checklist</div>
      )
    }
    return (
      <div>
        {jsx}
      </div>
    )
  }
}

export default ChecklistBar
