import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <ul>
        <h3 className="text-xl">Libraries</h3>
        <li className="flex items-center">
          <Link href="https://daisyui.com/docs/install/">Daisy UI</Link>
        </li>
      </ul>
    </>
  );
};

export default page;
