import React from "react";
import { useState } from "react";
import style from "./../PokemonCard/style.css";

function PokemonCard({ pokemon }) {

  console.log("hello")

    return (
      
      <div>
        <ol className="container">
            <div className="card">
              <div className="stop">
                <p>id: {pokemon.id}</p>
                <p>{pokemon.name}</p>
              </div>

              <li className="li">
                <div className="pokemon_card">
                  <img
                    src={pokemon.sprites.other.dream_world.front_default}
                    alt=""
                  />
                </div>
              </li>
              <li className="otstup">
                type:
                {pokemon.types.map((pokemonType) => (
                  <p className="pad">{pokemonType.type.name}</p>
                ))}
              </li>
              <li className="li">weight:{pokemon.weight}</li>
              <li className="li">height:{pokemon.height}</li>
            </div>
        </ol>
      </div>
    );
  }

export default PokemonCard;




// import react from 'react'
// import style from './style.module.scss'

// const PokemonCard = ({pokemon}) => {
//   return (
//     <>
//       <div className={style.card}>
//         <ol className={style.ol}>
//             <div className={style.box}>
//               <div className={style.top}>
//                 <p>#{pokemon.id}</p>
//                 <p>{pokemon.name.toUpperCase()}</p>
//               </div>
//               <li key={pokemon.id}>
//                 <img
//                   className={style.image}
//                   src={pokemon.sprites.other.dream_world.front_default}
//                   alt=''
//                 />
//               </li>
//               <li className={style.li}>
//                 <div className={style.line}>
//                   <p>
//                     <b>Type</b>
//                   </p>
//                   <div className={style.flex}>
//                     {pokemon.types.map(pokemonType => (
//                       <p>{pokemonType.type.name} </p>
//                     ))}
//                   </div>
//                 </div>
//               </li>
//               <li className={style.li}>
//                 <div className={style.line}>
//                   <p>
//                     <b>Height</b>
//                   </p>
//                   <p>{pokemon.height}</p>
//                 </div>
//               </li>
//               <li className={style.li}>
//                 <div className={style.line}>
//                   <p>
//                     <b>Weight</b>
//                   </p>
//                   <p>{pokemon.weight} Lbs</p>
//                 </div>
//               </li>
//             </div>
//         </ol>
//       </div>
//     </>
//   )
// }

// export default PokemonCard