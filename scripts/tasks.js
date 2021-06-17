function showMessage() {
    alert( 'This script will show the answers to the tasks from https://projecteuler.net/archives.' )
}

/**
 * Returns the sum of the multiples of the passed dividers up to the passed maximum.
 *
 * @param {number} max The maximum number to count up to.
 * @param {Array.<number>} dividers An array of dividers.
 * @return {number} The sum of the multiples of the dividers up to the passed maximum.
 */
function calculateSumOfMultiplesUpTo(max, dividers) {
    let sum = 0

    for (let i = 0; i < max; i++) {
        for (let j = 0; j < dividers.length; j++) {
            if (i % dividers[j] === 0) {
                sum += i
                // Break, because we don't want to count the current number again.
                break;
            }
        }
    }

    let output = "The sum of multiples of "
    for (let i = 0; i < dividers.length; i++) {
        output += dividers[i]
        if (i !== dividers.length - 1) {
            output += ", "
        } else {
            output += " "
        }
    }
    output += "up to " + max + " is " + sum
    alert(output)

    return sum
}

/**
 * Returns the sum of the even numbers in the Fibonacci sequence up to the passed maximum.
 *
 * @param {number} max The maximum number in the Fibonacci sequence.
 * @return {number} The sum of the number of the Fibonacci sequence up to the passed maximum.
 */
function calculateSumOfEvenFibonacciNumbersUpTo(max) {
    let sum = 0

    let f1 = 1
    let f2 = 1

    while (f1 + f2 < max) {
        let currentNumber = f1 + f2
        f1 = f2
        f2 = currentNumber
        //alert(currentNumber)
        if (currentNumber % 2 === 0) {
            sum += currentNumber
        }
    }

    let output = "The sum of the numbers in the Fibonacci sequence up to " + max + " is " + sum
    alert(output)

    return sum
}

showMessage();
//calculateSumOfMultiplesUpTo(1000, [3, 5]);
calculateSumOfEvenFibonacciNumbersUpTo(4000000)