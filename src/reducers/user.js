import {
  TOGGLE_VISIBILITY,
  CHANGE_MAIL,
  CHECK_LOGIN,
  CHANGE_PASSWORD,
  TOGGLE_VISIBILITY_AND_AVATAR,
  CLICK_MEEPLE,
} from '../actions/user';

//CHANGE_FIELD_VALUE,
 //   LOGIN,

// le initalstate sert a creer un stat "vierge" qui sert modifier à chaque iteration  
const initialState = {
  currentUser: '', // Pseudo de l'utilisateur Renvoyé par l'API lors de la connexion
  userAvatar: '', // Avatar de l'utilisateur renvoyé par l'api lors de la connexion
  isAvatarVisible: false,

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
          temporaryMessage: action.temporaryMessage,
        },
      };
    case TOGGLE_VISIBILITY_AND_AVATAR:
      return {
        ...state,
        loginSettings: {
          ...state.loginSettings,
          isOpen: !state.loginSettings.isOpen,
        },
        isAvatarVisible: !state.isAvatarVisible,
      };
    case CLICK_MEEPLE:
      return {
        ...state,
        isAvatarVisible: false,
        loginSettings: {
          isOpen: false, 
          email: '', 
          password: '',
          temporaryMessage: '',
          
        },
      };
    default:
      return state;
  }
}

export default reducer;
