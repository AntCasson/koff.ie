import style from './style/nav.sass'
import confetti from 'canvas-confetti'

const partyTime = () => {
  confetti.create(null, {
    resize: true,
    useWorker: true,
  }) 
    ({ particleCount: 25,
        spread: 30, 
        origin: { y: 0.8} 
        });
}


export default function Nav({showAero}) {

  function handleChange() {
    showAero(prev => !prev)
  }

  return (
    <nav className="nav">
      <h1 onClick={partyTime} className="nav__title-app">Koff.ie</h1>
      <button onClick={handleChange} className="nav__button">Aeropress</button>
      <button onClick={handleChange} className="nav__button">Cleverdripper</button>
    </nav>
  )
  
};
