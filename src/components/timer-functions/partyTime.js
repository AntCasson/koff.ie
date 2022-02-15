import confetti from "canvas-confetti";

export const partyTime = () => {
  confetti.create(null, {
    resize: true,
    useWorker: true
  })({ particleCount: 125, spread: 100, origin: { y: 1.2 } });
};
