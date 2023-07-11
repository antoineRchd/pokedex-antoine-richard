import React from 'react';
import { useLocation } from 'react-router-dom';

const WeatherDisplay = () => {
  const location = useLocation();
  const { data } = location.state || {}; // Assurez-vous que location.state est défini ou utilise un objet vide par défaut

  if (!data) {
    // Gérer le cas où les données ne sont pas disponibles
    return <p>Les données météorologiques ne sont pas disponibles.</p>;
  }

  // Utilisez les données comme d'habitude
  return (
    <div>
      <h2>Résultat de la recherche</h2>
      <p>
        La température à {data.name} est de {data.main.temp}°C.
      </p>
      <p>La température minimale est de {data.main.temp_min}°C.</p>
        <p>La température maximale est de {data.main.temp_max}°C.</p>
        <p>La pression est de {data.main.pressure} hPa.</p>
        <p>L'humidité est de {data.main.humidity} %.</p>
        <p>La vitesse du vent est de {data.wind.speed} m/s.</p>
        <p>Le temps est {data.weather[0].description}.</p>
    </div>
  );
};

export default WeatherDisplay;
