// Result screen with radar chart (SVG, no recharts)
const { useMemo: useMemoR } = React;

function ResultScreen({ answers, onRestart }) {
  const { chartData, globalScore } = useMemoR(() => {
    const cats = {};
    answers.forEach(a => {
      const q = QUESTIONS.find(q => q.id === a.questionId);
      if (!q) return;
      if (!cats[q.category]) cats[q.category] = { tw:0, mw:0 };
      const ev = q.isInverted ? (100 - a.value) : a.value;
      cats[q.category].tw += ev * q.coefficient;
      cats[q.category].mw += 100 * q.coefficient;
    });
    const data = Object.keys(cats).map(c => ({
      subject: c, A: Math.round((cats[c].tw / cats[c].mw) * 100), fullMark:100
    }));
    const avg = Math.round(data.reduce((s,d)=>s+d.A,0)/data.length);
    return { chartData:data, globalScore:avg };
  }, [answers]);

  const handleShare = async () => {
    const text = "Je viens de découvrir mon profil de conscience — Inner Clarity";
    if (navigator.share) {
      try { await navigator.share({ title:'Mon Profil de Conscience', text, url: window.location.href }); }
      catch(e){}
    } else {
      navigator.clipboard.writeText(`${text} : ${window.location.href}`);
      alert('Lien copié dans le presse-papier !');
    }
  };

  return (
    <div style={{
      display:'flex', flexDirection:'column', alignItems:'center',
      maxWidth:820, margin:'0 auto', padding:'48px 24px', width:'100%',
      animation:'resIn .6s cubic-bezier(0.22,1,0.36,1)'
    }}>
      <div style={{ textAlign:'center', marginBottom:48 }}>
        <h2 style={{
          fontSize:'clamp(20px, 2.4vw, 28px)', fontWeight:700,
          color:'#1d1d1f', textTransform:'uppercase', letterSpacing:'0.2em',
          margin:'0 0 16px'
        }}>VOTRE PROFIL DE CONSCIENCE</h2>
        <p style={{
          color:'#86868b', maxWidth:640, margin:'24px auto 0',
          lineHeight:1.65, fontSize:16
        }}>
          Ce profil cartographie votre équilibre intérieur à travers cinq piliers fondamentaux.
          Il ne s'agit pas d'une note, mais d'une boussole : elle met en lumière vos forces naturelles
          et révèle les espaces où vous pouvez cultiver une présence plus profonde au quotidien.
        </p>
      </div>

      <RadarChart data={chartData} globalScore={globalScore} />

      <div style={{ width:'100%', maxWidth:680, margin:'0 auto 64px' }}>
        <h3 style={{
          fontSize:20, fontWeight:600, color:'#1d1d1f',
          margin:'0 0 24px', padding:'0 8px'
        }}>Analyse par catégorie</h3>
        <div style={{ display:'grid', gap:16 }}>
          {chartData.map((c, i) => (
            <div key={c.subject} style={{
              background:'#fff', padding:24, borderRadius:24,
              border:'1px solid #f5f5f7'
            }}>
              <div style={{
                display:'flex', justifyContent:'space-between', alignItems:'center', gap:16
              }}>
                <h4 style={{ fontWeight:500, color:'#1d1d1f', margin:0, flex:1 }}>{c.subject}</h4>
                <span style={{ fontSize:13, color:'#86868b', fontVariantNumeric:'tabular-nums' }}>{c.A}/100</span>
              </div>
              <div style={{
                height:6, width:'100%', background:'#f5f5f7', borderRadius:9999,
                marginTop:12, overflow:'hidden'
              }}>
                <div style={{
                  height:'100%', width:`${c.A}%`, background:'#1d1d1f', borderRadius:9999,
                  transition:'width 1s cubic-bezier(0.22,1,0.36,1)',
                  animation:`barGrow${i} 1.2s .4s both`
                }}/>
              </div>
              <p style={{
                fontSize:13.5, color:'#86868b', marginTop:16, lineHeight:1.65
              }}>
                {CATEGORY_DESCRIPTIONS[c.subject]}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        display:'flex', gap:16, width:'100%', maxWidth:480,
        position:'sticky', bottom:32, background:'rgba(251,251,253,0.8)',
        backdropFilter:'blur(20px)', padding:16, borderRadius:32,
        border:'1px solid rgba(245,245,247,0.5)', boxShadow:'0 20px 40px rgba(0,0,0,0.06)',
        flexWrap:'wrap'
      }}>
        <button onClick={handleShare} style={{
          flex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:8,
          padding:'16px 24px', background:'#1d1d1f', color:'#fff',
          borderRadius:9999, border:'none', fontWeight:500, cursor:'pointer',
          minWidth:180
        }}>
          <ShareIcon size={18}/> <span>Partager</span>
        </button>
        <button onClick={onRestart} style={{
          flex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:8,
          padding:'16px 24px', background:'#fff', color:'#1d1d1f',
          border:'1px solid #d2d2d7', borderRadius:9999, fontWeight:500, cursor:'pointer',
          minWidth:180
        }}>
          <RotateIcon size={18}/> <span>Refaire le test</span>
        </button>
      </div>

      <style>{`
        @keyframes resIn { from{opacity:0;transform:scale(0.95)} to{opacity:1;transform:none} }
      `}</style>
    </div>
  );
}

// Custom SVG radar chart (5 axes)
function RadarChart({ data, globalScore }) {
  const size = 420, cx = size/2, cy = size/2, maxR = 130;
  const n = data.length;
  const angleFor = i => (i * 2 * Math.PI) / n - Math.PI/2;
  const points = data.map((d,i) => {
    const r = (d.A/100) * maxR;
    const a = angleFor(i);
    return [cx + Math.cos(a)*r, cy + Math.sin(a)*r];
  });
  const pathD = points.map((p,i)=> (i===0?'M':'L') + p[0]+','+p[1]).join(' ') + ' Z';
  const rings = [0.25, 0.5, 0.75, 1];

  return (
    <div style={{
      width:'100%', aspectRatio:'1/1', maxWidth:480,
      background:'#fff', borderRadius:48, border:'1px solid #f5f5f7',
      boxShadow:'0 20px 60px rgba(0,0,0,0.03)',
      display:'flex', alignItems:'center', justifyContent:'center',
      marginBottom:64, padding:16
    }}>
      <svg viewBox={`0 0 ${size} ${size}`} style={{ width:'100%', height:'100%' }}>
        {rings.map((r,ri) => (
          <polygon key={ri}
            points={Array.from({length:n}, (_,i) => {
              const a = angleFor(i);
              return `${cx+Math.cos(a)*r*maxR},${cy+Math.sin(a)*r*maxR}`;
            }).join(' ')}
            fill="none" stroke="#d2d2d7" strokeWidth="1" strokeDasharray="3 3" opacity={0.7}/>
        ))}
        {/* axes */}
        {Array.from({length:n}, (_,i) => {
          const a = angleFor(i);
          return <line key={'l'+i}
            x1={cx} y1={cy}
            x2={cx+Math.cos(a)*maxR} y2={cy+Math.sin(a)*maxR}
            stroke="#e5e5ea" strokeWidth="1" />;
        })}
        {/* data */}
        <path d={pathD} fill="#1d1d1f" fillOpacity={0.22}
          stroke="#1d1d1f" strokeWidth="3" strokeLinejoin="round"
          style={{ animation:'radarIn 1.2s .2s both' }}/>
        {points.map((p,i) => (
          <circle key={'pt'+i} cx={p[0]} cy={p[1]} r="4" fill="#1d1d1f"/>
        ))}
        {/* labels */}
        {data.map((d,i) => {
          const a = angleFor(i);
          const lr = maxR + 30;
          const x = cx + Math.cos(a)*lr;
          const y = cy + Math.sin(a)*lr;
          const words = d.subject.split(' ');
          const anchor = Math.abs(Math.cos(a)) < 0.2 ? 'middle' : (Math.cos(a) > 0 ? 'start' : 'end');
          return (
            <text key={'t'+i} x={x} y={y} textAnchor={anchor}
              fill="#86868b" fontSize="10" fontWeight="600"
              style={{ textTransform:'uppercase', letterSpacing:'0.1em' }}>
              {words.map((w, wi) => (
                <tspan key={wi} x={x} dy={wi===0 ? (-((words.length-1)*6)) : 12}>{w}</tspan>
              ))}
            </text>
          );
        })}
        {/* center score */}
        <text x={cx} y={cy-4} textAnchor="middle" fill="#1d1d1f" fontSize="36" fontWeight="600">
          {globalScore}
        </text>
        <text x={cx} y={cy+16} textAnchor="middle" fill="#86868b" fontSize="9" fontWeight="700"
          style={{ textTransform:'uppercase', letterSpacing:'0.2em' }}>Global</text>
      </svg>
      <style>{`
        @keyframes radarIn { from { opacity:0; transform: scale(0.7); transform-origin:center; } to {opacity:1; transform:scale(1);} }
      `}</style>
    </div>
  );
}

window.ResultScreen = ResultScreen;
