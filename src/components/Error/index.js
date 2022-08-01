// == Import
// import PropTypesLib from 'prop-types';
import './style.scss';

// import image error 404
import err404 from '../../assets/img/404-img.png';

// == Composant
function Error() {
  return (
    <div className="error">
      <p className="errormsg">Oops! Tu vas devoir passer ton tour…</p>

      <img src={err404} alt="erreur 404" id="404-error" />
    </div>
  );
}

// == Export
export default Error;
