import * as React from 'react';
import { useState } from "react";
const Challenge  = () => {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [resultado, setResultado] = React.useState(0);

    function handleClick(event: React.MouseEvent<HTMLElement>) {
        const soma = n1 + n2;
        setResultado(soma);
        console.log('Resultado:', soma);
        event.preventDefault();
      }
    
    return (
        <>
        <form>
            <div className='col'>

                <div className='row'>
                <p>Soma dos números:</p>
                </div>

                <div className='row'>
                <input 
                    placeholder='Insira um número'
                    onChange={(event)=> setN1(Number(event.target.value))}
                />
                </div>

                <div className='row'>
                    <p>+</p>
                </div>

                <div className='row'>
                <input 
                    placeholder='Insira um número'
                    onChange={(event)=> setN2(Number(event.target.value))}
                />
                </div>

                <div className='row'>
                <button onClick={handleClick}>Somar</button>
                </div>

                <div className='row'>
                    <p>Resultado: {resultado}</p>
                </div>

            </div>
        </form>
        </>
    )
}

export default Challenge;