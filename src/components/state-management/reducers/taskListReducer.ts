interface Task {
  id: number;
  title: string;
}

interface AddTaskAction {
  type: "add";
  task: Task;
}

interface DeleteTaskAction {
  type: "delete";
  id: number;
}

type TaskAction = AddTaskAction | DeleteTaskAction;

const taskListReducer = (tasks: Task[], action: TaskAction): Task[] => {
  if (action.type == "add") return [action.task, ...tasks];
  else if (action.type == "delete")
    return tasks.filter((t) => t.id != action.id);

  return tasks;
};

export default taskListReducer;
