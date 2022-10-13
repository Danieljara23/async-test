const todoList = [
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

const getTodoList = (status = "") => {
  return new Promise((resolve, reject) => {
    if (status === "success") {
      setTimeout(() => {
        resolve(todoList);
      }, 500);
    } else {
      setTimeout(() => {
        reject(new Error("We couldn't get your todo List"));
      }, 500);
    }
  });
};

module.exports = {
  getTodoList,
};
