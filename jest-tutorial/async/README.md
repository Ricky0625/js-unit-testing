# Test asynchronous code

## Table of contents

- [Test asynchronous code](#test-asynchronous-code)
  - [Table of contents](#table-of-contents)
    - [Get started](#get-started)
    - [Example](#example)

### Get started

Testing asynchronous in Jest is actually easy. As long as you know how to work with `Promises`. It shouldn't be a big deal.

For demonstration purpose, I will use a library called, `axios`, which is use to make HTTP requests from the browser.

To install `axios`, run:

```bash
npm install axios
```

Tests: `async.test.js`

Code: `async.js`

### Example

```js
const fetchData = require("./async");

describe("Testing in Asynchronous", () => {
    it("should return correct todo", () => {
        // can use .then like how we handle promises
        // but this is not that clean
        const todo = fetchData(1).then(todo => {
            expect(todo.id).toBe(1);
        });
    })

    // this is better
    // 1. change the callback funtion into a async function
    // 2. use await to wait for the data
    it("should return correct todo", async () => {
        const todo = await fetchData(1);
        expect(todo.id).toBe(1);
    })
})
```

The reason why the second method is better is because you don't have to wrap the `expect()` inside a function, which make it cleaner. Also, it's better to read.
