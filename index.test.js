const { getTodoList } = require("./index.js");

const mockedTodoList = [
  {
    id: 1,
    title: "Make the bed",
    owner: "Daniel",
  },
  {
    id: 2,
    title: "Clean the desk",
    owner: "Daniel",
  },
];

describe("Index.js", () => {
  it("getItems should resolve returning a list of todoItems", () => {
    return expect(getTodoList("success")).resolves.toStrictEqual(
      mockedTodoList
    );
  });
  it("getItems should thrown an error when it gets rejected", () => {
    return expect(getTodoList()).rejects.toThrow(
      "We couldn't get your todo List"
    );
  });
});
