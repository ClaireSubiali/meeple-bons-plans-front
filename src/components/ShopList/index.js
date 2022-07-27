// On import
//le css
import "./style.scss";
import magasinImg from './Bandeau.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore, faChrome } from "@fortawesome/free-solid-svg-icons";

//on creer le composant
function ShopList() {
  return (
    <div className="pseudo-body">
      <article className="shop-card">
        <h1 className="title-shop">La boutique</h1>
        <div className="shop-card-contener">
          <div className="card-shop-left">
            <img className="img-shop" src={magasinImg} alt="Img de la boutique"></img>
            <button className="button-shop-detail">Voir la boutique</button>
          </div>
          <div className="card-shop-right">
            <p className="description-shop">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a
              rutrum justo, non consequat quam. Aliquam nec quam et quam ornare
              porttitor at non mauris. Interdum et malesuada fames ac ante ipsum
              primis in faucibus.
            </p>
            <div className="contener-store">
              <FontAwesomeIcon className="icone-store" icon={faStore} />
              <span>12 rue de la boustifaille</span>
            </div>
            <div>
              <FontAwesomeIcon className="icone-store" icon={faStore} />
              <span>www.ici.com</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  ); /*1 magasin par ligne voir camille 
  pas de aside 
  10 resultats par page */
}

export default ShopList;
