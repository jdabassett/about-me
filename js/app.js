'use strict';

console.log('Hello World!');

// TODO: Get user name with prompt and alert with username

let userName = prompt('Hey, what is your name?');

alert(`Welcome to my website ${userName}! Do me a favor, please answer the following questions with a yes(y) or no(n) answer.`);

// TODO: prompt them with 5 yes or no (y/n) question, alert if they got answer right or wrong

let questionOne = prompt('Do I own a hamster?').toLowerCase();

if (questionOne === 'yes' || questionOne === 'y') {
  alert('No, I don\'t own a hamster. But they are so cute that I am reevaluating my life choices as I write this.');
} else if (questionOne === 'no' || questionOne === 'n') {
  alert('Yes, I am a lonely sidewinder who lives with cats.');
} 

// TODO: GIve a personalized message at the end.