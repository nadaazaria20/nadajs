"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center text-center mt-12 bg-navy text-cream">
      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-cream shadow-lg shadow-black/70">
        <Image
          src="/kayy.jpg"
          alt="Foto Profil QOTHRUNNADA BELLA AZARIA"
          width={192}
          height={192}
          priority
          className="object-cover w-full h-full"
        />
      </div>

      <h1 className="mt-4 text-3xl font-bold">QOTHRUNNADA BELLA AZARIA</h1>
      <p className="text-xl italic text-cream-light mt-2">
        Web Developer | UI/UX Enthusiast
      </p>

      <div className="flex gap-6 mt-6">
        <Link
          href="/about"
          className="bg-pink-600 text-white px-4 py-2 rounded font-semibold hover:bg-pink-700 transition"
        >
          About
        </Link>
        <Link
          href="/projects"
          className="bg-pink-600 text-white px-4 py-2 rounded font-semibold hover:bg-pink-700 transition"
        >
          Projects
        </Link>
      </div>
    </section>
  );
}
