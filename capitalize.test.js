const functions = require("./functions");


// tests for capitalize
test("Testing all lowercase", () => {
    expect(functions.capitalize("qwertyuiopasdfghjklzxcvbnm")).toBe("QWERTYUIOPASDFGHJKLZXCVBNM");
});

test("Testing all uppercase", () => {
    expect(functions.capitalize("QWERTYUIOPASDFGHJKLZXCVBNM")).toBe("QWERTYUIOPASDFGHJKLZXCVBNM");
});

test("Testing empty", () => {
    expect(functions.capitalize("")).toBe("");
});

test("Testing numeric string", () => {
    expect(functions.capitalize("123456789")).toBe("123456789");
});

test("Testing special characters", () => {
    expect(functions.capitalize("!\"#$%&'(=~|")).toBe("!\"#$%&'(=~|");
});

test("Testing whitespace", () => {
    expect(functions.capitalize("    Hello world!")).toBe("    HELLO WORLD!");
});

test("Testing foreign characters", () => {
    expect(functions.capitalize("Déjà vu - déjà vu, café, naïve, über, jalapeño")).toBe("DÉJÀ VU - DÉJÀ VU, CAFÉ, NAÏVE, ÜBER, JALAPEÑO");
});