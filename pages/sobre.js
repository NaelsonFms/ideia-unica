import { useState } from 'react';

function Sobre(){
    return(
    <div>
        <h4>Sobre</h4>
        <a href="/">Acessar a página Home</a>
        <Contador />
    </div>
    )
}

function Contador(){
    const [contador, setcontador] = useState(1);

    function adiconarContador(){
        setcontador(contador + 1);
    }

    return(
        <div>
            <div>{contador}</div>
            <button onClick={adiconarContador}>Adiconar</button>
        </div>
    )
}

export default Sobre