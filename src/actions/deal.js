/* la liste des actions a gerer
- le nom du bon plan => dealTitle,
*/
export const CHANGE_DEAL_TITLE = 'CHANGE_DEAL_TITLE';

export function changeDealTitle(newTitle) {
  return {
    type: CHANGE_DEAL_TITLE,
    title: newTitle,
  };
}

/*
- le jeu => dealGame,
*/
export const CHANGE_DEAL_GAME = 'CHANGE_DEAL_GAME';

export function changeDealGame(newGame) {
  return {
    type: CHANGE_DEAL_GAME,
    game: newGame,
  };
}
/*
- le prix remisé => discountedPrice,
*/
export const CHANGE_DISCOUNTED_PRICE = 'CHANGE_DISCOUNTED_PRICE';

export function changeDiscountedPrice(newDiscountedPrice) {
  return {
    type: CHANGE_DISCOUNTED_PRICE,
    price: newDiscountedPrice,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const CHANGE_DEAL_DESCRIPTION = 'CHANGE_DEAL_DESCRIPTION';

// Action creator => On l'utilise au moment du dispatch()
export function changeDealDescription(newDescription) {
  return {
    type: CHANGE_DEAL_DESCRIPTION,
    description: newDescription,
  };
}

/*
- est-ce que le deal concerne un jeu en particulier => concernAGame
*/
// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const TOGGLE_CONCERN_A_GAME = 'TOGGLE_CONCERN_A_GAME';

// Action creator => On l'utilise au moment du dispatch()
export function toggleConcernAGame() {
  return {
    type: TOGGLE_CONCERN_A_GAME,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const CHANGE_SHIPPING_PRICE = 'CHANGE_SHIPPING_PRICE';

// Action creator => On l'utilise au moment du dispatch()
export function changeShippingPrice(newShippingPrice) {
  return {
    type: CHANGE_SHIPPING_PRICE,
    price: newShippingPrice,
  };
}

/*
- La boutique => dealVendor,
*/

export const CHANGE_DEAL_VENDOR = 'CHANGE_DEAL_VENDOR';

export function changeVendor(newVendor) {
  return {
    type: CHANGE_DEAL_VENDOR,
    vendor: newVendor,
  };
}

/*
- le lien du bon plan => dealURL,
*/
export const CHANGE_DEAL_URL = 'CHANGE_DEAL_URL';

export function changeDealUrl(newGameUrl) {
  return {
    type: CHANGE_DEAL_URL,
    url: newGameUrl,
  };
}

/*
- la date de fin de promo => expirationDate,
- La boutique => dealVendor,
- le lien du bon plan => dealURL,
- Code promo => discountCode,
*/
export const CHANGE_DISCOUNT_CODE = 'CHANGE_DISCOUNT_CODE';

export function changediscountcode(newDiscountedCode) {
  return {
    type: CHANGE_DISCOUNT_CODE,
    code: newDiscountedCode,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const CHANGE_EXPIRATION_DATE = 'CHANGE_EXPIRATION_DATE';

// Action creator => On l'utilise au moment du dispatch()
export function changeExpDate(newExpDate) {
  return {
    type: CHANGE_EXPIRATION_DATE,
    date: newExpDate,
  };
}

//! -------------------ACTION POUR MIDDLEWARES ---------------------------------------

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const FETCH_DEAL = 'FETCH_DEAL';

// Action creator => On l'utilise au moment du dispatch()
export function fetchDeal() {
  return {
    type: FETCH_DEAL,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const SAVE_DEAL = 'SAVE_DEAL';

// Action creator => On l'utilise au moment du dispatch()
export function saveDeal(newDealList) {
  return {
    type: SAVE_DEAL,
    deal: newDealList,
  };
}

