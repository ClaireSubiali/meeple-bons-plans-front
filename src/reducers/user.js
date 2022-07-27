import {
  TOGGLE_VISIBILITY,
  CHECK_LOGIN,
  TOGGLE_VISIBILITY_AND_AVATAR,
  LOGOUT,
  // L'inscription
  CHANGE_CREATE_PSEUDO,
  CHANGE_CREATE_MAIL,
  CHANGE_CREATE_PASSWORD,
  CHANGE_CONFIRM_PASSWORD,
  TOGGLE_AVATAR_COLOR,
  CHANGE_FIELD_VALUE,
} from '../actions/user';

// le initalstate sert a créer un statE "vierge" qui sert modifier à chaque itération
const initialState = {
  currentUser: '', // Pseudo de l'utilisateur Renvoyé par l'API lors de la connexion
  userAvatar: '', // Avatar de l'utilisateur renvoyé par l'api lors de la connexion
  isAvatarVisible: false,

  loginSettings: {
    isProfileVisible: false,
    isLoginVisible: false, // est-ce que l'encart de connexion est ouvert ?
    email: '', // pour champs contrôlé email
    password: '', // pour le champs contrôlé du mot de passe
    temporaryMessage: '', // !Temporaire avant API
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
    // TOGGLE LA VISIBILITE D'UN ELEMENT
    case TOGGLE_VISIBILITY:
      return {
        ...state,
        loginSettings: {
          ...state.loginSettings,
          [action.field]: !state.loginSettings[action.field],
        },
      };
    // PERMET DE CHANGER LA VALEUR D'UN CHAMP CONTROLE
    case CHANGE_FIELD_VALUE:
      return {
        ...state,
        loginSettings: {
          ...state.loginSettings,
          [action.field]: action.value,
        },
      };
    // TODO CASE TEMPORAIRE AVANT API QUI VERIFIE LA CONNEXION
    case CHECK_LOGIN:
      return {
        ...state,
        loginSettings: {
          ...state.loginSettings,
          temporaryMessage: action.temporaryMessage,
        },
      };
    // TODO CASE TEMPORAIRE AVANT API QUI AFFICHE L'AVATAR SI CONNEXION OK A MODIFIER QUAND API
    case TOGGLE_VISIBILITY_AND_AVATAR:
      return {
        ...state,
        loginSettings: {
          ...state.loginSettings,
          isLoginVisible: !state.loginSettings.isLoginVisible,
        },
        isAvatarVisible: !state.isAvatarVisible,
      };
    // PERMET LA DECONNEXION (VIDE DU STATE DONNÉES USER)
    case LOGOUT:
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
