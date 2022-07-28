// Désactivation de paramètres ESLINT

/* eslint-disable jsx-a11y/label-has-associated-control */

// == Import des éléments de librairies
import { Link,NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// == Import des éléments de FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus, faUser, faNewspaper, faShop, faChess, faDiceD20, faShieldHalved, faCaretDown, faXmark,
} from '@fortawesome/free-solid-svg-icons';

// == Import des fonctions des actions
import {
  toggleVisibility,
  testLogin,
  disconnect,  
  changeFieldValueLoginSettings,
} from '../../actions/user';

// == Import de composants
import LoginPopup from './LoginPopup';
import ProfilePopup from './ProfilePopup';

// == Import d'images, SCSS et autres
import './style.scss';
import logo from '../../assets/img/logo-meeple.svg';
import avatar from '../../assets/img/m-orange.png';

// == Composant
function Header() {
  // TODO les parties dynamiques des URLs sont entrées en dur ICI
  // à rendre dynamique plus tard avec les props ? Pour le moment ça fonctionne ! (à voir quand API)
  const categoryJDS = 'jeux-de-societe';
  const categoryJDR = 'jeux-de-roles';
  const categoryJDF = 'jeux-de-figurines';

  // Récupération des données du state qu'on utilise ici pour gérer le formulaire de connexion:
  const {
    isLoginVisible,
    email,
    password,
    temporaryMessage,
    isProfileVisible,
  } = useSelector((state) => state.user.loginSettings);

  // Ici on vient extraire/récupérer les données situées dans le state avec useSelector
  const isAvatarVisible = useSelector((state) => state.user.isAvatarVisible);
  const dealObjectTest = useSelector((state) => state.deal.dealList);

  console.log('CONSOLE LOG sur header', dealObjectTest.value);
  // Récupération du fact chuck norris d'essai pour l'appel API
  const dealObjectTest2 = dealObjectTest.value;

  // permet d'envoyer des données au state (avec les actions et reducer)
  // (useSelector = 'pull' du state (redux) // useDispatch = 'push_vers_state' // useEffect = permet de determiner une fonction a executer a un moment choisi)
  // (usestate = sans redux? )
  const dispatch = useDispatch();

  //! temporaire avant API:
  const handleSubmitLogin = (event) => {
    event.preventDefault();
    dispatch(testLogin(email, password));
  };

  // Handlers :
  /* ------------ HANDLERS SINGLE USE AFFICHAGE DES POPUPS ------------ */
  /**
   * Function that toggle the login popup
   */
  const handleClickToggleLogin = () => {
    dispatch(toggleVisibility("isLoginVisible"));
  };
  /**
   * Function that toggle the profile popup
   */
  const handleToggleProfile = () => {
    dispatch(toggleVisibility("isProfileVisible"));
  };

  /**
   * Handler for logout (disconnect)
   */
   const handleDisconnect = () => {
    dispatch(disconnect());
  };

  /* ---------- HANDLER GENERAUX AVEC PLUSIEURS UTILITES ---------- */
  /**
   * Ajout d'une donnée dans le state (idéal pour champ contôlé)
   * @param value chaine de caractère à dispatch dans le state
   * @param field string exact correspondant au nom de l'entrée dans le state à modifier
   */
  const handleChangeFieldValue = (value, field) => {
    dispatch(changeFieldValueLoginSettings(value, field));
  }
   /**
   * Toggle une valeur dans le state à son contraire
   * @param field string exact correspondant au nom de l'entrée dans le state à modifier
   */
  const handleToggleVisibility = (field) => {
    dispatch(toggleVisibility(field));
  }

  return (
    <header>
      {/* ---------- LOGO TITRE ET BOUTONS AJOUT ET CONNEXION ---------- */}
      <div id="head-logo">
        <div id="left-header">
          <Link to="/">
            <img src={logo} className="logotype" alt="Logo Meeple Bons Plans" />
          </Link>
          <div className="header__title">MEEPLE BONS PLANS</div>
        </div>
        <div id="right-header">
          <div className="search">
            <input type="search" className="search-bar" name="q" placeholder="Rechercher" />
          </div>
          <Link to="/ajouter-bon-plan" id="add-deal"><FontAwesomeIcon icon={faPlus} /><span className="displaybutton"> Ajouter un bon plan</span></Link>
          {isAvatarVisible ? <button type="button" onClick={handleToggleProfile} id="button-avatar"><img src={avatar} alt="profil meeple" id="avatar" /></button> : <button type="button" id="login" onClick={handleClickToggleLogin}><FontAwesomeIcon icon={faUser} /><span className="displaybutton"> Connexion</span></button> }
        </div>
      </div>
      {/* ----------  NAVIGATION DANS HEADER---------- */}
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
          <NavLink to="/Actus"><FontAwesomeIcon icon={faNewspaper} /><span className="nav-link"> Actualité</span></NavLink>
          <NavLink to="/Boutiques"> <FontAwesomeIcon icon={faShop} /><span className="nav-link"> Boutiques</span></NavLink>
        </div>
      </nav>
      {/* ---------- POPUP DE CONNEXION ---------- */}
      {isLoginVisible ? (
        <LoginPopup
          SubmitLogin={handleSubmitLogin}
          ToggleVisibility={handleToggleVisibility}
          ChangeField={handleChangeFieldValue}
          email={email}
          password={password}
          temporaryMessage={temporaryMessage}
        />
      ) : ''}
      {/* ---------- POPUP DU PROFIL ---------- */}
      {isProfileVisible ? ( 
        <ProfilePopup
          ToggleVisibility={handleToggleVisibility}
          avatar={avatar}
          email={email}
          Disconnect={handleDisconnect}
         />
      ) : ''}
    </header>
  );
}

// == Export
export default Header;
