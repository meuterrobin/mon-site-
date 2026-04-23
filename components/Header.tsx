import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#FFFFFF] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="https://canva.link/3xfdo3t0ckcdecs" alt="Inner Clarity Logo" className="h-10 w-auto object-contain" />
          <span className="font-medium text-[#111111] text-lg tracking-tight">Inner Clarity</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-[#111111] font-medium hover:text-[#666666] transition-colors">Accueil</Link>
          <Link to="/test" className="text-[#111111] font-medium hover:text-[#666666] transition-colors">Tests</Link>
          <Link to="/about" className="text-[#111111] font-medium hover:text-[#666666] transition-colors">Qui sommes-nous ?</Link>
          <Link to="/workshops" className="text-[#111111] font-medium hover:text-[#666666] transition-colors">Formations & Conférences</Link>
        </nav>
      </div>
    </header>
  );
}
