import { combineReducers } from 'redux';
import { userReducer } from './user';
import { repoReducer } from './repo';

const rootReducer = () => {
  return combineReducers({
    user: userReducer,
    repo: repoReducer
  });
};

export default rootReducer;
