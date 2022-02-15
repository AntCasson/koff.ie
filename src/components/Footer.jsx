import footer from "./style/footer.sass";

export default function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__text'>
        Made with ☕ by{" "}
        <a className='footer__text--link' href='https://www.antcasson.eu/'>
          AntCasson
        </a>
      </p>
    </footer>
  );
}
