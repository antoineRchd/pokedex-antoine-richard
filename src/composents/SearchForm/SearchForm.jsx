import React, { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';

const SearchForm = () => {
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate  = useNavigate ();
  const [failedRequest, setFailedRequest] = useState(false);



  const getAPIdata = async (city) => {
    
  const APIkey = "e953ae678f5cb997bf80860f2c4c67f0"
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIkey}&units=metric`);
      const data = await response.json();
      setLoading(false);
        setTemperature(data.main.temp); 
      if (data.main.temp !== null) {
        navigate('/meteo', { state: { data } });
      }
    } catch (error) {
      console.error('Error fetching temperature:', error);
      setFailedRequest(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getAPIdata(city);
  };

  // useEffect(() => {
  //   // getAPIdata();
  // }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          placeholder="Entrez le nom d'une ville"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading || city.trim() === ''}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-r px-4 py-2 ml-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? 'Chargement...' : 'Rechercher'}
        </button>
      </form>
      {failedRequest ? (
        <p className="text-red-500 mt-2">Impossible de trouver la ville que vous avez demandée.</p>
      ) : (
        <p className="mt-2">&nbsp;</p> // Champ vide pour l'erreur lorsque non affichée
      )}
      
    </div>
  );
};

export default SearchForm;