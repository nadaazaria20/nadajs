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
      <body className="font-sans bg-navy text-cream min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl w-full">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
