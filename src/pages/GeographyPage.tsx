import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Truck, Ship, Train } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
export function GeographyPage() {
  return <div className="pt-20">
      {/* Header */}
      <section className="bg-[#1a2332] py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')] bg-cover bg-center opacity-10" />
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
              География и маршруты
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Мы организуем перевозки из Китая, стран Азии, Европы
              и других регионов мира.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Visualization Section */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#1a2332] rounded-2xl border border-gray-700 p-8 md:p-12 shadow-2xl relative overflow-hidden min-h-[600px] flex items-center justify-center">
            {/* Abstract World Map */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center filter invert" />

            {/* Route Visualization */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
                {/* China Node */}
                <motion.div initial={{
                opacity: 0,
                scale: 0.8
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} transition={{
                delay: 0.2
              }} className="bg-[#0A1628]/90 backdrop-blur p-6 rounded-xl border border-gray-600 text-center">
                  <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4 text-[#0A1628] font-bold">
                    CN
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Китай</h3>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>Шанхай</li>
                    <li>Шэньчжэнь</li>
                    <li>Гуанчжоу</li>
                    <li>Нинбо</li>
                    <li>Циндао</li>
                  </ul>
                </motion.div>

                {/* Arrow / Connection */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="h-1 bg-gradient-to-r from-[#d4af37] to-blue-500 w-full relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1a2332] px-2 text-gray-400 text-xs uppercase tracking-widest">
                      Транзит
                    </div>
                    <Truck className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 text-white animate-pulse" />
                  </div>
                </div>

                {/* Russia Node */}
                <motion.div initial={{
                opacity: 0,
                scale: 0.8
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} transition={{
                delay: 0.4
              }} className="bg-[#0A1628]/90 backdrop-blur p-6 rounded-xl border border-gray-600 text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    RU
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Россия</h3>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>Москва</li>
                    <li>Санкт-Петербург</li>
                    <li>Владивосток</li>
                    <li>Новосибирск</li>
                    <li>Екатеринбург</li>
                  </ul>
                </motion.div>
              </div>

              <div className="w-full max-w-5xl border-t border-gray-700 pt-8 mt-8">
                <h3 className="text-center text-white font-bold mb-8">
                  Основные логистические коридоры
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-[#0A1628] p-6 rounded-lg border border-gray-700">
                    <div className="flex items-center gap-3 mb-3 text-[#d4af37]">
                      <Ship className="w-5 h-5" />
                      <span className="font-bold">Морские перевозки</span>
                    </div>
                    <p className="text-sm text-gray-400">
                      Через Владивосток / Санкт-Петербург / Новороссийск.
                      Оптимально для экономии.
                    </p>
                  </div>
                  <div className="bg-[#0A1628] p-6 rounded-lg border border-gray-700">
                    <div className="flex items-center gap-3 mb-3 text-[#d4af37]">
                      <Train className="w-5 h-5" />
                      <span className="font-bold">Ж/д перевозки</span>
                    </div>
                    <p className="text-sm text-gray-400">
                      Прямые поезда из Китая в Москву/регионы. Оптимальный
                      баланс скорости и стоимости.
                    </p>
                  </div>
                  <div className="bg-[#0A1628] p-6 rounded-lg border border-gray-700">
                    <div className="flex items-center gap-3 mb-3 text-[#d4af37]">
                      <Truck className="w-5 h-5" />
                      <span className="font-bold">Автоперевозки</span>
                    </div>
                    <p className="text-sm text-gray-400">
                      Доставка от двери до двери через пограничные переходы.
                      Самый быстрый наземный вариант.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regions List */}
      <section className="py-20 bg-[#1a2332]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Основные направления
              </h2>
              <p className="text-gray-400 mb-8">
                Работаем через сеть проверенных перевозчиков и складских
                комплексов, обеспечивая централизованное управление поставкой.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                    <MapPin className="w-5 h-5 text-[#d4af37] mr-2" /> Китай
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Мы охватываем все основные провинции, включая Гуандун,
                    Чжэцзян, Цзянсу, Шаньдун и Фуцзянь. Склады в Шанхае,
                    Шэньчжэне и Гуанчжоу.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                    <MapPin className="w-5 h-5 text-[#d4af37] mr-2" /> Россия
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Доставка в любой регион России. Основные распределительные
                    центры в Москве, Санкт-Петербурге, Екатеринбурге и
                    Новосибирске.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                    <MapPin className="w-5 h-5 text-[#d4af37] mr-2" /> Европа
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Транзит и прямая доставка в Германию, Польшу, страны Балтии
                    и другие страны ЕС.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl border border-gray-700">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577149004698-1940d94a0a83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1887&q=80')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-[#0A1628]/40" />
              <div className="absolute bottom-8 left-8 right-8 bg-[#0A1628]/90 backdrop-blur p-6 rounded-xl border border-gray-600">
                <p className="text-white font-medium">
                  «Наша обширная сеть позволяет предлагать гибкие варианты
                  маршрутизации для обхода заторов и сокращения времени
                  транзита.»
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
}