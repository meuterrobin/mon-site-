import React, { useEffect, useRef } from 'react';
import './NervousSystemInteractiveGauge.css';

const SYMPTOMS = {
  coeur: {
    repos:    "Rythme calme, régulier, apaisé",
    equilibre:"Rythme stable, aucune accélération",
    stress:   "Cœur qui s'emballe, palpitations"
  },
  estomac: {
    repos:    "Digestion facile, pas de lourdeur",
    equilibre:"Confort digestif, faim normale",
    stress:   "Boule au ventre, appétit coupé, nausées"
  },
  muscles: {
    repos:    "Corps détendu, muscles relâchés",
    equilibre:"Tonus normal, sans tension particulière",
    stress:   "Nuque raide, mâchoire serrée, épaules remontées"
  },
  respiration: {
    repos:    "Profonde, ample, abdominale",
    equilibre:"Régulière et silencieuse",
    stress:   "Courte, saccadée, oppression dans la poitrine"
  },
  bouche: {
    repos:    "Hydratée, salivation normale",
    equilibre:"Confortable, sans sécheresse",
    stress:   "Sèche, pâteuse, difficile d'avaler"
  }
};

export default function NervousSystemInteractiveGauge() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const slider = container.querySelector('#slider') as HTMLElement;
    const stateLabel = container.querySelector('#stateLabel') as HTMLElement;
    const stateReadout = container.querySelector('#stateReadout') as HTMLElement;
    const needleEmoji = container.querySelector('#needleEmoji') as HTMLElement;
    const symptomRows = container.querySelectorAll('.symptom-row');

    function getStateLabel(t: number) {
      if (t < 0.10) return { short: "Repos profond",     full: "Repos profond — récupération maximale" };
      if (t < 0.30) return { short: "Repos",             full: "Repos — détente physiologique" };
      if (t < 0.42) return { short: "Léger repos",       full: "Léger repos — apaisement" };
      if (t < 0.58) return { short: "Équilibre",         full: "Équilibre — ni stress ni repos total" };
      if (t < 0.70) return { short: "Légère activation", full: "Légère activation — vigilance douce" };
      if (t < 0.90) return { short: "Stress",            full: "Stress — alerte soutenue" };
      return                  { short: "Stress aigu",     full: "Stress aigu — survie maximale" };
    }

    function getSymptomKey(t: number) {
      if (t < 0.42) return 'repos';
      if (t < 0.58) return 'equilibre';
      return 'stress';
    }

    function getEmoji(t: number) {
      if (t < 0.15) return '😌';
      if (t < 0.60) return '🙂';
      if (t < 0.80) return '😠';
      return '😡';
    }

    function interpolateColor(t: number) {
      const blue    = [26, 74, 158];
      const neutral = [180, 170, 150];
      const red     = [168, 51, 28];

      let r, g, b;
      if (t < 0.5) {
        const k = t * 2;
        r = blue[0] + (neutral[0] - blue[0]) * k;
        g = blue[1] + (neutral[1] - blue[1]) * k;
        b = blue[2] + (neutral[2] - blue[2]) * k;
      } else {
        const k = (t - 0.5) * 2;
        r = neutral[0] + (red[0] - neutral[0]) * k;
        g = neutral[1] + (red[1] - neutral[1]) * k;
        b = neutral[2] + (red[2] - neutral[2]) * k;
      }
      return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
    }

    function interpolateColorSoft(t: number) {
      const c = interpolateColor(t);
      return c.replace('rgb(', 'rgba(').replace(')', ', 0.18)');
    }

    let currentSymptomKey: string | null = null;

    function setPosition(t: number) {
      t = Math.max(0, Math.min(1, t));

      container.style.setProperty('--t', t.toString());
      const color = interpolateColor(t);
      const colorSoft = interpolateColorSoft(t);
      container.style.setProperty('--color-active', color);
      container.style.setProperty('--color-soft', colorSoft);

      const labels = getStateLabel(t);
      if (stateLabel) stateLabel.textContent = labels.short;
      if (stateReadout) stateReadout.innerHTML = `<em>${labels.full}</em>`;

      const newEmoji = getEmoji(t);
      if (needleEmoji && needleEmoji.textContent !== newEmoji) {
        needleEmoji.textContent = newEmoji;
      }

      if (slider) slider.setAttribute('aria-valuenow', Math.round(t * 100).toString());

      const newKey = getSymptomKey(t);
      if (newKey !== currentSymptomKey) {
        currentSymptomKey = newKey;
        symptomRows.forEach(row => {
          const cat = (row as HTMLElement).dataset.key as keyof typeof SYMPTOMS;
          const txtEl = row.querySelector('.symptom-text');
          if (txtEl && cat && SYMPTOMS[cat]) {
            row.classList.add('is-changing');
            setTimeout(() => {
              txtEl.textContent = SYMPTOMS[cat][newKey];
              row.classList.remove('is-changing');
            }, 150);
          }
        });
      }
    }

    function pointerToT(clientX: number) {
      if (!slider) return 0.5;
      const rect = slider.getBoundingClientRect();
      const x = clientX - rect.left;
      return Math.max(0, Math.min(1, x / rect.width));
    }

    let demoActive = true;
    let demoRafId: number | null = null;
    let userTouched = false;

    function easeInOutCubic(x: number) {
      return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    }

    function animateTo(from: number, to: number, duration: number): Promise<void> {
      return new Promise(resolve => {
        const start = performance.now();
        function step(now: number) {
          if (userTouched) { resolve(); return; }
          const elapsed = now - start;
          const progress = Math.min(1, elapsed / duration);
          const eased = easeInOutCubic(progress);
          const t = from + (to - from) * eased;
          setPosition(t);
          if (progress < 1) {
            demoRafId = requestAnimationFrame(step);
          } else {
            resolve();
          }
        }
        demoRafId = requestAnimationFrame(step);
      });
    }

    function waitAsync(ms: number): Promise<void> {
      return new Promise(resolve => {
        const id = setTimeout(() => resolve(), ms);
        const checkInterval = setInterval(() => {
          if (userTouched) { clearTimeout(id); clearInterval(checkInterval); resolve(); }
        }, 50);
      });
    }

    async function runDemo() {
      await waitAsync(1000);
      if (userTouched) return;
      await animateTo(0.5, 0.85, 1400);
      if (userTouched) return;
      await waitAsync(900);
      if (userTouched) return;
      await animateTo(0.85, 0.15, 2000);
      if (userTouched) return;
      await waitAsync(900);
      if (userTouched) return;
      await animateTo(0.15, 0.5, 1100);
    }

    function stopDemo() {
      userTouched = true;
      if (demoRafId) cancelAnimationFrame(demoRafId);
    }

    let isDragging = false;

    function onPointerDown(e: PointerEvent) {
      e.preventDefault();
      stopDemo();
      isDragging = true;
      if (slider) {
        slider.classList.add('is-dragging');
        slider.setPointerCapture(e.pointerId);
      }
      setPosition(pointerToT(e.clientX));
    }

    function onPointerMove(e: PointerEvent) {
      if (!isDragging) return;
      setPosition(pointerToT(e.clientX));
    }

    function onPointerUp(e: PointerEvent) {
      if (!isDragging) return;
      isDragging = false;
      if (slider) {
        slider.classList.remove('is-dragging');
        try { slider.releasePointerCapture(e.pointerId); } catch(err) {}
      }
    }

    function onKeyDown(e: KeyboardEvent) {
      let t = parseFloat(container.style.getPropertyValue('--t')) || 0.5;
      let changed = false;
      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown')  { t -= 0.05; changed = true; }
      if (e.key === 'ArrowRight'|| e.key === 'ArrowUp')    { t += 0.05; changed = true; }
      if (e.key === 'Home')   { t = 0;   changed = true; }
      if (e.key === 'End')    { t = 1;   changed = true; }
      if (e.key === 'PageUp')   { t += 0.15; changed = true; }
      if (e.key === 'PageDown') { t -= 0.15; changed = true; }
      if (changed) {
        e.preventDefault();
        stopDemo();
        setPosition(t);
      }
    }

    if (slider) {
      slider.addEventListener('pointerdown', onPointerDown as any);
      slider.addEventListener('pointermove', onPointerMove as any);
      slider.addEventListener('pointerup',   onPointerUp as any);
      slider.addEventListener('pointercancel', onPointerUp as any);
      slider.addEventListener('keydown', onKeyDown as any);
    }

    setPosition(0.5);

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reducedMotion) {
      runDemo();
    }

    return () => {
      stopDemo();
      if (slider) {
        slider.removeEventListener('pointerdown', onPointerDown as any);
        slider.removeEventListener('pointermove', onPointerMove as any);
        slider.removeEventListener('pointerup',   onPointerUp as any);
        slider.removeEventListener('pointercancel', onPointerUp as any);
        slider.removeEventListener('keydown', onKeyDown as any);
      }
    };
  }, []);

  return (
    <div className="ic-balance-container" ref={containerRef}>
      <section className="ic-balance" aria-label="Équilibre du système nerveux">
        <div className="gauge-wrap mt-8">
          <span className="state-label" id="stateLabel">Équilibre</span>
          <svg className="gauge-svg" viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#1A4A9E"/>
                <stop offset="25%"  stopColor="#5E8BD9"/>
                <stop offset="50%"  stopColor="#e8e3d5"/>
                <stop offset="75%"  stopColor="#E87555"/>
                <stop offset="100%" stopColor="#A8331C"/>
              </linearGradient>
            </defs>
            <path
              d="M 60,305 A 260,260 0 0 1 580,305"
              fill="none"
              stroke="url(#arcGradient)"
              strokeWidth="36"
              strokeLinecap="round"
            />
            <g className="needle-group">
              <line x1="320" y1="305" x2="320" y2="105"
                    stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="320" cy="305" r="6" fill="#1a1a1a"/>
            </g>
          </svg>
          <div className="needle-emoji" id="needleEmoji">🙂</div>
        </div>

        <div className="gauge-ends">
          <span className="end-left">Repos · Parasympathique</span>
          <span className="end-right">Survie · Sympathique</span>
        </div>

        <div className="slider-container"
             id="slider"
             role="slider"
             aria-valuemin={0}
             aria-valuemax={100}
             aria-valuenow={50}
             aria-label="Position sur la jauge repos-survie"
             tabIndex={0}>
          <div className="slider-track"></div>
          <div className="slider-handle" id="sliderHandle"></div>
        </div>

        <p className="state-readout" id="stateReadout">
          <em>Équilibre — ni stress ni repos total</em>
        </p>

        <div className="symptoms-list" id="symptoms">
          <div className="symptom-row" data-key="coeur">
            <span className="symptom-cat">Le cœur</span>
            <span className="symptom-text">—</span>
          </div>
          <div className="symptom-row" data-key="estomac">
            <span className="symptom-cat">L'estomac</span>
            <span className="symptom-text">—</span>
          </div>
          <div className="symptom-row" data-key="muscles">
            <span className="symptom-cat">Les muscles</span>
            <span className="symptom-text">—</span>
          </div>
          <div className="symptom-row" data-key="respiration">
            <span className="symptom-cat">La respiration</span>
            <span className="symptom-text">—</span>
          </div>
          <div className="symptom-row" data-key="bouche">
            <span className="symptom-cat">La bouche</span>
            <span className="symptom-text">—</span>
          </div>
        </div>
      </section>
    </div>
  );
}
