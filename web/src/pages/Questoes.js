import React, { useState, useEffect } from 'react';
import Navbar from '../components/QuestionsComponents/Navbar'
import QuestionsForm from '../components/QuestionsComponents/QuestionsForm';
import Logout from '../components/Logout'
import { useHistory } from 'react-router-dom'
import { AsyncStorage } from 'AsyncStorage';
import api from "../services/api";

import "../styles/pages/questions.css";

export default function Questions() {
    const [questions, setQuestions] = useState([AsyncStorage.getItem('QUESTIONS')])
    let [questionIndex, setQuestionIndex] = useState(0);
    let [questionNumber, setQuestionNumber] = useState(1);
    const [data, setData] = useState({});
    const history = useHistory();
    


    async function questionController() {
        await setQuestionIndex(++questionIndex);
        await setQuestionNumber(++questionNumber);
    }

    useEffect(() => {
        api.get(`question/${questions[questionIndex]}`).then(response => setData(response.data));

    }, [questions, questionIndex])

    return (
        <main>
            <Navbar questionNumber={questionNumber} questionType={data.theme} />
            <QuestionsForm data={data} functionController={questionController}/>
            <Logout />
        </main>

    )
}