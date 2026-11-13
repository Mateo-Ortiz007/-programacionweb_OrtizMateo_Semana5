import { addTask, listTasks, moveTask, removeTask, stages } from "./task-store.js";
import { render } from "./board-view.js";

const form = document.querySelector("#task-form");
const input = document.querySelector("#task-name");
const board = document.querySelector("#board");

function refreshBoard() {
  render(board, stages, listTasks());
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!addTask(input.value)) return;
  form.reset();
  input.focus();
  refreshBoard();
});

board.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button || button.disabled) return;

  const id = Number(button.closest("[data-task-id]").dataset.taskId);
  if (button.dataset.action === "remove") removeTask(id);
  else moveTask(id, button.dataset.action === "previous" ? -1 : 1);
  refreshBoard();
});

refreshBoard();
