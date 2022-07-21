/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import
// import PropTypesLib from 'prop-types';
import './style.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';

// == Composant
function AddDeal() {
  return (
    <div>
      <form>
        <h1 className="title"><FontAwesomeIcon icon={faTags} /><span className="titlepad">Ajouter un bon plan</span></h1>
        <div className="headerDeal">
          <label className="headerTitle" htmlFor="deal-title">TITRE </label>
          <input type="text" id="deal-title" placeholder="Titre du bon plan" />
          <label className="headerTitle" htmlFor="deal-search">JEU</label>
          <input type="text" id="deal-search" placeholder="Saisissez votre recherche" />
          <div className="headerDealRightElement"><span className="missing-game">Jeu manquant ?</span>
            <button className="addgame" type="button">Suggérer un jeu</button>
          </div>
        </div>
        <div className="gameornot">
          <input type="checkbox" id="game-concern" />
          <label htmlFor="game-concern">Cochez si le bon plan ne concerne pas un jeu en particulier</label>
          <span className="gameDeal">This War of Mine</span>
        </div>
        <div className="content">
          <label className="secondarytitle" htmlFor="deal-description">DESCRIPTION</label>
          <textarea
            rows="6"
            id="deal-description"
            placeholder="Indiquez une description du bon plan"
          />
        </div>
        <div>
          <label htmlFor="deal-link">Lien du bon plan</label>
          <input
            type="text"
            id="deal-link"
            placeholder="Lien vers le bon plan en ligne (ou le site de la boutique physique si pas bon plan en ligne)"
          />
        </div>
        <div className="info">
          <label htmlFor="deal-discount-price">PRIX REMISÉ</label>
          <input type="number" id="deal-discount-price" />
          <label htmlFor="deal-shipping-price">FRAIS DE PORT</label>
          <input type="number" id="deal-shipping-price" />
          <label htmlFor="deal-vendor">VENDEUR</label>
          <select id="deal-vendor">
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
          <input type="text" id="deal-discount-code" />
          <label htmlFor="deal-end">EXPIRE LE<span> (facultatif)</span></label>
          <input type="date" id="deal-end" />
        </div>
        <button className="send" type="submit">Envoyer</button>
      </form>
    </div>
  );
}

// == Export
export default AddDeal;
