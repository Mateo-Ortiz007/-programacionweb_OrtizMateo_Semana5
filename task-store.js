export const stages = Object.freeze(["Pendiente", "En curso", "Hecho"]);

let tasks = [];
let nextId = 1;

export function addTask(value) {
  const title = value.trim();
  if (!title) return false;
  tasks = [...tasks, { id: nextId++, title, stage: 0 }];
  return true;
}

export function moveTask(id, step) {
  if (step !== -1 && step !== 1) return;
  tasks = tasks.map((task) => {
    if (task.id !== id) return task;
    const stage = task.stage + step;
    if (stage < 0 || stage >= stages.length) return task;
    return { ...task, stage };
  });
}

export function removeTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
}

export function listTasks() {
  return tasks.map((task) => ({ ...task }));
}
