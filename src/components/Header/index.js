
/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import
// import PropTypesLib from 'prop-types';
import './style.scss';

// import des éléments de FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus, faUser, faNewspaper, faShop, faChess, faDiceD20, faShieldHalved, faCaretDown, faXmark,
} from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleLogin,
  onChangeMail,
  OnChangePassword,
  testLogin,
  disconnect,
  toggleIsProfileVisible,
} from '../../actions/user';

import logo from '../../assets/img/logo-meeple.svg';
import avatar from '../../assets/img/m-orange.png';

// == Composant
function Header() {
  // TODO les parties dynamiques des URLs sont entrées en dur ICI
  // à rendre dynamique plus tard avec les props ? Pour le moment ça fonctionne temporairement
  const categoryJDS = 'jeux-de-societe';
  const categoryJDR = 'jeux-de-roles';
  const categoryJDF = 'jeux-de-figurines';

  // récupération des données du state qu'on utilise ici pour gérer le formulaire de connexion:
  const {
    isOpen,
    email,
    password,
    temporaryMessage,
    isProfileVisible,
  } = useSelector((state) => state.user.loginSettings);

  // Ici on vient 'pull' les données situées dans le state (reducer)
  const isAvatarVisible = useSelector((state) => state.user.isAvatarVisible);
  const dealObjectTest = useSelector((state) => state.deal.dealList);

  console.log('CONSOLE LOG sur header', dealObjectTest[0].value);

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
      <div className="login-popup">
        <div className={isOpen ? 'form-popup' : 'display-none'}>
          <form action="#" className="form-container" onSubmit={handleSubmitLogin}>
            <div id="title_login">Connexion<span><button type="button" className="cancel" onClick={handleClickToggleLogin}><FontAwesomeIcon icon={faXmark} /></button></span></div>
            <label htmlFor="email">
              <strong className="subtitle_login">E-mail</strong>
            </label>
            <input type="email" onChange={handleChangeEmail} id="email" placeholder="Votre Email" name="email" value={email} required />
            <label htmlFor="psw">
              <strong className="subtitle_login">Mot de passe</strong>
            </label>
            <input type="password" onChange={handleChangePassword} id="psw" placeholder="Votre Mot de passe" name="psw" value={password} required />
            <div className="login_error">{temporaryMessage}</div>
            <button type="submit" className="btn">Se connecter</button>
            <div className="lost_password">Mot de passe oublié?</div>
            <Link to="/inscription"><button type="button" className="btn register" onClick={handleClickToggleLogin}>S'inscrire</button></Link>
          </form>
        </div>
      </div>
      <div className={isProfileVisible ? 'profile-popup' : 'display-none'}>
        <div className="close-button-div"><button type="button" className="cancel" onClick={handleToggleProfile}><FontAwesomeIcon icon={faXmark} /></button></div>
        <div className="profile-header">
          <img src={avatar} alt="profil meeple" id="avatar" />
          <span>{email}</span>
        </div>
        <div>
          <button type="button" className="btn">Consulter mon profil</button>
          <button type="button" className="btn" onClick={handleDisconnect}>Se déconnecter</button>
        </div>
      </div>
    </header>
  );
}

// == Export
export default Header;
