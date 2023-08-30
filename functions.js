const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  //   seconds
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;

  if (seconds === 0) {
    secondHand.style.transition = "none"; /* Remove transition */
  } else {
    secondHand.style.transition =
      "transform 0.05s cubic-bezier(0.11, 2.17, 0.56, 1)";
  }

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  //   minutes
  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  //   hours

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate();
