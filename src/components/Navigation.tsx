import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 right-0 z-50 p-6 pointer-events-none">
        <button
          onClick={() => setIsOpen(true)}
          className="pointer-events-auto p-3 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.08)] border border-gray-100 hover:bg-gray-50 transition-colors"
          aria-label="Menu"
        >
          <Menu size={24} className="text-[#1d1d1f]" />
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col"
          >
            <div className="p-6 flex justify-end">
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-3 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X size={24} className="text-[#1d1d1f]" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col items-start justify-start gap-8 text-2xl md:text-4xl font-medium tracking-tight text-[#1d1d1f] px-8 md:px-16 pt-8 text-left">
              <Link 
                to="/" 
                onClick={() => setIsOpen(false)} 
                className="hover:text-gray-500 transition-colors"
              >
                Accueil / Test
              </Link>
              <Link 
                to="/guide" 
                onClick={() => setIsOpen(false)} 
                className="hover:text-gray-500 transition-colors"
              >
                Comprendre le Système Nerveux
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
