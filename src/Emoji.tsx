import { useState } from "react";
import "./Emoji.css"
import EmojiBar from "./EmojiBar";

const EMOJIS = new Map<string, string>(
    [
        ["happy", "😊"],
        ["sick", "🤢"],
        ["sleepy", "🥱"],
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

    function changeFace(s = saude, e = energia){
        if(s === 0)
            setSituacao("dead")
        else if(s <= 2)
            setSituacao("sick")
        else if(e <= 2)
            setSituacao("sleepy")
        else
            setSituacao("happy")
    }

    function onFeed(){
        if(situacao !== "dead")
            setComida(Math.min(comida + 1, 5))
    }

    function onDrink(){
        if(situacao !== "dead")
            setAgua(Math.min(agua + 1, 5))
    }

    function onChangeLight(){
        if(situacao !== "dead")
            setLuz(!luz)
    }

    function nextState(){
        if(situacao !== "dead"){
            let e = energia
            let c = comida
            let a = agua
            let s = saude

            if(c === 0){
                s = Math.max(0, s-1)
            }
            if(a === 0){
                s = Math.max(0, s-1)
            }
            if(e === 0){
                s = Math.max(0, s-1)
            }

            if(luz){
                e = Math.max(0, e - 1)
            }
            else{
                e = Math.min(e + 1, 5)
                if(c > 0 && a > 0){
                    s = Math.min(s + 1, 5)
                }
            }

            c = Math.max(0, c - 1)
            a = Math.max(0, a - 1)

            setAgua(a)
            setComida(c)
            setEnergia(e)
            setSaude(s)

            changeFace(s, e)
        }
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