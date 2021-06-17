function showMessage() {
    alert("This script will show the answers to the tasks from https://projecteuler.net/archives.");
}

/**
 * Returns the sum of the multiples of the passed dividers up to the passed maximum.
 *
 * @param {number} max The maximum number to count up to.
 * @param {Array.<number>} dividers An array of dividers.
 * @return {number} The sum of the multiples of the dividers up to the passed maximum.
 */
function calculateSumOfMultiplesUpTo(max, dividers) {
    var sum = 0;

    for (var i = 0; i < max; i++) {
        for (var j = 0; j < dividers.length; j++) {
            if (i % dividers[j] === 0) {
                sum += i;
                // Break, because we don't want to count the current number again.
                break;
            }
        }
    }

    var output = "The sum of multiples of ";
    for (var i = 0; i < dividers.length; i++) {
        output += dividers[i];
        if (i !== dividers.length - 1) {
            output += ", ";
        } else {
            output += " ";
        }
    }
    output += "up to " + max + " is " + sum;
    alert(output);

    return sum;
}

/**
 * Returns the sum of the even numbers in the Fibonacci sequence up to the passed maximum.
 *
 * @param {number} max The maximum number in the Fibonacci sequence.
 * @return {number} The sum of the number of the Fibonacci sequence up to the passed maximum.
 */
function calculateSumOfEvenFibonacciNumbersUpTo(max) {
    var sum = 0;

    var f1 = 1;
    var f2 = 1;

    while (f1 + f2 < max) {
        var currentNumber = f1 + f2;
        f1 = f2;
        f2 = currentNumber;
        //alert(currentNumber)
        if (currentNumber % 2 === 0) {
            sum += currentNumber;
        }
    }

    var output = "The sum of the numbers in the Fibonacci sequence up to " + max + " is " + sum;
    alert(output);

    return sum;
}

/**
 * Returns the largest prime factor of the passed number.
 *
 * @param {number} number The number you want to find the largest prime factor of.
 * @return {number} The largest prime factor of the passed number.
 */
function findLargestPrimeFactorOfNumber(number) {
    var backupOfNumber = number;
    var factor = 2;

    while (number > 1) {
        if(number % factor === 0){
            number /= factor;
        } else {
            factor++;
        }
    }

    var output = "The largest prime factor of " + backupOfNumber + " is " + factor + ".";
    alert(output);

    return factor;
}

//showMessage();
//calculateSumOfMultiplesUpTo(1000, [3, 5]);
//calculateSumOfEvenFibonacciNumbersUpTo(4000000)
findLargestPrimeFactorOfNumber(600851475143)