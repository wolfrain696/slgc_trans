import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
interface FAQItemProps {
  question: string;
  answer: string;
}
export function FAQItem({
  question,
  answer
}: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="border-b border-gray-800 last:border-0">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-6 flex items-center justify-between text-left focus:outline-none group">
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-[#d4af37]' : 'text-white group-hover:text-[#d4af37]'}`}>
          {question}
        </span>
        <span className={`ml-4 shrink-0 transition-colors ${isOpen ? 'text-[#d4af37]' : 'text-gray-500 group-hover:text-[#d4af37]'}`}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        height: 0,
        opacity: 0
      }} animate={{
        height: 'auto',
        opacity: 1
      }} exit={{
        height: 0,
        opacity: 0
      }} transition={{
        duration: 0.3,
        ease: 'easeInOut'
      }} className="overflow-hidden">
            <div className="pb-6 text-gray-400 leading-relaxed">{answer}</div>
          </motion.div>}
      </AnimatePresence>
    </div>;
}