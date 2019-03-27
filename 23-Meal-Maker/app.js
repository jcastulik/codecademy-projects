let menu = {
//create a courses property object
_courses: {
//creating the 3 course properties
appetizers: [],
mains: [],
desserts: []
},//end of the courses object
// a setter method for each course
set appetizers(newAppetizer) {
this.appetizers = newAppetizer;
},
set mains(newMain){
this.mains = newMain;
},
set desserts(newDessert){
this.desserts = newDessert;
},
// a getter method for each course
get appetizers(){
return this.appetizers;
},
get mains(){
return this.mains;
},
get desserts(){
return this.desserts;
},
// a getter method for the courses property
get courses(){
return {
appetizers: this._courses.appetizers,//this uses the appetizer getter methods
mains: this._courses.mains,
desserts: this._courses.desserts,
};
},

addDishToCourse(courseName, dishName, dishPrice){
const dish = {
name: dishName,
price: dishPrice,
};
this._courses[courseName].push(dish);
},

getRandomDishFromCourse(courseName){
const dishes = this._courses[courseName];
const randomIndex = Math.floor(Math.random() * dishes.length);
return dishes[randomIndex];
},

generateRandomMeal(){
const appetizer = this.getRandomDishFromCourse('appetizers');
const main = this.getRandomDishFromCourse('mains');
const dessert = this.getRandomDishFromCourse('desserts');
const totalPrice = appetizer.price + main.price + dessert.price;
return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The total price ${totalPrice}.`;
}
}; //end of menu object

menu.addDishToCourse('appetizers', 'drink', 4.25);
menu.addDishToCourse('appetizers', 'vodka', 6.25);
menu.addDishToCourse('appetizers', 'soup', 3.50);

menu.addDishToCourse('mains', 'Salad', 8.25);
menu.addDishToCourse('mains', 'prawns', 9.25);
menu.addDishToCourse('mains', 'risotto', 8.50);

menu.addDishToCourse('desserts', 'fruits', 3.25);
menu.addDishToCourse('desserts', 'tiramisu', 4.25);
menu.addDishToCourse('desserts', 'pudding', 4.50);

let meal = menu.generateRandomMeal();
console.log(meal)
