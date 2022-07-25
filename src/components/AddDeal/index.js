/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import
// import PropTypesLib from 'prop-types';
import './style.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

import {
  changeDealTitle,
  changeDealGame,
  toggleConcernAGame,
  changeDealDescription,
  changeDiscountedPrice,
  changeDealUrl,
  changeShippingPrice,
  changeVendor,
  changediscountcode,
  changeExpDate,
} from '../../actions/deal';

// == Composant
function AddDeal() {
  const dispatch = useDispatch();
  const {
    dealTitle,
    dealGame,
    concernAGame,
    dealDescription,
    dealURL,
    discountedPrice,
    shippingPrice,
    discountCode,
    expirationDate,
    dealVendor,
  } = useSelector((state) => state.deal.addDealForm);

  const handleChangeDealTitle = (event) => {
    const newDealTitle = event.currentTarget.value;
    dispatch(changeDealTitle(newDealTitle));
  };

  const handleChangeDealGame = (event) => {
    const newDealGame = event.currentTarget.value;
    dispatch(changeDealGame(newDealGame));
  };

  const handleToggleConcernAGame = () => {
    dispatch(toggleConcernAGame());
  };

  const handleChangeDescription = (event) => {
    const newDescription = event.currentTarget.value;
    dispatch(changeDealDescription(newDescription));
  };

  const handleChangeDiscountedPrice = (event) => {
    const newDiscountedPrice = event.currentTarget.value;
    dispatch(changeDiscountedPrice(newDiscountedPrice));
  };

  //champ controlé de l'URL
  const handleGameUrl = (event) => {
    const newGameUrl = event.currentTarget.value;
    dispatch(changeDealUrl(newGameUrl));
  };

  const handleChangeShippingPrice = (event) => {
    const newShippingPrice = event.currentTarget.value;
    dispatch(changeShippingPrice(newShippingPrice));
  };

  const handleChangeVendor = (event) => {
    const newVendor = event.currentTarget.value;
    dispatch(changeVendor(newVendor));
  };

  const handleChangeDiscountCode = (event) => {
    const newDiscountedCode = event.currentTarget.value;
    dispatch(changediscountcode(newDiscountedCode));
  };

  const handleChangeExpirationDate = (event) => {
    const newExpDate = event.currentTarget.value;
    dispatch(changeExpDate(newExpDate));
  };
  
  return (
    <div>
      <form>
        <h1 className="title"><FontAwesomeIcon icon={faTags} /><span className="titlepad">Ajouter un bon plan</span></h1>
        <div className="headerDeal">
          <label className="headerTitle" htmlFor="deal-title">TITRE </label>
          <input type="text" id="deal-title" placeholder="Titre du bon plan" value={dealTitle} onChange={handleChangeDealTitle} />
          <label className="headerTitle" htmlFor="deal-search">JEU</label>
          <input type="text" id="deal-search" placeholder="Saisissez votre recherche" value={dealGame} onChange={handleChangeDealGame} />
          <div className="headerDealRightElement"><span className="missing-game">Jeu manquant ?</span>
            <button className="addgame" type="button">Suggérer un jeu</button>
          </div>
        </div>
        <div className="gameornot">
          <input type="checkbox" id="game-concern" checked={concernAGame ? 'checked' : ''} onChange={handleToggleConcernAGame} />
          <label htmlFor="game-concern">Cochez si le bon plan ne concerne pas un jeu en particulier</label>
          <span className="gameDeal">This War of Mine</span>
        </div>
        <div className="content">
          <label className="secondarytitle" htmlFor="deal-description">DESCRIPTION</label>
          <textarea
            rows="6"
            id="deal-description"
            placeholder="Indiquez une description du bon plan"
            value={dealDescription}
            onChange={handleChangeDescription}
          />
        </div>
        <div>
          <label htmlFor="deal-link">Lien du bon plan</label>
          <input
            onChange={handleGameUrl}
            value={dealURL}
            type="text"
            id="deal-link"
            placeholder="Lien vers le bon plan en ligne (ou le site de la boutique physique si pas bon plan en ligne)"
          />
        </div>
        <div className="info">
          <label htmlFor="deal-discount-price">PRIX REMISÉ</label>
          <input type="number" id="deal-discount-price" value={discountedPrice} onChange={handleChangeDiscountedPrice} />
          <label htmlFor="deal-shipping-price">FRAIS DE PORT</label>
          <input type="number" id="deal-shipping-price" value={shippingPrice} onChange={handleChangeShippingPrice} />
          <label htmlFor="deal-vendor">VENDEUR</label>
          <select id="deal-vendor" value={dealVendor} onChange={handleChangeVendor}>
            <option value="">---Choisissez un vendeur---</option>
            <option value="philibert">Philibert</option>
            <option value="fnac">La Fnac</option>
            <option value="cultura">Cultura</option>
            <option value="donjon-deodatien">Le Donjon déodatien</option>
            <option value="other">Autre boutique</option>
          </select>
        </div>
        <div className="secondaryInfo">
          <label htmlFor="deal-discount-code">CODE PROMO</label>
          <input type="text" onChange={handleChangeDiscountCode} value={discountCode} id="deal-discount-code" />
          <label htmlFor="deal-end">EXPIRE LE<span> (facultatif)</span></label>
          <input type="date" id="deal-end" value={expirationDate} onChange={handleChangeExpirationDate} />
        </div>
        <button className="send" type="submit">Envoyer</button>
      </form>
    </div>
  );
}

// == Export
export default AddDeal;
