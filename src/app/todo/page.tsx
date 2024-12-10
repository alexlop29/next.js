import { ToDoItem } from "@/components/ToDoItem";

const page = () => {
  const tasks = ["pass this technical", "eat pizza", "join the team"];

  return (
    <>
        {tasks.map((task, index) => {
            return <ToDoItem key={index} task={task}/>
        })}
    </>
  )
}

export default page;
