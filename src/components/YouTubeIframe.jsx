export default function YoutubeIframe({ url, showAeropress }) {
  return (
    <iframe
      src={showAeropress ? url[0] : url[1]}
      title='YouTube video player'
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    ></iframe>
  );
}
