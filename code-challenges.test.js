// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// First, I will create a Jest testing statement using describe, taking in my functions name, "fibonacciNums", and an anonymous function with an it statement. That statement will describe my function's purpose, and have another anonymous function with an expect statement. That expect statement will take in a function call, and use .toEqual() with my expected test results inside. I will also have one more expect statement for the other case.

describe("fibonacciNums", () => {
  it("This function will take a number greater than 2 as an argument, and return an array of the fibonacci sequence, with aa length equal to the input number", () => {
    const fibLength1 = 6
    // Expected output: [1, 1, 2, 3, 5, 8]
    const fibLength2 = 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(fibonacciNums(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonacciNums(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// b) Create the function that makes the test pass.

// I will create a function called fibonacciNums that has a number as a parameter. I will then create an empty array to push my results into, and then do a check to see if the input is greater than 2, as the prompt requires. If that condition is met, I will enter into a for loop, iterating equal to the input number. Each iteration will push a result into my array, with the first 2 pushing the number 1, and each subsequent iteration pushing the sum of the two previous iterations. I will then return the array.

const fibonacciNums = (num) => {
  outputArray = []
  if (num > 2) {
    for (let i = 0; i < num; i++) {
      if (i === 0 || i === 1) {
        let temp = 1
        outputArray.push(temp)
      } else {
        let temp = 0
        temp = outputArray[i - 2] + outputArray[i - 1]
        outputArray.push(temp)
      }
    }
    return outputArray
  } else {
    return "error"
  }
}

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

// First, I will create a Jest testing statement using describe, taking in my functions name, "orderObjects", and an anonymous function with an it statement. That statement will describe my function's purpose, and have another anonymous function with an expect statement. That expect statement will take in a function call, and use .toEqual() with my expected test results inside. I will also have one more expect statement for the other case.

describe("orderObjects", () => {
  it("This function will take in an object as an argument and return the values within it as a sorted array", () => {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }
    // Expected output: [15, 15, 20, 30, 30, 60, 90]

    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65
    }
    // Expected output: [10, 15, 20, 45, 60, 65, 100]
    expect(orderObjects(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(orderObjects(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

// b) Create the function that makes the test pass.

// First I will create a function called orderObjects that has an object as parameter. It will then use Object.values to extract the values of the object into an array, and then use a modified .sort function on that array, returning the ordered array.
// (I had to research online how to use sort to order numerically, and have added annotation to the code to explain how this modified function works.)

const orderObjects = (object) => {
  // Through online research, I found that the sort method actually takes in a function as an argument. This function takes in two values from the array at a time as arguments itself, and sorts based on the return. By subtracting the two values, it will cause the array to sort itself numerically, instead of the default alphabetical sorting. this is because a negative output, meaning num1 is less than num2, will sort num1 before num2. After making all comparisons, this will end in a numerically sorted array from low to high.
  return Object.values(object).sort((num1, num2) => num1 - num2)
}

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// First, I will create a Jest testing statement using describe, taking in my functions name, "sumArray", and an anonymous function with an it statement. That statement will describe my function's purpose, and have another anonymous function with an expect statement. That expect statement will take in a function call, and use .toEqual() with my expected test results inside. I will also have two more expect statements for the other cases.

describe("sumArray", () => {
  it("This function will take in an array, and return an array where each value is the sum total of values up to that index in the original array", () => {
    const accountTransactions1 = [100, -17, -23, -9]
    // Expected output: [100, 83, 60, 51]
    const accountTransactions2 = [250, -89, 100, -96]
    // Expected output: [250, 161, 261, 165]
    const accountTransactions3 = []
    // Expected output: []
    expect(sumArray(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(sumArray(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(sumArray(accountTransactions3)).toEqual([])

  })
})

// b) Create the function that makes the test pass.

// First I will create a function called sumArray that takes in an array as an argument. It will create a new empty array and then iterate through the input array. The first value will be transfered directly into the new one, and then every subsequent value is added to the index-1 of the new array, and added into the equivalent index of the new array. HTen, after it is done iterating, it will return the new array.

const sumArray = (array) => {
  newArray = []
  for (i = 0; i < array.length; i++) {
    if (i === 0) {
      newArray[i] = array[i]
    }
    else {
      newArray[i] = array[i] + newArray[i-1]
    }
  }
  return newArray
}