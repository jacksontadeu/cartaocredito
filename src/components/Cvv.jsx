import React from 'react';


import './Cvv.css'
const Cvv = () => {
    return ( 
        <div className='cvv'>
            <label htmlFor="">CVV</label>
            <br />
            <input type="text" maxLength={3}/>
        </div>
    );
}
 
export default Cvv;