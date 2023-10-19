import { useCallback } from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const CountryCapital = ({ data }) => {
  const [conutryCapitalList, setConutryCapitalList] = useState([]);
  const [selectedPair, setSelectedPair] = useState(null);
  const [wrongPair, setWrongPair] = useState([]);
  const [message, setMessage] = useState("");

  /**
   * This function creates a random order of buttons contains countries and capitals for the game, 
   */
  const generateButtons = useCallback(() => {
    const buttonArray = [];
    Object.keys(data).forEach((country, index) => {
      buttonArray.push(
        { id: `key_${index}`, matchValue: index, value: country },
        { id: `value_${index}`, matchValue: index, value: data[country] }
      );
    });
    /**  Shuffle the button elements*/
    for (let i = buttonArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [buttonArray[i], buttonArray[j]] = [buttonArray[j], buttonArray[i]];
    }
    setConutryCapitalList(buttonArray);
  }, [data]);


  /**
  *function to manage the selection of pairs, checks for correct matches, and updates the game state.
  * @param {Object} countryCapital - Object containg the details specific button.
  */
  const handleButtonClick = (countryCapital) => {
    setWrongPair([]);
    if (!selectedPair || selectedPair?.id === countryCapital?.id) {
      setSelectedPair(countryCapital);
    } else if (selectedPair?.matchValue === countryCapital?.matchValue) {
      removeButtons();
    } else {
      const wrongPairIDList = [selectedPair?.id, countryCapital?.id];
      setSelectedPair();
      setWrongPair(wrongPairIDList);
    }
  };
  /**
   * Function to remove button from conutryCapitalList array when matichig country and capital selected
   */
  const removeButtons = () => {
    const newButtons = conutryCapitalList.filter(
      (countryCapital) =>
        countryCapital?.matchValue !== selectedPair?.matchValue
    );
    setSelectedPair();
    if (newButtons?.length === 0) {
      setMessage("Congratulations");
    }
    setConutryCapitalList(newButtons);
  };

  /**
   * Resets the game by generating new buttons and clearing the game message.
   */
  const resetGame = () => {
    generateButtons();
    setMessage("");
  };

  /**
   * UseEffect that triggers genreateButtons function when the components is loaded
   */
  useEffect(() => {
    generateButtons();
  }, [generateButtons]);

  return (
    <div
      className={` w-[calc(100vw-40%)]  min-h-[100px]  justify-center flex flex-wrap mx-auto gap-4 items-center`}
    >
      {conutryCapitalList.map((countryCapital) => (
        <button
          className={`${
            wrongPair.includes(countryCapital?.id)
              ? "bg-[#ff0000] focus:bg-[#ff0000]"
              : selectedPair?.id === countryCapital?.id
              ? "bg-[#0000ff] focus:bg-[#0000ff]"
              : "bg-gray-400"
          }  w-28 h-10 hover:bg-[#4b4ba2] hover:text-white rounded-sm`}
          key={countryCapital?.id}
          onClick={() => handleButtonClick(countryCapital)}
        >
          {countryCapital?.value}
        </button>
      ))}
      {message && (
        <div>
          <p className="mb-5">{message}</p>
          <button
            className="bg-gray-400 hover:bg-[#4b4ba2] hover:bg-[#4b4ba2 hover:text-white p-3 rounded-sm"
            onClick={resetGame}
          >
            Reset Game
          </button>
        </div>
      )}
    </div>
  );
};

CountryCapital.propTypes = {
  data: PropTypes.object,
};

export default CountryCapital;
