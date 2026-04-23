import React, { useState } from 'react';
import './OrganExplorerWidget.css';

const ICON_Paths = {
  cerveau: <><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></>,
  coeur: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>,
  estomac: <><path d="M10 4h1.5A3.5 3.5 0 0 1 15 7.5v1A2.5 2.5 0 0 0 17.5 11A2.5 2.5 0 0 1 20 13.5V15a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5V9a5 5 0 0 1 4-4.9"/><path d="M10 4V2.5"/></>,
  intestins: <path d="M6 4c0-.8.7-1.5 1.5-1.5h9A1.5 1.5 0 0 1 18 4c0 .8-.7 1.5-1.5 1.5h-8A1.5 1.5 0 0 0 7 7c0 .8.7 1.5 1.5 1.5h8A1.5 1.5 0 0 1 18 10c0 .8-.7 1.5-1.5 1.5h-9A1.5 1.5 0 0 0 6 13c0 .8.7 1.5 1.5 1.5h9A1.5 1.5 0 0 1 17 16c0 .8-.7 1.5-1.5 1.5h-9A1.5 1.5 0 0 0 5 19v1"/>,
  respiration: <><path d="M12 3v10"/><path d="M12 13c-.6-2.7-2.7-5-5.3-5C4.7 8 3.5 9.2 3.5 11.3v5.2C3.5 18.4 5 20 6.8 20c2.5 0 5-2.3 5.2-7z"/><path d="M12 13c.6-2.7 2.7-5 5.3-5 2 0 3.2 1.2 3.2 3.3v5.2c0 1.9-1.5 3.5-3.3 3.5-2.5 0-5-2.3-5.2-7z"/></>,
  muscles: <><rect x="7" y="4" width="10" height="16" rx="5"/><path d="M10 9h4"/><path d="M10 12h4"/><path d="M10 15h4"/></>,
  glycemie: <><path d="M12 3s-7 7.5-7 11.5a7 7 0 0 0 14 0C19 10.5 12 3 12 3z"/><path d="M8 15l2-2 2 2 2-2 2 2"/></>,
  peau: <><path d="M5 12a7 7 0 0 1 14 0"/><path d="M8 13a4 4 0 0 1 8 0"/><path d="M10.5 14a1.5 1.5 0 0 1 3 0"/><path d="M11.5 15.5a.5.5 0 0 1 1 0"/></>,
  douleur: <path d="M13 3L4 14h6l-1 8 9-12h-6l1-7z"/>
};

const organs = [
  { id: "cerveau", label: "Cerveau", color: "cerveau", alert: "Brouillard mental, indécision, ruminations, maux de tête.", balance: "Esprit clair, décisions fluides, concentration soutenue." },
  { id: "coeur", label: "Cœur", color: "coeur", alert: "Hypertension, palpitations, oppression, rythme rapide.", balance: "Tension stable, rythme calme, battements amples." },
  { id: "estomac", label: "Estomac", color: "estomac", alert: "Acidité, reflux, nœud à l'estomac, crampes.", balance: "Digestion confortable, légèreté, appétit régulé." },
  { id: "intestins", label: "Intestins", color: "intestins", alert: "Ballonnements, constipation, transit bloqué, douleurs.", balance: "Transit fluide et régulier, confort abdominal." },
  { id: "respiration", label: "Poumons", color: "respiration", alert: "Respiration haute, étouffement, faim d'air.", balance: "Respiration profonde, diaphragmatique, calme." },
  { id: "muscles", label: "Muscles", color: "muscles", alert: "Tensions, raideurs, tremblements, besoin de bouger.", balance: "Souplesse articulaire, fluidité, relâchement." },
  { id: "glycemie", label: "Glycémie", color: "glycemie", alert: "Fringales sucrées, pics de glycémie, coups de fatigue.", balance: "Glycémie stable, énergie durable." },
  { id: "peau", label: "Peau", color: "peau", alert: "Hypersensibilité, rougeurs, chaleur diffuse.", balance: "Peau apaisée, calme, régulation thermique." },
  { id: "douleur", label: "Douleur", color: "douleur", alert: "Douleurs diffuses, inflammation, hypersensibilité.", balance: "Confort physique, seuil de douleur normal." }
];

export default function OrganExplorerWidget() {
   const [activeOrgan, setActiveOrgan] = useState<typeof organs[0] | null>(null);

   return (
       <div className="ns-organ-wrapper">
         <header className="ns-header">
           <span className="ns-eyebrow">Mécanique biologique</span>
           <h2 className="ns-title">Tout part d'une pensée répétitive.</h2>
           <p className="ns-sub">Ton inconfort est le résultat d'une suractivation de ton système nerveux.<br/> <strong>Clique sur la zone où tu ressens la tension pour remonter le fil et reprendre le contrôle.</strong></p>
         </header>

         <div className={`ns-viewport ${activeOrgan ? 'is-panel' : ''}`}>
           <div className="state-grid">
             {organs.map(o => (
               <button 
                 key={o.id} 
                 className="organ-btn" 
                 style={{ '--c': `var(--c-${o.color})`, '--c-bg': `var(--c-${o.color}-bg)` } as React.CSSProperties}
                 onClick={() => setActiveOrgan(o)}
               >
                 <svg className="organ-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                   {(ICON_Paths as any)[o.id]}
                 </svg>
                 <span className="organ-label">{o.label}</span>
               </button>
             ))}
           </div>

           <div className="state-panel">
             {activeOrgan && (
               <>
                 <div className="panel-top">
                   <button className="panel-back" onClick={() => setActiveOrgan(null)}>
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
                   </button>
                   <div className="panel-chip" style={{ '--c': `var(--c-${activeOrgan.color})`, '--c-bg': `var(--c-${activeOrgan.color}-bg)`, color: `var(--c-${activeOrgan.color})`, background: `var(--c-${activeOrgan.color}-bg)` } as React.CSSProperties}>
                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                       {(ICON_Paths as any)[activeOrgan.id]}
                     </svg>
                   </div>
                   <span className="panel-name" style={{ color: `var(--c-${activeOrgan.color})` }}>{activeOrgan.label}</span>
                 </div>
                 <div className="panel-cols">
                   <div>
                     <span className="col-tag alert">Mode Survie</span>
                     <p className="col-text">{activeOrgan.alert}</p>
                   </div>
                   <div>
                     <span className="col-tag balance">Équilibre</span>
                     <p className="col-text">{activeOrgan.balance}</p>
                   </div>
                 </div>
               </>
             )}
           </div>
         </div>
       </div>
   );
}
