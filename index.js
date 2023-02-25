// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log("Q1: " + ages);

// I declared my array by using let, giving my array a name and then inserting the necessary values in the square brackets.
// I also could have left the square brackets empty and added the values in afterwards with ages.push()

// 1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array 
console.log("Q1a: " + (ages[ages.length-1] - ages[0]));

// The index of the last element can be found any array can be found at arrayName.length - 1

// 1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(75);
console.log("Q1b: " + ages);
console.log("Q1b: " + (ages[ages.length - 1] - ages[0]));

// 1c. Use a loop to iterate through the array and calculate the average age.

let sum = 0
for (let i = 0; i < ages.length; i++) {
        sum += ages[i];
};
let averageAge = sum / ages.length;
console.log ("Q1c: " + averageAge);
// In the "for" loop, I used the first section to declare the variable "i" to represent the index in the array
// For the second section, I declared that while the index is less than the length of the array, this loop will run.
// In the third section, I set the post-iteration to add 1 to the index.
// I defined the variable sum before the loop. That way it can keep track of each sum for each iteration.
// I defined another variable "averageAge" after the loop in order to get the average.

// 2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log("Q1: " + names);

// 2a. Use a loop to iterate through the array and calculate the average number of letters per name. 

let nameLengthSum = 0;

for (let i = 0; i < names.length; i++) {
    nameLengthSum += names[i].length;
};
let averageNameLength = nameLengthSum / names.length;
console.log("Q2a: " + averageNameLength);

// In order to get the length of the string, you have to use the method "string.length".
// In this case, since said string was in an array, I had to name it by giving the array name and its index: names[i]
// I used essentially the same loop as I did in question 1, however I changed the variable names to avoid confusion.

// 2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 

let nameString = "Q2b: "

for (let i = 0; i < names.length; i++) {
    nameString += (names[i] + " ");
};
console.log(nameString);
// To concatenate strings is the same way you add two numbers together. I used the same principles as the other loops.
// However, instead of setting the nameString variable to 0, I set it to "Qb2: ", since that was the base 
// I wanted all the strings added to. I also made sure to add a space after "names[i]" because when you put together
// strings, it does not put in spaces. They must be added as their own string if not included in original string.

// 3. How do you access the last element of any array?
let str1 = `Q3: The index of the last element can be found at arrayName.length -1.
If you want to access the element, you put that value in the square brackets next to arrayName.
Ex: arrayName[arrayName.length - 1]`;

console.log(str1);

// 4. How do you access the first element of any array?
let str4 = `Q4: The first element of an array is found at index 0.
If you want to access the element, you put that value in the square brackets next to arrayName.
Ex: arrayName[0]`;

console.log(str4);

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array
// and add the length of each name to the nameLengths array.

let nameLengths = [];

for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
};
console.log("Q5: " + nameLengths);
//I created the array without any values in it. I then created a for loop based around the index of the names array.
// In order to add the new values, I used the push method and I retrieved the length values by calling on each
// element's length through the loop.
// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 

let newNameLengthSum = 0;

for (let i = 0; i < nameLengths.length; i++) {
    newNameLengthSum += nameLengths[i];
};
console.log("Q6: " + newNameLengthSum);
//I used a similar for loop as the other problems and created a new variable to hold the sum.

// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself
// n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).


function helloHello(word, n) {
    let sumSum = "";
    for (let i = 0; i < n; i++) {
        sumSum += word;
    }
    return sumSum;
};

console.log("Q7: " + helloHello("Holla", 5));
// I created a variable in the function to hold the sum of the concatenations. I defined it with "" in order to
// denote that it would be taking in string data. After the for loop, I put return, so the new value of sumSum would
// be given back to us from the computer.

// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name. 
// The full name should be the first and the last name separated by a space.

const fullName = (name1, name2) => `${name1} ${name2}`;

console.log("Q8: " + (fullName("Natalie", "Jackson")));

// Since this was a simpler function, I felt comfortable using an arrow function to help shorten the syntax. I also used template literals to put
// in the first and last name, so there wouldn't be a need to add in a space. It seemed like the simpler, more readable option.

//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function additionTime(array) {
    let addSum = 0;
    for (let i = 0; i < array.length; i++) {
        addSum += array[i];
    };
    return addSum > 100;
};

let testArray = [7, 17, 25, 25, 39, 4, 7];

console.log("Q9: " + (additionTime(testArray)));

// I created a function with a for loop in order to add up all the numbers in the array. I then added a boolean in the function to return true if the
// sum was greater than 100. I then created a test array in order to test out my function and to print out onto the web page.

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

function meanElements(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    };
    return sum / array.length;
};

console.log("Q10: " + (meanElements(testArray)));

// I wrote a function similar to the one in question nine where I used a for loop to add up all the elements in an array. After the loop,
// I then asked for the sum divided by the array length to be returned.

// 11. Write a function that takes two arrays of numbers and returns true if the average of the 
// elements in the first array is greater than the average of the elements in the second array.

function compareMeanArrays (array1, array2) {
    let sumOne = 0;
    for (let i =0; i < array1.length; i++) {
        sumOne += array1[i];
    };
    let sumTwo = 0;
    for (let i = 0; i < array2.length; i++) {
        sumTwo += array2[i];
    };
    let averageOne = sumOne / array1.length;
    let averageTwo = sumTwo / array2.length;

    return averageOne > averageTwo;
}

let testArrayTwo = [17, 16, 15, 80, 45, 3];

console.log("Q11: " + (compareMeanArrays(testArray, testArrayTwo)));

// I created a function using the same for loop I used in question ten. I did this for each array. I then created two new variables to represent
// the mean of each array and created a boolean that returned true if the first array was greater than the second array. I then created a second test array
// to test out the function.

// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket,
//  and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink (isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
};
let isHotOutside = true;

console.log("Q12: " + (willBuyDrink(isHotOutside, 15)));

// I created the function with the parameters requested. I then used the "and" operator to make sure that both conditions had to be met
// in order for it to be returned true. I then created the boolean variable and set it to true. I used console log to test it out by putting in different
// numbers or by stating isHotOutside was false.

// 13. Create a function of your own that solves a problem.   In comments, write what the function does and why you created it.

function startCoursework (meditationTime, bedIsMade, ptExercisesDone) {
    if (meditationTime >= 15 && bedIsMade && ptExercisesDone) {
        return "Time to get to work!";
    } else {
        return "Go take care of yourself!";
    }
};

let bedIsMade = true;
let ptExercisesDone = true;

console.log("Q13: " + (startCoursework(19, bedIsMade, ptExercisesDone)));

// My startCoursework function takes a number, meditationTime, and two Booleans, bedIsMade and ptExercisesDone, as its parameters. The function centers around the conditional:
// If I have meditated for greater than or equal to 15 minutes and I have made my bed and I have finished my physical therapy exercises, then it is
// "Time to get to work!". If I haven't completed even one of these things, then I need to go back and finish.
// I created this function because this is part of my every day. I have been tempted to go outside my routine and start my coursework before attending my
// daily needs. This usually will result in me being distracted or hyperfocusing on coursework and burning out. So I make sure that I make my bed, do my PT exercises,
// and meditate for at least 15 minutes before hopping on the computer. I find it prevents burnout and I am more focused. So my function is based on that routine.
