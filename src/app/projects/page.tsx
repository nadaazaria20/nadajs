// src/app/projects/page.tsx
import Image from "next/image";

// Data langsung di dalam component
const projekuh = [
  {
    id: 1,
    name: "TUGAS SENIBUDAYA",
    description: "Tugas mapel senibudaya dibuat menggunakan canva",
    image: "/sb.jpg",
  },
  {
    id: 2,
    name: "TUGAS PPKN",
    description: "Tugas membuat poster ppkn dan dibuat menggunakan canva",
    image: "/pkn.jpg",
  },
  {
    id: 3,
    name: "POSTER VOELTURA",
    description: "Poster yang didesain menggunakan canva.",
    image: "/karya1.jpg",
  },
];

export default function ProjectsPage() {
  // Pastikan projekuh ada dan merupakan array
  if (!projekuh || !Array.isArray(projekuh)) {
    return (
      <section className="container mx-auto px-4 py-12">
        <div className="text-center text-red-500">
          Data projects tidak ditemukan
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-red-600">
       === MY PROJECT ===
      </h2>

      <div className="space-y-8">
        {projekuh.map((project) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row items-center bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition p-6 gap-6"
          >
            {/* Gambar */}
            <div className="w-full md:w-1/3">
              <Image
                src={project.image}
                alt={project.name}
                width={400}
                height={250}
                className="rounded-lg object-cover"
              />
            </div>

            {/* Keterangan */}
            <div className="w-full md:w-2/3">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}