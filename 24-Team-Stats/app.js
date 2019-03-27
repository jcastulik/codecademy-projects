// start of the team object
const team = {

// start of the players property
  _players: [
    {
      firstName: 'Jonas',
      lastName: 'Castulik',
      age: '29'
    },
    {
      firstName: 'Artur',
      lastName: 'Berlov',
      age: '28'
    },
    {
   	  firstName: 'Michal',
      lastName: 'Padour',
      age: '28'
    }
  ],
// end of the player property

// start of the games property
  _games: [
    {
		  opponent: 'Kamenice',
		  teamPoints: 3,
		  opponentPoints: 0
		},
    {
		  opponent: 'Dobranov',
		  teamPoints: 5,
		  opponentPoints: 1
    },
    {
		  opponent: 'Skalice',
		  teamPoints: 3,
		  opponentPoints: 2
		}
  ],
// end of the games property

// start of the getter methods
  get games() {
    return this._games;
  },
  get players() {
    return this._players;
  },
// end of the getter methods
// start of the method for a new player
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },
// end of the method for a new player
  addGame(name, myPoints, TheirPoints) {
    let game = {
      opponent: name,
      teamPoints: myPoints,
      opponentPoints: TheirPoints
    }
    this.games.push(game);
  },
};
// end of the team object
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team._players);

team.addGame('test', 44, 55);

console.log(team._games);
