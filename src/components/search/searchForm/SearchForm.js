import React from 'react';
import './SearchForm.scss';


const SearchForm = () => {
  return (
 <div className="SearchForm">
     <h3>Unofficial Github star ranking for users, organizations and repositories.</h3>
      <form>
        <input name="keyword" placeholder="키워드를 입력하세요" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;