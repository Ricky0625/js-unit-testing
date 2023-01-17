const axios = require("axios");

const fetchData = async id => {
    const results = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    return results.data;
}

const forEach = (items, callback) => {
    for (let i = 0; i < items.length; i++) {
        callback(items[i])
    }
}

// mocking
it("mock callback", () => {
    // create a Jest function
    const mockCalledback = jest.fn(x => 42 + x);

    forEach([0, 1], mockCalledback);

    // .mock: contains data that is associated to the mocked callback
    // .calls: the number of the function call, it's an array
    expect(mockCalledback.mock.calls.length).toBe(2);

    expect(mockCalledback.mock.calls[0][0]).toBe(0);

    expect(mockCalledback.mock.calls[1][0]).toBe(1);

    expect(mockCalledback.mock.results[0].value).toBe(42);
})

it("mock return", () => {
    const mock = jest.fn();

    mock.mockReturnValueOnce(true);

    const result = mock();

    expect(result).toBe(true);
})

it("mock axios", async () => {
    jest.spyOn(axios, "get").mockReturnValueOnce({
        data: {
            id: 1,
            todo: "Hello my friends"
        }
    });
    const results = await fetchData(1);

    expect(results.todo).toBe("Hello my friends");
})
