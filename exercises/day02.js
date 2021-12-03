// AdventOfCode day 2

const input = require('../inputs/day02.input').input;

/**
    A submarine starts in pos [0,0].
    forward 5 adds the submarine 5 the horizontal position
    down 5 adds the submarine 5 depth positions
    up 5 removes the submarine 5 depth positions
*/
function getMultiplicationOfFinalPositionOfSubmarine(listOfMovements) {
    let pos = [0, 0];
    for (let i = 0; i < listOfMovements.length; i++) {
        const movement = listOfMovements[i].split(' ');
        if (movement[0] === 'forward') {
            pos[0] += parseInt(movement[1]);
        } else if (movement[0] === 'down') {
            pos[1] += parseInt(movement[1]);
        } else if (movement[0] === 'up') {
            pos[1] -= parseInt(movement[1]);
        }
    }
    return pos[0] * pos[1];
}
console.log('Solution of day 02, first exercise is: ' + getMultiplicationOfFinalPositionOfSubmarine(input));

/**
    A submarine starts in pos [0,0], aim = 0.
    forward 5 adds 5 to the horizontal position and if aim !== 0, adds 5 * aim to the depth position
    down 5 adds 5 to aim
    up 5 removes 5 from aim
*/
function getMultiplicationOfFinalPositionOfSubmarine2(listOfMovements) {
    let pos = [0, 0];
    let aim = 0;
    for (let i = 0; i < listOfMovements.length; i++) {
        const movement = listOfMovements[i].split(' ');
        if (movement[0] === 'forward') {
            pos[0] += parseInt(movement[1]);
            if (aim !== 0) {
                pos[1] += parseInt(movement[1]) * aim;
            }
        } else if (movement[0] === 'down') {
            aim += parseInt(movement[1]);
        } else if (movement[0] === 'up') {
            aim -= parseInt(movement[1]);
        }
    }
    return pos[0] * pos[1];
}
console.log('Solution of day 02, second exercise is: ' + getMultiplicationOfFinalPositionOfSubmarine2(input));

exports.getMultiplicationOfFinalPositionOfSubmarine = getMultiplicationOfFinalPositionOfSubmarine;
exports.getMultiplicationOfFinalPositionOfSubmarine2 = getMultiplicationOfFinalPositionOfSubmarine2;
