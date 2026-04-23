import { useState } from 'react';

const organs = [
  { id: 'coeur', name: 'Le Cœur', sympa: 'Rythme accéléré, palpitations, hausse de tension.', para: 'Rythme calme, régulier et apaisé.' },
  { id: 'poumons', name: 'Poumons', sympa: 'Respiration courte, haute et saccadée.', para: 'Respiration profonde, ample et abdominale.' },
  { id: 'estomac', name: 'Estomac', sympa: 'Digestion bloquée, boule au ventre, nausées.', para: 'Digestion fluide, sensation de légèreté.' },
  { id: 'intestins', name: 'Intestins', sympa: 'Ventre tendu, crampes, transit perturbé.', para: 'Ventre souple, transit régulier.' },
  { id: 'muscles', name: 'Muscles', sympa: 'Nuque raide, mâchoires serrées, épaules hautes.', para: 'Corps relâché, muscles détendus.' },
  { id: 'vessie', name: 'Vessie', sympa: 'Envie pressante et soudaine (urgence liée au stress).', para: 'Fonctionnement normal, aucune urgence.' },
  { id: 'bouche', name: 'Bouche', sympa: 'Sèche, pâteuse, difficulté à avaler.', para: 'Normalement hydratée, salivation fluide.' }
];

export default function OrganExplorerWidget() {
  const [activeOrgan, setActiveOrgan] = useState('coeur');

  const currentData = organs.find(o => o.id === activeOrgan) || organs[0];

  return (
    <div className="my-8 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      
      <div className="flex overflow-x-auto gap-2 pb-3 mb-4 scrollbar-hide no-scrollbar">
        {organs.map(organ => (
          <button 
            key={organ.id}
            onClick={() => setActiveOrgan(organ.id)}
            className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all whitespace-nowrap border ${
              activeOrgan === organ.id 
                ? 'bg-gray-900 border-gray-900 text-white shadow-sm' 
                : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-gray-400'
            }`}
          >
            {organ.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="p-4 rounded-xl bg-orange-50/50 border-l-4 border-orange-400">
          <h4 className="text-[10px] uppercase tracking-widest font-bold text-orange-700 mb-1">Mode Survie</h4>
          <p className="text-sm text-gray-800 leading-snug">{currentData.sympa}</p>
        </div>

        <div className="p-4 rounded-xl bg-blue-50/50 border-l-4 border-blue-400">
          <h4 className="text-[10px] uppercase tracking-widest font-bold text-blue-700 mb-1">Mode Repos</h4>
          <p className="text-sm text-gray-800 leading-snug">{currentData.para}</p>
        </div>
      </div>
    </div>
  );
}
