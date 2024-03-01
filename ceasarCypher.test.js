const functions = require("./functions");
const ceasarCypher = functions.ceasarCypher;

test("Testing all lowercase", () => {
    expect(ceasarCypher("abcdefghijklmnopqrstuvwxyz", 3)).toBe("defghijklmnopqrstuvwxyzabc");
});

test("Testing all uppercase", () => {
    expect(ceasarCypher("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 3)).toBe("DEFGHIJKLMNOPQRSTUVWXYZABC");
});

test("Testing whitespaces", () => {
    expect(ceasarCypher("ABC DE   FGHIJKLMNOPQRSTUVWXYZ", 3)).toBe("DEF GH   IJKLMNOPQRSTUVWXYZABC");
});

test("Testing numbers and special chars", () => {
    expect(ceasarCypher("a22 B !% CDEFGHIJKLMNOPQRSTUVWXYZ", 3)).toBe("d22 E !% FGHIJKLMNOPQRSTUVWXYZABC");
});

test("Testing negative shift", () => {
    expect(ceasarCypher("ABCDEFGHIJKLMNOPQRSTUVWXYZ", -3)).toBe("XYZABCDEFGHIJKLMNOPQRSTUVW");
});

test("Testing great shift", () => {
    expect(ceasarCypher("abcdefghijklmnopqrstuvwxyz", 29)).toBe("defghijklmnopqrstuvwxyzabc");
});

test("Testing great negative shift", () => {
    expect(ceasarCypher("abcdefghijklmnopqrstuvwxyz", -27)).toBe("zabcdefghijklmnopqrstuvwxy");
});