import React, { useState } from 'react';
import Logout from "../components/Logout";
import api from "../services/api";
import { useHistory } from "react-router-dom";
import "../styles/pages/question4.css";


export default function Question1() {
    const [answer4, setAnswer4] = useState("");
    const history = useHistory();

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const data = {
                question4: answer4
            }
            api.post("api/prova/questao4", data);
            history.push("/prova/gabarito");
        } catch (error) {
            return alert("Houve um erro ao registrar as respostas.")
        }

    }

    return (
        <main>
            <div className="pergunta4">
                <div className="enunciado">
                    <p>
                        Um gerente decidiu fazer um estudo financeiro da empresa onde trabalha analisando as receitas anuais dos três últimos anos. Tais receitas são apresentadas no quadro:
                    </p>
                </div>
                <div className="figura">
                    <div className="tabela">
                        <table>
                            <thead>
                                <tr>
                                    <th>Ano</th>
                                    <th>Receita (bilhão de reais)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>I</td>
                                    <td>2,2</td>
                                </tr>
                                <tr>
                                    <td>II</td>
                                    <td>4,2</td>
                                </tr>
                                <tr>
                                    <td>III</td>
                                    <td>7,4</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="continuacao">
                    <p>
                        Estes dados serão utilizados para projetar a receita mínima esperada para o ano atual (ano IV), pois a receita esperada para o ano IV
                        é obtida em função das variações das receitas anuais anteriores, utilizando a seguinte regra:
                        a variação do ano IV para o ano III será igual à variação do ano III para o II adicionada
                        à média aritmética entre essa variação e a variação do ano II para o I.
                    </p>
                </div>
                <div className="form">
                    <p>O valor da receita mínima esperada, em bilhão de reais, será de:</p>
                    <form onSubmit={handleSubmit}>
                        <div className="options">
                            <div>
                                <label>A
                                    <input type="radio" name="question4" value="a" onClick={event => setAnswer4(event.target.value)} />
                                </label>
                                <span>10</span>
                            </div>
                            <div>
                                <label>B
                                    <input type="radio" name="question4" value="b" onClick={event => setAnswer4(event.target.value)} />
                                </label>
                                <span>22</span>
                            </div>
                            <div>
                                <label>C
                                    <input type="radio" name="question4" value="c" onClick={event => setAnswer4(event.target.value)} />
                                </label>
                                <span>13,2</span>
                            </div>
                            <div>
                                <label>D
                                    <input type="radio" name="question4" value="d" onClick={event => setAnswer4(event.target.value)} />
                                </label>
                                <span>0</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Logout />
        </main>
    )
}