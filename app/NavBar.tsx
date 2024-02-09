import Image from "next/image";
import logo from "/app/assets/favicon.ico";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex justify-between p-5 h-20 bg-slate-800 text-2xl text-neutral-50">
      <Image src={logo} alt="logo" className="w-10 mr-5" />
      <text>NavBar</text>
      <Link href="/components/DailyToDos">Daily To DO's</Link>
      <Link href="/components/log">Log</Link>
    </div>
  );
};

export default NavBar;
