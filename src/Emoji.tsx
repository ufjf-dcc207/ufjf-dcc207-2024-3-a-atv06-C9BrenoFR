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

    function onFeed(){
        setSituacao("happy")
    }

    function onHydrated(){
        setSituacao("sick")
    }

    function onChangeLight(){
        setSituacao("dead")
    }

    function nextState(){
        const PROX = new Map<string, string>([
            ["happy", "sick"],
            ["sick", "dead"],
            ["dead", "happy"],
        ])

        setSituacao(PROX.get(situacao) || "happy")
    }

    return (
    <div className="emoji">
        <div className="situacao">{EMOJIS.get(situacao) || "🫥"}</div>
        <div className="acoes">
            <EmojiBar emoji="💗" counter={3} />
            <EmojiBar emoji="⚡" counter={3} />
            <EmojiBar emoji="🍕" counter={3} />
            <EmojiBar emoji="💧" counter={3} />
        </div>
        <div className="acoes">
            <button onClick={onFeed}>Dar Comida</button>
            <button onClick={onHydrated}>Dar Água</button>
            <button onClick={onChangeLight}>Apagar Luz</button>
            <button onClick={nextState}>Ciclo</button>
        </div>
    </div>)
}