import React from 'react';

import './Dados.css'
import NumeroCartao from './NumeroCartao';
import NomeTitular from './NomeTitular';
import Validade from './Validade';
import Cvv from './Cvv';

const Dados = () => {
    return ( 
        <div className='dados-container'>
            <NumeroCartao/>
            
            <NomeTitular />
            <br />
            <div className="val">
                <Validade/>
                
                <Cvv/>
            </div>

        </div>
     );
}
 
export default Dados;


