/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import
import PropTypesLib from 'prop-types';
import './style.scss';

// == Import des éléments de FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChess, faXmark } from '@fortawesome/free-solid-svg-icons';

// == Composant
function SearchGamePopUp({
  ToggleSearchGame,

}) {
  return (
    <div className="login-popup">
      <div className="form-popup">
        <div action="#" className="form-container">
          <div id="title_login"><FontAwesomeIcon icon={faChess} />Résultats de votre recherche<span><button aria-label="Fermer" type="button" className="cancel" onClick={ToggleSearchGame}><FontAwesomeIcon icon={faXmark} /></button></span>
          </div>
          <div className="results_searchgame">
            <ul>
              <li>Jeu</li>
              <li>Jeu</li>
              <li>Jeu</li>
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
