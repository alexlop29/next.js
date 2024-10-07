type Task = {
  id: string;
  title: string;
  state: string;
};

type InputProps = {
  task: Task;
  onArchiveTask: () => void;
  onPinTask: () => void;
};

export const Task = ({ task, onArchiveTask, onPinTask }: InputProps) => {
  return (
    <div className="list-item">
      <label htmlFor={`title-${task.id}`} aria-label={task.title}>
        <input
          type="text"
          value={task.title}
          readOnly={true}
          name="title"
          id={`title-${task.id}`}
        />
      </label>
    </div>
  );
};
