import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PokemonList from '../pages/PokemonList/PokemonList'
import PokemonDetail from '../pages/PokemonDetail/PokemonDetail'
import Error from '../pages/Error/Error'
const Routeur = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path='/pokemon' element={<PokemonList />} />
                    <Route path='/pokemon/:id' element={<PokemonDetail />} />
                    <Route path='*' element={<Error />} />
                </Routes>
        </BrowserRouter>
    )
}

export default Routeur
