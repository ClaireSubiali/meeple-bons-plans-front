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

/*
//gestion du changement de champ (modife dans les champs)
export const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';

//ici l'action creator qui est declanché au moment du dispatch
export function changeFieldValue ( value, field) {
return {
    type: CHANGE_FIELD_VALUE,
        value,
        field,
    };
}
//Gestion du login

// IL faut creer un action creator qui servira pour le dispatch
export const LOGIN = 'LOGIN'

//action type il sert dans l'action creator et dans le reducer
export const login() {
    return {
        type : LOGIN,
    };
}
*/
