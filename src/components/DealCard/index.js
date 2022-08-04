// == Import
import PropTypesLib from 'prop-types';
import './style.scss';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// TODO == Import pour l'heure
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUpRightFromSquare, faComment, faInfo, faPlus } from '@fortawesome/free-solid-svg-icons';

import flameIcon from '../../assets/img/logo-flamme.svg';
import iceCubeIcon from '../../assets/img/logo-icecube.svg';

import { vote } from '../../actions/user';
import { arrayOfResults } from '../selectors/deal';


// == Composant
function DealCard({
  id,
  title,
  game,
  description,
  shop,
  url,
  createdAt,
  offerPrice: reducedPrice,
  user,
  status,
  reviews,
}) {
  const { currentUserId } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  //! BRICOLAGE
  let prixReduit = 0;
  if (reducedPrice !== null) {
    prixReduit = reducedPrice;
  }
  const calcPercentage = () => {
    const percentage = Math.round(-((prixReduit - game.price) / game.price) * 100);
    return percentage;
  };
  console.log(id,'reviews', reviews);
  const array = arrayOfResults(reviews, currentUserId)
  
  console.log(id,'ArrayOfresults', array);

  const percentage = calcPercentage();
  let descriptionReformated = 'rien';

  if (description.length < 215 ) {
    descriptionReformated = description.substring(0, 215);
  } else {
    descriptionReformated = `${description.substring(0, 215)} ...`;
  }
  if(status === true) {
  const handleVoteFlame = () => {
  dispatch(vote(1, id))
  };
  
  const handleVoteIce = () => {
    dispatch(vote(-1, id))
  };

  return (
    <div className="deal">
      <div className="left-deal">
        <Link to={`/bon-plan/${id}`}><img className="picture-deal picture-effect" src={game.image} alt="Bon plan" /></Link>
        <div className="vote display-none">
          <div className="icone-degree">
            <button className="btn-vote" onClick={handleVoteFlame}type="button" aria-label='bouton glaçon (voter pour le bon plan)'><img className="flamme" src={flameIcon} alt="Icone flamme" /></button>
          </div>
          <div className="degree">{array.totalVote}°</div>
          <div className="icone-degree">
          <button className="btn-vote" onClick={handleVoteIce}type="button" aria-label='bouton flamme (voter contre le bon plan)'><img className="icecube" src={iceCubeIcon} alt="Icone glacon" /></button>
          </div>
        </div>
      </div>
      <div className="right-deal">
        <div className="header-deal">
          <div className="title-deal">
            <div className="mainTitleDeal"> <Link to={`/bon-plan/${id}`}>{title}</Link></div>
            <div className="secondaryTitleDeal">{game.category.name}<span className="shop"> | {shop.name}</span></div>
          </div>
          {(prixReduit === 0 ? '' : (
            <div className="deal-label">
              <div className="discount">-{percentage}%</div>
              <div className="price">{(prixReduit).toFixed(2)}€</div>
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
            <Link to={`/bon-plan/${id}`}><button type="button" className="see-deal buttonComment"><FontAwesomeIcon icon={faPlus} /> d'infos</button></Link>
            <button type="button" className="see-deal"><a href={url} target="_blank" rel="noreferrer">Voir le bon plan</a> &ensp;<FontAwesomeIcon icon={faUpRightFromSquare} /></button>
          </p>
          {/*
          <p className="footer-deal-time"><span className="clock"><FontAwesomeIcon icon={faClock} /></span>{createdAt}</p>*/}
        </div>
      </div>
    </div>
  );
}
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
