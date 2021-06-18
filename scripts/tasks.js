var LearningTasks = {};

LearningTasks.showMessage = function () {
    alert("This script will show the answers to the tasks from https://projecteuler.net/archives.");
}

/**
 * Returns the sum of the multiples of the passed dividers up to the passed maximum.
 *
 * @param {number} max The maximum number to count up to.
 * @param {Array.<number>} dividers An array of dividers.
 * @return {number} The sum of the multiples of the dividers up to the passed maximum.
 */
LearningTasks.calculateSumOfMultiplesUpTo = function (max, dividers) {
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
LearningTasks.calculateSumOfEvenFibonacciNumbersUpTo = function (max) {
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
LearningTasks.findLargestPrimeFactorOfNumber = function (number) {
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
LearningTasks.isPalindrome = function (number) {
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
LearningTasks.findLargestPalindromeProduct = function () {
    var largestProduct = 0;

    for (var num1 = 100; num1 < 1000; num1++) {
        for (var num2 = num1; num2 < 1000; num2++) {
            var currentProduct = num1 * num2
            if (currentProduct > largestProduct && LearningTasks.isPalindrome(num1 * num2)) {
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
LearningTasks.findSmallestMultiple = function (rightBoundOfRange) {
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
LearningTasks.findDifferenceOfSquareOfSumAndSumOfSquares = function (max) {
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
LearningTasks.isPrime = function (number) {
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
LearningTasks.findPrimeNumberAtPosition = function (position) {
    alert("It will take some time to solve.")
    var counter = 0;
    for (var i = 2; ; i++) {
        if (LearningTasks.isPrime(i)) {
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
LearningTasks.findLargestProductInSeries = function (series, sequenceLength) {
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
LearningTasks.findSpecialPythagoreanTriplet = function (sum) {
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
LearningTasks.getSieveOfEratosthenesUpTo = function (max) {
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
LearningTasks.findSumOfPrimesBelow = function (max) {
    var sum = 0;
    var sieveOfEratosthenes = LearningTasks.getSieveOfEratosthenesUpTo(max);
    for (var i = 2; i < max; i++) {
        if (sieveOfEratosthenes[i] === true) {
            sum += i;
        }
    }

    var output = "The sum of the prime numbers below " + max + " is " + sum + ".";
    alert(output);

    return sum;
}

/**
 * Returns the largest product of adjacent numbers in a sequence of the passed length.
 *
 * @param {Array.<number>} grid A square grid.
 * @param {number} sequenceLength The length of a sequence in the grid to calculate the product.
 * @return {number} The largest product of adjacent numbers in a sequence of the passed length.
 */
LearningTasks.largestProductInGrid = function (grid, sequenceLength) {
    var isSquare = function (n) {
        return n > 0 && Math.sqrt(n) % 1 === 0;
    };

    if (!isSquare(grid.length)) {
        throw "Incorrect grid.\n";
    }

    var gridSize = Math.sqrt(grid.length);

    // Checks a sequence on right.
    var checkRight = function (i) {
        var iAtRow = i % gridSize;
        if (iAtRow + sequenceLength < gridSize) {
            var product = 1;
            for (var _i = 0; _i < sequenceLength; _i++) {
                product *= grid[i + _i];
            }
            return [true, product];
        }
        return [false, 0];
    };

    // Checks a sequence below.
    var checkBelow = function (i) {
        var product = 1;
        for (var _i = 0; _i < sequenceLength; _i++) {
            if (i + gridSize * _i < grid.length) {
                product *= grid[i + gridSize * _i];
            } else {
                return [false, 0];
            }
        }
        return [true, product];
    };

    // Checks a sequence on below left.
    var checkBelowLeft = function (i) {
        var product = 1;
        for (var _i = 0, _j = 0; _i < sequenceLength; _i++, _j++) {
            var currentI = i + gridSize * _i - _j;
            if (currentI >= 0 && currentI < grid.length) {
                product *= grid[currentI];
            } else {
                return [false, 0];
            }
        }
        return [true, product];
    }

    // Checks a sequence on below right.
    var checkBelowRight = function (i) {
        var product = 1;
        for (var _i = 0, _j = 0; _i < sequenceLength; _i++, _j++) {
            var currentI = i + gridSize * _i + _j;
            var currentIAtRow = i + _j;
            if (currentI < grid.length && currentIAtRow < gridSize) {
                product *= grid[currentI];
            } else {
                return [false, 0];
            }
        }
        return [true, product];
    }

    var largestProduct = 0;

    // Checks if the sequence is OK and if the product is the largest.
    var checkResult = function (result) {
        if (result[0] && result[1] > largestProduct) {
            return result[1];
        } else {
            return largestProduct;
        }
    }

    for (var i = 0; i < grid.length; i++) {
        largestProduct = checkResult(checkRight(i));
        largestProduct = checkResult(checkBelow(i));
        largestProduct = checkResult(checkBelowLeft(i));
        largestProduct = checkResult(checkBelowRight(i));
    }

    var output = "The largest product of a sequence of adjacent numbers of the length " + sequenceLength + " is " + largestProduct + ".";
    alert(output);

    return largestProduct;
}

/**
 * Returns the smallest triangular number that has a greater number of divisors than the passed.
 *
 * @param {number} numberOfDivisors The required number of divisors.
 * @return {number} The smallest triangular number that has a greater number of divisors than the passed.
 */
LearningTasks.findHighlyDivisibleTriangularNumber = function (numberOfDivisors) {
    var getNumberOfDivisors = function (n) {
        var cnt = 0;
        for (var i = 1; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                if (n / i === i)
                    cnt++;
                else
                    cnt += 2;
            }
        }
        return cnt;
    }

    var currentNumber = 1;
    for (var i = 2; ; i++) {
        if (getNumberOfDivisors(currentNumber) > numberOfDivisors) {
            var output = "The smallest triangular number that has over than " + numberOfDivisors + " divisors is " + currentNumber + ".";
            alert(output);

            return currentNumber;
        }

        currentNumber += i;
    }
}

LearningTasks.showMessage();
//LearningTasks.calculateSumOfMultiplesUpTo(1000, [3, 5]);
//LearningTasks.calculateSumOfEvenFibonacciNumbersUpTo(4000000);
//LearningTasks.findLargestPrimeFactorOfNumber(600851475143);
//LearningTasks.findLargestPalindromeProduct();
//LearningTasks.findSmallestMultiple(20);
//LearningTasks.findDifferenceOfSquareOfSumAndSumOfSquares(100);
//LearningTasks.findPrimeNumberAtPosition(10001);
//LearningTasks.findLargestProductInSeries(getSeries(5), 3);
// LearningTasks.findLargestProductInSeries(
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
//LearningTasks.findSpecialPythagoreanTriplet(1000);
//LearningTasks.findSumOfPrimesBelow(2000000);
// LearningTasks.largestProductInGrid(
//     [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8,
//         49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0,
//         81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65,
//         52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91,
//         22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80,
//         24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50,
//         32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70,
//         67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21,
//         24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72,
//         21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95,
//         78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92,
//         16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57,
//         86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58,
//         19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40,
//         4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66,
//         88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69,
//         4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36,
//         20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16,
//         20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54,
//         1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48],
//     4)
LearningTasks.findHighlyDivisibleTriangularNumber(500);