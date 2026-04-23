import { motion } from 'motion/react';
import { ArrowRight, Brain } from 'lucide-react';

interface Props {
  onStart: () => void;
}

export default function WelcomeScreen({ onStart }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center justify-center min-h-[80vh] px-6 py-16 md:py-24 text-center"
    >
      <div className="w-16 h-16 bg-black text-white rounded-[20px] flex items-center justify-center mb-10 shadow-sm">
        <Brain size={32} strokeWidth={1.2} />
      </div>
      
      <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#1d1d1f] mb-6 leading-[1.1]">
        Élaborez votre<br />profil de conscience.
      </h1>
      
      <p className="text-lg md:text-xl text-[#86868b] max-w-lg mb-14 leading-relaxed font-light">
        L'observation et l'étude des traditions méditatives permettent d'identifier certains marqueurs généraux de notre présence. Ce questionnaire s'appuie sur cinq piliers pour vous aider à observer où vous en êtes. Découvrez les leviers sur lesquels agir pour apaiser votre mental.
      </p>
      
      <button 
        onClick={onStart}
        className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-medium text-white bg-[#1d1d1f] rounded-full overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-black/5"
      >
        <span>Élaborer mon profil</span>
        <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
      </button>
      
      <div className="mt-12 flex flex-col items-center gap-2">
        <p className="text-xs font-semibold text-[#86868b] uppercase tracking-[0.2em]">
          30 Questions • 5 Catégories
        </p>
        <p className="text-xs text-[#86868b]/60">
          Entre 5 et 10 minutes
        </p>
      </div>
    </motion.div>
  );
}
