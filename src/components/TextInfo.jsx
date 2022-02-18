import photoAeropress from "../assets/aeropress-image.jpg";
import photoClever from "../assets/clever-image.jpg";
import "./style/textInfo.sass";

export default function Textinfo({ showAeropress }) {
  return (
    <section className='section__brewer'>
      <div className='section__text--wrapper'>
        <h2 className='section__title'>
          {showAeropress ? "Aeropress" : "Cleverdripper"}
        </h2>
        {showAeropress ? (
          <p className='section__text'>
            I made this site to help my morning coffee routine. Since I like and
            follow sir Hoffman but do not want to watch his instruction every
            morning. The best way to use this app is to{" "}
            <a href='https://www.youtube.com/watch?v=j6VlT_jUVPc&ab_channel=JamesHoffmann'>
              watch the video James made
            </a>{" "}
            and use this app like a companion. Like James suggest you can
            increase your strength of cup size. I stopped at 245gr of water
            cause the brewer isn't big enough.
            <br />
            <br />I enjoy using the{" "}
            <a href='https://fellowproducts.com/products/prismo'>
              Fellow Prismo
            </a>{" "}
            with my Aeropress because it makes it even easier. No rushing of
            hurrying trying to put the plunger on and making a messy kitchen.
          </p>
        ) : (
          <p>
            "☕"THIS SITE IS STILL UNDER CONSTRUCTION "☕"
            <br />
            <br />
          </p>
        )}
      </div>
      {!showAeropress && window.innerWidth > 1000 && (
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/RpOdennxP24'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullscreen
        ></iframe>
      )}
      {showAeropress && (
        <img
          className='section__photo'
          src={showAeropress ? photoAeropress : photoClever}
          alt='Aeropress being used too far from a cup but looks cool'
        />
      )}
    </section>
  );
}
