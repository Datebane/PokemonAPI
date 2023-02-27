import React from "react";
import PokemonCard from "./PokemonCard";
import PokemonList from "./PokemonList/index";
import style from "./../PokemonContent/style.css"

function PokemonContent({ allPokemon }) {
  return (
    <div className="content">
      <PokemonList allPokemon={allPokemon} />
      {/* <PokemonCard allPokemon={allPokemon} /> */}
    </div>
  );
}

export default PokemonContent;
