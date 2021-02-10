import React, { useState, useEffect } from 'react';
import Navbar from '../components/QuestionsComponents/Navbar'
import QuestionsForm from '../components/QuestionsComponents/QuestionsForm';
import Logout from '../components/Logout'
import { useHistory } from 'react-router-dom'

// import useQuestionControl from '../hooks/useQuestionControl';
import api from "../services/api";

import "../styles/pages/questions.css";

export default function Questions() {
    const [questions, setQuestions] = useState([])
    let [haveMoreQuestions, setHaveMoreQuestions] = useState(true);
    let [questionIndex, setQuestionIndex] = useState(0);
    let [questionNumber, setQuestionNumber] = useState(1);
    // const [accessedQuestions, registredAnswers, saveQuestionAndAnswer] = useQuestionControl();
    const [data, setData] = useState({});
    const history = useHistory();

    async function questionController() {
        await setQuestionIndex(++questionIndex);
        await setQuestionNumber(++questionNumber);
    }

    useEffect(() => {
         api.get('question/all').then(response => setQuestions(response.data));
    }, []);

    useEffect(() => {
        api.get(`question/${questions[questionIndex]}`).then(response => setData(response.data));

    }, [questions, questionIndex])

    console.log(questions.length, questionIndex)

    if (questionIndex == questions.length && questions.length < 0 ) {
        setHaveMoreQuestions(false);
    }

    return (
        <main>
            <Navbar questionNumber={questionNumber} questionType={data.theme} />
            <QuestionsForm data={data} functionController={questionController} haveMoreQuestion={haveMoreQuestions} />
            <Logout />
        </main>

    )
}