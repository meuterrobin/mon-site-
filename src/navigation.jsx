// Floating hamburger + overlay menu
const { useState } = React;

function Navigation({ route, setRoute }) {
  const [open, setOpen] = useState(false);

  const go = (r) => { setOpen(false); setRoute(r); window.scrollTo({ top:0 }); };

  return (
    <>
      <header style={{
        position:'fixed', top:0, right:0, zIndex:50, padding:24, pointerEvents:'none'
      }}>
        <button
          onClick={() => setOpen(true)}
          aria-label="Menu"
          style={{
            pointerEvents:'auto', padding:12, background:'#fff',
            borderRadius:9999, border:'1px solid #f0f0f1',
            boxShadow:'0 2px 10px rgba(0,0,0,0.08)', cursor:'pointer',
            display:'flex', alignItems:'center', justifyContent:'center',
            transition:'background .2s'
          }}
          onMouseOver={e=>e.currentTarget.style.background='#f5f5f7'}
          onMouseOut={e=>e.currentTarget.style.background='#fff'}
        >
          <MenuIcon size={24} />
        </button>
      </header>

      {open && (
        <div style={{
          position:'fixed', inset:0, zIndex:60, background:'#fff',
          display:'flex', flexDirection:'column',
          animation:'fade .3s ease'
        }}>
          <div style={{ padding:24, display:'flex', justifyContent:'flex-end' }}>
            <button onClick={() => setOpen(false)} style={{
              padding:12, background:'#f5f5f7', borderRadius:9999,
              border:'none', cursor:'pointer', display:'flex', alignItems:'center'
            }}>
              <XIcon size={24} />
            </button>
          </div>
          <nav style={{
            flex:1, display:'flex', flexDirection:'column', alignItems:'flex-start',
            justifyContent:'flex-start', gap:32, padding:'32px clamp(32px, 8vw, 64px) 0',
            fontSize:'clamp(28px, 5vw, 48px)', fontWeight:500,
            letterSpacing:'-0.02em', color:'#1d1d1f'
          }}>
            <button onClick={() => go('test')} style={navLinkStyle}>
              Accueil / Test
            </button>
            <button onClick={() => go('guide')} style={navLinkStyle}>
              Comprendre le Système Nerveux
            </button>
          </nav>
        </div>
      )}
      <style>{`
        @keyframes fade { from { opacity:0 } to { opacity:1 } }
      `}</style>
    </>
  );
}

const navLinkStyle = {
  background:'transparent', border:'none', padding:0, cursor:'pointer',
  font:'inherit', color:'inherit', textAlign:'left', transition:'color .2s'
};

window.Navigation = Navigation;
