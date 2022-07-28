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
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTkwMjE3NzcsImV4cCI6MTY1OTA4NjU3Nywicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmNvbSJ9.rzw7-G3e94Tyf7KphGJIn3MiaUlIc1F7XFVP4hTtTbmDKPKM96Jcx78RmpDxCDiarIWdnz6xYYUU4rx-tQviZFEkmKATu_fpLuEqO89oAHqeIsid2UCekOV0myjLqwyPGmpfSAoaZr_qYpNwCjpACDP3KtDeC5s3FtVLK_rFmEjaU5D4VesAsd8KoTe7eygpKezZO6IP9SGYhAJp4wVq7WUfF7HMK0IcPObtRcp0af4W7EQZfRJT-XOX6ju5OIBwibVY5Rz38-bYQiw0mT6HVJIUQK0K2lPW1UltqGyjKRqT784plcynv99RPsiuZHRIT56O2RvX6o6HD--gAkiQ';
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
          console.log('Response API',response);
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
