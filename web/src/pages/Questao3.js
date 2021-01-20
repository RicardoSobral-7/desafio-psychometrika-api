import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import QuestionsButtons from "../components/QuestionsButtons";
import Logout from "../components/Logout";
import api from "../services/api";
import { useHistory } from "react-router-dom";
import "../styles/pages/question3.css";
import maleSymbol from "../styles/icons/male-symbol-svgrepo-com.svg";
import femaleSymbol from "../styles/icons/female-symbol-svgrepo-com.svg";


export default function Question3() {
    const [answer3, setAnswer3] = useState("");
    const history = useHistory();
    const tableBackground = {
        backgroundColor: "black"
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const data = {
                question3: answer3
            }
            api.post("api/prova/questao3", data);
            history.push("/prova/questao4");
        } catch (error) {
            return alert("Houve um erro ao registrar as respostas.")
        }

    }

    return (
        <main>
            <Navbar questionNumber={3} questionType={"Ciências da natureza e suas tecnologias"} />
            <div className="pergunta3">
                <div className="enunciado">
                    <p>
                        Um pesquisador observou, em uma árvore,
                        um ninho de uma espécie de falcão.
                        Apenas um filhote apresentava uma coloração típica de penas de ambos os pais.
                        ram coletadas amostras de DNA dos pais e filhotes para
                        caracterização genética dos alelos responsáveis pela coloração das penas.
                        O perfil de bandas obtido para cada indivíduo do ninho para os lócus 1 e 2,
                        onde se localizam os genes dessa característica, está representado na figura.
                    </p>
                </div>
                <div className="figura">
                    <div className="tabela">
                        <p>Padões de bandas em gel das moleculas de DNA dos individuos</p>
                        <div className="title">
                            <span>Pais</span>
                            <span>Filhos</span>
                        </div>
                        <div className="locus">
                            <p>Lócus 1</p>
                            <p>Lócus 2</p>
                        </div>
                        <table>                       
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td><img src={maleSymbol} alt="maleSymbol"/></td>
                                    <td><img src={femaleSymbol} alt="femaleSymbol"/></td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>Alelo A</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Alelo B</td>
                                    <td style={tableBackground}> </td>
                                    <td></td>
                                    <td style={tableBackground}> </td>
                                    <td style={tableBackground}> </td>
                                    <td style={tableBackground}> </td>
                                    <td style={tableBackground}> </td>
                                    <td style={tableBackground}> </td>
                                </tr>
                                <tr>
                                    <td>Alelo C</td>
                                    <td> </td>
                                    <td style={tableBackground}></td>
                                    <td style={tableBackground}> </td>
                                    <td></td>
                                    <td style={tableBackground}> </td>
                                    <td></td>
                                    <td style={tableBackground}> </td>
                                </tr>
                                <tr>
                                    <td>Alelo D</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td style={tableBackground}></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="title">
                            <span>Pais</span>
                            <span>Filhos</span>
                        </div>
                        <table>                       
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td><img src={maleSymbol} alt="maleSymbol"/></td>
                                    <td><img src={femaleSymbol} alt="femaleSymbol"/></td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>Alelo E</td>
                                    <td style={tableBackground}></td>
                                    <td></td>
                                    <td style={tableBackground}></td>
                                    <td style={tableBackground}></td>
                                    <td></td>
                                    <td></td>
                                    <td style={tableBackground}></td>
                                </tr>
                                <tr>
                                    <td>Alelo F</td>
                                    <td> </td>
                                    <td></td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                </tr>
                                <tr>
                                    <td>Alelo G</td>
                                    <td style={tableBackground}> </td>
                                    <td style={tableBackground}></td>
                                    <td style={tableBackground}> </td>
                                    <td></td>
                                    <td style={tableBackground}> </td>
                                    <td style={tableBackground}> </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Alelo H</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td style={tableBackground}></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="form">
                    <p>Dos filhotes, qual apresenta a coloração típica de penas dos pais?</p>
                    <form onSubmit={handleSubmit}>
                        <div className="options">
                            <div>
                                <label>A
                                    <input type="radio" name="question3" value="a" onClick={event => setAnswer3(event.target.value)} />
                                </label>
                                <span>1</span>
                            </div>
                            <div>
                                <label>B
                                    <input type="radio" name="question3" value="b" onClick={event => setAnswer3(event.target.value)} />
                                </label>
                                <span>2</span>
                            </div>
                            <div>
                                <label>C
                                    <input type="radio" name="question3" value="c" onClick={event => setAnswer3(event.target.value)} />
                                </label>
                                <span>3</span>
                            </div>
                            <div>
                                <label>D
                                    <input type="radio" name="question3" value="d" onClick={event => setAnswer3(event.target.value)} />
                                </label>
                                <span>4</span>
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