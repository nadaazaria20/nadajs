const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background wallpaper */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/wallpaper.jpg')" }}
      ></div>

      
      <header className="relative z-20 bg-black text-white py-6 shadow-md">
        <h1 className="text-4xl font-extrabold text-center">About Me</h1>
      </header>

    
      <main className="relative z-10 bg-black/60 text-white flex-grow">
        <div className="container mx-auto px-6 py-12 max-w-3xl">
          <div className="space-y-3">
            <p><strong>Nama Lengkap:</strong> QOTHRUNNADA BELLA AZARIA</p>
            <p><strong>Sekolah:</strong> SMKN 8 MALANG</p>
            <p><strong>Jurusan:</strong> Rekayasa Perangkat Lunak</p>
            <p><strong>Kelas:</strong> XI RPL B</p>
            <p><strong>Tanggal Lahir:</strong> 20 Juni 2009</p>
            <p>
              <strong>Motivasi:</strong> Saya sangat termotivasi untuk belajar coding
              karena ingin menciptakan solusi digital yang bermanfaat dan
              mengembangkan kreativitas saya dalam dunia teknologi.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-2xl font-semibold mb-3">Alasan Belajar Coding:</h3>
            <ul className="list-decimal list-inside space-y-2">
              <li><strong>Membangun Kreativitas:</strong> Ngoding memungkinkan kamu menciptakan sesuatu dari nol.</li>
              <li><strong>Meningkatkan Karir:</strong> Kemampuan coding sangat dibutuhkan di industri teknologi.</li>
              <li><strong>Problem-Solving:</strong> Melatih kemampuan analitis dan pemecahan masalah.</li>
              <li><strong>Memudahkan Hidup:</strong> Bisa bikin tools atau aplikasi sendiri.</li>
              <li><strong>Komunitas:</strong> Ada banyak orang yang mendukung untuk belajar bareng.</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
