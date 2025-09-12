"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <section
      className={`flex flex-col items-center text-center mt-12 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-navy text-cream"
      }`}
    >
      <Image
        src="/hinada.jpg"
        alt="Foto Profil QOTHRUNNADA BELLA AZARIA"
        width={200}
        height={200}
        priority
        className="rounded-full object-cover border-4 border-cream"
      />
      <h1 className="mt-4 text-3xl font-bold">QOTHRUNNADA BELLA AZARIA</h1>
      <p className="text-xl italic text-cream-light mt-2">
        Web Developer | UI/UX Enthusiast
      </p>

      <div className="flex gap-6 mt-6">
        <Link
          href="/about"
          className="bg-cream text-navy px-4 py-2 rounded font-semibold hover:bg-cream-light transition"
        >
          About
        </Link>
        <Link
          href="/projects"
          className="bg-cream text-navy px-4 py-2 rounded font-semibold hover:bg-cream-light transition"
        >
          Projects
        </Link>
      </div>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="mt-6 px-4 py-2 rounded bg-white text-navy font-semibold hover:bg-gray-200 transition"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </section>
  );
}
