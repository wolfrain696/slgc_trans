'use client';

import { motion } from 'framer-motion';
import {
  Truck,
  Package,
  ShieldCheck,
  Globe,
  Users,
  FileCheck,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      id: 'freight',
      title: 'Организация международных грузоперевозок',
      description:
        'Мы осуществляем организацию и экспедирование международных перевозок с привлечением аккредитованных партнёров. Перевозка осуществляется партнёрскими транспортными компаниями в рамках экспедиторской модели.',
      benefits: [
        'Автомобильные международные перевозки',
        'Железнодорожные перевозки',
        'Морские контейнерные перевозки',
        'Мультимодальные маршруты',
      ],
      icon: Truck,
    },
    {
      id: 'china',
      title: 'Доставка грузов из Китая',
      description:
        'Одно из ключевых направлений нашей работы — организация поставок из Китая под ключ. Подбор оптимального маршрута, консолидация грузов на складах в Китае, контроль отгрузки и оптимизация затрат.',
      benefits: [
        'Подбор оптимального маршрута',
        'Консолидация на складах в Китае',
        'Контроль отгрузки',
        'Оптимизация сроков и затрат',
      ],
      icon: Globe,
    },
    {
      id: 'consolidated',
      title: 'Сборные грузы (LCL)',
      description:
        'Сборные перевозки — эффективное решение для доставки небольших партий товара. Оплата только за фактический объём груза с регулярными отправками.',
      benefits: [
        'Оплата за фактический объём',
        'Регулярные отправки',
        'Консолидация от нескольких поставщиков',
        'Контроль упаковки и маркировки',
      ],
      icon: Layers,
    },
    {
      id: 'customs',
      title: 'Таможенное оформление',
      description:
        'Полный комплекс услуг по таможенному оформлению грузов. Цель — минимизация рисков и задержек. Таможенное оформление выполняется привлечёнными таможенными представителями.',
      benefits: [
        'Подбор кодов ТН ВЭД',
        'Расчёт таможенных платежей',
        'Подготовка и подача деклараций',
        'Взаимодействие с таможенными органами',
      ],
      icon: FileCheck,
    },
    {
      id: 'ved',
      title: 'ВЭД-сопровождение',
      description:
        'Сопровождение внешнеэкономической деятельности на всех этапах: подготовка внешнеторговых документов, консультации по структуре поставок, снижение операционных и юридических рисков.',
      benefits: [
        'Подготовка внешнеторговых документов',
        'Консультации по структуре поставок',
        'Снижение операционных рисков',
        'Снижение юридических рисков',
      ],
      icon: Users,
    },
    {
      id: 'outsourcing',
      title: 'Аутсорсинг ВЭД',
      description:
        'SLGC TRANS берёт на себя функции внешнеэкономической деятельности клиента: работа по внешнеторговому контракту, закупка и оплата товаров за рубежом, полное документальное сопровождение.',
      benefits: [
        'Работа по внешнеторговому контракту',
        'Закупка и оплата товаров за рубежом',
        'Полное документальное сопровождение',
        'Интеграция логистики и таможни',
      ],
      icon: Users,
    },
    {
      id: 'sourcing',
      title: 'Поиск и проверка поставщиков',
      description:
        'Помощь в поиске и проверке зарубежных поставщиков: поиск производителей, проверка контрагентов, аудит производства и организация отправки образцов.',
      benefits: [
        'Поиск производителей',
        'Проверка контрагентов',
        'Аудит производства',
        'Организация отправки образцов',
      ],
      icon: ShieldCheck,
    },
    {
      id: 'insurance',
      title: 'Страхование грузов',
      description:
        'Организация страхования грузов на всех этапах перевозки: покрытие рисков повреждения, частичной или полной утраты, форс-мажорных обстоятельств.',
      benefits: [
        'Защита от повреждения',
        'Защита от частичной утраты',
        'Защита от полной утраты',
        'Форс-мажорные обстоятельства',
      ],
      icon: ShieldCheck,
    },
    {
      id: 'warehousing',
      title: 'Складские услуги',
      description:
        'Консолидация грузов, временное хранение, переупаковка и маркировка, подготовка грузов к отправке.',
      benefits: [
        'Консолидация грузов',
        'Временное хранение',
        'Переупаковка и маркировка',
        'Подготовка к отправке',
      ],
      icon: Package,
    },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-[#1a2332] py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Наши услуги
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Организация и экспедирование международных перевозок с
              привлечением аккредитованных партнёров. Перевозка осуществляется
              партнёрскими транспортными компаниями.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } gap-12 items-start`}
            >
              <div className="flex-1">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#1a2332] text-[#d4af37] border border-gray-700 mb-6">
                  <service.icon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>

                <h3 className="text-sm font-bold text-[#d4af37] uppercase tracking-wider mb-4">
                  Ключевые преимущества
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-gray-400">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Link href="/contacts">
                  <Button
                    variant="outline"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Запросить расчет
                  </Button>
                </Link>
              </div>

              <div className="flex-1 w-full">
                <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden border border-gray-700 shadow-2xl bg-[#1a2332]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a2332] to-[#0A1628] flex items-center justify-center">
                    <service.icon className="w-32 h-32 text-gray-800" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0A1628] to-transparent">
                    <span className="text-white font-mono text-sm opacity-50">
                      УСЛУГА_ID: {service.id.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1a2332] border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Нужно индивидуальное решение?
          </h2>
          <p className="text-gray-400 mb-8">
            Мы понимаем, что каждый бизнес уникален. Свяжитесь с нами, чтобы
            обсудить индивидуальную логистическую стратегию для ваших конкретных
            потребностей.
          </p>
          <Link href="/contacts">
            <Button size="lg" variant="primary">
              Получить бесплатную консультацию
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

