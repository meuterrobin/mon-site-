import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import WelcomeScreen from '../components/WelcomeScreen';
import QuizScreen from '../components/QuizScreen';
import ResultScreen from '../components/ResultScreen';
import { Answer } from '../types';

type Screen = 'welcome' | 'quiz' | 'result';

export default function TestPage() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [answers, setAnswers] = useState<Answer[]>([]);

  const handleStart = () => {
    setAnswers([]);
    setCurrentScreen('quiz');
  };

  const handleComplete = (finalAnswers: Answer[]) => {
    setAnswers(finalAnswers);
    setCurrentScreen('result');
  };

  const handleRestart = () => {
    setCurrentScreen('welcome');
    setAnswers([]);
  };

  return (
    <div className="flex-1 w-full flex flex-col relative overflow-hidden bg-[#fbfbfd]">
      <AnimatePresence mode="wait">
        {currentScreen === 'welcome' && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col"
          >
            <WelcomeScreen onStart={handleStart} />
          </motion.div>
        )}
        {currentScreen === 'quiz' && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col"
          >
            <QuizScreen onComplete={handleComplete} />
          </motion.div>
        )}
        {currentScreen === 'result' && (
          <motion.div
            key="result"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col"
          >
            <ResultScreen answers={answers} onRestart={handleRestart} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
