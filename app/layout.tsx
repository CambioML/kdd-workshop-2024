import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';

export const metadata: Metadata = {
  title: 'KDD Workshop 2024',
  description: 'KDD Workshop 2024',
};

const font = Lato({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        <div className="pb-500 min-h-screen min-w-[650px]">{children}</div>
      </body>
    </html>
  );
}
