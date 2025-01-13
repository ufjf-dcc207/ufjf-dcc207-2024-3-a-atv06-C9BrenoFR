import { useState } from "react";
import "./Emoji.css"
import EmojiBar from "./EmojiBar";

const EMOJIS = new Map<string, string>(
    [
        ["happy", "😊"],
        ["sick", "🤢"],
        ["dead", "😵"],
    ]
);

export default function Emoji(){
    const [situacao, setSituacao] = useState("happy")
    const [saude, setSaude] = useState(3)
    const [energia, setEnergia] = useState(3)
    const [comida, setComida] = useState(3)
    const [agua, setAgua] = useState(3)

    function onFeed(){
        setComida((prevValue) => prevValue === 5 ? prevValue : prevValue+1)
    }

    function onDrink(){
        setAgua((prevValue) => prevValue === 5 ? prevValue : prevValue+1)
    }

    function onChangeLight(){}

    function nextState(){}

    return (
    <div className="emoji">
        <div className="situacao">{EMOJIS.get(situacao) || "🫥"}</div>
        <div className="acoes">
            <EmojiBar emoji="💗" counter={saude} />
            <EmojiBar emoji="⚡" counter={energia} />
            <EmojiBar emoji="🍕" counter={comida} />
            <EmojiBar emoji="💧" counter={agua} />
        </div>
        <div className="acoes">
            <button onClick={onFeed}>Dar Comida</button>
            <button onClick={onDrink}>Dar Água</button>
            <button onClick={onChangeLight}>Apagar Luz</button>
            <button onClick={nextState}>Ciclo</button>
        </div>
    </div>)
}