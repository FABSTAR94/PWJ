//CHALLENGE7: Finding the minimum.
/*Will loop through every item of the array and check if current item is less than current min,
 if not then current min will replace current item.*/

function findMin(numbers) {
  let minimum = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < minimum) {
      minimum = numbers[i];
    }
  }
  return minimum;
}

console.log(findMin([5, 7, 3, 4, 9, 1]));
console.log(findMin([6, 8, 2, 5, 9, 3]));
