import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const S = {
  UserName: styled.div``,
  RepoInfo: styled.div``,
};
const UserInfo = (props) => {
  const [userState, setUserState] = useState(props);

  useEffect(() => {
    setUserState(props);
  }, [props]);

  return (
    <>
      <S.UserName>{userState.name}</S.UserName>
      <S.RepoInfo>
        {userState.repo} Repositories | {userState.star} stars
      </S.RepoInfo>
      <hr />
    </>
  );
};

export default UserInfo;
