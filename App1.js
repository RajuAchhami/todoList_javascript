const toDoContainer = document.querySelector(".todoLists");
const todoValue = document.querySelector(".todoValue");
const Button = document.querySelector(".btn");
let toDoItem = [];
const toSentenceCase = (str) => {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

Button.addEventListener("click", (e) => {
  e.preventDefault();
  let toDoTakenValue = todoValue.value;
  todoValue.value = "";

  if (
    toDoTakenValue.trim() != "" &&
    !toDoItem.includes(toDoTakenValue.toUpperCase())
  ) {
    toDoItem.push(toDoTakenValue.toUpperCase());
    addToLocalStorage(toDoItem);
    let listTag = document.createElement("li");
    listTag.textContent = toSentenceCase(toDoTakenValue);
    listTag.insertAdjacentHTML(
      "beforeend",
      "<i id='icon' class='fa-solid fa-trash'></i>"
    );
    toDoContainer.append(listTag);
  }
});

toDoContainer.addEventListener("click", (e) => {
  const element = e.target;
  if (e.target.id === "icon") {
    removeToDo(element);
  } else {
    element.classList.toggle("done");
  }
});

function removeToDo(hello) {
  hello.parentNode.parentNode.removeChild(hello.parentNode);

  let newdodo = hello.parentNode.textContent.toUpperCase();
  let arryindex = toDoItem.indexOf(newdodo);

  toDoItem.splice(arryindex, 1);

  addToLocalStorage(toDoItem);
}

function addToLocalStorage(todoData) {
  localStorage.setItem("data", JSON.stringify(todoData));
}

const getTodoListFromLS = () => {
  return JSON.parse(localStorage.getItem("data")) || [];
};

const showTodoList = () => {
  toDoItem = getTodoListFromLS();
  toDoItem.forEach((element) => {
    let listTag = document.createElement("li");
    listTag.textContent = toSentenceCase(element);
    listTag.insertAdjacentHTML(
      "beforeend",
      "<i id='icon' class='fa-solid fa-trash'></i>"
    );
    toDoContainer.append(listTag);
  });
};

showTodoList();

{
  /* <i class="fa-solid fa-circle-check"></i>; */
}
