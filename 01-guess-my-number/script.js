'use strict';

const mysteryNumber = document.querySelector('.header__mystery-number');
console.log(mysteryNumber.textContent);

const guessNumber = document.querySelector('.guess-section__input');
const checkNumber = document.querySelector('.guess-section__button');
const message = document.querySelector('.game-info-section__message');
console.log(message.textContent);

// generuje liczbe, do zgadniecia
let secretNumber = Math.floor(Math.random() * 20) + 1;
console.log(secretNumber);
// wyswietlasz wylosowana liczbe
mysteryNumber.textContent = secretNumber;

// przy[adki
// 1 nie wporwadziles liczby // info brak liczby
// wprowadziles i jest zgodna /. info win
// liczba jest inna od sekretnej
// albo za wysoka // za wysoko
// albo za niska  // za nisko
// pobierasz liczbe wprowadzona przez gracza i porownujesz ja z liczba sekretna

checkNumber.addEventListener('click', function () {
  // const guess1 = guessNumber.value;
  // console.log(guess1, typeof guess1);
  const guess = Number(guessNumber.value);
  console.log(guess, typeof guess);

  if (!guess) {
    message.textContent = 'No Number!, Enter a Number :)';
  } else if (guess === secretNumber) {
    message.textContent = 'Correct number';
  }
});

//
// usunac
//
// check

const checkNumber2 = document.querySelector('.header__mystery-number-2');
checkNumber2.textContent = secretNumber;

/* memo 

gra polega na zgadnięciu liczby, 
tzn. 
1. musi byc wygenerowana jakas przypadkowa liczba w przedziale do 1-20 
2. wylosowana liczb musi byc gdzies zapisana i wyswietlana

3. wylosowana liczba musi byc porownywana z liczba wprowadzona przez gracza 

funkcja Math.random(); - generuje losową liczbe z przedzialu 0-1

Math.random() * 20 => wygeneruje liczbę z przedzialu 0 20


Funkcja Math.random() generuje liczbę losową z zakresu od 0 (włącznie) do 1 (wyłącznie).

Pomnożenie tego przez 20 daje losową liczbę od 0 (włącznie) do 20 (wyłącznie).

Na przykład, jeśli Math.random() wygeneruje 0,5, to Math.random() * 20 będzie równe 10. 
Ale jeśli Math.random() wygeneruje 0, to Math.random() * 20 będzie równe 0. 
A jeśli Math. random() generuje 0,999, wtedy Math.random() * 20 to 19,98.



*/

/* chat

Math.random() * 20 generates a random number between 0 (inclusive) and 20 (exclusive).

Here's how it works:

Math.random() generates a random number between 0 (inclusive) and 1 (exclusive).
Multiplying this by 20 gives a random number between 0 (inclusive) and 20 (exclusive).
For example, if Math.random() generates 0.5, then Math.random() * 20 would be 10. But if Math.random() generates 0, then Math.random() * 20 would be 0. And if Math.random() generates 0.999, then Math.random() * 20 would be 19.98


will this generate a full 20 ?? 

No, Math.random() * 20 will never generate the number 20 itself because the Math.random() function returns a value between 0 (inclusive) and 1 (exclusive). When you multiply that value by 20, you get a range of values between 0 (inclusive) and 20 (exclusive), but you never actually reach 20.

In other words, the highest possible value that can be generated by Math.random() * 20 is 19.999... (which is the result of multiplying 1 by 20), but it's extremely unlikely to get exactly that value since Math.random() returns a pseudo-random value.



which solution is better, compare both functions

let secretNumber1 = Math.trunc(Math.random() * 20) + 1;
let secretNumber2 = Math.floor(Math.random() * 20) + 1;


Both Math.trunc(Math.random() * 20) + 1 and Math.floor(Math.random() * 20) + 1 will give you a random integer between 1 and 20 (inclusive).

The difference between them lies in how they round the generated number.

Math.floor() rounds down to the nearest integer, which guarantees that the result will be less than or equal to the upper bound of the range.
Math.trunc() simply truncates any fractional digits, which can result in a number that is equal to the upper bound of the range.
In this specific case, the difference between the two approaches is negligible because the upper bound of the range is an integer, so both Math.floor() and Math.trunc() will behave the same way.

However, in general, if the upper bound of the range is not an integer, using Math.floor() will be more appropriate to ensure that the generated number is always less than or equal to the upper bound.

So, in conclusion, for generating random integers within a range that starts at 1 and ends at an integer, both Math.floor(Math.random() * range) + 1 and Math.trunc(Math.random() * range) + 1 are valid options. However, Math.floor() is more appropriate if the upper bound of the range is not an integer.




// To tu taj to masz stringa a musisz porowanc z liczba
checkNumber.addEventListener('click', function () {
  const guess = guessNumber.value;
  console.log(guess, typeof guess);
});


*/
