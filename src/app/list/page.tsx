"use client";
import { useState } from "react";

const page = () => {
  const [list1, setList1] = useState<string[]>([]);
  const [list2, setList2] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const listName = e.target.name;
    const index = Number(e.target.id);
    const value = e.target.value;

    if (listName === "list1") {
      setList1((prevList1) =>
        prevList1.map((item, i) => (i === index ? value : item)),
      );
    } else {
      setList2((prevList2) =>
        prevList2.map((item, i) => (i === index ? value : item)),
      );
    }
  };

  const handleTransfer = (list: string, value: string) => {
    if (list === "list1") {
      setList1((prevList1) => prevList1.filter((val) => val !== value));
      setList2((prevList2) => [...prevList2, value]);
    } else {
      setList2((prevList2) => prevList2.filter((val) => val !== value));
      setList1((prevList1) => [...prevList1, value]);
    }
  };

  const handleNew = (list: string) => {
    if (list == "list1") {
      setList1([...list1, ""]);
    } else {
      setList2([...list2, ""]);
    }
  };

  return (
    <div className="flex flex-row">
      <div className="flew-col">
        <div>List 1</div>
        {list1.map((item, index) => (
          <div className="flex-col space-y-10">
            <input
              key={index}
              name="list1"
              id={String(index)}
              onChange={handleChange}
              value={item}
              className="text-black"
            />
            <button key={index} onClick={() => handleTransfer("list1", item)}>
              {" "}
              Switch{" "}
            </button>
          </div>
        ))}
        <button onClick={() => handleNew("list1")}>Add New</button>
      </div>

      <div className="flew-col">
        <div>List 2</div>
        {list2.map((item, index) => (
          <div className="flex-col space-y-10">
            <input
              key={index}
              name="list2"
              id={String(index)}
              onChange={handleChange}
              value={item}
              className="text-black"
            />
            <button key={index} onClick={() => handleTransfer("list2", item)}>
              {" "}
              Switch{" "}
            </button>
          </div>
        ))}
        <button onClick={() => handleNew("list2")}>Add New</button>
      </div>
    </div>
  );
};

export default page;
