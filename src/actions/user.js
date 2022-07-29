// TODO IMPORT TEMPORAIRE LE TEMPS DE VERIFIER LES DONNES DE CONNEXION SANS API
// ! A supprimer après :
import data from '../data/dataUser';

// On creer une action seulement pour le dispatch pas besoin pour le useSelector

/*--------------------------------------------------------------------------------*/
/* ---------- ACTIONS GENERALES AVEC PLUSIEURS UTILISATIONS POSSIBLES ----------- */
/*--------------------------------------------------------------------------------*/

// le useDispatch (dispatch) envoit a l'action l'info qui elle même transporte les infos au reducer

export const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY';
/**
 * @param {string} field nom de l'entrée du state à modifier
 * @returns
 */
export function toggleVisibility(field) {
  return {
    type: TOGGLE_VISIBILITY,
    field,
  };
}

export const CHANGE_FIELD_VALUE_LOGIN_SETTINGS = 'CHANGE_FIELD_VALUE_LOGIN_SETTINGS';
/**
 * Permet de changer une valeur dans le state dans le sous tableau LoginSettings
 * @param {string} value nouvelle valeur à inscrire
 * @param {string} field nom de l'entrée à modifier dans le state
 * @returns
 */
export function changeFieldValueLoginSettings(value, field) {
  return {
    type: CHANGE_FIELD_VALUE_LOGIN_SETTINGS,
    value: value,
    field: field,
  };
}

export const CHANGE_FIELD_VALUE_CREATE_ACCOUNT = 'CHANGE_FIELD_VALUE_CREATE_ACCOUNT';
/**
 * Permet de changer une valeur dans le state dans le sous tableauCreateAccount
 * @param {string} value nouvelle valeur à inscrire
 * @param {string} field nom de l'entrée à modifier dans le state
 * @returns
 */
export function changeFieldValueCreateAccount(value, field) {
  return {
    type: CHANGE_FIELD_VALUE_CREATE_ACCOUNT,
    value: value,
    field: field,
  };
}

/*--------------------------------------------------------------------------------*/
/* ------------ ACTIONS RELATIVES A LA CONNEXION / DECONNEXION------------------- */
/*--------------------------------------------------------------------------------*/

export const LOGOUT = 'LOGOUT';
/**
 * Vide le state des informations de connexion de l'utilisateur, utilisé pour la déconnexion.
 * @returns
 */
export function disconnect() {
  return {
    type: LOGOUT,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const FETCH_FORM_SIGNIN = 'FETCH_FORM_SIGNIN';

// Action creator => On l'utilise au moment du dispatch()
export function fetchFromSignIn() {
  return {
    type: FETCH_FORM_SIGNIN,
  };
}

//Ici on defini la l'action click sur le button 'se connecter' pour envoyer les champs a la bdd
// export const SEND_DATA_USER = 'SEND_DATA_USER';

/*export function sendUser() {
  return (
    type: SEND_DATA_USER;
    name: createPseudo,
    email: createMail,
    password: createPassword,
    avatar: avatarColor,
  )
}*/

//! DEBUT DE LA PARTIE TEMPORAIRE
// TODO ACTION TEMPORAIRE A SUPPRIMER QUAND API PERMET LA CONNEXION
// A REMPLACER PAR L'ACTION POUR LE MIDDLEWARE
// pour gerer le dispatcher de icone/avatar
export const TOGGLE_VISIBILITY_AND_AVATAR = 'TOGGLE_VISIBILITY_AND_AVATAR';
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
//! FIN DE LA PARTIE TEMPORAIRE


// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const FETCH_LOGIN = 'FETCH_LOGIN';

// Action creator => On l'utilise au moment du dispatch()
export function fetchLogin() {
  return {
    type: FETCH_LOGIN,
  };
}

