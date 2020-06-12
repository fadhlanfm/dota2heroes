export function addFavorite(hero) {
  return({
    type: 'ADD_TO_FAV',
    payload: [hero]
  })
}

export function fetchHeroes() {
  return (dispatch) => {
    fetch('https://api.opendota.com/api/heroStats')
    .then(result => result.json())
    .then(data => {
      dispatch(
        {
          type : 'FETCH_HEROES',
          payload : {
            heroes: data,
            isLoading: false
          }
        }
      )
    })
    .catch(err => {
      console.log(err)
    })
  }
}