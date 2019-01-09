//import hogs from '../data/porkers_data'


const initialState = []

export default function (state = initialState, action) {
  switch (action.type) {

    case ('GET_HOGS'): {
      return action.payload
    }

    // case ('BLAH'): {
    //   return {...state, hogs: newHogs } BADDDDDDDDDDDD
    // }
    default: {
      return state
    }
  }
}
