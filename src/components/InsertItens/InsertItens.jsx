import React from "react";
import { useState } from "react";
import BotaoAdicionar from "../BotaoAdicionar/BotaoAdicionar";

export default function InsertItens() {
    const stylesDivList = {
        margin: '10px 0',
        padding: '5px 10px',
        fontSize: '1.2rem',
        // border: '1px solid black',
        // borderRadius: '5px',
        minHeight: '10rem',
    }
    
    const stylesDiv = {
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        backgroundColor: '#e5e5e6',
        borderRadius: '5px',
    }
    
    const stylesInputText = {
        outline: 'none',
        padding: '0 10px',
        height: '2rem',
        borderRadius: '5px',
        border: '1px solid gray',
        marginBottom: '0.5rem',
    }

    const [valorInput, setValorInput] = useState('');

    return (
        <div>
            <div id="itensLista" style={stylesDivList}>
                <li>{valorInput}</li>
            </div>
            <div style={stylesDiv}>
                <label>Adicionar Novo Item na Lista:</label>
                <input
                    type="text" 
                    id="userInput"
                    value={valorInput}
                    style={stylesInputText}
                    onChange={(event) => setValorInput(event.target.value)}
                />
                <BotaoAdicionar />
            </div>
        </div>
    )
}