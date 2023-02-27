import React from 'react';
import { Link, useNavigate } from 'react-router-dom'

function AboutPokemonPages() {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <Link to="/">
        <div className="App">Home</div>
      </Link>
      <div>ABOUT</div>
    </div>
  )
}

export default AboutPokemonPages;
