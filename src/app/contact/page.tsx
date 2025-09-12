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
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 dark:text-white">
      <main className="container mx-auto px-6 py-12 max-w-2xl flex-grow">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-3 rounded-lg border dark:bg-gray-800"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-lg border dark:bg-gray-800"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="p-3 rounded-lg border dark:bg-gray-800"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-600">
            Send
          </button>
        </form>
        <div className="mt-6 flex justify-center gap-6">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </main>
    </div>
  );
};

export default Contact;
