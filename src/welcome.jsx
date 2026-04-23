// Welcome / landing screen
function WelcomeScreen({ onStart }) {
  return (
    <div style={{
      display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
      minHeight:'80vh', padding:'64px 24px', textAlign:'center',
      animation:'wsIn .6s cubic-bezier(0.22,1,0.36,1)'
    }}>
      <div style={{
        width:64, height:64, background:'#000', color:'#fff',
        borderRadius:20, display:'flex', alignItems:'center', justifyContent:'center',
        marginBottom:40, boxShadow:'0 2px 10px rgba(0,0,0,0.05)'
      }}>
        <BrainIcon size={32} />
      </div>

      <h1 style={{
        fontSize:'clamp(36px, 6vw, 64px)', fontWeight:600, letterSpacing:'-0.03em',
        color:'#1d1d1f', margin:'0 0 24px', lineHeight:1.1
      }}>
        Élaborez votre<br/>profil de conscience.
      </h1>

      <p style={{
        fontSize:'clamp(17px, 1.6vw, 20px)', color:'#86868b',
        maxWidth:540, margin:'0 0 56px', lineHeight:1.55, fontWeight:300
      }}>
        L'observation et l'étude des traditions méditatives permettent d'identifier certains marqueurs généraux de notre présence. Ce questionnaire s'appuie sur cinq piliers pour vous aider à observer où vous en êtes. Découvrez les leviers sur lesquels agir pour apaiser votre mental.
      </p>

      <button
        onClick={onStart}
        style={{
          display:'inline-flex', alignItems:'center', gap:12,
          padding:'20px 40px', fontSize:18, fontWeight:500,
          color:'#fff', background:'#1d1d1f', borderRadius:9999,
          border:'none', cursor:'pointer',
          boxShadow:'0 10px 24px rgba(0,0,0,0.08)', transition:'transform .2s'
        }}
        onMouseDown={e=>e.currentTarget.style.transform='scale(0.98)'}
        onMouseUp={e=>e.currentTarget.style.transform='scale(1)'}
        onMouseOver={e=>e.currentTarget.style.transform='scale(1.02)'}
        onMouseOut={e=>e.currentTarget.style.transform='scale(1)'}
      >
        <span>Élaborer mon profil</span>
        <ArrowRightIcon size={20} />
      </button>

      <div style={{ marginTop:48, display:'flex', flexDirection:'column', alignItems:'center', gap:8 }}>
        <p style={{
          fontSize:12, fontWeight:700, color:'#86868b', margin:0,
          textTransform:'uppercase', letterSpacing:'0.2em'
        }}>30 Questions · 5 Catégories</p>
        <p style={{ fontSize:12, color:'rgba(134,134,139,0.6)', margin:0 }}>
          Entre 5 et 10 minutes
        </p>
      </div>

      <style>{`
        @keyframes wsIn { from { opacity:0; transform:translateY(20px) } to { opacity:1; transform:none } }
      `}</style>
    </div>
  );
}
window.WelcomeScreen = WelcomeScreen;
