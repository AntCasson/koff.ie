export default function aeroInstructions(time, status, setCoffeeInstruction) {
  if (status === "RUNNING" && time > 188) {
    setCoffeeInstruction("Pour in water and place plunger to stop dripping");
  }
  if (status === "RUNNING" && time < 188 && time > 160) {
    setCoffeeInstruction("Brewing..");
  }
  if (status === "RUNNING" && time < 160 && time > 120) {
    setCoffeeInstruction("So much brewing...");
  }
  if (status === "RUNNING" && time < 120 && time > 75) {
    setCoffeeInstruction("Still brewing away...");
  }
  if (status === "RUNNING" && time < 75 && time > 60) {
    setCoffeeInstruction("Hold brewer and plunger and gently swirl");
  }
  if (status === "RUNNING" && time < 60 && time > 30) {
    setCoffeeInstruction("Wait 30 seconds and start pushing");
  }
  if (status === "RUNNING" && time < 30 && time > 10) {
    setCoffeeInstruction("Push, slow and steady ");
  }
  if (status === "RUNNING" && time < 10 && time > 0) {
    setCoffeeInstruction("Keep pushing!");
  }
  if (status === "STOPPED" && time === 0) {
    setCoffeeInstruction("Enjoy your coffee!");
  }
  if (status === "STOPPED") {
    setCoffeeInstruction("Press BREW to start!");
  }
}
