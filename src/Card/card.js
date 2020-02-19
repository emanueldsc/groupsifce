import React from 'react';
import './card.css';

function Card(props) {
    const { imagem, nome, a } = props;
    return (
        <a href={a} target="_blank">
            <div className="card">
                <img className="imgGroup" src={imagem} alt={nome} />
                <h1 className="context">{nome}</h1>
            </div>
        </a>
    );
}

export default Card;
