import React, { useState } from 'react';
import QuestionsButtons from "../QuestionsComponents/QuestionsButtons";
import Figures from './Figures';


function QuestionsForm({ data, functionController }) {
    let [answer, setAnswer] = useState("");
    let [answers, setAnswers] = useState([]);

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            await setAnswers(...answers, answer);
            await functionController(answer, data._id)
            await alert('Resposta registrada');
        } catch (error) {
            return alert(`Houve um erro ao registrar as respostas. ${error}`)
        }
    }

    return (
        <>
            <div className="question">
                <div className="enunciado">
                    <p>{data.enunciation}</p>
                </div>
                <Figures matrix={data.matrix} tables={data.tables} />
                <div className="form">
                    <p>{data.pre_alternatives}</p>
                    <form onSubmit={handleSubmit}>
                        <div className="options">
                            {data.alternative_letter == undefined ? <p>Loading</p> : data.alternative_letter.map((letter, index) => {
                                return (
                                    <div key={`${letter}-${index}`}>
                                        <label htmlFor={`alternatives-${letter}`}>{letter}</label>
                                        <input type="radio" name="answers" id={`alternatives-${letter}`} value={letter} onClick={event => setAnswer(event.target.value)} />
                                        <span>{data.alternative_body[index]}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <QuestionsButtons />
                    </form>
                </div>
            </div>
        </>

    )

}

export default QuestionsForm;