let list = [];

// select input
let inputTodo = document.getElementById("inputTodo");
// select ul parent of our list
let todoList = document.getElementById("todoList");

// LOCAL STORAGE

const KEY = "TODOLIST";

// END LOCAL STORAGE

// make function to add list
function add() {
  list.push({
    Text: inputTodo.value,
    finish: false,
  });
  inputTodo.value = "";
  saveData();
  showList();
}

function showList() {
  todoList.innerHTML = "";

  list.forEach(function (item, index) {
    todoList.innerHTML += `
      <li>
        <span class="${item.finish ? "line" : ""}" onclick='line(this, ${index})'>  ${item.Text} </span>
        <span onclick='remove(${index})'> [x] </span>
      </li>`;
  });
}

function line(el, index) {
  el.classList.toggle("line");
  list[index].finish = !list[index].finish;

  // if (list[index].finish == false) {
  //   list[index].finish = true;
  //   el.classList.add("line");
  // } else {
  //   list[index].finish = false;
  //   el.classList.remove("line");
  // }

  saveData();
  showList();

  // if(el.classList.value.includes("line")) {
  // }else {

  // }
  // console.log(el.classList.value);
  // console.log();

  // list.forEach(el){
  //   if (el.finish == false) {
  //     el.classList.add("line");
  //   }
  // }
  // if (el.finish == false) {
  //   el.classList.add("line");
  // } else {
  //   el.classList.remove("line");
  // }
}

function remove(i) {
  list.splice(i, 1);
  saveData();
  showList();
}

// FUNCTION LOCAL STORAGE

function saveData() {
  localStorage.setItem(KEY, JSON.stringify(list));
  getData();
  showList();
}

function getData() {
  list = JSON.parse(localStorage.getItem(KEY)) || [];

  // if (JSON.parse(localStorage.getItem(KEY))) {
  //   list = JSON.parse(localStorage.getItem(KEY));
  // }
}

getData();
showList();
