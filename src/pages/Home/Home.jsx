import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () =>{
  const [data, setData] = useState([])
  const [allPokemon, setAllPokemon] = useState([])
  useEffect(
    () => async () => {
      try {
        const result = await axios(
          'https://pokeapi.co/api/v2/pokemon?limit=100'
        )
        setData(result.data.results)
        
        result.data.results.map(async (item) =>{
          const result = await axios(item.url)
          setAllPokemon((oldArray) => [...oldArray, result.data])
        })
      } catch{}
    },
    []
  )
  
  console.log(allPokemon)

  return (
    <>
      <div>
        <Link to="/about">
          <div className="App">about</div>
        </Link>
        <ol>

          {allPokemon.map((pokemon, index) => (
            <li key={index}>
              <img src={pokemon.sprites.front_default} alt="" />
            </li>
          ))}
          </ol>
      </div>
    </>
  )
}

export default Home
