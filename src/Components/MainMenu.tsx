import React, {useContext} from "react";
import {QuizContext} from "../Helpers/Contexts";
import '../App.css';


const MainMenu = () => {

    const {gameState, setGameState} = useContext(QuizContext)

    return (
        <section className="Menu">
            <button onClick={() => {
                setGameState('quiz')
            }}>Start Quiz
            </button>
        </section>
    )

}
export default MainMenu;