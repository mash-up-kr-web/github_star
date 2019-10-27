import { IUser } from './user';
import { IRepo } from './repo';

export interface IStore {
  user: {
    userInfo: IUser
  }
  repo: IStoreRepo
}

export interface IStoreRepo {
  originData: Array<IRepo>,
  sortedData: Array<IRepo>,
  totalStars: number,
}