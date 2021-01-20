import React, { useState, useEffect } from 'react';
import api from "../services/api";
import { useParams, useHistory } from "react-router-dom"
import "../styles/pages/evidence.css"

function Evidence() {
    const params = useParams();
    const history = useHistory();
    const [data, setData] = useState({});

    useEffect(() => {
        api.get(`api/evidence/${params.id}`).then((response) => setData(response.data.information));
    }, [])

    const questions = [data.question1, data.question2, data.question3, data.question4];

    console.log(questions)

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
                    <div>Questão 1</div>
                    <div>{data.question1}</div>
                    <div>Questão 2</div>
                    <div>{data.question2}</div>
                    <div>Questão 3</div>
                    <div>{data.question3}</div>
                    <div>Questão 4</div>
                    <div>{data.question4}</div>
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

export default Evidence;