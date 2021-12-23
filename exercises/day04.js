// AdventOfCode day 4

const input = require('../inputs/day04.input').input;

// Method to get rows of an array of numbers knowing that each 5 numbers are a row
const getRowsFromBoard = (array) => {
    let rows = [];
    for (let i = 0; i < array.length; i += 5) {
        rows.push(array.slice(i, i + 5));
    }
    return rows;
}

// Method to get columns of an array of numbers knowing that each 5 numbers are a row
const getColumnsFromBoard = (array) => {
    let columns = [];
    for (let i = 0; i < 5; i++) {
        let column = [];
        for (let j = 0; j < array.length; j += 5) {
            column.push(array[j + i]);
        }
        columns.push(column);
    }
    return columns;
}

// Method to check if there is a full row in a board
function checkIfThereIsAFullRow(board, numbersToCheck) {
    const rows = getRowsFromBoard(board);
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].every(n => numbersToCheck.includes(n))) {
            return i;
        }
    }
    return false;
}

// Method to check if there is a full column in a board
function checkIfThereIsAFullColumn(board, numbersToCheck) {
    const cols = getColumnsFromBoard(board);
    for (let i = 0; i < cols.length; i++) {
        if (cols[i].every(n => numbersToCheck.includes(n))) {
            return i;
        }
    }
    return false;
}

// Method to check if a board is done
function checkIfABoardIsDone(board, numbersToCheck) {
    const row = checkIfThereIsAFullRow(board, numbersToCheck);
    const col = checkIfThereIsAFullColumn(board, numbersToCheck);
    if (row === 0 || row) {
        return {
            isRow: true,
            row: '' + row
        }
    } else if (col === 0 || col) {
        return {
            isCol: true,
            col: '' + col
        }
    }
    return false;
}

// Method to get the winning board and final number
function getWinningBoardAndFinalNumber(input) {
    for (let i = 4, n = input.numbers.length; i < n; i++) {
        const numbers = input.numbers.slice(0, i + 1);
        for (let j = 0, m = input.boards.length; j < m; j++) {
            const board = input.boards[j];
            const check = checkIfABoardIsDone(board, numbers);
            if (check) {
                return {
                    isRow: check.isRow,
                    isCol: check.isCol,
                    row: check.row,
                    col: check.col,
                    winningBoard: j,
                    finalNumber: numbers[numbers.length - 1]
                }
            }
        }
    }
}

function getScore(input) {
    const { isRow, isCol, row, col, winningBoard, finalNumber } = getWinningBoardAndFinalNumber(input);
    let sum = 0;
    input.numbers.splice(input.numbers.indexOf(finalNumber) + 1, input.numbers.length);
    const numbersToAvoid = input.numbers;
    if (isRow) {
        let rows = getRowsFromBoard(input.boards[winningBoard]);
        rows.splice(parseInt(row), 1);
        for (let i = 0; i < rows.length; i++) {
            for (let j = 0; j < numbersToAvoid.length; j++) {
                if (rows[i].includes(numbersToAvoid[j])) {
                    const index = rows[i].indexOf(numbersToAvoid[j]);
                    if (index !== -1) {
                        rows[i].splice(index, 1);
                    }
                }
            }
            sum += rows[i].reduce((a, b) => a + b);
        }
        return sum * finalNumber;
    } else if (isCol) {
        let cols = getColumnsFromBoard(input.boards[winningBoard])
        cols.splice(parseInt(col), 1);
        for (let i = 0; i < cols.length; i++) {
            for (let j = 0; j < numbersToAvoid.length; j++) {
                if (cols[i].includes(numbersToAvoid[j])) {
                    const index = cols[i].indexOf(numbersToAvoid[j]);
                    if (index !== -1) {
                        cols[i].splice(index, 1);
                    }
                }
            }
            sum += cols[i].reduce((a, b) => a + b);
        }
        return sum * finalNumber;
    } else {
        return 0;
    }
}


/*****************************************
 * Uncomment this to get the solutions.  *
 *****************************************/
// console.log('Solution of day 04, first exercise is: ' + JSON.stringify(getScore(input)));
// console.log('Solution of day 04, second exercise is: ' + getLifeSupportRating(input));

exports.getRowsFromBoard = getRowsFromBoard;
exports.getColumnsFromBoard = getColumnsFromBoard;
exports.checkIfThereIsAFullRow = checkIfThereIsAFullRow;
exports.checkIfThereIsAFullColumn = checkIfThereIsAFullColumn;
exports.checkIfABoardIsDone = checkIfABoardIsDone;
exports.getWinningBoardAndFinalNumber = getWinningBoardAndFinalNumber;
exports.getScore = getScore;
