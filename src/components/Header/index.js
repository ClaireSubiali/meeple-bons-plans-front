// Désactivation de paramètres ESLINT

/* eslint-disable jsx-a11y/label-has-associated-control */

// == Import des éléments de librairies
// import PropTypesLib from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// == Import des éléments de FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus, faUser, faNewspaper, faShop, faChess, faDiceD20, faShieldHalved, faCaretDown, faXmark,
} from '@fortawesome/free-solid-svg-icons';

// == Import des fonctions des actions
import {
  toggleLogin,
  onChangeMail,
  OnChangePassword,
  testLogin,
  disconnect,
  toggleIsProfileVisible,
} from '../../actions/user';

// == Import de composants
import LoginPopup from './LoginPopup';
import ProfilePopup from './ProfilePopup';

// == Import d'images SCSS et autres
import './style.scss';
import logo from '../../assets/img/logo-meeple.svg';
import avatar from '../../assets/img/m-orange.png';


// == Composant
function Header() {
  // TODO les parties dynamiques des URLs sont entrées en dur ICI
  // à rendre dynamique plus tard avec les props ? Pour le moment ça fonctionne temporairement
  const categoryJDS = 'jeux-de-societe';
  const categoryJDR = 'jeux-de-roles';
  const categoryJDF = 'jeux-de-figurines';

  // Récupération des données du state qu'on utilise ici pour gérer le formulaire de connexion:
  const {
    isOpen,
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
  /* ------------ AFFICHAGE DES POPUPS ------------ */
  /**
   * Function that toggle the login popup
   */
  const handleClickToggleLogin = () => {
    dispatch(toggleLogin());
  };
  /**
   * Function that toggle the profile popup
   */
  const handleToggleProfile = () => {
    dispatch(toggleIsProfileVisible());
  };

  /* ------------ CHAMPS CONTROLES ------------ */

  // Permet de générer un changement à chaque modification
  // qui enverra le contenu de la variable inputMail dans le state
  /**
   * Handler for controlled input (Email)
   * @param {*} event
   */
  const handleChangeEmail = (event) => {
    const inputMail = event.currentTarget.value;
    dispatch(onChangeMail(inputMail));
  };
  /**
   * Handler for controlled input (Password)
   * @param {*} event
   */
  const handleChangePassword = (event) => {
    const inputPassword = event.currentTarget.value;
    dispatch(OnChangePassword(inputPassword));
  };

  /* ------------ AUTRES HANDLERS ------------ */

  /**
   * Handler for logout (disconnect)
   */
  const handleDisconnect = () => {
    dispatch(disconnect());
  };

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
          <a href="#"><FontAwesomeIcon icon={faNewspaper} /><span className="nav-link"> Actualité</span></a>
          <a href="#"><FontAwesomeIcon icon={faShop} /><span className="nav-link"> Boutiques</span></a>
        </div>
      </nav>
      {/* ---------- POPUP DE CONNEXION ---------- */}
      {isOpen ? (
        <LoginPopup
          SubmitLogin={handleSubmitLogin}
          ToggleLogin={handleClickToggleLogin}
          ChangeEmail={handleChangeEmail}
          ChangePassword={handleChangePassword}
          email={email}
          password={password}
          temporaryMessage={temporaryMessage}
        />
      ) : ''}
      {/* ---------- POPUP DU PROFIL ---------- */}
      {isProfileVisible ? ( 
        <ProfilePopup
          ToggleProfile={handleToggleProfile}
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
