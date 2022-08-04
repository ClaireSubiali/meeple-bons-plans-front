// On import
//le css
import "./style.scss";
import magasinImg from '../../assets/img/boutique-logo-philibert.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore, faGlobe, faUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
  
import { useSelector } from "react-redux";

//on creer le composant
function ShopList() {
  const { shopList } = useSelector((state) => state.deal.shopList);
  return (
    <div className="pseudo-body">
      
      <div className="shop-card">
        <div className="shop-card-contener">
          <div className="card-shop-left">
            <img className="img-shop" src={magasinImg} alt="Img de la boutique"></img>
          </div>
          <div className="card-shop-right">
            <div className="title-shop">Nom de la boutique</div>
            <p className="description-shop">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a
              rutrum justo, non consequat quam. Aliquam nec quam et quam ornare
              porttitor at non mauris. Interdum et malesuada fames ac ante ipsum
              primis in faucibus.
            </p>
            <div className="contener-shop-footer">
              <div className="contener-store">
                <FontAwesomeIcon className="icone-store" icon={faStore} />
                <span>12 rue de la boustifaille</span>
              </div>
              <div className="contener-site">
                <FontAwesomeIcon className="icone-store" icon={faGlobe} />
                <a>www.ici.com</a>
              </div>
              <div>
                <button className="button-shop-detail"><a href="#" target="_blank" rel="noreferrer">Voir &ensp;<FontAwesomeIcon icon={faUpRightFromSquare} /></a></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shop-card">
        <div className="shop-card-contener">
          <div className="card-shop-left">
            <img className="img-shop" src={magasinImg} alt="Img de la boutique"></img>
          </div>
          <div className="card-shop-right">
            <div className="title-shop">Nom de la boutique</div>
            <p className="description-shop">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a
              rutrum justo, non consequat quam. Aliquam nec quam et quam ornare
              porttitor at non mauris. Interdum et malesuada fames ac ante ipsum
              primis in faucibus.
            </p>
            <div className="contener-shop-footer">
              <div className="contener-store">
                <FontAwesomeIcon className="icone-store" icon={faStore} />
                <span>12 rue de la boustifaille</span>
              </div>
              <div className="contener-site">
                <FontAwesomeIcon className="icone-store" icon={faGlobe} />
                <a>www.ici.com</a>
              </div>
              <div>
                <button className="button-shop-detail"><a href="#" target="_blank" rel="noreferrer">Voir &ensp;<FontAwesomeIcon icon={faUpRightFromSquare} /></a></button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="shop-card">
        <div className="shop-card-contener">
          <div className="card-shop-left">
            <img className="img-shop" src={magasinImg} alt="Img de la boutique"></img>
          </div>
          <div className="card-shop-right">
            <div className="title-shop">Nom de la boutique</div>
            <p className="description-shop">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a
              rutrum justo, non consequat quam. Aliquam nec quam et quam ornare
              porttitor at non mauris. Interdum et malesuada fames ac ante ipsum
              primis in faucibus.
            </p>
            <div className="contener-shop-footer">
              <div className="contener-store">
                <FontAwesomeIcon className="icone-store" icon={faStore} />
                <span>12 rue de la boustifaille</span>
              </div>
              <div className="contener-site">
                <FontAwesomeIcon className="icone-store" icon={faGlobe} />
                <a>www.ici.com</a>
              </div>
              <div>
                <button className="button-shop-detail"><a href="#" target="_blank" rel="noreferrer">Voir &ensp;<FontAwesomeIcon icon={faUpRightFromSquare} /></a></button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default ShopList;
