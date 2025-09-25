"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/wallpaper.jpg" 
          alt="Background Portfolio"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-purple-900/40 to-blue-900/30"></div>
        <div className="absolute inset-0 bg-noise opacity-5"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 items-center justify-center min-h-screen">
        <div className="text-center px-4 w-full max-w-4xl mx-auto">
          
          {/* Profile Section */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-pulse -inset-4"></div>
              
              <div className="relative">
                <Image
                  src="/kayy.jpg"
                  alt="Profile Qothrunnada Bella Azaria"
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-white/80 shadow-2xl backdrop-blur-sm bg-white/10 transform group-hover:scale-110 transition-transform duration-500"
                  priority
                />
              </div>
              
              <div className="absolute -inset-2 rounded-full border-2 border-white/30 animate-spin-slow"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl leading-tight">
              Qothrunnada Bella Azaria
            </h1>
            
            <div className="flex justify-center">
              <p className="text-xl md:text-2xl text-white/90 font-light bg-black/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 inline-block">
                Web Developer | UI/UX Enthusiast
              </p>
            </div>
            
            <div className="flex justify-center">
              <p className="text-lg text-white/80 max-w-2xl leading-relaxed bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                Siswa SMKN 8 Malang • Jurusan Rekayasa Perangkat Lunak • 
                Passionate tentang teknologi dan kreativitas digital
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/about" 
              className="group relative overflow-hidden px-8 py-4 bg-white text-gray-900 rounded-full font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 inline-flex items-center justify-center min-w-[160px]"
            >
              <span className="relative z-10 flex items-center gap-2">
                 ABOUT ME
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Link>
            
            <Link 
              href="/projects" 
              className="group relative overflow-hidden px-8 py-4 bg-transparent text-white border-2 border-white rounded-full font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 hover:bg-white/10 inline-flex items-center justify-center min-w-[160px]"
            >
              <span className="relative z-10 flex items-center gap-2">
                 PROJECTS
              </span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left opacity-10"></div>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-md mx-auto mb-8">
            {[
              { label: "Experience", value: "2 Years", icon: "⏳", color: "from-blue-500 to-cyan-500" },
              { label: "School", value: "SMKN 8", icon: "🏫", color: "from-green-500 to-emerald-500" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="group text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 transform"
              >
                <div className="text-2xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                  {stat.value}
                </div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center">
            {[
              { href: "https://github.com/nadaazaria20", icon: "🐱", label: "GitHub" },
              { href: "https://www.instagram.com/nbelzriaa", icon: "📷", label: "Instagram" },
              { href: "#", icon: "💼", label: "Portfolio" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:border-white/40 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                aria-label={social.label}
              >
                <span className="text-xl">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-white/60 text-sm mb-2">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-pink-400 rounded-full opacity-60 animate-float"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full opacity-40 animate-float animation-delay-2000"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-400 rounded-full opacity-50 animate-float animation-delay-4000"></div>
    </div>
  );
}