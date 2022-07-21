// == Import
// import PropTypesLib from 'prop-types';
import './style.scss';

// import des éléments de FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

// == Composant
function Team() {
  return (
    <div className="team-page">
      <h1 className="title"><FontAwesomeIcon icon={faPeopleGroup} className="icon" />  L'équipe MEEPLE Bons plans</h1>
      <div className="team">
        <div className="card">
          <div className="cardName">Julien</div>
        </div>
        <div className="card">
          <div className="cardName">Claire</div>
        </div>
        <div className="card">
          <div className="cardName">Laurent</div>
        </div>
        <div className="card">
          <div className="cardName">Camille</div>
        </div>
        <div className="card">
          <div className="cardName">Christophe</div>
        </div>
      </div>
    </div>

  );
}

// == Export
export default Team;
