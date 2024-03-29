import {
  TOGGLE_VISIBILITY,
  CHANGE_MAIL,
  CHECK_LOGIN,
  CHANGE_PASSWORD,
  TOGGLE_VISIBILITY_AND_AVATAR,
  CLICK_MEEPLE,
  TOGGLE_IS_PROFILE_VISIBLE,
  // L'inscription
  CHANGE_CREATE_PSEUDO,
  CHANGE_CREATE_MAIL,
  CHANGE_CREATE_PASSWORD,
  CHANGE_CONFIRM_PASSWORD,
  TOGGLE_AVATAR_COLOR,
} from '../actions/user';

// le initalstate sert a creer un stat "vierge" qui sert modifier à chaque iteration  
const initialState = {
  currentUser: '', // Pseudo de l'utilisateur Renvoyé par l'API lors de la connexion
  userAvatar: '', // Avatar de l'utilisateur renvoyé par l'api lors de la connexion
  isAvatarVisible: false,

  loginSettings: {
    isProfileVisible: false,
    isOpen: false, // est-ce que l'encart de connexion est ouvert ?
    email: '', // pour champs contrôlé email
    password: '', // pour le champs contrôlé du mot de passe
    temporaryMessage: '',//!Temporaire avant API
    // Token ? + Pseudo ?
  },

  createAccount: {
    createPseudo: '',
    createMail: '',
    createPassword: '',
    confirmPassword: '',
    avatarColor: '',
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
    case TOGGLE_IS_PROFILE_VISIBLE:
      return {
        ...state,
        loginSettings: {
          ...state.loginSettings,
          isProfileVisible: !state.loginSettings.isProfileVisible,
        },
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
      // Inscription
    case CHANGE_CREATE_PSEUDO:
      return {
        ...state,
        createAccount: {
          ...state.createAccount,
          createPseudo: action.newPseudo,
        },
      };
    case CHANGE_CREATE_MAIL:
      return {
        ...state,
        createAccount: {
          ...state.createAccount,
          createMail: action.mail,
        },
      };
    case CHANGE_CREATE_PASSWORD:
      return {
        ...state,
        createAccount: {
          ...state.createAccount,
          createPassword: action.password,
        },
      };
    case CHANGE_CONFIRM_PASSWORD:
      return {
        ...state,
        createAccount: {
          ...state.createAccount,
          confirmPassword: action.password,
        },
      };
    case TOGGLE_AVATAR_COLOR:
      return {
        ...state,
        createAccount: {
          ...state.createAccount,
          avatarColor: action.color,
        },
      };
    default:
      return state;
  }
}

export default reducer;
