'use client';

import { motion } from 'framer-motion';
import { FAQItem } from '@/components/FAQItem';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function FAQPage() {
  const faqs = [
    {
      question: 'С какими грузами вы работаете?',
      answer:
        'Мы работаем с большинством категорий коммерческих грузов, включая сборные и негабаритные. Компания работает с различными категориями грузов, включая стандартные, сборные, негабаритные и проектные.',
    },
    {
      question: 'Можно ли заказать услугу под ключ?',
      answer:
        'Да, мы предоставляем комплексное сопровождение поставок — от организации перевозки до таможенного оформления и доставки до склада получателя.',
    },
    {
      question: 'Работаете ли вы с Китаем?',
      answer:
        'Да, доставка из Китая является одним из ключевых направлений. Мы организуем поставки из Китая под ключ с консолидацией грузов на складах в Китае и контролем отгрузки.',
    },
    {
      question: 'Сколько времени занимает доставка из Китая в Россию?',
      answer:
        'Сроки транзита зависят от способа доставки: авиаперевозка — 3-7 дней, железнодорожная перевозка — 14-25 дней, автомобильная перевозка — 12-20 дней, морская перевозка — 35-50 дней в зависимости от порта назначения.',
    },
    {
      question: 'Предоставляете ли вы страхование грузов?',
      answer:
        'Да, мы организуем страхование грузов на всех этапах перевозки: повреждение, частичная или полная утрата, форс-мажорные обстоятельства.',
    },
    {
      question: 'Занимаетесь ли вы таможенным оформлением?',
      answer:
        'Таможенное оформление выполняется привлечёнными таможенными представителями, имеющими соответствующие лицензии и разрешения. Мы координируем весь процесс: подбор кодов ТН ВЭД, расчёт платежей, подготовку и подачу деклараций.',
    },
    {
      question: 'Какой минимальный объем отправки?',
      answer:
        'Мы работаем с отправками любого размера. Для небольших объёмов предлагаем сборные перевозки (LCL) с оплатой только за фактический объём груза.',
    },
    {
      question: 'Помогаете ли вы с поиском поставщиков в Китае?',
      answer:
        'Да, мы предлагаем услуги поиска и проверки поставщиков: поиск производителей, проверка контрагентов, аудит производства и организация отправки образцов.',
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
              "url('https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Часто задаваемые вопросы
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Ответы на часто задаваемые вопросы о наших услугах и международных
              перевозках.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[#1a2332] rounded-2xl border border-gray-700 p-8 shadow-xl">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-6">Не нашли ответ на свой вопрос?</p>
            <Link href="/contacts">
              <Button variant="outline">Связаться со службой поддержки</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

