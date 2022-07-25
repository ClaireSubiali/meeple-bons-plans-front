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
  const handleChangeCreatePseudo = (event) => {
    const newPseudo = event.currentTarget.value;
    dispatch(changeCreatePseudo(newPseudo));
  };

  const handleChangeCreateEmail = (event) => {
    const newChangeCreateEmail = event.currentTarget.value;
    dispatch(changeCreateEmail(newChangeCreateEmail));
  };

  const handleChangeCreatePassword = (event) => {
    const newCreatePassword = event.currentTarget.value;
    dispatch(changeCreatePassword(newCreatePassword));
  };

  const handleChangeConfirmPassword = (event) => {
    const newChangeConfirmPassword = event.currentTarget.value;
    dispatch(changeConfirmPassword(newChangeConfirmPassword));
  };

  const handleChangeAvatarColor = (event) => {
    const newAvatarColor = event.currentTarget.value;
    dispatch(changeAvatarColor(newAvatarColor));
  };


  return (
    <div className="Parent">
      <div className="newUser">
        <div className="header-register">
          <div className="title"><FontAwesomeIcon icon={faAddressCard} /> </div>
          <div className="title-inscription"> Créer un compte</div>
        </div>
        <input className="input-register" onChange={handleChangeCreatePseudo} value={createPseudo} placeholder="Choisir un pseudo" type="text" />
        <span className="input--span">Ce pseudo n'est pas disponible</span>
        <input className="input-register" onChange={handleChangeCreateEmail} value={createMail} placeholder="Adresse Mail" type="text" />
        <span className="input--span">L'adresse mail n'est pas valide</span>
        <input className="input-register" type="password" onChange={handleChangeCreatePassword} value={createPassword} placeholder="Mot de passe" />
        <input className="input-register" type="password" onChange={handleChangeConfirmPassword} value={confirmPassword} placeholder="Confirmer le mot de passe" />
        <span className="input--span">{(createPassword!=='')?((createPassword === confirmPassword) ? 'Bravo, tu as saisi deux fois le même mot de passe ! FELICITATIONS pour cet exploit !!!' : 'Les mots de passe saisis ne sont pas identiques... BOUUUUUH !!!'):'Merci de saisir un mot de passe'}</span>
        <select name="avatars" id="meeple-select" value={avatarColor} onChange={handleChangeAvatarColor}>
          <option value="">--Choisis une couleur de MEEPLE--</option>
          <option value="rouge">Rouge</option>
          <option value="vert">Vert</option>
          <option value="blue">Blue</option>
        </select>
        <button type="button" className="button--inscription" onClick={handleChangeAvatarColor}>Je m'inscris</button>
      </div>
    </div>

  );
}

// == Export
export default SignIn;
