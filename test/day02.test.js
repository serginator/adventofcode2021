const day02 = require('../exercises/day02');

const example = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2'];

test('getMultiplicationOfFinalPositionOfSubmarine example should return 150', () => {
    expect(day02.getMultiplicationOfFinalPositionOfSubmarine(example)).toBe(150);
});

test('getMultiplicationOfFinalPositionOfSubmarine2 example should return 900', () => {
    expect(day02.getMultiplicationOfFinalPositionOfSubmarine2(example)).toBe(900);
});
