import React, { Component } from 'react'
import { connect } from 'react-redux'
import Hog from './Hog'
import HogEditForm from './HogEditForm'
import { loadHogs } from '../store'

// import hogs from '../data/porkers_data'

class HogContainer extends Component {

  componentDidMount() {
    this.props.loadHogs()
  }

  render() {
    const hogsWithJogs = this.props.hogs.map(hog => <Hog key={hog.name} hog={hog} />)
    return (
      <div>
        <div className="App-logo">Joggit Hoggit</div>
        {/* <HogEditForm /> */}
        <div className="hobbitsContainer">
          {hogsWithJogs}
        </div>
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
//     hogs: state.hogs
//   }
// }


// const mapDispatchToProps = (dispatch) => {
//   return {
//     loadHogs: () => dispatch(loadHogs())
//   }
// }

// const dispatchObj = { loadHogs: loadHogs }

const mapStateToProps = ({ hogs }) => ({ hogs })
export default connect(mapStateToProps, { loadHogs } )(HogContainer)
