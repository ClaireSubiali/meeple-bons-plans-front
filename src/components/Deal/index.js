// == Import
// import PropTypesLib from 'prop-types';
import './style.scss';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

import flameIcon from '../../assets/img/logo-flamme.svg';
import iceCubeIcon from '../../assets/img/logo-icecube.svg';
import testImage from '../../assets/img/img-test.png';

import avatar from '../../assets/img/m-orange.png';
// import { findDeal } from '../selectors/deal';
import { fetchOneDeal } from '../../actions/deal';
import Comment from './Comment';
import { toggleVisibility } from '../../actions/user';

// == Composant
function Deal() {
  const { dealId } = useParams();
  const dispatch = useDispatch();
  // Récupération du paramètre d'url pour avoir l'id correspondant au deal à afficher
  useEffect(
    () => {
      // On veut recup la liste des deal depuis l'API
      // Pour ça, on va dispatcher une action (émettre l'intention de charger les recettes)
      dispatch(fetchOneDeal(dealId));
    },
    [dealId],
  );
  const deal = useSelector((state) => state.deal.activeDeal);
  const { isAvatarVisible, userAvatar } = useSelector((state) => state.user)
  console.log('activedeal', deal);
  if (deal === '') {
    return (
      <div className="loading">Loading&#8230;</div>
    );
  }
  const calcPercentage = () => {
    const percentage = Math.round((deal.offerPrice * 100) / deal.game.price);
    return percentage;
  };
  const percentage = calcPercentage();
  console.log('test');

  const handleConnexion = () => {
    dispatch(toggleVisibility('isLoginVisible'));
  }
  return (
      <div className="deal-detail-comments">
        <div className="deal detail-card">
          <div className="left-deal">
            <img className="picture-deal" src={deal.game.image} alt="Bon plan" />
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
                <div className="mainTitleDeal">{deal.title}</div> 
                <div className="secondaryTitleDeal">Bon plan jeux de société<span className="shop"> | {deal.shop.name}</span></div>
                <div className="secondaryTitleDeal">Bon plan posté par<span className="user"> {deal.user.name}</span></div>
              </div>
              <div className="deal-label">
                <div className="discount">-{percentage}%</div>
                <div className="price">{(deal.offerPrice).toFixed(2)}€</div>
              </div>
            </div>
            <div className="main-deal">
              <p className="deal-text">{deal.description}</p>
            </div>
            <div className="footer-deal">
              <p className="footer-dealp">
                <button type="button" className="see-deal">Voir le bon plan</button>
              </p>
              {/*<p className="footer-deal-time"><span className="clock"><FontAwesomeIcon icon={faClock} /></span> il y a 15 minutes</p>*/}
            </div>
          </div>
        </div>
        {/* ----------- AJOUT D'UN COMMENTAIRE ------------ */}
        {(isAvatarVisible) ? (
        <div className="deal-comments com-user">
          <div className="avatar-user-com"><img src={avatar} alt="profil meeple" id="avatar" />
          </div>
          <div className="comment-textarea">
            <label className="deal-secondarytitle" htmlFor="message-comments">Commentaire</label>
            <textarea
              rows="6"
              className="deal-form-message dealmsg"
              placeholder="Ecrivez votre commentaire ici"
            />
          </div>
          <button type="button" className="deal-form-button">Envoyer</button>
        </div>
        ) : (
          <div className="deal-comments com-user">
            <p className="need-login-msg">Veuillez vous <span className="need-login-msg-link" aria-label="lien pour se connecter" onClick={handleConnexion}>connecter</span> pour laisser un commentaire</p>
          </div>
        )}
        {deal.comments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
        <div className="deal-comments endmsg">
          <div className="comment-textarea">
            <p className="deal-msg-end">FIN DES MESSAGES</p>
          </div>
        </div>
      </div>
  );
}


// == Export
export default Deal;
