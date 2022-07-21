// == Import
// import PropTypesLib from 'prop-types';
import './style.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

import flameIcon from '../../assets/img/logo-flamme.svg';
import iceCubeIcon from '../../assets/img/logo-icecube.svg';
import testImage from '../../assets/img/img-test.png';

// == Composant
function DealCard() {
  return (
    <div className="deal">
      <div className="left-deal">
        <img className="picture-deal" src={testImage} alt="Bon plan" />
        <div className="vote">
          <div className="icone-degree">
            <img className="flamme" src={flameIcon} alt="Icone flamme" />
          </div>
          <div className="degree">25°</div>
          <div className="icone-degree">
            <img className="icecube" src={iceCubeIcon} alt="Icone glacon" />
          </div>
        </div>
      </div>
      <div className="right-deal">
        <div className="header-deal">
          <div className="title-deal">
            <h2>Dixit</h2>
            <h6>Bon plan jeux de société<span className="shop"> | Philibert</span></h6>
          </div>
          <div className="deal-label">
            <div className="discount">-20%</div>
            <div className="price">20.90€</div>
          </div>
        </div>
        <div className="main-deal">
          <p className="deal-text">Le principe de Dixit est simple : les joueurs doivent deviner et faire deviner des cartes illustrées. À chaque tour, un joueur devient le conteur qui choisit une carte et la décrit avec une phase, un mot ou un son...</p>
        </div>
        <div className="footer-deal">
          <p className="footer-dealp">
            <button type="button" className="see-deal">Voir le bon plan</button>
          </p>
          <p className="footer-deal-time"><span className="clock"><FontAwesomeIcon icon={faClock} /></span> il y a 15 minutes</p>
        </div>
      </div>
    </div>
  );
}

// == Export
export default DealCard;
