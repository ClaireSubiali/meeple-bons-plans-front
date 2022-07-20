// == Import
// import PropTypesLib from 'prop-types';
import './style.scss';

// == Composant
function SignIn() {
  return (
    <div>
      <body>
      <h1 className="h1-inscription">S'inscrire</h1>
      <img className="img--user" src="../img/profile-user.png" alt="Logo--User"></img>
      <input className="input--inscription" placeholder="Choisir un pseudo" type="text"></input>
      <span className="input--span" >Ce pseudo n'est pas disponible</span>
      <input className="input--inscription" placeholder="Adresse Mail" type="text"></input>
      <span className="input--span" >L'adresse mail n'est pas valide</span>
      <input className="input--inscription" placeholder="Mot de passe" type="text"></input>
      <input className="input--inscription" placeholder="Confirmer le mot de passe" type="text"></input>
      <span className="input--span" >Le mot de passe n'est pas identique</span>
      <div>
          <input className="input--memory" type="checkbox">Rester connecté</input>
      </div>
      <button className="button--inscription">Je m'inscris</button>
      </body>
</div>

  );
}



// == Export
export default SignIn;
