/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import
// import PropTypesLib from 'prop-types';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faAddressCard,
} from '@fortawesome/free-solid-svg-icons';

import {
  changeAvatarColor,
  changeConfirmPassword,
  changeCreatePseudo,
  changeCreateEmail,
  changeCreatePassword,
  changeFieldValueCreateAccount,

} from '../../actions/user';

// == Composant
function SignIn() {
  const dispatch = useDispatch();
  const {
    createPseudo,
    createMail,
    createPassword,
    confirmPassword,
    avatarColor,
  } = useSelector((state) => state.user.createAccount);

  // Les handlers
  const handleCreatePseudo = (event) => {
    dispatch(changeFieldValueCreateAccount(event.currentTarget.value, 'createPseudo'));
  };

  const handleCreateEmail = (event) => {
    dispatch(changeFieldValueCreateAccount(event.currentTarget.value, 'createMail'));
  };

  const handleCreatePassword = (event) => {
    dispatch(changeFieldValueCreateAccount(event.currentTarget.value, 'createPassword'));
  };

  const handleConfirmPassword = (event) => {
    dispatch(changeFieldValueCreateAccount(event.currentTarget.value, 'confirmPassword'));
  };

  const handleAvatarColor = (event) => {
    dispatch(changeFieldValueCreateAccount(event.currentTarget.value, 'avatarColor'));
  };


  return (
    <div className="form-section">
      <div className="newUser">
        <div className="form-title">
          <div className="register-title"><FontAwesomeIcon icon={faAddressCard} /> </div>
          <div className="form-span"> Créer un compte</div>
        </div>
        <div className="register-main">
          <label className="form-secondarytitle" htmlFor="register-title">PSEUDO</label>
          <input className="form-input" onChange={handleCreatePseudo} value={createPseudo} placeholder="Choisir un pseudo" type="text" />
          <span className="form-msg-error">Ce pseudo n'est pas disponible</span>
          <label className="form-secondarytitle" htmlFor="register-mail">E-MAIL</label>
          <input className="form-input" onChange={handleCreateEmail} value={createMail} placeholder="Adresse Mail" type="text" />
          <span className="form-msg-error">L'adresse mail n'est pas valide</span>
          <label className="form-secondarytitle" htmlFor="register-psw">MOT DE PASSE</label>
          <input className="form-input" type="password" onChange={handleCreatePassword} value={createPassword} placeholder="Mot de passe" />
          <input className="form-input" type="password" onChange={handleConfirmPassword} value={confirmPassword} placeholder="Confirmer le mot de passe" />
          <span className="form-msg-error">{(createPassword!=='')?((createPassword === confirmPassword) ? 'Bravo, tu as saisi deux fois le même mot de passe ! FELICITATIONS pour cet exploit !!!' : 'Les mots de passe saisis ne sont pas identiques... BOUUUUUH !!!'):'Merci de saisir un mot de passe'}</span>
        </div>
        <label className="form-secondarytitle" htmlFor="register-avatar">AVATAR</label>
        <select className="form-input" name="avatars" id="meeple-select" value={avatarColor} onChange={handleAvatarColor}>
          <option value="">--Choisis une couleur de MEEPLE--</option>
          <option value="rouge">Rouge</option>
          <option value="vert">Vert</option>
          <option value="blue">Blue</option>
        </select>
        <div className="button-register-div">
          <button type="button" className="form-button-validate SignIn-button ">Je m'inscris</button>
        </div>
      </div>
    </div>

  );
}

// == Export
export default SignIn;
