import {
  //ajout d'un bon plan
  CHANGE_DEAL_GAME,
  CHANGE_DEAL_TITLE,
  TOGGLE_CONCERN_A_GAME,
  CHANGE_DEAL_DESCRIPTION,
  CHANGE_DEAL_URL,
  CHANGE_DEAL_VENDOR,
  CHANGE_DISCOUNTED_PRICE,
  CHANGE_SHIPPING_PRICE,
  CHANGE_DISCOUNT_CODE,
  CHANGE_EXPIRATION_DATE,
  SAVE_DEAL,
  TOGGLE_ADD_GAME,
  CHANGE_GAME, // POP UP ADD GAME
  CHANGE_URL,
  SAVE_ONE_DEAL,
  ADD_DEAL_SUMIT_FORM,
  TOGGLE_SEARCH_GAME,// POP UP SEARCH GAME
} from '../actions/deal';

// ici on initialise le state
const initialState = {
  activeDeal: '',
  dealList: [],

  addDealForm: {
    dealTitle: '',
    dealGame: '',
    concernAGame: true,
    dealDescription: '',
    dealURL: '',
    discountedPrice: '',
    shippingPrice: '',
    discountCode: '',
    expirationDate: '',
    dealVendor: '',
    isAddGame: false, // est-ce que l'encart suggérer un jeu est ouvert ?
    newGame: '',
    urlGame: '',
  },

  searchGame: {
    isSearchGame: false, // est-ce que l'encart suggérer un jeu est ouvert ?
  },
};

// ici on reprends le state inital ( avec state = initialState) et on lui ajoute (en écrasant) des modifications avec un "parametre"
function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_DEAL_TITLE:
      return {
        ...state,
        addDealForm: {
          ...state.addDealForm,
          dealTitle: action.title,
        },
      };
    case CHANGE_DEAL_GAME:
      return {
        ...state,
        addDealForm: {
          ...state.addDealForm,
          dealGame: action.game,
        },
      };
    case TOGGLE_CONCERN_A_GAME:
      return {
        ...state,
        addDealForm: {
          ...state.addDealForm,
          concernAGame: !state.addDealForm.concernAGame,
        },
      };
    case CHANGE_DEAL_DESCRIPTION:
      return {
        ...state,
        addDealForm: {
          ...state.addDealForm,
          dealDescription: action.description,
        },
      };
    case CHANGE_DEAL_URL:
      return {
        ...state,
        addDealForm: {
          ...state.addDealForm,
          dealURL: action.url,
        },
      };
    case CHANGE_DISCOUNTED_PRICE:
      return {
        ...state,
        addDealForm: {
          ...state.addDealForm,
          discountedPrice: action.price,
        },
      };
    case CHANGE_SHIPPING_PRICE:
      return {
        ...state,
        addDealForm: {
          ...state.addDealForm,
          shippingPrice: action.price,
        },
      };
    case CHANGE_DEAL_VENDOR:
      return {
        ...state,
        addDealForm: {
          ...state.addDealForm,
          dealVendor: action.vendor,
        },
      };
    case CHANGE_DISCOUNT_CODE:
      return {
        ...state,
        addDealForm: {
          ...state.addDealForm,
          discountCode: action.code,
        },
      };
    case CHANGE_EXPIRATION_DATE:
      return {
        ...state,
        addDealForm: {
          ...state.addDealForm,
          expirationDate: action.date,
        },
      };
    case SAVE_DEAL:
      return {
        ...state,
        dealList: action.deal,
      };
    case CHANGE_GAME:
      return {
        ...state,
        addDealForm: {
          ...state.addDealForm,
          newGame: action.newGame,
        },
      };
    case CHANGE_URL:
      return {
        ...state,
        addDealForm: {
          ...state.addDealForm,
          urlGame: action.urlGame,
        },
      };
    case TOGGLE_ADD_GAME:
      return {
        ...state,
        addDealForm: {
          ...state.addDealForm,
          isAddGame: !state.addDealForm.isAddGame,
        },
      };

      //WIP-------------------------POP UP SEARCH GAME-----------------
      case TOGGLE_SEARCH_GAME:
        return {
          ...state,
          searchGame: {
            ...state.searchGame,
            isSearchGame: !state.searchGame.isSearchGame,
          },
        };

      //Ici on envoie les data du ajouter un bon plan au stat
    case ADD_DEAL_SUMIT_FORM:
      return{
        ...state,
        addDealForm: {
          ...state.addDealForm,
          isAddGame: !state.addDealForm.isAddGame,
        },
      }
    case SAVE_ONE_DEAL:
      return {
        ...state,
        activeDeal: action.oneDeal.deal,
      };

    default:
      return state;
  }
}

export default reducer;
