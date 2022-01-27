import { useState } from "react";
import useToggleState from "./hooks/useToggleState";
import MadlibsSentence from "./MadlibsSentence";
import MadlibsForm from "./MadlibsForm";
import MuiMadlibsForm from "./MuiMadlibsForm";


const MadlibsBoard = () => {
  const [madlibsData, setMadlibsData] = useState();
  const [isFormVisible, toggleIsFormVisible] = useToggleState(true);

  const addMadlibsData = (newMadlibsData) => {
    setMadlibsData({ ...newMadlibsData });
    toggleIsFormVisible();
  };

  const reset = () => {
      toggleIsFormVisible();
      setMadlibsData(null)
  }

  return (
    <div>
      {isFormVisible ? (
        <MuiMadlibsForm add={addMadlibsData} />
      ) : (
        <MadlibsSentence reset={reset} noun1={madlibsData.noun1} noun2={madlibsData.noun2} adj={madlibsData.adjective} color={madlibsData.color} />
      )}
    </div>
  );
};

export default MadlibsBoard;
