import React from 'react';
import "../styles/pages/home.css";
import { Link } from "react-router-dom"


function Home() {
    return (
        <main>
            <div className="home">
                <div class="container">
                    <div class="card">
                        <div class="circle">
                            <h2>Signup</h2>
                        </div>
                        <div class="content">
                            <p>Signup para acessar o simulado</p>
                            <Link to="/signup">Acessar</Link>
                        </div>
                    </div>
                    <div class="card">
                        <div class="circle">
                            <h2>Ranking</h2>
                        </div>
                        <div class="content">
                            <p>Ranking</p>
                            <Link to="/ranking">Acessar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;