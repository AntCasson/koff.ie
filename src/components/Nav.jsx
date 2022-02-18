import style from "./style/nav.sass";
import confetti from "canvas-confetti";

const partyTime = () => {
  confetti.create(null, {
    resize: true,
    useWorker: true
  })({ particleCount: 200, spread: 30, origin: { y: 0.99 } });
};

export default function Nav({ showAero }) {
  function handleChange(e) {
    const name = e.target.textContent;
    name === "Cleverdripper" ? showAero(false) : showAero(true);
  }

  return (
    <header>
      <nav className='nav'>
        <h1 onClick={partyTime} className='nav__title-app'>
          Koff.ie
        </h1>
        <button onClick={handleChange} className='nav__button'>
          Aeropress
        </button>
        <button onClick={handleChange} className='nav__button'>
          Cleverdripper
        </button>
      </nav>
    </header>
  );
}
