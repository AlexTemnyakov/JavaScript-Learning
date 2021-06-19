var ProjectEulerSolutions = {};

ProjectEulerSolutions.showMessage = function () {
    alert("This script will show the answers to the tasks from https://projecteuler.net/archives.");
}

/**
 * Returns the sum of the multiples of the passed dividers up to the passed maximum.
 * https://projecteuler.net/problem=1
 *
 * @param {number} max The maximum number to count up to.
 * @param {Array.<number>} dividers An array of dividers.
 * @return {number} The sum of the multiples of the dividers up to the passed maximum.
 */
ProjectEulerSolutions.calculateSumOfMultiplesUpTo = function (max, dividers) {
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

    alert("Task 'Multiples of 3 and 5' https://projecteuler.net/problem=1.\n\nAnswer: " + sum);

    return sum;
}

/**
 * Returns the sum of the even numbers in the Fibonacci sequence up to the passed maximum.
 * https://projecteuler.net/problem=2
 *
 * @param {number} max The maximum number in the Fibonacci sequence.
 * @return {number} The sum of the number of the Fibonacci sequence up to the passed maximum.
 */
ProjectEulerSolutions.calculateSumOfEvenFibonacciNumbersUpTo = function (max) {
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

    alert("Task 'Even Fibonacci numbers' https://projecteuler.net/problem=2.\n\nAnswer: " + sum);

    return sum;
}

/**
 * Returns the largest prime factor of the passed number.
 * https://projecteuler.net/problem=3
 *
 * @param {number} number The number you want to find the largest prime factor of.
 * @return {number} The largest prime factor of the passed number.
 */
ProjectEulerSolutions.findLargestPrimeFactorOfNumber = function (number) {
    var factor = 2;

    while (number > 1) {
        if (number % factor === 0){
            number /= factor;
        } else {
            factor++;
        }
    }

    alert("Task 'Largest prime factor' https://projecteuler.net/problem=3.\n\nAnswer: " + factor);

    return factor;
}

/**
 * Finds the largest palindrome products of two 3-digit numbers.
 * https://projecteuler.net/problem=4
 *
 * @return {number} The largest palindrome product of two 3-digit numbers.
 */
ProjectEulerSolutions.findLargestPalindromeProduct = function () {
    var isPalindrome = function (number) {
        var numberS = number.toString();

        for (var i = 0; i < numberS.length / 2; i++) {
            if (numberS[i] !== numberS[numberS.length - 1 - i]) {
                return false;
            }
        }

        return true;
    };

    var largestProduct = 0;

    for (var num1 = 100; num1 < 1000; num1++) {
        for (var num2 = num1; num2 < 1000; num2++) {
            var currentProduct = num1 * num2
            if (currentProduct > largestProduct && isPalindrome(num1 * num2)) {
                largestProduct = currentProduct;
            }
        }
    }

    alert("Task 'Largest palindrome product' https://projecteuler.net/problem=4.\n\nAnswer: " + largestProduct);

    return largestProduct;
}

/**
 * Finds the smallest number which is dividable by all numbers from the required range.
 * https://projecteuler.net/problem=5
 *
 * @param {number} rightBoundOfRange The range is [1, rightBoundOfRange].
 * @return {number} The smallest multiple.
 */
ProjectEulerSolutions.findSmallestMultiple = function (rightBoundOfRange) {
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
            alert("Task 'Smallest multiple' https://projecteuler.net/problem=5.\n\nAnswer: " + number);

            return number;
        } else {
            number++;
        }
    }
}

/**
 * Assume the natural numbers from 1 to max. This functions returns (1 + 2 + ... + max)^2 - (1^2 + 2^2 + ... + max^2).
 * https://projecteuler.net/problem=6
 *
 * @param {number} max The maximum natural number.
 * @return {number} The difference.
 */
ProjectEulerSolutions.findDifferenceOfSquareOfSumAndSumOfSquares = function (max) {
    var sumOfSquares = 0;
    var sum = 0;

    for (var i = 1; i <= max; i++) {
        sum += i;
        sumOfSquares += i * i;
    }

    var difference = sum * sum - sumOfSquares;

    alert("Task 'Sum square difference' https://projecteuler.net/problem=6.\n\nAnswer: " + difference);

    return difference;
}

/**
 * Finds the prime number at the passed position.
 * https://projecteuler.net/problem=7
 *
 * @param {number} position The position.
 * @return {number} The prime number at the position.
 */
ProjectEulerSolutions.findPrimeNumberAtPosition = function (position) {
    var isPrime = function (number) {
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

    var counter = 0;
    for (var i = 2; ; i++) {
        if (isPrime(i)) {
            counter++;
            if (counter === position) {
                alert("Task '10001st prime' https://projecteuler.net/problem=7.\nIt will take some time to solve.\n\nAnswer: " + i);

                return i;
            }
        }
    }
}

/**
 * Finds the largest product of a sequence of the passed length in the passed series.
 * https://projecteuler.net/problem=8
 *
 * @param {string} series A series.
 * @param {number} sequenceLength The length of the sequence in the series.
 * @return {number} The largest product.
 */
ProjectEulerSolutions.findLargestProductInSeries = function (series, sequenceLength) {
    var largestProduct = 0;

    for (var i = 0; i < series.length - sequenceLength; i++) {
        var currentProduct = 1;
        for (var j = 0; j < sequenceLength; j++) {
            currentProduct *= parseInt(series[j + i]);
        }
        largestProduct = Math.max(currentProduct, largestProduct);
    }

    var output = "The largest product is " + largestProduct + ".";
    alert("Task 'Largest product in a series' https://projecteuler.net/problem=8.\n\nAnswer: " + largestProduct);

    return largestProduct;
}

/**
 * Finds the Pythagorean triangles the sides of which matches a + b + c === sum.
 * https://projecteuler.net/problem=9
 *
 * @param {number} sum The required sum of the sides of the triangles.
 * @return {number} The product of the side of the found triangle.
 */
ProjectEulerSolutions.findSpecialPythagoreanTriplet = function (sum) {
    for (var a = 1; a <= (sum - 1 - 1); a++) {
        for (var b = a + 1; b <= (sum - a - 1); b++) {
            for (var c = b + 1; c <= (sum - a - b); c++) {
                var isPythagoreanTriangle = function() {
                    return ((a * a) + (b * b)) === (c * c);
                } ();
                if (isPythagoreanTriangle && (a + b + c) === sum) {
                    alert("Task 'Special Pythagorean triplet' https://projecteuler.net/problem=9.\n\nAnswer: " + (a * b * c));

                    return a * b * c;
                }
            }
        }
    }
}

/**
 * Returns the sum of the prime numbers below the passed maximum.
 * https://projecteuler.net/problem=10
 *
 * @param {number} max The maximum number (not including it).
 * @return {number} The sum of the prime numbers below the passed maximum.
 */
ProjectEulerSolutions.findSumOfPrimesBelow = function (max) {
    var sieveOfEratosthenes = function (max) {
        var sieveOfEratosthenes = new Array(max).fill(true);

        for (var i = 2; i < max; i++) {
            if (sieveOfEratosthenes[i] === true) {
                for (var f = 0, j = i * i + f * i; j < max; f++, j = i * i + f * i) {
                    sieveOfEratosthenes[j] = false
                }
            }
        }

        return sieveOfEratosthenes
    } (max);

    var sum = 0;
    for (var i = 2; i < max; i++) {
        if (sieveOfEratosthenes[i] === true) {
            sum += i;
        }
    }

    alert("Task 'Summation of primes' https://projecteuler.net/problem=10.\n\nAnswer: " + sum);

    return sum;
}

/**
 * Returns the largest product of adjacent numbers in a sequence of the passed length.
 * https://projecteuler.net/problem=11
 *
 * @param {Array.<number>} grid A square grid.
 * @param {number} sequenceLength The length of a sequence in the grid to calculate the product.
 * @return {number} The largest product of adjacent numbers in a sequence of the passed length.
 */
ProjectEulerSolutions.largestProductInGrid = function (grid, sequenceLength) {
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

    alert("Task 'Largest product in a grid' https://projecteuler.net/problem=11.\n\nAnswer: " + largestProduct);

    return largestProduct;
}

/**
 * Returns the smallest triangular number that has a greater number of divisors than the passed.
 * https://projecteuler.net/problem=12
 *
 * @param {number} numberOfDivisors The required number of divisors.
 * @return {number} The smallest triangular number that has a greater number of divisors than the passed.
 */
ProjectEulerSolutions.findHighlyDivisibleTriangularNumber = function (numberOfDivisors) {
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
            alert("Task 'Highly divisible triangular number' https://projecteuler.net/problem=12.\n\nAnswer: " + currentNumber);

            return currentNumber;
        }

        currentNumber += i;
    }
}

/**
 * Returns the first 10 digits in the sum of the numbers of the passed count in the passed sequence.
 * https://projecteuler.net/problem=13
 *
 * @param {string} sequence A sequence of numbers.
 * @param {number} countOfNumbers The count of numbers in the sequence. The length of the sequence must be divisible by the countOfNumbers without anu remainder.
 * @return {string} The smallest triangular number that has a greater number of divisors than the passed.
 */
ProjectEulerSolutions.solveLargeSum = function (sequence, countOfNumbers) {
    var countOfDigitsInNumber = sequence.length / countOfNumbers;

    var chunks = function (str, size) {
        const numChunks = Math.ceil(str.length / size)
        const chunks = new Array(numChunks)

        for (var i = 0, o = 0; i < numChunks; ++i, o += size) {
            chunks[i] = str.substr(o, size)
        }

        return chunks
    } (sequence, countOfDigitsInNumber);

    var sum = "";

    var carryOut = 0;
    for (var i = countOfDigitsInNumber - 1; i >= 0; i--) {
        var numberAtCurrentPosition = carryOut;

        for (var j = 0; j < chunks.length; j++) {
            numberAtCurrentPosition += parseInt(chunks[j].charAt(i));
        }

        sum = numberAtCurrentPosition % 10 + sum;
        carryOut = Math.floor(numberAtCurrentPosition / 10);
    }

    if (carryOut > 0) {
        sum = carryOut + sum;
    }

    var firstTenDigits = sum.slice(0, 10);

    alert("Task 'Large sum' https://projecteuler.net/problem=13.\n\nAnswer: " + firstTenDigits);

    return firstTenDigits;
}

/**
 * Returns the number less than the passed maximum that produces the longest Collatz sequence.
 * https://projecteuler.net/problem=14
 *
 * @param {number} max The maximum number to calculate the Collatz sequence.
 * @return {number} The number less than the passed maximum that produces the longest Collatz sequence.
 */
ProjectEulerSolutions.solveLongestCollatzSequence = function (max) {
    var getCollatzSequenceLength = function (n) {
        var collatzSequenceLength = 1;

        while (n !== 1) {
            collatzSequenceLength++;
            if (n % 2 === 0) {
                n /= 2;
            } else {
                n = 3 * n + 1;
            }
        }

        return collatzSequenceLength;
    }

    var largestSequenceLength = 0;
    var numberForLongestSequence = -1;

    for (var i = 1; i < max; i++) {
        var currentLength = getCollatzSequenceLength(i);
        if (currentLength > largestSequenceLength) {
            largestSequenceLength = currentLength;
            numberForLongestSequence = i;
        }
    }

    alert("Task Longest Collatz sequence https://projecteuler.net/problem=14.\n\nAnswer: " + numberForLongestSequence);

    return numberForLongestSequence;
}

/**
 * Returns the number of routes in the grid of the passed size.
 * https://projecteuler.net/problem=15
 *
 * @param {number} gridSize The size of the grid.
 * @return {number} The number of routes in the grid of the passed size.
 */
ProjectEulerSolutions.solveLatticePaths = function (gridSize) {
    gridSize++;

    var grid = new Array(gridSize * gridSize).fill(0);

    grid[0] = 1;

    for (var i = 0; i < gridSize; i++) {
        for (var j = 0; j < gridSize; j++) {
            if (i > 0) {
                grid[i * gridSize + j] += grid[(i - 1) * gridSize + j];
            }

            if (j > 0) {
                grid[i * gridSize + j] += grid[i * gridSize + (j - 1)];
            }

            //console.log(i + " " + j + "  " + grid[i * gridSize + j]);
        }
    }

    alert("Task 'Lattice paths' https://projecteuler.net/problem=15.\n\nAnswer: " + grid[grid.length - 1]);

    return grid[grid.length - 1];
}

/**
 * Returns the sum of the digits in 2^power.
 * https://projecteuler.net/problem=16
 *
 * @param {BigInt} power The required power.
 * @return {number} The sum of the digits in 2^power.
 */
ProjectEulerSolutions.solvePowerDigitSum = function (power) {
    // Like Math.pow(...).
    var n = function (n, p) {
        var ret = 1n;

        for (var i = 0; i < p; i++) {
            ret *= n;
        }

        return ret;
    } (2n, power);

    var sum = 0n;

    while (n > 0n) {
        var lastDigit = n % 10n;
        sum += lastDigit;
        n = (n - (n % 10n)) / 10n;
    }

    alert("Task 'Power digit sum' https://projecteuler.net/problem=16.\n\nAnswer: " + sum);

    return sum;
}

/**
 * Returns the count of letters if all numbers from 1 to 100 are written in words.
 * https://projecteuler.net/problem=17
 *
 * @return {number} The count of letters if all numbers from 1 to 100 are written in words.
 */
ProjectEulerSolutions.solveNumberLetterCounts = function () {
    var elementaryNumberToWords = function (n)
    {
        if (n >= 20 && n % 10 !== 0) {
            return elementaryNumberToWords(n - (n % 10)) + " " + elementaryNumberToWords(n % 10);
        } else {
            switch (n) {
                case 0:
                    return "";
                case 1:
                    return "one";
                case 2:
                    return "two";
                case 3:
                    return "three";
                case 4:
                    return "four";
                case 5:
                    return "five";
                case 6:
                    return "six";
                case 7:
                    return "seven";
                case 8:
                    return "eight";
                case 9:
                    return "nine";
                case 10:
                    return "ten";
                case 11:
                    return "eleven";
                case 12:
                    return "twelve";
                case 13:
                    return "thirteen";
                case 14:
                    return "fourteen";
                case 15:
                    return "fifteen";
                case 16:
                    return "sixteen";
                case 17:
                    return "seventeen";
                case 18:
                    return "eighteen";
                case 19:
                    return "nineteen";
                case 20:
                    return "twenty";
                case 30:
                    return "thirty";
                case 40:
                    return "forty";
                case 50:
                    return "fifty";
                case 60:
                    return "sixty";
                case 70:
                    return "seventy";
                case 80:
                    return "eighty";
                case 90:
                    return "ninety";
            }
        }
    }

    var numberToWords = function (n)
    {
        var out = "";

        var i = 0;

        i = Math.floor((n / 100) % 10);
        if (i !== 0) {
            out += elementaryNumberToWords(i) + " ";
            out += "hundred ";
        }

        i = Math.floor(n % 100);
        if (out !== "" && i !== 0)
            out += "and ";
        out += elementaryNumberToWords(i);

        return out;
    }

    var countOfLetters = 0;

    for (var i = 1; i < 1000; i++) {
        var numInWords = numberToWords(i);
        //console.log(i + " " + numInWords);
        for (var j = 0; j < numInWords.length; j++) {
            if (numInWords[j] !== " ") {
                countOfLetters++;
            }
        }
    }

    alert("Task 'Number letter counts' https://projecteuler.net/problem=17.\n\nAnswer: " + countOfLetters);

    return countOfLetters;
}

/**
 * Returns the path of the maximum cost from the top of the given triangle to the bottom.
 * https://projecteuler.net/problem=18
 *
 * @param {Array<number>} triangle A triangle.
 * @return {number} The  path of the maximum cost from the top of the given triangle to the bottom.
 */
ProjectEulerSolutions.solveMaximumPathSum = function (triangle) {
    var numberOfRows = 0;

    var elementCounter = 0;
    for (var row = 1; elementCounter !== triangle.length; row++, numberOfRows++) {
        var numOfElementsAtRow = row;
        elementCounter += numOfElementsAtRow;
    }

    var matrix = new Int16Array(numberOfRows * numberOfRows).fill(0);
    for (var i = 0, k = 0; i < numberOfRows; i++) {
        for (var j = 0; j < i + 1; j++, k++) {
            matrix[i * numberOfRows + j] = triangle[k];
        }
    }

    var printMatrix = function (numberOfRowsToPrint) {
        for (var i = 0; i < numberOfRowsToPrint; i++) {
            var row = "";
            for (var j = 0; j < numberOfRows; j++) {
                var element = matrix[i * numberOfRows + j];
                row += (element < 10 ? "0" : "") + element + " ";
            }
            console.log(row);
        }
    }

    // printMatrix(numberOfRows);
    // console.log("\n\n");

    for (var i = numberOfRows - 2; i >= 0; i--) {
        for (var j = 0; j <= i; j++) {
            matrix[i * numberOfRows + j] += Math.max(matrix[(i + 1) * numberOfRows + j], matrix[(i + 1) * numberOfRows + (j + 1)]);
        }
        // printMatrix(i + 1);
        // console.log("");
    }

    alert("Task 'Maximum path sum I' https://projecteuler.net/problem=18.\n\nAnswer: " + matrix[0]);

    return matrix[0];
}

/**
 * Returns the count on Sundays that fell on the first of the month during the passed years.
 * https://projecteuler.net/problem=19
 *
 * @param {number} startYear The start year for counting.
 * @param {number} endYear The end year for counting.
 * @return {number} The count on Sundays that fell on the first of the month during the passed years.
 */
ProjectEulerSolutions.countSundays = function (startYear, endYear) {
    var isYearLeap = function (year) {
        if ((year % 400 !== 0 && year % 100 === 0) || (year % 4 !== 0)) {
            return false;
        } else {
            return true;
        }
    }

    var countOfSundays = 0;
    var currentDay = 1;

    for (var y = startYear; y <= endYear; y++) {
        //console.log("Year: " + y + ", leap: " + isYearLeap(y));
        for (var m = 1; m <= 12; m++) {
            var numOfDays = 0;

            switch (m) {
                case 2:
                    if (isYearLeap(y))
                        numOfDays = 29;
                    else
                        numOfDays = 28;
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    numOfDays = 30;
                    break;
                default:
                    numOfDays = 31;
                    break;
            }

            //console.log("Month: " + m + ", year: " + y + ", number of days: " + numOfDays);

            for (var d = 1; d <= numOfDays; d++, currentDay = (currentDay + 1 > 7 ? 1 : currentDay + 1)) {
                // currentDay was incremented. So, we have to check if it is Monday now. If so,
                // increase the counter for Sundays.
                if (d === 1 && currentDay === 1) {
                    countOfSundays++;
                }
            }
        }
    }

    alert("Task 'Counting Sundays' https://projecteuler.net/problem=19.\n\nAnswer: " + countOfSundays);

    return countOfSundays;
}

/**
 * Returns the sum of digits in the factorial of the passed number.
 * https://projecteuler.net/problem=20
 *
 * @param {BigInt} n The number to calculate the sum of digits in the factorial.
 * @returns {BigInt} The sum of digits in the factorial of the passed number.
 */
ProjectEulerSolutions.calculateFactorialDigitSum = function (n) {
    var factorial = function (n) {
        var factorial = 1n;
        while (n > 0n) {
            factorial *= n;
            n--;
        }
        return factorial;
    } (n);

    //console.log(factorial);

    var sumOfDigits = 0n;

    while (factorial > 0n) {
        sumOfDigits += factorial % 10n;
        factorial = (factorial - (factorial % 10n)) / 10n;
    }

    alert("Task 'Factorial digit sum' https://projecteuler.net/problem=20.\n\nAnswer: " + sumOfDigits);

    return sumOfDigits;
}

ProjectEulerSolutions.calculateSumOfMultiplesUpTo(1000, [3, 5]);
ProjectEulerSolutions.calculateSumOfEvenFibonacciNumbersUpTo(4000000);
ProjectEulerSolutions.findLargestPrimeFactorOfNumber(600851475143);
ProjectEulerSolutions.findLargestPalindromeProduct();
ProjectEulerSolutions.findSmallestMultiple(20);
ProjectEulerSolutions.findDifferenceOfSquareOfSumAndSumOfSquares(100);
ProjectEulerSolutions.findPrimeNumberAtPosition(10001);
ProjectEulerSolutions.findLargestProductInSeries(
    "73167176531330624919225119674426574742355349194934" +
    "96983520312774506326239578318016984801869478851843" +
    "85861560789112949495459501737958331952853208805511" +
    "12540698747158523863050715693290963295227443043557" +
    "66896648950445244523161731856403098711121722383113" +
    "62229893423380308135336276614282806444486645238749" +
    "30358907296290491560440772390713810515859307960866" +
    "70172427121883998797908792274921901699720888093776" +
    "65727333001053367881220235421809751254540594752243" +
    "52584907711670556013604839586446706324415722155397" +
    "53697817977846174064955149290862569321978468622482" +
    "83972241375657056057490261407972968652414535100474" +
    "82166370484403199890008895243450658541227588666881" +
    "16427171479924442928230863465674813919123162824586" +
    "17866458359124566529476545682848912883142607690042" +
    "24219022671055626321111109370544217506941658960408" +
    "07198403850962455444362981230987879927244284909188" +
    "84580156166097919133875499200524063689912560717606" +
    "05886116467109405077541002256983155200055935729725" +
    "71636269561882670428252483600823257530420752963450",
    13);
ProjectEulerSolutions.findSpecialPythagoreanTriplet(1000);
ProjectEulerSolutions.findSumOfPrimesBelow(2000000);
ProjectEulerSolutions.largestProductInGrid(
    [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8,
        49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0,
        81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65,
        52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91,
        22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80,
        24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50,
        32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70,
        67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21,
        24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72,
        21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95,
        78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92,
        16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57,
        86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58,
        19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40,
        4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66,
        88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69,
        4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36,
        20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16,
        20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54,
        1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48],
    4)
ProjectEulerSolutions.findHighlyDivisibleTriangularNumber(500);
ProjectEulerSolutions.solveLargeSum(
    "37107287533902102798797998220837590246510135740250" +
    "46376937677490009712648124896970078050417018260538" +
    "74324986199524741059474233309513058123726617309629" +
    "91942213363574161572522430563301811072406154908250" +
    "23067588207539346171171980310421047513778063246676" +
    "89261670696623633820136378418383684178734361726757" +
    "28112879812849979408065481931592621691275889832738" +
    "44274228917432520321923589422876796487670272189318" +
    "47451445736001306439091167216856844588711603153276" +
    "70386486105843025439939619828917593665686757934951" +
    "62176457141856560629502157223196586755079324193331" +
    "64906352462741904929101432445813822663347944758178" +
    "92575867718337217661963751590579239728245598838407" +
    "58203565325359399008402633568948830189458628227828" +
    "80181199384826282014278194139940567587151170094390" +
    "35398664372827112653829987240784473053190104293586" +
    "86515506006295864861532075273371959191420517255829" +
    "71693888707715466499115593487603532921714970056938" +
    "54370070576826684624621495650076471787294438377604" +
    "53282654108756828443191190634694037855217779295145" +
    "36123272525000296071075082563815656710885258350721" +
    "45876576172410976447339110607218265236877223636045" +
    "17423706905851860660448207621209813287860733969412" +
    "81142660418086830619328460811191061556940512689692" +
    "51934325451728388641918047049293215058642563049483" +
    "62467221648435076201727918039944693004732956340691" +
    "15732444386908125794514089057706229429197107928209" +
    "55037687525678773091862540744969844508330393682126" +
    "18336384825330154686196124348767681297534375946515" +
    "80386287592878490201521685554828717201219257766954" +
    "78182833757993103614740356856449095527097864797581" +
    "16726320100436897842553539920931837441497806860984" +
    "48403098129077791799088218795327364475675590848030" +
    "87086987551392711854517078544161852424320693150332" +
    "59959406895756536782107074926966537676326235447210" +
    "69793950679652694742597709739166693763042633987085" +
    "41052684708299085211399427365734116182760315001271" +
    "65378607361501080857009149939512557028198746004375" +
    "35829035317434717326932123578154982629742552737307" +
    "94953759765105305946966067683156574377167401875275" +
    "88902802571733229619176668713819931811048770190271" +
    "25267680276078003013678680992525463401061632866526" +
    "36270218540497705585629946580636237993140746255962" +
    "24074486908231174977792365466257246923322810917141" +
    "91430288197103288597806669760892938638285025333403" +
    "34413065578016127815921815005561868836468420090470" +
    "23053081172816430487623791969842487255036638784583" +
    "11487696932154902810424020138335124462181441773470" +
    "63783299490636259666498587618221225225512486764533" +
    "67720186971698544312419572409913959008952310058822" +
    "95548255300263520781532296796249481641953868218774" +
    "76085327132285723110424803456124867697064507995236" +
    "37774242535411291684276865538926205024910326572967" +
    "23701913275725675285653248258265463092207058596522" +
    "29798860272258331913126375147341994889534765745501" +
    "18495701454879288984856827726077713721403798879715" +
    "38298203783031473527721580348144513491373226651381" +
    "34829543829199918180278916522431027392251122869539" +
    "40957953066405232632538044100059654939159879593635" +
    "29746152185502371307642255121183693803580388584903" +
    "41698116222072977186158236678424689157993532961922" +
    "62467957194401269043877107275048102390895523597457" +
    "23189706772547915061505504953922979530901129967519" +
    "86188088225875314529584099251203829009407770775672" +
    "11306739708304724483816533873502340845647058077308" +
    "82959174767140363198008187129011875491310547126581" +
    "97623331044818386269515456334926366572897563400500" +
    "42846280183517070527831839425882145521227251250327" +
    "55121603546981200581762165212827652751691296897789" +
    "32238195734329339946437501907836945765883352399886" +
    "75506164965184775180738168837861091527357929701337" +
    "62177842752192623401942399639168044983993173312731" +
    "32924185707147349566916674687634660915035914677504" +
    "99518671430235219628894890102423325116913619626622" +
    "73267460800591547471830798392868535206946944540724" +
    "76841822524674417161514036427982273348055556214818" +
    "97142617910342598647204516893989422179826088076852" +
    "87783646182799346313767754307809363333018982642090" +
    "10848802521674670883215120185883543223812876952786" +
    "71329612474782464538636993009049310363619763878039" +
    "62184073572399794223406235393808339651327408011116" +
    "66627891981488087797941876876144230030984490851411" +
    "60661826293682836764744779239180335110989069790714" +
    "85786944089552990653640447425576083659976645795096" +
    "66024396409905389607120198219976047599490197230297" +
    "64913982680032973156037120041377903785566085089252" +
    "16730939319872750275468906903707539413042652315011" +
    "94809377245048795150954100921645863754710598436791" +
    "78639167021187492431995700641917969777599028300699" +
    "15368713711936614952811305876380278410754449733078" +
    "40789923115535562561142322423255033685442488917353" +
    "44889911501440648020369068063960672322193204149535" +
    "41503128880339536053299340368006977710650566631954" +
    "81234880673210146739058568557934581403627822703280" +
    "82616570773948327592232845941706525094512325230608" +
    "22918802058777319719839450180888072429661980811197" +
    "77158542502016545090413245809786882778948721859617" +
    "72107838435069186155435662884062257473692284509516" +
    "20849603980134001723930671666823555245252804609722" +
    "53503534226472524250874054075591789781264330331690",
    100);
ProjectEulerSolutions.solveLongestCollatzSequence(1000000);
ProjectEulerSolutions.solveLatticePaths(20);
ProjectEulerSolutions.solvePowerDigitSum(1000n);
ProjectEulerSolutions.solveNumberLetterCounts();
ProjectEulerSolutions.solveMaximumPathSum([
    75,
    95, 64,
    17, 47, 82,
    18, 35, 87, 10,
    20, 4, 82, 47, 65,
    19, 1, 23, 75, 3, 34,
    88, 2, 77, 73, 7, 63, 67,
    99, 65, 4, 28, 6, 16, 70, 92,
    41, 41, 26, 56, 83, 40, 80, 70, 33,
    41, 48, 72, 33, 47, 32, 37, 16, 94, 29,
    53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14,
    70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57,
    91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48,
    63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31,
    4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]);
ProjectEulerSolutions.countSundays(1901, 2000);
ProjectEulerSolutions.calculateFactorialDigitSum(100n);