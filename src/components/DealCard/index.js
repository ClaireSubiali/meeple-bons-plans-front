// == Import
import PropTypesLib from 'prop-types';
import './style.scss';

import { Link } from 'react-router-dom';

// TODO == Import pour l'heure
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faClock } from '@fortawesome/free-solid-svg-icons';

import flameIcon from '../../assets/img/logo-flamme.svg';
import iceCubeIcon from '../../assets/img/logo-icecube.svg';

// == Composant
function DealCard({
  id,
  title,
  game,
  description,
  shop,
  createdAt,
  offerPrice: reducedPrice,
  user }) {
  const calcPercentage = () => {
    const percentage = Math.round((reducedPrice * 100) / game.price);
    return percentage;
  };
  const percentage = calcPercentage();

  return (
    <div className="deal">
      <div className="left-deal">
        <img className="picture-deal" src={game.image} alt="Bon plan" />
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
            <h2>{title}</h2>
            <h6>{game.category.name}<span className="shop"> | boutique {shop.name}</span></h6>
          </div>
          <div className="deal-label">
            <div className="discount">- {percentage} %</div>
            <div className="price">{(reducedPrice).toFixed(2)} €</div>
          </div>
        </div>
        <div className="main-deal">
          <p className="deal-text">{description}</p>
        </div>
        <div className="footer-deal">
          <p className="footer-dealp">
            <Link to={`/bon-plan/${id}`}><button type="button" className="see-deal">Voir le bon plan</button></Link>
          </p>
          {/*
          <p className="footer-deal-time"><span className="clock"><FontAwesomeIcon icon={faClock} /></span>{createdAt}</p>*/}
        </div>
      </div>
    </div>
  );
}

DealCard.propType = {
  title: PropTypesLib.string.isRequired,
  game: PropTypesLib.object.isRequired,
  description: PropTypesLib.string.isRequired,
  shop: PropTypesLib.object.isRequired,
  createdAt: PropTypesLib.string.isRequired,
  reducedPrice: PropTypesLib.number.isRequired,
}

// == Export
export default DealCard;
