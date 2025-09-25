import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-grow text-center px-4">
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={160}
          height={160}
          className="rounded-full mb-6"
        />
        <h1 className="text-4xl font-bold">Qothrunnada Bella Azaria</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Web Developer | UI/UX Enthusiast
        </p>
        <div className="mt-6 flex gap-4">
          <Link href="/about" className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink
        -700">
            About Me
          </Link>
          <Link href="/projects" className="px-6 py-2  bg-pink-600 text-white rounded-lg hover: bg-pink-600">
            Projects
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
