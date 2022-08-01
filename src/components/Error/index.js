// == Import
// import PropTypesLib from 'prop-types';
import './style.scss';

// import image error 404
import err404 from '../../assets/img/404-img.png';

import err404back from '../../assets/img/404-back.png';


// == Composant
function Error() {
  return (
    <div className="error-card">
   
      <div className="front"><img src={err404back} alt="Erreur 404" id="card404-back" /></div>
      <div className="back"><img src={err404} alt="Erreur 404" id="card404" /></div>
   </div>
 



  );
}

// == Export
export default Error;
