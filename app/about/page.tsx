'use client';

import { motion } from 'framer-motion';
import { Shield, Target, Users } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-[#1a2332] py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1494412574643-35d324698420?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80')",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              О компании SLGC TRANS
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Международный логистический оператор, специализирующийся на
              организации и сопровождении международных перевозок.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Кто мы</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  SLGC TRANS — международный логистический оператор,
                  специализирующийся на организации и сопровождении
                  международных перевозок, а также координации таможенных и
                  внешнеэкономических процессов.
                </p>
                <p>
                  Мы выстраиваем логистические цепочки с учётом специфики груза,
                  географии поставок и бизнес-задач клиента. Работаем через сеть
                  проверенных перевозчиков, складских комплексов и таможенных
                  представителей, обеспечивая централизованное управление
                  поставкой и контроль ключевых параметров.
                </p>
                <p>
                  Наша цель — стабильность поставок, прозрачность процессов и
                  предсказуемый результат для клиента. Подходим для бизнеса
                  любого масштаба: от разовых поставок до регулярных контрактных
                  решений.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1566576912902-1d6db6e8d35a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
                }}
              />
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div className="bg-[#1a2332] p-8 rounded-xl border border-gray-800">
              <Target className="w-10 h-10 text-[#d4af37] mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Наша миссия</h3>
              <p className="text-gray-400">
                Обеспечить клиентам единое окно управления логистикой,
                прозрачность процессов и контроль результата на всех этапах
                международных поставок.
              </p>
            </div>
            <div className="bg-[#1a2332] p-8 rounded-xl border border-gray-800">
              <Shield className="w-10 h-10 text-[#d4af37] mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Надежность</h3>
              <p className="text-gray-400">
                Работаем через сеть проверенных перевозчиков и таможенных
                представителей, имеющих соответствующие лицензии и разрешения.
              </p>
            </div>
            <div className="bg-[#1a2332] p-8 rounded-xl border border-gray-800">
              <Users className="w-10 h-10 text-[#d4af37] mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">
                Фокус на клиенте
              </h3>
              <p className="text-gray-400">
                Каждый клиент получает персонального менеджера. Выстраиваем
                логистику с учётом специфики груза и задач клиента.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-[#1a2332] rounded-2xl p-12 border border-gray-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#d4af37] mb-2">10+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  Лет опыта
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#d4af37] mb-2">
                  50 000+
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  Контейнеров доставлено
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#d4af37] mb-2">
                  500+
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  Постоянных клиентов
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#d4af37] mb-2">
                  24/7
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  Поддержка
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#050b14] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-6">
            Готовы работать с надежным партнером?
          </h2>
          <p className="text-gray-400 mb-8">
            Свяжитесь с нами сегодня, чтобы обсудить ваши логистические
            потребности.
          </p>
          <Link href="/contacts">
            <Button size="lg">Связаться с нами</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

