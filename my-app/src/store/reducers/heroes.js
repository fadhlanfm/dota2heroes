// import { ADD_TO_FAV, FETCH_HEROES } from '../actions/types'

const initialState = {
  favorites: [],
  heroes: [],
  isLoading: true
}

export default function heroesReducuer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_TO_FAV': 
      return { ...state, favorites: state.favorites.concat(action.payload) }
    case 'FETCH_HEROES':
      return { ...state, heroes: action.payload.heroes, isLoading: action.payload.isLoading }
    default: 
      return state
  }
}