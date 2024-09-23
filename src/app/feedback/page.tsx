"use client";

import { useState, useCallback } from "react";

type Input = {
  name: string;
  email: string;
  message: string;
};

const page = () => {
  const [input, setInput] = useState<Input>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = {
        ...input,
        [e.target.name]: e.target.value,
      };
      setInput(value);
    },
    [input],
  );

  const handleSubmit = useCallback(() => {
    console.log(input);
  }, [input]);

  return (
    <form className="space-y-4">
      <div>
        <div> Name </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
        />
      </div>
      <div>
        <div> Email </div>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
      </div>
      <div>
        <div> Message </div>
        <input
          type="textarea"
          placeholder="Message"
          name="message"
          onChange={handleChange}
        />
      </div>
      <button
        type="button"
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {" "}
        Submit{" "}
      </button>
    </form>
  );
};

export default page;
