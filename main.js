const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json"));

let currentDayFromData = null;

const timeLeft = () => {
  const currentTime = new Date();
  const currentDay = currentTime.getDate();
  const currentMonth = currentTime.getMonth() + 1;
  const currentHours = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();

  if (
    !currentDayFromData ||
    currentDayFromData.day !== currentDay ||
    currentDayFromData.month !== currentMonth
  ) {
    const dayData = data.find(
      (day) => day.day === currentDay && day.month === currentMonth
    );
    if (dayData) {
      currentDayFromData = dayData;
    }
  }

  if (!currentDayFromData) {
    return "No day data found";
  }

  let hoursLeft = currentDayFromData.hours - currentHours;
  let minutesLeft = currentDayFromData.minute - currentMinutes;

  if (minutesLeft < 0) {
    minutesLeft = 60 + minutesLeft;
    hoursLeft--;
  }

  if (hoursLeft < 0) {
    return "Iftar vakti geçti";
  }

  return `${hoursLeft} saat ${minutesLeft} dakika`;
};

//export default timeLeft;
module.exports = timeLeft;
