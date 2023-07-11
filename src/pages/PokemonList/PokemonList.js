import React from 'react';
import PokemonList from '../../composents/PokemonList/PokemonList';
import '../../styles/main.css'

function pokedex() {
  return (
    <>
      <h1>Pokedex</h1>
        <PokemonList />
    </>
  );
}

export default pokedex;