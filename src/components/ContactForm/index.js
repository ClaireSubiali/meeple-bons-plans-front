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
    <div className="contact-form">
      <div className="contact-form-title"><FontAwesomeIcon icon={faEnvelope} /> <div className="contact-form-mainTitle"> Contact</div></div>
     
      <label className="secondarytitle" htmlFor="nom-contact">Nom d'utilisateur</label>
      <input className="contact-form-input" placeholder="Votre nom ou pseudo sur le site" type="text" />
      <span className="contact-form-span">Merci de remplir ce champ</span>
      
      <label className="secondarytitle" htmlFor="mail-contact">Adresse Mail</label>
      <input className="contact-form-input" id="mail-contact" placeholder="Adresse Mail" type="text" />
      <span className="contact-form-span">L'adresse mail n'est pas valide</span>
      
      <label className="secondarytitle" htmlFor="titre-contact">Titre du message</label>
      <input className="contact-form-input" placeholder="Titre du message" type="text" />
      
      <label className="secondarytitle" htmlFor="message-contact">Message</label>
      <textarea
        rows="6"
        className="contact-form-message"
        placeholder="Saisissez votre message ici"
      />
      <button type="button" className="contact-form-button">Envoyer</button>
    </div>
  );
}

// == Export
export default ContactForm;
