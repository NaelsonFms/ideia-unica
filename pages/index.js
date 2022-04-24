import Link from 'next/link';

import { useState } from 'react';

function Home(){
    return(
    <div>
        <h4>Pagina Inicial 8</h4>

       <Link href="/sobre">
        <a>Acessar a página Sobre</a>
        
        </Link>
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

export default Home