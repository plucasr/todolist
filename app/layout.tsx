import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atomic Todo",
  description: "A modern todo application built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="header">
          <div className="container">
            <h1 className="title">Atomic Todo</h1>
          </div>
        </header>
        <main className="main">
          <div className="container">
            {children}
          </div>
        </main>
        <footer className="footer">
          <div className="container">
            <p>Built with Next.js and Atomic Design</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
