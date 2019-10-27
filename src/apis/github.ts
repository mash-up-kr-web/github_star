import { get } from './index';
import { IUserParams } from '../store/actions/types';

export const getUserInfo = (userName: IUserParams) => {
  return get(`/users/${userName}`).then(value => value);
}

export const getUserRepoInfo = (userName: IUserParams) => {
  return get(`/users/${userName}/repos`).then(value => value);
}
