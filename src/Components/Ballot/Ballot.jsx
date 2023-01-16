import React from "react";
import CategoryRow from "./CategoryRow";

const Ballot = ({ loading, error, data, updateBallotResults }) => {
  return (
    <div className="ballot">
      <header>
        <h1>Awards 2021</h1>
      </header>
      {!loading ? (
        data.map((item) => (
          <CategoryRow
            key={item.id}
            data={item}
            updateBallotResults={updateBallotResults}
          />
        ))
      ) : (
        <div className="loading-screen">Loading...</div>
      )}
      {error ? (
        <h3 className="error-screen text-danger">Error loading data</h3>
      ) : null}
    </div>
  );
};

export default Ballot;
