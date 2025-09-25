"use client";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent!");
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-6 relative"
      style={{
        backgroundImage: "url('/wallpaper.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Overlay untuk meningkatkan readability */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
      
      <main className="w-full max-w-2xl bg-white/90 dark:bg-gray-900/90 rounded-xl shadow-lg p-8 backdrop-blur-sm relative z-10">
        <h2 className="text-3xl font-extrabold text-center text-navy dark:text-white mb-4">Contact Me</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Id love to hear from you! Fill out the form below or connect with me on social media 🌟
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>

        {/* Social Media */}
        <div className="mt-8 flex justify-center gap-6">
          <a
            href="https://github.com/nadaazaria20?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-blue-600 hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/nbelzriaa?igsh=NTRydHN5dnJ4cTV5&utm_source=ig_contact_invite"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-pink-600 hover:text-white transition"
          >
            Instagram
          </a>
        </div>
      </main>
    </div>
  );
};

export default Contact;