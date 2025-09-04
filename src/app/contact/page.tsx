"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Form Data:", form);
    alert("Pesan berhasil dicatat di console!");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section className="contact-container">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nama</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Masukkan nama Anda"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="Masukkan email Anda"
        />

        <label htmlFor="message">Pesan</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          placeholder="Tulis pesan Anda"
        />

        <button type="submit">Kirim</button>
      </form>

      <div className="social-links">
        <a
          href="https://github.com/qothrunnada"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          GitHub
        </a>
        <a
          href="https://instagram.com/nbelzriaa"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          Instagram
        </a>
        <a
          href="https://linkedin.com/in/qothrunnada"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}