import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full px-6 py-24 md:py-32 flex flex-col items-center text-center bg-[#F8F5E9]">
        <h1 className="text-5xl md:text-7xl font-bold text-[#111111] tracking-tight mb-6">
          Élevez votre niveau de conscience.
        </h1>
        <p className="text-lg md:text-xl text-[#666666] max-w-2xl mb-12 leading-relaxed">
          Inner Clarity vous guide vers une compréhension profonde de votre présence, de votre mental et de vos émotions, alliant neuroscience et sagesse ancienne.
        </p>
        <Link 
          to="/test"
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-[#FFFFFF] bg-[#111111] rounded-full hover:bg-[#14362B] transition-colors shadow-lg"
        >
          Découvrir votre Profil &rarr;
        </Link>
      </section>

      {/* Branding Section */}
      <section className="w-full px-6 py-32 flex flex-col items-center text-center bg-[#FFFFFF]">
        <img 
          src="https://canva.link/3xfdo3t0ckcdecs" 
          alt="Inner Clarity Logo Large" 
          className="w-64 h-64 object-contain mb-12"
        />
        <h2 className="text-4xl md:text-5xl font-bold text-[#14362B] tracking-tight mb-6">
          L'Équilibre de l'Esprit.
        </h2>
        <p className="text-lg md:text-xl text-[#666666] max-w-3xl leading-relaxed">
          Inner Clarity représente l'union de la science du cerveau et de la spiritualité. Une approche pour désactiver le pilote automatique et atteindre un état de présence profonde.
        </p>
      </section>

      {/* Empty Sections */}
      {/* Section 1 */}
      <div className="w-full min-h-[400px] bg-[#F8F5E9] flex items-center justify-center">
        {/* Contenu futur */}
      </div>

      {/* Section 2 */}
      <div className="w-full min-h-[400px] bg-[#FFFFFF] flex items-center justify-center">
        {/* Contenu futur */}
      </div>
    </div>
  );
}
