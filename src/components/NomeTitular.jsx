import React,{ useState} from 'react';



const NomeTitular = () => {
    const [titular, setTitular] = useState('')
    const handleChangeTitular=(e)=>{
    setTitular(e.target.value)
  }
    return ( 
        <div className='nometitular'>
            <label>Nome Titular</label>
            <br />
            <input type="text" value= {titular} onChange={(e)=>handleChangeTitular(e)}/>
        </div>
     );
}
 
export default NomeTitular;