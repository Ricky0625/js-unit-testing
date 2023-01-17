# Setup and teardown

The chapter is about setting up things before we run a test and tearing down things after we run a test.

## Table of contents
    - [Setup and teardown](#setup-and-teardown)

### Example

Look at the example below:

```js
let animals = ['elephant', 'zebra', 'bear', 'tiger'];

describe("animals array", () => {
    it("should add animal to end of array", () => {
        animals.push("aligator");
        expect(animals[animals.length - 1]).toBe("aligator");
    })

    it("should add animal to beginning of array", () => {
        animals.unshift("monkey");
        expect(animals[0]).toBe("monkey");
    })

    // this test case failed because the test cases above modified the animals array
    it("should have initial length of 4", () => {
        expect(animals.length).toBe(4);
    })
})

// what we can do to prevent this happen probably is:
// re-initialize the animals array inside the test case
// like: animals = ['elephant', 'zebra', 'bear', 'tiger'];
// but this is not very DRY, we are repeating codes
```

In the test cases above, we realize that the third test case failed. This is because the `animals` array has been modified by the test cases before. To prevent this happen, what we can probably do is:

1. Reinitialize the `animal` array inside every test case:

    ```js
    it("should have initial length of 4", () => {
        animals = ['elephant', 'zebra', 'bear', 'tiger'];
        expect(animals.length).toBe(4);
    })
    ```

    Seems ok... It works... But, this is not very **DRY** because we are repeating codes in every test case. So this method is not recommended.

2. Rearrange the test case so that the order is in what's intended. Sounds ok, but imagine you have hundreds of test cases. Scary.

So, what should we do? Luckily Jest has a function that can overcome this issue prefectly. It's called, `beforeEach()`. What this is going to do is run what ever piece of code we put in it before every test case.

```js
let animals = ['elephant', 'zebra', 'bear', 'tiger'];

beforeEach(() => {
    animals = ['elephant', 'zebra', 'bear', 'tiger'];
})

describe("animals array", () => {
    it("should add animal to end of array", () => {
        animals.push("aligator");
        expect(animals[animals.length - 1]).toBe("aligator");
    })

    it("should add animal to beginning of array", () => {
        animals.unshift("monkey");
        expect(animals[0]).toBe("monkey");
    })

    it("should have initial length of 4", () => {
        expect(animals.length).toBe(4);
    })
})
```

Besides `beforeEach()`, we also have a function called, `afterEach()`, which is to teardown something after each test.

```js
let animals = ['elephant', 'zebra', 'bear', 'tiger'];

beforeEach(() => {
    animals = ['elephant', 'zebra', 'bear', 'tiger'];
})

afterEach(() => {
    animals = ['elephant', 'zebra', 'bear', 'tiger'];
})

describe("animals array", () => {
    it("should add animal to end of array", () => {
        animals.push("aligator");
        expect(animals[animals.length - 1]).toBe("aligator");
    })

    it("should add animal to beginning of array", () => {
        animals.unshift("monkey");
        expect(animals[0]).toBe("monkey");
    })

    it("should have initial length of 4", () => {
        expect(animals.length).toBe(4);
    })
})
```

What if we want to run something before test case but only run once? We can use another function called, `beforeAll()`. Similarly, we also have `afterAll()`.

```js
let animals = [];

beforeAll(() => {
    animals = ['elephant', 'zebra', 'bear', 'tiger'];
})

beforeEach(() => {
    animals = ['elephant', 'zebra', 'bear', 'tiger'];
})

afterEach(() => {
    animals = ['elephant', 'zebra', 'bear', 'tiger'];
})

afterAll(() => {
    animals = ['elephant', 'zebra', 'bear', 'tiger'];
})

describe("animals array", () => {
    it("should add animal to end of array", () => {
        animals.push("aligator");
        expect(animals[animals.length - 1]).toBe("aligator");
    })

    it("should add animal to beginning of array", () => {
        animals.unshift("monkey");
        expect(animals[0]).toBe("monkey");
    })

    it("should have initial length of 4", () => {
        expect(animals.length).toBe(4);
    })
})
```

If we add another test block below, from the testing result, it seems like the new test block will also run the `beforeEach`, `afterEach`, `beforeAll`, `afterAll` function. What if we don't want that?

The solution to it is to move all those function, or just one, into our test block.

```js
let animals = [];

beforeEach(() => {
    animals = ['elephant', 'zebra', 'bear', 'tiger'];
})

afterEach(() => {
    animals = ['elephant', 'zebra', 'bear', 'tiger'];
})

afterAll(() => {
    animals = ['elephant', 'zebra', 'bear', 'tiger'];
})

describe("animals array", () => {
    // like this
    beforeAll(() => {
        animals = ['elephant', 'zebra', 'bear', 'tiger'];
    })

    it("should add animal to end of array", () => {
        animals.push("aligator");
        expect(animals[animals.length - 1]).toBe("aligator");
    })

    it("should add animal to beginning of array", () => {
        animals.unshift("monkey");
        expect(animals[0]).toBe("monkey");
    })

    it("should have initial length of 4", () => {
        expect(animals.length).toBe(4);
    })
})
```
