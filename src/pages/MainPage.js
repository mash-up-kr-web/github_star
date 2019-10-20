import React from 'react';
import './MainPage.scss';
import { SearchTemplate } from '../components/search/searchTemplate';
import { SearchForm } from '../components/search/searchForm';
// import {PostList} from '../components/postList';
import SearchContainer from 'container/SearchContainer';

// 깃험 데이터 리스트 부분을 넣는다.
const MainPage = () => {
return(
  <SearchTemplate>
    <SearchForm />
      {/* <PostList /> */}
      <SearchContainer/>
  </SearchTemplate>
  
 );
};

export default MainPage;