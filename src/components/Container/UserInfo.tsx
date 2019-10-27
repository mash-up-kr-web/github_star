import React from 'react';
import { H2, H3 } from '../Items/Txt';
import { isEmpty } from 'lodash'
import { isFalsy } from '../../shared';
import { IStoreRepo } from '../../store/interface/internal';
import { IUser } from '../../store/interface/user';

export const UserInfo = (props: { userInfo: IUser, repo: IStoreRepo}) => {
  const { userInfo, repo } = props;
  if (isFalsy(userInfo.id) || isEmpty(repo.originData)) return null;

  return (
    <div>
      <H2>{userInfo.login}</H2>
      <H3>{`${userInfo.public_repos} Repositories`}  | {repo.totalStars} stars</H3>
    </div>
  )
}