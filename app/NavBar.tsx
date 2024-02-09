import Image from "next/image";
import logo from "/app/assets/favicon.ico";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex justify-between p-5 h-20 bg-sky-900 text-2xl text-stone-300">
      <a href="/">
        <Image src={logo} alt="logo" className="w-10 mr-5" />
      </a>
      <Link href="/components/DailyToDos">Daily To DO's</Link>
      <Link href="/components/log">Log</Link>
      <Link href="/components/Lists">Lists</Link>
    </div>
  );
};

export default NavBar;
