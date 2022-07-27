// == Import
import PropTypesLib from 'prop-types';
import './style.scss';

// == Import des éléments de FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

// == Composant
function ProfilePopup({
  ToggleVisibility,
  avatar,
  email,
  Disconnect,
}) {
  const handleToggleVisibility = () => {
    ToggleVisibility('isLoginVisible');
  };
  return (
    <div className="profile-popup">
      <div className="close-button-div"><button type="button" aria-label="Fermer" className="cancel" onClick={handleToggleVisibility}><FontAwesomeIcon icon={faXmark} /></button></div>
      <div className="profile-header">
        <img src={avatar} alt="profil meeple" id="avatar" />
        <span>{email}</span>
      </div>
      <div>
        <button type="button" className="btn">Consulter mon profil</button>
        <button type="button" className="btn" onClick={Disconnect}>Se déconnecter</button>
      </div>
    </div>
  );
}

ProfilePopup.propTypes = {
  ToggleVisibility: PropTypesLib.func.isRequired,
  Disconnect: PropTypesLib.func.isRequired,
  avatar: PropTypesLib.string.isRequired,
  email: PropTypesLib.string.isRequired,
};

// == Export
export default ProfilePopup;
