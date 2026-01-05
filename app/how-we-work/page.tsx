'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function HowWeWorkPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-[#1a2332] py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Как мы работаем
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Стабильность поставок, прозрачность процессов и предсказуемый
              результат для клиента на каждом этапе.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="shrink-0 w-16 h-16 rounded-full bg-[#d4af37] text-[#0A1628] font-bold text-2xl flex items-center justify-center shadow-lg shadow-[#d4af37]/20">
                01
              </div>
              <div className="bg-[#1a2332] p-8 rounded-2xl border border-gray-700 flex-grow">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Получаем запрос от клиента
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Вы отправляете заявку с описанием груза и требованиями к
                  доставке. Мы обсуждаем детали и уточняем параметры.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Описание груза</li>
                  <li>• Требования к доставке</li>
                  <li>• Уточнение параметров</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="shrink-0 w-16 h-16 rounded-full bg-[#2a3441] text-white border border-gray-600 font-bold text-2xl flex items-center justify-center">
                02
              </div>
              <div className="bg-[#1a2332] p-8 rounded-2xl border border-gray-700 flex-grow">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Анализируем груз и маршрут
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Наша команда анализирует специфику груза и подбирает
                  оптимальный маршрут с учётом сроков и бюджета.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Анализ специфики груза</li>
                  <li>• Подбор маршрута</li>
                  <li>• Учёт сроков и бюджета</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="shrink-0 w-16 h-16 rounded-full bg-[#2a3441] text-white border border-gray-600 font-bold text-2xl flex items-center justify-center">
                03
              </div>
              <div className="bg-[#1a2332] p-8 rounded-2xl border border-gray-700 flex-grow">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Рассчитываем стоимость и сроки
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Предоставляем детальный расчёт стоимости и сроков доставки.
                  Согласовываем условия и подписываем договор.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Расчёт стоимости</li>
                  <li>• Определение сроков</li>
                  <li>• Согласование условий</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="shrink-0 w-16 h-16 rounded-full bg-[#2a3441] text-white border border-gray-600 font-bold text-2xl flex items-center justify-center">
                04
              </div>
              <div className="bg-[#1a2332] p-8 rounded-2xl border border-gray-700 flex-grow">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Организуем перевозку
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Организуем перевозку через проверенных партнёров. Координируем
                  все этапы транспортировки.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Организация перевозки</li>
                  <li>• Координация этапов</li>
                  <li>• Контроль транспортировки</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="shrink-0 w-16 h-16 rounded-full bg-[#d4af37] text-[#0A1628] font-bold text-2xl flex items-center justify-center shadow-lg shadow-[#d4af37]/20">
                05
              </div>
              <div className="bg-[#1a2332] p-8 rounded-2xl border border-gray-700 flex-grow">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Сопровождаем и доставляем
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Сопровождаем таможенные процедуры и контролируем доставку до
                  склада получателя.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Сопровождение таможни</li>
                  <li>• Контроль доставки</li>
                  <li>• Передача получателю</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              Готовы начать?
            </h3>
            <Link href="/contacts">
              <Button size="lg" variant="primary">
                Начать новую отправку
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

