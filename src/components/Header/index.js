// == Import
// import PropTypesLib from 'prop-types';
import './style.scss';

// import des éléments de FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus, faUser, faNewspaper, faShop, faChess, faDiceD20, faShieldHalved, faCaretDown,
} from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/img/logo-meeple.svg';

// == Composant
function Header() {
  return (
    <header>
      <div id="head-logo">
        <div id="left-header">
          <a href="index.html">
            <img src={logo} className="logotype" alt="Logo Meeple Bons PLans" />
          </a>
          <div className="header__title">MEEPLE BONS PLANS</div>
        </div>
        <div id="right-header">
          <div className="search">
            <input type="search" className="search-bar" name="q" placeholder="rechercher" />
          </div>
          <button type="button" id="add-deal"><FontAwesomeIcon icon={faPlus} /><span className="displaybutton"> Ajouter un bon plan</span></button>
          <button type="button" id="login"><FontAwesomeIcon icon={faUser} /><span className="displaybutton"> Connexion</span></button>
        </div>
      </div>
      <nav>
        <div className="topnav" id="myTopnav">
          <div className="dropdown">
            <button type="button" className="dropbtn"><span>Bons Plans </span>
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
            <div className="dropdown-content animate">
              <a href="#">Tous les bons plans</a>
              <a href="#"><FontAwesomeIcon icon={faChess} /> Jeux de société</a>
              <a href="#"><FontAwesomeIcon icon={faShieldHalved} /> Jeux de figurines</a>
              <a href="#"><FontAwesomeIcon icon={faDiceD20} />  Jeux de rôle</a>
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
