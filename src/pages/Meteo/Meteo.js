import React from 'react';
import SearchForm from '../../composents/SearchForm/SearchForm';
import WeatherDisplay  from '../../composents/WeatherDisplay/WeatherDisplay';

function PageMeteo() {
  return (
    <>
      <h1>Méteo </h1>
      <SearchForm />
      <WeatherDisplay  />
    </>
  );
}

export default PageMeteo;