import React, {useState, useContext} from 'react';
import './App.css';
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import EndSs from "./Components/EndSs";
import {QuizContext} from "./Helpers/Contexts";

function App() {
    const [gameState, setGameState] = useState("menu");


    return (
        <div className="App">
            <h1>Quiz APP</h1>
            <QuizContext.Provider value={{gameState, setGameState}}>
            {gameState === 'menu' && <MainMenu/>}
            {gameState === 'quiz' && <Quiz/>}
            {gameState === 'end' && <EndSs/>}
            </QuizContext.Provider>
        </div>
    );
}

export default App;
