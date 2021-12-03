const day01 = require('../exercises/day01');

test('numberOfIncrementsFirstPart example should return 7', () => {
    const example = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    expect(day01.numberOfIncrements(example)).toBe(7);
})

test('numberOfIncrementsByGroupsOfThree example should return 5', () => {
    const example = [607, 618, 618, 617, 647, 716, 769, 792];
    expect(day01.numberOfIncrementsByGroupsOfThree(example)).toBe(5);
})
