'use strict';

//track user correct answers
let userCorrectAnswers = 0;

//obtain user name
let userName = prompt('Hey, what is your name?');
alert(`Welcome to my website ${userName}! Do me a favor, please answer the following questions with a yes(y) or no(n) answer.`);


//question 1
function question_1()
{
  let questionOne = prompt('Does Jacob own a hamster?').toLowerCase();

  if (questionOne === 'yes' || questionOne === 'y') {
    /* console.log('No, I don\'t own a hamster. But they are so cute that I am reevaluating my life choices as I write this.'); */
    alert('You are wrong! I don\'t own a hamster. But they are so cute that I am re-evaluating my life choices as I write this.');
  } else if (questionOne === 'no' || questionOne === 'n') {
    /* console.log('Yes, I am a lonely sidewinder who live with cats.') */
    alert('You are right! I am a lonely sidewinder who lives with cats.');
    userCorrectAnswers++;
  } else {
    /* console.log('Didn't get that. questionOne')*/
    alert('Sorry, I didn\'t understand that response. Please be sure to answer with a yes or no.');
  }
}



//question 2
function question_2()
{
  let questionTwo = prompt('Does Jacob have a ginger beard?').toLowerCase();

  if (questionTwo === 'yes' || questionTwo === 'y') {
    /* console.log('Why yes he does! questionTwo'); */
    alert('You are right! Thats nice of you to notice!');
    userCorrectAnswers++;
  } else if (questionTwo === 'no' || questionTwo === 'n') {
    /* console.log('No, Jacob most definitely has a beard.') */
    alert('You are wrong! Jacob most definitely has a ginger beard. What else would you call that cookie duster?');
  } else {
    /* console.log('Didn't get that. questionTwo')*/
    alert('Sorry, I didn\'t understand that response. Please be sure to answer with a yes or no.');
  }
}



//question3
function question_3()
{
  let questionThree = prompt('Does Jacob enjoy chocolate milk shakes?').toLowerCase();

  if (questionThree === 'yes' || questionThree === 'y') {
    /* console.log('Why yes he does! questionThree'); */
    alert('You are right! Expecially after a workout.');
    userCorrectAnswers++;
  } else if (questionThree === 'no' || questionThree === 'n') {
    /* console.log('You are wrong, Jacob loves chocolate milkshakes.') */
    alert('You are wrong! Jacob loves chocolate milkshakes');
  } else {
    /* console.log('Didn't get that. questionThree')*/
    alert('Sorry, I didn\'t understand that response. Please be sure to answer with a yes or no.');
  }
}



//question4
function question_4()
{
  let questionFour = prompt('Is Jacob\'s favorite color pink?').toLowerCase();

  if (questionFour === 'yes' || questionFour === 'y') {
    /* console.log('You are right. Pink is one of Jacob\'s favorite colors.'); */
    alert('You are right. Pink is one of Jacob\'s favorite colors.');
    userCorrectAnswers++;
  } else if (questionFour === 'no' || questionFour === 'n') {
    /* console.log('You are wrong. Jacob is partial to pink.') */
    alert('You are wrong. Jacob is partial to pink.');
  } else {
    /* console.log('Didn't get that. questionFour')*/
    alert('Sorry, I didn\'t understand that response. Please be sure to answer with a yes or no.');
  }
}



//question5
function question_5(){}
let questionFive = prompt('Does Jacob like the 1994 animated movie, The Lion King?').toLowerCase();

if (questionFive === 'yes' || questionFive === 'y') {
  /* console.log('You are wrong. Jacob doesn\'t care one way or the other about The Lion King.'); */
  alert('You are wrong. Jacob doesn\'t care one way or the other about The Lion King.');
} else if (questionFive === 'no' || questionFive === 'n') {
  /* console.log('You are right. Jacob doesn\'t care one way or the other about The Lion King.') */
  alert('You are right. Jacob doesn\'t care one way or the other about The Lion King.');
  userCorrectAnswers++;
} else {
  /* console.log('')*/
  alert('Sorry, I didn\'t understand that response. Please be sure to answer with a yes or no.');
}


//question6 
function question_6(){}
let questionSixAnswer = Math.floor(Math.random()*11);
let questionSixAttempts = 4;

while (questionSixAttempts > 0) {

  //prompt for guess
  let questionSix = prompt(`I'm thinking of an integer between 0 and 10, inclusive. Can you guess the number? You have ${questionSixAttempts} guesses left.`);

  questionSixAttempts--;
  
  //checking if user quess right
  if (questionSix == questionSixAnswer) {
    alert(`You are correct! The answer was ${questionSixAnswer}`);
    userCorrectAnswers++;
    break;
  } else if (questionSixAttempts >= 1 && questionSix > questionSixAnswer){
    alert('Close, guess a little lower!');
    continue;
  } else if (questionSixAttempts >= 1 && questionSix < questionSixAnswer){
    alert('Close, guess a little higher!');
    continue;
  } else if (questionSixAttempts === 0) {
    alert(`So close, but the answer was ${questionSixAnswer}`);
    break;
  }
}


//question 7
function question_7(){}
let questionSevenArray = [3,7,11];
let questionSevenAttempts = 6;
 
do {
  let questionSeven = prompt(`Can you guess one of Jacob\'s favorite prime numbers? You have ${questionSevenAttempts} guesses left.`);

  let questionSevenIndex = questionSevenArray.indexOf(parseInt(questionSeven));

  if (questionSevenIndex>=0){
    alert(`You got it. My favorite primers are ${questionSevenArray}`);
    userCorrectAnswers++;
    break;
  } else if (questionSevenAttempts > 1){
    alert('You are soo close, keep guessing.');
  } else if (questionSevenAttempts===1){
    alert(`Nice try but my favorite primers are ${questionSevenArray}!`);
  }

  questionSevenAttempts--;

} while (questionSevenAttempts>0);



// personalized message at the end
alert(`Thank you for answering all those questions! I feel like we bonded there. Well ${userName} after this prompt you will enter a website all about me. I know you will enjoy it! Why? Because everyone loves learning more about me! Oh and congratulations on getting ${userCorrectAnswers} questions right!`);