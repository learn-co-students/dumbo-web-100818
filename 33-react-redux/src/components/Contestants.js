import React from 'react'
import ContestantCard from './ContestantCard'
import {connect} from 'react-redux';

function Contestants(props) {
  // console.log(props);
  const mapContestants = () => {
    let contestantArray = Object.values(props.allContestants)
    let contestantCards = contestantArray.map(contestant => {
      return (<ContestantCard key={contestant.name}
        contestant={contestant}
      />
      )
    })
    return contestantCards
  }

  return (
    <div>
      <div className="container">
        {mapContestants()}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    allContestants: state.contestants
  }
}

export default connect(mapStateToProps)(Contestants)
