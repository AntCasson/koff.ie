import "./style/textInfo.sass";
import YoutubeIframe from "./YouTubeIframe";

export default function Textinfo({ showAeropress }) {
  const videoArr = [
    "https://www.youtube.com/embed/j6VlT_jUVPc",
    "https://www.youtube.com/embed/RpOdennxP24"
  ];

  return (
    <section className='section__brewer'>
      <div className='section__text--wrapper'>
        <h1 className='section__title'>
          {showAeropress ? "Aeropress" : "Cleverdripper"}
        </h1>
        {showAeropress ? (
          <>
            <p className='section__text'>
              The best way to use this app is to watch the video James Hoffman
              made and use this app as a companion.
              <br />
              <br />
              The default values,{" "}
              <span className='accent'>
                11 grams of coffee and 200gr of water
              </span>
              , are taken from the video. The maximum water weight is 245gr of
              water cause the brewer gets unpleasant to use if you add more
              water.
              <br />
              <br /> I enjoy using the{" "}
              <a href='https://fellowproducts.com/products/prismo'>
                Fellow Prismo
              </a>{" "}
              with my Aeropress because it makes it even easier. No rushing or
              hurrying trying to put the plunger on and making a messy kitchen.
            </p>
          </>
        ) : (
          <p>
            My favorite way of making coffee.{" "}
            <span className='accent'>Easy, fast, and room for error.</span> The
            tips that Hoffman gives in the video below are great. Especially the
            one about adding your water first in the brewer and your coffee
            after. <br />
            <br />
            It's a lot faster and I think it tastes slightly better than the
            standard method.
            <br />
            <br />
          </p>
        )}
      </div>
      <div className='iframe-container'>
        <YoutubeIframe url={videoArr} showAeropress={showAeropress} />
      </div>
    </section>
  );
}
