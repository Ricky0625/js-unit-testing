// import the function from the file
const sum = require("./sum")

// The jest-tutorial/README.md has the commented version of this piece of code
describe("Sum function testing", () => {
    it("should add 1 + 2 to equal 3", () => {
        const result = sum(1, 2);
        expect(result).toBe(3);
    })

    it("object assignment", () => {
        const obj = {};
        // expect(obj).toBe({});
        expect(obj).toEqual({});
    })
})

describe("truthy or falsy", () => {
    it("null", () => {
        const n = null;
        // expect(n).toBeFalsy();
        // expect(n).not.toBeTruthy();
        expect(n).toBeNull();
    })
})

describe("numbers", () => {
    it("two plus two", () => {
        const value = 2 + 2;
        expect(value).toBe(4);
        expect(value).toBeGreaterThan(3);
        expect(value).toBeGreaterThanOrEqual(4);
        expect(value).toBeLessThan(7);
        expect(value).toBeLessThanOrEqual(4);
    })

    it("adding floats", () => {
        const value = 0.1 + 0.2;
        expect(value).toBeCloseTo(0.3);
        expect(value).toBeCloseTo(0.299999999999999);
    })
})

describe("strings", () => {
    it("there is no I in team", () => {
        expect("team").not.toMatch(/I/); // regular expression
    })
})

describe("arrays", () => {
    const list = [
        'diapers', 'klenex', 'trash bags', 'paper towels', 'milk'
    ]
    expect(list).toContain('milk');
})

function compileAndriodCode() {
    throw new Error("you are using the wrong JDK");
}

describe("exceptions", () => {
    // check if something can really throw an Error
    it("compiling andriod goes as expected", () => {
        expect(() => compileAndriodCode()).toThrow(Error)
        expect(() => compileAndriodCode()).toThrow("you are using the wrong JDK")
    })
})
