import { Reducer } from 'redux';
import produce from 'immer';
import { GitHubActionTypes } from '../actions/types';

const _successUserInfo = (action: any, draft: any) => {
  draft.userInfo = action.payload
}

const initialState = {
  userInfo: {}
};

const reducer: Reducer = (state = initialState, action) => {
  return produce(state, (draft: any) => {
    switch (action.type) {
      case GitHubActionTypes.SUCCESS_USER_INFO:
         return _successUserInfo(action, draft)
      default:
        return state;
    }
  });
};


export { reducer as userReducer };

