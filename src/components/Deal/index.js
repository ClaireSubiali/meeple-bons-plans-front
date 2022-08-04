// == Import
// import PropTypesLib from 'prop-types';
import './style.scss';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUpRightFromSquare, faTruckFast } from '@fortawesome/free-solid-svg-icons';

import flameIcon from '../../assets/img/logo-flamme.svg';
import iceCubeIcon from '../../assets/img/logo-icecube.svg';
import testImage from '../../assets/img/img-test.png';

import avatar from '../../assets/img/m-orange.png';
// import { findDeal } from '../selectors/deal';
import { fetchOneDeal, addComment, saveComment } from '../../actions/deal';
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
      //dispatch(saveComment(''));
      dispatch(fetchOneDeal(dealId));
    },
    [],
  );
  const deal = useSelector((state) => state.deal.activeDeal);
  const userComment = useSelector((state) => state.deal.userComment);
  const { isUserLogged, userAvatar } = useSelector((state) => state.user);
  console.log('activedeal', deal);
  if (deal === '') {
    return (
      <div className="loading">Loading&#8230;</div>
    );
  }

  //! BRICOLAGE
  let prixReduit = 0;
  if (deal.offerPrice !== null) {
    prixReduit = deal.offerPrice;
  }
  const calcPercentage = () => {
    const percentage = Math.round(-((prixReduit - deal.game.price) / deal.game.price) * 100);
    return percentage;
  };
  const percentage = calcPercentage();
  console.log('test');

  const handleConnexion = () => {
    dispatch(toggleVisibility('isLoginVisible'));
  };

  const handleChangeComment = (event) => {
    dispatch(addComment(event.currentTarget.value));
  };

  const handleSendComment = (event) => {
    event.preventDefault();
    dispatch(saveComment(userComment));
  };

  return (
      <div className="deal-detail-comments">
        <div className="deal detail-card">
          <div className="left-deal displayleftdeal">
            <img className="picture-deal picture-display-deal" src={deal.game.image} alt="Bon plan" />
            <div className="vote display-none votedealdetail">
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
                <div className="secondaryTitleDeal">Posté par<span className="user"> {deal.user.name}</span></div>
              </div>
              {(prixReduit === 0 ? '' : (
            <div className="deal-label">
              <div className="discount">-{percentage}%</div>
              <div className="price">{(prixReduit).toFixed(2)}€</div>
            </div>
          ))}        
            </div>
            <div className="main-deal">
              <p className="deal-text">{deal.description}</p>
            </div>  
            <div className="promoCode"><span>CODE PROMO : </span> {deal.promoCode} </div>
            <div className="footer-deal shipping-member">
            
              <p className="ship-deal"><FontAwesomeIcon icon={faTruckFast}></FontAwesomeIcon> 3.99€</p>
              <p className="footer-dealp">
                <button type="button" className="see-deal"><a href={deal.url} target="_blank" rel="noreferrer">Voir le bon plan</a>&ensp;<FontAwesomeIcon icon={faUpRightFromSquare} /></button>
                              
              </p>
              {/*<p className="footer-deal-time"><span className="clock"><FontAwesomeIcon icon={faClock} /></span> il y a 15 minutes</p>*/}
            </div>
            
          </div>
        </div>
        {/* ----------- AJOUT D'UN COMMENTAIRE ------------ */}
        {(isUserLogged) ? (
        <form className="deal-comments com-user" onSubmit={handleSendComment}>
          <div className="avatar-user-com"><img src={userAvatar} alt="profil meeple" id="avatar" />
          </div>
          <div className="comment-textarea">
            <label className="deal-secondarytitle" htmlFor="message-comments">Commentaire</label>
            <textarea
              rows="6"
              className="deal-form-message dealmsg textarea1"
              placeholder="Ecrivez votre commentaire ici"
              onChange={handleChangeComment}
              value={userComment}
            />
          </div>
          <button type="submit" className="deal-form-button">Envoyer</button>
        </form>
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
