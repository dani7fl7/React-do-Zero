import './App.css'
import Desktop from '../src/assets/DesktopHufflepuff.png'

function App() {

  return (
    <>
      <h1>Avançando em React</h1>

      {/* Imagem em public */}
      <div>
        <img src='/lufa.png' alt='lufalufa'/>
      </div>

      {/* Imagem em assets */}
      <div>
        <img src={Desktop} alt='lufalufa'/>
      </div>

    </>
  )
}

export default App
