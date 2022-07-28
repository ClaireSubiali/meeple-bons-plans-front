import axios from 'axios';
import { FETCH_DEAL, saveDeal } from '../actions/deal';

// IMAGE POUR COMPRENDRE => le middlewares est un SAVANT qui sait tout (connecté a l'api), Le reducer est un ECRIVIAN qui est le seul a detenir un manuscrit (le stat), le messager (le dispatch) chargé de raconter les nouvelles (_ACTION_) de la ville à l'écrivain qui les note dans son manuscrit).
// l'espion avec ses jumelle peut copier les infos que l'ecrivain à mis dans le manuscrit sans pouvoir les changer (UseSelector) pour envoyer les data dans les composants.
// LE SAVANT ENVOIE UNE INFORMATION A L ECRIVAIN QUI LORSQU'IL A UNE INFO L'INSCRIT DANS SON MANUSCRIT OU SUPPRIME UNE AUTRE ENTRÉE 


// Lorsqu'on met en place un middleware, il ne faut pas oublier de le brancher au store !
const dealMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_DEAL: {
      console.log('PARAPLUIE');
       // Set config defaults when creating the instance+
       const api = axios.create({
        baseURL: 'http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/deals',
      });
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTg5OTcwODIsImV4cCI6MTY1OTA2MTg4Miwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmNvbSJ9.NMXim7fRbVHD0Anw_z0GBtM_rkllGvgfd_eRYB6V_d9wPDgYF0dwFlGZPSQSRoymvC4ZwHm4-5_dQ8I_3UhfKatGbdEtCi6bakxHB9JBSFq7FD83PMhAjghi35wGE5FnBIGjDAOTssB3H0cJ6-hEFb0CNycoOH3ehknQac5Cn2-sfYydu7ejz119qJCyHy8mkswV7JblbUSBL3ZbNzpby9QB7HRXDYtTO1cs85MAE027H-zJS4VNt5lap3o1A0xk9t_6LnUzl2GXB5CZxYGt3WrAChliwZDN4xVbSYKfnytKa1zKfmI94ZoJ5HREAa-uWAu-l6qm-7XkjIS5OQF50Q';
        api.defaults.headers.common.Authorization = `bearer ${token}`
        console.log('IMPERMEABLE')
       axios.get('http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/deals', {
        headers: {
          'Authorization': `bearer ${token}`
        }        
      })
        .then(          
          (response) => {
            console.log('BOTTES')
            // Ici on recup bien les données de notre API (les recettes)
            // On veut maintenant les rajouter dans le state
            // Pour ça on va dispatcher une action (l'intention de mémoriser les recettes)
            // store.dispatch(saveDeal(response.data));
            console.log('Response API ->',response);
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
