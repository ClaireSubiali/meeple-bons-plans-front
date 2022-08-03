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
    const percentage = Math.round(-((reducedPrice - game.price) / game.price) * 100);
    return percentage;
  };
  const percentage = calcPercentage();
  let descriptionReformated = 'rien';

  if (description.length < 215 ) {
    descriptionReformated = description.substring(0, 215);
  } else {
    descriptionReformated = `${description.substring(0, 215)} ...`;
  }

  return (
    <div className="deal">
      <div className="left-deal">
        <Link to={`/bon-plan/${id}`}><img className="picture-deal" src={game.image} alt="Bon plan" /></Link>
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
            <div className="mainTitleDeal"> <Link to={`/bon-plan/${id}`}>{title}</Link></div>
            <div className="secondaryTitleDeal">{game.category.name}<span className="shop"> | {shop.name}</span></div>
          </div>
          {(reducedPrice === 0 ? '' : (
            <div className="deal-label">
              <div className="discount">-{percentage}%</div>
              <div className="price">{(reducedPrice).toFixed(2)}€</div>
            </div>
          ))}
          
        </div>
        <Link to={`/bon-plan/${id}`}>
          <div className="main-deal">
            <p className="deal-text">{descriptionReformated}</p>
          </div>
        </Link>
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
