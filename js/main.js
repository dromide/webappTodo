import ToDoList from "./todolist";
import ToDoItem from "./todoitem";

const toDoList = new ToDoList();

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
  // refresh the page
  refreshThePage();
};
