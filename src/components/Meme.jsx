import React, {useState} from 'react'
import memesData from '../data/data.json'
import troll from '../assets/images/troll-face-computer.jpg'

/**
 * Challenge: Update our state to save the meme-related
 * data as an object called `meme`. It should have the
 * following 3 properties:
 * topText, bottomText, randomImage.
 *
 * The 2 text states can default to empty strings for now,
 * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
 *
 * Next, create a new state variable called `allMemeImages`
 * which will default to `memesData`, which we imported above
 *
 * Lastly, update the `getMemeImage` function and the markup
 * to reflect our newly reformed state object and array in the
 * correct way.
 */

function Meme() {
  const [allMemesImages, setAllMemesImages] = useState(memesData)

  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImg: `${troll}`,
  })

  function getMemeImg() {
    const randomNumber = Math.floor(Math.random() * allMemesImages.length)
    setMeme(allMemesImages[randomNumber].url)
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