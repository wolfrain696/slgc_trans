'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AdvantageCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export function AdvantageCard({
  title,
  description,
  icon: Icon,
  delay = 0,
}: AdvantageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex items-start gap-4 p-6 rounded-xl bg-[#1a2332]/50 border border-gray-800 hover:bg-[#1a2332] transition-colors"
    >
      <div className="shrink-0 w-12 h-12 rounded-full bg-[#0A1628] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
}

