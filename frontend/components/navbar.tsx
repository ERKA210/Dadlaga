import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-4">
      <Image
        className="dark:invert"
        src="/Logo.webp"
        alt="Logo"
        width={30}
        height={30}
      />

<nav className="flex gap-4">
  <Link className="hover:text-blue-700" href="/">Нүүр</Link>
  <Link className="hover:text-blue-700" href="/zaruud">Зарууд</Link>
  <Link className="hover:text-blue-700" href="/request">Миний хүсэлт</Link>
  <Link className="hover:text-blue-700" href="/profile">Профайл</Link>
  <Link
    href="/login"
    className="bg-blue-700 text-white px-3 py-1 rounded hover:bg-white hover:text-blue-700"
  >
    Нэвтрэх
  </Link>
</nav>
    </div>
  );
}
