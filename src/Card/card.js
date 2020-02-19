import React from 'react';
import './card.css';

function Card({ props }) {
    const { imagem, nome, a, } = props;
    return (
        <li className="card">
            <img src="" alt="" />
            <h1></h1>
        </li>
    );
}

export default Card;

/* <li key={g.nome}>
    <a href={g.gUrl}>
        <img src={g.imgUrl} />
        <span>{g.nome}</span>
    </a>
</li> */