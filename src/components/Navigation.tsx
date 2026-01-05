import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  const navLinks = [{
    name: 'Главная',
    path: '/'
  }, {
    name: 'О компании',
    path: '/about'
  }, {
    name: 'Услуги',
    path: '/services'
  }, {
    name: 'География',
    path: '/geography'
  }, {
    name: 'Как мы работаем',
    path: '/how-we-work'
  }, {
    name: 'Вопросы и ответы',
    path: '/faq'
  }, {
    name: 'Контакты',
    path: '/contacts'
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A1628]/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-50">
          <div className="w-10 h-10 bg-[#d4af37] rounded flex items-center justify-center">
            <Globe className="text-[#0A1628] w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white tracking-tight leading-none">
              SLGC
            </span>
            <span className="text-xs font-bold text-[#d4af37] tracking-widest leading-none">
              TRANS
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-sm font-medium transition-colors hover:text-[#d4af37] ${location.pathname === link.path ? 'text-[#d4af37]' : 'text-gray-300'}`}>
              {link.name}
            </Link>)}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+74951234567" className="flex items-center gap-2 text-white hover:text-[#d4af37] transition-colors">
            <Phone className="w-4 h-4" />
            <span className="text-sm font-medium">+7 (495) 123-45-67</span>
          </a>
          <Button variant="primary" size="sm" onClick={() => window.location.href = '/contacts'}>
            Получить расчет
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white z-50" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && <motion.div initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -20
        }} className="absolute top-0 left-0 right-0 bg-[#0A1628] border-b border-gray-800 p-6 pt-24 lg:hidden shadow-2xl">
              <nav className="flex flex-col gap-4">
                {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-lg font-medium py-2 border-b border-gray-800 ${location.pathname === link.path ? 'text-[#d4af37]' : 'text-gray-300'}`}>
                    {link.name}
                  </Link>)}
                <div className="mt-4 flex flex-col gap-4">
                  <a href="tel:+74951234567" className="flex items-center gap-2 text-white">
                    <Phone className="w-4 h-4" />
                    <span>+7 (495) 123-45-67</span>
                  </a>
                  <Button variant="primary" className="w-full" onClick={() => window.location.href = '/contacts'}>
                    Получить расчет
                  </Button>
                </div>
              </nav>
            </motion.div>}
        </AnimatePresence>
      </div>
    </header>;
}