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

/**
 * Assume the natural numbers from 1 to max. This functions returns (1 + 2 + ... + max)^2 - (1^2 + 2^2 + ... + max^2).
 *
 * @param {number} max The maximum natural number.
 * @return {number} The difference.
 */
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

// /**
//  * Returns sieve of Eratosthenes.
//  *
//  * @return {Array.<number>} The sieve of Eratosthenes.
//  */
// function getSieveOfEratosthenes() {
//     var maxArrayLength = Math.pow(2, 16)
//     var sieveOfEratosthenes = new Array(maxArrayLength).fill(true);
//
//     var min = 2
//     var max = maxArrayLength
//
//     for (var i = min; i < max; i++) {
//         if (sieveOfEratosthenes[i] === true) {
//             for (var f = 0, j = i * i + f * i; j < max; f++, j = i * i + f * i) {
//                 sieveOfEratosthenes[j] = false
//             }
//         }
//     }
//
//     return sieveOfEratosthenes
// }

/**
 * Checks if the passed number is a prime number.
 *
 * @param {number} number The number to check.
 * @return {boolean} True if it is a prime number. Otherwise, false.
 */
function isPrime(number) {
    if (number === 0 || number === 1)
        return false;

    var prime = true;
    for (var j = 2; j < number - 1; j++) {
        if ((number % j) === 0) {
            prime = false;
            break;
        }
    }

    return prime;
}

/**
 * Finds the prime number at the passed position.
 *
 * @param {number} position The position.
 * @return {number} The prime number at the position.
 */
function findPrimeNumberAtPosition(position) {
    alert("It will take some time to solve.")
    var counter = 0;
    for (var i = 2; ; i++) {
        if (isPrime(i)) {
            counter++;
            if (counter === position) {
                var output = "The prime number at the position " + position + " is " + i + ".";
                alert(output);
                return i;
            }
        }
    }
}

/**
 * Finds the largest product of a sequence of the passed length in the passed series.
 *
 * @param {string} series A series.
 * @param {number} sequenceLength The length of the sequence in the series.
 * @return {number} The largest product.
 */
function findLargestProductInSeries(series, sequenceLength) {
    alert("The series: " + series);

    var largestProduct = 0;

    for (var i = 0; i < series.length - sequenceLength; i++) {
        var currentProduct = 1;
        for (var j = 0; j < sequenceLength; j++) {
            currentProduct *= parseInt(series[j + i]);
        }
        largestProduct = Math.max(currentProduct, largestProduct);
    }

    var output = "The largest product is " + largestProduct + ".";
    alert(output);

    return largestProduct;
}

/**
 * Finds the Pythagorean triangles the sides of which matches a + b + c === sum.
 *
 * @param {number} sum The required sum of the sides of the triangles.
 * @return {number} The product of the side of the found triangle.
 */
function findSpecialPythagoreanTriplet(sum) {
    for (var a = 1; a <= (sum - 1 - 1); a++) {
        for (var b = a + 1; b <= (sum - a - 1); b++) {
            for (var c = b + 1; c <= (sum - a - b); c++) {
                var isPythagoreanTriangle = function() {
                    return ((a * a) + (b * b)) === (c * c);
                } ();
                if (isPythagoreanTriangle && (a + b + c) === sum) {
                    var output = "The Pythagorean triplet with the sum that is equal to " + sum + " is " + a + ", " + b + ", and " + c + ".\n";
                    output += "The product of the side lengths is " + (a * b * c) + ".";
                    alert(output);
                    return a * b * c;
                }
            }
        }
    }
}

/**
 * Returns the sieve of Eratosthenes up to the passed number
 *
 * @param {number} max The maximum number (not including it).
 * @return {Array.<number>} The sieve of Eratosthenes up to the passed number.
 */
function getSieveOfEratosthenesUpTo(max) {
    var sieveOfEratosthenes = new Array(max).fill(true);

    for (var i = 2; i < max; i++) {
        if (sieveOfEratosthenes[i] === true) {
            for (var f = 0, j = i * i + f * i; j < max; f++, j = i * i + f * i) {
                sieveOfEratosthenes[j] = false
            }
        }
    }

    return sieveOfEratosthenes
}

/**
 * Returns the sum of the prime numbers below the passed maximum.
 *
 * @param {number} max The maximum number (not including it).
 * @return {number} The sum of the prime numbers below the passed maximum.
 */
function findSumOfPrimesBelow(max) {
    var sum = 0;
    var sieveOfEratosthenes = getSieveOfEratosthenesUpTo(max);
    for (var i = 2; i < max; i++) {
        if (sieveOfEratosthenes[i] === true) {
            sum += i;
        }
    }

    var output = "The sum of the prime numbers below " + max + " is " + sum + ".";
    alert(output);

    return sum;
}

//showMessage();
//calculateSumOfMultiplesUpTo(1000, [3, 5]);
//calculateSumOfEvenFibonacciNumbersUpTo(4000000);
//findLargestPrimeFactorOfNumber(600851475143);
//findLargestPalindromeProduct();
//findSmallestMultiple(20);
//findDifferenceOfSquareOfSumAndSumOfSquares(100);
//findPrimeNumberAtPosition(10001);
//findLargestProductInSeries(getSeries(5), 3);
// findLargestProductInSeries(
//     "73167176531330624919225119674426574742355349194934" +
//     "96983520312774506326239578318016984801869478851843" +
//     "85861560789112949495459501737958331952853208805511" +
//     "12540698747158523863050715693290963295227443043557" +
//     "66896648950445244523161731856403098711121722383113" +
//     "62229893423380308135336276614282806444486645238749" +
//     "30358907296290491560440772390713810515859307960866" +
//     "70172427121883998797908792274921901699720888093776" +
//     "65727333001053367881220235421809751254540594752243" +
//     "52584907711670556013604839586446706324415722155397" +
//     "53697817977846174064955149290862569321978468622482" +
//     "83972241375657056057490261407972968652414535100474" +
//     "82166370484403199890008895243450658541227588666881" +
//     "16427171479924442928230863465674813919123162824586" +
//     "17866458359124566529476545682848912883142607690042" +
//     "24219022671055626321111109370544217506941658960408" +
//     "07198403850962455444362981230987879927244284909188" +
//     "84580156166097919133875499200524063689912560717606" +
//     "05886116467109405077541002256983155200055935729725" +
//     "71636269561882670428252483600823257530420752963450",
//     13);
//findSpecialPythagoreanTriplet(1000);
findSumOfPrimesBelow(2000000);