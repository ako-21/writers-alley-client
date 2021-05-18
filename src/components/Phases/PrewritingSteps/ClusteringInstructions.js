import React from 'react'
// import ClusteringInput from './ClusteringInput'
// import ClusteringDiagram from './ClusteringDiagram'
// import ClusteringNavigation from './ClusteringNavigation'
// import Container from 'react-bootstrap/Container'
// import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/Button'
// import $ from 'jquery'

class ClusteringInstructions extends React.Component {
 state = {
 }
 render () {
   let jsx
   if (this.props.clusterData) {
     if (!this.props.clusterData[0]) {
       jsx = <p style={{ textAlign: 'center' }}>Now it&apos;s your turn! Add a topic you want to cluster. Then you will add ideas for that topic.</p>
     } else if (this.props.clusterData[0].ideas.length === 0) {
       jsx = <p style={{ textAlign: 'center ' }}>Now add some ideas. </p>
     } else {
       jsx = <div></div>
     }
   } else {
     jsx = <div></div>
   }
   return (
     <div>{jsx}</div>
   )
 }
}

export default ClusteringInstructions
