import React from 'react';
import "../../styles/components/navbar.css"

function Navbar(props) {
    return (
        <div className="navbar">
            <div>Home</div>
            <div>Questão {props.questionNumber}</div>
            <div>Prova: {props.questionType}</div>
        </div>
    )
}

export default Navbar;