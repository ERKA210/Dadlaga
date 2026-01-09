import Navbar from "@/components/navbar";
import Page1  from "@/components/page1";
import Page3 from "@/components/page3";

interface User {
  id: string | number;
  name: string;
}

async function getUsers(): Promise<User[]> {
  const res = await fetch("http://localhost:3001/users", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
}

export default async function Home() {
  const users = await getUsers();

  return (
    <>
      <Navbar/>
      <Page1/>
      <Page3/>
    </>
  );
}