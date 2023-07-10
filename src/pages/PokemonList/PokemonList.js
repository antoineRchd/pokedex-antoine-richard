import React from 'react';
import '../../styles/main.css';
import PokemonList from '../../composents/PokemonList/PokemonList';

function pokedex() {
  return (
    <>
      <h1>Pokedex</h1>
        <PokemonList />
    </>
  );
}

export default pokedex;