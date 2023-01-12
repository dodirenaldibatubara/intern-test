let list = [];

let inputTodo = document.getElementById("inputTodo");

let todoList = document.getElementById("todoList");

function add() {
  list.push(inputTodo.value);

  showList();
  inputTodo.value = "";
}

function showList() {
  todoList.innerHTML = "";
  list.forEach(function (l, i) {
    todoList.innerHTML += "<li>" + "<span onclick='toggle(this)'>" + l + "</span>" + "<span onclick='remove(" + i + ")'>   [x] </span>" + "</li>";
  });
}

function toggle(el) {
  el.classList.toggle("line");
}

function remove(i) {
  list.splice(i, 1);
  showList();
}
