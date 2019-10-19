import React, { useState } from "react";
import { Header, UserInfo, Ranking } from "./components";

const App = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <Header />
      <UserInfo />
      <Ranking />
    </div>
  );
};

export default App;
