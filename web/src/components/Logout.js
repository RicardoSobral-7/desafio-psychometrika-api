import React from 'react';
import "../styles/components/logout.css";
import { useHistory } from "react-router-dom";

function Logout () {
    const history = useHistory();
    function logoutFunction () {
        localStorage.removeItem("TOKEN_KEY");
        history.push("/")
    }

    return (
    <div className="logout" onClick={logoutFunction}>
        <p>Sair</p>
    </div>
    )
}

export default Logout;