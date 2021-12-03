const day02 = require('../exercises/day02');

const example = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2'];

test('getPositionOfTheSubmarine example should return 150', () => {
    expect(day02.getPositionOfTheSubmarine(example)).toBe(150);
});

test('getPositionOfTheSubmarineWithAiming example should return 900', () => {
    expect(day02.getPositionOfTheSubmarineWithAiming(example)).toBe(900);
});
