// AdventOfCode day 2

const input = require('../inputs/day03.input').input;

/**
 * For each line in the input, get the most common bit on each position of the string
 *
 * @param {Array} arr Array of binary strings
 * @return {String} The binary string with the most common bit on each position
 */
function getGammaRate(arr) {
    let result = '';
    for (let i = 0; i < arr[0].length; i++) {
        let bit = arr.reduce((acc, cur) => {
            if (cur[i] === '1') {
                acc++;
            }
            return acc;
        }, 0);
        if (bit > arr.length / 2) {
            result += '1';
        }
        else {
            result += '0';
        }
    }
    return result;
}

/**
 * Given the result of the gamma rate, return it inverted
 *
 * @param {Array} arr Array of binary strings
 * @return {String} The binary string with the least common bit on each position
 */
function getEpsilonRate(arr) {
    let result = '';
    let gammaRate = getGammaRate(arr);
    for (let i = 0; i < gammaRate.length; i++) {
        if (gammaRate[i] === '1') {
            result += '0';
        } else {
            result += '1';
        }
    }
    return result;
}

/**
 * Convert a binary string to a decimal number
 *
 * @param {String} input The binary string
 * @return {Number} The decimal number
 */
function getDecimalCode(input) {
    return parseInt(input, 2);
}

/**
 * Get the multiplication between the decimal code of the gamma rate and the decimal code of the epsilon rate
 *
 * @param {*} arr Array of binary strings
 * @return {Number} The power consumption of the submarine
 */
function getPowerConsumption(arr) {
    return getDecimalCode(getGammaRate(arr)) * getDecimalCode(getEpsilonRate(arr));
}

/**
 * Determine the most common value (0 or 1) in the current bit position,
 * and keep only numbers with that bit in that position. If 0 and 1 are equally
 * common, keep values with a 1 in the position being considered.
 *
 * @param {*} arr Array of binary strings
 * @param {*} bitPos The current bit position
 * @return {String} The binary string
 */
function getOxygenGeneratorRating(arr, bitPos) {
    let result = [];
    bitPos = bitPos || 0;
    if (arr.length === 1) {
        return arr[0];
    }
    let countOf0 = 0;
    let countOf1 = 0;
    let resultPos = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i][bitPos] === '0' ? countOf0++ : countOf1++;
    }
    resultPos = countOf0 > countOf1 ? '0' : '1';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][bitPos] === resultPos) {
            result.push(arr[i]);
        }
    }
    bitPos++;
    return getOxygenGeneratorRating(result, bitPos);
}

/**
 * Determine the least common value (0 or 1) in the current bit position,
 * and keep only numbers with that bit in that position. If 0 and 1 are equally
 * common, keep values with a 0 in the position being considered.
 *
 * @param {*} arr Array of binary strings
 * @param {*} bitPos The current bit position
 * @return {String} The binary string
 */
function getCO2ScrubberRating(arr, bitPos) {
    let result = [];
    bitPos = bitPos || 0;
    if (arr.length === 1) {
        return arr[0];
    }
    let countOf0 = 0;
    let countOf1 = 0;
    let resultPos = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i][bitPos] === '0' ? countOf0++ : countOf1++;
    }
    resultPos = countOf0 <= countOf1 ? '0' : '1';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][bitPos] === resultPos) {
            result.push(arr[i]);
        }
    }
    bitPos++;
    return getCO2ScrubberRating(result, bitPos);
}

/**
 * Get the multiplication between the decimal code of the Oxygen Generator
 * rating and the decimal code of the CO2 Scrubber rating
 *
 * @param {*} arr Array of binary strings
 * @return {Number} The life support rating of the submarine
 */
function getLifeSupportRating(arr) {
    return getDecimalCode(getOxygenGeneratorRating(arr)) * getDecimalCode(getCO2ScrubberRating(arr));
}

/*****************************************
 * Uncomment this to get the solutions.  *
 *****************************************/
// console.log('Solution of day 03, first exercise is: ' + getPowerConsumption(input));
// console.log('Solution of day 03, second exercise is: ' + getLifeSupportRating(input));

exports.getGammaRate = getGammaRate;
exports.getEpsilonRate = getEpsilonRate;
exports.getDecimalCode = getDecimalCode;
exports.getPowerConsumption = getPowerConsumption;
exports.getOxygenGeneratorRating = getOxygenGeneratorRating;
exports.getCO2ScrubberRating = getCO2ScrubberRating;
exports.getLifeSupportRating = getLifeSupportRating;
