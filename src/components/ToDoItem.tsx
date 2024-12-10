"use client"

import { useState } from "react";

type InputProps = {
    task: string;
};

const ToDoItem = ({task}: InputProps) => {
  const [ checked, setChecked ] = useState<boolean>(false);
  const [ value, setValue ] = useState<string>(task);
  const [ viewOnly, setViewOnly] = useState<boolean>(true);

  const handleChecked = () => {
    setChecked(!checked);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex flex-row gap-x-3 content-center">
        <input type="checkbox" onClick={handleChecked}/>
        {viewOnly && (
            <>
            <div>{value}</div>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => setViewOnly(false)}>edit</button>
            </>
        )}
        {!viewOnly && (
            <>
            <input className="text-black" type="string" onChange={handleChange}/>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => setViewOnly(true)}>save</button>
            </>
        )}
    </div>
  )
}

export { ToDoItem }
