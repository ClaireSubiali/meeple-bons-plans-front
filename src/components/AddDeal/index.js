/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import
// import PropTypesLib from 'prop-types';
import './style.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

// == Import de composants
import AddGamePopUp from './AddGamePopUp';  //TODO Pop Up ADD GAME

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
  OnChangeGame,
  OnChangeUrl,
  ToggleAddGame,
  fetchFromAddDeal,//<----------------------------------------
  searchGame,
} from '../../actions/deal';



// == Composant
function AddDeal() {
  const dispatch = useDispatch();
  const {
    //On importles sous state
    isAddGame, //TODO Pop Up ADD GAME
    newGame,
    urlGame,
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

 // TODO Pop Up ADD GAME
  /* ------------ AFFICHAGE DES POPUPS ------------ */
  /**
   * Function that toggle the login popup
   */
  const handleClickToggleAddGame = () => {
    dispatch(ToggleAddGame());}

  const handleSubmitGame = () => {
    dispatch(handleSubmitGame());}

  const handleChangeGame = (event) => {
    const inputAddGame = event.currentTarget.value;
    dispatch(OnChangeGame(inputAddGame));
  };

  const handleChangeUrl = (event) => {
    const inputUrlGame = event.currentTarget.value;
    dispatch(OnChangeUrl(inputUrlGame));
  };
  const handleSubmitAddDeal = (event) => {
    event.preventDefault();
    console.log('new deal composant ');
    dispatch(fetchFromAddDeal());
  };
  const handleSearchGame = () => {
    
    console.log('test search game');
    dispatch(searchGame(dealGame));

  }

  return (
    <div className="form-section">
      <form onSubmit={handleSubmitAddDeal}>
        <div className="form-title"><FontAwesomeIcon icon={faTags} /><span className="form-span">Ajouter un bon plan</span></div>
        <div className="adddeal-header">
          <label className="form-secondarytitle" htmlFor="deal-title">TITRE</label>
          <input className="form-input" type="text" id="deal-title" placeholder="Titre du bon plan" value={dealTitle} onChange={handleChangeDealTitle} />
          <label className="form-secondarytitle" htmlFor="deal-search">NOM DU JEU</label>
          <input className="form-input" type="text" id="deal-search" placeholder="Saisissez votre recherche" value={dealGame} onChange={handleChangeDealGame} />
          <button type="button" onClick={handleSearchGame}> cherche jeu</button>
          <div className="adddeal-right-element"><span className="missing-game">Jeu manquant ?</span>
            <button className="button-addgame" onClick={handleClickToggleAddGame} type="button">Suggérer un jeu</button>
          </div>
        </div>
        <div className="gameornot">
          <input type="checkbox" id="game-concern" checked={concernAGame ? 'checked' : ''} onChange={handleToggleConcernAGame} />
          <label htmlFor="game-concern">Cochez si le bon plan ne concerne pas un jeu en particulier</label>
          <span className="adddeal-game">This War of Mine</span>
        </div>
        <div className="content">
          <label className="form-secondarytitle" htmlFor="deal-description">DESCRIPTION</label>
          <textarea
            className="form-input"
            rows="6"
            id="deal-description"
            placeholder="Indiquez une description du bon plan"
            value={dealDescription}
            onChange={handleChangeDescription}
          />
        </div>
        <div>
          <label className="form-secondarytitle" htmlFor="deal-link">LIEN DU BON PLAN</label>
          <input
            className="form-input"
            onChange={handleGameUrl}
            value={dealURL}
            type="text"
            id="deal-link"
            placeholder="Lien vers le bon plan en ligne (ou un lien de la boutique physique)"
          />
        </div>
        <div className="adddeal-info">
          <div className="adddeal-info-title"><label className="form-secondarytitle" htmlFor="deal-discount-price">PRIX REMISÉ</label></div>
          <div className="input-info-deal"><input className="form-input" type="number" id="deal-discount-price" value={discountedPrice} onChange={handleChangeDiscountedPrice} /></div>
          <div className="adddeal-info-title"><label className="form-secondarytitle" htmlFor="deal-shipping-price">FRAIS DE PORT</label></div>
          <div className="input-info-deal"><input className="form-input" type="number" id="deal-shipping-price" value={shippingPrice} onChange={handleChangeShippingPrice} /></div>
        </div>
        <div>
          <label className="form-secondarytitle" htmlFor="deal-vendor">VENDEUR</label>
          <select className="form-input" id="deal-vendor" value={dealVendor} onChange={handleChangeVendor}>
            <option value="">---Choisissez un vendeur---</option>
            <option value="philibert">Philibert</option>
            <option value="fnac">La Fnac</option>
            <option value="cultura">Cultura</option>
            <option value="donjon-deodatien">Le Donjon déodatien</option>
            <option value="other">Autre boutique</option>
          </select>
        </div>
        <div className="adddeal-secondaryInfo">
          <label className="form-secondarytitle" htmlFor="deal-discount-code">CODE PROMO</label>
          <input className="form-input" type="text" onChange={handleChangeDiscountCode} value={discountCode} id="deal-discount-code" />
          <label className="form-secondarytitle" htmlFor="deal-end">EXPIRE LE<span> (facultatif)</span></label>
          <input className="form-input" type="date" id="deal-end" value={expirationDate} onChange={handleChangeExpirationDate} />
        </div>
        <div className="button_div">
          <button className="form-button-validate" type="submit">Envoyer</button>
        </div>
      </form>
      {/* ---------- POPUP D'AJOUT DE JEU ---------- */}
      {isAddGame ? (
        <AddGamePopUp
          SubmitGame={handleSubmitGame}
          ToggleAddGame={handleClickToggleAddGame}
          ChangeGame={handleChangeGame}
          ChangeUrl={handleChangeUrl}
          NewGame={newGame}
          UrlGame={urlGame}
        />
      ) : ''}
    </div>
  );
}
// == Export
export default AddDeal;
