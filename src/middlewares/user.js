import axios from 'axios';

import { 
  FETCH_FORM_SIGNIN, 
  FETCH_LOGIN, 
  FETCH_USER_WITH_MAIL,
  SaveTokenInState, 
  clearLogin, 
  saveEmailInState, 
  toggleIsLogged, 
  toggleVisibility,
fetchUserWithMail } from '../actions/user';
import { useNavigate } from "react-router-dom";
import { Redirect } from 'react-router-dom';


// IMAGE POUR COMPRENDRE => le middlewares est un SAVANT qui sait tout (connecté a l'api), Le reducer est un ECRIVIAN qui est le seul a detenir un manuscrit (le stat), le messager (le dispatch) chargé de raconter les nouvelles (_ACTION_) de la ville à l'écrivain qui les note dans son manuscrit).
// l'espion avec ses jumelle peut copier les infos que l'ecrivain à mis dans le manuscrit sans pouvoir les changer (UseSelector) pour envoyer les data dans les composants.
// LE SAVANT ENVOIE UNE INFORMATION A L ECRIVAIN QUI LORSQU'IL A UNE INFO L'INSCRIT DANS SON MANUSCRIT OU SUPPRIME UNE AUTRE ENTRÉE 

// Lorsqu'on met en place un middleware, il ne faut pas oublier de le brancher au store !
const userMiddleware = (store) => (next) => (action) => {
  
  switch (action.type) {
    //ici on appelle une action qui va envoyer les champs du stat au back
    case FETCH_FORM_SIGNIN: {
      const state = store.getState();
      const { createPseudo, createMail, createPassword, avatarColor } = state.user.createAccount;
      console.log('passage dans middleware user');
      
      //const { user: {email, password}} = store.FETCH_FORM_SINGIN();
      // const api = axios.create({
      // baseURL: 'http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/deals',
      // });
      //On utilise un token fourni par le back pour s'autentifier sur l'api
      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTkzNjg4NDIsImV4cCI6MTY1OTQzMzY0Miwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmNvbSJ9.IQtYn4BV7HxvGn8RISpeldQsBV0rwmIzeJ9ReD3qqFwEgNvAmq8RzK2w2N3EFkUHtNntLotKWBoAobfHcpKYOPQMRUwLY7-51vjBcvnWeJyPr--_wBwgPVmLsrE52fvCZHwf5gPDcZStLtlSqlVkPZQeLYByWPbFYsxD6AKoftgvWM3nGaRJ5tj_K30PgyUDdl67sgLE2a8T_i4ZIVRb9kynLNNBtt7xtLXuoaeCBxiyXLp6y0n48Op4zhGB7oE3zvWgmTujwvg_cGNLQW_hiprPrLg8fhXrXkfiZfOBdId5X3EP7Tyzd32VXMn2-_R_j_9AJr-nj0FWwMcPPRiGFQ';
      // api.defaults.headers.common.Authorization = `bearer ${token}`;
      axios.post('http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/users',
        {name: createPseudo,
        email: createMail,
        password: createPassword,
        avatar: avatarColor,
        },
        {headers: {
          Authorization: `bearer ${token}`,
        }}
      ).then(
        (response) => {
          // Ici on doit charger l'action d'envoyer les donnes de l'utilisateur en post
          // pour ca, il faut idientifier les datas a envoyer
          // store.dispatch(saveDeal(response.data));
          console.log('Response API', response);
          console.log('jusqu ici tout va bien');
          alert('Compte bien crée');
          
          location.replace('/');  
          
          // On envoie le resultat de la requete au reducer qui sera chargé de l'ecriture
          // store.dispatch(HandleSendDatas(response.data));
        },
      )
        .catch((error) => {
          console.log(error);
        });
      return next(action);
    }
    case FETCH_LOGIN: {
      const state = store.getState();
      const { email, password } = state.user.loginSettings;
      console.log('passage dans middleware user');
      
      //const { user: {email, password}} = store.FETCH_FORM_SINGIN();
      // const api = axios.create({
      // baseURL: 'http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/deals',
      // });
      //On utilise un token fourni par le back pour s'autentifier sur l'api
      
      // api.defaults.headers.common.Authorization = `bearer ${token}`;
      axios.post('http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/login_check',
        {
          username: email,
          password: password,
        }
      ).then(
        (response) => {
          // Ici on doit charger l'action d'envoyer les donnes de l'utilisateur en post
          // pour ca, il faut idientifier les datas a envoyer
          // store.dispatch(saveDeal(response.data));
          console.log('Response API, token => ', response);
          // On envoie le resultat de la requete au reducer qui sera chargé de l'ecriture          
          localStorage.setItem('TOKEN', response.data.token);
          localStorage.setItem('UserEmail', email);
          localStorage.setItem('isUserLogged', true);
          store.dispatch(SaveTokenInState(response.data.token));
          store.dispatch(saveEmailInState(email));
          store.dispatch(toggleIsLogged());
          store.dispatch(toggleVisibility('isLoginVisible'));
          alert('Connexion réussie');
          //je charge et sauvegarde les données de l'utilisateur:
          store.dispatch(fetchUserWithMail());
        },
      )
        .catch((error) => {
          console.log(error);
          if(error.request.status === 401) {           
            store.dispatch(clearLogin('Mot de passe ou email incorrect'));            
          }
        });
      return next(action);
    }
    case FETCH_USER_WITH_MAIL: {
      const state = store.getState();
      const { email, token } = state.user
      console.log('passage dans middleware user');     
      
      
      axios.post('http://nedaudchristophe-server.eddi.cloud/meeple/current/public/api/users/custom',
        {email: email,},
        {headers: {
          Authorization: `bearer ${token}`,
        }}
      ).then(
        (response) => {
          // Ici on doit charger l'action d'envoyer les donnes de l'utilisateur en post
          // pour ca, il faut idientifier les datas a envoyer
          // store.dispatch(saveDeal(response.data));

          console.log('Response API, récupération utilisateur avec email => ', response);
          
        },
      )
        .catch((error) => {
          console.log(error);
          if(error.request.status === 401) {           
            store.dispatch(clearLogin('Mot de passe ou email incorrect'));            
          }
        });
      return next(action);
    }
    default:
      return next(action);
  }
};

export default userMiddleware;
