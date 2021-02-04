import React from 'react';
import "../../styles/components/navbar.css"

function Navbar({questionNumber, questionType}) {
    return (
        <div className="navbar">
            <div>Home</div>
            <div>Questão {questionNumber}</div>
            <div>Prova: {questionType}</div>
        </div>
    )
}

export default Navbar;