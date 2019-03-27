let raceNumber = Math.floor(Math.random() * 1000);
let earlyReg = false;
let runnerAge = 19;
if (earlyReg && runnerAge>18) {
  raceNumber += 1000;
};
if (earlyReg && runnerAge>18) {
  console.log(`Race starts at 9:30 AM for runner with Number ${raceNumber}`)
} else if (!earlyReg && runnerAge>18) {
  console.log(`Race starts at 11:00 AM for runner with Number ${raceNumber}`)
} else if (runnerAge<18) {
  console.log(`Race starts at 12:30 AM for runner with Number ${raceNumber}`)
} else {
  console.log(`Don't run at all this is not a race for 18 years old`);
}
