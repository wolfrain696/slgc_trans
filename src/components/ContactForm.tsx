import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Send } from 'lucide-react';
import { Link } from 'react-router-dom';
export function ContactForm({
  className = ''
}: {
  className?: string;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [agreedToPolicy, setAgreedToPolicy] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToPolicy) {
      return; // Block submission if checkbox is not checked
    }
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };
  if (isSuccess) {
    return <div className={`bg-[#1a2332] p-8 rounded-xl border border-green-900/50 text-center ${className}`}>
        <div className="w-16 h-16 bg-green-900/30 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">
          Заявка отправлена!
        </h3>
        <p className="text-gray-400 mb-6">
          Наши специалисты свяжутся с вами в ближайшее время для расчета
          стоимости.
        </p>
        <Button variant="outline" onClick={() => {
        setIsSuccess(false);
        setAgreedToPolicy(false);
      }}>
          Отправить еще одну заявку
        </Button>
      </div>;
  }
  return <form onSubmit={handleSubmit} className={`bg-[#1a2332] p-8 rounded-xl border border-gray-800 shadow-xl ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-400">
            Полное имя
          </label>
          <input type="text" id="name" required className="w-full bg-[#0A1628] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all" placeholder="Иван Иванов" />
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-gray-400">
            Компания
          </label>
          <input type="text" id="company" className="w-full bg-[#0A1628] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all" placeholder="ООО «Компания»" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-400">
            Email
          </label>
          <input type="email" id="email" required className="w-full bg-[#0A1628] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all" placeholder="ivan@company.ru" />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-gray-400">
            Телефон
          </label>
          <input type="tel" id="phone" required className="w-full bg-[#0A1628] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all" placeholder="+7 (___) ___-__-__" />
        </div>
      </div>

      <div className="space-y-2 mb-6">
        <label htmlFor="message" className="text-sm font-medium text-gray-400">
          Детали груза / Комментарий
        </label>
        <textarea id="message" rows={4} required className="w-full bg-[#0A1628] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all resize-none" placeholder="Опишите ваш груз, маршрут и особые требования..." />
      </div>

      <div className="mb-8">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input type="checkbox" checked={agreedToPolicy} onChange={e => setAgreedToPolicy(e.target.checked)} required className="mt-1 w-5 h-5 rounded border-gray-700 bg-[#0A1628] text-[#d4af37] focus:ring-[#d4af37] focus:ring-offset-0 cursor-pointer" />
          <span className="text-sm text-gray-400 leading-relaxed">
            Я соглашаюсь с{' '}
            <Link to="/privacy-policy" className="text-[#d4af37] hover:underline font-medium" target="_blank">
              Политикой обработки персональных данных
            </Link>{' '}
            и даю{' '}
            <Link to="/personal-data-consent" className="text-[#d4af37] hover:underline font-medium" target="_blank">
              согласие на обработку персональных данных
            </Link>
          </span>
        </label>
      </div>

      <Button type="submit" variant="primary" className="w-full" size="lg" isLoading={isSubmitting} disabled={!agreedToPolicy || isSubmitting}>
        Отправить заявку
      </Button>
      <p className="text-xs text-gray-500 text-center mt-4">
        Отправляя форму, вы соглашаетесь с условиями обработки персональных
        данных.
      </p>
    </form>;
}