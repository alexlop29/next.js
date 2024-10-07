import { fn } from "@storybook/test";

// comps
import { Task } from './Task';

/*
  The recommended way to write actions is to use the fn utility
  from @storybook/test to mock and spy args.
  https://storybook.js.org/docs/essentials/actions
*/

/*
  Actions help you verify interactions when building UI components in 
  isolation. Oftentimes you won't have access to the functions and
  state you have in context of the app. Use fn() to stub them in.
  https://storybook.js.org/tutorials/intro-to-storybook/react/en/simple-component/
*/
export const ActionsData = {
  onArchiveTask: fn(),
  onPinTask: fn(),
};

// /*
//   Storybook Autodocs is a powerful tool that can help you quickly 
//   generate comprehensive documentation for your UI components. 
//   https://storybook.js.org/docs/writing-docs/autodocs
// */

// /*
//   Tells Storybook about the component we are documenting and testing,
// */
export default {
  component: Task,
  title: 'Task',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};

export const Default = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED',
    },
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED',
    },
  },
};
