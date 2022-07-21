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
      <p>
        Cupcake ipsum dolor sit amet. Bonbon croissant jujubes halvah cotton candy jelly-o.
        Powder wafer chocolate bar cookie bear claw.
        Wafer gingerbread croissant cupcake dessert tootsie roll.
        Pastry jujubes sweet roll lollipop donut cookie jujubes donut.
        Chocolate sesame snaps caramels soufflé chupa chups dragée bonbon
        Brownie dessert cake jelly macaroon biscuit cupcake.
        Muffin muffin wafer dragée cake pie pie.
        Lollipop jujubes cupcake jelly chocolate cake.
        Gummi bears dragée halvah pie jelly beans halvah bear claw.
      </p>
      <br />
      <p>
        Cupcake ipsum dolor sit amet. Bonbon croissant jujubes halvah cotton candy jelly-o.
        Powder wafer chocolate bar cookie bear claw.
        Wafer gingerbread croissant cupcake dessert tootsie roll.
        Pastry jujubes sweet roll lollipop donut cookie jujubes donut.
        Chocolate sesame snaps caramels soufflé chupa chups dragée bonbon
        Brownie dessert cake jelly macaroon biscuit cupcake.
        Muffin muffin wafer dragée cake pie pie.
        Lollipop jujubes cupcake jelly chocolate cake.
        Gummi bears dragée halvah pie jelly beans halvah bear claw.
      </p>

    </div>
  );
}

// == Export
export default Team;
