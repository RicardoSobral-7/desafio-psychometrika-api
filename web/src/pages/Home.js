import React from 'react';
import "../styles/pages/home.css";
import { Link } from "react-router-dom"


function Home() {
    return (
        <main>
            <div className="home">
                <div className="container">
                    <div className="card">
                        <div className="circle">
                            <h2>Signup</h2>
                        </div>
                        <div className="content">
                            <p>Signup para acessar o simulado</p>
                            <Link to="/signup">Acessar</Link>
                        </div>
                    </div>
                    <div className="card">
                        <div className="circle">
                            <h2>Ranking</h2>
                        </div>
                        <div className="content">
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