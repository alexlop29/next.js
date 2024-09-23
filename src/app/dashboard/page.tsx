import Link from "next/link";

const page = () => {

  const handleError = () => {
    throw new Error("test");
  };

  return (
    <>
      <div>Dashboard</div>
      <Link href="/analytics">Analytics</Link>
      <button type="button" onClick={handleError}>Click to Throw Error</button>
    </>
  );
};

export default page;
