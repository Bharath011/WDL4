// __tests__/todo.js
let todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();
/* eslint-disable no-undef */
describe("Todo list ka testing", () => {
  beforeAll(() => {
    // Seed the test data
    const today = new Date();
    const oneDay = 60 * 60 * 24 * 1000;
    [
      {
        title: "Meditation",
        completed: true,
        dueDate: new Date(today.getTime() - 2 * oneDay).toLocaleDateString(
          "en-CA"
        ),
      },
      {
        title: "Going to Gym",
        completed: false,
        dueDate: new Date().toLocaleDateString("en-CA"),
      },
      {
        title: "Breakfast",
        completed: false,
        dueDate: new Date(today.getTime() + 2 * oneDay).toLocaleDateString(
          "en-CA"
        ),
      },
    ].forEach(add);
  });
  test("Creating a new task on todo list", () => {
    expect(all.length).toEqual(3);

    add({
      title: "A new item",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toEqual(4);
  });

  test("Completed Tasks", () => {
    expect(all[1].completed).toEqual(false);
    markAsComplete(1);
    expect(all[1].completed).toEqual(true);
  });

  test("Tasks with time left", () => {
    expect(dueLater().length).toEqual(1);
  });

  test(" overdue tasks", () => {
    expect(overdue().length).toEqual(1);
  });

  test("Pending Tasks", () => {
    expect(dueToday().length).toEqual(2);
  });

 
});
