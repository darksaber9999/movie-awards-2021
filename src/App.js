import React, { useState, useEffect } from "react";
import api from "./Api/Api";
import Ballot from "./Components/Ballot/Ballot";
import SubmitButton from "./Components/Ballot/SubmitButton";
import SuccessWindow from "./Components/Success/SuccessWindow";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [ballotResults, setBallotResults] = useState({});
  const [isBallotSubmitted, setIsBallotSubmitted] = useState(false);

  const setProductData = () => {
    setLoading(true);
    setError(false);
    api.getBallotData().then(
      (res) => {
        if (res) {
          setData(res.items);
          setLoading(false);
        } else {
          setLoading(false);
        }
      },
      (error) => {
        console.log(error);
        setLoading(false);
        setError(true);
        setData([]);
      }
    );
  };

  useEffect(() => {
    setProductData();
  }, []);

  const checkForDuplicatesSelectedInCategories = (category, nominee) => {
    const nomineeCards = document.getElementsByClassName("nominee-card");

    for (const card of nomineeCards) {
      if (card.id !== `${category}-${nominee}` && card.id.includes(category)) {
        card.classList.remove("selected");
      }
    }
  };

  const updateBallotResults = (category, nominee) => {
    setBallotResults((prevState) => ({ ...prevState, [category]: nominee }));
    checkForDuplicatesSelectedInCategories(category, nominee);
  };

  const handleSubmitBallot = () => {
    if (Object.keys(ballotResults).length > 0) {
      setIsBallotSubmitted(true);
    }
  };

  return (
    <div className="app">
      <Ballot
        loading={loading}
        error={error}
        data={data}
        updateBallotResults={updateBallotResults}
      />
      <SubmitButton handleSubmitBallot={handleSubmitBallot} />
      {isBallotSubmitted ? (
        <SuccessWindow
          ballotResults={ballotResults}
          setIsBallotSubmitted={setIsBallotSubmitted}
        />
      ) : null}
    </div>
  );
}

export default App;
