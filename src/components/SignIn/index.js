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
     
      <div className="title"><FontAwesomeIcon icon={faAddressCard} /> <h1 className="h1-inscription"> Créer un compte</h1></div>
      <input className="input--inscription" placeholder="Choisir un pseudo" type="text" />
      <span className="input--span">Ce pseudo n'est pas disponible</span>
      <input className="input--inscription" placeholder="Adresse Mail" type="text" />
      <span className="input--span">L'adresse mail n'est pas valide</span>
      <input className="input--inscription" placeholder="Mot de passe" type="text" />
      <input className="input--inscription" placeholder="Confirmer le mot de passe" type="text" />
      <span className="input--span">Le mot de passe n'est pas identique</span>
      <button type="button" className="button--inscription">Je m'inscris</button>
    </div>

  );
}

// == Export
export default SignIn;
