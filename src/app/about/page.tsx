

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 dark:text-white">
      <main className="container mx-auto px-6 py-12 max-w-3xl flex-grow">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <p><strong>Nama Lengkap:</strong> QOTHRUNNADA BELLA AZARIA</p>
        <p><strong>Sekolah:</strong> SMKN 8 MALANG</p>
        <p><strong>Jurusan:</strong> Rekayasa Perangkat Lunak</p>
        <p><strong>Kelas:</strong> XI RPL B</p>
        <p><strong>Tanggal Lahir:</strong> 20 Juni 2009</p>
        <p className="mt-4">
          Saya sangat termotivasi untuk belajar coding karena saya ingin
          menciptakan solusi digital yang bermanfaat dan mengembangkan kreativitas
          saya dalam dunia teknologi.
        </p>
      </main>
    </div>
  );
};

export default About;
