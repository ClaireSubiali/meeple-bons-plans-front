import axios from 'axios';
import {
  FETCH_DEAL,
  SEARCH_GAME,
  FETCH_ONE_DEAL,
  ADD_DEAL_SUMIT_FORM,
  saveDeal,
  saveOneDeal,
} from '../actions/deal';

/* IMAGE POUR COMPRENDRE => le middlewares est un SAVANT qui sait tout (connecté a l'api),
Le reducer est un ECRIVIAN qui est le seul a detenir un manuscrit (le stat),
le messager (le dispatch) chargé de raconter les nouvelles (_ACTION_)
de la ville à l'écrivain qui les note dans son manuscrit).
l'espion avec ses jumelle peut copier les infos que l'ecrivain à mis dans le manuscrit
sans pouvoir les changer (UseSelector) pour envoyer les data dans les composants.
LE SAVANT ENVOIE UNE INFORMATION A L ECRIVAIN QUI LORSQU'IL A UNE INFO L'INSCRIT*/

// Lorsqu'on met en place un middleware, il ne faut pas oublier de le brancher au store !
const dealMiddleware = (store) => (next) => (action) => {
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTk0NDcyNTksImV4cCI6MTY1OTUxMjA1OSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmNvbSJ9.aRu-w4EsYJHyCXdE-9JDeTIWOsvluEz_WGZRT7Qe_ETAA3hZrwV_alSkGndDQgm1ZJQKuKIEE48KCVEnmf813nKoFcyJQOXF3wExZaNPgKLuY0DKdxmpovSv_ZpVX9BoiEK5ddiT_nmdqo5r-K165IVlz5es_ErfoZk56qdkWsQ4HMx9Z1B2WkKSi91hwkePs2SXXFvKyU1PATq9-JoQb7K9XGBXxICzJYYE3Kmayd7fjkax16Bl7NMfeLt5Lutry5T6Hwvyt_GDQALYZ4UY2qk5GzRtYRFfmGGsR4qAP-dKir967w0uwTZupWQ4RWXqJ8d-MlmlT8EVGuS0czyEOw';
  switch (action.type) {
    // RECUPERATION DE LA LISTE DE TOUS LES DEALS DEPUIS L'API AU CHARGMEENT INITIAL DU SITE
    case FETCH_DEAL: {
      axios.get('http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/deals',
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        },
      )
        .then((response) => {
          console.log('Response API récupération de tous les deals', response.data);
          // On envoie le resultat de la requête au reducer qui sera chargé de l'ecriture
          store.dispatch(saveDeal(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      return next(action);
    }
    // RECHERCHE DE JEUX DEPUIS L'API POUR FORMULAIRE AJOUT DE BON PLAN
    case SEARCH_GAME: {
      const gameToSearch = action.searchedGame;
      const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTk0NDcyNTksImV4cCI6MTY1OTUxMjA1OSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmNvbSJ9.aRu-w4EsYJHyCXdE-9JDeTIWOsvluEz_WGZRT7Qe_ETAA3hZrwV_alSkGndDQgm1ZJQKuKIEE48KCVEnmf813nKoFcyJQOXF3wExZaNPgKLuY0DKdxmpovSv_ZpVX9BoiEK5ddiT_nmdqo5r-K165IVlz5es_ErfoZk56qdkWsQ4HMx9Z1B2WkKSi91hwkePs2SXXFvKyU1PATq9-JoQb7K9XGBXxICzJYYE3Kmayd7fjkax16Bl7NMfeLt5Lutry5T6Hwvyt_GDQALYZ4UY2qk5GzRtYRFfmGGsR4qAP-dKir967w0uwTZupWQ4RWXqJ8d-MlmlT8EVGuS0czyEOw";
      axios
        .post(
          "http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/games",
          {
            name: gameToSearch,
          },
          {
            headers: {
              Authorization: `bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log('Response API DE LA RECHERCHE DE JEU', response.data);
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
    // FORMULAIRE D'AJOUT DE BON PLAN
    case ADD_DEAL_SUMIT_FORM:
    {
      const state = store.getState();
      const {
        dealTitle,
        dealGame,
        dealDescription,
        dealURL,
        discountedPrice, // à transformer en number
        shippingPrice,
        discountCode,
        expirationDate,
        concernAGame, // à transformer en id de dealGame si false
        dealVendor, // à transformer en number
        newGame, // à voir pour ajout de jeu ?.
        urlGame, // Manque le user ? ou mais il faudra le piocher ailleurs dans le state
      } = state.deal.addDealForm;
      //
      let gameID = 0;
      if (concernAGame) {
        gameID = 1;
      } else {
        gameID = parseInt(dealGame, 10);
      }
      //on doit récupérer l'id de l'utilisateur connecté 
      axios
        .post(
          'http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/deals',
          {
            title: dealTitle,
            description: dealDescription,
            url: dealURL,
            offerPrice: parseInt(discountedPrice, 10),
            // endDeal: expirationDate, // paramètre optionnel
            shop: parseInt(dealVendor, 10),
            type: 1,
            game: gameID,
            user: parseInt('1', 10), // ajouter ici au lieu du "1" l'ID du user connecté qui envoie le deal
            shippingCost: parseInt(shippingPrice, 10), // paramètre optionnel
            promoCode: discountCode, // paramètre optionnel

          },
          {
            headers: {
              Authorization: `bearer ${token}`,
            },
          },
        )
        .then((response) => {
          console.log("Passage dans l'ajout de bon plan dans dealMiddleware", response.data);
          // On envoie le resultat de la requete au reducer qui sera chargé de l'ecriture
          // store.dispatch(saveFromAddDeal(response.data));
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
