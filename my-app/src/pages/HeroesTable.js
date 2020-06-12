import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux'
import useFetch from '../hooks/useFetch'
import Title from '../components/Title'
import store from '../store/index'

const HeroesTable = (props) => {
  const apiUrl = 'https://api.opendota.com/api/heroStats'
  const [heroes, loading, error] = useFetch(apiUrl)

  const favorites = useSelector(state => state.favorites)
  const dispatch = useDispatch()

  const addFavorite = (hero) => {
    dispatch({
      type: 'addFavorite',
      payload: [hero]
    })
  }

  return(
    <div className="container">
      <Title title={'List of Heroes'}/>
        {favorites.length < 1 && `You can choose you favorite heroes`}
        {favorites.length > 0 && `Favorites: ${favorites.join(', ')}`}
        <table className="table table-striped table-dark">
          <thead>
            <tr>  
              <th scope="col">ID</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Favorite</th>
            </tr>
          </thead>
          <tbody>
            {loading && <tr><td colSpan="5"> loading... </td></tr>}
            {error && <tr><td colSpan="5"> error: {error} </td></tr>}
            {
              heroes.map((hero, i) => {
                let { id, localized_name, img } = hero
                let image = `https://api.opendota.com${img}`
                return(
                  <tr key={ i }>
                    <th scope="row">{ id }</th>
                    <td><img src={ image } alt={ localized_name } height="50"></img></td>
                    <td><Link to={`/${id}`}>{ localized_name }</Link></td>
                    <td><button type="button" className="btn btn-outline-danger" onClick={() => addFavorite(localized_name)}><i className="fas fa-heart"></i></button></td>
                  </tr>
                )
              })  
            }
          </tbody>
        </table>
    </div>
  )
}

export default HeroesTable
