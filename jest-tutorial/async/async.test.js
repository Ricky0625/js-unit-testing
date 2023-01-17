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
