import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Nasir Haroon - Full Stack Developer",
  description:
    "Full Stack Developer with 5+ years experience in PHP, Laravel, Symfony, React, Python, and FastAPI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </head>
      <body className="index-page">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  const nav = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Resume", href: "/#resume" },
    { label: "Services", href: "/#services" },
    { label: "Portfolio", href: "/#portfolio" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-[#0078ff]">
          Nasir Haroon
        </Link>
        <nav className="hidden md:flex gap-6">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-[#0078ff] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#040b14] text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-lg font-semibold">
          Crafted with <span className="text-red-400">&hearts;</span> by{" "}
          <span className="text-[#0078ff]">Nasir Haroon</span>
        </p>
        <p className="text-sm text-gray-500 mt-1">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://github.com/nasirharoon786"
            target="_blank"
            className="text-gray-400 hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nasirharoon786"
            target="_blank"
            className="text-gray-400 hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sardarnasirharoon@gmail.com"
            className="text-gray-400 hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
