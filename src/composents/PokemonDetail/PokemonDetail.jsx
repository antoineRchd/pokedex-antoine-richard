import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import pokemonData from "../../data/pokemonData.json"

const Pokemon = () => {
    const { id } = useParams();
    const pokemon = pokemonData.find(pokemon => pokemon.id.toString() === id);

    if (!pokemon) {
        return <h1>404</h1>
    }
    return (
        <>
        <Link to={`/pokemon/`}>
            <button>Retour</button>   
        </Link>
            <div className='pokemon-card'>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt={pokemon.nom} />
                <h1>{pokemon.nom}</h1>
                <p>{pokemon.type.join("/")}</p>
                <p>{pokemon.id}/151</p>
                <p>HP {pokemon.PV}</p>
                <p>Attaque {pokemon.Attaque}</p>
                <p>Défense {pokemon.Defense}</p>
                <p>Atq Spe {pokemon.AttaqueSpeciale}</p>
                <p>Def Spe {pokemon.DéfenseSpeciale}</p>
                <p>Vitesse {pokemon.Vitesse}</p>
            </div>
        </>
    );
    }
export default Pokemon;