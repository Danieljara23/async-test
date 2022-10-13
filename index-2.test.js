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
    return getTodoList("success").then((data)=> {
      expect(data).toStrictEqual(mockedTodoList);
    })
  });
});
