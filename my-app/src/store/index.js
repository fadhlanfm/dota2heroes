// import { createStore, combineReducers } from 'redux';
// import favHeroesReducer from './reducers/favHeroes'

// const reducer = combineReducers({
//   favHeroesReducer
// })

// const store = createStore(reducer);

// export default store;

import { createStore } from 'redux'

const defaultState = {
  favorites: [],
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'addFavorite':
          return {...state, favorites: state.favorites.concat(action.payload)}
        default:
          return state
    }
}

const store = createStore(reducer)

export default store