//IMPORT TEMPORAIRE LE TEMPS DE VERIFIER LES DONNES DE CONNEXION SANS API
// ! A supprimer après :
import { useDispatch } from 'react-redux';
import data from '../data/dataUser';

//On creer une actions seulement pour le dispatch pas besoin pour le useSelector
// IL faut creer une const exemple

///////////////////////////////////////////////////////////////////! CONNEXION //////////////////////////////////////////////////////

export const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY';

// le useDispatch (dispatch) envoit a l'action qui elle meme contient les infos au reducer
export function toggleLogin() {
  return {
    type: TOGGLE_VISIBILITY,
  };
}

export const CHANGE_MAIL = 'CHANGE_MAIL';

export function onChangeMail(inputMail) {
  return {
    type: CHANGE_MAIL,
    newMail: inputMail,
  };
}

export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';

export function OnChangePassword(inputPassword) {
  return {
    type: CHANGE_PASSWORD,
    newPassword: inputPassword,
  };
}

export const CLICK_MEEPLE = 'CLICK_MEEPLE';

export function disconnect() {
  return {
    type: CLICK_MEEPLE,
  };
}
// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const TOGGLE_IS_PROFILE_VISIBLE = 'TOGGLE_IS_PROFILE_VISIBLE';

// Action creator => On l'utilise au moment du dispatch()
export function toggleIsProfileVisible() {
  return {
    type: TOGGLE_IS_PROFILE_VISIBLE,
  };
}

// pour gerer le dispatcher de icone/avatar
export const TOGGLE_VISIBILITY_AND_AVATAR = 'TOGGLE_VISIBILITY_AND_AVATAR';


//! ACTION TEMPORAIRE A SUPPRIMER QUAND API
// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const CHECK_LOGIN = 'CHECK_LOGIN';


// Action creator => On l'utilise au moment du dispatch()
export function testLogin(mailFromState, passwordFromState) {
  
  let loginStatus = '';
  console.log(mailFromState);
  const meuh = data.find((user) => user.email === mailFromState);
  if (meuh) {
    if (meuh.password === passwordFromState) {
      loginStatus = 'OK CONNEXION DE L\'UTILISATEUR';
      console.log('pass ok');
      return {
        type: TOGGLE_VISIBILITY_AND_AVATAR,
      };
    }
    loginStatus = 'ERREUR : Mot de passe erroné…';
    console.log('pass incorrect');
  }
  else {
    loginStatus = 'ERREUR : Cet utilisateur n\'existe pas';
    console.log('pas membre');
  }
  return {
    type: CHECK_LOGIN,
    temporaryMessage: loginStatus,
  };
}

//////////////////////////////////////////////////////// INSCRIPTION //////////////////////////////////////////////////// 

// ajouter un pseudo
export const CHANGE_CREATE_PSEUDO = 'CHANGE_CREATE_PSEUDO';

export function changeCreatePseudo(createPseudo) {
  return {
    type: CHANGE_CREATE_PSEUDO,
    newPseudo: createPseudo,
  };
}

//rajouter un mail
export const CHANGE_CREATE_MAIL = 'CHANGE_CREATE_MAIL';

export function changeCreateEmail(createMail) {
  return {
    type: CHANGE_CREATE_MAIL,
    mail: createMail,
  };
}

////Rajouter un password
export const CHANGE_CREATE_PASSWORD = 'CHANGE_CREATE_PASSWORD';

export function changeCreatePassword(createPassword) {
  return {
    type: CHANGE_CREATE_PASSWORD,
    password: createPassword,
  };
}

////Confirmer le password
export const CHANGE_CONFIRM_PASSWORD = 'CHANGE_CONFIRM_PASSWORD';

export function changeConfirmPassword(confimPassword) {
  return {
    type: CHANGE_CONFIRM_PASSWORD,
    password: confimPassword,
  };
}

////Choisir son avatar
export const TOGGLE_AVATAR_COLOR = 'TOGGLE_AVATAR_COLOR';

export function changeAvatarColor(choosedColor) {
  return {
    type: TOGGLE_AVATAR_COLOR,
    color: choosedColor,
  };
}

