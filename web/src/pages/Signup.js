import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import api from "../services/api";
import "../styles/pages/signup.css";

export default function Signup() {
    const history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function verifyEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (re.test(email)) {
            return email;
        } else {
            return alert("Email invalido");
        }
    }

    async function handleSubmit(event) {
        try {
            event.preventDefault();
            await verifyEmail(email);
            const data = {
                name: name,
                email: email
            }
            await api.post("api/signin", data)
                .then(response => localStorage.setItem("TOKEN_KEY", response.data.token));
            history.push("/prova/questao1");
        } catch (error) {
            return alert("Verificar se o email está correto.")
        }


    }

    return (
        <main>
            <div className="login">
                <form onSubmit={handleSubmit}>
                    <h2>Iniciar Simulado</h2>
                    <input type="text" name="name" placeholder="Nome" onChange={event => setName(event.target.value)} />
                    <input type="text" name="email" placeholder="E-mail" onChange={event => setEmail(event.target.value)} />
                    <button className="enter" type="submit">
                        Entrar
                    </button>
                </form>
            </div>
        </main>
    );
}

