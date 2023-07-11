import React from 'react';
import { Link } from 'react-router-dom';
import pokemonData from "../../data/pokemonData.json"

const Pokedex = () => {
    return (
        <>
            <div className='container-pokemon'>
                {pokemonData.map((pokemon, index) => {
                    return (
                        <div className='card-pokemon' key={index}>
                            <Link to={`/pokemon/${pokemon.id}`}>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt={pokemon.nom} />  
                            </Link>
                                <p>
                                    {pokemon.nom}
                                </p>
                                <p>
                                    {pokemon.type.join("/")}
                                </p>
                                <p>
                                    {pokemon.id}/151
                                </p>
                        </div>
                    )
                }
                )}

            </div>
        </>
    );
    }
export default Pokedex;