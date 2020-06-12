import { ADD_TO_FAV, REMOVE_FROM_FAV } from '../actions/types'

const initialState = {
  favHeroes: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_TO_FAV: 
      return { ...state, favHeroes: state.favHeroes.concat(action.payload) }
    case REMOVE_FROM_FAV:
        return {...state, favHeroes: state.favHeroes.filter((el) => el.id !== action.payload.id) }
    default: 
      return state
  }
}