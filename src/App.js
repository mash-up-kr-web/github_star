import React, { useState } from 'react';
import axios from 'axios';

const STATE = { INIT: 0, SUCCESS: 1, FAIL: 2 };

const initRankingInfo = { userName: '', reposCount: 0, starsCount: 0, repoInfos: [] };

const renderHeaderForm = ({inputValue, onChangeInputValue, getUserRepos}) => (
  <div>
      <h1>Gitstar Ranking</h1>
      <p>Unofficial GitHub star ranking for users, organizations and repositories.</p>
      <div>
        <input type='text' placeholder='Github username' value={inputValue} onChange={onChangeInputValue}/>
        <button type='button' onClick={getUserRepos}>Search</button>
      </div>
    </div>
);

const renderBodyForm = ({appState, rankingInfo}) => {
  const initialForm = () => (<p>Hello World!</p>);
  const successForm = () => (rankingInfo.repoInfos.map(repoInfo => (
    <div key={repoInfo.id}>
      <div>{repoInfo.name} - {repoInfo.starCount}</div>
    </div>
  )));
  const failForm = () => (<p>Not Found</p>);

  return (
    <div>
      <div>
        <h2>{rankingInfo.userName}</h2>
        <p>{rankingInfo.reposCount} Repositories | {rankingInfo.starsCount} Stars</p>
        <hr/>
      </div>
      <div>{{ [STATE.INIT]: initialForm(), [STATE.SUCCESS]: successForm(), [STATE.FAIL]: failForm()}[appState]}</div>
    </div>
  );
};

const App = () => {
  const [appState, setAppState] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [rankingInfo, setRankingInfo] = useState(initRankingInfo);

  const onChangeInputValue = e => { setInputValue(e.target.value); };

  const getUserRepos = () => {
    const url = `https://api.github.com/users/${inputValue}/repos`;
    axios
      .get(url)
      .then(res => {
        const userRepos = res.data;
        const userName = inputValue;
        const reposCount = userRepos.length;
        let starsCount = 0;
        const repoInfos = [];
        for (const userRepo of userRepos) {
          repoInfos.push({ id: userRepo.id, name: userRepo.name, starCount: userRepo.stargazers_count });
          starsCount += userRepo.stargazers_count
        }
        setRankingInfo({ userName, reposCount, starsCount, repoInfos });
        setAppState(STATE.SUCCESS);
      })
      .catch(error => {
        setRankingInfo(initRankingInfo);
        setAppState(STATE.FAIL);
        console.log(error);
      });
  };

  return (
    <div>
      {renderHeaderForm({inputValue, onChangeInputValue, getUserRepos})}
      {renderBodyForm({appState, rankingInfo})}
    </div>
  );
};

export default App;
