import { useState } from "react";
import "./Emoji.css"

const EMOJIS = new Map<string, string>(
    [
        ["happy", "😊"],
        ["sick", "🤢"],
        ["dead", "😵"],
    ]
);

export default function Emoji(){
    const [situacao, setSituacao] = useState("happy")

    function toHappy(){
        console.log(`Antes: ${situacao}`)
        setSituacao("happy")
        console.log(`Depois: ${situacao}`)
    }

    function toDead(){
        console.log(`Antes: ${situacao}`)
        setSituacao("dead")
        console.log(`Depois: ${situacao}`)
    }
    return (
    <div className="emoji">
        <div className="situacao">{EMOJIS.get(situacao) || "🫥"}</div>
        <div className="acoes">
            <button onClick={toHappy}>Vivo</button>
            <button onClick={toDead}>Morto</button>
        </div>
    </div>)
}