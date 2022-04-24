import Link from 'next/link';

import { useState } from 'react';

function Sobre(){
    return(
    <div>
        <h4>Sobre</h4>

       <Link href="/">
        <a>Acessar a página Inicial</a>
        <Contador />
        </Link>
        
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