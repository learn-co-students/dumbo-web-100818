/*---------- ACTION CREATORS ----------*/

export const selectHobbit = (hobbit) => {
  return {
    type: 'SELECT_HOBBIT',
    payload: hobbit
  }
}

export const editHobbit = (hobbit) => {
  return {
    type: 'EDIT_HOBBIT',
    payload: hobbit
  }
}


const getHobbits = (hobbits) => ({ type: 'GET_HOBBITS', payload: hobbits })

/*---------- THUNK CREATORS ----------*/
export const patchHobbit = (hobbit) => {
  return function (dispatch) {
    return fetch(`http://localhost:3000/hobbits/${hobbit.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(hobbit)
    })
      .then(r => r.json())
      .then(res => dispatch(editHobbit(res)))
      .catch(console.error)
  }
}


export const loadHobbits = () => {
  return (dispatch) => {
    return fetch('http://localhost:3000/hobbits')
      .then(r => r.json())
      .then(res => dispatch(getHobbits(res)))
  }
}
