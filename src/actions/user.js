//IMPORT TEMPORAIRE LE TEMPS DE VERIFIER LES DONNES DE CONNEXION SANS API
// ! A supprimer après :
import { useDispatch } from 'react-redux';
import data from '../data/dataUser';



//On creer une actions seulement pour le dispatch pas besoin pour le useSelector

// IL faut creer une const exemple


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
    loginStatus = 'MOT DE PASSE INCORRECT';
    console.log('pass incorrect');
  }
  else {
    loginStatus = 'VOUS N\'ETES PAS MEMBRE';
    console.log('pas membre');
  }
  return {
    type: CHECK_LOGIN,
    temporaryMessage: loginStatus,
  };
}
