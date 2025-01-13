import "./EmojiBar.css"

interface EmojiBarProps{
    emoji: string,
    counter: number
}

export default function EmojiBar({emoji, counter}: EmojiBarProps){

    return(
        <div className="emojiBar">
            <div className="bar">
                <div className="barraAtivo">{emoji.repeat(counter)}</div>
                <div className="barraInativo">{emoji.repeat(5 - counter)}</div>
            </div>
        </div>
    )
}