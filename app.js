// All Query Selectors
const list = document.querySelector(".todo-list");
const addForm = document.querySelector(".add");
const endMsg = document.querySelector(".endMsg");
const search = document.querySelector(".search input");

// Populate todo list function
function populateList(todo) {
  list.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>`;
}
("");
// Remove a todo function
function removeTodo(target) {
  target.parentElement.remove();
}

// check list status
function checkListStatus() {
  if (list.childElementCount === 0) {
    endMsg.style.display = "block";
  } else {
    endMsg.style.display = "none";
  }
}

// filter todo function
function filterTodo(term) {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLocaleLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
}

// Adding a todo event
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (addForm.add.value.trim().length > 0) {
    populateList(todo);
    addForm.reset();
    checkListStatus();
  }
});

// Removing a todo event
list.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("delete")) {
    removeTodo(e.target);
    checkListStatus();
  }
});

// Tasklist filtering
search.addEventListener("keyup", () => {
  let term = search.value.trim().toLowerCase();
  filterTodo(term);
});

// checkListStatus();
