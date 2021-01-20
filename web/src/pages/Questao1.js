import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import QuestionsButtons from "../components/QuestionsButtons";
import Logout from "../components/Logout";
import api from "../services/api";
import { useHistory } from "react-router-dom";
import "../styles/pages/question1.css";


export default function Question1() {
    const [answer1, setAnswer1] = useState("");
    const history = useHistory();
    
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const data = {
                question1: answer1
            }
            api.post("api/prova/questao1", data);
            history.push("/prova/questao2");
        } catch (error) {
            return alert("Houve um erro ao registrar as respostas.")
        }
    }

    return (
        <main>
            <Navbar questionNumber={1} questionType={"Matemática e suas tecnologias"}/>
            <div className="pergunta1">
                <div className="enunciado">
                    <p>
                        A Transferência Eletrônica Disponível (TED) é uma transação financeira de
                        valores entre diferentes bancos. Um economista decide
                        analisar os valores enviados por meio de TEDs entre cinco bancos (1,2, 3, 4 e 5)
                        durante um mês. Para isso, ele dispõe esses valores em uma matriz A = [aij], em
                        que 1 ≤ i ≤ 5 e 1 ≤ j ≤ 5, e o elemento aij corresponde ao total proveniente das operações
                        feitas via TED, em milhão de real, transferidos do banco i para o banco j durante o mês.
                        Observe que os elementos aij = 0, uma vez que TED é uma transferência entre bancos distintos.
                        Esta é a matriz obtida para essa análise:
                    </p>
                </div>
                <div className="figura">
                    <div className="matriz">
                        <span>A = </span>
                        <span>[</span>
                        <div>
                            <p>02022</p>
                            <p>00210</p>
                            <p>12011</p>
                            <p>02200</p>
                            <p>30110</p>
                        </div>
                        <span>]</span>
                    </div>
                </div>
                <div className="form">
                    <p>Com base nessas informações, o banco que transferiu a maior quantia via TED é o banco</p>
                    <form onSubmit={handleSubmit}>
                        <div className="options">
                            <div>
                                <label>A
                                    <input type="radio" name="question1" value="a" onClick={event => setAnswer1(event.target.value)} />
                                </label>
                                <span>1</span>
                            </div>
                            <div>
                                <label>B
                                    <input type="radio" name="question1" value="b" onClick={event => setAnswer1(event.target.value)} />
                                </label>
                                <span>2</span>
                            </div>
                            <div>
                                <label>C
                                    <input type="radio" name="question1" value="c" onClick={event => setAnswer1(event.target.value)} />
                                </label>
                                <span>3</span>
                            </div>
                            <div>
                                <label>D
                                    <input type="radio" name="question1" value="d" onClick={event => setAnswer1(event.target.value)} />
                                </label>
                                <span>4</span>
                            </div>
                        </div>
                        <QuestionsButtons/>
                    </form>
                </div>
            </div>
            <Logout/>
        </main>

    )
}