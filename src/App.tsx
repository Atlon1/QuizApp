import React, {useState} from 'react';
import './App.css';
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import EndSs from "./Components/EndSs";

function App() {
    const [gameState, setGameState] = useState("menu");


    return (
        <div className="App">
            <h1>Quiz APP</h1>
            {gameState === 'menu' && <MainMenu/>}
            {gameState === 'quiz' && <Quiz/>}
            {gameState === 'end' && <EndSs/>}
        </div>
    );
}

export default App;
