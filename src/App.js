import React, { useState } from "react";
import { Header, UserInfo, Ranking } from "./components";
import axios from "axios";
import "./App.css";

const App = () => {
  const [userName, setUserName] = useState("");
  const [userState, setState] = useState({
    name: userName,
    repo: 0,
    star: 0
  });
  const [ranking, setRanking] = useState([]);

  const inputHandler = e => {
    setUserName(e.target.value);
  };

  const clickHandler = async () => {
    const repoApi = `https://api.github.com/users/${userName}/repos`;
    const { data } = await axios.get(repoApi);

    setState({
      name: userName,
      repo: data.length,
      star: data.reduce((acc, cur) => acc + cur.stargazers_count, 0)
    });

    setRanking(data);
  };

  return (
    <div className="App">
      <Header inputHandler={inputHandler} clickHandler={clickHandler} />
      <UserInfo {...userState} />
      <Ranking ranking={ranking} />
    </div>
  );
};

export default App;
