import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom"
import api from "../services/api";
import "../styles/pages/evidence.css"

export default function Evidence() {
    const params = useParams();
    const history = useHistory();
    const [data, setData] = useState({});    
    
    useEffect(() => {
        api.get(`api/evidence/`).then(response => setData(response.data));
    }, []);

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
                    {data.questions_answers.map((answer, index) => {
                        return (
                            <>
                                <div>Questão {index+1}</div>
                                <div>{answer}</div>
                            </>
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