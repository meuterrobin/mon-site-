import React, { useEffect, useRef } from 'react';
import { Brain } from 'lucide-react';
import NervousSystemInteractiveGauge from '../components/NervousSystemInteractiveGauge';
import OrganExplorerWidget from '../components/OrganExplorerWidget';
import BrainEmotionWidget from '../components/BrainEmotionWidget';
import './NervousSystemGuide.css';

export default function NervousSystemGuide() {
  const progressRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    let ticking = false;
    const updateProgress = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = height > 0 ? Math.min(1, scrolled / height) : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${ratio})`;
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px 100px 0px'
    });

    const sections = document.querySelectorAll('.stage-section');
    sections.forEach(s => observer.observe(s));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="ns-guide-container">
      <div className="scroll-progress" ref={progressRef} aria-hidden="true"></div>

      <header className="hero" id="top">
        <div className="hero-inner">
          <div className="hero-header">
            <div className="w-16 h-16 bg-black text-white rounded-[20px] flex items-center justify-center mb-10 shadow-sm mx-auto">
              <Brain size={32} strokeWidth={1.2} />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-tight text-left">
              Le mode d'emploi de ton système nerveux
            </h1>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-light mb-12 text-left max-w-2xl">
              <p>Il est difficile de changer ce qu'on ne comprend pas. Derrière chaque coup de stress, d'anxiété ou de tension physique, il n'y a pas de fatalité : il y a une mécanique biologique bien précise.</p>
              <p>Ce guide décrypte le trajet exact d'une émotion, de la première pensée dans ton cerveau jusqu'au nœud dans ton estomac. Grâce à cette logique, tu comprendras en quoi la pratique de la <strong className="font-medium text-black">méditation</strong>, de la <strong className="font-medium text-black">respiration</strong> et de la <strong className="font-medium text-black">visualisation</strong> agit comme un véritable levier sur ta biologie. Tu verras exactement à quel maillon de la chaîne chaque outil intervient pour stopper l'engrenage.</p>
              <p>Explore le schéma ci-dessous à ton rythme. Comprendre ce processus, c'est déjà briser ce cycle.</p>
            </div>
          </div>

          <nav className="schema" aria-label="Cycle émotion-corps">
            <div className="cycle-wrapper">
              <a href="#section-pensee" onClick={(e) => scrollToSection(e, 'section-pensee')} className="ic-stage" style={{ '--accent': 'var(--c1)', '--accent-bg': 'var(--c1-bg)', '--accent-ink': 'var(--c1-ink)', '--delay': '0s' } as React.CSSProperties}>
                <span className="ic-num">01</span>
                <span className="ic-intervention">
                  <span>✋ Méditation</span><span className="sep">→</span><span className="action">interrompt</span>
                </span>
                <h3 className="ic-stage-title">La pensée</h3>
                <p className="ic-stage-desc">Positive ou négative — activité électrique</p>
              </a>

              <div className="ic-conn" style={{ '--from': 'var(--c1)', '--to': 'var(--c2)', '--delay': '1.5s' } as React.CSSProperties}>
                <span className="ic-conn-label">Active des zones du cerveau</span>
              </div>

              <a href="#section-cerveau" onClick={(e) => scrollToSection(e, 'section-cerveau')} className="ic-stage" style={{ '--accent': 'var(--c2)', '--accent-bg': 'var(--c2-bg)', '--accent-ink': 'var(--c2-ink)', '--delay': '2s' } as React.CSSProperties}>
                <span className="ic-num">02</span>
                <span className="ic-intervention">
                  <span>🎯 Visualisation</span><span className="sep">→</span><span className="action">recâblage</span>
                </span>
                <h3 className="ic-stage-title">La naissance de l'émotion</h3>
                <p className="ic-stage-desc">Zones positives ou négatives renforcées</p>
              </a>

              <div className="ic-conn" style={{ '--from': 'var(--c2)', '--to': 'var(--c3)', '--delay': '3.5s' } as React.CSSProperties}>
                <span className="ic-conn-label">Signal électrique vers le SNA</span>
              </div>

              <a href="#section-nerveux" onClick={(e) => scrollToSection(e, 'section-nerveux')} className="ic-stage" style={{ '--accent': 'var(--c3)', '--accent-bg': 'var(--c3-bg)', '--accent-ink': 'var(--c3-ink)', '--delay': '4s' } as React.CSSProperties}>
                <span className="ic-num">03</span>
                <span className="ic-intervention">
                  <span>🌬 Respiration</span><span className="sep">→</span><span className="action">nerf vague</span>
                </span>
                <h3 className="ic-stage-title">Système nerveux</h3>
                <p className="ic-stage-desc">Sympathique (alerte) ou parasympathique (repos)</p>
              </a>

              <div className="ic-conn" style={{ '--from': 'var(--c3)', '--to': 'var(--c4)', '--delay': '5.5s' } as React.CSSProperties}>
                <span className="ic-conn-label">Ordre de sécrétion hormonale</span>
              </div>

              <a href="#section-hormones" onClick={(e) => scrollToSection(e, 'section-hormones')} className="ic-stage" style={{ '--accent': 'var(--c4)', '--accent-bg': 'var(--c4-bg)', '--accent-ink': 'var(--c4-ink)', '--delay': '6s' } as React.CSSProperties}>
                <span className="ic-num">04</span>
                <h3 className="ic-stage-title">Hormones</h3>
                <p className="ic-stage-desc">Cortisol · Adrénaline — amplifient l'état</p>
              </a>

              <div className="ic-conn" style={{ '--from': 'var(--c4)', '--to': 'var(--c5)', '--delay': '7.5s' } as React.CSSProperties}>
                <span className="ic-conn-label">Sensations physiques dans le corps</span>
              </div>

              <a href="#section-corps" onClick={(e) => scrollToSection(e, 'section-corps')} className="ic-stage" style={{ '--accent': 'var(--c5)', '--accent-bg': 'var(--c5-bg)', '--accent-ink': 'var(--c5-ink)', '--delay': '8s' } as React.CSSProperties}>
                <span className="ic-num">05</span>
                <h3 className="ic-stage-title">Le corps réagit</h3>
                <p className="ic-stage-desc">Tensions, fatigue, brouillard, palpitations…</p>
              </a>

              <div className="ic-conn" style={{ '--from': 'var(--c5)', '--to': 'var(--c6)', '--delay': '9.5s' } as React.CSSProperties}>
                <span className="ic-conn-label">Ces sensations génèrent de nouvelles pensées</span>
              </div>

              <a href="#section-boucle" onClick={(e) => scrollToSection(e, 'section-boucle')} className="ic-stage is-loop" style={{ '--accent': 'var(--c6)', '--accent-bg': 'var(--c6-bg)', '--accent-ink': 'var(--c6-ink)', '--delay': '10s' } as React.CSSProperties}>
                <span className="ic-num">↻</span>
                <h3 className="ic-stage-title">Nouvelles pensées</h3>
                <p className="ic-stage-desc">La boucle se referme — le pattern se renforce</p>
              </a>

              <div className="cycle-return" aria-hidden="true"></div>
            </div>

            <div className="ic-conn ic-conn-break" style={{ '--from': 'var(--c6)', '--to': 'var(--c7)' } as React.CSSProperties}>
              <span className="ic-conn-label">Briser la boucle</span>
            </div>

            <a href="#section-regulation" onClick={(e) => scrollToSection(e, 'section-regulation')} className="ic-stage ic-stage-break" style={{ '--accent': 'var(--c7)', '--accent-bg': 'var(--c7-bg)', '--accent-ink': 'var(--c7-ink)' } as React.CSSProperties}>
              <span className="ic-num">🧘🏼‍♂️</span>
              <h3 className="ic-stage-title">Les pratiques méditatives</h3>
              <p className="ic-stage-desc">Tes 3 leviers de régulation (Méditation, Respiration, Visualisation)</p>
            </a>
          </nav>

          <p className="scroll-hint">Continuez à scroller</p>
        </div>
      </header>

      {/* SECTION 1 */}
      <section className="stage-section" id="section-pensee" ref={el => sectionRefs.current[0] = el}>
        <div className="stage-section-inner">
          <div className="stage-featured" style={{ '--accent': 'var(--c1)', '--accent-bg': 'var(--c1-bg)', '--accent-ink': 'var(--c1-ink)' } as React.CSSProperties}>
            <span className="num">01</span>
            <span className="sf-intervention">
              <span>✋ Méditation</span><span className="sep">→</span><span className="action">interrompt</span>
            </span>
            <h2 className="sf-title">La pensée</h2>
            <p className="sf-desc">Positive ou négative — activité électrique</p>
          </div>

          <div className="stage-content">
            <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
              Quand une pensée survient, en fonction de son origine (positive ou négative), elle active certaines zones de ton cerveau. Une pensée positive active des zones associées au positif, une pensée négative active des zones associées au négatif.<br/>
              Cette pensée, c'est le début d'une cascade de réactions dans tout ton corps.
            </p>
            <div className="border-l-4 border-black pl-5 py-2 my-8">
              <p className="font-medium text-black">➡️ À RETENIR : La pensée n'est pas juste "dans la tête", c'est une impulsion électrique bien réelle.</p>
            </div>
          </div>

          <div className="next-teaser">
            <a href="#section-cerveau" onClick={(e) => scrollToSection(e, 'section-cerveau')}>Étape suivante : Zones du cerveau <span className="arrow">↓</span></a>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="stage-section" id="section-cerveau" ref={el => sectionRefs.current[1] = el}>
        <div className="stage-section-inner">
          <div className="stage-featured" style={{ '--accent': 'var(--c2)', '--accent-bg': 'var(--c2-bg)', '--accent-ink': 'var(--c2-ink)' } as React.CSSProperties}>
            <span className="num">02</span>
            <span className="sf-intervention">
              <span>🎯 Visualisation</span><span className="sep">→</span><span className="action">recâblage</span>
            </span>
            <h2 className="sf-title">La naissance de l'émotion</h2>
            <p className="sf-desc">Zones positives ou négatives renforcées</p>
          </div>

          <div className="stage-content">
            <p className="text-lg text-gray-700 leading-relaxed font-light mb-2">
              Ces zones sont constituées de neurones. Lorsqu'une pensée survient, le signal électrique vient stimuler des zones précises, et c'est l'activation de ces zones qui forme une émotion.
            </p>

            <div className="mt-2 mb-4">
              <BrainEmotionWidget />
            </div>

            <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
              Une pensée inquiétante allume les zones d'alerte (formant l'anxiété ou la peur), tandis qu'une pensée rassurante allume les zones de calme (formant la sécurité). C'est cette émotion qui va ensuite déterminer l'activation du système nerveux ainsi que la libération d'hormones — ces 2 processus impactant tout notre corps.
            </p>

            <div className="bg-gray-50 p-6 rounded-2xl mb-6">
              <p className="text-gray-700 font-light">
                💡 Plus on sollicite une zone, plus les connexions entre les neurones se renforcent. Plus elles se renforcent, plus l'émotion que l'on sollicite souvent devient automatique, donc l'activation nerveuse et hormonale qui en découle.
              </p>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
              Une personne qui pense souvent de manière négative aura, par défaut, ces zones d'alerte souvent activées — et inversement pour quelqu'un qui pense plutôt positivement.
            </p>
            <div className="border-l-4 border-black pl-5 py-2 my-8">
              <p className="font-medium text-black">➡️ À RETENIR : La pensée active des zones du cerveau qui forment l'émotion — et plus on répète ce chemin, plus notre cerveau l'emprunte facilement par défaut. c'est ce qu'on appelle la neuroplasticité, une notion essentiel pour changer tout cela.</p>
            </div>
          </div>

          <div className="next-teaser">
            <a href="#section-nerveux" onClick={(e) => scrollToSection(e, 'section-nerveux')}>Étape suivante : Système nerveux <span className="arrow">↓</span></a>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="stage-section" id="section-nerveux" ref={el => sectionRefs.current[2] = el}>
        <div className="stage-section-inner">
          <div className="stage-featured" style={{ '--accent': 'var(--c3)', '--accent-bg': 'var(--c3-bg)', '--accent-ink': 'var(--c3-ink)' } as React.CSSProperties}>
            <span className="num">03</span>
            <span className="sf-intervention">
              <span>🌬 Respiration</span><span className="sep">→</span><span className="action">nerf vague</span>
            </span>
            <h2 className="sf-title">Système nerveux</h2>
            <p className="sf-desc">Sympathique (alerte) ou parasympathique (repos)</p>
          </div>

          <div className="stage-content">
            <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
              C'est l'émotion générée par notre cerveau à l'étape précédente qui va dicter le comportement de notre système nerveux autonome. Celui-ci fonctionne avec deux grands "régimes" :
            </p>
            <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700 font-light mb-6">
              <li><strong className="font-medium text-black">Le système nerveux sympathique (Mode Survie) :</strong> c'est le régime d'urgence et de stress. Il agit comme la pédale d'accélération de votre corps.</li>
              <li><strong className="font-medium text-black">Le système nerveux parasympathique (Mode Repos) :</strong> c'est le régime de calme et de récupération. Il agit comme la pédale de frein.</li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-2xl mb-6">
              <p className="text-gray-700 font-light">
                💡 Ces 2 systèmes gèrent l'activation de tous les organes de notre corps. Ce n'est pas un interrupteur ON/OFF. C'est une jauge — un niveau d'activation qui se déplace progressivement dans un sens ou dans l'autre.
              </p>
            </div>

            <div className="my-12">
              <NervousSystemInteractiveGauge />
            </div>

            <div className="border-l-4 border-black pl-5 py-2 my-8">
              <p className="font-medium text-black">➡️ À RETENIR : Selon l'émotion ressentie, notre biologie bascule progressivement vers le système de survie ou le système de repos.</p>
            </div>
          </div>

          <div className="next-teaser">
            <a href="#section-hormones" onClick={(e) => scrollToSection(e, 'section-hormones')}>Étape suivante : Hormones <span className="arrow">↓</span></a>
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="stage-section" id="section-hormones" ref={el => sectionRefs.current[3] = el}>
        <div className="stage-section-inner">
          <div className="stage-featured" style={{ '--accent': 'var(--c4)', '--accent-bg': 'var(--c4-bg)', '--accent-ink': 'var(--c4-ink)' } as React.CSSProperties}>
            <span className="num">04</span>
            <h2 className="sf-title">Hormones</h2>
            <p className="sf-desc">Cortisol · Adrénaline — amplifient l'état</p>
          </div>

          <div className="stage-content">
            <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
              En fonction du système nerveux actif, le cerveau ordonne la libération d'hormones. Ce sont des messagers chimiques qui voyagent dans tout le corps pour verrouiller et maintenir l'état dans lequel on se trouve — stress ou détente.<br/>
              Ces hormones ont pour effet d'amplifier et de prolonger l'activation du système nerveux.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">
              Les deux hormones principales libérées en mode survie sont :
            </p>
            <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700 font-light mb-6">
              <li><strong className="font-medium text-black">Le cortisol</strong> — l'hormone du stress chronique. Elle maintient ton corps en état d'alerte prolongé. En excès, elle perturbe le sommeil, affaiblit le système immunitaire, brouille la concentration et épuise les réserves d'énergie.</li>
              <li><strong className="font-medium text-black">L'adrénaline</strong> — la réponse immédiate. Elle accélère le rythme cardiaque, tend les muscles et redirige l'énergie vers l'action.</li>
            </ul>
            <div className="border-l-4 border-black pl-5 py-2 my-8">
              <p className="font-medium text-black">➡️ Tant que la pensée à l'origine de l'activation est présente, elles continuent d'être sécrétées.</p>
            </div>
          </div>

          <div className="next-teaser">
            <a href="#section-corps" onClick={(e) => scrollToSection(e, 'section-corps')}>Étape suivante : Le corps réagit <span className="arrow">↓</span></a>
          </div>
        </div>
      </section>

      {/* SECTION 5 */}
      <section className="stage-section" id="section-corps" ref={el => sectionRefs.current[4] = el}>
        <div className="stage-section-inner">
          <div className="stage-featured" style={{ '--accent': 'var(--c5)', '--accent-bg': 'var(--c5-bg)', '--accent-ink': 'var(--c5-ink)' } as React.CSSProperties}>
            <span className="num">05</span>
            <h2 className="sf-title">Le corps réagit</h2>
            <p className="sf-desc">Tensions, fatigue, brouillard, palpitations…</p>
          </div>

          <div className="stage-content">
            <OrganExplorerWidget />

            <div className="border-l-4 border-black pl-5 py-2 my-8">
              <p className="font-medium text-black">➡️ À RETENIR : Ton corps est le miroir de ton système nerveux et donc de ta pensée.</p>
            </div>
          </div>

          <div className="next-teaser">
            <a href="#section-boucle" onClick={(e) => scrollToSection(e, 'section-boucle')}>Étape suivante : La boucle se referme <span className="arrow">↓</span></a>
          </div>
        </div>
      </section>

      {/* SECTION 6 */}
      <section className="stage-section" id="section-boucle" ref={el => sectionRefs.current[5] = el}>
        <div className="stage-section-inner">
          <div className="stage-featured is-loop" style={{ '--accent': 'var(--c6)', '--accent-bg': 'var(--c6-bg)', '--accent-ink': 'var(--c6-ink)' } as React.CSSProperties}>
            <span className="num">↻</span>
            <h2 className="sf-title">Nouvelles pensées</h2>
            <p className="sf-desc">La boucle se referme — le pattern se renforce</p>
          </div>

          <div className="stage-content">
            <div className="bg-stone-50 p-8 md:p-10 rounded-3xl shadow-sm border border-stone-100 mb-8">
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-light">
                <p>
                  C'est le point le plus crucial de tout ce processus : la chaîne d'événements que nous venons de voir n'est pas une ligne droite, c'est un cercle.
                </p>
                <p>
                  Les sensations physiques qui apparaissent dans votre corps (les tensions, la respiration courte, la boule au ventre) envoient un signal de retour à votre cerveau.
                </p>
                <p>
                  Le cerveau analyse cet état physique et en conclut : "Mon corps est en état d'alerte, c'est donc qu'il y a un vrai danger." Il va alors naturellement générer de nouvelles pensées du même type pour justifier ce qu'il ressent. Ces pensées relancent l'émotion, qui réactive le système nerveux, et le cycle recommence.
                </p>
                <p>
                  Avec le temps, le corps s'habitue à baigner dans cette chimie. Cet état de tension devient votre mode par défaut. Vous pourriez même finir par croire que "c'est votre nature", alors qu'il s'agit simplement d'un pattern neurologique qui tourne à vide.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-black pl-5 py-2 my-8">
              <p className="font-medium text-black">➡️ À RETENIR : Ce stress constant n'est pas votre identité, c'est un simple programme biologique. Et comme tout apprentissage neurologique, il peut être court-circuité et rééduqué.</p>
            </div>
          </div>

          <div className="next-teaser">
            <a href="#section-regulation" onClick={(e) => scrollToSection(e, 'section-regulation')}>Étape suivante : Les pratiques méditatives <span className="arrow">↓</span></a>
          </div>
        </div>
      </section>

      {/* SECTION 7 */}
      <section className="stage-section" id="section-regulation" ref={el => sectionRefs.current[6] = el}>
        <div className="stage-section-inner">
          <div className="stage-featured" style={{ '--accent': 'var(--c7)', '--accent-bg': 'var(--c7-bg)', '--accent-ink': 'var(--c7-ink)' } as React.CSSProperties}>
            <span className="num">🧘🏼‍♂️</span>
            <h2 className="sf-title">Les pratiques méditatives</h2>
            <p className="sf-desc">Tes 3 leviers de régulation</p>
          </div>

          <div className="stage-content">
            <h2 className="text-2xl font-bold mb-6 text-stone-900">Les pratiques méditatives : Tes 3 leviers de régulation</h2>
            
            <div className="text-lg text-gray-700 leading-relaxed font-light mb-8 space-y-4">
              <p>
                Avec ma formation scientifique, j'ai toujours eu besoin de comprendre comment les choses fonctionnent. Cela fait maintenant près de deux ans que je me passionne pour les techniques de méditation, et c'est justement cette logique physiologique qui m'a convaincu de m'y plonger.
              </p>
              <p>
                Je sais qu'il est utile, voire indispensable pour beaucoup d'entre nous, de comprendre ce cheminement rationnel avant de se lancer. Pour commencer à briser tes propres automatismes, les trois pratiques décrites ci-dessous sont un excellent point de départ. Non seulement leur efficacité est vérifiée scientifiquement, mais c'est grâce à cette validation que nous savons exactement à quel endroit de la boucle elles agissent.
              </p>
            </div>

            <ul className="list-none space-y-6 text-lg text-gray-700 font-light mb-6">
              <li className="flex gap-3">
                <span className="text-teal-600 mt-1">•</span>
                <span><strong className="font-medium text-black">La Méditation de pleine conscience (Le coupe-circuit) :</strong> Elle agit tout au début de la chaîne. Attention, il ne s'agit pas de contrôler ou d'effacer tes pensées — elles seront toujours là. Il s'agit d'apprendre à les observer sans t'y accrocher. En refusant de les nourrir, tu les empêches de grandir en toi et de maintenir la sur-activation de ton système nerveux. Le signal d'alarme s'éteint avant même que l'engrenage ne s'emballe.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 mt-1">•</span>
                <span><strong className="font-medium text-black">La Respiration (La pédale de frein) :</strong> C'est une technique d'intervention redoutable lorsque tu ressens que ton système nerveux est déjà en surchauffe. Elle agit comme un frein direct pour le ramener à l'équilibre. C'est ce que permet par exemple la cohérence cardiaque : en rythmant ton souffle, tu stimules mécaniquement ton nerf vague. C'est un ordre biologique clair envoyé à ton corps pour quitter le mode survie et repasser en mode repos.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-600 mt-1">•</span>
                <span><strong className="font-medium text-black">La Visualisation (Le recâblage neuronal) :</strong> Ton cerveau ne fait pas la différence entre ce que tu vis réellement et ce que tu imagines intensément. En suscitant volontairement des émotions positives par la visualisation, tu vas renforcer les connexions dans les zones de ton cerveau associées à la sécurité. C'est le principe de la neuroplasticité : plus tu pratiques, plus ces nouveaux chemins s'ancrent au niveau neuronal, et plus cette réponse d'apaisement deviendra un automatisme pour ton corps.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="loop-footer">
        <div className="loop-footer-inner">
          <h2>Prêt à <em>sortir de la boucle</em> ?</h2>
          <p>Chaque étape est un point d'entrée pour briser le cycle. Reviens en arrière pour revoir les leviers d'action à chaque maillon.</p>
          <button className="back-to-top" onClick={scrollToTop} type="button">
            <span className="loop-icon">↻</span>
            <span>Revenir au schéma</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
