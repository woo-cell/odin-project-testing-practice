const functions = require('./functions');


// add
test("add small numbers", () => {
    const calculator = new functions.Calculator(2, 2);
    const result = calculator.add();

    expect(result).toEqual(4);
});

test("add zero", () => {
    const calculator = new functions.Calculator(2, 0);
    const result = calculator.add();

    expect(result).toEqual(2);
});

test("add negative number", () => {
    const calculator = new functions.Calculator(-12, 2);
    const result = calculator.add();

    expect(result).toEqual(-10);
});

test("add big numbers", () => {
    const calculator = new functions.Calculator(27894563212687654, 87412354984352664);
    const result = calculator.add();
    
    expect(result).toBeCloseTo(115306918197040320);
});

// substract
test("substract small numbers", () => {
    const calculator = new functions.Calculator(2, 2);
    const result = calculator.subtract();

    expect(result).toEqual(0);
});

test("substract zero", () => {
    const calculator = new functions.Calculator(2, 0);
    const result = calculator.subtract();

    expect(result).toEqual(2);
});

test("substract negative number", () => {
    const calculator = new functions.Calculator(2, -12);
    const result = calculator.subtract();

    expect(result).toEqual(14);
});

test("substract big numbers", () => {
    const calculator = new functions.Calculator(27894563212687654, 87412354984352664);
    const result = calculator.subtract();
    
    expect(result).toBeCloseTo(-59517791771665016);
});

// multiply
test("multiply small numbers", () => {
    const calculator = new functions.Calculator(2, 2);
    const result = calculator.multiply();

    expect(result).toEqual(4);
});

test("multiply zero", () => {
    const calculator = new functions.Calculator(2, 0);
    const result = calculator.multiply();

    expect(result).toEqual(0);
});

test("multiply one", () => {
    const calculator = new functions.Calculator(29, 1);
    const result = calculator.multiply();

    expect(result).toEqual(29);
});

test("multiply negative number", () => {
    const calculator = new functions.Calculator(2, -12);
    const result = calculator.multiply();

    expect(result).toEqual(-24);
});

test("multiply big numbers", () => {
    const calculator = new functions.Calculator(27894563212687654, 87412354984352664);
    const result = calculator.multiply();
    
    expect(result).toBeCloseTo(2.4383294616809186e+33);
});

// divide
test("divide small numbers", () => {
    const calculator = new functions.Calculator(2, 2);
    const result = calculator.divide();

    expect(result).toBeCloseTo(1);
});

test("divide by zero", () => {
    const calculator = new functions.Calculator(2, 0);
    const result = calculator.divide();

    expect(result).toBe("You can' divide by 0");
});

test("divide by one", () => {
    const calculator = new functions.Calculator(29, 1);
    const result = calculator.divide();

    expect(result).toBeCloseTo(29);
});

test("divide negative number", () => {
    const calculator = new functions.Calculator(2, -12);
    const result = calculator.divide();

    expect(result).toBeCloseTo(-0.16666666666666666);
});

test("divide big numbers", () => {
    const calculator = new functions.Calculator(27894563212687654, 87412354984352664);
    const result = calculator.divide();
    
    expect(result).toBeCloseTo(0.3191146516723059);
});