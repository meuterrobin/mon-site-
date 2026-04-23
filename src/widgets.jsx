// BrainEmotionWidget, NervousSystemGauge, OrganExplorer
const { useState: useStateW } = React;

// ─── Brain + Emotions ──────────────────────────────────────────────
function BrainEmotionWidget() {
  const [active, setActive] = useStateW(null);
  const isActiveRegion = id => active && EMOTIONS[active].regions.includes(id);
  const isActiveConn = id => active && EMOTIONS[active].connections.includes(id);
  const col = id => isActiveRegion(id) ? EMOTIONS[active].color : 'transparent';
  const cCol = id => isActiveConn(id) ? EMOTIONS[active].color : 'transparent';
  const cur = active ? EMOTIONS[active] : null;

  return (
    <div style={{
      fontFamily:"'DM Sans',sans-serif", color:'#1a1a1a',
      maxWidth:520, margin:'0 auto', padding:'8px 16px 0'
    }}>
      <div style={{
        display:'grid', gridTemplateColumns:'repeat(6,1fr)', gap:6, marginBottom:8
      }}>
        {Object.entries(EMOTIONS).map(([k, e]) => (
          <button key={k} onClick={() => setActive(k)} style={{
            background: active===k ? '#1a1a1a' : 'transparent',
            border:'1px solid ' + (active===k?'#1a1a1a':'#ebe8e2'),
            borderRadius:14, padding:'10px 4px 8px', cursor:'pointer',
            display:'flex', flexDirection:'column', alignItems:'center', gap:4,
            transition:'all .25s'
          }}>
            <span style={{ fontSize:24, lineHeight:1 }}>{e.icon}</span>
            <span style={{
              fontFamily:"'Fraunces',serif", fontSize:12, fontStyle:'italic',
              color: active===k ? '#fff' : '#5a5a5a'
            }}>{e.name}</span>
          </button>
        ))}
      </div>

      <div style={{
        position:'relative', width:'100%', aspectRatio:'4/3',
        display:'flex', alignItems:'center', justifyContent:'center'
      }}>
        <svg viewBox="0 0 640 420" style={{ width:'100%', height:'100%', overflow:'visible' }}>
          <defs>
            <radialGradient id="icBrainGrad" cx="35%" cy="30%" r="85%">
              <stop offset="0%" stopColor="#f5ebe0"/><stop offset="50%" stopColor="#e8d4bf"/><stop offset="100%" stopColor="#c9a98a"/>
            </radialGradient>
            <radialGradient id="icCerebellumGrad" cx="40%" cy="30%" r="80%">
              <stop offset="0%" stopColor="#e8d4bf"/><stop offset="100%" stopColor="#b8946f"/>
            </radialGradient>
            <linearGradient id="icStemGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d9b898"/><stop offset="100%" stopColor="#a98566"/>
            </linearGradient>
            <filter id="icSoftGlow"><feGaussianBlur stdDeviation="3"/></filter>
          </defs>

          <g>
            <path d="M 395,340 C 398,360 402,385 410,400 L 430,400 C 436,385 438,360 438,338 Z" fill="url(#icStemGrad)"/>
            <path d="M 445,260 C 490,258 520,275 520,310 C 520,340 495,355 465,355 C 440,355 420,348 415,325 C 412,300 420,270 445,260 Z" fill="url(#icCerebellumGrad)"/>
            <path d="M 150,255 C 115,238 92,195 102,150 C 115,100 165,70 225,62 C 310,54 400,62 455,92 C 510,122 535,170 528,220 C 522,258 498,280 465,285 C 440,288 420,282 410,275 C 395,310 355,330 300,330 C 250,330 195,312 170,290 C 158,280 150,268 150,255 Z" fill="url(#icBrainGrad)"/>
            <g stroke="#8a6a4a" strokeWidth="0.9" strokeOpacity="0.45" fill="none" strokeLinecap="round">
              <path d="M 145,200 Q 170,180 195,190"/><path d="M 155,175 Q 185,155 215,165"/>
              <path d="M 280,75 Q 275,130 260,200 Q 250,245 240,285" strokeOpacity="0.55"/>
              <path d="M 310,80 Q 330,115 325,155"/><path d="M 350,75 Q 370,110 365,155"/>
              <path d="M 220,275 Q 270,265 315,270"/><path d="M 460,150 Q 490,170 510,200"/>
              <path d="M 205,245 Q 280,235 365,255" strokeOpacity="0.6"/>
            </g>
          </g>

          {/* Regions */}
          <g style={{ color: col('prefrontal'), opacity: isActiveRegion('prefrontal')?1:0, transition:'opacity .5s' }}>
            <ellipse cx="155" cy="165" rx="32" ry="42" fill="currentColor" fillOpacity="0.5"/>
            <ellipse cx="155" cy="165" rx="18" ry="26" fill="currentColor" fillOpacity="0.85"/>
          </g>
          <g style={{ color: col('cingulate'), opacity: isActiveRegion('cingulate')?1:0, transition:'opacity .5s' }}>
            <path d="M 200,145 Q 260,118 330,140 Q 335,148 328,155 Q 265,138 205,158 Q 198,152 200,145 Z" fill="currentColor" fillOpacity="0.75"/>
          </g>
          <g style={{ color: col('striatum'), opacity: isActiveRegion('striatum')?1:0, transition:'opacity .5s' }}>
            <ellipse cx="260" cy="200" rx="22" ry="16" fill="currentColor" fillOpacity="0.5"/>
            <ellipse cx="260" cy="200" rx="12" ry="9" fill="currentColor" fillOpacity="0.9"/>
          </g>
          <g style={{ color: col('insula'), opacity: isActiveRegion('insula')?1:0, transition:'opacity .5s' }}>
            <path d="M 230,230 Q 250,220 270,235 Q 275,250 260,258 Q 238,258 228,245 Q 224,237 230,230 Z" fill="currentColor" fillOpacity="0.75"/>
          </g>
          <g style={{ color: col('amygdala'), opacity: isActiveRegion('amygdala')?1:0, transition:'opacity .5s' }}>
            <ellipse cx="275" cy="275" rx="13" ry="10" transform="rotate(-15 275 275)" fill="currentColor" fillOpacity="0.5"/>
            <ellipse cx="275" cy="275" rx="8" ry="6" transform="rotate(-15 275 275)" fill="currentColor" fillOpacity="0.95"/>
          </g>
          <g style={{ color: col('hippocampus'), opacity: isActiveRegion('hippocampus')?1:0, transition:'opacity .5s' }}>
            <path d="M 295,280 Q 320,275 335,285 Q 340,293 333,298 Q 318,290 298,294 Q 290,290 295,280 Z" fill="currentColor" fillOpacity="0.75"/>
          </g>
          <g style={{ color: col('hypothalamus'), opacity: isActiveRegion('hypothalamus')?1:0, transition:'opacity .5s' }}>
            <circle cx="310" cy="240" r="10" fill="currentColor" fillOpacity="0.5"/>
            <circle cx="310" cy="240" r="5" fill="currentColor" fillOpacity="0.95"/>
          </g>

          {/* Connections */}
          <g strokeWidth="1.4" fill="none" strokeLinecap="round" strokeDasharray="3 4">
            {[
              ['c-prefrontal-striatum',  'M 155,165 Q 210,180 260,200'],
              ['c-prefrontal-cingulate', 'M 165,155 Q 195,140 230,142'],
              ['c-cingulate-striatum',   'M 270,148 Q 270,170 260,200'],
              ['c-striatum-accumbens',   'M 260,200 Q 285,218 310,235'],
              ['c-amygdala-hypothalamus','M 275,270 Q 295,252 310,242'],
              ['c-amygdala-hippocampus', 'M 285,272 Q 305,275 320,282'],
              ['c-amygdala-prefrontal',  'M 268,270 Q 210,240 165,180'],
              ['c-insula-cingulate',     'M 250,232 Q 255,195 265,158'],
              ['c-insula-prefrontal',    'M 235,235 Q 195,205 165,180'],
            ].map(([id, d]) => (
              <path key={id} d={d} stroke={cCol(id)} strokeOpacity={isActiveConn(id)?0.45:0}
                style={{ transition:'stroke-opacity .6s, stroke .6s' }}/>
            ))}
          </g>
        </svg>
      </div>

      <div style={{ marginTop:8, textAlign:'center', minHeight:76 }}>
        {!active ? (
          <div style={{ fontFamily:"'Fraunces',serif", fontStyle:'italic', fontSize:15, color:'#9a9a9a' }}>
            Touchez une émotion pour voir son activation
          </div>
        ) : (
          <>
            <div>
              <span style={{
                display:'inline-block', fontFamily:"'Fraunces',serif", fontStyle:'italic',
                fontSize:14, padding:'5px 14px', borderRadius:9999,
                background: cur.color+'1F', color: cur.color, marginBottom:10
              }}>{cur.tag}</span>
            </div>
            <div style={{ fontSize:13, color:'#5a5a5a', lineHeight:1.5 }}>
              {cur.regionNames}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Nervous System Gauge ─────────────────────────────────────────
const lerp = (a, b, t) => a + (b - a) * t;

function NervousSystemGauge() {
  const [val, setVal] = useStateW(50);
  const t = val / 100;

  let faceFill, faceStroke;
  if (t < 0.5) {
    const p = (0.5 - t) / 0.5;
    faceFill = `rgb(255,${Math.round(lerp(217,230,p))},${Math.round(lerp(61,100,p))})`;
    faceStroke = '#e6b800';
  } else {
    const p = (t - 0.5) / 0.5;
    faceFill = `rgb(${Math.round(lerp(255,240,p))},${Math.round(lerp(217,140,p))},${Math.round(lerp(61,50,p))})`;
    faceStroke = `rgb(${Math.round(lerp(230,200,p))},${Math.round(lerp(184,80,p))},40)`;
  }

  let eyeRy, eyeRx;
  if (t < 0.2) { eyeRy=1.2; eyeRx=4; }
  else if (t < 0.5) { const p=(t-0.2)/0.3; eyeRy=lerp(1.2,3.5,p); eyeRx=lerp(4,3,p); }
  else if (t < 0.7) { eyeRy=3.5; eyeRx=3; }
  else { const p=(t-0.7)/0.3; eyeRy=lerp(3.5,5,p); eyeRx=lerp(3,3.5,p); }

  let mouthD, mouthSW;
  if (t < 0.15)      { mouthD='M264 278 Q280 290, 296 278'; mouthSW=2.5; }
  else if (t < 0.35) { mouthD='M266 278 Q280 287, 294 278'; mouthSW=2.5; }
  else if (t < 0.55) { const p=(t-0.35)/0.2; mouthD=`M268 278 Q280 ${Math.round(lerp(285,281,p))}, 292 278`; mouthSW=2.5; }
  else if (t < 0.75) { const p=(t-0.55)/0.2; mouthD=`M268 280 Q280 ${Math.round(lerp(280,276,p))}, 292 280`; mouthSW=2.5; }
  else               { const p=(t-0.75)/0.25; mouthD=`M266 282 Q280 ${Math.round(lerp(276,270,p))}, 294 282`; mouthSW=lerp(2.5,3,p); }

  const parasympathetic = val < 42;
  const sympathetic = val > 58;
  const sweatOp = t>0.7 ? Math.min(1,(t-0.7)/0.2) : 0;
  const blushOp = t<0.35 ? ((0.35-t)/0.35)*0.5 : 0;

  let lbl, lblCol;
  if (val<20)       { lbl='Repos profond — régénération maximale'; lblCol='#2955a8'; }
  else if (val<42)  { lbl='Calme — système parasympathique actif'; lblCol='#3a6abf'; }
  else if (val<=58) { lbl='Équilibre — ni stress ni repos total';  lblCol='#666';    }
  else if (val<=80) { lbl='Alerte — système sympathique actif';    lblCol='#d06030'; }
  else              { lbl='Stress intense — mode survie activé';   lblCol='#c94a1a'; }

  return (
    <div style={{ maxWidth:920, width:'100%', margin:'0 auto', fontFamily:'Inter,sans-serif', color:'#2d2d2d' }}>
      <div style={{ position:'relative', width:'100%', height:310, display:'flex', justifyContent:'center', alignItems:'flex-end', marginBottom:10 }}>
        <div style={{
          position:'absolute', left:20, top:50, padding:'10px 18px', borderRadius:14,
          fontSize:13, fontWeight:600, textAlign:'center', background:'#e8f0fe',
          border:'2px solid #4a7ddc', color:'#2955a8',
          opacity: parasympathetic?1:0, transition:'opacity .5s', pointerEvents:'none'
        }}>Pensée calme<br/><small style={{ fontWeight:400, fontSize:11 }}>« Tout va bien »</small></div>
        <div style={{
          position:'absolute', right:20, top:50, padding:'10px 18px', borderRadius:14,
          fontSize:13, fontWeight:600, textAlign:'center', background:'#fde8e0',
          border:'2px solid #e06030', color:'#c94a1a',
          opacity: sympathetic?1:0, transition:'opacity .5s', pointerEvents:'none'
        }}>Pensée urgente<br/><small style={{ fontWeight:400, fontSize:11 }}>« Danger ! »</small></div>

        <svg viewBox="0 0 560 300" style={{ width:'100%', maxWidth:560, height:'auto', overflow:'visible' }}>
          <defs>
            <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4a7ddc"/><stop offset="35%" stopColor="#b8cef0"/>
              <stop offset="50%" stopColor="#e0ddd8"/><stop offset="65%" stopColor="#f0c8a8"/>
              <stop offset="100%" stopColor="#e06030"/>
            </linearGradient>
          </defs>
          <path d="M 50 270 A 230 230 0 0 1 510 270" fill="none" stroke="url(#arcGrad)" strokeWidth="30" strokeLinecap="round"/>
          <text x="280" y="10" textAnchor="middle" fontSize="18" fontWeight="600" fill="#888">Équilibre</text>
          <g transform={`rotate(${(val-50)*1.8}, 280, 270)`}>
            <line x1="280" y1="270" x2="280" y2="65" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round"/>
          </g>
          <g>
            <circle cx="280" cy="270" r="26" fill={faceFill} stroke={faceStroke} strokeWidth="2.5"/>
            <ellipse cx="271" cy="264" rx={eyeRx} ry={eyeRy} fill="#2d2d2d"/>
            <ellipse cx="289" cy="264" rx={eyeRx} ry={eyeRy} fill="#2d2d2d"/>
            <path d={mouthD} fill="none" stroke="#2d2d2d" strokeWidth={mouthSW} strokeLinecap="round"/>
            <g opacity={sweatOp}>
              <ellipse cx="302" cy="258" rx="3" ry="5" fill="#88ccff"/>
            </g>
            <circle cx="265" cy="274" r="5" fill="#ffb3b3" opacity={blushOp}/>
            <circle cx="295" cy="274" r="5" fill="#ffb3b3" opacity={blushOp}/>
          </g>
        </svg>
      </div>

      <div style={{ display:'flex', justifyContent:'space-between', marginBottom:4 }}>
        <div style={{ color:'#3366cc', fontWeight:700, fontSize:13 }}>Repos · Parasympathique</div>
        <div style={{ color:'#d4522a', fontWeight:700, fontSize:13 }}>Survie · Sympathique</div>
      </div>

      <div style={{ position:'relative', width:'100%', height:30, marginBottom:8 }}>
        <div style={{
          position:'absolute', top:'50%', left:0, right:0, height:10, borderRadius:5,
          transform:'translateY(-50%)',
          background:'linear-gradient(to right,#4a7ddc 0%,#b0b0b0 40%,#b0b0b0 60%,#e06030 100%)'
        }}/>
        <input type="range" min="0" max="100" value={val}
          onChange={e=>setVal(parseInt(e.target.value))}
          style={{
            position:'absolute', width:'100%', top:0, height:30, appearance:'none',
            background:'transparent', cursor:'pointer', zIndex:2
          }}/>
      </div>

      <div style={{ textAlign:'center', fontWeight:600, fontSize:15, color:lblCol, marginBottom:30, minHeight:22, transition:'color .3s' }}>
        {lbl}
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:20 }}>
        <GaugePanel title="Parasympathique" active={parasympathetic} dimmed={sympathetic}
          color="#2955a8" bg="#f5f5fa" bgActive="#eef2fc" border="#dde4f5" borderActive="#4a7ddc"
          hormones={[
            ['Sérotonine','Bien-être, humeur stable, sentiment de sécurité'],
            ['Dopamine','Motivation, plaisir, concentration calme'],
            ['Ocytocine','Lien social, confiance, apaisement'],
            ['Mélatonine','Sommeil profond, régénération nocturne']
          ]}
          symptoms={['Diminution du rythme cardiaque','Baisse de la tension','Digestion fluide','Muscles relâchés','Respiration lente et profonde','Clarté mentale','Sommeil récupérateur']}
          badgeBg="#d6e4fc"/>
        <GaugePanel title="Sympathique" active={sympathetic} dimmed={parasympathetic}
          color="#c94a1a" bg="#fdf6f2" bgActive="#fef0e8" border="#f5e0d5" borderActive="#e06030"
          hormones={[
            ['Cortisol','Stress chronique, épuisement, inflammation'],
            ['Adrénaline',"Réponse immédiate, cœur qui s'emballe"],
            ['Noradrénaline','Vigilance extrême, hyperactivité mentale'],
            ['Glucagon',"Libération de sucre — énergie d'urgence"]
          ]}
          symptoms={['Augmentation du rythme cardiaque','Augmentation de la tension','Digestion bloquée','Tension musculaire','Respiration courte, thoracique','Brouillard mental','Sommeil perturbé']}
          badgeBg="#fdd8c4"/>
      </div>
    </div>
  );
}

function GaugePanel({ title, active, dimmed, color, bg, bgActive, border, borderActive, hormones, symptoms, badgeBg }) {
  return (
    <div style={{
      borderRadius:16, padding:24,
      background: active?bgActive:bg,
      border:`2px solid ${active?borderActive:border}`,
      boxShadow: active?`0 4px 20px ${borderActive}26`:'none',
      opacity: dimmed?0.35:1,
      transform: dimmed?'scale(0.98)':'none',
      transition:'all .5s ease'
    }}>
      <div style={{ fontWeight:800, fontSize:14, letterSpacing:'1.5px', textTransform:'uppercase', marginBottom:16, color }}>{title}</div>
      {hormones.map(([n,d]) => (
        <div key={n} style={{ display:'flex', alignItems:'flex-start', gap:12, marginBottom:12 }}>
          <span style={{
            display:'inline-block', padding:'4px 12px', borderRadius:20,
            fontSize:12, fontWeight:600, whiteSpace:'nowrap', flexShrink:0,
            background:badgeBg, color
          }}>{n}</span>
          <span style={{ fontSize:13, color:'#555', lineHeight:1.5, paddingTop:3 }}>{d}</span>
        </div>
      ))}
      <div style={{ fontWeight:700, fontSize:11, letterSpacing:'1px', textTransform:'uppercase', marginTop:20, marginBottom:10, color:'#999' }}>Ce que tu ressens</div>
      <ul style={{ listStyle:'none', padding:0, margin:0 }}>
        {symptoms.map(s => (
          <li key={s} style={{ fontSize:13, color:'#555', padding:'3px 0 3px 16px', position:'relative' }}>
            <span style={{ position:'absolute', left:0, top:10, width:6, height:6, borderRadius:'50%', background:color, display:'inline-block' }}/>
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Organ Explorer ───────────────────────────────────────────────
function OrganExplorer() {
  const [active, setActive] = useStateW('coeur');
  const cur = ORGANS.find(o => o.id === active) || ORGANS[0];

  return (
    <div style={{
      margin:'32px 0', background:'#fff', border:'1px solid #f0f0f1',
      borderRadius:16, padding:16, boxShadow:'0 1px 2px rgba(0,0,0,0.04)'
    }}>
      <div style={{
        display:'flex', overflowX:'auto', gap:8, paddingBottom:12, marginBottom:16,
        scrollbarWidth:'none'
      }}>
        {ORGANS.map(o => (
          <button key={o.id} onClick={()=>setActive(o.id)} style={{
            padding:'6px 16px', fontSize:12, fontWeight:500, borderRadius:9999,
            whiteSpace:'nowrap', cursor:'pointer',
            background: active===o.id?'#1a1a1a':'#f5f5f7',
            border:'1px solid ' + (active===o.id?'#1a1a1a':'#e5e5ea'),
            color: active===o.id?'#fff':'#666', transition:'all .15s'
          }}>{o.name}</button>
        ))}
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:12 }}>
        <div style={{
          padding:16, borderRadius:12, background:'rgba(254,235,214,0.5)',
          borderLeft:'4px solid #fb923c'
        }}>
          <h4 style={{
            fontSize:10, textTransform:'uppercase', letterSpacing:'0.18em',
            fontWeight:700, color:'#c2410c', margin:'0 0 4px'
          }}>Mode Survie</h4>
          <p style={{ fontSize:14, color:'#1d1d1f', lineHeight:1.45, margin:0 }}>{cur.sympa}</p>
        </div>
        <div style={{
          padding:16, borderRadius:12, background:'rgba(219,234,254,0.5)',
          borderLeft:'4px solid #60a5fa'
        }}>
          <h4 style={{
            fontSize:10, textTransform:'uppercase', letterSpacing:'0.18em',
            fontWeight:700, color:'#1d4ed8', margin:'0 0 4px'
          }}>Mode Repos</h4>
          <p style={{ fontSize:14, color:'#1d1d1f', lineHeight:1.45, margin:0 }}>{cur.para}</p>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { BrainEmotionWidget, NervousSystemGauge, OrganExplorer });
