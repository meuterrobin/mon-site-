import { useState } from 'react';
import './BrainEmotionWidget.css';

type EmotionKey = 'joie' | 'amour' | 'peur' | 'colere' | 'tristesse' | 'stress';

const EMOTIONS: Record<EmotionKey, { icon: string, name: string, color: string, tag: string, regions: string[], regionNames: string, connections: string[] }> = {
  joie: {
    icon: '😊', name: 'Joie', color: '#E8A117', tag: 'Circuit de récompense',
    regions: ['striatum', 'prefrontal', 'cingulate'], regionNames: 'Striatum · Cortex préfrontal · Cingulaire antérieur',
    connections: ['c-prefrontal-striatum', 'c-cingulate-striatum', 'c-prefrontal-cingulate'],
  },
  amour: {
    icon: '🥰', name: 'Amour', color: '#E85D75', tag: 'Zones du lien',
    regions: ['striatum', 'insula', 'cingulate'], regionNames: 'Noyau accumbens · Insula · Cingulaire antérieur',
    connections: ['c-striatum-accumbens', 'c-insula-cingulate', 'c-cingulate-striatum'],
  },
  peur: {
    icon: '😨', name: 'Peur', color: '#6B4B9A', tag: "Zones d'alerte",
    regions: ['amygdala', 'hypothalamus', 'hippocampus'], regionNames: 'Amygdale · Hypothalamus · Hippocampe',
    connections: ['c-amygdala-hypothalamus', 'c-amygdala-hippocampus'],
  },
  colere: {
    icon: '😠', name: 'Colère', color: '#D64545', tag: "Zones d'alerte",
    regions: ['amygdala', 'hypothalamus', 'prefrontal'], regionNames: 'Amygdale · Hypothalamus · Cortex préfrontal',
    connections: ['c-amygdala-hypothalamus', 'c-amygdala-prefrontal'],
  },
  tristesse: {
    icon: '😢', name: 'Tristesse', color: '#4A7FD1', tag: 'Zones du repli',
    regions: ['cingulate', 'insula', 'prefrontal'], regionNames: 'Cingulaire subgénual · Insula · Cortex préfrontal',
    connections: ['c-insula-cingulate', 'c-insula-prefrontal', 'c-prefrontal-cingulate'],
  },
  stress: {
    icon: '😰', name: 'Stress', color: '#E8862E', tag: "Zones d'alerte",
    regions: ['amygdala', 'hypothalamus', 'hippocampus', 'prefrontal'], regionNames: 'Amygdale · Hypothalamus · Hippocampe · Préfrontal',
    connections: ['c-amygdala-hypothalamus', 'c-amygdala-hippocampus', 'c-amygdala-prefrontal'],
  },
};

export default function BrainEmotionWidget() {
  const [activeEmotion, setActiveEmotion] = useState<EmotionKey | null>(null);

  const isActiveRegion = (regionId: string) => activeEmotion && EMOTIONS[activeEmotion].regions.includes(regionId);
  const getRegionColor = (regionId: string) => isActiveRegion(regionId) ? EMOTIONS[activeEmotion!].color : undefined;
  
  const isActiveConnection = (connId: string) => activeEmotion && EMOTIONS[activeEmotion].connections.includes(connId);
  const getConnectionColor = (connId: string) => isActiveConnection(connId) ? EMOTIONS[activeEmotion!].color : undefined;

  const currentEmotion = activeEmotion ? EMOTIONS[activeEmotion] : null;

  return (
    <div className="ic-emotions">
      {/* Emoji picker */}
      <div className="ic-picker">
        {(Object.entries(EMOTIONS) as [EmotionKey, typeof EMOTIONS[EmotionKey]][]).map(([key, emo]) => (
          <button 
            key={key}
            className={`ic-emo-btn ${activeEmotion === key ? 'selected' : ''}`}
            onClick={() => setActiveEmotion(key)}
          >
            <span className="ic-emo-face">{emo.icon}</span>
            <span className="ic-emo-name">{emo.name}</span>
          </button>
        ))}
      </div>

      {/* Brain */}
      <div className="ic-brain-stage">
        <svg className="ic-brain-svg" viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <radialGradient id="icBrainGrad" cx="35%" cy="30%" r="85%">
              <stop offset="0%"  stopColor="#f5ebe0"/>
              <stop offset="50%" stopColor="#e8d4bf"/>
              <stop offset="100%" stopColor="#c9a98a"/>
            </radialGradient>
            <radialGradient id="icCerebellumGrad" cx="40%" cy="30%" r="80%">
              <stop offset="0%"  stopColor="#e8d4bf"/>
              <stop offset="100%" stopColor="#b8946f"/>
            </radialGradient>
            <linearGradient id="icStemGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"  stopColor="#d9b898"/>
              <stop offset="100%" stopColor="#a98566"/>
            </linearGradient>
            <filter id="icSoftGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <filter id="icBrainShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="5"/>
              <feOffset dx="2" dy="5" result="offsetblur"/>
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.16"/>
              </feComponentTransfer>
              <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <radialGradient id="icInnerShadow" cx="50%" cy="50%" r="65%">
              <stop offset="60%" stopColor="#000" stopOpacity="0"/>
              <stop offset="100%" stopColor="#000" stopOpacity="0.18"/>
            </radialGradient>
            <radialGradient id="icHighlight" cx="30%" cy="25%" r="35%">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.55"/>
              <stop offset="100%" stopColor="#fff" stopOpacity="0"/>
            </radialGradient>
          </defs>

          <g filter="url(#icBrainShadow)">
            {/* Brainstem */}
            <path d="M 395,340 C 398,360 402,385 410,400 L 430,400 C 436,385 438,360 438,338 Z" fill="url(#icStemGrad)"/>
            {/* Cerebellum */}
            <path d="M 445,260 C 490,258 520,275 520,310 C 520,340 495,355 465,355 C 440,355 420,348 415,325 C 412,300 420,270 445,260 Z" fill="url(#icCerebellumGrad)"/>
            <g stroke="#8a6a4a" strokeWidth="0.6" strokeOpacity="0.5" fill="none">
              <path d="M 430,285 Q 470,282 510,287"/>
              <path d="M 425,300 Q 468,297 513,303"/>
              <path d="M 425,315 Q 470,313 510,319"/>
              <path d="M 430,330 Q 470,329 505,333"/>
            </g>
            {/* Cerebrum */}
            <path id="icCerebrum" d="M 150,255 C 115,238 92,195 102,150 C 115,100 165,70 225,62 C 310,54 400,62 455,92 C 510,122 535,170 528,220 C 522,258 498,280 465,285 C 440,288 420,282 410,275 C 395,310 355,330 300,330 C 250,330 195,312 170,290 C 158,280 150,268 150,255 Z" fill="url(#icBrainGrad)"/>
            {/* Sulci */}
            <g stroke="#8a6a4a" strokeWidth="0.9" strokeOpacity="0.45" fill="none" strokeLinecap="round">
              <path d="M 145,200 Q 170,180 195,190"/>
              <path d="M 155,175 Q 185,155 215,165"/>
              <path d="M 145,230 Q 175,215 200,225"/>
              <path d="M 280,75 Q 275,130 260,200 Q 250,245 240,285" strokeWidth="1.1" strokeOpacity="0.55"/>
              <path d="M 310,80 Q 330,115 325,155"/>
              <path d="M 350,75 Q 370,110 365,155"/>
              <path d="M 220,275 Q 270,265 315,270"/>
              <path d="M 215,295 Q 270,285 320,292"/>
              <path d="M 460,150 Q 490,170 510,200"/>
              <path d="M 470,190 Q 500,210 518,240"/>
              <path d="M 205,245 Q 280,235 365,255" strokeWidth="1.3" strokeOpacity="0.6"/>
            </g>
            {/* Inner shadow */}
            <path d="M 150,255 C 115,238 92,195 102,150 C 115,100 165,70 225,62 C 310,54 400,62 455,92 C 510,122 535,170 528,220 C 522,258 498,280 465,285 C 440,288 420,282 410,275 C 395,310 355,330 300,330 C 250,330 195,312 170,290 C 158,280 150,268 150,255 Z" fill="url(#icInnerShadow)" pointerEvents="none"/>
            {/* Highlight */}
            <ellipse cx="210" cy="115" rx="80" ry="30" fill="url(#icHighlight)" pointerEvents="none"/>
          </g>

          {/* Inner regions */}
          <g className={`ic-region ${isActiveRegion('prefrontal') ? 'active' : ''}`} style={{ color: getRegionColor('prefrontal') }}>
            <ellipse cx="155" cy="165" rx="32" ry="42" fill="currentColor" fillOpacity="0.5" filter="url(#icSoftGlow)"/>
            <ellipse cx="155" cy="165" rx="18" ry="26" fill="currentColor" fillOpacity="0.85"/>
          </g>
          <g className={`ic-region ${isActiveRegion('cingulate') ? 'active' : ''}`} style={{ color: getRegionColor('cingulate') }}>
            <path d="M 200,145 Q 260,118 330,140 Q 335,148 328,155 Q 265,138 205,158 Q 198,152 200,145 Z" fill="currentColor" fillOpacity="0.75" filter="url(#icSoftGlow)"/>
          </g>
          <g className={`ic-region ${isActiveRegion('striatum') ? 'active' : ''}`} style={{ color: getRegionColor('striatum') }}>
            <ellipse cx="260" cy="200" rx="22" ry="16" fill="currentColor" fillOpacity="0.5" filter="url(#icSoftGlow)"/>
            <ellipse cx="260" cy="200" rx="12" ry="9" fill="currentColor" fillOpacity="0.9"/>
          </g>
          <g className={`ic-region ${isActiveRegion('insula') ? 'active' : ''}`} style={{ color: getRegionColor('insula') }}>
            <path d="M 230,230 Q 250,220 270,235 Q 275,250 260,258 Q 238,258 228,245 Q 224,237 230,230 Z" fill="currentColor" fillOpacity="0.75" filter="url(#icSoftGlow)"/>
          </g>
          <g className={`ic-region ${isActiveRegion('amygdala') ? 'active' : ''}`} style={{ color: getRegionColor('amygdala') }}>
            <ellipse cx="275" cy="275" rx="13" ry="10" transform="rotate(-15 275 275)" fill="currentColor" fillOpacity="0.5" filter="url(#icSoftGlow)"/>
            <ellipse cx="275" cy="275" rx="8" ry="6" transform="rotate(-15 275 275)" fill="currentColor" fillOpacity="0.95"/>
          </g>
          <g className={`ic-region ${isActiveRegion('hippocampus') ? 'active' : ''}`} style={{ color: getRegionColor('hippocampus') }}>
            <path d="M 295,280 Q 320,275 335,285 Q 340,293 333,298 Q 318,290 298,294 Q 290,290 295,280 Z" fill="currentColor" fillOpacity="0.75" filter="url(#icSoftGlow)"/>
          </g>
          <g className={`ic-region ${isActiveRegion('hypothalamus') ? 'active' : ''}`} style={{ color: getRegionColor('hypothalamus') }}>
            <circle cx="310" cy="240" r="10" fill="currentColor" fillOpacity="0.5" filter="url(#icSoftGlow)"/>
            <circle cx="310" cy="240" r="5" fill="currentColor" fillOpacity="0.95"/>
          </g>

          {/* Connections */}
          <g stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round">
            <path className={`ic-connection ${isActiveConnection('c-prefrontal-striatum') ? 'active' : ''}`} style={{ color: getConnectionColor('c-prefrontal-striatum') }} d="M 155,165 Q 210,180 260,200"/>
            <path className={`ic-connection ${isActiveConnection('c-prefrontal-cingulate') ? 'active' : ''}`} style={{ color: getConnectionColor('c-prefrontal-cingulate') }} d="M 165,155 Q 195,140 230,142"/>
            <path className={`ic-connection ${isActiveConnection('c-cingulate-striatum') ? 'active' : ''}`} style={{ color: getConnectionColor('c-cingulate-striatum') }} d="M 270,148 Q 270,170 260,200"/>
            <path className={`ic-connection ${isActiveConnection('c-striatum-accumbens') ? 'active' : ''}`} style={{ color: getConnectionColor('c-striatum-accumbens') }} d="M 260,200 Q 285,218 310,235"/>
            <path className={`ic-connection ${isActiveConnection('c-amygdala-hypothalamus') ? 'active' : ''}`} style={{ color: getConnectionColor('c-amygdala-hypothalamus') }} d="M 275,270 Q 295,252 310,242"/>
            <path className={`ic-connection ${isActiveConnection('c-amygdala-hippocampus') ? 'active' : ''}`} style={{ color: getConnectionColor('c-amygdala-hippocampus') }} d="M 285,272 Q 305,275 320,282"/>
            <path className={`ic-connection ${isActiveConnection('c-amygdala-prefrontal') ? 'active' : ''}`} style={{ color: getConnectionColor('c-amygdala-prefrontal') }} d="M 268,270 Q 210,240 165,180"/>
            <path className={`ic-connection ${isActiveConnection('c-insula-cingulate') ? 'active' : ''}`} style={{ color: getConnectionColor('c-insula-cingulate') }} d="M 250,232 Q 255,195 265,158"/>
            <path className={`ic-connection ${isActiveConnection('c-insula-prefrontal') ? 'active' : ''}`} style={{ color: getConnectionColor('c-insula-prefrontal') }} d="M 235,235 Q 195,205 165,180"/>
          </g>
        </svg>
      </div>

      {/* Caption below brain */}
      <div className={`ic-caption ${!activeEmotion ? 'empty' : ''}`}>
        <div className="ic-prompt">Touchez une émotion pour voir son activation</div>
        <div>
          <span className="ic-tag" style={{ background: currentEmotion ? `${currentEmotion.color}1F` : undefined, color: currentEmotion?.color }}>
            {currentEmotion?.tag || '—'}
          </span>
        </div>
        <div className="ic-regions">
          {currentEmotion?.regionNames || '—'}
        </div>
      </div>
    </div>
  );
}
