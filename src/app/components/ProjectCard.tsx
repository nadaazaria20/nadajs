import Image from "next/image";

type ProjectCardProps = {
  name: string;
  description: string;
  github: string;
  demo: string;
  image: string;
};

export default function ProjectCard({ name, description, github, demo, image }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col md:flex-row gap-4 hover:shadow-2xl transition">
      <Image src={image} alt={name} width={180} height={120} className="rounded-lg object-cover" />
      <div className="flex flex-col justify-between">
        <h3 className="text-xl font-extrabold text-pink-700 mb-2">{name}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex space-x-4">
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline font-semibold">
            GitHub
          </a>
          <a href={demo} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline font-semibold">
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}