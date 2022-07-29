import axios from 'axios';
import { FETCH_DEAL, FETCH_ONE_DEAL, saveDeal, saveOneDeal } from '../actions/deal';

// IMAGE POUR COMPRENDRE => le middlewares est un SAVANT qui sait tout (connecté a l'api), Le reducer est un ECRIVIAN qui est le seul a detenir un manuscrit (le stat), le messager (le dispatch) chargé de raconter les nouvelles (_ACTION_) de la ville à l'écrivain qui les note dans son manuscrit).
// l'espion avec ses jumelle peut copier les infos que l'ecrivain à mis dans le manuscrit sans pouvoir les changer (UseSelector) pour envoyer les data dans les composants.
// LE SAVANT ENVOIE UNE INFORMATION A L ECRIVAIN QUI LORSQU'IL A UNE INFO L'INSCRIT DANS SON MANUSCRIT OU SUPPRIME UNE AUTRE ENTRÉE 

// Lorsqu'on met en place un middleware, il ne faut pas oublier de le brancher au store !
const dealMiddleware = (store) => (next) => (action) => {
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTkwNzk3NTQsImV4cCI6MTY1OTE0NDU1NCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmNvbSJ9.YApDF1vsCN0gDB4BJrxU5ZriCnBiTeQjUECE_TzDT4wOBClsf92W2GBMUYlMTBJMgS2_uGJ7K6V8eYfu9yeBDdbZbLydE0b8-oWGwyTSzrPTmLbp7gXMCfomfZ-kPRoM6qBMMiBlaoPvhn9EXcYXIiV7gq2FL_d3RE33xucr2IQWy5JvPF0rVroK5aBF-5l-_1EmmomYu03JfGACwaljUezHyeGN6T1hPyMLVCZcrrEYEEKd5lL4ArXMS_7qrKCaXe68rWCVScx9CLY6ZQ1TcXYQYWAy3QPIMHUW65k0xneJaNy-8QfTnIQe9QXkoJo4wagHzKSeglnxkkNWnRqFeA';
  switch (action.type) {
    case FETCH_DEAL: {
      // Set config defaults when creating the instance+
      // const api = axios.create({
      // baseURL: 'http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/deals',
      // });
      // api.defaults.headers.common.Authorization = `bearer ${token}`;
      axios.get('http://christophe-nedaud.vpnuser.lan/Meeple%20bons%20plans/projet-04-meeple-bons-plans-back/public/api/deals', {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
        .then(
          (response) => {
            // Ici on recup bien les données de notre API (les recettes)
            // On veut maintenant les rajouter dans le state
            // Pour ça on va dispatcher une action (l'intention de mémoriser les recettes)
            // store.dispatch(saveDeal(response.data));
            console.log('Response API', response.data);
            // On envoie le resultat de la requete au reducer qui sera chargé de l'ecriture
            store.dispatch(saveDeal(response.data));
          },
        )
        .catch((error) => {
            console.log(error);
          },
        );
      return next(action);
        }
        case FETCH_ONE_DEAL: {
          axios.get(`http://christophe-nedaud.vpnuser.lan/Meeple%20bons%20plans/projet-04-meeple-bons-plans-back/public/api/deals/${action.dealId}`, {
            headers: {
              Authorization: `bearer ${token}`,
            },
          })
            .then(
              (response) => {
                // Ici on recup bien les données de notre API (les recettes)
                // On veut maintenant les rajouter dans le state
                // Pour ça on va dispatcher une action (l'intention de mémoriser les recettes)
                // store.dispatch(saveDeal(response.data));
                console.log('Response API DU DEAL', response.data);
                // On envoie le resultat de la requete au reducer qui sera chargé de l'ecriture
                store.dispatch(saveOneDeal(response.data));
              },
            )
            .catch((error) => {
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
