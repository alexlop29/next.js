"use client";

import { useRouter } from "next/router"; 
const page = () => {
  const router = useRouter();

  return (
    <>
      <div>Documents</div>
      <button type="button" onClick={() => router.push("/dashboard")}>
        Dashboard
      </button>
      <button type="button" onClick={() => router.push("/analytics")}>
        Analytics
      </button>
    </>
  );
};

export default page;
