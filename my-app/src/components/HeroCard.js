import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const HeroCard = () => {
  const apiUrl = 'https://api.opendota.com/api/heroStats'
  const [heroes, loading, error] = useFetch(apiUrl)

  return(
    <div className="container">
      <Switch>
        <Route exact path="/">
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Primary Attribute</th>
                <th scope="col">Role</th>
              </tr>
            </thead>
            <tbody>
              {loading && <tr><td colSpan="5"> loading... </td></tr>}
              {error && <tr><td colSpan="5"> error: {error} </td></tr>}
              {
                heroes.map((hero, i) => {
                  let { id, localized_name, primary_attr, roles, img } = hero
                  let role = roles[0]
                  let image = `https://api.opendota.com${img}`
                  return(
                    <tr key={ i }>
                      <th scope="row">{ id }</th>
                      <td><img src={ image } alt={ localized_name } height="50"></img></td>
                      <td><Link to={`/${id}`}>{ localized_name }</Link></td>
                      <td>{ primary_attr }</td>
                      <td>{ role }</td>
                    </tr>
                  )
                })  
              }
            </tbody>
          </table>
        </Route>
      </Switch>
    </div>
  )
}

export default HeroCard
