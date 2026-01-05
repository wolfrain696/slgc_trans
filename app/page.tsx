'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Truck,
  Package,
  ShieldCheck,
  Globe,
  Clock,
  Users,
  FileCheck,
  Handshake,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ServiceCard } from '@/components/ServiceCard';
import { AdvantageCard } from '@/components/AdvantageCard';
import { TimelineStep } from '@/components/TimelineStep';
import { ContactForm } from '@/components/ContactForm';
import Link from 'next/link';

export default function HomePage() {
  const services = [
    {
      title: 'Организация перевозок',
      icon: Truck,
      description:
        'Организация и экспедирование международных перевозок с привлечением аккредитованных партнёров.',
    },
    {
      title: 'Доставка из Китая',
      icon: Globe,
      description:
        'Организация поставок из Китая под ключ с консолидацией грузов и контролем отгрузки.',
    },
    {
      title: 'Сборные грузы',
      icon: Package,
      description:
        'Доставка небольших партий товара с оплатой только за фактический объём груза.',
    },
    {
      title: 'Таможенное оформление',
      icon: FileCheck,
      description:
        'Подбор кодов ТН ВЭД, расчёт платежей, подготовка и подача деклараций.',
    },
    {
      title: 'ВЭД-сопровождение',
      icon: Users,
      description:
        'Подготовка внешнеторговых документов и консультации по структуре поставок.',
    },
    {
      title: 'Аутсорсинг ВЭД',
      icon: ShieldCheck,
      description:
        'Работа по внешнеторговому контракту, закупка и оплата товаров за рубежом.',
    },
    {
      title: 'Проверка поставщиков',
      icon: ShieldCheck,
      description:
        'Поиск производителей, проверка контрагентов, аудит производства.',
    },
    {
      title: 'Складские услуги',
      icon: Package,
      description:
        'Консолидация, временное хранение, переупаковка и маркировка грузов.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-[#0A1628]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/80 to-transparent z-10" />
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <div className="w-full h-full bg-slate-800 relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
                }}
              />
            </div>
          </div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] font-semibold text-sm mb-6">
              Глобальный логистический партнер
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Международная логистика и <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#f3eacb]">
                организация грузоперевозок
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              SLGC TRANS — международный логистический оператор и экспедитор. Мы
              организуем и сопровождаем международные поставки, обеспечивая
              единое окно управления логистикой.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                onClick={() =>
                  document
                    .getElementById('consultation')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Рассчитать стоимость
              </Button>
              <Link href="/services">
                <Button variant="outline" size="lg">
                  Наши услуги
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Наши услуги
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Работаем с поставками из Китая, стран Азии и Европы. Берём на себя
              координацию перевозок и сопровождение таможенных процедур.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-[#1a2332] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#d4af37]/5 skew-x-12 transform translate-x-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Преимущества SLGC TRANS
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Мы выстраиваем логистические цепочки с учётом специфики груза,
                географии поставок и бизнес-задач клиента. Работаем через сеть
                проверенных перевозчиков и таможенных представителей.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <AdvantageCard
                  title="Единая точка"
                  description="Централизованное управление поставкой"
                  icon={Clock}
                  delay={0.1}
                />
                <AdvantageCard
                  title="Прозрачность"
                  description="Прозрачное ценообразование без скрытых платежей"
                  icon={ShieldCheck}
                  delay={0.2}
                />
                <AdvantageCard
                  title="Контроль"
                  description="Контроль сроков и документов на всех этапах"
                  icon={Users}
                  delay={0.3}
                />
                <AdvantageCard
                  title="Персональный менеджер"
                  description="Опыт работы с международными направлениями"
                  icon={Handshake}
                  delay={0.4}
                />
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-gray-700 group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1580674684081-7617fbf3d745?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-[#d4af37] text-[#0A1628] font-bold px-4 py-2 inline-block rounded mb-4">
                  Надежность прежде всего
                </div>
                <p className="text-white text-lg font-medium">
                  «SLGC Trans повысила эффективность нашей цепочки поставок на
                  40% в первый же год работы.»
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Как мы работаем
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Стабильность поставок, прозрачность процессов и предсказуемый
              результат.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-8 relative">
            <div className="hidden md:block absolute top-[22px] left-12 right-12 h-0.5 bg-gray-800 z-0" />

            <TimelineStep
              number="01"
              title="Запрос"
              description="Получаем запрос от клиента с деталями груза."
              delay={0.1}
            />
            <TimelineStep
              number="02"
              title="Анализ"
              description="Анализируем груз и маршрут, рассчитываем стоимость и сроки."
              delay={0.2}
            />
            <TimelineStep
              number="03"
              title="Организация"
              description="Организуем перевозку через проверенных партнёров."
              delay={0.3}
            />
            <TimelineStep
              number="04"
              title="Сопровождение"
              description="Сопровождаем таможенные процедуры и контролируем этапы."
              delay={0.4}
            />
            <TimelineStep
              number="05"
              title="Доставка"
              description="Контролируем доставку до склада получателя."
              isLast
              delay={0.5}
            />
          </div>

          <div className="mt-16 text-center">
            <Link href="/how-we-work">
              <Button variant="outline">Подробный процесс</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Geography Section */}
      <section className="py-24 bg-[#1a2332] relative">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Глобальный охват
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Организуем перевозки из Китая, стран Азии, Европы и других регионов
            мира.
          </p>

          <div className="relative bg-[#0A1628] rounded-2xl p-8 border border-gray-700 shadow-2xl overflow-hidden min-h-[400px] flex items-center justify-center">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-[#d4af37] rounded-full animate-ping" />
              <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#d4af37] rounded-full animate-ping delay-700" />
              <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-[#d4af37] rounded-full animate-ping delay-300" />

              <svg className="absolute inset-0 w-full h-full">
                <path
                  d="M 25% 50% Q 50% 20% 66% 33%"
                  stroke="#d4af37"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  className="opacity-50"
                />
                <path
                  d="M 66% 33% Q 75% 40% 75% 50%"
                  stroke="#d4af37"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  className="opacity-50"
                />
              </svg>
            </div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Китай</h3>
                <p className="text-gray-400">
                  Основные узлы: Шанхай, Шэньчжэнь, Гуанчжоу, Нинбо
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Россия</h3>
                <p className="text-gray-400">
                  Основные узлы: Москва, Санкт-Петербург, Владивосток, Новосибирск
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Европа</h3>
                <p className="text-gray-400">
                  Основные узлы: Гамбург, Роттердам, Варшава, Вильнюс
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Link href="/geography">
              <Button variant="primary">Карта маршрутов</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section id="consultation" className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Готовы оптимизировать вашу логистику?
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Получите бесплатную консультацию и расчет стоимости для вашего
                груза. Наши эксперты проанализируют ваши потребности и предложат
                наиболее эффективное решение в течение 24 часов.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 flex items-center justify-center mr-3 text-[#d4af37]">
                    ✓
                  </div>
                  Точный расчет стоимости
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 flex items-center justify-center mr-3 text-[#d4af37]">
                    ✓
                  </div>
                  Варианты оптимизации маршрута
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 flex items-center justify-center mr-3 text-[#d4af37]">
                    ✓
                  </div>
                  Консультация по таможенной документации
                </li>
              </ul>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

