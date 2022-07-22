import { combineReducers } from 'redux';

import dealReducer from './deal';
import userReducer from './user';

const rootReducer = combineReducers({
  recipes: dealReducer,
  user: userReducer,
});

export default rootReducer;
