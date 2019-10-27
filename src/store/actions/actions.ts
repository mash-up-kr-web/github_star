import { action } from 'typesafe-actions';
import { GitHubActionTypes, IUserParams } from './types';
import { IUser } from '../interface/user';
import { IRepo } from '../interface/repo';

export const GitHubActions = {
  requestUserInfo: (payload: IUserParams) => action(GitHubActionTypes.REQUEST_USER_INFO, payload),
  successUserInfo: (payload: Array<IUser>) => action(GitHubActionTypes.SUCCESS_USER_INFO, payload),
  failureUserInfo: (e?: Error) => action(GitHubActionTypes.FAILURE_USER_INFO, e),
  requestUserRepoInfo: (payload: IUserParams) => action(GitHubActionTypes.REQUEST_USER_REPO_INFO, payload),
  successUserRepoInfo: (payload: Array<IRepo>) => action(GitHubActionTypes.SUCCESS_USER_REPO_INFO, payload),
  failureUserRepoInfo: (e?: Error) => action(GitHubActionTypes.FAILURE_USER_REPO_INFO, e),
};
