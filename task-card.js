export function createTaskCard(task, lastStage) {
  const card = document.createElement("article");
  card.className = "task";
  card.dataset.taskId = task.id;

  const title = document.createElement("p");
  title.textContent = task.title;
  const actions = document.createElement("div");
  actions.className = "actions";

  const controls = [
    ["previous", "←", "Mover a la columna anterior", task.stage === 0],
    ["next", "→", "Mover a la columna siguiente", task.stage === lastStage],
    ["remove", "✕", "Eliminar tarea", false],
  ];
  for (const [action, symbol, label, disabled] of controls) {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.action = action;
    button.textContent = symbol;
    button.setAttribute("aria-label", label);
    button.disabled = disabled;
    actions.append(button);
  }
  card.append(title, actions);
  return card;
}
