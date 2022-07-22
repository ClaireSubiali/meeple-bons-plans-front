import { createStore, compose } from 'redux';

import reducer from '../reducers';

// permet d'utiliser les react dev tool sur le localhost
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,composeEnhancers()
  // il faudra utiliser composeEnhancers() ici lors de l'ajout des middlewares
);

export default store;
