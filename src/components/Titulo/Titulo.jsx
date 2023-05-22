import React from "react";

export default function Titulo({title}) {
    const styles = {
        padding: '0 10px',
        backgroundColor: 'lightgray',
        borderRadius: '5px',
    }

    return (
        <h1 style={styles}>{title}</h1>
    )
}