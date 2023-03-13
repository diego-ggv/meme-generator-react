import {useState} from 'react'
import memesData from '../data/data.json'
import troll from '../assets/images/troll-face-computer.jpg'

function Meme() {
  const [allMemesImages, setAllMemesImages] = useState(memesData.data.memes)

  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImg: `${troll}`,
  })

  function getMemeImg() {
    const randomNumber = Math.floor(Math.random() * allMemesImages.length)
    const randomMeme = allMemesImages[randomNumber].url
    setMeme(prevState => ({
      ...prevState, 
      randomImg: randomMeme
    }))
  }

  return (
      <main>
        <div className="container">
          <input className="input"
                 placeholder="Insert top text"/>
          <input className="input"
                 placeholder="Insert bottom text"/>

          <button onClick={getMemeImg} className="button">
            Get a new meme image
          </button>
        </div>

        <img className="meme" src={meme.randomImg} alt="Meme"/>

      </main>
  )
}

export default Meme