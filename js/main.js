import ToDoList from "./todolist";
import ToDoItem from "./todoitem";

const ToDoList = new ToDoList();

// Launch app
document.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  // Add listeners

  // Procedural

  // load list object
  refreshThePage();
};

const refreshThePage = () => {
  clearListDisplay();
  // renderList();
  // clearItemEntryField();
  // setFocusOnItemEntry();
};

const clearListDisplay = () => {
  const parentElement = document.getElementById("listItems");
  deleteContents(parentElement);
};
const deleteContents = (parentElement) => {
  let child = parentElement.lastElementChild;
  while (child) {
    parentElement.removeChild(child);
    child = parentElement.lastElementChild;
  }
};

const renderList = () => {};
