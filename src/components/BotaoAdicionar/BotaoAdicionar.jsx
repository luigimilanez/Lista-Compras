import React from "react";

export default function BotaoAdicionar() {
    const styles = {
        cursor: 'pointer',
        padding: '10px',
        width: '6rem',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
    };

    return (
        <button style={styles}>Adicionar</button>
    )
}