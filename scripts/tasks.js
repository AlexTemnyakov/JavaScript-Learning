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
    var sum = 0

    for (var i = 0; i < max; i++) {
        for (var j = 0; j < dividers.length; j++) {
            if (i % dividers[j] === 0) {
                sum += i
                // Break, because we don't want to count the current number again.
                break;
            }
        }
    }

    var output = "The sum of multiples of "
    for (var i = 0; i < dividers.length; i++) {
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
    var sum = 0

    var f1 = 1
    var f2 = 1

    while (f1 + f2 < max) {
        var currentNumber = f1 + f2
        f1 = f2
        f2 = currentNumber
        //alert(currentNumber)
        if (currentNumber % 2 === 0) {
            sum += currentNumber
        }
    }

    var output = "The sum of the numbers in the Fibonacci sequence up to " + max + " is " + sum
    alert(output)

    return sum
}

/**
 * Returns sieve of Eratosthenes from the passed minimum number including it.
 *
 * @param {number} from The minimum number (including it).
 * @return {Array.<number>} The sieve of Eratosthenes from the passed minimum number.
 */
function getSieveOfEratosthenesUpTo(from) {
    var maxArrayLength = Math.pow(2, 32) - 1
    var sieveOfEratosthenes = new Array(maxArrayLength).fill(true);

    var min = Math.min(2, from)
    var max = min + maxArrayLength

    for (var i = min; i < maxArrayLength + min; i++) {
        if (sieveOfEratosthenes[i - min] === true) {
            for (var f = 0, j = i * i + f * i; j < max; f++, j = i * i + f * i) {
                sieveOfEratosthenes[j - min] = false
            }
        }
    }

    var output = ""
    for (var i = 0; i < max; i++) {
        if (sieveOfEratosthenes[i] === true) {
            output += i + ", "
        }
    }

    alert(output)

    alert("Here 2")

    return sieveOfEratosthenes
}

function findLargestPrimeFactorOfNumber(number) {
    alert("Here 0 " + number)
    var sieveOfEratosthenes = getSieveOfEratosthenesUpTo(Math.round((number / 2) + 1))

    for (var i = sieveOfEratosthenes.length - 1; i >= 0; i--) {
        if (sieveOfEratosthenes[i] === true) {
            if (number % i === 0) {
                var output = "The largest prime factor of " + number + " is " + i + "."
                alert(output)
                return i
            }
        }
    }

    alert("Error.")
    throw "Error trying to find a prime factor."
}

//showMessage();
//calculateSumOfMultiplesUpTo(1000, [3, 5]);
//calculateSumOfEvenFibonacciNumbersUpTo(4000000)
getSieveOfEratosthenesUpTo(0)
//findLargestPrimeFactorOfNumber(600851475143)