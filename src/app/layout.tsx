import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "QOTHRUNNADA BELLA AZARIA Portfolio",
  description: "Portfolio website by QOTHRUNNADA BELLA AZARIA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="font-sans bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col">
        <Navbar />
        {/* Tambahkan padding-top untuk menghindari ketutupan navbar */}
        <main className="flex-1 pt-20"> {/* pt-20 = 5rem (80px) */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}