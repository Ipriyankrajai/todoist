import { TodoistApi } from "@doist/todoist-api-typescript";
import { TODOIST_API_KEY } from "./env";

const api = new TodoistApi(TODOIST_API_KEY!);

async function getProjects() {
  const projects = await api
    .getProjects()
    .then((projects) => projects)
    .catch((error) => console.log(error));
  return projects;
}

async function addNewTask(content: string, projectId?: string) {
  const task = await api
    .addTask({ content, projectId })
    .then((task) => task)
    .catch((error) => console.log(error));
  return task;
}

async function main() {
  const projects = await getProjects();
  const task = await addNewTask("KT- React App", projects?.[1].id);
  console.log(task);
}
main();
