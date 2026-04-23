import { useMemo } from 'react';
import { motion } from 'motion/react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { Share, RotateCcw } from 'lucide-react';
import { Answer } from '../types';
import { questions } from '../data/questions';

const categoryDescriptions: Record<string, string> = {
  'Conscience & Connexion Corporelle': "C'est la capacité de votre cerveau à écouter les signaux de votre corps. En affinant cette écoute, vous apprenez à repérer vos tensions enfouies et à utiliser votre respiration pour apaiser votre système nerveux, libérant ainsi vos blocages en profondeur.",
  'Présence & Distraction': "C'est votre capacité à rester ancré quand votre cerveau cherche à fuir dans la distraction. Une forte présence vous permet de repérer ce besoin constant de stimulation, pour ramener consciemment votre attention vers la pureté de l'instant et le calme intérieur.",
  'Conscience quotidienne': "C'est l'art de désactiver le \"pilote automatique\" de votre cerveau au quotidien. Il s'agit de vous rendre compte immédiatement quand votre esprit s'évade dans ses pensées, pour ramener toute votre conscience dans l'action que vous êtes en train de vivre.",
  'Conscience mental': "C'est la capacité d'observer vos propres pensées sans vous confondre avec elles. En prenant ce recul psychologique, vous apprenez à repérer quand vos automatismes et votre ego essaient de prendre le contrôle, ce qui vous reconnecte à votre véritable clarté intérieure.",
  'Maîtrise Émotionnelle & Résilience': "C'est la capacité à garder votre équilibre face aux tempêtes intérieures. Vous apprenez à observer une émotion forte traverser votre corps sans la laisser \"pirater\" votre cerveau, ni dicter vos réactions et votre état d'esprit."
};

interface Props {
  answers: Answer[];
  onRestart: () => void;
}

export default function ResultScreen({ answers, onRestart }: Props) {
  const { chartData, globalScore } = useMemo(() => {
    const categoryScores: Record<string, { totalWeighted: number; maxPossibleWeighted: number }> = {};

    answers.forEach((answer) => {
      const question = questions.find((q) => q.id === answer.questionId);
      if (question) {
        if (!categoryScores[question.category]) {
          categoryScores[question.category] = { totalWeighted: 0, maxPossibleWeighted: 0 };
        }
        
        // Logic for inverted questions: S_inv = 100 - S
        const effectiveValue = question.isInverted ? (100 - answer.value) : answer.value;
        
        // Weighted Score = effectiveValue * coefficient
        categoryScores[question.category].totalWeighted += effectiveValue * question.coefficient;
        categoryScores[question.category].maxPossibleWeighted += 100 * question.coefficient;
      }
    });

    const data = Object.keys(categoryScores).map((category) => {
      const { totalWeighted, maxPossibleWeighted } = categoryScores[category];
      // Normalize to 0-100 scale for the radar chart
      const score = Math.round((totalWeighted / maxPossibleWeighted) * 100);
      return {
        subject: category,
        A: score,
        fullMark: 100,
      };
    });

    const totalScore = data.reduce((acc, curr) => acc + curr.A, 0);
    const avgScore = Math.round(totalScore / data.length);

    return { chartData: data, globalScore: avgScore };
  }, [answers]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Mon Profil de Conscience',
          text: `Je viens de découvrir mon profil de conscience ! Fais le test pour cartographier ton équilibre intérieur.`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`Je viens de découvrir mon profil de conscience ! Fais le test : ${window.location.href}`);
      alert('Lien copié dans le presse-papier ! Partagez-le sur Instagram.');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center max-w-3xl mx-auto px-6 py-12 w-full"
    >
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1d1d1f] uppercase tracking-widest mb-4">
          VOTRE PROFIL DE CONSCIENCE
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mt-6 leading-relaxed">
          Ce profil cartographie votre équilibre intérieur à travers cinq piliers fondamentaux. Il ne s'agit pas d'une note, mais d'une boussole : elle met en lumière vos forces naturelles et révèle les espaces où vous pouvez cultiver une présence plus profonde au quotidien.
        </p>
      </div>

      {/* Radar Chart Container */}
      <div className="w-full aspect-square max-w-[450px] bg-white rounded-[48px] shadow-[0_20px_60px_rgba(0,0,0,0.03)] p-1 sm:p-2 mb-16 border border-[#f5f5f7] flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart 
            cx="50%" 
            cy="50%" 
            outerRadius="33%" 
            data={chartData}
            margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
          >
            <PolarGrid stroke="#d2d2d7" strokeDasharray="3 3" />
            <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
            <PolarAngleAxis 
              dataKey="subject" 
              tick={(props) => {
                const { x, y, payload, textAnchor, index } = props;
                const words = payload.value.split(' ');
                
                // Fine-tune positioning based on index (for 5 categories)
                // We want to push labels away from the center
                let dy = 0;
                let dx = 0;
                
                const angle = (index * 2 * Math.PI) / 5 - Math.PI / 2;
                let radius = 12; // Rayon de base pour les étiquettes intermédiaires (1 et 4)
                
                if (index === 0) radius = 22; // Éloigne l'étiquette du haut
                if (index === 2 || index === 3) radius = 7; // Rapproche les étiquettes du bas
                
                dx = Math.cos(angle) * radius;
                dy = Math.sin(angle) * radius;

                // Ajustements fins pour la lisibilité verticale
                if (index === 0) dy -= 5; 
                if (index === 2 || index === 3) dy += 3;

                return (
                  <g transform={`translate(${x + dx},${y + dy})`}>
                    <text
                      x={0}
                      y={0}
                      textAnchor={textAnchor}
                      fill="#86868b"
                      fontSize={9}
                      fontWeight={600}
                      className="uppercase tracking-wider"
                    >
                      {words.map((word: string, i: number) => (
                        <tspan x={0} dy={i === 0 ? 0 : 11} key={i}>
                          {word}
                        </tspan>
                      ))}
                    </text>
                  </g>
                );
              }}
            />
            <Radar
              name="Score"
              dataKey="A"
              stroke="#1d1d1f"
              strokeWidth={5}
              fill="#1d1d1f"
              fillOpacity={0.25}
              animationBegin={300}
              animationDuration={1500}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Category Breakdown */}
      <div className="w-full max-w-2xl mb-16 space-y-8">
        <h3 className="text-xl font-semibold text-[#1d1d1f] mb-6 px-2">Analyse par catégorie</h3>
        <div className="grid gap-4">
          {chartData.map((category) => (
            <div key={category.subject} className="bg-white p-6 rounded-3xl border border-[#f5f5f7] flex flex-col">
              <div className="flex items-center justify-between">
                <div className="w-full">
                  <h4 className="font-medium text-[#1d1d1f]">{category.subject}</h4>
                  <div className="h-1.5 w-full bg-[#f5f5f7] rounded-full mt-3 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${category.A}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-[#1d1d1f] rounded-full"
                    />
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                {categoryDescriptions[category.subject]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md sticky bottom-8 bg-[#fbfbfd]/80 backdrop-blur-xl p-4 rounded-[32px] border border-[#f5f5f7]/50 shadow-2xl shadow-black/5">
        <button 
          onClick={handleShare}
          className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-[#1d1d1f] text-white rounded-full font-medium transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <Share size={18} />
          <span>Partager le résultat</span>
        </button>
        
        <button 
          onClick={onRestart}
          className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-white text-[#1d1d1f] border border-[#d2d2d7] rounded-full font-medium transition-all hover:border-[#1d1d1f] hover:bg-[#f5f5f7] active:scale-[0.98]"
        >
          <RotateCcw size={18} />
          <span>Refaire le test</span>
        </button>
      </div>
    </motion.div>
  );
}
