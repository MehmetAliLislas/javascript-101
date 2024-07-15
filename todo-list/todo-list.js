const todoList = [
  {
    name: "Test TODO 1",
    dueDate: "12-12-2024",
  },
  {
    name: "Test TODO 2",
    dueDate: "11-11-2024",
  },
];

function renderTodoList() {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-todo" onclick="
      todoList.splice(${i},1);
      renderTodoList(); 
    ">Delete</button>
   
    `;
    todoListHTML += html;
  }
  document.querySelector(".todo-list").innerHTML = todoListHTML;
}
function addTodo() {
  const inputElement = document.querySelector(".todo-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".due-date-input");
  const dueDate = dateInputElement.value;

  todoList.push({
    //  name: name,
    //  dueDate: dueDate
    name,
    dueDate,
  });
  console.log(todoList);
  inputElement.value = "";
  renderTodoList();
}
