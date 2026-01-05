'use client';

import { motion } from 'framer-motion';

interface TimelineStepProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
  delay?: number;
}

export function TimelineStep({
  number,
  title,
  description,
  isLast = false,
  delay = 0,
}: TimelineStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative flex-1"
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-full bg-[#d4af37] text-[#0A1628] font-bold text-xl flex items-center justify-center z-10 relative shadow-lg shadow-[#d4af37]/20">
          {number}
        </div>
        {!isLast && (
          <div className="h-0.5 bg-gray-700 flex-grow ml-4 hidden md:block" />
        )}
      </div>
      <div className="bg-[#0A1628] relative z-10">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
          {description}
        </p>
      </div>

      {!isLast && (
        <div className="absolute left-6 top-12 bottom-[-24px] w-0.5 bg-gray-700 md:hidden" />
      )}
    </motion.div>
  );
}

