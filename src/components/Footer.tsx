import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, MapPin, Phone, Facebook, Linkedin, Twitter } from 'lucide-react';
export function Footer() {
  return <footer className="bg-[#050b14] text-gray-400 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#d4af37] rounded flex items-center justify-center">
              <Globe className="text-[#0A1628] w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white tracking-tight leading-none">
                SLGC
              </span>
              <span className="text-[10px] font-bold text-[#d4af37] tracking-widest leading-none">
                TRANS
              </span>
            </div>
          </Link>
          <p className="text-sm leading-relaxed">
            Международный логистический оператор и экспедитор.
            Организуем и сопровождаем международные поставки из Китая,
            стран Азии и Европы.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#d4af37] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-[#d4af37] transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-[#d4af37] transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Services Column */}
        <div>
          <h3 className="text-white font-bold mb-6">Услуги</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/services" className="hover:text-[#d4af37] transition-colors">
                Организация перевозок
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#d4af37] transition-colors">
                Таможенное оформление
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#d4af37] transition-colors">
                Складские услуги
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#d4af37] transition-colors">
                Страхование грузов
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#d4af37] transition-colors">
                Сборные грузы
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#d4af37] transition-colors">
                Аутсорсинг ВЭД
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <h3 className="text-white font-bold mb-6">Компания</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/about" className="hover:text-[#d4af37] transition-colors">
                О нас
              </Link>
            </li>
            <li>
              <Link to="/how-we-work" className="hover:text-[#d4af37] transition-colors">
                Как мы работаем
              </Link>
            </li>
            <li>
              <Link to="/geography" className="hover:text-[#d4af37] transition-colors">
                География перевозок
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-[#d4af37] transition-colors">
                Вопросы и ответы
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="hover:text-[#d4af37] transition-colors">
                Контакты
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-[#d4af37] transition-colors">
                Политика конфиденциальности
              </Link>
            </li>
            <li>
              <Link to="/personal-data-consent" className="hover:text-[#d4af37] transition-colors">
                Согласие на обработку данных
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h3 className="text-white font-bold mb-6">Контакты</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#d4af37] shrink-0" />
              <span>
                ул. Логистическая, д. 123, Бизнес-центр, Шанхай, Китай
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#d4af37] shrink-0" />
              <a href="tel:+74951234567" className="hover:text-[#d4af37] transition-colors">
                +7 (495) 123-45-67
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#d4af37] shrink-0" />
              <a href="mailto:info@slgctrans.com" className="hover:text-[#d4af37] transition-colors">
                info@slgctrans.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800">
        <p className="text-xs text-gray-500 text-center mb-4 leading-relaxed max-w-4xl mx-auto">
          SLGC TRANS осуществляет деятельность в качестве логистического оператора и экспедитора.
          Перевозка грузов и таможенное оформление выполняются привлечёнными перевозчиками
          и таможенными представителями, имеющими соответствующие лицензии и разрешения.
        </p>
        <p className="text-xs text-gray-500 text-center">
          © {new Date().getFullYear()} SLGC TRANS. Все права защищены.
        </p>
      </div>
    </footer>;
}