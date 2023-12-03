import {useState} from 'react'
import './App.css'
import {Wallet} from "./pages/Wallet/Wallet.jsx";

function App() {
    const [name, setName] = useState("kae")
    const [number, setNumber] = useState(1)

    const changeNumber = () =>{
        setNumber((prevState) => prevState + 1)
    }
    return (
        <>
            <h2>meu nome é {name}</h2>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={changeNumber}>Change state</button>
        </>
    )
}

export default App
