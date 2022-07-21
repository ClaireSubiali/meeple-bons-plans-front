// == Import
// import PropTypesLib from 'prop-types';
import './style.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

// == Composant
function ContactForm() {
  return (
    <div className="Parent">
      <div className="title"><FontAwesomeIcon icon={faEnvelope} /> <h1 className="h1-inscription"> Contact</h1></div>
      <input className="input--inscription" placeholder="Votre nom ou pseudo sur le site" type="text" />
      <span className="input--span">Merci de remplir ce champ</span>
      <input className="input--inscription" placeholder="Adresse Mail" type="text" />
      <span className="input--span">L'adresse mail n'est pas valide</span>
      <input className="input--inscription" placeholder="Titre du message" type="text" />
      <textarea
        rows="6"
        id="input--message"
        placeholder="Saisissez votre message ici"
      />
      <button type="button" className="button--inscription">Envoyer</button>
    </div>
  );
}

// == Export
export default ContactForm;
