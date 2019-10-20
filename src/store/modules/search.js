import { createAction, handleActions } from 'redux-actions';

import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from '../../lib/api/search';

// action types
const GET_SEARCH_LIST = 'search/GET_SEARCH_LIST';

// action creators
export const getSearchList = createAction(GET_SEARCH_LIST, api.getSearchList, meta => meta);

// initial state
const initialState = Map({
  posts: List(),
});

// reducer
export default handleActions({
  ...pender({
    type: GET_SEARCH_LIST,
    onSuccess: (state, action) => {
      const { data: posts } = action.payload;
      return state.set('posts', fromJS(posts))
    }
  })
}, initialState)