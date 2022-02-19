if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(reg => console.log("sw is registered!", reg))
    .catch(err => console.log("sw is not registered!", err));
}
