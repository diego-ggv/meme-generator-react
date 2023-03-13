import Header from './components/Header.jsx'
import Meme from './components/Meme.jsx'
import trollFace from './assets/images/troll-face.png'
import './App.css'


function App() {
  
  
  return (
    <div className="App">
      <Header img={trollFace}/>
      <section>
        <Meme />
      </section>
      
    </div>
  )
}

export default App
