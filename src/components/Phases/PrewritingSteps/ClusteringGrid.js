import React from 'react'
import ClusteringInput from './ClusteringInput'
import ClusteringDiagram from './ClusteringDiagram'
import ClusteringNavigation from './ClusteringNavigation'
import ClusteringInstructions from './ClusteringInstructions'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
// import $ from 'jquery'

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

class ClusteringGrid extends React.Component {
  constructor () {
    super()
    this.state = {
      clusterData: [],
      clusternavactive: '',
      showModal: false,
      modalMessage: ''
    }
    this.navBarClick = this.navBarClick.bind(this)
    this.addInfo = this.addInfo.bind(this)
    this.onPositionChange = this.onPositionChange.bind(this)
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }
  navBarData () {
    return this.state.clusterData.map((x) => x.topic)
  }

  inputType () {
    return this.state.clusternavactive === '' ? 'topic' : 'idea'
  }

  navBarClick (event) {
    this.setState({
      clusternavactive: event.target.dataset.name
    })
  }

  addInfo (value) {
    if (this.inputType() === 'topic') {
      const exists = this.state.clusterData.find((x) => x.topic === value)
      if (!exists) {
        const clusterData = [
          ...this.state.clusterData,
          { topic: value, position: { x: 200, y: 150 }, ideas: [] }
        ]
        this.setState({ clusterData: clusterData })
        this.setState({ clusternavactive: value })
      } else {
        this.showModal('A topic with the same name already exists')
      }
    } else if (this.inputType() === 'idea') {
      const clusterData = this.state.clusterData
      const curClusterData = clusterData.find(
        (x) => x.topic === this.state.clusternavactive
      )

      const exists = curClusterData.ideas.find((x) => x.name === value)
      if (!exists) {
        clusterData
          .find((x) => x.topic === this.state.clusternavactive)
          .ideas.push({
            name: value,
            position: {
              x: getRandomNumber(0, 300),
              y: getRandomNumber(0, 300)
            }
          })
        this.setState({
          clusterData: clusterData
        })
      } else {
        this.showModal('An idea with the same name already exists')
      }
    }
  }

  onPositionChange (positionData) {
    const clusterData = this.state.clusterData
    if (positionData.type === 'topic') {
      clusterData.find((x) => x.topic === positionData.identifier).position =
        positionData.position
    } else {
      clusterData
        .find((k) => k.topic === this.state.clusternavactive)
        .ideas.find((x) => x.name === positionData.identifier).position =
        positionData.position
    }
    this.setState({
      clusterData: clusterData
    })
  }

  showModal (msg) {
    this.setState({ showModal: true, modalMessage: msg })
  }

  hideModal () {
    this.setState({ showModal: false, modalMessage: '' })
  }

  render () {
    let jsx
    if (!this.state.clusterData[0]) {
      jsx = <div>
        <h2 style={{ textAlign: 'center' }}>Clustering Worksheet</h2>
        <ClusteringInstructions {...this.state}></ClusteringInstructions>
        <ClusteringInput
          {...this.state}
          currentSelected={this.inputType()}
          addInfo={this.addInfo}
          showModal={this.showModal}
          hideModal={this.hideModal}
        ></ClusteringInput>
      </div>
    } else {
      jsx = <div>
        <h2 style={{ textAlign: 'center' }}>Clustering Worksheet</h2>
        <ClusteringInstructions {...this.state}></ClusteringInstructions>
        <ClusteringNavigation
          {...this.state}
          clusterData={this.navBarData()}
          active={this.state.clusternavactive}
          navBarClick={this.navBarClick}
        ></ClusteringNavigation>
        <ClusteringDiagram
          clusterData={this.state.clusterData.find(
            (x) => x.topic === this.state.clusternavactive
          )}
          onPositionChange={this.onPositionChange}
        ></ClusteringDiagram>
        <ClusteringInput
          {...this.state}
          currentSelected={this.inputType()}
          addInfo={this.addInfo}
          showModal={this.showModal}
          hideModal={this.hideModal}
        ></ClusteringInput>
      </div>
    }
    return (
      <Container fluid>
        {jsx}
        <Modal show={this.state.showModal} onHide={this.hideModal}>
          <Modal.Header>Message</Modal.Header>
          <Modal.Body>{this.state.modalMessage}</Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={this.hideModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    )
  }
}

export default ClusteringGrid
