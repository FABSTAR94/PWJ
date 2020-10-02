//CHALLENGE 9 : Have own database of movies and sort them by highest ratings.
// Code Algorithmn from scratch without using helper functions.
// We want to find the max rating in the array in order to place it first. Then do the same thing to find the second highest number and so on.
/*[5,8,2,9,3,10] this is the array 
first loop: [10,8,2,9,3,5]
second loop: [10,9,2,8,3,5]
third loop: [10,9,8,2,3,5]
fourth loop: [10,9,8,5,3,2] will check the last 2 and realize its in order. 
fifth loop: [10,9,8,5,3,2] 
so it will loop 5 times in order to sort all number in array.*/

/*Plan:
1. Start the loop at index 1 
2. Find max number and know its index  in order to be able to swap.
*/

function sortHighRatingsFirst(numbers) {
  for (let j = 0; j < numbers.length - 1; j++) {
    // This function will find max number and tell you which index its located at.
    let max_num = numbers[j];
    let max_location = j;
    // You want it to start at j which can change location every time you loop.
    for (let i = j; i < numbers.length; i++) {
      if (numbers[i] > max_num) {
        max_num = numbers[i];
        max_location = i;
      }
    }
    //you want to swap the first and the last number.
    numbers[max_location] = numbers[j]; //10
    numbers[j] = max_num;
  }
  return numbers;
}
console.log(sortHighRatingsFirst([5, 8, 2, 9, 3, 10]));
console.log(sortHighRatingsFirst([4, 2, 0, 15, 13, 11]));
