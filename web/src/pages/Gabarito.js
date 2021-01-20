import React, { useState, useEffect } from 'react';
import api from "../services/api";
import { useHistory } from "react-router-dom";
import "../styles/pages/gabarito.css";
import "../styles/components/modal.css";
import cicle from "../styles/icons/circle.svg";
import correct from "../styles/icons/correct.svg";

export default function Gabarito() {
    const history = useHistory();
    const [data, setData] = useState({})

    useEffect(() => {
        api.get("prova/gabarito").then((response) => setData(response.data.questions));
    }, [])

    function modal() {
        const modalOverlay = document.querySelector(".modal-overlay");
        const button = document.querySelector(".saveButton");

        button.addEventListener("click", () => {
            modalOverlay.classList.add("active");
            button.classList.add("hidden");
        });
    }


    return (
        <>
            <main>
                <div className="title">Gabarito</div>
                <div className="gabarito">
                    <div className="header">
                        <div>Questão</div>
                        <div>Resposta</div>
                        <div>Prova</div>
                        <div></div>
                    </div>
                    <div className="responses">

                        <div>1</div>
                        <div className="responseLetter">{data.question1 === "" ? "-" : ` Letra ${data.question1}`}</div>
                        <div>MATEMÁTICA E SUAS TECNOLOGIAS</div>
                        <div>{data.question1 === "" ?
                            <div className="noResponse">Sem resposta</div> :
                            <div className="responsed">Respondido</div>}
                        </div>

                        <div>
                            <button className="buttons" onClick={() => history.push("/prova/questao1")}>
                                {data.question1 === "" ? "Responder" : "Mudar Resposta"}
                            </button>
                        </div>


                        <div>2</div>
                        <div className="responseLetter">{data.question2 === "" ? "-" : ` Letra ${data.question2}`}</div>
                        <div>MATEMÁTICA E SUAS TECNOLOGIAS</div>
                        <div>{data.question2 === "" ?
                            <div className="noResponse">Sem resposta</div> :
                            <div className="responsed">Respondido</div>}
                        </div>
                        <div>
                            <button className="buttons" onClick={() => history.push("/prova/questao2")}>
                                {data.question2 === "" ? "Responder" : "Mudar Resposta"}
                            </button>
                        </div>


                        <div>3</div>
                        <div className="responseLetter">{data.question3 === "" ? "-" : ` Letra ${data.question3}`}</div>
                        <div>CIÊNCIAS E SUAS TECNOLOGIAS</div>
                        <div>{data.question3 === "" ?
                            <div className="noResponse">Sem resposta</div> :
                            <div className="responsed">Respondido</div>}
                        </div>
                        <div>
                            <button className="buttons" onClick={() => history.push("/prova/questao3")}>
                                {data.question3 === "" ? "Responder" : "Mudar Resposta"}
                            </button>
                        </div>

                        <div>4</div>
                        <div className="responseLetter">{data.question4 === "" ? "-" : ` Letra ${data.question4}`}</div>
                        <div>CIÊNCIAS E SUAS TECNOLOGIAS</div>
                        <div>{data.question4 === "" ?
                            <div className="noResponse">Sem resposta</div> :
                            <div className="responsed">Respondido</div>}
                        </div>

                        <div>
                            <button onClick={() => history.push("/prova/questao4")}>
                                {data.question4 === "" ? "Responder" : "Mudar Resposta"}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="save">
                    <button className="saveButton" onClick={modal} >
                        Salvar respostas
                </button>
                </div>
            </main>
            <div className="modal-overlay hidden">
                <div className="modal">
                    <img className="circle" src={cicle} alt="circle" />
                    <img className="correct" src={correct} alt="correct" />
                    <span>Respostas enviadas</span>
                    <div className="buttons">
                        <button onClick={() => {
                            localStorage.removeItem("TOKEN_KEY");
                            history.push("/");
                        }}>
                            Voltar ao menu
                    </button>
                        <button onClick={() => {
                            localStorage.removeItem("TOKEN_KEY");
                            history.push("/ranking");
                        }}>
                            Ranking
                    </button>
                    </div>
                </div>
            </div>
        </>



    )

}
