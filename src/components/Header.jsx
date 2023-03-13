
function Header(props) {
  return (
      <header>
        <img className="header--troll" src={props.img} alt="troll face"/>
        <h1 className="header--title">Meme Generator</h1>
        <h3 className="header--course">React Course - Project 3</h3>
      </header>
  )
}

export default Header