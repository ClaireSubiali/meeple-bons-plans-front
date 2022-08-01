import axios from 'axios';
import { FETCH_DEAL, FETCH_ONE_DEAL, saveDeal, saveOneDeal } from '../actions/deal';

// IMAGE POUR COMPRENDRE => le middlewares est un SAVANT qui sait tout (connecté a l'api), Le reducer est un ECRIVIAN qui est le seul a detenir un manuscrit (le stat), le messager (le dispatch) chargé de raconter les nouvelles (_ACTION_) de la ville à l'écrivain qui les note dans son manuscrit).
// l'espion avec ses jumelle peut copier les infos que l'ecrivain à mis dans le manuscrit sans pouvoir les changer (UseSelector) pour envoyer les data dans les composants.
// LE SAVANT ENVOIE UNE INFORMATION A L ECRIVAIN QUI LORSQU'IL A UNE INFO L'INSCRIT DANS SON MANUSCRIT OU SUPPRIME UNE AUTRE ENTRÉE 

// Lorsqu'on met en place un middleware, il ne faut pas oublier de le brancher au store !
const dealMiddleware = (store) => (next) => (action) => {
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTkzNDU2MjQsImV4cCI6MTY1OTQxMDQyNCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmNvbSJ9.jX4U1Iioz3MBUJLjZtfr3b2epbOZUuog9eb7agziVx4SudToQkPsnPRgOWAQOM3OauE48D9_8Gk5wyyabZNCl2mRk5HCe-ZkWEN4WKXBngoBIFUJBdswlyc_ZQDEH9gfuXFnQyjxFoX2mJAnEHJ9jCuK1IQMlUB9TYZVjGwyse9Y41h_JlEF5YMvGdDb8LtJziouFZIz74lIlC4wUnWRgwJ85S9GBxFHh1wijhlgEQ90viRKDevleZolHscKoD3qrGQRSXpmzd5fiR_vkyTCUna50Fs8_KSYbIRJ5Txolq6kWKfys-MnOLLdngpr5zt0_zJdxdingO3CiS_1UmV83A';
  switch (action.type) {
    case FETCH_DEAL: {
      // Set config defaults when creating the instance+
      // const api = axios.create({
      // baseURL: 'http://christophe-nedaud.vpnuser.lan/Meeple%20bons%20plans/projet-04-meeple-bons-plans-back/public/api/deals',
      // });
      // api.defaults.headers.common.Authorization = `bearer ${token}`;
      axios.get('http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/deals', {
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
          axios.get(`http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/deals/${action.dealId}`, {
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
