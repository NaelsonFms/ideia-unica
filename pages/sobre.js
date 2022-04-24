import { useState } from 'react';

function Sobre(){
    return(
    <div>
        <h4>Pagina Inicial</h4>
        <a href="/Home">Acessar a página Sobre</a>
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