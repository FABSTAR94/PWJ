//CHALLENGE 3: Your age in seconds.
//12 months in a year.
//30 days in a month.
//24 hours in a day.
//1 hours there is 60 minutes.
//1 minute there is 60 seconds.

function yourAgeInSeconds(age) {
  return "Your age is " + age * 12 * 30 * 24 * 60 * 60 + " in seconds";
}

console.log(yourAgeInSeconds(25));
