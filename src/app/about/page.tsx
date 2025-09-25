const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 pt-20">
      {/* Enhanced Background */}
      

      {/* Header */}
      <header className="relative z-20 bg-black/80 backdrop-blur-md text-white py-8 shadow-2xl border-b-2 border-pink-500/50 mt-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h1>
      </header>

      <main className="relative z-10 bg-black/60 backdrop-blur-sm text-white flex-grow">
        <div className="container mx-auto px-4 sm:px-6 py-12 max-w-4xl">
          <div className="bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl">
            <div className="space-y-4 text-base md:text-lg leading-relaxed">
              <p className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-bold">
                <strong className="text-white">Nama Lengkap:</strong> QOTHRUNNADA BELLA AZARIA
              </p>
              <p><strong>Sekolah:</strong> SMKN 8 MALANG</p>
              <p><strong>Jurusan:</strong> Rekayasa Perangkat Lunak</p>
              <p><strong>Kelas:</strong> XI RPL B</p>
              <p><strong>Tanggal Lahir:</strong> 20 Juni 2009</p>
              <p className="italic border-l-4 border-pink-500 pl-4 py-2 bg-pink-500/10 rounded-r-lg">
                <strong>Motivasi:</strong> Saya sangat termotivasi untuk belajar coding
                karena ingin menciptakan solusi digital yang bermanfaat dan
                mengembangkan kreativitas saya dalam dunia teknologi.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Alasan Belajar Coding:
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  "Membangun Kreativitas: Ngoding memungkinkan kamu menciptakan sesuatu dari nol.",
                  "Meningkatkan Karir: Kemampuan coding sangat dibutuhkan di industri teknologi.",
                  "Problem-Solving: Melatih kemampuan analitis dan pemecahan masalah.",
                  "Memudahkan Hidup: Bisa bikin tools atau aplikasi sendiri.",
                  "Komunitas: Ada banyak orang yang mendukung untuk belajar bareng."
                ].map((reason, index) => (
                  <li key={index} className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-pink-500 transition-all duration-300 hover:scale-105 transform">
                    <strong className="text-pink-400">{reason.split(':')[0]}:</strong>
                    {reason.split(':')[1]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;