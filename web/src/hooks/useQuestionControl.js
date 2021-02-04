import React, { useState } from 'react';

function QuestionsControl() {

    const [accessedQuestions, setAccessedQuestions] = useState([]);
    const [registredAnswers, setRegistredAnswers] = useState([]);

    function saveQuestionAndAnswer(question, answer) {
        setAccessedQuestions([...accessedQuestions, question]);
        setRegistredAnswers([...registredAnswers, answer]);
    }

    return [accessedQuestions, registredAnswers, saveQuestionAndAnswer];
}

export default QuestionsControl;