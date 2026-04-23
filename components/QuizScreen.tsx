import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { questions } from '../data/questions';
import { Answer } from '../types';

interface Props {
  onComplete: (answers: Answer[]) => void;
}

export default function QuizScreen({ onComplete }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [direction, setDirection] = useState(1);
  const [sliderValue, setSliderValue] = useState(50);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;

  useEffect(() => {
    setSliderValue(50);
  }, [currentIndex]);

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, { questionId: currentQuestion.id, value }];
    setAnswers(newAnswers);

    if (currentIndex < questions.length - 1) {
      setDirection(1);
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  return (
    <div className="flex flex-col min-h-screen max-w-2xl mx-auto px-6 py-8 md:py-12 overflow-y-auto">
      {/* Progress Bar */}
      <div className="w-full mb-8 md:mb-12 sticky top-0 bg-[#fbfbfd] pt-4 pb-2 z-10">
        <div className="flex justify-between text-[10px] font-bold text-[#86868b] mb-3 uppercase tracking-[0.2em]">
          <span>{currentQuestion.category}</span>
          <span>{currentIndex + 1} / {questions.length}</span>
        </div>
        <div className="h-1 w-full bg-[#e5e5ea] rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-[#1d1d1f] rounded-full"
            initial={{ width: `${((currentIndex) / questions.length) * 100}%` }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* Question Container */}
      <div className="flex-1 flex flex-col">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ opacity: 0, x: direction * 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col w-full"
          >
            <div className="mb-4">
              <span className="text-xs font-bold text-[#86868b] uppercase tracking-[0.3em] opacity-60">
                Évaluation
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-semibold text-[#1d1d1f] mb-8 md:mb-12 leading-[1.3] tracking-tight">
              {currentQuestion.text}
            </h2>

            <div className="flex flex-col gap-3 mb-10">
              {currentQuestion.options ? (
                // Special Case: Question 2 (Axe 1) with custom text options
                <div className="flex flex-col gap-3">
                  {currentQuestion.options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        // Map 1-5 to 0, 25, 50, 75, 100
                        const mappedValue = (option.value - 1) * 25;
                        handleAnswer(mappedValue);
                      }}
                      className="w-full text-left px-6 py-4 md:px-8 md:py-5 rounded-[20px] md:rounded-[24px] border border-[#d2d2d7] bg-white text-[#1d1d1f] font-medium transition-all hover:border-[#1d1d1f] hover:bg-[#f5f5f7] active:scale-[0.98] shadow-sm shadow-black/5"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              ) : (
                // Standard Case: Slider UI
                <div className="flex flex-col w-full py-12 px-2">
                  <div className="relative w-full h-12 flex items-center mb-8">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderValue}
                      onChange={(e) => setSliderValue(parseInt(e.target.value))}
                      className="w-full h-2 rounded-full appearance-none cursor-pointer accent-[#1d1d1f]"
                      style={{
                        background: `linear-gradient(to right, #1d1d1f ${sliderValue}%, #e5e5ea ${sliderValue}%)`
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-xs font-bold text-[#86868b] uppercase tracking-widest mb-12">
                    <span>Pas du tout</span>
                    <span>Tout à fait</span>
                  </div>
                  
                  <button
                    onClick={() => handleAnswer(sliderValue)}
                    className="w-full py-5 bg-[#1d1d1f] text-white rounded-full font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-black/10"
                  >
                    Suivant
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Back Button */}
      <div className="mt-auto pt-8 pb-8 flex justify-between items-center border-t border-[#f5f5f7]">
        <button 
          onClick={handleBack}
          disabled={currentIndex === 0}
          className={`text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center gap-2 ${currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'text-[#86868b] hover:text-[#1d1d1f]'}`}
        >
          <span className="text-lg">←</span>
          <span>Précédent</span>
        </button>
        
        <div className="text-[10px] font-bold text-[#86868b] uppercase tracking-[0.2em] opacity-40">
          Auto-save
        </div>
      </div>
    </div>
  );
}
