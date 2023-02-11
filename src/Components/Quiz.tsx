import React, {useState, useContext} from "react";
import {Qustions} from "../Helpers/QustionBank";
import {QuizContext} from "../Helpers/Contexts";

const Quiz = () => {

    const {score, setScore, setGameState} = useContext(QuizContext)

    const [currQuestion, setCurrQuestion] = useState(0)
    const [optionChosen, setOptionChosen] = useState("")

    const nextQuestion = () => {
        if (Qustions[currQuestion].answer === optionChosen) {
            setScore(score + 1)
        }

        setCurrQuestion(currQuestion + 1)
    }

    const finishQuiz = () => {
        if (Qustions[currQuestion].answer === optionChosen) {
            setScore(score + 1)
        }
        setGameState("end")
    }
    return (
        <section className="Quiz">
            <h1>{Qustions[currQuestion].prompt}</h1>
            <div className='options'>
                <button onClick={() => setOptionChosen("optionA")}>{Qustions[currQuestion].optionA}</button>
                <button onClick={() => setOptionChosen("optionB")}>{Qustions[currQuestion].optionB}</button>
                <button onClick={() => setOptionChosen("optionC")}>{Qustions[currQuestion].optionC}</button>
                <button onClick={() => setOptionChosen("optionD")}>{Qustions[currQuestion].optionD}</button>
            </div>
            {currQuestion === Qustions.length - 1 ? (
                <button onClick={finishQuiz}>Finish Quiz</button>
            ) : (<button onClick={nextQuestion}>Next Question</button>)}

        </section>
    )

}
export default Quiz;