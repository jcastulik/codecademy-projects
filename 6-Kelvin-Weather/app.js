const kelvin = 293;
// This is like 20 degrees of Celsius, but in Kelvin.

const celsius = kelvin - 273;
// This is the same temperature, but in Celsius.

let fahrenheit = celsius * (9/5) + 32;
// Still the same temperature, but in Fahrenheit.

fahrenheit = Math.floor(fahrenheit);
// Slightly unaccurate Fahrenheit because of Math.floor

console.log (`The temperature is ${fahrenheit} degrees Fahrenheit.`);
