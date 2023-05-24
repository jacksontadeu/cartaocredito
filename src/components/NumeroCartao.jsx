import React from 'react';


import './NumeroCartao.css'
const NumeroCartao = () => {
    return (
        <div className='numcartao'>
            <label htmlFor="Número do Cartão">Número do Cartão</label>
            <br />
            <input type="text" />
        </div>
    );
}

export default NumeroCartao;