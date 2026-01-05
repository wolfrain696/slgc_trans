import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
interface LayoutProps {
  children: React.ReactNode;
}
export function Layout({
  children
}: LayoutProps) {
  const location = useLocation();
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return <div className="min-h-screen bg-[#0A1628] text-gray-300 font-sans selection:bg-[#d4af37] selection:text-[#0A1628]">
      <Navigation />
      <main className="pt-0 min-h-screen flex flex-col">{children}</main>
      <Footer />
    </div>;
}