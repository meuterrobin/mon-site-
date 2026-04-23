// App root — routing + test flow + Tweaks
const { useState: useStateA, useEffect: useEffectA } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#1d1d1f",
  "bgTone": "apple",
  "startView": "test"
}/*EDITMODE-END*/;

function App() {
  const [route, setRoute] = useStateA(() => {
    try { return localStorage.getItem('ic:route') || TWEAK_DEFAULTS.startView || 'test'; }
    catch(e) { return 'test'; }
  });
  const [testScreen, setTestScreen] = useStateA(() => {
    try { return localStorage.getItem('ic:testScreen') || 'welcome'; } catch(e) { return 'welcome'; }
  });
  const [answers, setAnswers] = useStateA([]);
  const [tweaks, setTweaks] = useStateA(TWEAK_DEFAULTS);
  const [tweaksOpen, setTweaksOpen] = useStateA(false);

  useEffectA(() => { try { localStorage.setItem('ic:route', route); } catch(e){} }, [route]);
  useEffectA(() => { try { localStorage.setItem('ic:testScreen', testScreen); } catch(e){} }, [testScreen]);

  // Tweaks edit-mode wiring
  useEffectA(() => {
    const onMsg = (ev) => {
      const m = ev.data || {};
      if (m.type === '__activate_edit_mode') setTweaksOpen(true);
      if (m.type === '__deactivate_edit_mode') setTweaksOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type:'__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const updateTweak = (k, v) => {
    const next = { ...tweaks, [k]: v };
    setTweaks(next);
    try { window.parent.postMessage({ type:'__edit_mode_set_keys', edits: { [k]: v } }, '*'); } catch(e){}
  };

  // Apply bgTone
  useEffectA(() => {
    const tone = tweaks.bgTone;
    const map = { apple:'#fbfbfd', warm:'#faf8f4', cool:'#f7f9fb', neutral:'#fafafa' };
    document.body.style.backgroundColor = map[tone] || map.apple;
  }, [tweaks.bgTone]);

  const handleStart = () => { setAnswers([]); setTestScreen('quiz'); };
  const handleComplete = (fa) => { setAnswers(fa); setTestScreen('result'); };
  const handleRestart = () => { setTestScreen('welcome'); setAnswers([]); };

  return (
    <div data-screen-label={route==='guide'?'Guide Système Nerveux':'Test Inner Clarity'}
      style={{ minHeight:'100vh', display:'flex', flexDirection:'column' }}>
      <Navigation route={route} setRoute={setRoute}/>

      <main style={{ flex:1, display:'flex', flexDirection:'column' }}>
        {route === 'test' && (
          <div style={{ flex:1, display:'flex', flexDirection:'column', position:'relative', overflow:'hidden' }}>
            {testScreen === 'welcome' && <WelcomeScreen onStart={handleStart}/>}
            {testScreen === 'quiz'    && <QuizScreen onComplete={handleComplete}/>}
            {testScreen === 'result'  && <ResultScreen answers={answers} onRestart={handleRestart}/>}
          </div>
        )}
        {route === 'guide' && <NervousSystemGuide/>}
      </main>

      <div className={`tweaks-panel${tweaksOpen?' visible':''}`}>
        <h4>Tweaks</h4>
        <div className="tweaks-row">
          <label>Écran de départ</label>
          <div className="opt-btns">
            {['test','guide'].map(v => (
              <button key={v} className={route===v?'active':''} onClick={()=>{ setRoute(v); updateTweak('startView', v); }}>
                {v==='test'?'Test':'Guide'}
              </button>
            ))}
          </div>
        </div>
        {route === 'test' && (
          <div className="tweaks-row">
            <label>Étape du test</label>
            <div className="opt-btns">
              {['welcome','quiz','result'].map(v => (
                <button key={v} className={testScreen===v?'active':''} onClick={()=>{
                  if (v==='result' && answers.length===0) {
                    // auto-fill mock answers
                    setAnswers(QUESTIONS.map((q,i) => ({ questionId:q.id, value: 30 + (i*7)%60 })));
                  }
                  setTestScreen(v);
                }}>{v}</button>
              ))}
            </div>
          </div>
        )}
        <div className="tweaks-row">
          <label>Teinte du fond</label>
          <div className="opt-btns">
            {['apple','warm','cool','neutral'].map(v => (
              <button key={v} className={tweaks.bgTone===v?'active':''} onClick={()=>updateTweak('bgTone', v)}>{v}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
