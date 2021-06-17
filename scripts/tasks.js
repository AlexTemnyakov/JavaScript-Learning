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
        if (number % factor === 0){
            number /= factor;
        } else {
            factor++;
        }
    }

    var output = "The largest prime factor of " + backupOfNumber + " is " + factor + ".";
    alert(output);

    return factor;
}

/**
 * Checks if the passed number is a palindrome.
 *
 * @param {number} number The number you want to check if it is a palindrome.
 * @return {boolean} True if the passed number is a palindrome. Otherwise, false.
 */
function isPalindrome(number) {
    var numberS = number.toString();

    for (var i = 0; i < numberS.length / 2; i++) {
        if (numberS[i] !== numberS[numberS.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

/**
 * Finds the largest palindrome products of two 3-digit numbers.
 *
 * @return {number} The largest palindrome product of two 3-digit numbers.
 */
function findLargestPalindromeProduct() {
    var largestProduct = 0;

    for (var num1 = 100; num1 < 1000; num1++) {
        for (var num2 = num1; num2 < 1000; num2++) {
            var currentProduct = num1 * num2
            if (currentProduct > largestProduct && isPalindrome(num1 * num2)) {
                largestProduct = currentProduct;
            }
        }
    }

    var output = "The largest palindrome product of two 3-digit numbers is " + largestProduct + ".";
    alert(output);

    return largestProduct;
}

/**
 * Finds the smallest number which is dividable by all numbers from the required range.
 *
 * @param {number} rightBoundOfRange The range is [1, rightBoundOfRange].
 * @return {number} The smallest multiple.
 */
function findSmallestMultiple(rightBoundOfRange) {
    var number = rightBoundOfRange;
    while (true) {
        var isDividableByAllNumbers = true;
        for (var i = 1; i <= rightBoundOfRange; i++) {
            if (number % i !== 0) {
                isDividableByAllNumbers = false;
                break;
            }
        }
        if (isDividableByAllNumbers) {
            var output = "The smallest number that is dividable by all numbers from the range [" + 1 + ", " + rightBoundOfRange + "] is " + number + ".";
            alert(output);
            return number;
        } else {
            number++;
        }
    }
}

function findDifferenceOfSquareOfSumAndSumOfSquares(max) {
    var sumOfSquares = 0;
    var sum = 0;

    for (var i = 1; i <= max; i++) {
        sum += i;
        sumOfSquares += i * i;
    }

    var difference = sum * sum - sumOfSquares;

    var output = "The difference between the sum of the squares of the natural numbers up to " + max + " and the square of the sum is " + difference + ".";
    alert(output);

    return difference;
}

//showMessage();
//calculateSumOfMultiplesUpTo(1000, [3, 5]);
//calculateSumOfEvenFibonacciNumbersUpTo(4000000);
//findLargestPrimeFactorOfNumber(600851475143);
//findLargestPalindromeProduct();
//findSmallestMultiple(20);
findDifferenceOfSquareOfSumAndSumOfSquares(100);