import { useState } from 'react'
import Inicio from './screens/Inicio'
import Detalhes from './screens/Detalhes'

export default function App() {

    const [tela, setTela] = useState('inicio')
    const [resultado, setResultado] = useState(null)

    function mostrarDetalhes(dados) {
        setResultado(dados)
        setTela('detalhes')
    }

    function voltar() {
        setTela('inicio')
    }

    return (
        <>
            {tela === 'inicio' ? (
                <Inicio mostrarDetalhes={mostrarDetalhes} />
            ) : (
                <Detalhes resultado={resultado} voltar={voltar} />
            )}
        </>
    )
}