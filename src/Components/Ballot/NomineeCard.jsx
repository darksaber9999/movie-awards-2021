import React from "react";

const NomineeCard = ({ category, data, updateBallotResults }) => {
  const idString = `${category}-${data.id}`;

  const handleClick = () => {
    updateBallotResults(category, data.id);
    document.getElementById(idString).classList.add("selected");
  };

  return (
    <div id={idString} className="nominee-card" onClick={handleClick}>
      <h3>{data.title}</h3>
      <div className="img-wrapper">
        <img src={data.photoUrL} alt={data.id} />
      </div>
      <h4>Select</h4>
    </div>
  );
};

export default NomineeCard;
