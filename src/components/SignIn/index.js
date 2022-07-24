// == Import
// import PropTypesLib from 'prop-types';
import './style.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressCard,
} from '@fortawesome/free-solid-svg-icons';

// == Composant
function SignIn() {
  return (
    <div className="Parent">
      <div className="newUser">
        <div className="header-register">
          <div className="title"><FontAwesomeIcon icon={faAddressCard} /> </div>
          <div className="title-inscription"> Créer un compte</div>
        </div>
        <input className="input-register" placeholder="Choisir un pseudo" type="text" />
        <span className="input--span">Ce pseudo n'est pas disponible</span>
        <input className="input-register" placeholder="Adresse Mail" type="text" />
        <span className="input--span">L'adresse mail n'est pas valide</span>
        <input className="input-register" placeholder="Mot de passe" type="text" />
        <input className="input-register" placeholder="Confirmer le mot de passe" type="text" />
        <span className="input--span">Le mot de passe n'est pas identique</span>
        <select name="avatars" id="meeple-select">
          <option value="">--Choisis une couleur de MEEPLE--</option>
          <option value="rouge">Rouge</option>
          <option value="vert">Vert</option>
          <option value="blue">Blue</option>
        </select>
        <button type="button" className="button--inscription">Je m'inscris</button>
      </div>
    </div>

  );
}

// == Export
export default SignIn;
