// les styles et autres
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';
import actuCard from "./ActuCard";

//On creer le composant
function Actus() {
  const { newsList }= useSelector ((state) => state.deal);
  console.log('les actus =>', newsList);
  return (
    <div>
    {newsList.map((actu) => (
      <actuCard key={actu.id} id={actu.id} {...actu} />
    ))}
    </div>
  );
}

export default Actus;
