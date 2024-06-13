document.addEventListener("DOMContentLoaded", () => {
  const todoFrom = document.getElementById("todo-form");
  const todoList = document.getElementById("todo-list");
  todoFrom.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = document.getElementById("todo-input").value;
    addTodo(text);
  });
  /**
   *
   * @param {string} str // add a new string value to the list
   */
  function addTodo(str) {
    const li = document.createElement("li"); // add you own
    li.textContent = str;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = ".removeButton";

    removeButton.addEventListener("click", () => {
      todoList.removeChild(li);
    });
    li.appendChild(removeButton);
    todoList.appendChild(li);
  }
});
