import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
export function ContactsPage() {
  return <div className="pt-20">
      {/* Header */}
      <section className="bg-[#1a2332] py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Свяжитесь с нами
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Свяжитесь с нашей командой для получения расчетов, консультаций
              или поддержки. Мы здесь, чтобы помочь.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Свяжитесь с нами
              </h2>
              <p className="text-gray-400 mb-12 leading-relaxed">
                Есть вопрос о наших услугах, нужен расчет стоимости доставки или
                хотите обсудить партнерство — наша команда готова вам помочь.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-lg bg-[#1a2332] border border-gray-700 flex items-center justify-center shrink-0 text-[#d4af37]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Головной офис
                    </h3>
                    <p className="text-gray-400">
                      ул. Логистическая, д. 123, Бизнес-центр
                      <br />
                      Шанхай, Китай 200000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-lg bg-[#1a2332] border border-gray-700 flex items-center justify-center shrink-0 text-[#d4af37]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Телефон
                    </h3>
                    <p className="text-gray-400 mb-1">
                      Основной: +7 (495) 123-45-67
                    </p>
                    <p className="text-gray-400">
                      Поддержка: +7 (495) 987-65-43
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-lg bg-[#1a2332] border border-gray-700 flex items-center justify-center shrink-0 text-[#d4af37]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                    <p className="text-gray-400 mb-1">
                      Общие вопросы: info@slgctrans.com
                    </p>
                    <p className="text-gray-400">
                      Продажи: sales@slgctrans.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-lg bg-[#1a2332] border border-gray-700 flex items-center justify-center shrink-0 text-[#d4af37]">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Часы работы
                    </h3>
                    <p className="text-gray-400 mb-1">
                      Пн - Пт: 9:00 - 18:00 (GMT+8)
                    </p>
                    <p className="text-gray-400">Сб - Вс: Выходной</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 h-[300px] bg-[#1a2332] rounded-2xl border border-gray-700 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center bg-[#0A1628]/50">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
                    <p className="text-gray-400">Интерактивная карта</p>
                  </div>
                </div>
                {/* Static map image background */}
                <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-cover bg-center opacity-10 -z-10 filter invert" />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-[#1a2332] p-8 md:p-10 rounded-2xl border border-gray-700 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Отправьте нам сообщение
                </h3>
                <ContactForm className="!bg-transparent !p-0 !shadow-none !border-0" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
}