// == Import
// import PropTypesLib from 'prop-types';
import DealCard from '../DealCard';
import './style.scss';

// == Composant
function DealList() {
  return (
    <div className="deallist">
      <div className="titledeallist">Liste des Bons plans :</div>
      <DealCard />
      <DealCard />
      <DealCard />
      <DealCard />
    </div>
  );
}


// == Export
export default DealList;
