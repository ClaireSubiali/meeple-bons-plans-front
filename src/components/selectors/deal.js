/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  on trouve la recette voulue dans la liste des recettes
 * @param {Array} dealList - liste de tous les deals
 * @param {string} searchedDealID - l'id de la catégorie recherchée
 * @return {Array} - Tableau des deals corespondants à la catégorie renseignée
 */
export function filterDealOfOneCategory(dealList, categoryId) {
  const deal = dealList.filter((testedDeal) => {
    // TODO remettre un === mais attention que ce soit deux types identiques
    return (testedDeal.game.category.id == categoryId && testedDeal.status === true);
  });
  return deal;
}
