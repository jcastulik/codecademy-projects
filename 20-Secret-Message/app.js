let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript']

console.log(secretMessage.length);

secretMessage.pop();

console.log(secretMessage.length);

secretMessage.push('to', 'program');

console.log(secretMessage.length);

console.log(secretMessage.indexOf('easily'));
secretMessage[7] = 'right';

console.log(secretMessage);

secretMessage.shift();

console.log(secretMessage);

secretMessage.unshift('Programming');

secretMessage.splice(6,5,'know');
console.log(secretMessage);

console.log(secretMessage.join(" "));
