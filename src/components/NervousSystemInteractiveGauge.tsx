import { useState } from 'react';
import './NervousSystemInteractiveGauge.css';

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export default function NervousSystemInteractiveGauge() {
  const [val, setVal] = useState(50);

  const t = val / 100;

  // Face color
  let faceFill, faceStroke;
  if (t < 0.5) {
    const p = (0.5 - t) / 0.5;
    faceFill = `rgb(${Math.round(lerp(255, 255, p))},${Math.round(lerp(217, 230, p))},${Math.round(lerp(61, 100, p))})`;
    faceStroke = '#e6b800';
  } else {
    const p = (t - 0.5) / 0.5;
    faceFill = `rgb(${Math.round(lerp(255, 240, p))},${Math.round(lerp(217, 140, p))},${Math.round(lerp(61, 50, p))})`;
    faceStroke = `rgb(${Math.round(lerp(230, 200, p))},${Math.round(lerp(184, 80, p))},40)`;
  }

  // Eyes
  let eyeRy, eyeRx;
  if (t < 0.2) {
    eyeRy = 1.2; eyeRx = 4;
  } else if (t < 0.5) {
    const p = (t - 0.2) / 0.3;
    eyeRy = lerp(1.2, 3.5, p); eyeRx = lerp(4, 3, p);
  } else if (t < 0.7) {
    eyeRy = 3.5; eyeRx = 3;
  } else {
    const p = (t - 0.7) / 0.3;
    eyeRy = lerp(3.5, 5, p); eyeRx = lerp(3, 3.5, p);
  }

  // Eyebrows
  let browLeftD, browRightD, browStrokeWidth;
  if (t < 0.3) {
    browLeftD = 'M265 256 Q271 252, 276 256'; browRightD = 'M284 256 Q289 252, 295 256'; browStrokeWidth = 1.8;
  } else if (t < 0.6) {
    browLeftD = 'M265 258 Q271 255, 276 258'; browRightD = 'M284 258 Q289 255, 295 258'; browStrokeWidth = 1.8;
  } else if (t < 0.8) {
    browLeftD = 'M264 256 Q270 258, 277 255'; browRightD = 'M283 255 Q290 258, 296 256'; browStrokeWidth = 1.8;
  } else {
    browLeftD = 'M263 254 Q270 259, 278 253'; browRightD = 'M282 253 Q290 259, 297 254'; browStrokeWidth = 2.2;
  }

  // Mouth
  let mouthD, mouthStrokeWidth;
  if (t < 0.15) {
    mouthD = 'M264 278 Q280 290, 296 278'; mouthStrokeWidth = 2.5;
  } else if (t < 0.35) {
    mouthD = 'M266 278 Q280 287, 294 278'; mouthStrokeWidth = 2.5;
  } else if (t < 0.55) {
    const p = (t - 0.35) / 0.2;
    mouthD = `M268 278 Q280 ${Math.round(lerp(285, 281, p))}, 292 278`; mouthStrokeWidth = 2.5;
  } else if (t < 0.75) {
    const p = (t - 0.55) / 0.2;
    mouthD = `M268 280 Q280 ${Math.round(lerp(280, 276, p))}, 292 280`; mouthStrokeWidth = 2.5;
  } else {
    const p = (t - 0.75) / 0.25;
    mouthD = `M266 282 Q280 ${Math.round(lerp(276, 270, p))}, 294 282`; mouthStrokeWidth = lerp(2.5, 3, p);
  }

  // Opacities
  const sweatOpacity = t > 0.7 ? Math.min(1, (t - 0.7) / 0.2) : 0;
  const blushOpacity = t < 0.35 ? ((0.35 - t) / 0.35) * 0.5 : 0;
  const zenOpacity = t < 0.2 ? (0.2 - t) / 0.2 : 0;
  const stressOpacity = t > 0.75 ? Math.min(1, (t - 0.75) / 0.15) : 0;

  // States
  const parasympathetic = val < 42;
  const sympathetic = val > 58;
  const paraStrength = Math.max(0, (50 - val) / 50);
  const sympaStrength = Math.max(0, (val - 50) / 50);

  // Labels
  let sliderLabelText, sliderLabelColor;
  if (val < 20) {
    sliderLabelText = 'Repos profond — régénération maximale'; sliderLabelColor = '#2955a8';
  } else if (val < 42) {
    sliderLabelText = 'Calme — système parasympathique actif'; sliderLabelColor = '#3a6abf';
  } else if (val <= 58) {
    sliderLabelText = 'Équilibre — ni stress ni repos total'; sliderLabelColor = '#666';
  } else if (val <= 80) {
    sliderLabelText = 'Alerte — système sympathique actif'; sliderLabelColor = '#d06030';
  } else {
    sliderLabelText = 'Stress intense — mode survie activé'; sliderLabelColor = '#c94a1a';
  }

  return (
    <div className="gauge-container">
      {/* Gauge */}
      <div className="gauge-wrapper">
        <div 
          className="thought-bubble thought-calm" 
          style={{ opacity: parasympathetic ? Math.min(1, paraStrength * 2) : 0, transform: parasympathetic ? 'translateY(0)' : 'translateY(10px)' }}
        >
          Pensée calme<small>"Tout va bien"</small>
        </div>
        <div 
          className="thought-bubble thought-urgent"
          style={{ opacity: sympathetic ? Math.min(1, sympaStrength * 2) : 0, transform: sympathetic ? 'translateY(0)' : 'translateY(10px)' }}
        >
          Pensée urgente<small>"Danger !"</small>
        </div>

        <svg className="gauge-svg" viewBox="0 0 560 300" overflow="visible">
          <defs>
            <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4a7ddc"/>
              <stop offset="35%" stopColor="#b8cef0"/>
              <stop offset="50%" stopColor="#e0ddd8"/>
              <stop offset="65%" stopColor="#f0c8a8"/>
              <stop offset="100%" stopColor="#e06030"/>
            </linearGradient>
          </defs>

          {/* Arc background */}
          <path d="M 50 270 A 230 230 0 0 1 510 270" fill="none" stroke="url(#arcGrad)" strokeWidth="30" strokeLinecap="round"/>

          {/* Équilibre label */}
          <text x="280" y="10" textAnchor="middle" fontSize="18" fontWeight="600" fill="#888">Équilibre</text>

          {/* Needle */}
          <g transform={`rotate(${(val - 50) * 1.8}, 280, 270)`}>
            <line x1="280" y1="270" x2="280" y2="65" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round"/>
          </g>

          {/* Smiley face */}
          <g>
            <circle cx="280" cy="270" r="26" fill={faceFill} stroke={faceStroke} strokeWidth="2.5" />
            <ellipse cx="271" cy="264" rx={eyeRx} ry={eyeRy} fill="#2d2d2d"/>
            <ellipse cx="289" cy="264" rx={eyeRx} ry={eyeRy} fill="#2d2d2d"/>
            <path d={browLeftD} fill="none" stroke="#2d2d2d" strokeWidth={browStrokeWidth} strokeLinecap="round"/>
            <path d={browRightD} fill="none" stroke="#2d2d2d" strokeWidth={browStrokeWidth} strokeLinecap="round"/>
            <path d={mouthD} fill="none" stroke="#2d2d2d" strokeWidth={mouthStrokeWidth} strokeLinecap="round"/>
            
            <g opacity={sweatOpacity}>
              <ellipse cx="302" cy="258" rx="3" ry="5" fill="#88ccff"/>
              <ellipse cx="302" cy="256" rx="2" ry="2" fill="#bbddff"/>
            </g>
            
            <circle cx="265" cy="274" r="5" fill="#ffb3b3" opacity={blushOpacity}/>
            <circle cx="295" cy="274" r="5" fill="#ffb3b3" opacity={blushOpacity}/>
            
            <g opacity={zenOpacity}>
              <line x1="254" y1="260" x2="248" y2="258" stroke="#88bbdd" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="254" y1="265" x2="247" y2="265" stroke="#88bbdd" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="306" y1="260" x2="312" y2="258" stroke="#88bbdd" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="306" y1="265" x2="313" y2="265" stroke="#88bbdd" strokeWidth="1.5" strokeLinecap="round"/>
            </g>
            
            <g opacity={stressOpacity}>
              <line x1="250" y1="254" x2="244" y2="250" stroke="#dd5533" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="310" y1="254" x2="316" y2="250" stroke="#dd5533" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="252" y1="260" x2="245" y2="260" stroke="#dd5533" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="308" y1="260" x2="315" y2="260" stroke="#dd5533" strokeWidth="1.5" strokeLinecap="round"/>
            </g>
          </g>
        </svg>
      </div>

      {/* Labels */}
      <div className="gauge-labels">
        <div className="label-left">Repos · Parasympathique</div>
        <div className="label-right">Survie · Sympathique</div>
      </div>

      {/* Slider */}
      <div className="slider-container">
        <div className="slider-track"></div>
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={val} 
          onChange={(e) => setVal(parseInt(e.target.value))}
        />
      </div>

      <div className="slider-label" style={{ color: sliderLabelColor }}>{sliderLabelText}</div>

      {/* Side labels */}
      <div className="side-labels">
        <div className="side-label-left" style={{ opacity: sympathetic ? 0.3 : 1 }}>REPOS<span>Parasympathique</span></div>
        <div className="side-label-right" style={{ opacity: parasympathetic ? 0.3 : 1 }}>SURVIE<span>Sympathique</span></div>
      </div>

      {/* Panels */}
      <div className="panels">
        {/* Parasympathique */}
        <div className={`panel panel-para ${parasympathetic ? 'active' : sympathetic ? 'dimmed' : ''}`}>
          <div className="panel-title">Parasympathique</div>

          <div className="hormone-row">
            <span className="hormone-badge">Sérotonine</span>
            <span className="hormone-desc">Bien-être, humeur stable, sentiment de sécurité</span>
          </div>
          <div className="hormone-row">
            <span className="hormone-badge">Dopamine</span>
            <span className="hormone-desc">Motivation, plaisir, concentration calme</span>
          </div>
          <div className="hormone-row">
            <span className="hormone-badge">Ocytocine</span>
            <span className="hormone-desc">Lien social, confiance, apaisement</span>
          </div>
          <div className="hormone-row">
            <span className="hormone-badge">Mélatonine</span>
            <span className="hormone-desc">Sommeil profond, régénération nocturne</span>
          </div>

          <div className="symptoms-title">Ce que tu ressens</div>
          <ul className="symptom-list">
            <li>Diminution du rythme cardiaque</li>
            <li>Baisse de la tension artérielle</li>
            <li>Digestion fluide</li>
            <li>Muscles relâchés</li>
            <li>Respiration lente et profonde</li>
            <li>Clarté mentale</li>
            <li>Sommeil récupérateur</li>
          </ul>
        </div>

        {/* Sympathique */}
        <div className={`panel panel-sympa ${sympathetic ? 'active' : parasympathetic ? 'dimmed' : ''}`}>
          <div className="panel-title">Sympathique</div>

          <div className="hormone-row">
            <span className="hormone-badge">Cortisol</span>
            <span className="hormone-desc">Stress chronique, épuisement, inflammation</span>
          </div>
          <div className="hormone-row">
            <span className="hormone-badge">Adrénaline</span>
            <span className="hormone-desc">Réponse immédiate, cœur qui s'emballe</span>
          </div>
          <div className="hormone-row">
            <span className="hormone-badge">Noradrénaline</span>
            <span className="hormone-desc">Vigilance extrême, hyperactivité mentale</span>
          </div>
          <div className="hormone-row">
            <span className="hormone-badge">Glucagon</span>
            <span className="hormone-desc">Libération de sucre — énergie d'urgence</span>
          </div>

          <div className="symptoms-title">Ce que tu ressens</div>
          <ul className="symptom-list">
            <li>Augmentation du rythme cardiaque</li>
            <li>Augmentation de la tension artérielle</li>
            <li>Digestion bloquée</li>
            <li>Tension musculaire, épaules tendues</li>
            <li>Tension de la nuque</li>
            <li>Respiration courte, thoracique et haute</li>
            <li>Brouillard mental</li>
            <li>Sommeil perturbé</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
