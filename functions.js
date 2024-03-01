function capitalize(str) {
    return str.toUpperCase();
}

function reverseString(str) {
    return str.split("").reverse("").join("");
}

class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    add() {
        return this.a + this.b;
    }

    subtract() {
        return this.a - this.b;
    }

    multiply() {
        return this.a * this.b;
    }

    divide() {
        return this.b !== 0 ? this.a / this.b : "You can' divide by 0";
    }
}

function ceasarCypher(str, shift) {
    const alphabet = {
        lowercase : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        uppercase : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    }
    
    let moduloShift = findModuloShift(shift);

    const strArr = str.split("");
    const resultArr = [];

    const lowercasePattern = /[a-z]/;
    const uppercasePattern = /[A-Z]/;

    strArr.forEach((char) => {
        if (lowercasePattern.test(char)) {
            let shiftedIndex = findShiftIndex(alphabet.lowercase, char, moduloShift)
            resultArr.push(alphabet.lowercase[shiftedIndex]);
        } else if (uppercasePattern.test(char)) {
            let shiftedIndex = findShiftIndex(alphabet.uppercase, char, moduloShift)
            resultArr.push(alphabet.uppercase[shiftedIndex]);
        } else {
            resultArr.push(char);
        }
    });

    return resultArr.join("");
  }

  function findShiftIndex(arr, char, mShift) {
    let index = arr.indexOf(char);
    let shiftedIndex = index + mShift;
    if (shiftedIndex < 0) {
        shiftedIndex += 26;
        return shiftedIndex;
    } else if (shiftedIndex > 25) {
        shiftedIndex -= 26;
        return shiftedIndex;
    } else {
        return shiftedIndex;
    }
  }

  function findModuloShift(shift) {
    if (shift > 25 || shift < -25) {
        return shift % 26;
    } else {
        return shift;
    }
  }

function analyzeArray(arr) {
    let rawLength = arr.length;
    // for calcs, we need to remove elements that are not numbers
    let netArr = arr.filter((element) => {
        return typeof element == "number";
    });
    let realLength = realLength > 0 ? netArr.length : "incorrect input";
    let sum = netArr.reduce((accu, cur) => {
            return accu += cur;
    },0);
    let average = realLength < 1 ? "incorrect input" : (sum / realLength);
    let min = netArr[0] ? Math.min(...netArr) : "incorrect input";
    let max = netArr[0] ? Math.max(...netArr) : "incorrect input";

    return {
        average : average,
        min : min,
        max : max,
        length : rawLength
    };
}

module.exports = { capitalize, reverseString, Calculator, ceasarCypher, analyzeArray};