"use client";

import React, { useState } from "react";

// state
import { ProvidersStore } from "@/stores/Provider";

type Availability = {
  weekDay: string;
  startAt: string;
  endAt: string;
};

type Provider = {
  id: number | null;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  availabilities: Availability[];
};

const store = new ProvidersStore();

const page = () => {
  const [provider, setProvider] = useState<Provider>({
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    availabilities: [],
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(provider);
    store.addProfile(provider);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProvider({
      ...provider,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4 p-4">
      <div className="sm:col-span-1 bg-white p-4 rounded-lg text-black">
        <div>Provider Enrollment</div>
        <form onSubmit={handleSubmit}>
          <input
            className="border h-8 w-full text-black bg-white outline-none p-2"
            type="text"
            name="firstName"
            required
            placeholder="First Name"
            onChange={handleChange}
          />
          <input
            className="border h-8 w-full text-black bg-white outline-none p-2"
            type="text"
            name="lastName"
            required
            placeholder="Last Name"
            onChange={handleChange}
          />
          <input
            className="border h-8 w-full text-black bg-white outline-none p-2"
            type="text"
            name="email"
            required
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            className="border h-8 w-full text-black bg-white outline-none p-2"
            type="text"
            name="phone"
            required
            placeholder="Phone"
            onChange={handleChange}
          />
          <input
            className="border h-8 w-full text-black bg-white outline-none p-2"
            type="text"
            name="availabilities"
            required
            placeholder="Availabilities"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default page;
