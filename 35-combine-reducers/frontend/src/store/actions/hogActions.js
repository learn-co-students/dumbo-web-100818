/*---------- ACTION CREATORS ----------*/
const getHogs = (hogs) => ({ type: 'GET_HOGS', payload: hogs })

/*---------- THUNK CREATORS ----------*/

export const loadHogs = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING_HOGS', payload: true})
    return fetch('http://localhost:3000/hogs')
      .then(r => r.json())
      .then(res => dispatch(getHogs(res)))
      .catch(console.error)
  }
}
