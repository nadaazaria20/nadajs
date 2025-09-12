"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [dark, setDark] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-200 dark:bg-gray-900 dark:text-white shadow">
      <h1 className="font-bold text-lg">My Portfolio</h1>
      <ul className="flex gap-6">
        <li><Link href="/">HOME</Link></li>
        <li><Link href="/about">ABOUT</Link></li>
        <li><Link href="/projects">PROJECTS</Link></li>
        <li><Link href="/skills">SKILLS</Link></li>
        <li><Link href="/contact">CONTACT</Link></li>
      </ul>
      <button
        onClick={() => {
          document.documentElement.classList.toggle("dark");
          setDark(!dark);
        }}
        className="px-3 py-1 bg-gray-800 text-white rounded-lg"
      >
        {dark ? "☀️" : "🌙"}
      </button>
    </nav>
  );
};

export default Navbar;
