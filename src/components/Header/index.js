// == Import
// import PropTypesLib from 'prop-types';
import './style.scss';

// import des éléments de FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus, faUser, faNewspaper, faShop, faChess, faDiceD20, faShieldHalved, faCaretDown,
} from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/img/logo-meeple.svg';
import { Link } from 'react-router-dom';

// == Composant
function Header() {
  //TODO les parties dynamiques des URLs sont entrées en dur ICI à rendre dynamique plus tard avec les props ? Pour le moment ça fonctionne temporairement
  const categoryJDS = 'jeux-de-societe';
  const categoryJDR = 'jeux-de-roles';
  const categoryJDF = 'jeux-de-figurines';

  return (
    <header>
      <div id="head-logo">
        <div id="left-header">
          <Link to="/">
            <img src={logo} className="logotype" alt="Logo Meeple Bons Plans" />
          </Link>
          <div className="header__title">MEEPLE BONS PLANS</div>
        </div>
        <div id="right-header">
          <div className="search">
            <input type="search" className="search-bar" name="q" placeholder="rechercher" />
          </div>
          <Link to="/ajouter-bon-plan" id="add-deal"><FontAwesomeIcon icon={faPlus} /><span className="displaybutton"> Ajouter un bon plan</span></Link>
          <Link to="/inscription" id="login"><FontAwesomeIcon icon={faUser} /><span className="displaybutton"> Connexion</span></Link>
        </div>
      </div>
      <nav>
        <div className="topnav" id="myTopnav">
          <div className="dropdown">
            <button type="button" className="dropbtn"><span>Bons Plans </span>
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
            <div className="dropdown-content animate">
              <Link to="/bons-plans">Tous les bons plans</Link>
              <Link to={`/bons-plans/${categoryJDS}`}><FontAwesomeIcon icon={faChess} /> Jeux de société</Link>
              <Link to={`/bons-plans/${categoryJDF}`}><FontAwesomeIcon icon={faShieldHalved} /> Jeux de figurines</Link>
              <Link to={`/bons-plans/${categoryJDR}`}><FontAwesomeIcon icon={faDiceD20} />  Jeux de rôle</Link>
            </div>
          </div>
          <a href="#"><FontAwesomeIcon icon={faNewspaper} /><span className="nav-link"> Actualité</span></a>
          <a href="#"><FontAwesomeIcon icon={faShop} /><span className="nav-link"> Boutiques</span></a>
        </div>
      </nav>
    </header>
  );
}

// == Export
export default Header;
