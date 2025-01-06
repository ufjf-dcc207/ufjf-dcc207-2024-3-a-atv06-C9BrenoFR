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
        setSituacao("happy")
    }

    function toSick(){
        setSituacao("sick")
    }

    function toDead(){
        setSituacao("dead")
    }

    return (
    <div className="emoji">
        <div className="situacao">{EMOJIS.get(situacao) || "🫥"}</div>
        <div className="acoes">
            <button onClick={toHappy}>Vivo</button>
            <button onClick={toSick}>Doente</button>
            <button onClick={toDead}>Morto</button>
        </div>
    </div>)
}