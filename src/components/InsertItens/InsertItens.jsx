import React, { useState, useRef } from "react";
import BotaoAdicionar from "../BotaoAdicionar/BotaoAdicionar";

export default function InsertItens() {
    const stylesDivList = {
        margin: '10px 0',
        padding: '5px 5px 5px 25px',
        fontSize: '1.2rem',
        height: '10rem',
        overflow: 'auto',
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

    const divListRef = useRef()

    const [itens, setItens] = useState({
        itensLista: ''
    });

    const [compras, setCompras] = useState([]);

    return (
        <div>
            <div style={stylesDivList} ref={divListRef}>
                <ul>
                    {compras.map((compra) => (
                        <li>{compra.itensLista}</li>
                    ))}
                </ul>
            </div>
            <form 
                action=""
                method="post"
                onSubmit={(event) => {
                    if (itens.itensLista != '') {
                        event.preventDefault();
                        setCompras([...compras, itens]);
                        setItens({...itens, itensLista: ''})
                        divListRef.current.scrollTop = divListRef.current.scrollHeight
                    } else {
                        alert('É necessário digitar algo')
                        event.preventDefault()
                    }
                }}>


                <div style={stylesDiv}>
                    <label>Adicionar Novo Item na Lista:</label>
                    <input
                        type="text"
                        id="teste"
                        value={itens.itensLista}
                        style={stylesInputText}
                        onChange={(event) => setItens({...itens, itensLista: event.target.value})}
                    />
                    <BotaoAdicionar />
                </div>
            </form>
        </div>
    )
}