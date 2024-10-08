// comps
import { TaskList } from "./TaskList";

// stories
import * as TaskStories from "./Task.stories";

/*
  Decorators are a way to provide arbitrary wrappers to stories.
  In this case we’re using a decorator key on the default export to add
  some margin around the rendered component.
*/
export default {
  component: TaskList,
  title: "TaskList",
  /*
      NOTE: (alopez) Newer versions of Storybook include
      import { StoryFn } from '@storybook/react';
      as a type definition
      https://stackoverflow.com/questions/66854096/what-type-is-storybook-story-from-example
    */
  decorators: [(story: any) => <div style={{ margin: "3rem" }}>{story()}</div>],
  tags: ["autodocs"],
  args: {
    ...TaskStories.ActionsData,
  },
};

export const Default = {
  args: {
    tasks: [
      { ...TaskStories.Default.args.task, id: "1", title: "Task 1" },
      { ...TaskStories.Default.args.task, id: "2", title: "Task 2" },
      { ...TaskStories.Default.args.task, id: "3", title: "Task 3" },
      { ...TaskStories.Default.args.task, id: "4", title: "Task 4" },
      { ...TaskStories.Default.args.task, id: "5", title: "Task 5" },
      { ...TaskStories.Default.args.task, id: "6", title: "Task 6" },
      { ...TaskStories.Default.args.task, id: "7", title: "Task 7" },
    ],
  },
};

export const WithPinnedTasks = {
  args: {
    tasks: [
      ...Default.args.tasks.slice(0, 6),
      { id: "7", title: "Task 7 (pinned)", state: "TASK_PINNED" },
    ],
  },
};

export const Loading = {
  args: {
    tasks: [],
    loading: true,
  },
};

export const Empty = {
  args: {
    ...Loading.args,
    loading: false,
  },
};
