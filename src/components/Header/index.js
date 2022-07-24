/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import
// import PropTypesLib from 'prop-types';
import './style.scss';


// import des éléments de FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser, faNewspaper, faShop, faChess, faDiceD20, faShieldHalved, faCaretDown,
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
  //TODO les parties dynamiques des URLs sont entrées en dur ICI à rendre dynamique plus tard avec les props ? Pour le moment ça fonctionne temporairement
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
  const isAvatarVisible = useSelector((state) => state.user.isAvatarVisible);
  
  console.log('isVisible ?', isAvatarVisible);
  // permet d'envoyer des données au state (avec les actions et reducer) (useSelector = pull du stat // useDispatch = push_vers_state)
  const dispatch = useDispatch();

  // Se déclenche au clic
  const handleClickToggleLogin = () => {
    dispatch(toggleLogin());
  };
  //!temporaire :
  const handleSubmitLogin = (event) => {
    event.preventDefault();
    dispatch(testLogin(email, password));
  };

  const handleDisconnect = () => {
    dispatch(disconnect());
  }

  // Permet de generer un changement a chaque modification qui enverra le contenu de la variable newMail dans le state 
  const handleChangeEmail = (event) => {
    const inputMail = event.currentTarget.value;
    dispatch(onChangeMail(inputMail));
  };

  const handleChangePassword = (event) => {
    const inputPassword = event.currentTarget.value;
    dispatch(OnChangePassword(inputPassword));
  };

  const handleToggleProfile = () => {
    dispatch(toggleIsProfileVisible());
  }
  
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
        <div className={isOpen ? 'form-popup' : 'display-none'} /*id="popupForm "*/>
          <form action="#" className="form-container" onSubmit={handleSubmitLogin}>
            <h2>Connexion</h2>
            <label htmlFor="email">
              <strong>E-mail</strong>
            </label>
            <input type="email" onChange={handleChangeEmail} id="email" placeholder="Votre Email" name="email" value={email} required />
            <label htmlFor="psw">
              <strong>Mot de passe</strong>
            </label>
            <input type="password" onChange={handleChangePassword} id="psw" placeholder="Votre Mot de passe" name="psw" value={password} required />
            <div className="lost-password">{temporaryMessage}</div>
            <button type="submit" className="btn">Se connecter</button>
            <button type="button" className="btn cancel" onClick={handleClickToggleLogin}>Fermer</button>
          </form>
        </div>
      </div>
      <div className={isProfileVisible ? 'profile-popup' : 'display-none'}>
        <div className="profile-header">
          <img src={avatar} alt="profil meeple" id="avatar" />
          <span>{email}</span>
        </div>
        <div>
          <button type="button" className="btn">Consulter mon profil</button>
          <button type="button" className="btn" onClick={handleDisconnect}>Se déconnecter</button>
          <button type="button" className="btn close" onClick={handleToggleProfile}>Fermer</button>
        </div>
      </div>
    </header>
  
  );
}


// == Export
export default Header;
