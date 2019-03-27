let username = 'Jonas';
username === 'Jane' ? console.log('Hello, Jane!') : console.log('Hello!');
let userQuestion = 'If you think you are allow to code,';
console.log(`${userQuestion} ask ${username}.`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
switch (randomNumber) {
  case 0:
  eightBall = 'It is certain';
  break;
  case 1:
  eightBall = 'Not sure yet';
  break;
  case 2:
  eightBall = 'Obviously not';
  break;
  case 3:
  eightBall = 'I am out of options';
  break;
  case 4:
  eightBall = 'Nope';
  break;
  case 5:
  eightBall = 'NO!!!!';
  break;
  case 6:
  eightBall = 'Hell yeah';
  break;
  case 7:
  eightBall = 'I like turtles';
  break;
  }
console.log(eightBall);
