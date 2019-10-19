import React from 'react';
import styled from 'styled-components';

const S = {
  Input: styled.input``,
  Button: styled.button``,
};
const Search = (props) => {
  const { inputHandler, clickHandler } = props;
  return (
    <div>
      <S.Input onChange={inputHandler} />
      <S.Button onClick={clickHandler}>Search</S.Button>
    </div>
  );
};

export default Search;
