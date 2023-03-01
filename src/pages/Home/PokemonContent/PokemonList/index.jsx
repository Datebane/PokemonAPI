import React from "react";
import { useState } from "react";
import PokemonCard from "../PokemonCard";
import style from "./../PokemonList/style.css";

function PokemonList({ allPokemon }) {
  const [isCard, setCard] = useState([]);

  return (
    <div className="displey">
      <ol>
        {allPokemon.map((pokemon, index) => (
          <li
            key={index}
            className="table"
            onMouseOver={() => {
              setCard(pokemon);
            }}
            onMouseLeave={() => {
              setCard("");
            }}
          >
            <div className="pokemon">
              <img
                src={pokemon.sprites.front_default}
                className="icon"
                alt=""
              />
              <p>id: {pokemon.id}</p>
            </div>
            <p>{pokemon.name.toUpperCase()}</p>
          </li>
        ))}
      </ol>

      {isCard.length === 0 ? null : <PokemonCard pokemon={isCard} />}
    </div>
  );
}

export default PokemonList;
