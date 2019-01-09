import wizards from '../wizards'


const initialState = {
  wizards: wizards
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_WIZARD":
      const newArray = [...state.wizards, action.payload]
      return {...state, wizards: newArray}

    case "DELETE_WIZARD":
      const filteredArray = state.wizards.filter((wizard) => {
        return wizard !== action.payload
      })
      return {...state, wizards: filteredArray}
    default:
      return state

  }
}

export default reducer
