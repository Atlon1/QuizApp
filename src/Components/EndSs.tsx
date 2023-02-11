import React, {useContext} from "react";
import {QuizContext} from "../Helpers/Contexts";
import {Qustions} from '../Helpers/QustionBank';
import '../App.css';

const EndSs = () => {

    const restartQuiz = () => {
        setGameState('menu')
        setScore(0)
    }

    const {score, setScore, setGameState} = useContext(QuizContext)

    return (
        <section className="EndScreen">
            <h1>Quzi zakonaczony! </h1>
            <h3>Ilośc pytań {Qustions.length} / Wynik: {score}</h3>
            <button onClick={restartQuiz} >Restartuj Quiz</button>
        </section>
    )

}
export default  EndSs;