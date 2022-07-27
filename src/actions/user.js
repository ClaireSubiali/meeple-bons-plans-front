// TODO IMPORT TEMPORAIRE LE TEMPS DE VERIFIER LES DONNES DE CONNEXION SANS API
// ! A supprimer après :
import data from '../data/dataUser';

// On creer une action seulement pour le dispatch pas besoin pour le useSelector

/*--------------------------------------------------------------------------------*/
/* ---------- ACTIONS GENERALES AVEC PLUSIEURS UTILISATIONS POSSIBLES ---------- */
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

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';

// Action creator => On l'utilise au moment du dispatch()
export function changeFieldValue(value, field) {
  return {
    type: CHANGE_FIELD_VALUE,
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




