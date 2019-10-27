import { put, delay, takeEvery, call } from 'redux-saga/effects';
import { GitHubActions } from '../actions/actions';
import { GitHubActionTypes } from '../actions/types';
import { getUserInfo, getUserRepoInfo } from '../../apis/github';

export function* requestUserInfo(action: any) {
  const {data, status} = yield call(getUserInfo, action.payload)
  if (status === 200) yield put(GitHubActions.successUserInfo(data));
}

export function* requestUserRepoInfo(action: any) {
  const {data, status} = yield call(getUserRepoInfo, action.payload)
  if (status === 200 ) yield put(GitHubActions.successUserRepoInfo(data));
}

function* watchRequestUserInfo() {
  try {
    yield takeEvery(GitHubActionTypes.REQUEST_USER_INFO, requestUserInfo);
  } catch (e) {
    yield delay(1000);
    console.log('errored in watchRequestUserInfo - ', e.message);
  }
}

function* watchRequestUserRepoInfo() {
  try {
    yield takeEvery(GitHubActionTypes.REQUEST_USER_REPO_INFO, requestUserRepoInfo);
  } catch (e) {
    yield delay(1000);
    console.log('errored in watchRequestUserInfo - ', e.message);
  }
}
export default [watchRequestUserInfo, watchRequestUserRepoInfo];