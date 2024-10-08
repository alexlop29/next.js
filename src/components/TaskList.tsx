import { Task } from "./Task";

type InputProps = {
  loading: boolean;
  tasks: Task[];
  onPinTask: (id: Task["id"]) => void;
  onArchiveTask: (id: Task["id"]) => void;
};

export const TaskList = ({
  loading,
  tasks,
  onPinTask,
  onArchiveTask,
}: InputProps) => {
  if (loading) {
    return <div className="list-items">loading</div>;
  }

  if (tasks.length === 0) {
    return <div className="list-items">empty</div>;
  }

  return (
    <div className="list-items">
      {tasks.map((task) => {
        return(
        <Task
          key={task.id}
          task={task}
          onArchiveTask={onArchiveTask}
          onPinTask={onPinTask}
        />
        );
      })}
    </div>
  );
};
