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
    const [saude, setSaude] = useState(5)
    const [energia, setEnergia] = useState(3)
    const [comida, setComida] = useState(3)
    const [agua, setAgua] = useState(3)
    const [luz, setLuz] = useState(true)

    function onFeed(){
        setComida(Math.min(comida + 1, 5))
    }

    function onDrink(){
        setAgua(Math.min(agua + 1, 5))
    }

    function onChangeLight(){
        setLuz(!luz)
    }

    function nextState(){
        setComida(Math.max(0, comida - 1))
        setAgua(Math.max(0, agua - 1))
        if(luz)
            setEnergia(Math.max(0, energia - 1))
        else
            setEnergia(Math.min(energia + 1, 5))

        if(comida === 0)
            setSaude(s => Math.max(0, s-1))
        if(agua === 0)
            setSaude(s => Math.max(0, s-1))
        if(energia === 0)
            setSaude(s => Math.max(0, s-1))

        
    }

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
            <button onClick={onChangeLight}>{luz ? "Apagar" : "Ascender"} Luz</button>
            <button onClick={nextState}>Ciclo</button>
        </div>
    </div>)
}