import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Navbar from '../components/QuestionsComponents/Navbar'
import QuestionsForm from '../components/QuestionsComponents/QuestionsForm';
import Logout from '../components/Logout'

import useQuestionControl from '../hooks/useQuestionControl';
import api from "../services/api";

import "../styles/pages/questions.css";

export default function Questions() {
    const [questions, setQuestions] = useState([])
    let [questionIndex, setQuestionIndex] = useState(0);
    let [questionNumber, setQuestionNumber] = useState(1);
    const [accessedQuestions, registredAnswers, saveQuestionAndAnswer] = useQuestionControl();
    const [data, setData] = useState({});

    console.log(accessedQuestions,registredAnswers );

    async function questionController(answer, questionId) {
        await setQuestionIndex(++questionIndex);
        await setQuestionNumber(++questionNumber);
        await saveQuestionAndAnswer(questionId, answer);
    }

    useEffect(() => {
        api.get('question/all').then(response => setQuestions(response.data));
    }, []);

    useEffect(() => {
        api.get(`question/${questions[questionIndex]}`).then(response => setData(response.data));
    }, [questions, questionIndex])

    return (
        <main>
            <Navbar questionNumber={questionNumber} questionType={data.theme} />
            <QuestionsForm data={data} functionController={questionController} />
            <Logout />
        </main>

    )
}