const day03 = require('../exercises/day03');

const example = ['00100', '11110', '10110', '10111', '10101', '01111', '00111', '11100', '10000', '11001', '00010', '01010'];

test('getGammaRate', () => {
    expect(day03.getGammaRate(example)).toBe('10110');
});

test('getEpsilonRate', () => {
    expect(day03.getEpsilonRate(example)).toBe('01001');
});

test('getDecimalCode', () => {
    expect(day03.getDecimalCode(day03.getGammaRate(example))).toBe(22);
    expect(day03.getDecimalCode(day03.getEpsilonRate(example))).toBe(9);
});

test('getPowerConsumption', () => {
    expect(day03.getPowerConsumption(example)).toBe(198);
});

test('getOxygenGeneratorRating', () => {
    expect(day03.getOxygenGeneratorRating(example)).toBe('10111');
})

test('getCO2ScrubberRating', () => {
    expect(day03.getCO2ScrubberRating(example)).toBe('01010');
})

test('getLifeSupportRating', () => {
    expect(day03.getLifeSupportRating(example)).toBe(230);
});
