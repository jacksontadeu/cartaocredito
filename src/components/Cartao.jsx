import React from 'react';

import './Cartao.css'
import NumeroCartao from './NumeroCartao';
import NomeTitular from './NomeTitular';
import Cvv from './Cvv';
import Validade from './Validade';
import Dados from './Dados';

const Cartao = () => {
    

    return ( 
        <div className='cartao-container'>
            <NumeroCartao />
            <br />
            <NomeTitular />
            <br />
            <div className="validadecvv-container">
            <Validade />
            <br />
             <Cvv />
            </div>
            <div className="dados">
                <Dados />
            </div>
            

        </div>
     );
}
 
export default Cartao;