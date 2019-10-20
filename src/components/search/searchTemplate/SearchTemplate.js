import React from 'react';
import { Link } from 'react-router-dom';
import './SearchTemplate.scss';

/**
 * 회원가입/로그인 페이지의 레이아웃을 담당하는 컴포넌트입니다.
 */
const SearchTemplate = ({ children }) => {
  return (
    <div className="SearchTemplate">
      <div className="whitebox">
        <div className="logo-area">
          <Link to="/" className="logo">
            Gitstar Ranking
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
};

export default SearchTemplate;