import React from 'react';

const Ranking = (props) => {
  const { ranking } = props;
  ranking.sort((a, b) => b.stargazers_count - a.stargazers_count);

  return (
    <>
      <div />
      {ranking.map((repo) => (
        <div>
          <span>{repo.name}</span>
          <span>{repo.stargazers_count}</span>
        </div>
      ))}
      <hr />
    </>
  );
};
export default Ranking;
