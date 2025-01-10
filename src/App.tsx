import './App.css'
import Emoji from './Emoji'
import EmojiBar from './EmojiBar'

function App() {

  return (
    <div className='app'>
    <Emoji/>
    <div className='atributos'>
      <EmojiBar emoji="💗"/>
      <EmojiBar emoji="🍕"/>
      <EmojiBar emoji="💧"/>
      <EmojiBar emoji="⚡"/>
    </div>
    </div>
  )
}

export default App
