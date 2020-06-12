import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import heroesReducer from './reducers/heroes'

const reducer = combineReducers({
  heroesReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store;

// import { createStore } from 'redux'

// const defaultState = {
//   favorites: [],
// }

// const reducer = (state = defaultState, action) => {
//     switch (action.type) {
//         case 'addFavorite':
//           return {...state, favorites: state.favorites.concat(action.payload)}
//         default:
//           return state
//     }
// }

// const store = createStore(reducer)

// export default store