import React, { useState, useEffect } from 'react';
import api from "../services/api";
import hat from "../styles/icons/hat.svg";
import avatar from "../styles/icons/avatar-svgrepo-com.svg";
import { useHistory, Link } from "react-router-dom";
import "../styles/pages/ranking.css"


export default function Ranking() {
    const history = useHistory();

    const [data, setData] = useState([])

    useEffect(() => {
        api.get("api/ranking").then(response => setData(response.data));
    }, []);

    return (
        <main>
            <div className="ranking">
                <div className="title">Ranking</div>
                <div className="header">
                    <div></div>
                    <div>Nome</div>
                    <div>Nota</div>
                    <div></div>
                </div>
                <div className="evidence">
                    {data.map((student, index) => {
                        return (
                            <div className="singleStudent" key={`${student._id}-${index}`}>
                                <div className="avatar"><img src={avatar} alt="avatar"/></div>
                                <div>{student.name}</div>
                                <div className="score">
                                    <img src={hat} alt="hat"/>
                                    {student.corrects}
                                </div>
                                <Link to={`/evidence/${student._id}`}>Ver Prova</Link>
                            </div>
                        )
                    })}
                </div>
                <div className="buttonBack">
                        <button onClick={() => {
                            history.push("/");
                        }}>
                            Voltar ao menu
                    </button>
                </div>
            </div>
        </main>
    )
}
