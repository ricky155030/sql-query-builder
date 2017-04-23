import React from 'react'
import { connect } from 'react-redux'
import TopNav from './TopNav'

class AppContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <TopNav />
        <div style={{ marginTop: '40px', padding: '20px' }}>
          { this.props.children }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    example: state.example.text
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
