import React, { useState } from "react";
import Search from "../Search";

const Header = () => (
  <div>
    <h1>Gitstar Ranking</h1>
    <h3>
      Unofficial Github star ranking for users, organizations and repositories
    </h3>
    <Search />
  </div>
);

export default Header;
