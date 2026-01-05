import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BoxIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
interface ServiceCardProps {
  title: string;
  description: string;
  icon: BoxIcon;
  link?: string;
  delay?: number;
}
export function ServiceCard({
  title,
  description,
  icon: Icon,
  link = '/services',
  delay = 0
}: ServiceCardProps) {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.5,
    delay
  }} className="group relative bg-[#1a2332] rounded-xl p-8 border border-gray-800 hover:border-[#d4af37] transition-colors duration-300 h-full flex flex-col">
      <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-[#2a3441] text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-[#0A1628] transition-colors duration-300">
        <Icon className="w-7 h-7" />
      </div>

      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#d4af37] transition-colors">
        {title}
      </h3>

      <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
        {description}
      </p>

      <Link to={link} className="inline-flex items-center text-sm font-semibold text-[#d4af37] hover:text-white transition-colors mt-auto">
        Подробнее{' '}
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>;
}