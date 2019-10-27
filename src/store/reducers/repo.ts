import { Reducer } from 'redux';
import produce from 'immer';
import { GitHubActionTypes } from '../actions/types';
import { sortBy, reduce } from 'lodash';

const _successUserRepoInfo = (action: any, draft: any) => {
    draft.originData = action.payload
    draft.sortedData = sortBy(action.payload, ['stargazers_count', 'name']).reverse();
    draft.totalStars = reduce(action.payload, function (total, value){
      return total += value.stargazers_count;
    }, 0)
}
// reducer
const initialState = {
  originData: [],
  sortedData: [],
  totalStars: 0,
};

const reducer: Reducer = (state = initialState, action) => {
  return produce(state, (draft: any) => {
    switch (action.type) {
      case GitHubActionTypes.SUCCESS_USER_REPO_INFO:
        return _successUserRepoInfo(action, draft);
      default:
        return state;
    }
  });
};


export { reducer as repoReducer };

