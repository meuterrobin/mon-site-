// Quiz screen: slider or multiple choice
const { useState: useStateQ, useEffect: useEffectQ } = React;

function QuizScreen({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useStateQ(0);
  const [answers, setAnswers] = useStateQ([]);
  const [sliderValue, setSliderValue] = useStateQ(50);
  const [dir, setDir] = useStateQ(1);

  const q = QUESTIONS[currentIndex];
  const progress = (currentIndex / QUESTIONS.length) * 100;

  useEffectQ(() => { setSliderValue(50); }, [currentIndex]);

  const submit = (value) => {
    const na = [...answers, { questionId: q.id, value }];
    setAnswers(na);
    if (currentIndex < QUESTIONS.length - 1) {
      setDir(1);
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete(na);
    }
  };

  const back = () => {
    if (currentIndex > 0) {
      setDir(-1);
      setCurrentIndex(currentIndex - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  return (
    <div style={{
      display:'flex', flexDirection:'column', minHeight:'100vh',
      maxWidth:680, margin:'0 auto', padding:'32px 24px'
    }}>
      {/* Progress */}
      <div style={{
        position:'sticky', top:0, background:'#fbfbfd', paddingTop:16, paddingBottom:8,
        zIndex:10, marginBottom:40
      }}>
        <div style={{
          display:'flex', justifyContent:'space-between', marginBottom:12,
          fontSize:10, fontWeight:700, color:'#86868b',
          textTransform:'uppercase', letterSpacing:'0.2em'
        }}>
          <span>{q.category}</span>
          <span>{currentIndex+1} / {QUESTIONS.length}</span>
        </div>
        <div style={{ height:4, width:'100%', background:'#e5e5ea', borderRadius:9999, overflow:'hidden' }}>
          <div style={{
            height:'100%', width:`${progress}%`, background:'#1d1d1f', borderRadius:9999,
            transition:'width .4s ease'
          }}/>
        </div>
      </div>

      {/* Question */}
      <div style={{ flex:1, display:'flex', flexDirection:'column' }}>
        <div key={currentIndex} style={{
          animation:`qIn${dir>0?'R':'L'} .4s cubic-bezier(0.22,1,0.36,1)`
        }}>
          <div style={{ marginBottom:16 }}>
            <span style={{
              fontSize:11, fontWeight:700, color:'#86868b',
              textTransform:'uppercase', letterSpacing:'0.3em', opacity:0.6
            }}>Évaluation</span>
          </div>
          <h2 style={{
            fontSize:'clamp(22px, 3.4vw, 38px)', fontWeight:600, letterSpacing:'-0.02em',
            color:'#1d1d1f', margin:'0 0 48px', lineHeight:1.3
          }}>
            {q.text}
          </h2>

          {q.options ? (
            <div style={{ display:'flex', flexDirection:'column', gap:12, marginBottom:40 }}>
              {q.options.map(o => (
                <button key={o.value}
                  onClick={()=>submit((o.value-1)*25)}
                  style={{
                    textAlign:'left', padding:'18px 28px', borderRadius:22,
                    border:'1px solid #d2d2d7', background:'#fff', color:'#1d1d1f',
                    fontWeight:500, fontSize:15, cursor:'pointer', lineHeight:1.5,
                    boxShadow:'0 1px 2px rgba(0,0,0,0.04)', transition:'all .15s'
                  }}
                  onMouseOver={e=>{e.currentTarget.style.borderColor='#1d1d1f';e.currentTarget.style.background='#f5f5f7';}}
                  onMouseOut={e=>{e.currentTarget.style.borderColor='#d2d2d7';e.currentTarget.style.background='#fff';}}
                >{o.label}</button>
              ))}
            </div>
          ) : (
            <div style={{ display:'flex', flexDirection:'column', padding:'48px 8px' }}>
              <input type="range" min="0" max="100" value={sliderValue}
                onChange={e=>setSliderValue(parseInt(e.target.value))}
                style={{
                  width:'100%', height:8, borderRadius:9999, appearance:'none',
                  cursor:'pointer', marginBottom:32,
                  background:`linear-gradient(to right, #1d1d1f ${sliderValue}%, #e5e5ea ${sliderValue}%)`,
                  accentColor:'#1d1d1f'
                }}/>
              <div style={{
                display:'flex', justifyContent:'space-between', fontSize:11, fontWeight:700,
                color:'#86868b', textTransform:'uppercase', letterSpacing:'0.15em', marginBottom:48
              }}>
                <span>Pas du tout</span><span>Tout à fait</span>
              </div>
              <button onClick={()=>submit(sliderValue)} style={{
                width:'100%', padding:'20px', background:'#1d1d1f', color:'#fff',
                borderRadius:9999, border:'none', fontWeight:600, fontSize:16, cursor:'pointer',
                boxShadow:'0 10px 24px rgba(0,0,0,0.10)', transition:'transform .2s'
              }}
              onMouseOver={e=>e.currentTarget.style.transform='scale(1.02)'}
              onMouseOut={e=>e.currentTarget.style.transform='scale(1)'}
              >Suivant</button>
            </div>
          )}
        </div>
      </div>

      {/* Back */}
      <div style={{
        marginTop:'auto', padding:'32px 0', display:'flex', justifyContent:'space-between',
        alignItems:'center', borderTop:'1px solid #f5f5f7'
      }}>
        <button onClick={back} disabled={currentIndex===0} style={{
          background:'transparent', border:'none', cursor: currentIndex===0?'default':'pointer',
          fontSize:11, fontWeight:700, color:'#86868b', textTransform:'uppercase',
          letterSpacing:'0.2em', display:'flex', alignItems:'center', gap:8,
          opacity: currentIndex===0?0:1, pointerEvents: currentIndex===0?'none':'auto'
        }}>
          <span style={{ fontSize:18 }}>←</span><span>Précédent</span>
        </button>
        <span style={{
          fontSize:10, fontWeight:700, color:'#86868b',
          textTransform:'uppercase', letterSpacing:'0.2em', opacity:0.4
        }}>Auto-save</span>
      </div>

      <style>{`
        @keyframes qInR { from{opacity:0;transform:translateX(20px)} to{opacity:1;transform:none} }
        @keyframes qInL { from{opacity:0;transform:translateX(-20px)} to{opacity:1;transform:none} }
      `}</style>
    </div>
  );
}

window.QuizScreen = QuizScreen;
