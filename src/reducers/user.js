import {
  TOGGLE_VISIBILITY,
  CHANGE_MAIL,
  CHECK_LOGIN,
  CHANGE_PASSWORD
} from '../actions/user';

//CHANGE_FIELD_VALUE,
 //   LOGIN,

// le initalstate sert a creer un stat "vierge" qui sert modifier à chaque iteration  
const initialState = {
  currentUser: '', // Renvoyé par l'API lors de la connexion

  loginSettings: {
    isOpen: false, // est-ce que l'encart de connexion est ouvert ?
    email: '', // pour champs contrôlé email
    password: '', // pour le champs contrôlé du mot de passe
    temporaryMessage: '',//!Temporaire avant API
    // Token ? + Pseudo ?
  },
};

// le reducer permet d'affecter a une action(const) une marche a suivre
// le spread operator ...toto sert a deverser les infos ciblé dans toto

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_VISIBILITY:
      return {
        ...state,
        loginSettings: {
          ...state.loginSettings,
          isOpen: !state.loginSettings.isOpen,
        },
      };
    case CHANGE_MAIL:
      return {
        ...state,
        loginSettings: {
          ...state.loginSettings,
          email: action.newMail,
        },
      };

    case CHANGE_PASSWORD:
    return {
        ...state,
        loginSettings: {
          ...state.loginSettings,
          password: action.newPassword,
        },
      };
      
    case CHECK_LOGIN:
      return {
        ...state,
        loginSettings: {
          ...state.loginSettings,
          temporaryMessage: action.status,
        },
      };
    default:
      return state;
  }
}

export default reducer;
