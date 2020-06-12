export function addToFav(id) {
  return {
    type: 'ADD_TO_FAV',
    payload: { id }
  }
}

export function removeFromFav(favHeroes) {
  return {
    type: 'REMOVE_FROM_FAV',
    payload: favHeroes
  }
}