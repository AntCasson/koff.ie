export default function cleverInstructions(time, status, setCoffeeInstruction) {
  if (status === "RUNNING" && time > 120) {
    setCoffeeInstruction("Stir grounds gently");
    console.log("instruction function");
  }
  if (status === "RUNNING" && time < 120 && time > 100) {
    setCoffeeInstruction("Brewing..");
  }
  if (status === "RUNNING" && time < 100 && time > 75) {
    setCoffeeInstruction("Get your favorite cup ready!");
  }
  if (status === "RUNNING" && time < 75 && time > 60) {
    setCoffeeInstruction("Still brewing away...");
  }
  if (status === "RUNNING" && time < 60 && time > 55) {
    setCoffeeInstruction("One minute left!");
  }
  if (status === "RUNNING" && time < 35 && time > 30) {
    setCoffeeInstruction("Break coffee crust");
  }
  if (status === "RUNNING" && time < 30 && time > 10) {
    setCoffeeInstruction("Almost done");
  }
  if (status === "RUNNING" && time < 10 && time > 5) {
    setCoffeeInstruction("Put brewer on your cup!");
  }
  if (status === "RUNNING" && time < 1) {
    setCoffeeInstruction("Enjoy your coffee!");
  }
  if (status === "STOPPED") {
    setCoffeeInstruction("Press BREW to start!");
  }
}
