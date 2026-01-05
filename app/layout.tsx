import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: {
    default: 'SLGC TRANS — Международная логистика и грузоперевозки',
    template: '%s | SLGC TRANS',
  },
  description:
    'SLGC TRANS — международный логистический оператор и экспедитор. Организация и сопровождение международных перевозок из Китая, стран Азии и Европы.',
  keywords: [
    'логистика',
    'грузоперевозки',
    'доставка из Китая',
    'международные перевозки',
    'таможенное оформление',
    'ВЭД',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <div className="min-h-screen bg-[#0A1628] text-gray-300 font-sans selection:bg-[#d4af37] selection:text-[#0A1628]">
          <Navigation />
          <main className="pt-0 min-h-screen flex flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

