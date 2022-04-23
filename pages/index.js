import { useState } from 'react';

function Home(){
    return(
    <div>
        <h4>homelandia</h4>
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