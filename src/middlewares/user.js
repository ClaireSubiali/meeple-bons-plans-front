/*
import axios
import {
    LOGIN,
    CHANGE_FIELD_VALUE,    
} from ../actions/user;

// Pas sur qu'on en est vraiment besoin ???
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/',
});

const userMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
      case LOGIN: {
        // const state = store.getState();
        // const { email, password } = state.user;
        // équivalent : double destructuration
        const { user: { email, password } } = store.getState();
        */
  
        // On commence par importer les actions et axios
import axios from 'axios';
// puis les actions
//import {
  /*
}

On n'utilise pas axios directement, mais on l'instancie ? pk ?

- creer une fonction qui prends en charge le store (next ca je sais pas ce que c'est) puis le action
- et on reprodut dedans les actions switch , case ....
- puis on vient utiliser axios pour envoyer la data
- on attends la reponse qui l'on extrait pour la stocker dans une variable
- enregistrement token ?????
- On vient tout stocker dans le state
- on s'assure d'un script en cas d'erreur
- ET ON RECOMMENCE case ...

*/
