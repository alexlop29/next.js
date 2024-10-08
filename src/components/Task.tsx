export type Task = {
  id: string;
  title: string;
  state: string;
};

type InputProps = {
  task: Task;
  onArchiveTask: (id: Task["id"]) => void;
  onPinTask: (id: Task["id"]) => void;
};

export const Task = ({ task, onArchiveTask, onPinTask }: InputProps) => {
  return (
    <div className="list-item">
      <label
        htmlFor={`archiveTask-${task.id}`}
        aria-lebl={`archiveTask-${task.id}`}
        className="checkbox"
      >
        <input
          type="checkbox"
          disabled={true}
          name="checked"
          id={`archiveTask-${task.id}`}
          checked={task.state === "TASK_ARCHIVED"}
        />
        <span
          className="checkbox-custom"
          onClick={() => onArchiveTask(task.id)}
        />
      </label>

      <label
        htmlFor={`title-${task.id}`}
        aria-label={task.title}
        className="title"
      >
        <input
          type="text"
          value={task.title}
          readOnly={true}
          name="title"
          id={`title-${task.id}`}
          placeholder="Input title"
        />
      </label>

      {task.state !== "TASK_ARCHIVED" && (
        <button
          className="pin-button"
          onClick={() => onPinTask(task.id)}
          id={`pintask-${task.id}`}
          aria-label={`pintask-${task.id}`}
          key={`pintask-${task.id}`}
        >
          <span className={`icon-star`} />
        </button>
      )}
    </div>
  );
};
