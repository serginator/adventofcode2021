const day04 = require('../exercises/day04');

const example = {
    numbers: [7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1],
    boards: [[22, 13, 17, 11, 0, 8, 2, 23, 4, 24, 21, 9, 14, 16, 7, 6, 10, 3, 18, 5, 1, 12, 20, 15, 19], [3, 15, 0, 2, 22, 9, 18, 13, 17, 5, 19, 8, 7, 25, 23, 20, 11, 10, 24, 4, 14, 21, 16, 12, 6], [14, 21, 17, 24, 4, 10, 16, 15, 9, 19, 18, 8, 23, 26, 20, 22, 11, 13, 6, 5, 2, 0, 12, 3, 7]]
};

const boardExample = [57, 12, 60, 96, 9, 3, 87, 63, 70, 9, 4, 32, 43, 67, 4, 9, 34, 5, 35, 8, 3, 40, 55, 29, 1];

test('getRowsFromBoard()', () => {
    const expected = [
        [57, 12, 60, 96, 9],
        [3, 87, 63, 70, 9],
        [4, 32, 43, 67, 4],
        [9, 34, 5, 35, 8],
        [3, 40, 55, 29, 1]
    ]
    expect(day04.getRowsFromBoard(boardExample)).toEqual(expected);
});
test('getRowsFromBoard(example)', () => {
    const expected = [
        [22, 13, 17, 11, 0],
        [8, 2, 23, 4, 24],
        [21, 9, 14, 16, 7],
        [6, 10, 3, 18, 5],
        [1, 12, 20, 15, 19]
    ]
    expect(day04.getRowsFromBoard(example.boards[0])).toEqual(expected);
});

test('getColumnsFromBoard()', () => {
    const expected = [
        [57, 3, 4, 9, 3],
        [12, 87, 32, 34, 40],
        [60, 63, 43, 5, 55],
        [96, 70, 67, 35, 29],
        [9, 9, 4, 8, 1]
    ]
    expect(day04.getColumnsFromBoard(boardExample)).toEqual(expected);
});
test('getColumnsFromBoard(example)', () => {
    const expected = [
        [22, 8, 21, 6, 1],
        [13, 2, 9, 10, 12],
        [17, 23, 14, 3, 20],
        [11, 4, 16, 18, 15],
        [0, 24, 7, 5, 19]
    ]
    expect(day04.getColumnsFromBoard(example.boards[0])).toEqual(expected);
});

test('checkIfThereIsAFullRow()', () => {
    const numbersToCheckOk = [1, 4, 32, 43, 67, 6, 32];
    const numbersToCheckNotOk = [32, 43, 67];

    expect(day04.checkIfThereIsAFullRow(boardExample, numbersToCheckOk)).toBe(2);
    expect(day04.checkIfThereIsAFullRow(boardExample, numbersToCheckNotOk)).toBe(false);
});
test('checkIfThereIsAFullRow(example)', () => {
    const numbersToCheckOk = [14, 21, 17, 24, 4];
    expect(day04.checkIfThereIsAFullRow(example.boards[2], numbersToCheckOk)).toBe(0);
});

test('checkIfThereIsAFullColumn()', () => {
    const numbersToCheckOk = [20, 60, 63, 43, 5, 55];
    const numbersToCheckNotOk = [10, 63, 43, 5, 55];

    expect(day04.checkIfThereIsAFullColumn(boardExample, numbersToCheckOk)).toBe(2);
    expect(day04.checkIfThereIsAFullColumn(boardExample, numbersToCheckNotOk)).toBe(false);
});

test('checkIfABoardIsDone()', () => {
    const numbersToCheckOk1 = [1, 4, 32, 43, 67, 6, 32];
    const numbersToCheckNotOk1 = [43, 67, 4];
    const numbersToCheckOk2 = [20, 60, 63, 43, 5, 55];
    const numbersToCheckNotOk2 = [10, 63, 43, 5, 55];

    expect(day04.checkIfABoardIsDone(boardExample, numbersToCheckOk1)).toMatchObject({isRow: true, row: "2"});
    expect(day04.checkIfABoardIsDone(boardExample, numbersToCheckNotOk1)).toBe(false);
    expect(day04.checkIfABoardIsDone(boardExample, numbersToCheckOk2)).toMatchObject({isCol: true, col: "2"});
    expect(day04.checkIfABoardIsDone(boardExample, numbersToCheckNotOk2)).toBe(false);
});

test('checkIfABoardIsDone(example)' , () => {
    expect(day04.checkIfABoardIsDone(example.boards[2], example.numbers)).toMatchObject({isRow: true, row: "0"});
});

test('getWinningBoardAndFinalNumber()', () => {
    const expected = {
        isRow: undefined,
        isCol: true,
        row: undefined,
        col: "0",
        winningBoard: 0,
        finalNumber: 32
    }

    const input = {
        numbers: [1, 12, 3, 87, 32, 42, 34, 40, 10, 23, 31],
        boards: boardExample
    }

    expect(day04.getWinningBoardAndFinalNumber(input)).toMatchObject(expected);
});

test('getWinningBoardAndFinalNumber(example)', () => {
    const expected = {
        isRow: true,
        isCol: undefined,
        row: "0",
        col: undefined,
        winningBoard: 2,
        finalNumber: 24
    }

    expect(day04.getWinningBoardAndFinalNumber(example)).toMatchObject(expected);
});

test('getScore()', () => {
    const input = {
        numbers: [1, 12, 3, 87, 32, 42, 34, 40, 10, 23, 31],
        boards: [boardExample]
    }
    expect(day04.getScore(input)).toEqual(25040);
});

test('getScore(example)', () => {
    expect(day04.getScore(example)).toEqual(4512);
});
