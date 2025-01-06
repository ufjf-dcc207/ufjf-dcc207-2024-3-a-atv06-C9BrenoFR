import "./Emoji.css"

const EMOJIS = new Map<string, string>(
    [
        ["happy", "😊"],
        ["sick", "🤢"],
        ["dead", "😵"],
    ]
);

export default function Emoji(){
    let situacao = "dead";
    return <div className="emoji">{EMOJIS.get(situacao) || "🫥"}</div>
}