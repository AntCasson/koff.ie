import "./style/nav.sass";
import confetti from "canvas-confetti";
import logo from "../assets/logo.png";

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
        <img
          onClick={partyTime}
          className='logo'
          src={logo}
          alt='Koffie Companion logo'
        />
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
