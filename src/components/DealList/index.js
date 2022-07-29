// == Import
// import PropTypesLib from 'prop-types';
import { useSelector } from 'react-redux';
import DealCard from '../DealCard';
import './style.scss';

// == Composant
function DealList() {
  const dealList = useSelector((state) => state.deal.dealList);
  console.log('LOG SUR PAGE DEALS', dealList);
  return (
    <div className="deallist">
      {dealList.map((deal) => (
        <DealCard key={deal.id} id={deal.id} {...deal} />
      ))}
    </div>
  );
}

// == Export
export default DealList;
