const getSleepHours = day => {
  switch (day) {
    case "monday":
      return 7
      break;
    case "thuesday":
      return 7
      break;
    case "wednesday":
      return 7
      break;
    case "thursday":
      return 7
      break;
    case "friday":
      return 7
      break;
    case "saturday":
      return 9
      break;
    case "sunday":
      return 8
      break;
  };
};

const getActualSleepHours = () =>
  getSleepHours("monday") + getSleepHours("thuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday");

const getIdealSleepHours = idealHours => idealHours * 7;

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(7.5);
  if (actualSleepHours === idealSleepHours) {
    console.log('That is perfect amount of sleep');
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) more sleep than you needed this week. You should make more from the day.');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  }
}

calculateSleepDebt();
