import projekuh from "../data/page";
import Image from "next/image";

export default function ProjectsPage() {
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
              <div className="flex gap-4">
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
