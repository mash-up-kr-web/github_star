import React, { useState } from "react";
import styled from "styled-components";

const Search = () => {
  const [searchValue, setSearchValue] = useState();

  return (
    <div>
      <input className="user-search-input" />
      <button>Search</button>
    </div>
  );
};

export default Search;
