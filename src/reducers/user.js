import { faMugSaucer } from '@fortawesome/free-solid-svg-icons';
import {
   TOGGLE_VISIBILITY 
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
    //Token ? + Pseudo ? 
  },
};

// le reducer permet d'affecter a une action(const) une marche a suivre
//le spread operator ...toto
// A verifier V

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_VISIBILITY:
      return {
        ...state,
        loginSettings: {
          ...state.loginSettings,
          isOpen: !state.loginSettings.isOpen,
          email: action.msg,
        },
      };
    default:
      return state;
  }
}

export default reducer;
