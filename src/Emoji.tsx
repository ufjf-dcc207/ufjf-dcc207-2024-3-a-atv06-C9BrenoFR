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

    function onFeed(){
        setComida(Math.min(comida + 1, 5))
    }

    function onDrink(){
        setAgua(Math.min(agua + 1, 5))
    }

    function onChangeLight(){}

    function nextState(){
        setComida((prevComida) => {
            if(prevComida > 0)
                return prevComida - 1
            setSaude((prevSaude) => Math.max(0, prevSaude - 1))
            return prevComida
        })
        setAgua((prevAgua) => {
            if(prevAgua > 0)
                return prevAgua - 1
            setSaude((prevSaude) => Math.max(0, prevSaude - 1))
            return prevAgua
        })
        setEnergia((prevEnergia) => {
            if(prevEnergia > 0)
                return prevEnergia - 1
            setSaude((prevSaude) => Math.max(0, prevSaude - 1))
            return prevEnergia
        })
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
            <button onClick={onChangeLight}>Apagar Luz</button>
            <button onClick={nextState}>Ciclo</button>
        </div>
    </div>)
}