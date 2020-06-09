import React, { Component } from 'react'

class HeroCard extends Component {
  constructor() {
    super()
    this.state = {
      heroes: []
    }
  }

  // 2059F91538E48C04D72CCFD16B0AD3A1 (stem web api key)
  componentDidMount() {
    fetch("https://api.opendota.com/api/heroes", {
      "method": "GET"
    })
    .then(result => result.json())
    .then(data => {
      console.log(data)
      this.setState({
        heroes: data
      })
      console.log(this.state.heroes)
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    let { heroes } = this.state
    return(
      <div class="container">
        <table class="table table-striped table-dark">
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
            {
              heroes.map((hero) => {
                let { id, name, localized_name, primary_attr, roles } = hero
                let role = roles[0]
                let rawName = name.replace('npc_dota_hero_', '')
                let img = `http://cdn.dota2.com/apps/dota2/images/heroes/${rawName}_sb.png`
                console.log(img)
                return(
                  <tr>
                    <th scope="row">{ id }</th>
                    <td><img src={ img }></img></td>
                    <td>{ localized_name }</td>
                    <td>{ primary_attr }</td>
                    <td>{ role }</td>
                  </tr>
                )
              })  
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default HeroCard