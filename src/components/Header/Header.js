import React from 'react';
import Search from '../Search';

const Header = (props) => {
  const { inputHandler, clickHandler } = props;
  return (
    <div>
      <h1>Gitstar Ranking</h1>
      <h3>
        Unofficial Github star ranking for users, organizations and repositories
      </h3>
      <Search inputHandler={inputHandler} clickHandler={clickHandler} />
    </div>
  );
};

export default Header;
