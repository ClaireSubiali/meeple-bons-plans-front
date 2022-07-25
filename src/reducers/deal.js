import {
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
} from '../actions/deal';

const initialState = {
  addDealForm: {
    dealTitle: '',
    dealGame: '',
    concernAGame: false,
    dealDescription: '',
    dealURL: '',
    discountedPrice: '',
    shippingPrice: '',
    discountCode: '',
    expirationDate: '',
    dealVendor: '',
  },
};

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
    default:
      return state;
  }
}

export default reducer;
