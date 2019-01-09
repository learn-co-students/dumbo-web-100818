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

/*---------- THUNK CREATORS ----------*/
export const patchHobbit = (hobbit) => {
  return function thunk (dispatch) {
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
