import React from "react";
import NomineeCard from "./NomineeCard";

const CategoryRow = ({ data, updateBallotResults }) => {
  return (
    <div className="category-row">
      <header>
        <h2>{data.title}</h2>
      </header>
      <div className="nominee-card-wrapper">
        {data.items.map((item) => (
          <NomineeCard
            key={item.id}
            category={data.id}
            data={item}
            updateBallotResults={updateBallotResults}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryRow;
