const todoLists = document.querySelector(".todoLists");
const listValue = document.querySelector(".todoValue");
let todoListValue = [];

const getTodoListFromLS = () => {
  return JSON.parse(localStorage.getItem("todoYoutube")) || [];
};

const addToDoListLocalstorage = (todo) => {
  return localStorage.setItem("todoYoutube", JSON.stringify(todo));
};

const showTodoList = () => {
  todoListValue = getTodoListFromLS();
  todoListValue.forEach((element) => {
    const liElement = document.createElement("li");
    liElement.innerHTML = element;
    todoLists.append(liElement);
  });
};

const removeTodoList = (e) => {
  console.log(e.target.textContent);
  console.log(todoListValue);
  let currenttodo = e.target;
  let updatedtodolist = todoListValue.filter(
    (crr) => crr != currenttodo.textContent
  );
  console.log(updatedtodolist);
  addToDoListLocalstorage(updatedtodolist);
  currenttodo.remove();
  // e.target.
};

const addToDoList = (e) => {
  e.preventDefault();

  todoListValue = getTodoListFromLS();
  let newToDo = listValue.value.trim();
  listValue.value = "";

  if (newToDo.length !== 0 && !todoListValue.includes(newToDo)) {
    todoListValue.push(newToDo);
    addToDoListLocalstorage(todoListValue);
    // console.log(addToDoListLocalstorage(todoListValue));
    // console.log("first");

    const liElement = document.createElement("li");
    liElement.innerHTML = newToDo;
    todoLists.append(liElement);
  }
};

showTodoList();

document.querySelector(".btn").addEventListener("click", (e) => {
  addToDoList(e);
});

todoLists.addEventListener("click", (e) => removeTodoList(e));
