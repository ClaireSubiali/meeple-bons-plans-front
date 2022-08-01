import axios from "axios";
import {
  FETCH_DEAL,
  SEARCH_GAME,
  FETCH_ONE_DEAL,
  ADD_DEAL_SUMIT_FORM,
  saveDeal,
  saveOneDeal,
  fetchFromAddDeal,
} from "../actions/deal";

// IMAGE POUR COMPRENDRE => le middlewares est un SAVANT qui sait tout (connecté a l'api), Le reducer est un ECRIVIAN qui est le seul a detenir un manuscrit (le stat), le messager (le dispatch) chargé de raconter les nouvelles (_ACTION_) de la ville à l'écrivain qui les note dans son manuscrit).
// l'espion avec ses jumelle peut copier les infos que l'ecrivain à mis dans le manuscrit sans pouvoir les changer (UseSelector) pour envoyer les data dans les composants.
// LE SAVANT ENVOIE UNE INFORMATION A L ECRIVAIN QUI LORSQU'IL A UNE INFO L'INSCRIT DANS SON MANUSCRIT OU SUPPRIME UNE AUTRE ENTRÉE

// Lorsqu'on met en place un middleware, il ne faut pas oublier de le brancher au store !
const dealMiddleware = (store) => (next) => (action) => {
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTkzNjg4NDIsImV4cCI6MTY1OTQzMzY0Miwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmNvbSJ9.IQtYn4BV7HxvGn8RISpeldQsBV0rwmIzeJ9ReD3qqFwEgNvAmq8RzK2w2N3EFkUHtNntLotKWBoAobfHcpKYOPQMRUwLY7-51vjBcvnWeJyPr--_wBwgPVmLsrE52fvCZHwf5gPDcZStLtlSqlVkPZQeLYByWPbFYsxD6AKoftgvWM3nGaRJ5tj_K30PgyUDdl67sgLE2a8T_i4ZIVRb9kynLNNBtt7xtLXuoaeCBxiyXLp6y0n48Op4zhGB7oE3zvWgmTujwvg_cGNLQW_hiprPrLg8fhXrXkfiZfOBdId5X3EP7Tyzd32VXMn2-_R_j_9AJr-nj0FWwMcPPRiGFQ";
  switch (action.type) {
    case FETCH_DEAL: {
      // Set config defaults when creating the instance+
      // const api = axios.create({
      // baseURL: 'http://christophe-nedaud.vpnuser.lan/Meeple%20bons%20plans/projet-04-meeple-bons-plans-back/public/api/deals',
      // });
      // api.defaults.headers.common.Authorization = `bearer ${token}`;
      axios
        .get(
          "http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/deals",
          {
            headers: {
              Authorization: `bearer ${token}`,
            },
          }
        )
        .then((response) => {
          // Ici on recup bien les données de notre API (les recettes)
          // On veut maintenant les rajouter dans le state
          // Pour ça on va dispatcher une action (l'intention de mémoriser les recettes)
          // store.dispatch(saveDeal(response.data));
          console.log("Response API", response.data);
          // On envoie le resultat de la requete au reducer qui sera chargé de l'ecriture
          store.dispatch(saveDeal(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      return next(action);
    }
    case SEARCH_GAME: {
      const gameToSearch = action.searchedGame;
      const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTkzNjg4NDIsImV4cCI6MTY1OTQzMzY0Miwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmNvbSJ9.IQtYn4BV7HxvGn8RISpeldQsBV0rwmIzeJ9ReD3qqFwEgNvAmq8RzK2w2N3EFkUHtNntLotKWBoAobfHcpKYOPQMRUwLY7-51vjBcvnWeJyPr--_wBwgPVmLsrE52fvCZHwf5gPDcZStLtlSqlVkPZQeLYByWPbFYsxD6AKoftgvWM3nGaRJ5tj_K30PgyUDdl67sgLE2a8T_i4ZIVRb9kynLNNBtt7xtLXuoaeCBxiyXLp6y0n48Op4zhGB7oE3zvWgmTujwvg_cGNLQW_hiprPrLg8fhXrXkfiZfOBdId5X3EP7Tyzd32VXMn2-_R_j_9AJr-nj0FWwMcPPRiGFQ";
      
      axios
        .post(
          "http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/games",
          {
            name:  gameToSearch,
          },
          {
            headers: {
              Authorization: `bearer ${token}`,
            },
          }
        )
        .then((response) => {
          // Ici on recup bien les données de notre API (les recettes)
          // On veut maintenant les rajouter dans le state
          // Pour ça on va dispatcher une action (l'intention de mémoriser les recettes)
          // store.dispatch(saveDeal(response.data));
          console.log("Response API DE LA RECHERCHE DE JEU", response.data);
          // On envoie le resultat de la requete au reducer qui sera chargé de l'ecriture
          //store.dispatch(saveDeal(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      return next(action);
    }
    case FETCH_ONE_DEAL:
      {
        axios
          .get(
            `http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/deals/${action.dealId}`,
            {
              headers: {
                Authorization: `bearer ${token}`,
              },
            }
          )
          .then((response) => {
            // Ici on recup bien les données de notre API (les recettes)
            // On veut maintenant les rajouter dans le state
            // Pour ça on va dispatcher une action (l'intention de mémoriser les recettes)
            // store.dispatch(saveDeal(response.data));
            console.log("Response API DU DEAL", response.data);
            // On envoie le resultat de la requete au reducer qui sera chargé de l'ecriture
            store.dispatch(saveOneDeal(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
        return next(action);
      }

      //losqu'on valide le form d'ajout d'un bon plan
      case ADD_DEAL_SUMIT_FORM:
      {
        axios
          .post(
            `http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/deals`,
            {
              headers: {
                Authorization: `bearer ${token}`,
              },
            }
          )
          .then((response) => {
            // Ici on recup bien les données de notre API (les recettes)
            // On veut maintenant les rajouter dans le state
            // Pour ça on va dispatcher une action (l'intention de mémoriser les recettes)
            // store.dispatch(saveDeal(response.data));
            console.log("Validation du middleware adddeal", response.data);
            // On envoie le resultat de la requete au reducer qui sera chargé de l'ecriture
            store.dispatch(fetchFromAddDeal(response.data));
            alert('Bon plan bien crée');

            location.replace('/');
          })
          .catch((error) => {
            console.log(error);
            location.replace('/');
          });
        return next(action);
      }

    default:
      return next(action);
  }
};

export default dealMiddleware;
