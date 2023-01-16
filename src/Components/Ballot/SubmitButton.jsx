import React from "react";

const SubmitButton = ({ handleSubmitBallot }) => {
  return (
    <button className="submit-ballot-button" onClick={handleSubmitBallot}>
      Submit Ballot
    </button>
  );
};

export default SubmitButton;
