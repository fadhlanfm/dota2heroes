import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'


export default () => {
  const { id } = useParams()
  const apiUrl = 'https://api.opendota.com/api/heroStats/'
  const [heroes, loading, error] = useFetch(apiUrl)
  const hero = heroes[id - 1]
  
  //null propagation: {hero?.id} (ga umum karena belom semua browser support)
  return (
    <>
      {!hero && <p> loading... </p>}
      {hero &&
      <Container className="p-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={`https://api.opendota.com${hero.img}`} alt={hero.name} />
              <Card.Body>
              <img src={`https://api.opendota.com${hero.icon}`} width={22} height={22} alt={hero.name} />
              {hero.primary_attr === 'str' && <img src="https://gamepedia.cursecdn.com/dota2_gamepedia/7/7a/Strength_attribute_symbol.png?version=d8564cc61841b6a816a9b1e6fd528f91" width={22} height={22} alt={hero.primary_attr} />}
              {hero.primary_attr === 'agi' && <img src="https://gamepedia.cursecdn.com/dota2_gamepedia/2/2d/Agility_attribute_symbol.png?version=0429997b8b5c7b8195a35f719ef1700a" width={22} height={22} alt={hero.primary_attr} />}
              {hero.primary_attr === 'int' && <img src="https://gamepedia.cursecdn.com/dota2_gamepedia/5/56/Intelligence_attribute_symbol.png?version=7e30189be7a7c15889a2c245584797da" width={22} height={22} alt={hero.primary_attr} />}
                <Card.Title>{ hero.localized_name }</Card.Title>
                <Card.Text>
                  {hero.attack_type}<br/>
                  {hero.roles.join(', ')}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Base Health: {hero.base_health}</ListGroupItem>
                <ListGroupItem>Base Mana: {hero.base_mane}</ListGroupItem>
                <ListGroupItem>Base Armor: {hero.base_armor}</ListGroupItem>
                <ListGroupItem>Base Attack: {hero.base_attack_min} - {hero.base_attack_max}</ListGroupItem>
                <ListGroupItem>Base Str: {hero.base_str}</ListGroupItem>
                <ListGroupItem>Base Agi: {hero.base_agi}</ListGroupItem>
                <ListGroupItem>Base Int: {hero.base_int}</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
      </Container>
      }
    </>
  )
}