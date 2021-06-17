function showMessage() {
    alert( 'Hello, world!' )
    alert( 'Hello, world! Again.' )
}

/**
 * Returns the sum of the numbers up to the passed maximum that are dividable by the passed dividers.
 *
 * @param {number} max The maximum number to count up to.
 * @param {Array.<number>} dividers An array of dividers.
 * @return {number} The sum of the numbers that are dividable by the dividers.
 */
function calculateSumOfMultiplesUpTo(max, dividers) {
    let sum = 0

    for (let i = 0; i < max; i++) {
        for (let j = 0; j < dividers.length; j++) {
            if (i % dividers[j] === 0) {
                sum += i
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

showMessage();
calculateSumOfMultiplesUpTo(1000, [3, 5]);