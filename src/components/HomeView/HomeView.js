import React from 'react'
import HeadingOne from './HeadingOne'
import HeadingTwo from './HeadingTwo'
import EmailForm from './EmailForm'
// import backgroundImage from '../../images/home-page-bg.jpg'

class HomeView extends React.Component {
  componentDidMount () {
    document.getElementById('body').className = 'background-image'
  }

  componentWillUnmount () {
    document.getElementById('body').className = ''
  }

  render () {
    return (
      <div>
        <HeadingOne>
        </HeadingOne>
        <HeadingTwo>
        </HeadingTwo>
        <EmailForm>
        </EmailForm>
      </div>
    )
  }
}

export default HomeView
