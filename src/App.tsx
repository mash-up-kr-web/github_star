import React, { useState } from 'react';
import { Dispatch } from 'redux';
import { GrayBox } from './components/Items/Box';
import { H1, H4 } from './components/Items/Txt';
import { Input } from './components/Items/Input';
import { Btn } from './components/Items/Btn';
import { GitHubActions } from './store/actions/actions';
import { connect, useDispatch } from 'react-redux';
import { UserInfo } from './components/Container/UserInfo';
import { Repository } from './components/Container/Repository';
import { IUserParams } from './store/actions/types';
import { IUser } from './store/interface/user';
import { IRepo } from './store/interface/repo'

const App: React.FC = (props: any) => {
  const dispatch = useDispatch();
  const [userName, setUsername] = useState('' as any);
  const onClickHandler = () => {
    dispatch(GitHubActions.requestUserInfo(userName));
    dispatch(GitHubActions.requestUserRepoInfo(userName));
  }

  return (
    <div className="App">
      <GrayBox>
        <H1>Gitstar Ranking</H1>
        <H4>Unofficial GitHub star ranking for users, organizations and repositories</H4>
        <Input type="text" value={userName} onChange={(e?: any) => setUsername(e.target.value)}/>
        <Btn onClick={onClickHandler}>Search</Btn>
      </GrayBox>
      <UserInfo userInfo={props.user.userInfo} repo={props.repo}/>
      <Repository repository={props.repo}/>
    </div>
  );
}

interface IStateToProps {
  user: IUser,
  repo: IRepo,
}

const mapStateToProps = ({ user, repo }: IStateToProps) => {
  return {
    user, repo
  }
};

interface IDispatchToProps {
  requestUserInfo: typeof GitHubActions.requestUserInfo,
  requestUserRepoInfo: typeof GitHubActions.requestUserRepoInfo,
}

const mapDispatchToProps = (dispatch: Dispatch): IDispatchToProps => {
  return {
    requestUserInfo: (userName: IUserParams) => {
      return dispatch(GitHubActions.requestUserInfo(userName))
    },
    requestUserRepoInfo:(userName: IUserParams) => {
      return dispatch(GitHubActions.requestUserRepoInfo(userName))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
