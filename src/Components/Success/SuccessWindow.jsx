import React from "react";

const SuccessWindow = ({ ballotResults, setIsBallotSubmitted }) => {
  const handleClickToClose = ({ target }) => {
    if (target.className === "success-window-pane") {
      setIsBallotSubmitted(false);
    }
  };

  return (
    <div className="success-window-pane" onClick={handleClickToClose}>
      <div className="success-window">
        <h3>Success!!!</h3>
        <div>
          {Object.entries(ballotResults).map(([key, value], index) => (
            <div key={index} className="ballot-results">
              {`${key.replaceAll("-", " ")}: ${value.replaceAll("-", " ")}`}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessWindow;
