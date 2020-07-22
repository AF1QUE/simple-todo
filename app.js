// All Query Selectors
const list = document.querySelector(".todo-list");
const addForm = document.querySelector(".add");
const endMsg = document.querySelector(".endMsg");

// Populate todo list function
function populateList(todo) {
  list.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>`;
}

// Remove a todo function
function removeTodo(target) {
  target.parentElement.remove();
}

// check list status
function checkListStatus() {
  if (list.hasChildNodes()) {
    document.querySelector("h5").style.display = "none";
  } else {
    document.querySelector("h5").style.display = "block !important";
  }
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
