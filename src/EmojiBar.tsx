import { useState } from "react"
import "./EmojiBar.css"

interface EmojiBarProps{
    emoji: string,
}

export default function EmojiBar({emoji}: EmojiBarProps){
    const [counter, setCounter] = useState(5)

    function changeCounter(){
        setCounter((prevCounter) => prevCounter === 5 ? 0 : prevCounter+1)
    }

    return(
        <div className="emojiBar">
            <div className="bar">
                <div className="barraAtivo">{emoji.repeat(counter)}</div>
                <div className="barraInativo">{emoji.repeat(5 - counter)}</div>
            </div>
            <button onClick={changeCounter}>+</button>
        </div>
    )
}