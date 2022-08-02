/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import
import PropTypesLib from 'prop-types';
import './style.scss';

// == Import des éléments de FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

// == Composant
function SearchGamePopUp({
  ToggleSearchGame,

}) {
  return (
    <div className="login-popup">
      <div className="form-popup searchgamepopup">
        <div action="#" className="form-container">
          <div id="title_login"><FontAwesomeIcon icon={faMagnifyingGlass} />Résultats de votre recherche<span><button aria-label="Fermer" type="button" className="cancel" onClick={ToggleSearchGame}><FontAwesomeIcon icon={faXmark} /></button></span>
          </div>
          <div className="results_searchgame">
            <ul>
              <li><img src="https://www.myludo.fr/img/jeux/1640829454/300/by/50473.png"/><span>Dixit</span></li>
              <li><img src="https://www.myludo.fr/img/jeux/1640829454/300/by/50473.png"/><span>Ici le nom du second jeu</span></li>
              <li><img src="https://www.myludo.fr/img/jeux/1640829454/300/by/50473.png"/><span>Ici le nom du 3e jeu</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

SearchGamePopUp.propTypes = {
  ToggleSearchGame: PropTypesLib.func.isRequired,
};

SearchGamePopUp.defaultProps = {
};

// == Export
export default SearchGamePopUp;
