import Image from "next/image";
import Link from "next/link";

export default function HOME() {
  return (
    <section className="home-profile">
      <Image
        src="/hinada.jpg"
        alt="Foto Profil QOTHRUNNADA BELLA AZARIA"
        width={200}
        height={200}
        priority
      />
      <h1 className="text-3xl font-bold no-underline">QOTHRUNNADA BELLA AZARIA</h1>
      <p className="text-3xl font-bold no-underline">Web Developer | UI/UX Enthusiast</p>
      <div className="home-buttons">
        <Link href="/about" className="btn">
          About
        </Link>
        <Link href="/projects" className="btn">
          Projects
        </Link>
      </div>
    </section>
  );
}