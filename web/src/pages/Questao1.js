import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import QuestionsButtons from "../components/QuestionsButtons";
import Logout from "../components/Logout";
import api from "../services/api";
import { useHistory } from "react-router-dom";
import "../styles/pages/question1.css";
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';



export default function Question1() {
    let [answer, setAnswer] = useState("");
    let [answers, setAnswers] = useState([]);
    let [questionsIndex, setQuestionsIndex] = useState(0);
    const [questions, setQuestions] = useState([])
    const [data, setData] = useState({});
    const history = useHistory();

    console.log(questions.length, answers.length)

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            await setAnswers(...answers, answer);
            await alert('Resposta registrada');
            await setQuestionsIndex(questionsIndex++);
            if (answers.length === questions.length) {
                history.push("/prova/gabarito")
            }
        } catch (error) {
            return alert(`Houve um erro ao registrar as respostas. ${error}`)
        }
    }
    useEffect(() => {
        api.get('question/all').then(response => setQuestions(response.data));
    }, []);

    useEffect(async () => {
        api.get(`question/${questions[questionsIndex]}`).then(response => setData(response.data));
    }, [questions, questionsIndex])


    if (!data) {
        return <p>Loading...</p>
    }

    return (
        <main>
            <Navbar questionNumber={1} questionType={data.theme} />
            <div className="pergunta1">
                <div className="enunciado">
                    <p>{data.enunciation}</p>
                </div>
                <div className="figura">
                    {data.matrix == undefined ? <></> :
                        data.matrix.map((matrix, index) => {
                            return (
                                <div className="matriz" key={`matrix-${index}`}>
                                    <BlockMath math={matrix == undefined ? "carregando" : matrix}
                                    />
                                </div>
                            )
                        })
                    }
                    {data.tables == undefined ? <></> :
                        data.tables.map((tables, index) => {
                            return (
                                <div className="matriz" key={`tables-${index}`}>
                                    <BlockMath math={tables == undefined ? "" : tables}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
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
            <Logout />
        </main>

    )
}