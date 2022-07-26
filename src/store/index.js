import { createStore, applyMiddleware, compose } from 'redux';

import reducer from '../reducers';

// On donne acces au middlewares 
import dealMiddleware from '../middlewares/deal';
import userMiddleware from '../middlewares/user';

// permet d'utiliser les react dev tool sur le localhost
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// trad. exhausteurs => 
const enhancers = composeEnhancers(
  //permet de combiner les deux middlewares 
  applyMiddleware(dealMiddleware, userMiddleware),
);
const store = createStore(
  reducer,composeEnhancers()
  // il faudra utiliser composeEnhancers() ici lors de l'ajout des middlewares
);

export default store;
