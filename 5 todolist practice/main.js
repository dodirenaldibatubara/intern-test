// build function to add todo list

// function add() {
//   // select elemet input todo
//   let inputTodo = document.getElementById("inputTodo");

//   // select element parent list
//   let list = document.getElementById("list");

//   // make new element
//   let newList = "<li> <span onclick = 'toggle(this)'> " + inputTodo.value + " </span> <span onclick='remove(this)'> [x] </span> </li>";

//   // insert new list ( element) to parent element
//   list.insertAdjacentHTML("afterbegin", newList);

//   // empty input after submit
//   inputTodo.value = "";
// }

// // make a function for cros out list
// function toggle(el) {
//   el.classList.toggle("line");
// }

// // make function to remove list
// function remove(el) {
//   el.parentElement.remove();
// }

// practice again

// make a function to add todo list

let add = () => {
  let inputTodo = document.getElementById("inputTodo");

  let list = document.getElementById("list");

  let newList = "<li> <span onclick= 'toggle(this)' >" + inputTodo.value + " </span> <span onclick='remove(this)'> [x]  </span> </li>";

  list.insertAdjacentHTML("afterbegin", newList);

  // empty input list

  inputTodo.value = "";
};

// make funtion to cross out list

function toggle(el) {
  el.classList.toggle("line");
}

// make funtion to remove list

function remove(el) {
  el.parentElement.remove();
}
