import { useState } from "react"

export default function Deputados() {
    const[deputados, setDeputados] = useState([])
    
    useEffect {() => {
        apiDeputados.get('deputados').then(resultado => {
            setDeputados(resultado.data.dados);
        })
    }}
}