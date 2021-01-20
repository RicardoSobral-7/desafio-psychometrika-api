import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import QuestionsButtons from "../components/QuestionsButtons";
import Logout from "../components/Logout";
import api from "../services/api";
import { useHistory } from "react-router-dom";
import "../styles/pages/question2.css";


export default function Question2() {
    const [answer2, setAnswer2] = useState("");
    const history = useHistory();
    const sepStyle = {
        alignSelf: "start"
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const data = {
                question2: answer2
            }
            api.post("api/prova/questao2", data);
            history.push("/prova/questao3");
        } catch (error) {
            return alert("Houve um erro ao registrar as respostas.")
        }
    }

    return (
        <main>
            <Navbar questionNumber={2} questionType={"Matemática e suas tecnologias"} />


            <div className="pergunta2">
                <div className="enunciado">
                    <p>
                        Um aluno registrou as notas bimestrais de algumas de suas disciplinas numa tabela. Ele observou que as entradas numéricas da tabela formavam uma matriz 4x4,
                        e que poderia calcular as médias anuais dessas disciplinas usando produto de matrizes. Todas as provas possuíam o mesmo peso, e a tabela que ele conseguiu é mostrada a seguir.
                    </p>
                </div>
                <div className="figura">
                    <div className="tabela">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>1º bimestre</th>
                                    <th>2º bimestre</th>
                                    <th>3º bimestre</th>
                                    <th>4º bimestre</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Matemática</td>
                                    <td>5,9</td>
                                    <td>6,2</td>
                                    <td>4,5</td>
                                    <td>5,5</td>
                                </tr>
                                <tr>
                                    <td>Português</td>
                                    <td>6,6</td>
                                    <td>7,1</td>
                                    <td>6,5</td>
                                    <td>8,4</td>
                                </tr>
                                <tr>
                                    <td>Geografia</td>
                                    <td>8,6</td>
                                    <td>6,8</td>
                                    <td>7,8</td>
                                    <td>9,0</td>
                                </tr>
                                <tr>
                                    <td>História</td>
                                    <td>6,2</td>
                                    <td>5,6</td>
                                    <td>5,9</td>
                                    <td>7,7</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="form">
                    <p>Para obter essas médias, ele multiplicou a matriz obtida a partir da tabela por</p>
                    <form onSubmit={handleSubmit}>
                        <div className="options">
                            <div>
                                <label>A
                                    <input type="radio" name="question2" value="a" onClick={event => setAnswer2(event.target.value)} />
                                </label>
                                <div className="matriz">
                                    <span>[</span>
                                    <div>
                                        <p>1</p>
                                        <p>1</p>
                                        <p>1</p>
                                        <p>1</p>
                                        <p style={sepStyle}>_</p>
                                        <p style={sepStyle}>_</p>
                                        <p style={sepStyle}>_</p>
                                        <p style={sepStyle}>_</p>
                                        <p>2</p>
                                        <p>2</p>
                                        <p>2</p>
                                        <p>2</p>
                                    </div>
                                    <span>]</span>
                                </div>
                            </div>
                            <div>
                                <label>D
                                    <input type="radio" name="question2" value="d" onClick={event => setAnswer2(event.target.value)} />
                                </label>
                                <div className="matriz">
                                    <span className="r">[</span>
                                    <div className="d">
                                        <div className="fracao">
                                            <p>1</p>
                                            <p style={sepStyle}>_</p>
                                            <p>2</p>
                                        </div>
                                        <div className="fracao">
                                            <p>1</p>
                                            <p style={sepStyle}>_</p>
                                            <p>2</p>
                                        </div>
                                        <div className="fracao">
                                            <p>1</p>
                                            <p style={sepStyle}>_</p>
                                            <p>2</p>
                                        </div>
                                        <div className="fracao">
                                            <p>1</p>
                                            <p style={sepStyle}>_</p>
                                            <p>2</p>
                                        </div>
                                    </div>
                                    <span className="r">]</span>
                                </div>
                            </div>
                            <div>
                                <label>B
                                    <input type="radio" name="question2" value="b" onClick={event => setAnswer2(event.target.value)} />
                                </label>
                                <div className="matriz">
                                    <span>[</span>
                                    <div>
                                        <p>1</p>
                                        <p>1</p>
                                        <p>1</p>
                                        <p>1</p>
                                        <p style={sepStyle}>_</p>
                                        <p style={sepStyle}>_</p>
                                        <p style={sepStyle}>_</p>
                                        <p style={sepStyle}>_</p>
                                        <p>4</p>
                                        <p>4</p>
                                        <p>4</p>
                                        <p>4</p>
                                    </div>
                                    <span>]</span>
                                </div>
                            </div>
                            <div>
                                <label>E
                                    <input type="radio" name="question2" value="d" onClick={event => setAnswer2(event.target.value)} />
                                </label>
                                <div className="matriz">
                                    <span className="r">[</span>
                                    <div className="d">
                                        <div className="fracao">
                                            <p>1</p>
                                            <p style={sepStyle}>_</p>
                                            <p>4</p>
                                        </div>
                                        <div className="fracao">
                                            <p>1</p>
                                            <p style={sepStyle}>_</p>
                                            <p>4</p>
                                        </div>
                                        <div className="fracao">
                                            <p>1</p>
                                            <p style={sepStyle}>_</p>
                                            <p>4</p>
                                        </div>
                                        <div className="fracao">
                                            <p>1</p>
                                            <p style={sepStyle}>_</p>
                                            <p>4</p>
                                        </div>

                                    </div>
                                    <span className="r">]</span>
                                </div>
                            </div>
                            <div>
                                <label>C
                                    <input type="radio" name="question2" value="c" onClick={event => setAnswer2(event.target.value)} />
                                </label>
                                <div className="matriz">
                                    <span>[</span>
                                    <div className="one">
                                        <p>1</p>
                                        <p>1</p>
                                        <p>1</p>
                                        <p>1</p>
                                    </div>
                                    <span>]</span>
                                </div>
                            </div>
                        </div>
                        <QuestionsButtons />
                    </form>
                </div>
            </div>
            <Logout />
        </main>

    )
}