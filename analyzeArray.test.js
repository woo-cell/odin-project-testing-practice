const functions = require("./functions");
const analyzeArray = functions.analyzeArray;

test('Test one element', () => {
    expect(analyzeArray([2])).toEqual({
        average : 2,
        min : 2,
        max : 2,
        length : 1
    });
});

test('Test multiple elements', () => {
    expect(analyzeArray([2, 4, 8, 6])).toEqual({
        average : 5,
        min : 2,
        max : 8,
        length : 4
    });
});

test('Test with one element not being a number', () => {
    expect(analyzeArray([2, "hello", 4, 8, 6])).toEqual({
        average : 5,
        min : 2,
        max : 8,
        length : 5
    });
});

test('Test with no element', () => {
    expect(analyzeArray([])).toEqual({
        average : "incorrect input",
        min : "incorrect input",
        max : "incorrect input",
        length : 0
    });
});

test('Test with no number element', () => {
    expect(analyzeArray(["s", "rew", "oi"])).toEqual({
        average : "incorrect input",
        min : "incorrect input",
        max : "incorrect input",
        length : "incorrect input"
    });
});