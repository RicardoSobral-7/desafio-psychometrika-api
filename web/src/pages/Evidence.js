import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom"
import api from "../services/api";
import "../styles/pages/evidence.css"

export default function Evidence() {
    const params = useParams();
    const history = useHistory();
    const [data, setData] = useState({});
    const [answers, setAnswers] = useState([]);    
    
    useEffect(() => {
        api.get(`evidence/${params.id}`).then(response =>{ 
            setData(response.data);
            setAnswers(response.data.questions_answers);

            });
    }, [params.id]);


    if(!data) {
        return <p>Loading...</p>
    }

    return (
        <main>
            <div className="evidence">
                <div className="title">
                    <div>Prova</div>
                    <div className="info">
                        <p>{data.name}</p>
                        <span>{data.email}</span>
                    </div>
                </div>

                <div className="headerQuestion">
                    <div>Questão</div>
                    <div>Resposta</div>
                </div>
                <div className="showEvidence">
                {answers.map((answer, index)=> {
                    return (
                        <div className="answer" key={`${index}-${answer}`}> 
                            <div>Questão {index+1}</div>
                            <div>{answer}</div>
                        </div>
                    )
                })}
                </div>

                <div className="buttons">
                    <button onClick={() => {
                        history.push("/");
                    }}>
                        Voltar ao menu
                    </button>
                    <button onClick={() => {
                        history.push("/ranking");
                    }}>
                        Ranking
                    </button>
                </div>
            </div>

        </main>
    )
}