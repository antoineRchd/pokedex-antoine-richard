import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PokemonList from '../pages/PokemonList/PokemonList'
import PokemonDetail from '../pages/PokemonDetail/PokemonDetail'
import PageMeteo from '../pages/Meteo/Meteo'
import Error from '../pages/Error/Error'
import Navigation from '../layout/navigation'
import WeatherDisplay from '../composents/WeatherDisplay/WeatherDisplay'
const Routeur = () => {
    return (
        <BrowserRouter>
        <Navigation />
                <Routes>
                    <Route path='/' element={<h1>Accueil</h1>} />
                    <Route path='/pokemon' element={<PokemonList />} />
                    <Route path='/pokemon/:id' element={<PokemonDetail />} />
                    <Route path='/meteo' element={<PageMeteo />} />
                    <Route path='/weather' element={<WeatherDisplay />} />
                    <Route path='*' element={<Error />} />
                </Routes>
        </BrowserRouter>
    )
}

export default Routeur
