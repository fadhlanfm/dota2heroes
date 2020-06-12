import React, { useState, useEffect, Component } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch, connect } from 'react-redux'
// import useFetch from '../hooks/useFetch'
import Title from '../components/Title'
import { addFavorite, fetchHeroes } from '../store/actions/heroes'

const HeroesTable = (props) => {
  useEffect(() => {
    return(props.fetchHeroes())
  }, [])

  console.log('isLoading:', props.isLoading)

  return(    
    <div className="container">
      <Title title={'List of Heroes'}/>
        {props.favorites.length < 1 && `You can choose you favorite heroes`}
        {props.favorites.length > 0 && `Favorites: ${props.favorites.join(', ')}`}
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
            {props.isLoading && <tr><td colSpan="5"> loading... </td></tr>}
            {
              props.heroes.map((hero, i) => {
                let { id, localized_name, img } = hero
                let image = `https://api.opendota.com${img}`
                return(
                  <tr key={ i }>
                    <th scope="row">{ id }</th>
                    <td><img src={ image } alt={ localized_name } height="50"></img></td>
                    <td><Link to={`/${id}`}>{ localized_name }</Link></td>
                    <td><button type="button" className="btn btn-outline-danger" onClick={() => props.addFavorite(localized_name)}><i className="fas fa-heart"></i></button></td>
                  </tr>
                )
              })  
            }
          </tbody>
        </table>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    heroes: state.heroesReducer.heroes,
    favorites: state.heroesReducer.favorites,
    isLoading: state.heroesReducer.isLoading
  }
}

const mapDispatchToProps = {
  addFavorite, 
  fetchHeroes
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroesTable)
