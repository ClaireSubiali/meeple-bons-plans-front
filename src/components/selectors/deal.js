/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  on trouve la recette voulue dans la liste des recettes
 * @param {Array} dealList - touts les deals
 * @param {string} searchedDealID - l'id du deal recherché
 * @return {Object} - Le deal correspondant à la recherche
 */
export function findDeal(dealList, searchedDealID) {
  const deal = dealList.find((testedDeal) => {
    // TODO remettre un === mais attention que ce soit deux types identiques
    return testedDeal.id == searchedDealID;
  });
  return deal;
}
