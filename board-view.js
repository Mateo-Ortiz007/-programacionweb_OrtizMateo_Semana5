import { createTaskCard } from "./task-card.js";

export function render(board, stages, tasks) {
  const lanes = document.createDocumentFragment();

  for (const [index, name] of stages.entries()) {
    const lane = document.createElement("section");
    lane.className = "lane";
    const heading = document.createElement("h2");
    const items = tasks.filter((task) => task.stage === index);
    heading.textContent = name + " · " + items.length;
    lane.append(heading);

    for (const task of items) lane.append(createTaskCard(task, stages.length - 1));
    lanes.append(lane);
  }

  board.replaceChildren(lanes);
}
