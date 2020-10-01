//CHALLENGE8: Finding the Maximum
/* Will loop through the array and check if current item is greater than the current min.
If so , replace current min with the current item.*/

function findMax(numbers) {
  let maximum = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maximum) {
      maximum = numbers[i];
    }
  }
  return maximum;
}

console.log(findMax([5, 7, 3, 4, 28, 2]));
console.log(findMax([6, 8, 25, 5, 10, 3]));
