import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx";
import { useState } from "react";



function App() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10
	});

  const userInputIsValid = userInput.duration >= 1;

	function handleChange(inputIdentifier, newValue) {
		setUserInput(prevInput => {
			return {
				...prevInput,
				[inputIdentifier]: +newValue
			}
		});
	}


  return (
    <>
    <Header />
    <UserInput userInput={userInput} onChange={handleChange} />
    
    {!userInputIsValid && <p className="center">Please enter a duration number greater than 0</p> }
    {userInputIsValid && <Results userInput={userInput} />}
    </>
  )
}

export default App
