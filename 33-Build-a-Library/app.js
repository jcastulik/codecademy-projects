class media {

  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating() {
    let ratingsSum = this.ratings.reduce((acumulator,rating) => acumulator + rating);
    return ratingsSum / this.ratings.length;
  }

  addRating(rating) {
    this.ratings.push(rating);
  }
}

class book extends media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
	}

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class movie extends media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
	}

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

let historyOfEverything = new book('Bill Bryson', 'A Short History of Nearly Everything', 544)
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(2);
historyOfEverything.addRating(3);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());
