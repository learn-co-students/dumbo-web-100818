import React from 'react'

function ContestantCard(props) {
  const { contestant } = props
  const swapImage = () => {
    if (contestant.votes > 4) {
      return "https://data.whicdn.com/images/173918733/large.jpg"
    } else if (contestant.votes < -4) {
      return "https://media2.giphy.com/media/sw7KSBKL3yme4/480w_s.jpg"
        } else {
      return contestant.image
    }
  }

  return (
    <div className="card">
      <h2>Queen {contestant.name}</h2>
      <p>Votes: {contestant.votes}</p>
      <img alt={contestant.name} src={swapImage()} />
      <br />
      <button onClick={() => {
        props.increaseVote(contestant.id)
      }}>
        Vote
      </button>
      <button onClick={() => props.decreaseVote(contestant.id) }>
        Unvote
      </button>

    </div>
  )
}

export default ContestantCard
