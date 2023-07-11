import { Link } from "react-router-dom";

const Navigation = ({children}) => {
    return (
    <>
    <ul>
        <li>
          <Link to="/">Page Accueil</Link>
        </li>

        <li>
          <Link to="/pokemon">pokedex</Link>
        </li>
        <li>
          <Link to="/meteo">Metéo</Link>
        </li>
      </ul>

    {children}
    </>
    );
};

export default Navigation;