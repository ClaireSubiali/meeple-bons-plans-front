import axios from 'axios';
import { FETCH_DEAL, saveDeal } from '../actions/deal';

// IMAGE POUR COMPRENDRE => le middlewares est un SAVANT qui sait tout (connecté a l'api), Le reducer est un ECRIVIAN qui est le seul a detenir un manuscrit (le stat), le messager (le dispatch) chargé de raconter les nouvelles (_ACTION_) de la ville à l'écrivain qui les note dans son manuscrit).
// l'espion avec ses jumelle peut copier les infos que l'ecrivain à mis dans le manuscrit sans pouvoir les changer (UseSelector) pour envoyer les data dans les composants.
// LE SAVANT ENVOIE UNE INFORMATION A L ECRIVAIN QUI LORSQU'IL A UNE INFO L'INSCRIT DANS SON MANUSCRIT OU SUPPRIME UNE AUTRE ENTRÉE 


// Lorsqu'on met en place un middleware, il ne faut pas oublier de le brancher au store !
const dealMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_DEAL: {
       // Set config defaults when creating the instance+
      //const api = axios.create({
     // baseURL: 'http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/deals',
      //});
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTkwODAxODEsImV4cCI6MTY1OTE0NDk4MSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmNvbSJ9.hjPpUdPSSOSVmY11jKPNmD9ZBDA6YI9wplYIq0Xx7bCnF5eSw-h9Hw-IY4Y003K6wzGku3xgsEXwI7Sum9N39SbE10rHcrN9OdgLMgQ1c3hwduLtPwKAC4GD-d1Ui6i48fLloOYdujumepvad51PfEMnBoOXjXfhjabGok2RXB7ATyq_JhofaWDNFZDpPb9DtRkfswmPH2nDvj9l_qrqu0zjoU0uoIfXKL0xTo2Nu6MfiBDXrE1zVRyzx_uznaobCotnwdN1gNx2DiwJJ-2Q--7YnkR6DTGohvDzHuvpYoScNUF6kDawELoLOOsi_kJxwSglhTPOIkdrN5rBwpDplg';
        //api.defaults.headers.common.Authorization = `bearer ${token}`;
        
       axios.get('http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/deals', {
        headers: {
         Authorization: `bearer ${token}`,
        }
       })
       .then(
        (response) => {
          // Ici on recup bien les données de notre API (les recettes)
          // On veut maintenant les rajouter dans le state
          // Pour ça on va dispatcher une action (l'intention de mémoriser les recettes)
          // store.dispatch(saveDeal(response.data));
          console.log('Response API', response);
          //On envoie le resultat de la requete au reducer qui sera chargé de l'ecriture
          //store.dispatch(saveDeal(response.data));
        },
      )
      .catch(
        (error) => {
          console.log(error);
        },
      );

    return next(action);
  }
  default:
    return next(action);
}
};

export default dealMiddleware;
