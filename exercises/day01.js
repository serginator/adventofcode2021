// AdventOfCode day 1

const input = require('../inputs/day01.input').input;

// count if the difference between the number and the previous number is positive,
// and return the number of positives.
function numberOfIncrements(arr) {
    var count = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] > 0) {
            count++;
        }
    }
    return count;
}

/**
 * Having the following tags
 * 1. 607 A
 * 2. 618 A B
 * 3. 618 A B C
 * 4. 617   B C D
 * 5. 647     C D E
 * 6. 716       D E F
 * 7. 769         E F G
 * 8. 792           F G H
 *
 * if the sum of the three A's is lower than the sum of the three B's, it's an increment.
 * return the increments.
*/
function numberOfIncrementsByGroupsOfThree(arr) {
    var count = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i+2]) {
            if ((arr[i] + arr[i + 1] + arr[i + 2]) - (arr[i - 1] + arr[i] + arr[i + 1]) > 0) {
                count++;
            }
        }
    }
    return count;
};

/* istanbul ignore next */
/*****************************************
 * Uncomment this to get the solutions.  *
 *****************************************/
// console.log('Solution of day 01, first exercise is: ' + numberOfIncrements(input));
// console.log('Solution of day 01, second exercise is: ' + numberOfIncrementsByGroupsOfThree(input));

exports.numberOfIncrements = numberOfIncrements;
exports.numberOfIncrementsByGroupsOfThree = numberOfIncrementsByGroupsOfThree;
