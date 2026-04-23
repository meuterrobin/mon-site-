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
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-tight text-center">
              Comprendre l'influence de sa pensée sur son système nerveux en 5 étapes
            </h1>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-light mb-12 text-center max-w-2xl mx-auto">
              <p>Avant de commencer les différentes pratiques, il est essentiel de comprendre comment ton corps fonctionne.</p>
              <p>Dans ce document, je t'explique la logique biologique qui se cache derrière tes sensations physiques, ton stress ou ton anxiété.</p>
              <p>Ce document est pensé de manière à suivre la logique du schéma ci-dessous. Prends le temps de le lire à ton rythme.</p>
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
            <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
              Ces hormones et cette activation nerveuse ont des effets très concrets et physiques sur ton corps. C'est ta biologie qui répond directement à tes pensées. Tu peux ressentir ces effets à travers ton cœur, ton estomac, tes muscles, ta respiration… selon que ton système nerveux est en mode survie ou en mode repos.
            </p>

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
