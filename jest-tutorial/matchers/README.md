# Test synchronous code

## Table of contents

- [Test synchronous code](#test-synchronous-code)
  - [Table of contents](#table-of-contents)
    - [Get started](#get-started)
    - [Matcher functions](#matcher-functions)
      - [`.toBe()` vs `.toEqual()`](#tobe-vs-toequal)
      - [Truthy and Falsy](#truthy-and-falsy)
      - [Numbers](#numbers)
      - [Strings](#strings)
      - [Arrays](#arrays)
      - [Async](#async)


### Get started

To create test using `Jest`, create a file with the extension: `.test.js`. For example, I have a function in `sum.js` which I want to test. To test it, I create a file named, `sum.test.js`.

Now, to test the function, we have to write a **test block**. Tests have to exist inside a test block. Specify a test block by doing the following:

```js
// it: test block
// First parameter is the name of the test is doing
// Second parameter is a callback, where our test case logic is going to live

// specify a test block
it("should add 1 + 2 to equal 3", () => {
    const result = sum(1, 2);
    // test if the result is equal to what we expected (through assertion)
    // expect is assertion funtion
    // toBe is a matcher function from Jest
    expect(result).toBe(3);
    // can have multiple unit test here, but not recommended
})
```

To group the test blocks together, we can use a `describe()` block like so:

```js
describe("", () => {
    // Test case 1
    it("should add 1 + 2 to equal 3", () => {
        const result = sum(1, 2);
        expect(result).toBe(3);
    })

    // Test case 2
    it("", () => {
        // blah blah blah
    })
})
```

A describe block is **not a test case**, it just help us to group tests together.

To run the test, in `package.json`, under the `script` section, change the value of `"test"` to `"jest"`. After that run:

```bash
npm
```

### Matcher functions

The matcher function here does not cover anything. It's best to read the docs to see all the matcher functions.

- [Jest `expect` API](https://jestjs.io/docs/expect)

| Matcher function | Description |
| :--- | :--- |
| `.not` | Expect the opposite |
| `.toBe(x)` | Expect a value to be x |
| `.toEqual(x)` | Expect the value to be equal to x |
| `.toBeTruthy(x)` | Expect the value to be truthy |
| `.toBeFalsy(x)` | Expect the value to be falsy |
| `.toBeNull(x)` | Expect the value to be null |
| `.toBeUndefined(x)` | Expect the value to be null |
| `.toBeGreaterThan(x)` | Expect the value to be greater than x |
| `.toBeGreaterThanOrEqual(x)` | Expect the value to be greater or equal than x |
| `.toBeLessThan(x)` | Expect the value to be less than x |
| `.toBeLessThanOrEqual(x)` | Expect the value to be less or equal than x |
| `.toBeCloseTo(x)` | Expect the numeric value to be close to x |
| `.toMatch(regex)` | Expect the string to match the regex specified |
| `.toContain(item)` | Expect an array to contain the item specified |
| `.toThrow(error)` | Expect something to throw the error specified |

#### `.toBe()` vs `.toEqual()`

`.toBe()` & `.toEqual()` seems like the same thing. But there are some cases where `.toEqual()` is better thatn `.toBe()`.

For example:

```js
it("object assignment", () => {
    const obj = {};
    // seems ok? we are checking if {} = {}, what could go wrong?
    expect(obj).toBe({});
    // unfortunately, this gives us failed
})
```

The test case failed. Why tho? This is actually related to the bizzareness of JS.

```js
console.log(3 === 3); // true
console.log("" === ""); // true
// when we do something on object or array, basically reference data type, things are not the same
console.log({} === {}); // false
console.log([] === []); // false
```

But what if we really just wanted to check if the content of an object is the same as the content of another object? We can use `.toEqual()`. This is the cases where we should use `.toEqual()` over `.toBe()`.

```js
it("object assignment", () => {
    const obj = {};
    expect(obj).toEqual({});
})
```

#### Truthy and Falsy

Example of truthy and falsy:

```js
if (true)
    console.log("this is truthy");
else
    console.log("this is falsy");
// out: "this is truthy"

if (false)
    console.log("this is truthy");
else
    console.log("this is falsy");
// out: "this is falsy"

if ("asdfasdgasdhah") // random string
    console.log("this is truthy");
else
    console.log("this is falsy");
// out: "this is truthy"

if ("") // empty string
    console.log("this is truthy");
else
    console.log("this is falsy");
// out: "this is falsy"

if (null)
    console.log("this is truthy");
else
    console.log("this is falsy");
// out: "this is falsy"

if (undefined)
    console.log("this is truthy");
else
    console.log("this is falsy");
// out: "this is falsy"

if (0)
    console.log("this is truthy");
else
    console.log("this is falsy");
// out: "this is falsy"
```

When writing test to check if the value is truthy or falsy, it's better to focus on the falsy part only.

#### Numbers

```js
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
```

#### Strings

```js
describe("strings", () => {
    it("there is no I in team", () => {
        expect("team").not.toMatch(/I/); // regular expression
    })
})
```

#### Arrays

```js
describe("arrays", () => {
    const list = [
        'diapers', 'klenex', 'trash bags', 'paper towels', 'milk'
    ]
    expect(list).toContain('milk');
})
```

#### Async


