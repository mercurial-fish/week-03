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
let str1 = "Q3: The index of the last element can be found at arrayName.length -1. ";
let str2 = "If you want to access the element, you put that value in the square brackets next to arrayName. ";
let str3 = "Ex: arrayName[arrayName.length - 1]";

console.log(str1 + str2 + str3);

// 4. How do you access the first element of any array?
let str4 = "Q4: The first element of an array is found at index 0. ";
let str5 = "Ex: arrayName[0]";
console.log(str4 + str2 + str5);

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