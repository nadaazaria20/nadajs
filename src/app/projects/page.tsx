"use client";

import Image from "next/image";
import { useState } from "react";

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
}

const projekuh: Project[] = [
  {
    id: 1,
    name: "TUGAS SENIBUDAYA",
    description: "Tugas mapel senibudaya dibuat menggunakan canva",
    image: "/sb.jpg",
    category: "design"
  },
  {
    id: 2,
    name: "TUGAS PPKN",
    description: "Tugas membuat poster ppkn dan dibuat menggunakan canva",
    image: "/pkn.jpg",
    category: "design"
  },
  {
    id: 3,
    name: "POSTER VOELTURA",
    description: "Poster yang didesain menggunakan canva.",
    image: "/karya1.jpg",
    category: "design"
  },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen relative overflow-hidden pt-20">
      {/* Background dengan wallpaper.jpg */}
      <div className="absolute inset-0">
        <Image
          src="/wallpaper.jpg"
          alt="Background Projects"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-purple-900/50 to-blue-900/40"></div>
        {/* Noise Texture */}
        <div className="absolute inset-0 bg-noise opacity-5"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold  text-pink-300 mb-4 drop-shadow-2xl">
            === MY PROJECTS ===
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Kumpulan project yang telah saya buat selama belajar di SMKN 8 Malang
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projekuh.map((project) => (
            <div
              key={project.id}
              className="group bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border-2 border-white/20 hover:border-white/40 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/90 text-gray-900 px-4 py-2 rounded-full font-semibold">
                    View Project
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-pink-300 transition-colors">
                  {project.name}
                </h3>
                <p className="text-white/80 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <span className="inline-block px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm font-medium border border-pink-500/30">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {projekuh.length === 0 && (
          <div className="text-center py-16">
            <div className="animate-bounce w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
              <span className="text-2xl">📁</span>
            </div>
            <h3 className="text-xl font-semibold text-white/80">
              Belum ada projects
            </h3>
          </div>
        )}
      </div>

      {/* Modal untuk View Project */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={closeModal}
        >
          <div 
            className="bg-white/10 backdrop-blur-md rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <Image
                src={selectedProject.image}
                alt={selectedProject.name}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full p-2 hover:bg-white/30 transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-white">
                {selectedProject.name}
              </h3>
              <p className="text-white/80 mb-4">
                {selectedProject.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm font-medium border border-pink-500/30">
                  {selectedProject.category}
                </span>
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-lg hover:bg-white/30 transition-colors"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}