//CHALLENGE 10: How to use helper functions.
//DRY
//start refers to the start index.
function findMaxHelper(numbers, start) {
  let maximum = numbers[start];
  let max_location = start;
  for (let i = start; i < numbers.length; i++) {
    if (numbers[i] > maximum) {
      maximum = numbers[i];
      max_location = i;
    }
  }
  return { max_number: maximum, max_index: max_location };
}

console.log(findMaxHelper([5, 1, 8, 4, 15, 2], 0));

function sortHighRatingsFirstHelper(numbers) {
  //run as many times as there are items.
  for (let j = 0; j < numbers.length - 1; j++) {
    //Finding max number and max location starting from j.
    max = findMaxHelper(numbers, j);
    max_num = max["max_number"];
    max_location = max["max_index"];
    //Swapping first and the max value in an array.
    numbers[max_location] = numbers[j];
    numbers[j] = max_num;
  }
  return numbers;
}

console.log(sortHighRatingsFirstHelper([3, 9, 7, 15, 20]));
console.log(sortHighRatingsFirstHelper([80, 19, 3, 45, 66]));
