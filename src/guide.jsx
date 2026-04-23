// Nervous System Guide page — hero schema + 6 sections + footer
const { useEffect: useEffectG, useRef: useRefG, useState: useStateG } = React;

const STEPS = [
  { id:'pensee',   num:'01', title:'La pensée',                desc:'Positive ou négative — activité électrique',   chip:'✋ Méditation',    action:'interrompt', accent:'#9B7FE8', bg:'#F4EEFB', ink:'#6B4FA8' },
  { id:'cerveau',  num:'02', title:"La naissance de l'émotion", desc:'Zones positives ou négatives renforcées',      chip:'🎯 Visualisation',action:'recâblage',  accent:'#5E8BD9', bg:'#ECF2FB', ink:'#3A5FA0' },
  { id:'nerveux',  num:'03', title:'Système nerveux',          desc:'Sympathique (alerte) ou parasympathique (repos)',chip:'🌬 Respiration',  action:'nerf vague', accent:'#6FC48E', bg:'#EEF7F1', ink:'#3F8D5B' },
  { id:'hormones', num:'04', title:'Hormones',                 desc:"Cortisol · Adrénaline — amplifient l'état",     accent:'#E8A558', bg:'#FBF2E6', ink:'#A06522' },
  { id:'corps',    num:'05', title:'Le corps réagit',          desc:'Tensions, fatigue, brouillard, palpitations…',  accent:'#E87885', bg:'#FBEDEF', ink:'#A84953' },
  { id:'boucle',   num:'↻',  title:'Nouvelles pensées',        desc:'La boucle se referme — le pattern se renforce', accent:'#9B9BA8', bg:'#F2F2F4', ink:'#5A5A66', isLoop:true }
];
const CONN_LABELS = [
  'Active des zones du cerveau',
  'Signal électrique vers le SNA',
  'Ordre de sécrétion hormonale',
  'Sensations physiques dans le corps',
  'Ces sensations génèrent de nouvelles pensées'
];

function NervousSystemGuide() {
  const progressRef = useRefG(null);
  const [visibleSet, setVisibleSet] = useStateG(new Set());

  useEffectG(() => {
    let ticking = false;
    const update = () => {
      const s = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const r = h>0 ? Math.min(1, s/h) : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${r})`;
      ticking = false;
    };
    const onScroll = () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } };
    window.addEventListener('scroll', onScroll, { passive:true });

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setVisibleSet(prev => new Set([...prev, e.target.id]));
        }
      });
    }, { threshold:0.1, rootMargin:'0px 0px 100px 0px' });
    document.querySelectorAll('.ns-stage-section').forEach(s => obs.observe(s));

    return () => { window.removeEventListener('scroll', onScroll); obs.disconnect(); };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior:'smooth' });
  };

  return (
    <div style={{
      background:'#faf8f4', color:'#1a1a1a',
      fontFamily:"'DM Sans',sans-serif", minHeight:'100vh', position:'relative',
      lineHeight:1.55
    }}>
      <GuideStyles/>
      <div ref={progressRef} style={{
        position:'fixed', top:0, left:0, right:0, height:4,
        background:'linear-gradient(90deg,#9B7FE8,#5E8BD9,#6FC48E,#E8A558,#E87885,#9B9BA8)',
        transformOrigin:'left center', transform:'scaleX(0)', zIndex:100, transition:'transform .1s linear'
      }}/>

      {/* HERO */}
      <header id="top" style={{
        minHeight:'100vh', padding:'120px 20px 48px',
        display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'
      }}>
        <div style={{ maxWidth:620, width:'100%' }}>
          <div style={{ textAlign:'center', marginBottom:44 }}>
            <div style={{
              width:64, height:64, background:'#000', color:'#fff',
              borderRadius:20, display:'flex', alignItems:'center', justifyContent:'center',
              margin:'0 auto 40px'
            }}>
              <BrainIcon size={32}/>
            </div>
            <h1 style={{
              fontSize:'clamp(28px, 4.5vw, 48px)', fontWeight:700, letterSpacing:'-0.02em',
              margin:'0 0 32px', lineHeight:1.15
            }}>Comprendre l'influence de sa pensée sur son système nerveux en 5 étapes</h1>
            <div style={{
              display:'flex', flexDirection:'column', gap:24, fontSize:18, color:'#4a4a4a',
              lineHeight:1.65, fontWeight:300, maxWidth:560, margin:'0 auto 48px'
            }}>
              <p style={{ margin:0 }}>Avant de commencer les différentes pratiques, il est essentiel de comprendre comment ton corps fonctionne.</p>
              <p style={{ margin:0 }}>Dans ce document, je t'explique la logique biologique qui se cache derrière tes sensations physiques, ton stress ou ton anxiété.</p>
              <p style={{ margin:0 }}>Ce document est pensé de manière à suivre la logique du schéma ci-dessous. Prends le temps de le lire à ton rythme.</p>
            </div>
          </div>

          <nav aria-label="Cycle émotion-corps" style={{ position:'relative' }}>
            {STEPS.map((s, i) => (
              <React.Fragment key={s.id}>
                <StageCard step={s} onClick={()=>scrollTo('section-'+s.id)} small />
                {i < STEPS.length - 1 && (
                  <div className="ns-ic-conn" style={{
                    '--from': STEPS[i].accent, '--to': STEPS[i+1].accent
                  }}>
                    <span style={{
                      fontFamily:"'Fraunces',serif", fontStyle:'italic',
                      fontSize:12.5, color:'#9a9a9a', paddingLeft:20
                    }}>{CONN_LABELS[i]}</span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </nav>

          <p style={{
            textAlign:'center', marginTop:40, color:'#9a9a9a', fontSize:13,
            fontFamily:"'Fraunces',serif", fontStyle:'italic',
            animation:'nsBob 2s ease-in-out infinite'
          }}>Continuez à scroller ↓</p>
        </div>
      </header>

      {/* SECTIONS */}
      <Section id="pensee" step={STEPS[0]} visible={visibleSet.has('section-pensee')} onNext={()=>scrollTo('section-cerveau')} nextLabel="Zones du cerveau">
        <p className="ns-prose">Quand une pensée survient, en fonction de son origine (positive ou négative), elle active certaines zones de ton cerveau. Une pensée positive active des zones associées au positif, une pensée négative active des zones associées au négatif.<br/>Cette pensée, c'est le début d'une cascade de réactions dans tout ton corps.</p>
        <Retain>La pensée n'est pas juste "dans la tête", c'est une impulsion électrique bien réelle.</Retain>
      </Section>

      <Section id="cerveau" step={STEPS[1]} visible={visibleSet.has('section-cerveau')} onNext={()=>scrollTo('section-nerveux')} nextLabel="Système nerveux">
        <p className="ns-prose" style={{ marginBottom:8 }}>Ces zones sont constituées de neurones. Lorsqu'une pensée survient, le signal électrique vient stimuler des zones précises, et c'est l'activation de ces zones qui forme une émotion.</p>
        <div style={{ margin:'8px 0 16px' }}><BrainEmotionWidget/></div>
        <p className="ns-prose">Une pensée inquiétante allume les zones d'alerte (formant l'anxiété ou la peur), tandis qu'une pensée rassurante allume les zones de calme (formant la sécurité). C'est cette émotion qui va ensuite déterminer l'activation du système nerveux ainsi que la libération d'hormones — ces 2 processus impactant tout notre corps.</p>
        <Callout>💡 Plus on sollicite une zone, plus les connexions entre les neurones se renforcent. Plus elles se renforcent, plus l'émotion que l'on sollicite souvent devient automatique, donc l'activation nerveuse et hormonale qui en découle.</Callout>
        <p className="ns-prose">Une personne qui pense souvent de manière négative aura, par défaut, ces zones d'alerte souvent activées — et inversement pour quelqu'un qui pense plutôt positivement.</p>
        <Retain>La pensée active des zones du cerveau qui forment l'émotion — et plus on répète ce chemin, plus notre cerveau l'emprunte facilement par défaut. C'est ce qu'on appelle la neuroplasticité, une notion essentielle pour changer tout cela.</Retain>
      </Section>

      <Section id="nerveux" step={STEPS[2]} visible={visibleSet.has('section-nerveux')} onNext={()=>scrollTo('section-hormones')} nextLabel="Hormones">
        <p className="ns-prose">C'est l'émotion générée par notre cerveau à l'étape précédente qui va dicter le comportement de notre système nerveux autonome. Celui-ci fonctionne avec deux grands « régimes » :</p>
        <ul className="ns-list">
          <li><strong>Le système nerveux sympathique (Mode Survie) :</strong> c'est le régime d'urgence et de stress. Il agit comme la pédale d'accélération de votre corps.</li>
          <li><strong>Le système nerveux parasympathique (Mode Repos) :</strong> c'est le régime de calme et de récupération. Il agit comme la pédale de frein.</li>
        </ul>
        <Callout>💡 Ces 2 systèmes gèrent l'activation de tous les organes de notre corps. Ce n'est pas un interrupteur ON/OFF. C'est une jauge — un niveau d'activation qui se déplace progressivement dans un sens ou dans l'autre.</Callout>
        <div style={{ margin:'48px 0' }}><NervousSystemGauge/></div>
        <Retain>Selon l'émotion ressentie, notre biologie bascule progressivement vers le système de survie ou le système de repos.</Retain>
      </Section>

      <Section id="hormones" step={STEPS[3]} visible={visibleSet.has('section-hormones')} onNext={()=>scrollTo('section-corps')} nextLabel="Le corps réagit">
        <p className="ns-prose">En fonction du système nerveux actif, le cerveau ordonne la libération d'hormones. Ce sont des messagers chimiques qui voyagent dans tout le corps pour verrouiller et maintenir l'état dans lequel on se trouve — stress ou détente.<br/>Ces hormones ont pour effet d'amplifier et de prolonger l'activation du système nerveux.</p>
        <p className="ns-prose">Les deux hormones principales libérées en mode survie sont :</p>
        <ul className="ns-list">
          <li><strong>Le cortisol</strong> — l'hormone du stress chronique. Elle maintient ton corps en état d'alerte prolongé. En excès, elle perturbe le sommeil, affaiblit le système immunitaire, brouille la concentration et épuise les réserves d'énergie.</li>
          <li><strong>L'adrénaline</strong> — la réponse immédiate. Elle accélère le rythme cardiaque, tend les muscles et redirige l'énergie vers l'action.</li>
        </ul>
        <Retain>Tant que la pensée à l'origine de l'activation est présente, elles continuent d'être sécrétées.</Retain>
      </Section>

      <Section id="corps" step={STEPS[4]} visible={visibleSet.has('section-corps')} onNext={()=>scrollTo('section-boucle')} nextLabel="La boucle se referme">
        <p className="ns-prose">Ces hormones et cette activation nerveuse ont des effets très concrets et physiques sur ton corps. C'est ta biologie qui répond directement à tes pensées. Tu peux ressentir ces effets à travers ton cœur, ton estomac, tes muscles, ta respiration… selon que ton système nerveux est en mode survie ou en mode repos.</p>
        <OrganExplorer/>
        <Retain>Ton corps est le miroir de ton système nerveux et donc de ta pensée.</Retain>
      </Section>

      <Section id="boucle" step={STEPS[5]} visible={visibleSet.has('section-boucle')} isLast>
        <div style={{
          background:'#faf6ef', padding:'32px 40px', borderRadius:24,
          border:'1px solid #f0ebe3', marginBottom:32,
          boxShadow:'0 1px 3px rgba(0,0,0,0.02)'
        }}>
          <div style={{ display:'flex', flexDirection:'column', gap:24, fontSize:18, color:'#4a4a4a', lineHeight:1.65, fontWeight:300 }}>
            <p style={{ margin:0 }}>C'est le point le plus crucial de tout ce processus : la chaîne d'événements que nous venons de voir n'est pas une ligne droite, c'est un cercle.</p>
            <p style={{ margin:0 }}>Les sensations physiques qui apparaissent dans votre corps (les tensions, la respiration courte, la boule au ventre) envoient un signal de retour à votre cerveau.</p>
            <p style={{ margin:0 }}>Le cerveau analyse cet état physique et en conclut : « Mon corps est en état d'alerte, c'est donc qu'il y a un vrai danger. » Il va alors naturellement générer de nouvelles pensées du même type pour justifier ce qu'il ressent. Ces pensées relancent l'émotion, qui réactive le système nerveux, et le cycle recommence.</p>
            <p style={{ margin:0 }}>Avec le temps, le corps s'habitue à baigner dans cette chimie. Cet état de tension devient votre mode par défaut.</p>
          </div>
        </div>
        <Retain>Ce stress constant n'est pas votre identité, c'est un simple programme biologique. Et comme tout apprentissage neurologique, il peut être court-circuité et rééduqué.</Retain>
      </Section>

      {/* FOOTER */}
      <footer style={{
        padding:'80px 20px 120px', textAlign:'center',
        background:'#fff', borderTop:'1px solid #ebe8e2'
      }}>
        <div style={{ maxWidth:520, margin:'0 auto' }}>
          <h2 style={{
            fontFamily:"'Fraunces',serif", fontWeight:400,
            fontSize:'clamp(26px, 4vw, 36px)', margin:'0 0 14px', letterSpacing:'-0.02em'
          }}>Prêt à <em style={{ color:'#5a5a5a', fontWeight:300 }}>sortir de la boucle</em> ?</h2>
          <p style={{ color:'#5a5a5a', fontSize:15.5, lineHeight:1.6, margin:'0 0 32px' }}>
            Chaque étape est un point d'entrée pour briser le cycle. Reviens en arrière pour revoir les leviers d'action à chaque maillon.
          </p>
          <button onClick={()=>scrollTo('top')} style={{
            display:'inline-flex', alignItems:'center', gap:8,
            padding:'14px 24px', background:'#1a1a1a', color:'#fff',
            borderRadius:9999, border:'none', cursor:'pointer',
            fontSize:14, fontWeight:500
          }}>
            <span style={{ display:'inline-block', animation:'nsSpin 4s linear infinite' }}>↻</span>
            <span>Revenir au schéma</span>
          </button>
        </div>
      </footer>
    </div>
  );
}

function StageCard({ step, onClick, small }) {
  const pad = small ? '20px 22px 20px 76px' : '28px 28px 28px 100px';
  const numSize = small ? 30 : 52;
  const numLeft = small ? 20 : 28;
  return (
    <a href={'#section-'+step.id} onClick={(e)=>{ e.preventDefault(); onClick&&onClick(); }}
       style={{
        position:'relative', display:'block', padding:pad,
        background:'#fff', border:`1.5px solid ${step.accent}`,
        borderRadius: small?18:22, textDecoration:'none', color:'#1a1a1a',
        cursor:'pointer', overflow:'hidden', isolation:'isolate',
        transition:'transform .35s, box-shadow .35s'
       }}
       onMouseOver={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 30px rgba(0,0,0,0.06)'; }}
       onMouseOut={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow=''; }}>
      <span style={{ position:'absolute', inset:0, background:step.bg, opacity:0.5, zIndex:-1 }}/>
      <span style={{
        position:'absolute', top:'50%', left:numLeft, transform:'translateY(-50%)',
        fontFamily:"'Fraunces',serif", fontSize:numSize, fontWeight:500, color:step.ink,
        lineHeight:1, letterSpacing:'-0.03em', opacity:0.9
      }}>{step.num}</span>
      {step.chip && (
        <span style={{
          display:'inline-flex', alignItems:'center', gap:6,
          fontSize: small?11:11.5, fontWeight:500, padding:'3px 9px',
          borderRadius:9999, background:'#fff', border:`1px solid ${step.accent}`,
          color:step.ink, marginBottom:7, letterSpacing:'0.01em'
        }}>
          <span>{step.chip}</span>
          <span style={{ opacity:0.45, fontSize:10 }}>→</span>
          <span style={{ color:'#5a5a5a', fontWeight:400 }}>{step.action}</span>
        </span>
      )}
      <h3 style={{
        fontFamily: small?"'DM Sans',sans-serif":"'Fraunces',serif",
        fontSize: small?16.5:'clamp(24px, 4vw, 32px)',
        fontWeight: small?600:400,
        margin:'0 0 3px', color:step.ink, letterSpacing:'-0.015em'
      }}>{step.title}</h3>
      <p style={{ fontSize: small?13:15, color:'#5a5a5a', margin:0, lineHeight:1.45 }}>
        {step.desc}
      </p>
    </a>
  );
}

function Section({ id, step, visible, onNext, nextLabel, isLast, children }) {
  return (
    <section id={'section-'+id} className="ns-stage-section" style={{
      position:'relative', padding:'40px 20px', scrollMarginTop:20
    }}>
      <div style={{ maxWidth:680, margin:'0 auto', position:'relative' }}>
        <div style={{
          position:'relative', zIndex:5,
          padding:'28px 28px 28px 100px',
          background:'#fff', border:`1.5px solid ${step.accent}`,
          borderRadius:22, overflow:'hidden', marginBottom:44,
          opacity: visible?1:0,
          transform: visible?'scale(1) translateY(0)':'scale(0.98) translateY(10px)',
          transition:'opacity .4s cubic-bezier(0.16,1,0.3,1), transform .4s cubic-bezier(0.16,1,0.3,1)'
        }}>
          <span style={{ position:'absolute', inset:0, background:step.bg, opacity:0.45, zIndex:0 }}/>
          <span style={{
            position:'absolute', top:'50%', left:28, transform:'translateY(-50%)',
            fontFamily:"'Fraunces',serif", fontSize: step.isLoop?44:52, fontWeight:500,
            color:step.ink, opacity:0.9, lineHeight:1, letterSpacing:'-0.04em', zIndex:1
          }}>{step.num}</span>
          <div style={{ position:'relative', zIndex:1 }}>
            {step.chip && (
              <span style={{
                display:'inline-flex', alignItems:'center', gap:6,
                fontSize:11.5, fontWeight:500, padding:'4px 10px',
                borderRadius:9999, background:'#fff', border:`1px solid ${step.accent}`,
                color:step.ink, marginBottom:8
              }}>
                <span>{step.chip}</span>
                <span style={{ opacity:0.45, fontSize:10 }}>→</span>
                <span style={{ color:'#5a5a5a', fontWeight:400 }}>{step.action}</span>
              </span>
            )}
            <h2 style={{
              fontFamily:"'Fraunces',serif", fontWeight:400,
              fontSize:'clamp(24px, 4vw, 32px)', color:step.ink,
              margin:'0 0 6px', letterSpacing:'-0.015em'
            }}>{step.title}</h2>
            <p style={{ fontSize:15, color:'#5a5a5a', margin:0 }}>{step.desc}</p>
          </div>
        </div>

        <div style={{
          opacity: visible?1:0,
          transform: visible?'translateY(0)':'translateY(10px)',
          transition:'opacity .4s .05s cubic-bezier(0.16,1,0.3,1), transform .4s .05s cubic-bezier(0.16,1,0.3,1)'
        }}>
          {children}
        </div>

        {!isLast && (
          <div style={{
            marginTop:32, paddingTop:16, borderTop:'1px dashed #ebe8e2', textAlign:'center'
          }}>
            <a href="#" onClick={(e)=>{e.preventDefault(); onNext&&onNext();}}
               style={{
                display:'inline-flex', alignItems:'center', gap:8,
                color:'#9a9a9a', textDecoration:'none',
                fontFamily:"'Fraunces',serif", fontStyle:'italic', fontSize:14,
                transition:'color .3s'
               }}
               onMouseOver={e=>e.currentTarget.style.color='#5a5a5a'}
               onMouseOut={e=>e.currentTarget.style.color='#9a9a9a'}>
              Étape suivante : {nextLabel} <span>↓</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

function Retain({ children }) {
  return (
    <div style={{
      borderLeft:'4px solid #000', paddingLeft:20, paddingTop:8, paddingBottom:8,
      margin:'32px 0'
    }}>
      <p style={{ fontWeight:500, color:'#000', margin:0, lineHeight:1.55 }}>
        ➡️ À RETENIR : {children}
      </p>
    </div>
  );
}
function Callout({ children }) {
  return (
    <div style={{
      background:'#f5f5f7', padding:24, borderRadius:16, margin:'16px 0 24px'
    }}>
      <p style={{ color:'#4a4a4a', margin:0, fontWeight:300, lineHeight:1.6 }}>{children}</p>
    </div>
  );
}

function GuideStyles() {
  return <style>{`
    .ns-prose { font-size:18px; color:#4a4a4a; font-weight:300; line-height:1.65; margin:0 0 24px; }
    .ns-prose strong { color:#000; font-weight:500; }
    .ns-list { list-style:disc; padding-left:24px; margin:0 0 24px; font-size:18px; color:#4a4a4a; font-weight:300; line-height:1.65; }
    .ns-list li { margin-bottom:12px; }
    .ns-list strong { color:#000; font-weight:500; }
    .ns-ic-conn {
      position:relative; height:44px; padding-left:40px;
      display:flex; align-items:center;
    }
    .ns-ic-conn::before {
      content:''; position:absolute; left:40px; top:0; bottom:0; width:2px;
      background: linear-gradient(to bottom, var(--from), var(--to));
      opacity:0.35; border-radius:1px;
    }
    @keyframes nsBob { 0%,100%{transform:translateY(0);opacity:0.7} 50%{transform:translateY(6px);opacity:1} }
    @keyframes nsSpin { from{transform:rotate(0)} to{transform:rotate(-360deg)} }
    @media (max-width:600px) {
      .ns-prose, .ns-list { font-size:16px; }
    }
  `}</style>;
}

Object.assign(window, { NervousSystemGuide });
