"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [dark, setDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Set initial dark mode based on system preference
    const isDark = localStorage.getItem('darkMode') === 'true' || 
                  (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDark(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !dark;
    setDark(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'PROJECTS', href: '/projects' },
    { name: 'SKILLS', href: '/skills' },
    { name: 'CONTACT', href: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg py-2' 
        : 'bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container utama dengan justify-center untuk menengahkan semua */}
        <div className="flex justify-center items-center">
          
          {/* Navigation Links - Desktop */}
          <div className="flex gap-8 items-center">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                className={`font-semibold transition-colors duration-300 relative group ${
                  pathname === item.href 
                    ? 'text-black dark:text-gray-100' 
                    : 'text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-gray-100'
                }`}
              >
                {item.name.toUpperCase()}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-black dark:bg-gray-100 group-hover:w-full transition-all duration-300 ${
                  pathname === item.href ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 transform hover:scale-110 text-gray-800 dark:text-gray-200"
              aria-label="Toggle dark mode"
            >
              {dark ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;