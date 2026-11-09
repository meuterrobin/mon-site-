/* Inner Clarity: met à jour le titre et la description quand on change de page */
(function () {
  var P = {"/":{"title":"Inner Clarity | Régulation du système nerveux et méditation","description":"Apprends à calmer ton système nerveux, à gérer ton mental et à retrouver la paix intérieure, avec une méditation expliquée par les neurosciences. Test gratuit."},"/test":{"title":"Test gratuit de l'équilibre du système nerveux | Inner Clarity","description":"29 questions, 5 piliers, environ 8 minutes. Découvre où en est ton système nerveux avec un radar de résultats et un bilan à télécharger. Gratuit, sans inscription."},"/guide":{"title":"Comprendre son système nerveux et la méditation | Inner Clarity","description":"Palpitations, tensions, fatigue, mental qui tourne en boucle : comprends comment tes pensées activent ton système nerveux et comment la méditation agit sur ton corps."},"/a-propos":{"title":"Qui sommes-nous | Inner Clarity","description":"Robin Meuter, kinésithérapeute formé en neurosciences et professeur de yoga, et Justine Meuter, psychologue et psychothérapeute EMDR : qui nous sommes et pourquoi Inner Clarity existe."},"/formations":{"title":"Formations et conférences | Inner Clarity","description":"Programmes et conférences pour apprendre à réguler ton système nerveux par la respiration, la pleine conscience et la visualisation."},"/mentions-legales":{"title":"Mentions légales et confidentialité | Inner Clarity","description":"Mentions légales et politique de confidentialité du site Inner Clarity. Le site ne collecte aucune donnée personnelle."}};
  function upd() {
    var p = location.pathname.replace(/\/+$/, '') || '/';
    var d = P[p] || P['/'];
    document.title = d.title;
    var m = document.querySelector('meta[name="description"]'); if (m) m.setAttribute('content', d.description);
    var c = document.querySelector('link[rel="canonical"]'); if (c) c.setAttribute('href', 'https://innerclarity.io' + (p === '/' ? '/' : p));
  }
  var ps = history.pushState;
  history.pushState = function () { var r = ps.apply(this, arguments); try { upd(); } catch (e) {} return r; };
  window.addEventListener('popstate', function () { try { upd(); } catch (e) {} });
})();

const QUESTIONS = [{
  id: "q1",
  text: "Je perçois rapidement les tensions ou inconforts dans mon corps.",
  category: "Signaux du corps",
  coefficient: 0.5
}, {
  id: "q2",
  text: "Lorsque j'essaie de ressentir les différentes parties de mon corps (chaleur, picotements, énergie)…",
  category: "Signaux du corps",
  coefficient: 2,
  options: [{
    value: 1,
    label: "Je me concentre sur mes mains, mais je ne ressens rien de particulier."
  }, {
    value: 2,
    label: "Je peux ressentir ces sensations uniquement au niveau de mes extrémités (mains, pieds)."
  }, {
    value: 3,
    label: "En plus des extrémités, je peux les ressentir remonter dans mes membres (bras, jambes)."
  }, {
    value: 4,
    label: "En plus des membres, je les ressens au niveau de mon tronc (colonne vertébrale, poitrine, cou)."
  }, {
    value: 5,
    label: "Je suis capable de ressentir ces sensations distinctement dans l'intégralité de mon corps."
  }]
}, {
  id: "q3",
  text: "J'ai conscience de l'impact direct de mes émotions négatives sur mon corps.",
  category: "Signaux du corps",
  coefficient: 1
}, {
  id: "q4",
  text: "Ma respiration est souvent courte et haute dans la poitrine.",
  category: "Signaux du corps",
  isInverted: true,
  coefficient: 1
}, {
  id: "q5",
  text: "Je suis capable de discerner le lien exact entre ma pensée du moment et la sensation corporelle qu'elle provoque.",
  category: "Signaux du corps",
  coefficient: 2
}, {
  id: "q6",
  text: "J'ai souvent du mal à me concentrer ou j'ai l'impression d'un brouillard mental.",
  category: "Activité mentale",
  isInverted: true,
  coefficient: 0.5
}, {
  id: "q7",
  text: "Je suis souvent projeté(e) dans le passé en ruminant sur mes erreurs.",
  category: "Activité mentale",
  isInverted: true,
  coefficient: 0.5
}, {
  id: "q8",
  text: "J'imagine presque toujours un scénario négatif pour ce qui va se passer.",
  category: "Activité mentale",
  isInverted: true,
  coefficient: 0.5
}, {
  id: "q9",
  text: "Je me compare souvent aux autres.",
  category: "Activité mentale",
  isInverted: true,
  coefficient: 0.5
}, {
  id: "q10",
  text: "Je pense que ma personnalité « est comme ça » et que je ne peux pas vraiment changer.",
  category: "Activité mentale",
  isInverted: true,
  coefficient: 2
}, {
  id: "q11",
  text: "Mon passé influence mes choix et mes décisions dans le présent.",
  category: "Activité mentale",
  isInverted: true,
  coefficient: 2
}, {
  id: "q12",
  text: "Je suis à l'aise avec le fait de ne pas savoir (ou de ne pas tout contrôler).",
  category: "Activité mentale",
  coefficient: 2
}, {
  id: "q13",
  text: "Je me laisse vite emporter par la peur ou le stress lorsqu'un événement compliqué arrive.",
  category: "Réactivité émotionnelle",
  isInverted: true,
  coefficient: 0.5
}, {
  id: "q14",
  text: "Mon humeur est fortement influencée par celle des autres.",
  category: "Réactivité émotionnelle",
  isInverted: true,
  coefficient: 0.5
}, {
  id: "q15",
  text: "Je suis rancunier(e) et je pardonne difficilement aux autres.",
  category: "Réactivité émotionnelle",
  isInverted: true,
  coefficient: 1
}, {
  id: "q16",
  text: "J'ai conscience de l'impact direct de mes pensées sur mon humeur.",
  category: "Réactivité émotionnelle",
  coefficient: 1
}, {
  id: "q17",
  text: "Je peux repenser à des éléments durs de mon passé sans me laisser envahir par l'émotion.",
  category: "Réactivité émotionnelle",
  coefficient: 2
}, {
  id: "q18",
  text: "J'apprécie profondément la solitude choisie : je m'y sens en paix, sans aucun besoin de combler un vide.",
  category: "Réactivité émotionnelle",
  coefficient: 2
}, {
  id: "q19",
  text: "Mon attention saute facilement d'une chose à l'autre.",
  category: "Pilote automatique",
  isInverted: true,
  coefficient: 0.5
}, {
  id: "q20",
  text: "J'ai le besoin compulsif de me distraire (téléphone, série, podcast) dès que je ne fais rien.",
  category: "Pilote automatique",
  isInverted: true,
  coefficient: 0.5
}, {
  id: "q21",
  text: "Je peux facilement rester 5 minutes dans le silence total, sans aucune distraction.",
  category: "Pilote automatique",
  coefficient: 1
}, {
  id: "q22",
  text: "Quand je conduis ou que je marche : je suis attentif(ve) à mon environnement plutôt que perdu(e) dans mes pensées.",
  category: "Pilote automatique",
  coefficient: 1
}, {
  id: "q23",
  text: "Quand je mange : je suis pleinement dans l'expérience plutôt que distrait(e) mentalement.",
  category: "Pilote automatique",
  coefficient: 1
}, {
  id: "q24",
  text: "J'analyse tout à l'excès avant d'agir, au point de parfois me bloquer.",
  category: "Pilote automatique",
  isInverted: true,
  coefficient: 0.5
}, {
  id: "q25",
  text: "Lorsqu'une partie de mon corps est crispée, je sais utiliser des techniques pour la débloquer.",
  category: "Capacité de régulation",
  coefficient: 2
}, {
  id: "q26",
  text: "Je suis capable de ralentir mentalement quand je le décide.",
  category: "Capacité de régulation",
  coefficient: 2
}, {
  id: "q27",
  text: "Je suis capable d'influencer mon émotion délibérément pour passer d'un état négatif à positif en quelques secondes.",
  category: "Capacité de régulation",
  coefficient: 2
}, {
  id: "q28",
  text: "Je sais utiliser ma respiration pour calmer une montée de stress en moins d'une minute.",
  category: "Capacité de régulation",
  coefficient: 1
}, {
  id: "q29",
  text: "Quand je me sens submergé(e), j'ai des outils concrets pour retrouver mon calme.",
  category: "Capacité de régulation",
  coefficient: 1
}];
const CATEGORY_META = {
  "Signaux du corps": {
    color: "#c84d4d",
    bg: "#fbeeee",
    icon: "♥",
    desc: "Ton corps t'envoie des signaux en permanence. Ce score reflète ta capacité à capter les tensions, la respiration courte, les douleurs diffuses — tous ces indicateurs que ton système nerveux est en alerte."
  },
  "Activité mentale": {
    color: "#8a6bb1",
    bg: "#f1ecf6",
    icon: "◎",
    desc: "Rumination, scénarios catastrophe, brouillard mental — quand ton cerveau tourne en boucle, il maintient ton système nerveux en état d'alerte permanent. Ce score mesure l'intensité de cette suractivation mentale."
  },
  "Réactivité émotionnelle": {
    color: "#4a7fb0",
    bg: "#eaf1f8",
    icon: "◈",
    desc: "Quand une émotion arrive, est-ce qu'elle te traverse ou est-ce qu'elle te submerge ? Ce score reflète la vitesse à laquelle ton système nerveux bascule en mode alerte face à un stimulus émotionnel."
  },
  "Pilote automatique": {
    color: "#d98142",
    bg: "#fbf0e6",
    icon: "⟁",
    desc: "Distraction compulsive, repas avalés sans y penser, attention dispersée — ton système nerveux reste activé quand tu fonctionnes en pilote automatique, sans jamais revenir au calme."
  },
  "Capacité de régulation": {
    color: "#527d54",
    bg: "#e9efe7",
    icon: "✦",
    desc: "C'est ta capacité à ramener volontairement ton système nerveux vers l'équilibre. Respiration, ralentissement mental, techniques corporelles — plus ce score est élevé, plus tu as de leviers pour te réguler."
  }
};
const CATEGORIES = Object.keys(CATEGORY_META);
const EMOTIONS = {
  joie: {
    icon: '😊',
    name: 'Joie',
    color: '#E8A117',
    tag: 'Circuit de récompense',
    regions: ['striatum', 'prefrontal', 'cingulate'],
    regionNames: 'Striatum · Cortex préfrontal · Cingulaire antérieur',
    connections: ['c-prefrontal-striatum', 'c-cingulate-striatum', 'c-prefrontal-cingulate']
  },
  amour: {
    icon: '🥰',
    name: 'Amour',
    color: '#E85D75',
    tag: 'Zones du lien',
    regions: ['striatum', 'insula', 'cingulate'],
    regionNames: 'Noyau accumbens · Insula · Cingulaire antérieur',
    connections: ['c-striatum-accumbens', 'c-insula-cingulate', 'c-cingulate-striatum']
  },
  peur: {
    icon: '😨',
    name: 'Peur',
    color: '#6B4B9A',
    tag: "Zones d'alerte",
    regions: ['amygdala', 'hypothalamus', 'hippocampus'],
    regionNames: 'Amygdale · Hypothalamus · Hippocampe',
    connections: ['c-amygdala-hypothalamus', 'c-amygdala-hippocampus']
  },
  colere: {
    icon: '😠',
    name: 'Colère',
    color: '#D64545',
    tag: "Zones d'alerte",
    regions: ['amygdala', 'hypothalamus', 'prefrontal'],
    regionNames: 'Amygdale · Hypothalamus · Cortex préfrontal',
    connections: ['c-amygdala-hypothalamus', 'c-amygdala-prefrontal']
  },
  tristesse: {
    icon: '😢',
    name: 'Tristesse',
    color: '#4A7FD1',
    tag: 'Zones du repli',
    regions: ['cingulate', 'insula', 'prefrontal'],
    regionNames: 'Cingulaire subgénual · Insula · Cortex préfrontal',
    connections: ['c-insula-cingulate', 'c-insula-prefrontal', 'c-prefrontal-cingulate']
  },
  stress: {
    icon: '😰',
    name: 'Stress',
    color: '#E8862E',
    tag: "Zones d'alerte",
    regions: ['amygdala', 'hypothalamus', 'hippocampus', 'prefrontal'],
    regionNames: 'Amygdale · Hypothalamus · Hippocampe · Préfrontal',
    connections: ['c-amygdala-hypothalamus', 'c-amygdala-hippocampus', 'c-amygdala-prefrontal']
  }
};
const ORGANS = [{
  id: 'coeur',
  name: 'Le Cœur',
  sympa: 'Rythme accéléré, palpitations, hausse de tension.',
  para: 'Rythme calme, régulier et apaisé.'
}, {
  id: 'poumons',
  name: 'Poumons',
  sympa: 'Respiration courte, haute et saccadée.',
  para: 'Respiration profonde, ample et abdominale.'
}, {
  id: 'estomac',
  name: 'Estomac',
  sympa: 'Digestion bloquée, boule au ventre, nausées.',
  para: 'Digestion fluide, sensation de légèreté.'
}, {
  id: 'intestins',
  name: 'Intestins',
  sympa: 'Ventre tendu, crampes, transit perturbé.',
  para: 'Ventre souple, transit régulier.'
}, {
  id: 'muscles',
  name: 'Muscles',
  sympa: 'Nuque raide, mâchoires serrées, épaules hautes.',
  para: 'Corps relâché, muscles détendus.'
}, {
  id: 'vessie',
  name: 'Vessie',
  sympa: 'Envie pressante et soudaine (urgence liée au stress).',
  para: 'Fonctionnement normal, aucune urgence.'
}, {
  id: 'bouche',
  name: 'Bouche',
  sympa: 'Sèche, pâteuse, difficulté à avaler.',
  para: 'Normalement hydratée, salivation fluide.'
}];
window.QUESTIONS = QUESTIONS;
window.CATEGORY_META = CATEGORY_META;
window.CATEGORIES = CATEGORIES;
window.EMOTIONS = EMOTIONS;
window.ORGANS = ORGANS;
const Icon = ({
  children,
  size = 24,
  stroke = 1.6,
  ...rest
}) => React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: stroke,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  ...rest
}, children);
const MenuIcon = p => React.createElement(Icon, p, React.createElement("line", {
  x1: "4",
  y1: "7",
  x2: "20",
  y2: "7"
}), React.createElement("line", {
  x1: "4",
  y1: "17",
  x2: "20",
  y2: "17"
}));
const XIcon = p => React.createElement(Icon, p, React.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
}), React.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}));
const ArrowRightIcon = p => React.createElement(Icon, p, React.createElement("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
}), React.createElement("polyline", {
  points: "12 5 19 12 12 19"
}));
const BrainIcon = p => React.createElement(Icon, {
  ...p,
  stroke: 1.2
}, React.createElement("path", {
  d: "M9.5 3a3 3 0 0 0-3 3v1a3 3 0 0 0-2 5 3 3 0 0 0 2 5v1a3 3 0 0 0 3 3c.83 0 1.5-.67 1.5-1.5V4.5C11 3.67 10.33 3 9.5 3z"
}), React.createElement("path", {
  d: "M14.5 3a3 3 0 0 1 3 3v1a3 3 0 0 1 2 5 3 3 0 0 1-2 5v1a3 3 0 0 1-3 3c-.83 0-1.5-.67-1.5-1.5V4.5C13 3.67 13.67 3 14.5 3z"
}));
const ShareIcon = p => React.createElement(Icon, p, React.createElement("circle", {
  cx: "18",
  cy: "5",
  r: "3"
}), React.createElement("circle", {
  cx: "6",
  cy: "12",
  r: "3"
}), React.createElement("circle", {
  cx: "18",
  cy: "19",
  r: "3"
}), React.createElement("line", {
  x1: "8.59",
  y1: "13.51",
  x2: "15.42",
  y2: "17.49"
}), React.createElement("line", {
  x1: "15.41",
  y1: "6.51",
  x2: "8.59",
  y2: "10.49"
}));
const RotateIcon = p => React.createElement(Icon, p, React.createElement("polyline", {
  points: "1 4 1 10 7 10"
}), React.createElement("path", {
  d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"
}));
Object.assign(window, {
  Icon,
  MenuIcon,
  XIcon,
  ArrowRightIcon,
  BrainIcon,
  ShareIcon,
  RotateIcon
});
const {
  useState
} = React;
function Navigation({
  route,
  setRoute
}) {
  const [open, setOpen] = useState(false);
  const go = r => {
    setOpen(false);
    setRoute(r);
    window.scrollTo({
      top: 0
    });
  };
  return React.createElement(React.Fragment, null, React.createElement("header", {
    style: {
      position: 'fixed',
      top: 0,
      right: 0,
      zIndex: 50,
      padding: 24,
      pointerEvents: 'none'
    }
  }, React.createElement("button", {
    onClick: () => setOpen(true),
    "aria-label": "Menu",
    style: {
      pointerEvents: 'auto',
      padding: 12,
      background: '#fff',
      borderRadius: 9999,
      border: '1px solid #f0f0f1',
      boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background .2s'
    },
    onMouseOver: e => e.currentTarget.style.background = '#f5f5f7',
    onMouseOut: e => e.currentTarget.style.background = '#fff'
  }, React.createElement(MenuIcon, {
    size: 24
  }))), open && React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
      animation: 'fade .3s ease'
    }
  }, React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, React.createElement("button", {
    onClick: () => setOpen(false),
    style: {
      padding: 12,
      background: '#f5f5f7',
      borderRadius: 9999,
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    }
  }, React.createElement(XIcon, {
    size: 24
  }))), React.createElement("nav", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      gap: 28,
      padding: '32px clamp(32px, 8vw, 64px) 0',
      fontSize: 'clamp(28px, 5vw, 48px)',
      fontWeight: 500,
      letterSpacing: '-0.02em',
      color: '#111'
    }
  }, React.createElement("button", {
    onClick: () => go('home'),
    style: {
      ...navLinkStyle,
      color: route === 'home' ? '#14362B' : '#111'
    }
  }, "Accueil"), React.createElement("button", {
    onClick: () => go('test'),
    style: {
      ...navLinkStyle,
      color: route === 'test' ? '#14362B' : '#111'
    }
  }, "Test"), React.createElement("button", {
    onClick: () => go('guide'),
    style: {
      ...navLinkStyle,
      color: route === 'guide' ? '#14362B' : '#111'
    }
  }, "Comprendre le Système Nerveux"), React.createElement("button", {
    onClick: () => go('about'),
    style: {
      ...navLinkStyle,
      color: route === 'about' ? '#14362B' : '#111'
    }
  }, "Qui sommes-nous ?"), React.createElement("button", {
    onClick: () => go('workshops'),
    style: {
      ...navLinkStyle,
      color: route === 'workshops' ? '#14362B' : '#111'
    }
  }, "Formations & Conférences"))), React.createElement("style", null, `
        @keyframes fade { from { opacity:0 } to { opacity:1 } }
      `));
}
const navLinkStyle = {
  background: 'transparent',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  font: 'inherit',
  color: 'inherit',
  textAlign: 'left',
  transition: 'color .2s'
};
window.Navigation = Navigation;
const ROBIN_PHOTO = "/assets/robin-meuter.webp";
const JUSTINE_PHOTO = "/assets/justine-meuter.webp";
const LOGO_SRC = "/assets/logo.png";
const testFont = "'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif";
const testFontSerif = "'Fraunces', Georgia, serif";
const testEase = "cubic-bezier(0.22, 0.61, 0.36, 1)";
function WelcomeScreen({
  onStart,
  onGoGuide
}) {
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "85vh",
      padding: "64px 24px",
      textAlign: "center"
    }
  }, React.createElement("img", {
    src: LOGO_SRC,
    alt: "Inner Clarity",
    style: {
      width: 64,
      height: 64,
      borderRadius: 16,
      marginBottom: 32,
      objectFit: 'contain'
    }
  }), React.createElement("h1", {
    style: {
      fontWeight: 700,
      fontSize: "clamp(30px, 5vw, 48px)",
      letterSpacing: "-0.03em",
      lineHeight: 1.1,
      color: "#1b1b1b",
      margin: "0 0 20px"
    }
  }, "Évalue ton ", React.createElement("br", null), React.createElement("span", {
    style: {
      fontFamily: testFontSerif,
      fontStyle: "italic",
      fontWeight: 500
    }
  }, "équilibre nerveux")), React.createElement("p", {
    style: {
      fontSize: "clamp(15px, 1.5vw, 17px)",
      color: "#6a6a6a",
      maxWidth: 500,
      margin: "0 auto 48px",
      lineHeight: 1.6,
      fontWeight: 400
    }
  }, "Palpitations, tensions, brouillard mental, fatigue inexpliquée… et si tous ces signaux venaient d'un seul endroit — ton système nerveux ? Ce test évalue ta capacité à maintenir l'équilibre de ton système nerveux à travers 5 piliers. Combiné à la lecture du guide, il te donnera les clés pour comprendre et renforcer cet équilibre au quotidien."), React.createElement("button", {
    onClick: onStart,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "18px 36px",
      fontSize: 16,
      fontWeight: 600,
      color: "#fff",
      background: "#1b1b1b",
      borderRadius: 9999,
      border: "none",
      cursor: "pointer",
      transition: "transform .2s " + testEase
    },
    onMouseDown: e => e.currentTarget.style.transform = "scale(0.97)",
    onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
    onMouseOver: e => e.currentTarget.style.transform = "scale(1.03)",
    onMouseOut: e => e.currentTarget.style.transform = "scale(1)"
  }, React.createElement("span", null, "Commencer le test"), React.createElement("span", {
    style: {
      fontSize: 18
    }
  }, "→")), React.createElement("p", {
    style: {
      marginTop: 40,
      fontSize: 11,
      fontWeight: 600,
      color: "#9a958b",
      textTransform: "uppercase",
      letterSpacing: "0.15em"
    }
  }, "29 questions · 5 piliers · ~8 minutes"), React.createElement("div", {
    style: {
      marginTop: 32,
      padding: "22px 28px",
      borderRadius: 18,
      background: "#faf8f4",
      border: "1px solid #ebe8e2",
      textAlign: "center",
      maxWidth: 440,
      width: "100%"
    }
  }, React.createElement("p", {
    style: {
      fontSize: 14,
      color: "#4a4a4a",
      margin: "0 0 12px",
      lineHeight: 1.55
    }
  }, "Après le test, découvre le ", React.createElement("strong", {
    style: {
      color: "#1b1b1b"
    }
  }, "guide\xA0"), " qui t'explique pourquoi ton corps réagit ainsi — et comment retrouver l'équilibre."), React.createElement("button", {
    onClick: onGoGuide,
    style: {
      color: "#14362B",
      fontWeight: 600,
      fontSize: 13,
      textDecoration: "none",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      fontFamily: "inherit",
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, React.createElement("span", null, "Lire le guide"), React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, "→"))));
}
function QuizScreen({
  onComplete
}) {
  const [idx, setIdx] = React.useState(0);
  const [answers, setAnswers] = React.useState([]);
  const [slider, setSlider] = React.useState(50);
  const [dir, setDir] = React.useState(1);
  const q = QUESTIONS[idx];
  const pct = idx / QUESTIONS.length * 100;
  const catMeta = CATEGORY_META[q.category];
  React.useEffect(() => setSlider(50), [idx]);
  const submit = val => {
    const na = [...answers, {
      questionId: q.id,
      value: val
    }];
    setAnswers(na);
    if (idx < QUESTIONS.length - 1) {
      setDir(1);
      setIdx(idx + 1);
    } else onComplete(na);
  };
  const back = () => {
    if (idx > 0) {
      setDir(-1);
      setIdx(idx - 1);
      setAnswers(answers.slice(0, -1));
    }
  };
  return React.createElement("div", {
    style: {
      maxWidth: "min(960px, 90vw)",
      margin: "0 auto",
      padding: "80px 32px 32px",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }
  }, React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      background: "#faf8f4",
      paddingTop: 20,
      paddingBottom: 8,
      zIndex: 10
    }
  }, React.createElement("div", {
    style: {
      height: 3,
      background: "#e5e0d6",
      borderRadius: 9999,
      overflow: "hidden",
      marginBottom: 8
    }
  }, React.createElement("div", {
    style: {
      height: "100%",
      width: pct + "%",
      background: "#1b1b1b",
      borderRadius: 9999,
      transition: "width .5s " + testEase
    }
  })), React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 10,
      fontWeight: 600,
      color: "#9a958b",
      textTransform: "uppercase",
      letterSpacing: "0.15em",
      marginBottom: 32
    }
  }, React.createElement("span", {
    style: {
      color: catMeta.color
    }
  }, q.category), React.createElement("span", null, idx + 1, " / ", QUESTIONS.length))), React.createElement("div", {
    style: {
      flex: 1
    },
    key: idx
  }, React.createElement("p", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: catMeta.color,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      margin: "0 0 16px",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 6,
      background: catMeta.bg,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 11
    }
  }, catMeta.icon), "Pilier ", CATEGORIES.indexOf(q.category) + 1), React.createElement("h2", {
    style: {
      fontWeight: 600,
      fontSize: "clamp(20px, 3vw, 32px)",
      letterSpacing: "-0.015em",
      lineHeight: 1.3,
      color: "#1b1b1b",
      margin: "0 0 40px"
    }
  }, q.text), q.options ? React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      marginBottom: 40
    }
  }, q.options.map(o => React.createElement("button", {
    key: o.value,
    onClick: () => submit((o.value - 1) * 25),
    style: {
      textAlign: "left",
      padding: "16px 22px",
      borderRadius: 16,
      border: "1px solid #ddd8ce",
      background: "#fff",
      color: "#1b1b1b",
      fontWeight: 500,
      fontSize: 14,
      cursor: "pointer",
      lineHeight: 1.5,
      transition: "all .15s " + testEase,
      width: "100%",
      fontFamily: "inherit"
    },
    onMouseOver: e => {
      e.currentTarget.style.borderColor = catMeta.color;
      e.currentTarget.style.background = catMeta.bg;
    },
    onMouseOut: e => {
      e.currentTarget.style.borderColor = "#ddd8ce";
      e.currentTarget.style.background = "#fff";
    }
  }, o.label))) : React.createElement("div", {
    style: {
      padding: "32px 0"
    }
  }, React.createElement("input", {
    type: "range",
    min: "0",
    max: "100",
    value: slider,
    onChange: e => setSlider(parseInt(e.target.value)),
    style: {
      width: "100%",
      height: 6,
      borderRadius: 9999,
      appearance: "none",
      WebkitAppearance: "none",
      cursor: "pointer",
      background: "linear-gradient(to right, #1b1b1b " + slider + "%, #e5e0d6 " + slider + "%)",
      outline: "none"
    }
  }), React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 11,
      fontWeight: 600,
      color: "#9a958b",
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      margin: "16px 0 40px"
    }
  }, React.createElement("span", null, "Pas du tout"), React.createElement("span", null, "Tout à fait")), React.createElement("button", {
    onClick: () => submit(slider),
    style: {
      width: "100%",
      padding: "18px",
      background: "#1b1b1b",
      color: "#fff",
      borderRadius: 9999,
      border: "none",
      fontWeight: 600,
      fontSize: 15,
      cursor: "pointer",
      fontFamily: "inherit",
      transition: "transform .2s " + testEase
    },
    onMouseOver: e => e.currentTarget.style.transform = "scale(1.02)",
    onMouseOut: e => e.currentTarget.style.transform = "scale(1)"
  }, "Suivant"))), React.createElement("div", {
    style: {
      marginTop: "auto",
      padding: "24px 0",
      borderTop: "1px solid #eae6de",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, idx > 0 ? React.createElement("button", {
    onClick: back,
    style: {
      background: "transparent",
      border: "none",
      cursor: "pointer",
      fontSize: 11,
      fontWeight: 600,
      color: "#9a958b",
      textTransform: "uppercase",
      letterSpacing: "0.15em",
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "inherit"
    }
  }, React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, "←"), " Précédent") : React.createElement("span", null), React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: "#9a958b",
      textTransform: "uppercase",
      letterSpacing: "0.15em",
      opacity: 0.5
    }
  }, "Auto-save")), React.createElement("style", null, `
        input[type="range"]::-webkit-slider-thumb { -webkit-appearance:none; width:22px; height:22px; border-radius:50%; background:#1b1b1b; border:3px solid #fbfbfd; box-shadow:0 1px 4px rgba(0,0,0,0.15); cursor:pointer; }
        input[type="range"]::-moz-range-thumb { width:22px; height:22px; border-radius:50%; background:#1b1b1b; border:3px solid #fbfbfd; box-shadow:0 1px 4px rgba(0,0,0,0.15); cursor:pointer; }
      `));
}
function TestRadarChart({
  data
}) {
  const size = 520,
    cx = size / 2,
    cy = size / 2,
    maxR = 150;
  const n = data.length;
  const angleFor = i => i * 2 * Math.PI / n - Math.PI / 2;
  const rings = [0.25, 0.5, 0.75, 1];
  const pts = data.map((d, i) => {
    const r = d.score / 100 * maxR;
    const a = angleFor(i);
    return {
      x: cx + Math.cos(a) * r,
      y: cy + Math.sin(a) * r
    };
  });
  const pathD = pts.map((p, i) => (i === 0 ? "M" : "L") + p.x + "," + p.y).join(" ") + " Z";
  return React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 520,
      margin: "0 auto 56px",
      position: "relative"
    }
  }, React.createElement("svg", {
    viewBox: "0 0 " + size + " " + size,
    style: {
      width: "100%",
      height: "auto",
      overflow: "visible"
    }
  }, rings.map((r, ri) => React.createElement("polygon", {
    key: ri,
    points: Array.from({
      length: n
    }, (_, i) => {
      const a = angleFor(i);
      return cx + Math.cos(a) * r * maxR + "," + (cy + Math.sin(a) * r * maxR);
    }).join(" "),
    fill: "none",
    stroke: "#d8d2c4",
    strokeWidth: ri === rings.length - 1 ? 0.8 : 0.5,
    strokeDasharray: ri === rings.length - 1 ? "none" : "3 3",
    opacity: 0.6
  })), data.map((d, i) => {
    const a = angleFor(i);
    return React.createElement("line", {
      key: i,
      x1: cx,
      y1: cy,
      x2: cx + Math.cos(a) * maxR,
      y2: cy + Math.sin(a) * maxR,
      stroke: "#d8d2c4",
      strokeWidth: 0.5,
      opacity: 0.5
    });
  }), React.createElement("path", {
    d: pathD,
    fill: "#1b1b1b",
    fillOpacity: 0.06,
    stroke: "none"
  }), React.createElement("path", {
    d: pathD,
    fill: "none",
    stroke: "#1b1b1b",
    strokeWidth: 2.2,
    strokeLinejoin: "round"
  }), pts.map((p, i) => React.createElement("circle", {
    key: i,
    cx: p.x,
    cy: p.y,
    r: 5,
    fill: CATEGORY_META[data[i].name].color,
    stroke: "#fbfbfd",
    strokeWidth: 2.5
  })), data.map((d, i) => {
    const a = angleFor(i);
    const lr = maxR + 40;
    const x = cx + Math.cos(a) * lr;
    const y = cy + Math.sin(a) * lr;
    const anchor = Math.abs(Math.cos(a)) < 0.15 ? "middle" : Math.cos(a) > 0 ? "start" : "end";
    const meta = CATEGORY_META[d.name];
    const words = d.name.split(" ");
    return React.createElement("g", {
      key: i
    }, words.map((w, wi) => React.createElement("text", {
      key: wi,
      x: x,
      y: y + wi * 13 - (words.length - 1) * 6,
      textAnchor: anchor,
      fill: meta.color,
      style: {
        fontSize: 11,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.05em"
      }
    }, w)), React.createElement("text", {
      x: x,
      y: y + words.length * 13 - (words.length - 1) * 6 + 4,
      textAnchor: anchor,
      fill: "#9a958b",
      style: {
        fontSize: 10.5,
        fontWeight: 500
      }
    }, d.score, "/100"));
  })));
}
function loadHtml2Pdf() {
  if (window.html2pdf) return Promise.resolve(window.html2pdf);
  return new Promise(function (res, rej) {
    var sc = document.createElement('script');
    sc.src = '/assets/html2pdf.bundle.min.js';
    sc.onload = function () {
      res(window.html2pdf);
    };
    sc.onerror = rej;
    document.head.appendChild(sc);
  });
}
function buildReportHTML(globalScore, catData, grouped) {
  var date = new Date().toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  var serif = "'Fraunces', Georgia, serif";
  function gl(score) {
    if (score >= 75) return {
      label: "Régulé",
      color: "#527d54",
      bg: "#e9efe7"
    };
    if (score >= 50) return {
      label: "Modéré",
      color: "#b8692f",
      bg: "#fbefe4"
    };
    return {
      label: "En alerte",
      color: "#b84444",
      bg: "#fbe9e9"
    };
  }
  var g = gl(globalScore);
  var sorted = catData.slice().sort(function (a, b) {
    return a.score - b.score;
  });
  var weakest = sorted[0],
    strongest = sorted[sorted.length - 1];
  var cx = 170,
    cy = 150,
    r = 105,
    n = catData.length;
  function pt(i, d) {
    var a = Math.PI * 2 * i / n - Math.PI / 2;
    return [cx + d * Math.cos(a), cy + d * Math.sin(a)];
  }
  var grid = [25, 50, 75, 100].map(function (p) {
    var pts = [];
    for (var i = 0; i < n; i++) {
      var q = pt(i, r * p / 100);
      pts.push(q[0].toFixed(1) + ',' + q[1].toFixed(1));
    }
    return '<polygon points="' + pts.join(' ') + '" fill="' + (p === 100 ? '#faf8f4' : 'none') + '" stroke="#e4e0d8" stroke-width="0.8"/>';
  }).join('');
  var axes = '',
    dots = '',
    labels = '',
    poly = [];
  catData.forEach(function (c, i) {
    var e = pt(i, r),
      p = pt(i, r * c.score / 100),
      l = pt(i, r + 22);
    var meta = CATEGORY_META[c.name] || {
      color: '#14362B'
    };
    var a = Math.PI * 2 * i / n - Math.PI / 2;
    var anchor = Math.abs(Math.cos(a)) < 0.15 ? 'middle' : Math.cos(a) > 0 ? 'start' : 'end';
    axes += '<line x1="' + cx + '" y1="' + cy + '" x2="' + e[0].toFixed(1) + '" y2="' + e[1].toFixed(1) + '" stroke="#ebe7df" stroke-width="0.8"/>';
    poly.push(p[0].toFixed(1) + ',' + p[1].toFixed(1));
    dots += '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="4" fill="' + meta.color + '" stroke="#fff" stroke-width="2"/>';
    var dy = Math.sin(a) < -0.5 ? -6 : Math.sin(a) > 0.5 ? 10 : 3;
    labels += '<text x="' + l[0].toFixed(1) + '" y="' + (l[1] + dy).toFixed(1) + '" text-anchor="' + anchor + '" font-size="9.5" font-weight="700" letter-spacing="0.4" fill="' + meta.color + '" font-family="Inter,sans-serif">' + c.name.toUpperCase() + '</text>';
    labels += '<text x="' + l[0].toFixed(1) + '" y="' + (l[1] + dy + 12).toFixed(1) + '" text-anchor="' + anchor + '" font-size="9" fill="#9a958b" font-family="Inter,sans-serif">' + c.score + '/100</text>';
  });
  var radar = '<svg viewBox="-120 -5 580 315" width="580" height="315" xmlns="http://www.w3.org/2000/svg" style="overflow:visible">' + grid + axes + '<polygon points="' + poly.join(' ') + '" fill="rgba(20,54,43,0.12)" stroke="#14362B" stroke-width="1.8" stroke-linejoin="round"/>' + dots + labels + '</svg>';
  var pillars = catData.map(function (c) {
    var lv = gl(c.score),
      meta = CATEGORY_META[c.name] || {
        color: '#14362B',
        desc: ''
      };
    return '<div class="pdf-avoid" style="display:grid;grid-template-columns:1fr auto;column-gap:16px;padding:14px 0;border-top:1px solid #eeeae3">' + '<div style="display:flex;align-items:center;gap:9px"><span style="width:8px;height:8px;border-radius:99px;background:' + meta.color + '"></span><span style="font-size:13px;font-weight:600;color:#1b1b1b">' + c.name + '</span><span style="font-size:9px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:' + lv.color + ';background:' + lv.bg + ';padding:3px 8px;border-radius:99px">' + lv.label + '</span></div>' + '<div style="font-size:15px;font-weight:700;color:#1b1b1b;text-align:right">' + c.score + '<span style="font-size:10px;color:#b0a9a0;font-weight:600"> /100</span></div>' + '<div style="grid-column:1 / -1;height:4px;background:#f0ede8;border-radius:99px;margin:10px 0 9px;overflow:hidden"><div style="height:4px;width:' + c.score + '%;background:' + meta.color + ';border-radius:99px"></div></div>' + '<div style="grid-column:1 / -1;font-size:10.5px;line-height:1.55;color:#6a6a6a">' + (meta.desc || '') + '</div></div>';
  }).join('');
  var answers = CATEGORIES.map(function (cat) {
    var items = grouped[cat];
    if (!items || !items.length) return '';
    var meta = CATEGORY_META[cat] || {
      color: '#14362B'
    };
    var rows = items.map(function (it) {
      return '<div class="pdf-avoid" style="display:grid;grid-template-columns:minmax(0,1fr) 150px;gap:20px;padding:9px 0;border-top:1px solid #f0ede8;font-size:10.5px;line-height:1.45"><div style="color:#1b1b1b">' + it.question + '</div><div style="color:#14362B;font-weight:600;text-align:right">' + it.answer + '</div></div>';
    }).join('');
    return '<div style="margin-bottom:22px"><div class="pdf-avoid" style="display:flex;align-items:center;gap:8px;margin-bottom:6px"><span style="width:8px;height:8px;border-radius:99px;background:' + meta.color + '"></span><span style="font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#1b1b1b">' + cat + '</span></div>' + rows + '</div>';
  }).join('');
  var header = function (title) {
    return '<div style="display:flex;justify-content:space-between;align-items:center;padding-bottom:14px;border-bottom:1px solid #14362B;margin-bottom:28px"><div style="display:flex;align-items:center;gap:10px"><img src="' + LOGO_SRC + '" style="width:30px;height:30px;border-radius:50%;object-fit:contain"/><div><div style="font-size:14px;font-weight:700;color:#14362B;letter-spacing:-0.01em">Inner Clarity</div><div style="font-size:9px;color:#9a958b;letter-spacing:0.04em">Régulation du système nerveux</div></div></div><div style="font-size:9.5px;color:#9a958b;text-align:right;line-height:1.5">' + title + '<br/>' + date + '</div></div>';
  };
  return '<div style="width:640px;box-sizing:border-box;font-family:Inter,-apple-system,Helvetica,Arial,sans-serif;color:#1b1b1b;background:#fff">' + header('Bilan personnel') + '<div style="font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#527d54;margin-bottom:8px">Test d\'équilibre nerveux</div>' + '<div style="font-size:28px;font-weight:700;letter-spacing:-0.02em;line-height:1.15;margin-bottom:24px">Ton bilan <span style="font-family:' + serif + ';font-style:italic;font-weight:500">Inner Clarity</span></div>' + '<div class="pdf-avoid" style="display:grid;grid-template-columns:200px minmax(0,1fr);gap:28px;align-items:center;background:#f6f4ee;border-radius:16px;padding:24px 28px;margin-bottom:26px">' + '<div><div style="font-size:9px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:#9a958b;margin-bottom:6px">Score global</div><div style="font-weight:800;color:#14362B;line-height:1"><span style="font-size:60px;letter-spacing:-0.04em">' + globalScore + '</span><span style="font-size:18px;color:#b0a9a0;font-weight:600"> /100</span></div><div style="display:inline-block;margin-top:10px;font-size:10px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:' + g.color + ';background:#fff;padding:4px 10px;border-radius:99px">' + g.label + '</div></div>' + '<div style="font-size:11.5px;line-height:1.65;color:#4a4a4a">Ce profil cartographie l\'état de ton système nerveux à travers cinq piliers.<div style="margin-top:12px;display:grid;grid-template-columns:1fr 1fr;gap:12px"><div><div style="font-size:9px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#9a958b;margin-bottom:3px">Point d\'appui</div><div style="font-weight:600;color:#1b1b1b">' + strongest.name + ' · ' + strongest.score + '</div></div><div><div style="font-size:9px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#9a958b;margin-bottom:3px">Priorité</div><div style="font-weight:600;color:#1b1b1b">' + weakest.name + ' · ' + weakest.score + '</div></div></div></div>' + '</div>' + '<div class="pdf-avoid" style="display:flex;justify-content:center;margin:4px 0 18px">' + radar + '</div>' + '<div class="pdf-break"></div>' + header('Détail par pilier') + '<div style="font-size:18px;font-weight:700;letter-spacing:-0.01em;margin-bottom:14px">Détail par pilier</div>' + pillars + '<div class="pdf-avoid" style="margin-top:26px;border:1px solid #e4e0d8;border-radius:14px;padding:20px 24px"><div style="font-size:9px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:#527d54;margin-bottom:6px">Pour aller plus loin</div><div style="font-size:14px;font-weight:700;margin-bottom:6px">Apprendre à réguler son système nerveux</div><div style="font-size:10.5px;line-height:1.6;color:#6a6a6a">Un appel découverte gratuit de 15-20 min pour discuter de tes résultats : calendly.com/meuter-robin/30min</div></div>' + '<div class="pdf-break"></div>' + header('Récapitulatif') + '<div style="font-size:18px;font-weight:700;letter-spacing:-0.01em;margin-bottom:16px">Récapitulatif des réponses</div>' + answers + '<div style="margin-top:20px;font-size:9px;color:#b0a9a0;line-height:1.5">Ce bilan est un outil d\'auto-observation et ne remplace pas un avis médical.</div>' + '</div>';
}
function generatePDF(ui, globalScore, globalLevel, catData, reviewItems, grouped, btn) {
  var label = btn ? btn.innerHTML : null;
  if (btn) {
    btn.disabled = true;
    btn.style.opacity = '0.7';
    btn.innerHTML = 'Préparation du PDF…';
  }
  var done = function () {
    if (btn) {
      btn.disabled = false;
      btn.style.opacity = '1';
      btn.innerHTML = label;
    }
  };
  var wrap = document.createElement('div');
  wrap.style.cssText = 'position:fixed;left:-10000px;top:0;background:#fff';
  wrap.innerHTML = '<style>.pdf-break{page-break-before:always;height:0}</style>' + buildReportHTML(globalScore, catData, grouped);
  document.body.appendChild(wrap);
  var el = wrap.lastElementChild;
  loadHtml2Pdf().then(function (h2p) {
    return h2p().set({
      margin: [14, 15, 16, 15],
      filename: 'Inner-Clarity-bilan.pdf',
      image: {
        type: 'jpeg',
        quality: 0.96
      },
      html2canvas: {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff'
      },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait'
      },
      pagebreak: {
        mode: ['css'],
        before: '.pdf-break',
        avoid: '.pdf-avoid'
      }
    }).from(el).toPdf().get('pdf').then(function (pdf) {
      var total = pdf.internal.getNumberOfPages();
      for (var i = 1; i <= total; i++) {
        pdf.setPage(i);
        pdf.setFontSize(7.5);
        pdf.setTextColor(170, 164, 155);
        pdf.text('Inner Clarity — Robin & Justine Meuter', 15, 289);
        pdf.text(i + ' / ' + total, 195, 289, {
          align: 'right'
        });
      }
    }).save();
  }).catch(function () {
    var f = document.createElement('iframe');
    f.style.cssText = 'position:fixed;right:0;bottom:0;width:0;height:0;border:0';
    document.body.appendChild(f);
    f.contentDocument.open();
    f.contentDocument.write('<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Inner Clarity — Bilan</title><style>@page{size:A4;margin:14mm 15mm}body{margin:0;-webkit-print-color-adjust:exact;print-color-adjust:exact}.pdf-break{page-break-before:always}.pdf-avoid{page-break-inside:avoid}</style></head><body>' + el.outerHTML + '</body></html>');
    f.contentDocument.close();
    setTimeout(function () {
      f.contentWindow.focus();
      f.contentWindow.print();
      setTimeout(function () {
        f.remove();
      }, 2000);
    }, 400);
  }).then(function () {
    wrap.remove();
    done();
  });
}
function ResultScreen({
  answers,
  onRestart,
  onGoGuide
}) {
  const [showReview, setShowReview] = React.useState(false);
  const {
    chartData,
    catData,
    globalScore
  } = React.useMemo(() => {
    const cats = {};
    answers.forEach(a => {
      const q = QUESTIONS.find(x => x.id === a.questionId);
      if (!q) return;
      if (!cats[q.category]) cats[q.category] = {
        tw: 0,
        mw: 0
      };
      const ev = q.isInverted ? 100 - a.value : a.value;
      cats[q.category].tw += ev * q.coefficient;
      cats[q.category].mw += 100 * q.coefficient;
    });
    const data = CATEGORIES.map(c => ({
      name: c,
      score: Math.round((cats[c]?.tw || 0) / (cats[c]?.mw || 1) * 100)
    }));
    const avg = Math.round(data.reduce((s, d) => s + d.score, 0) / data.length);
    return {
      chartData: data,
      catData: data,
      globalScore: avg
    };
  }, [answers]);
  const getLevel = score => {
    if (score >= 75) return {
      label: "Régulé",
      color: "#527d54"
    };
    if (score >= 50) return {
      label: "Modéré",
      color: "#d98142"
    };
    return {
      label: "En alerte",
      color: "#c84d4d"
    };
  };
  const globalLevel = getLevel(globalScore);
  const reviewItems = answers.map(a => {
    const q = QUESTIONS.find(x => x.id === a.questionId);
    let displayAnswer;
    if (q?.options) {
      const opt = q.options.find(o => (o.value - 1) * 25 === a.value);
      displayAnswer = opt ? opt.label : a.value + "/100";
    } else {
      displayAnswer = a.value + " / 100" + (q?.isInverted ? " (inversé)" : "");
    }
    return {
      question: q?.text,
      answer: displayAnswer,
      category: q?.category
    };
  });
  const grouped = {};
  CATEGORIES.forEach(c => grouped[c] = []);
  reviewItems.forEach(r => {
    if (grouped[r.category]) grouped[r.category].push(r);
  });
  return React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: "0 auto",
      padding: "56px 24px 80px"
    }
  }, React.createElement("div", {
    className: "rs-hero",
    style: {
      textAlign: "center",
      marginBottom: 16
    }
  }, React.createElement("p", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: "#9a958b",
      textTransform: "uppercase",
      letterSpacing: "0.18em",
      margin: "0 0 8px"
    }
  }, "Ton score global"), React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "center",
      gap: 6,
      margin: "0 0 8px"
    }
  }, React.createElement("span", {
    className: "rs-score",
    style: {
      fontWeight: 800,
      fontSize: "clamp(72px, 12vw, 108px)",
      letterSpacing: "-0.04em",
      lineHeight: 1,
      color: "#1b1b1b"
    }
  }, globalScore), React.createElement("span", {
    style: {
      fontSize: 20,
      fontWeight: 600,
      color: "#9a958b"
    }
  }, "/100"))), React.createElement("div", {
    className: "rs-sub",
    style: {
      textAlign: "center",
      marginBottom: 48
    }
  }, React.createElement("p", {
    style: {
      color: "#6a6a6a",
      maxWidth: 560,
      margin: "20px auto 0",
      lineHeight: 1.6,
      fontSize: 15
    }
  }, "Ce profil cartographie l'état de ton système nerveux à travers cinq piliers. Il met en lumière les zones où la suractivation est la plus forte. Pour comprendre pourquoi ton corps réagit ainsi et découvrir comment retrouver l'équilibre, poursuis avec le guide.")), React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 32
    }
  }, React.createElement("button", {
    onClick: e => generatePDF(null, globalScore, globalLevel, catData, reviewItems, grouped, e.currentTarget),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "14px 28px",
      fontSize: 14,
      fontWeight: 600,
      color: "#fff",
      background: "#14362B",
      border: "none",
      borderRadius: 9999,
      cursor: "pointer",
      fontFamily: "inherit",
      transition: "transform .2s " + testEase
    },
    onMouseOver: e => e.currentTarget.style.transform = "scale(1.03)",
    onMouseOut: e => e.currentTarget.style.transform = "scale(1)"
  }, React.createElement("span", null, "↓"), " Télécharger mes résultats")), React.createElement("div", {
    className: "rs-radar"
  }, React.createElement(TestRadarChart, {
    data: chartData
  })), React.createElement("div", {
    style: {
      display: "grid",
      gap: 14,
      marginBottom: 48
    }
  }, catData.map((c, idx) => {
    const meta = CATEGORY_META[c.name];
    const level = getLevel(c.score);
    return React.createElement("div", {
      key: c.name,
      className: "rs-pillar",
      style: {
        background: "#fff",
        padding: "20px 22px",
        borderRadius: 18,
        border: "1px solid #eae6de",
        borderLeft: "3px solid " + meta.color,
        animationDelay: 1.2 + idx * 0.1 + "s"
      }
    }, React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 2
      }
    }, React.createElement("span", {
      style: {
        width: 28,
        height: 28,
        borderRadius: 8,
        background: meta.bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 13,
        flexShrink: 0,
        color: meta.color,
        fontWeight: 700
      }
    }, meta.icon), React.createElement("p", {
      style: {
        fontWeight: 600,
        fontSize: 14,
        color: "#1b1b1b",
        margin: 0,
        flex: 1
      }
    }, c.name), React.createElement("span", {
      style: {
        fontSize: 14,
        fontVariantNumeric: "tabular-nums",
        fontWeight: 700,
        color: "#1b1b1b"
      }
    }, c.score, React.createElement("span", {
      style: {
        fontSize: 11,
        color: "#b0a9a0",
        fontWeight: 600
      }
    }, "/100"))), React.createElement("div", {
      style: {
        height: 5,
        width: "100%",
        background: "#eae6de",
        borderRadius: 9999,
        marginTop: 10,
        overflow: "hidden"
      }
    }, React.createElement("div", {
      className: "rs-bar",
      style: {
        height: "100%",
        width: c.score + "%",
        background: meta.color,
        borderRadius: 9999,
        animationDelay: 1.4 + idx * 0.15 + "s"
      }
    })), React.createElement("p", {
      style: {
        fontSize: 13,
        color: "#6a6a6a",
        marginTop: 14,
        lineHeight: 1.6
      }
    }, meta.desc));
  })), React.createElement("div", {
    className: "rs-pillar",
    style: {
      background: "#faf8f4",
      borderRadius: 22,
      padding: "32px 28px",
      marginBottom: 16,
      textAlign: "center",
      animationDelay: "2s",
      border: "1px solid #ebe8e2"
    }
  }, React.createElement("p", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: "#9a958b",
      textTransform: "uppercase",
      letterSpacing: "0.15em",
      margin: "0 0 10px"
    }
  }, "Étape suivante"), React.createElement("h3", {
    style: {
      fontWeight: 700,
      fontSize: 20,
      color: "#1b1b1b",
      margin: "0 0 10px",
      letterSpacing: "-0.01em"
    }
  }, "Comprendre pourquoi ton corps réagit ainsi"), React.createElement("p", {
    style: {
      fontSize: 14,
      color: "#5a5a5a",
      margin: "0 0 24px",
      lineHeight: 1.55
    }
  }, "Le guide gratuit t'explique le parcours exact d'une émotion dans ton corps — de la pensée jusqu'au symptôme — et les 3 leviers pour interrompre le cycle."), React.createElement("button", {
    onClick: onGoGuide,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "16px 32px",
      background: "#1b1b1b",
      color: "#fff",
      borderRadius: 9999,
      fontWeight: 600,
      fontSize: 15,
      border: "none",
      cursor: "pointer",
      fontFamily: "inherit",
      transition: "transform .2s " + testEase
    },
    onMouseOver: e => e.currentTarget.style.transform = "scale(1.03)",
    onMouseOut: e => e.currentTarget.style.transform = "scale(1)"
  }, "Lire le guide ", React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, "→"))), React.createElement("div", {
    className: "rs-pillar",
    style: {
      background: "#fff",
      borderRadius: 22,
      padding: "28px 28px",
      marginBottom: 48,
      border: "1px solid #eae6de",
      animationDelay: "2.1s"
    }
  }, React.createElement("p", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: "#527d54",
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      margin: "0 0 8px",
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "#527d54"
    }
  }), "Accompagnement"), React.createElement("h3", {
    style: {
      fontWeight: 700,
      fontSize: 18,
      color: "#1b1b1b",
      margin: "0 0 8px",
      letterSpacing: "-0.01em"
    }
  }, "Apprendre à réguler son système nerveux"), React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: "#6a6a6a",
      margin: "0 0 20px",
      lineHeight: 1.55
    }
  }, "Un cycle de pratique méditative en visio sur 6 semaines, en individuel, pour passer de la compréhension à la maîtrise. Respiration, méditation, visualisation : les outils concrets pour retrouver l'équilibre durablement."), React.createElement("button", {
    onClick: () => window.open('https://calendly.com/meuter-robin/30min', '_blank'),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "13px 24px",
      background: "#14362B",
      color: "#fff",
      borderRadius: 9999,
      fontWeight: 600,
      fontSize: 13.5,
      border: "none",
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, "Réserver mon appel découverte ", React.createElement("span", null, "→")), React.createElement("p", {
    style: {
      fontSize: 12,
      color: "#9a958b",
      margin: "8px 0 0",
      lineHeight: 1.5
    }
  }, "15-20 min gratuites pour discuter de tes résultats et voir ce qui te conviendrait le mieux.")), React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginBottom: 48,
      flexWrap: "wrap"
    }
  }, React.createElement("button", {
    onClick: onRestart,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "14px 24px",
      fontSize: 14,
      fontWeight: 600,
      color: "#1b1b1b",
      background: "transparent",
      border: "1px solid #ddd8ce",
      borderRadius: 9999,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, React.createElement("span", null, "↻"), " Refaire le test"), React.createElement("button", {
    onClick: () => setShowReview(!showReview),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "14px 24px",
      fontSize: 14,
      fontWeight: 600,
      color: "#1b1b1b",
      background: "transparent",
      border: "1px solid #ddd8ce",
      borderRadius: 9999,
      cursor: "pointer",
      fontFamily: "inherit"
    }
  }, React.createElement("span", null, showReview ? "▲" : "▼"), " ", showReview ? "Masquer mes réponses" : "Voir mes réponses")), showReview && React.createElement("div", null, React.createElement("h3", {
    style: {
      fontWeight: 700,
      fontSize: 18,
      letterSpacing: "-0.01em",
      color: "#1b1b1b",
      margin: "0 0 20px"
    }
  }, "Récapitulatif de tes réponses"), CATEGORIES.map(cat => {
    const meta = CATEGORY_META[cat];
    const items = grouped[cat];
    if (!items.length) return null;
    return React.createElement("div", {
      key: cat,
      style: {
        marginBottom: 24
      }
    }, React.createElement("p", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        color: meta.color,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        margin: "0 0 10px",
        display: "flex",
        alignItems: "center",
        gap: 6
      }
    }, React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: meta.color,
        display: "inline-block"
      }
    }), cat), React.createElement("div", {
      style: {
        display: "grid",
        gap: 8
      }
    }, items.map((r, i) => React.createElement("div", {
      key: i,
      style: {
        background: "#fff",
        padding: "18px 20px",
        borderRadius: 14,
        border: "1px solid #eae6de"
      }
    }, React.createElement("p", {
      style: {
        fontSize: 13.5,
        fontWeight: 600,
        color: "#1b1b1b",
        margin: "0 0 6px",
        lineHeight: 1.4
      }
    }, r.question), React.createElement("p", {
      style: {
        fontSize: 12.5,
        color: "#6a6a6a",
        margin: 0
      }
    }, "↳ ", r.answer)))));
  })), React.createElement("style", null, `
        @keyframes rsFadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        @keyframes rsCountIn { from { opacity:0; transform:translateY(24px) scale(0.9); } to { opacity:1; transform:translateY(0) scale(1); } }
        @keyframes rsRadarIn { from { opacity:0; transform:scale(0.7); transform-origin:center; } to { opacity:1; transform:scale(1); } }
        @keyframes rsBarGrow { from { width:0; } }
        .rs-hero { animation: rsFadeUp 0.7s cubic-bezier(0.22,0.61,0.36,1) 0.1s both; }
        .rs-score { animation: rsCountIn 0.9s cubic-bezier(0.22,0.61,0.36,1) 0.2s both; }
        .rs-sub { animation: rsFadeUp 0.6s cubic-bezier(0.22,0.61,0.36,1) 0.4s both; }
        .rs-radar { animation: rsRadarIn 0.9s cubic-bezier(0.22,0.61,0.36,1) 0.6s both; }
        .rs-pillar { animation: rsFadeUp 0.6s cubic-bezier(0.22,0.61,0.36,1) both; }
        .rs-bar { animation: rsBarGrow 1s cubic-bezier(0.22,0.61,0.36,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .rs-hero, .rs-score, .rs-sub, .rs-radar, .rs-pillar, .rs-bar { animation: none; }
        }
      `));
}
window.WelcomeScreen = WelcomeScreen;
window.QuizScreen = QuizScreen;
window.ResultScreen = ResultScreen;
const {
  useState: useStateW
} = React;
function BrainEmotionWidget() {
  const [active, setActive] = useStateW(null);
  const isActiveRegion = id => active && EMOTIONS[active].regions.includes(id);
  const isActiveConn = id => active && EMOTIONS[active].connections.includes(id);
  const col = id => isActiveRegion(id) ? EMOTIONS[active].color : 'transparent';
  const cCol = id => isActiveConn(id) ? EMOTIONS[active].color : 'transparent';
  const cur = active ? EMOTIONS[active] : null;
  return React.createElement("div", {
    style: {
      fontFamily: "'DM Sans',sans-serif",
      color: '#1a1a1a',
      maxWidth: 520,
      margin: '0 auto',
      padding: '8px 16px 0'
    }
  }, React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6,1fr)',
      gap: 6,
      marginBottom: 8
    }
  }, Object.entries(EMOTIONS).map(([k, e]) => React.createElement("button", {
    key: k,
    onClick: () => setActive(k),
    style: {
      background: active === k ? '#1a1a1a' : 'transparent',
      border: '1px solid ' + (active === k ? '#1a1a1a' : '#ebe8e2'),
      borderRadius: 14,
      padding: '10px 4px 8px',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4,
      transition: 'all .25s'
    }
  }, React.createElement("span", {
    style: {
      fontSize: 24,
      lineHeight: 1
    }
  }, e.icon), React.createElement("span", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontSize: 12,
      fontStyle: 'italic',
      color: active === k ? '#fff' : '#5a5a5a'
    }
  }, e.name)))), React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: '4/3',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement("svg", {
    viewBox: "0 0 640 420",
    style: {
      width: '100%',
      height: '100%',
      overflow: 'visible'
    }
  }, React.createElement("defs", null, React.createElement("radialGradient", {
    id: "icBrainGrad",
    cx: "35%",
    cy: "30%",
    r: "85%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#f5ebe0"
  }), React.createElement("stop", {
    offset: "50%",
    stopColor: "#e8d4bf"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#c9a98a"
  })), React.createElement("radialGradient", {
    id: "icCerebellumGrad",
    cx: "40%",
    cy: "30%",
    r: "80%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#e8d4bf"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#b8946f"
  })), React.createElement("linearGradient", {
    id: "icStemGrad",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#d9b898"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#a98566"
  })), React.createElement("filter", {
    id: "icSoftGlow"
  }, React.createElement("feGaussianBlur", {
    stdDeviation: "3"
  }))), React.createElement("g", null, React.createElement("path", {
    d: "M 395,340 C 398,360 402,385 410,400 L 430,400 C 436,385 438,360 438,338 Z",
    fill: "url(#icStemGrad)"
  }), React.createElement("path", {
    d: "M 445,260 C 490,258 520,275 520,310 C 520,340 495,355 465,355 C 440,355 420,348 415,325 C 412,300 420,270 445,260 Z",
    fill: "url(#icCerebellumGrad)"
  }), React.createElement("path", {
    d: "M 150,255 C 115,238 92,195 102,150 C 115,100 165,70 225,62 C 310,54 400,62 455,92 C 510,122 535,170 528,220 C 522,258 498,280 465,285 C 440,288 420,282 410,275 C 395,310 355,330 300,330 C 250,330 195,312 170,290 C 158,280 150,268 150,255 Z",
    fill: "url(#icBrainGrad)"
  }), React.createElement("g", {
    stroke: "#8a6a4a",
    strokeWidth: "0.9",
    strokeOpacity: "0.45",
    fill: "none",
    strokeLinecap: "round"
  }, React.createElement("path", {
    d: "M 145,200 Q 170,180 195,190"
  }), React.createElement("path", {
    d: "M 155,175 Q 185,155 215,165"
  }), React.createElement("path", {
    d: "M 280,75 Q 275,130 260,200 Q 250,245 240,285",
    strokeOpacity: "0.55"
  }), React.createElement("path", {
    d: "M 310,80 Q 330,115 325,155"
  }), React.createElement("path", {
    d: "M 350,75 Q 370,110 365,155"
  }), React.createElement("path", {
    d: "M 220,275 Q 270,265 315,270"
  }), React.createElement("path", {
    d: "M 460,150 Q 490,170 510,200"
  }), React.createElement("path", {
    d: "M 205,245 Q 280,235 365,255",
    strokeOpacity: "0.6"
  }))), React.createElement("g", {
    style: {
      color: col('prefrontal'),
      opacity: isActiveRegion('prefrontal') ? 1 : 0,
      transition: 'opacity .5s'
    }
  }, React.createElement("ellipse", {
    cx: "155",
    cy: "165",
    rx: "32",
    ry: "42",
    fill: "currentColor",
    fillOpacity: "0.5"
  }), React.createElement("ellipse", {
    cx: "155",
    cy: "165",
    rx: "18",
    ry: "26",
    fill: "currentColor",
    fillOpacity: "0.85"
  })), React.createElement("g", {
    style: {
      color: col('cingulate'),
      opacity: isActiveRegion('cingulate') ? 1 : 0,
      transition: 'opacity .5s'
    }
  }, React.createElement("path", {
    d: "M 200,145 Q 260,118 330,140 Q 335,148 328,155 Q 265,138 205,158 Q 198,152 200,145 Z",
    fill: "currentColor",
    fillOpacity: "0.75"
  })), React.createElement("g", {
    style: {
      color: col('striatum'),
      opacity: isActiveRegion('striatum') ? 1 : 0,
      transition: 'opacity .5s'
    }
  }, React.createElement("ellipse", {
    cx: "260",
    cy: "200",
    rx: "22",
    ry: "16",
    fill: "currentColor",
    fillOpacity: "0.5"
  }), React.createElement("ellipse", {
    cx: "260",
    cy: "200",
    rx: "12",
    ry: "9",
    fill: "currentColor",
    fillOpacity: "0.9"
  })), React.createElement("g", {
    style: {
      color: col('insula'),
      opacity: isActiveRegion('insula') ? 1 : 0,
      transition: 'opacity .5s'
    }
  }, React.createElement("path", {
    d: "M 230,230 Q 250,220 270,235 Q 275,250 260,258 Q 238,258 228,245 Q 224,237 230,230 Z",
    fill: "currentColor",
    fillOpacity: "0.75"
  })), React.createElement("g", {
    style: {
      color: col('amygdala'),
      opacity: isActiveRegion('amygdala') ? 1 : 0,
      transition: 'opacity .5s'
    }
  }, React.createElement("ellipse", {
    cx: "275",
    cy: "275",
    rx: "13",
    ry: "10",
    transform: "rotate(-15 275 275)",
    fill: "currentColor",
    fillOpacity: "0.5"
  }), React.createElement("ellipse", {
    cx: "275",
    cy: "275",
    rx: "8",
    ry: "6",
    transform: "rotate(-15 275 275)",
    fill: "currentColor",
    fillOpacity: "0.95"
  })), React.createElement("g", {
    style: {
      color: col('hippocampus'),
      opacity: isActiveRegion('hippocampus') ? 1 : 0,
      transition: 'opacity .5s'
    }
  }, React.createElement("path", {
    d: "M 295,280 Q 320,275 335,285 Q 340,293 333,298 Q 318,290 298,294 Q 290,290 295,280 Z",
    fill: "currentColor",
    fillOpacity: "0.75"
  })), React.createElement("g", {
    style: {
      color: col('hypothalamus'),
      opacity: isActiveRegion('hypothalamus') ? 1 : 0,
      transition: 'opacity .5s'
    }
  }, React.createElement("circle", {
    cx: "310",
    cy: "240",
    r: "10",
    fill: "currentColor",
    fillOpacity: "0.5"
  }), React.createElement("circle", {
    cx: "310",
    cy: "240",
    r: "5",
    fill: "currentColor",
    fillOpacity: "0.95"
  })), React.createElement("g", {
    strokeWidth: "1.4",
    fill: "none",
    strokeLinecap: "round",
    strokeDasharray: "3 4"
  }, [['c-prefrontal-striatum', 'M 155,165 Q 210,180 260,200'], ['c-prefrontal-cingulate', 'M 165,155 Q 195,140 230,142'], ['c-cingulate-striatum', 'M 270,148 Q 270,170 260,200'], ['c-striatum-accumbens', 'M 260,200 Q 285,218 310,235'], ['c-amygdala-hypothalamus', 'M 275,270 Q 295,252 310,242'], ['c-amygdala-hippocampus', 'M 285,272 Q 305,275 320,282'], ['c-amygdala-prefrontal', 'M 268,270 Q 210,240 165,180'], ['c-insula-cingulate', 'M 250,232 Q 255,195 265,158'], ['c-insula-prefrontal', 'M 235,235 Q 195,205 165,180']].map(([id, d]) => React.createElement("path", {
    key: id,
    d: d,
    stroke: cCol(id),
    strokeOpacity: isActiveConn(id) ? 0.45 : 0,
    style: {
      transition: 'stroke-opacity .6s, stroke .6s'
    }
  }))))), React.createElement("div", {
    style: {
      marginTop: 4,
      textAlign: 'center',
      minHeight: 44
    }
  }, !active ? React.createElement("div", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontStyle: 'italic',
      fontSize: 15,
      color: '#9a9a9a'
    }
  }, "Touchez une émotion pour voir son activation") : React.createElement(React.Fragment, null, React.createElement("div", null, React.createElement("span", {
    style: {
      display: 'inline-block',
      fontFamily: "'Fraunces',serif",
      fontStyle: 'italic',
      fontSize: 14,
      padding: '5px 14px',
      borderRadius: 9999,
      background: cur.color + '1F',
      color: cur.color,
      marginBottom: 10
    }
  }, cur.tag)), React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#5a5a5a',
      lineHeight: 1.5,
      marginBottom: 16
    }
  }, cur.regionNames))));
}
const lerp = (a, b, t) => a + (b - a) * t;
const GAUGE_ZONES = [{
  id: 'para',
  key: 'Parasympathique excessif',
  mode: 'Mode léthargie',
  range: [0, 30],
  color: '#2955a8',
  bg: '#eef2fc',
  border: '#4a7ddc',
  bgSoft: '#f5f7fd',
  borderSoft: '#dde4f5',
  thought: 'Tout ralentit…',
  thoughtSub: '« Je n\'arrive plus à démarrer »',
  symptoms: ['Bradycardie — rythme cardiaque trop lent', 'Hypotension — tension artérielle basse', 'Fatigue profonde, manque d\'énergie', 'Digestion trop lente, lourdeur', 'Apathie, démotivation', 'Somnolence en journée', 'Sensation de « brouillard », ralentissement mental']
}, {
  id: 'eq',
  key: 'Équilibre',
  mode: 'Homéostasie',
  range: [30, 70],
  color: '#2d7a4a',
  bg: '#edf5ef',
  border: '#4e9e6d',
  bgSoft: '#f4f9f5',
  borderSoft: '#d8e8de',
  thought: 'Tout est à sa place.',
  thoughtSub: '« Je suis présent et disponible »',
  symptoms: ['Rythme cardiaque régulier, HRV élevée', 'Tension stable', 'Respiration ample et naturelle', 'Digestion fluide', 'Calme alerte, concentration claire', 'Énergie disponible et ajustable', 'Sommeil réparateur']
}, {
  id: 'sympa',
  key: 'Sympathique excessif',
  mode: 'Mode survie',
  range: [70, 100],
  color: '#c94a1a',
  bg: '#fef0e8',
  border: '#e06030',
  bgSoft: '#fdf6f2',
  borderSoft: '#f5e0d5',
  thought: 'Urgence !',
  thoughtSub: '« Je dois tout gérer, tout de suite »',
  symptoms: ['Tachycardie — rythme cardiaque accéléré', 'Hypertension — tension qui monte', 'Respiration courte et thoracique', 'Digestion bloquée, boule au ventre', 'Tension musculaire, mâchoires serrées', 'Hypervigilance, pensées qui tournent', 'Sommeil fragmenté, réveils nocturnes']
}];
function getZone(val) {
  if (val < 30) return GAUGE_ZONES[0];
  if (val > 70) return GAUGE_ZONES[2];
  return GAUGE_ZONES[1];
}
function NervousSystemGauge() {
  const [val, setVal] = useStateW(50);
  const t = val / 100;
  const zone = getZone(val);
  let faceFill, faceStroke;
  if (t < 0.3) {
    const p = t / 0.3;
    faceFill = `rgb(${Math.round(lerp(180, 235, p))},${Math.round(lerp(205, 235, p))},${Math.round(lerp(240, 200, p))})`;
    faceStroke = '#4a7ddc';
  } else if (t < 0.7) {
    faceFill = '#f4e9c6';
    faceStroke = '#c9a646';
  } else {
    const p = (t - 0.7) / 0.3;
    faceFill = `rgb(${Math.round(lerp(244, 255, p))},${Math.round(lerp(233, 180, p))},${Math.round(lerp(198, 80, p))})`;
    faceStroke = `rgb(${Math.round(lerp(201, 200, p))},${Math.round(lerp(166, 80, p))},70)`;
  }
  let eyeRy, eyeRx, eyeOffsetY;
  if (t < 0.3) {
    const p = t / 0.3;
    eyeRy = lerp(1, 3, p);
    eyeRx = lerp(4.5, 3.2, p);
    eyeOffsetY = lerp(2, 0, p);
  } else if (t < 0.7) {
    eyeRy = 3;
    eyeRx = 3.2;
    eyeOffsetY = 0;
  } else {
    const p = (t - 0.7) / 0.3;
    eyeRy = lerp(3, 5, p);
    eyeRx = lerp(3.2, 3.6, p);
    eyeOffsetY = 0;
  }
  let mouthD, mouthSW;
  if (t < 0.15) {
    mouthD = 'M266 282 Q280 278, 294 282';
    mouthSW = 2.2;
  } else if (t < 0.3) {
    const p = (t - 0.15) / 0.15;
    mouthD = `M266 ${Math.round(lerp(282, 281, p))} Q280 ${Math.round(lerp(278, 281, p))}, 294 ${Math.round(lerp(282, 281, p))}`;
    mouthSW = 2.3;
  } else if (t < 0.5) {
    const p = (t - 0.3) / 0.2;
    mouthD = `M266 281 Q280 ${Math.round(lerp(281, 286, p))}, 294 281`;
    mouthSW = 2.4;
  } else if (t < 0.7) {
    mouthD = 'M266 280 Q280 287, 294 280';
    mouthSW = 2.5;
  } else if (t < 0.85) {
    const p = (t - 0.7) / 0.15;
    mouthD = `M268 ${Math.round(lerp(280, 278, p))} Q280 ${Math.round(lerp(287, 272, p))}, 292 ${Math.round(lerp(280, 278, p))}`;
    mouthSW = 2.5;
  } else {
    const p = (t - 0.85) / 0.15;
    mouthD = `M266 278 Q280 ${Math.round(lerp(272, 268, p))}, 294 278`;
    mouthSW = lerp(2.5, 3, p);
  }
  const sweatOp = t > 0.75 ? Math.min(1, (t - 0.75) / 0.2) : 0;
  const zzOp = t < 0.2 ? Math.min(1, (0.2 - t) / 0.2) : 0;
  const needleAngle = (val - 50) * 1.8;
  return React.createElement("div", {
    style: {
      maxWidth: 920,
      width: '100%',
      margin: '0 auto',
      fontFamily: 'Inter,sans-serif',
      color: '#2d2d2d'
    }
  }, React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: 'clamp(220px, 42vw, 310px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      marginBottom: 10
    }
  }, React.createElement("svg", {
    viewBox: "0 0 560 300",
    style: {
      width: '100%',
      maxWidth: 560,
      height: 'auto',
      overflow: 'visible'
    }
  }, React.createElement("defs", null, React.createElement("linearGradient", {
    id: "arcGrad",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#4a7ddc"
  }), React.createElement("stop", {
    offset: "25%",
    stopColor: "#b8cef0"
  }), React.createElement("stop", {
    offset: "38%",
    stopColor: "#7fb58f"
  }), React.createElement("stop", {
    offset: "50%",
    stopColor: "#4e9e6d"
  }), React.createElement("stop", {
    offset: "62%",
    stopColor: "#7fb58f"
  }), React.createElement("stop", {
    offset: "75%",
    stopColor: "#f0c8a8"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#e06030"
  }))), React.createElement("path", {
    d: "M 50 270 A 230 230 0 0 1 510 270",
    fill: "none",
    stroke: "url(#arcGrad)",
    strokeWidth: "26",
    strokeLinecap: "round"
  }), [0.3, 0.7].map((p, i) => {
    const a = Math.PI * (1 - p);
    const x1 = 280 + Math.cos(a) * 218;
    const y1 = 270 - Math.sin(a) * 218;
    const x2 = 280 + Math.cos(a) * 244;
    const y2 = 270 - Math.sin(a) * 244;
    return React.createElement("line", {
      key: i,
      x1: x1,
      y1: y1,
      x2: x2,
      y2: y2,
      stroke: "#fff",
      strokeWidth: "2",
      opacity: "0.85"
    });
  }), React.createElement("text", {
    x: "30",
    y: "95",
    textAnchor: "start",
    fontSize: "11",
    fontWeight: "700",
    fill: "#2955a8",
    letterSpacing: "0.8"
  }, "LÉTHARGIE"), React.createElement("text", {
    x: "280",
    y: "22",
    textAnchor: "middle",
    fontSize: "12",
    fontWeight: "700",
    fill: "#2d7a4a",
    letterSpacing: "0.8"
  }, "ÉQUILIBRE"), React.createElement("text", {
    x: "530",
    y: "95",
    textAnchor: "end",
    fontSize: "11",
    fontWeight: "700",
    fill: "#c94a1a",
    letterSpacing: "0.8"
  }, "SURVIE"), React.createElement("g", {
    transform: `rotate(${needleAngle}, 280, 270)`,
    style: {
      transition: 'transform .5s cubic-bezier(0.22,1,0.36,1)'
    }
  }, React.createElement("line", {
    x1: "280",
    y1: "270",
    x2: "280",
    y2: "75",
    stroke: "#1a1a1a",
    strokeWidth: "3",
    strokeLinecap: "round"
  }), React.createElement("circle", {
    cx: "280",
    cy: "75",
    r: "4",
    fill: "#1a1a1a"
  })), React.createElement("g", {
    style: {
      transition: 'all .4s ease'
    }
  }, React.createElement("circle", {
    cx: "280",
    cy: "270",
    r: "26",
    fill: faceFill,
    stroke: faceStroke,
    strokeWidth: "2.5"
  }), React.createElement("ellipse", {
    cx: "271",
    cy: 264 + eyeOffsetY,
    rx: eyeRx,
    ry: eyeRy,
    fill: "#2d2d2d"
  }), React.createElement("ellipse", {
    cx: "289",
    cy: 264 + eyeOffsetY,
    rx: eyeRx,
    ry: eyeRy,
    fill: "#2d2d2d"
  }), React.createElement("path", {
    d: mouthD,
    fill: "none",
    stroke: "#2d2d2d",
    strokeWidth: mouthSW,
    strokeLinecap: "round"
  }), React.createElement("g", {
    opacity: sweatOp
  }, React.createElement("ellipse", {
    cx: "302",
    cy: "258",
    rx: "3",
    ry: "5",
    fill: "#88ccff"
  })), React.createElement("g", {
    opacity: zzOp,
    fill: "#4a7ddc",
    fontSize: "11",
    fontWeight: "700",
    fontFamily: "Inter"
  }, React.createElement("text", {
    x: "302",
    y: "252"
  }, "z"), React.createElement("text", {
    x: "308",
    y: "244"
  }, "Z"))))), React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: 30,
      marginBottom: 6
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: 0,
      right: 0,
      height: 10,
      borderRadius: 5,
      transform: 'translateY(-50%)',
      background: 'linear-gradient(to right, #4a7ddc 0%, #b8cef0 25%, #4e9e6d 45%, #4e9e6d 55%, #f0c8a8 75%, #e06030 100%)'
    }
  }), React.createElement("input", {
    type: "range",
    min: "0",
    max: "100",
    value: val,
    onChange: e => setVal(parseInt(e.target.value)),
    style: {
      position: 'absolute',
      width: '100%',
      top: 0,
      height: 30,
      appearance: 'none',
      background: 'transparent',
      cursor: 'pointer',
      zIndex: 2
    }
  })), React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 20,
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase'
    }
  }, React.createElement("span", {
    style: {
      color: '#2955a8'
    }
  }, "Repos"), React.createElement("span", {
    style: {
      color: '#2d7a4a'
    }
  }, "Équilibre"), React.createElement("span", {
    style: {
      color: '#c94a1a'
    }
  }, "Survie")), React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 280
    }
  }, GAUGE_ZONES.map(z => {
    const isActive = z.id === zone.id;
    return React.createElement("div", {
      key: z.id,
      style: {
        position: isActive ? 'relative' : 'absolute',
        inset: isActive ? 'auto' : 0,
        top: isActive ? 'auto' : 0,
        opacity: isActive ? 1 : 0,
        transform: isActive ? 'translateY(0)' : 'translateY(8px)',
        transition: 'opacity .45s cubic-bezier(0.22,1,0.36,1), transform .45s cubic-bezier(0.22,1,0.36,1)',
        pointerEvents: isActive ? 'auto' : 'none',
        borderRadius: 18,
        padding: '22px 22px 24px',
        background: z.bg,
        border: `2px solid ${z.border}`,
        boxShadow: `0 10px 30px ${z.border}22`
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 10,
        flexWrap: 'wrap',
        marginBottom: 4
      }
    }, React.createElement("span", {
      style: {
        fontWeight: 800,
        fontSize: 13,
        letterSpacing: '1.4px',
        textTransform: 'uppercase',
        color: z.color
      }
    }, z.key), React.createElement("span", {
      style: {
        fontFamily: "'Fraunces',serif",
        fontStyle: 'italic',
        fontSize: 13,
        color: z.color,
        opacity: 0.75
      }
    }, z.mode)), React.createElement("div", {
      style: {
        fontFamily: "'Fraunces',serif",
        fontSize: 19,
        color: z.color,
        marginBottom: 16,
        lineHeight: 1.35
      }
    }, z.thought, ' ', React.createElement("span", {
      style: {
        fontStyle: 'italic',
        opacity: 0.7,
        fontSize: 15
      }
    }, z.thoughtSub)), React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 10.5,
        letterSpacing: '1px',
        textTransform: 'uppercase',
        marginBottom: 8,
        color: '#999'
      }
    }, "Ce que tu ressens"), React.createElement("ul", {
      style: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
        gap: '4px 20px'
      }
    }, z.symptoms.map(s => React.createElement("li", {
      key: s,
      style: {
        fontSize: 13,
        color: '#444',
        padding: '4px 0 4px 14px',
        position: 'relative',
        lineHeight: 1.45
      }
    }, React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        top: 10,
        width: 5,
        height: 5,
        borderRadius: '50%',
        background: z.color,
        display: 'inline-block'
      }
    }), s))));
  })));
}
function OrganExplorer() {
  const [active, setActive] = useStateW('coeur');
  const cur = ORGANS.find(o => o.id === active) || ORGANS[0];
  return React.createElement("div", {
    style: {
      margin: '32px 0',
      background: '#fff',
      border: '1px solid #f0f0f1',
      borderRadius: 16,
      padding: 16,
      boxShadow: '0 1px 2px rgba(0,0,0,0.04)'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      overflowX: 'auto',
      gap: 8,
      paddingBottom: 12,
      marginBottom: 16,
      scrollbarWidth: 'none'
    }
  }, ORGANS.map(o => React.createElement("button", {
    key: o.id,
    onClick: () => setActive(o.id),
    style: {
      padding: '6px 16px',
      fontSize: 12,
      fontWeight: 500,
      borderRadius: 9999,
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      background: active === o.id ? '#1a1a1a' : '#f5f5f7',
      border: '1px solid ' + (active === o.id ? '#1a1a1a' : '#e5e5ea'),
      color: active === o.id ? '#fff' : '#666',
      transition: 'all .15s'
    }
  }, o.name))), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: 12
    }
  }, React.createElement("div", {
    style: {
      padding: 16,
      borderRadius: 12,
      background: 'rgba(254,235,214,0.5)',
      borderLeft: '4px solid #fb923c'
    }
  }, React.createElement("h4", {
    style: {
      fontSize: 10,
      textTransform: 'uppercase',
      letterSpacing: '0.18em',
      fontWeight: 700,
      color: '#c2410c',
      margin: '0 0 4px'
    }
  }, "Mode Survie"), React.createElement("p", {
    style: {
      fontSize: 14,
      color: '#1d1d1f',
      lineHeight: 1.45,
      margin: 0
    }
  }, cur.sympa)), React.createElement("div", {
    style: {
      padding: 16,
      borderRadius: 12,
      background: 'rgba(219,234,254,0.5)',
      borderLeft: '4px solid #60a5fa'
    }
  }, React.createElement("h4", {
    style: {
      fontSize: 10,
      textTransform: 'uppercase',
      letterSpacing: '0.18em',
      fontWeight: 700,
      color: '#1d4ed8',
      margin: '0 0 4px'
    }
  }, "Mode Repos"), React.createElement("p", {
    style: {
      fontSize: 14,
      color: '#1d1d1f',
      lineHeight: 1.45,
      margin: 0
    }
  }, cur.para))));
}
const HORMONES = [{
  id: 'adrenaline',
  name: 'Adrénaline',
  system: 'sympathique',
  tagline: 'La décharge immédiate',
  effect: "Accélère le cœur, ouvre les bronches, tend les muscles. Prépare à l'action en quelques secondes."
}, {
  id: 'noradrenaline',
  name: 'Noradrénaline',
  system: 'sympathique',
  tagline: 'Vigilance & focus',
  effect: "Augmente l'attention, contracte les vaisseaux, redirige le sang vers les muscles. Te maintient en alerte."
}, {
  id: 'cortisol',
  name: 'Cortisol',
  system: 'sympathique',
  tagline: 'Stress prolongé',
  effect: "Maintient le corps en alerte sur la durée. En excès : sommeil perturbé, immunité affaiblie, brouillard mental."
}, {
  id: 'glucagon',
  name: 'Glucagon',
  system: 'sympathique',
  tagline: 'Carburant d\'urgence',
  effect: "Libère du glucose dans le sang pour nourrir muscles et cerveau en mode action."
}, {
  id: 'acetylcholine',
  name: 'Acétylcholine',
  system: 'parasympathique',
  tagline: 'Le frein du nerf vague',
  effect: "Ralentit le cœur, approfondit la respiration, relance la digestion. C'est la signature chimique du calme."
}, {
  id: 'ocytocine',
  name: 'Ocytocine',
  system: 'parasympathique',
  tagline: 'Lien & sécurité',
  effect: "Libérée au contact, à la confiance. Apaise le système nerveux et réduit la perception du danger."
}, {
  id: 'sérotonine',
  name: 'Sérotonine',
  system: 'parasympathique',
  tagline: 'Équilibre & bien-être',
  effect: "Stabilise l'humeur, régule le sommeil, l'appétit et la digestion (95 % produite dans l'intestin)."
}, {
  id: 'gaba',
  name: 'GABA',
  system: 'parasympathique',
  tagline: 'Neuromédiateur apaisant',
  effect: "Principal frein du système nerveux. Réduit l'excitation neuronale et favorise la détente."
}, {
  id: 'melatonine',
  name: 'Mélatonine',
  system: 'parasympathique',
  tagline: 'Récupération',
  effect: "Déclenche le sommeil profond et la régénération cellulaire. Sécrétée quand la lumière baisse."
}];
const SYS = {
  sympathique: {
    label: 'Sympathique',
    sub: 'Survie · action',
    color: '#c94a1a',
    bg: '#fef0e8',
    border: '#e06030',
    soft: '#fdf6f2'
  },
  parasympathique: {
    label: 'Parasympathique',
    sub: 'Repos · régénération',
    color: '#2955a8',
    bg: '#eef2fc',
    border: '#4a7ddc',
    soft: '#f5f7fd'
  }
};
function HormoneWidget() {
  const [active, setActive] = useStateW('adrenaline');
  const cur = HORMONES.find(h => h.id === active);
  const sys = SYS[cur.system];
  return React.createElement("div", {
    style: {
      maxWidth: 820,
      margin: '0 auto',
      fontFamily: 'Inter,sans-serif'
    }
  }, React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14,
      marginBottom: 18
    },
    className: "ic-hw-cols"
  }, ['sympathique', 'parasympathique'].map(key => {
    const s = SYS[key];
    const activeHere = cur.system === key;
    return React.createElement("div", {
      key: key,
      style: {
        padding: '12px 14px 14px',
        borderRadius: 14,
        background: activeHere ? s.bg : '#fafaf8',
        border: `1.5px solid ${activeHere ? s.border : '#ebe8e2'}`,
        transition: 'all .35s'
      }
    }, React.createElement("div", {
      style: {
        fontSize: 10.5,
        fontWeight: 700,
        letterSpacing: '1.2px',
        color: s.color,
        textTransform: 'uppercase',
        marginBottom: 2
      }
    }, s.label), React.createElement("div", {
      style: {
        fontFamily: "'Fraunces',serif",
        fontStyle: 'italic',
        fontSize: 12,
        color: s.color,
        opacity: 0.7,
        marginBottom: 10
      }
    }, s.sub), React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        flexWrap: 'wrap'
      }
    }, HORMONES.filter(h => h.system === key).map(h => React.createElement("button", {
      key: h.id,
      onClick: () => setActive(h.id),
      style: {
        padding: '6px 12px',
        borderRadius: 999,
        fontSize: 12.5,
        fontWeight: 500,
        cursor: 'pointer',
        background: active === h.id ? '#1a1a1a' : '#fff',
        color: active === h.id ? '#fff' : '#2d2d2d',
        border: `1px solid ${active === h.id ? '#1a1a1a' : '#e5e1d9'}`,
        transition: 'all .2s'
      }
    }, h.name))));
  })), React.createElement("div", {
    style: {
      padding: '18px 22px',
      borderRadius: 14,
      background: '#fff',
      border: `1.5px solid ${sys.border}`,
      transition: 'border-color .35s'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      flexWrap: 'wrap',
      marginBottom: 6
    }
  }, React.createElement("span", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontSize: 22,
      color: '#1a1a1a',
      letterSpacing: '-0.015em'
    }
  }, cur.name), React.createElement("span", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontStyle: 'italic',
      fontSize: 13,
      color: sys.color
    }
  }, "— ", cur.tagline)), React.createElement("div", {
    style: {
      fontSize: 14.5,
      color: '#4a4a4a',
      lineHeight: 1.55
    }
  }, cur.effect)), React.createElement("style", null, `
        @media (max-width: 560px) {
          .ic-hw-cols { grid-template-columns: 1fr !important; }
        }
      `));
}
Object.assign(window, {
  BrainEmotionWidget,
  NervousSystemGauge,
  OrganExplorer,
  HormoneWidget
});
const DIAG_ORGANS = [{
  id: 'cerveau',
  name: 'Cerveau',
  color: '#8a6bb1',
  bg: '#f1ecf6',
  alert: 'Brouillard mental, difficultés à décider, maux de tête, pertes de mémoire, concentration difficile.',
  balance: 'Esprit clair, décisions fluides, mémoire nette, concentration soutenue, sérénité mentale.'
}, {
  id: 'coeur',
  name: 'Cœur',
  color: '#c84d4d',
  bg: '#fbeeee',
  alert: 'Hypertension, palpitations, oppression thoracique, rythme rapide.',
  balance: 'Tension stable, rythme cardiaque lent, battements amples.'
}, {
  id: 'estomac',
  name: 'Estomac',
  color: '#d98142',
  bg: '#fbf0e6',
  alert: "Acidité, reflux, nœud à l'estomac, crampes.",
  balance: 'Digestion confortable, légèreté, appétit régulé.'
}, {
  id: 'intestins',
  name: 'Intestins',
  color: '#c9a23a',
  bg: '#faf4df',
  alert: 'Ballonnements, constipation, transit bloqué, douleurs.',
  balance: 'Transit fluide et régulier, confort abdominal.'
}, {
  id: 'respiration',
  name: 'Respiration',
  color: '#4a7fb0',
  bg: '#eaf1f8',
  alert: "Respiration haute et courte, sensation d'étouffement, \naccélération de la fréquence respiratoire.\n",
  balance: 'Respiration profonde et diaphragmatique, souffle calme et ample.'
}, {
  id: 'muscles',
  name: 'Muscles',
  color: '#4a9a8b',
  bg: '#e7f3f0',
  alert: 'Tensions, raideurs, tremblements, besoin impérieux de bouger.\nhypertonie. \n',
  balance: 'Souplesse articulaire, fluidité du mouvement, relâchement.'
}, {
  id: 'glycemie',
  name: 'Glycémie',
  color: '#6d9b54',
  bg: '#eef4e7',
  alert: 'Fringales sucrées, augmentation de la glycémie,\ncoups de fatigue.\n',
  balance: 'Glycémie stable, énergie durable, pas de « crash ».'
}, {
  id: 'peau',
  name: 'Peau',
  color: '#c5758d',
  bg: '#f9ecef',
  alert: 'Hypersensibilité, démangeaisons, rougeurs, chaleur diffuse.',
  balance: 'Peau apaisée, calme, bonne régulation thermique.'
}, {
  id: 'douleur',
  name: 'Douleur',
  color: '#6b7684',
  bg: '#eef0f2',
  alert: 'Douleurs diffuses, inflammation, hypersensibilité au moindre stimulus.',
  balance: 'Confort physique, seuil de douleur normal, récupération rapide.'
}];
const DIAG_ICONS = {
  cerveau: ['M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z', 'M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z'],
  coeur: ['M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z'],
  estomac: ['M10 4h1.5A3.5 3.5 0 0 1 15 7.5v1A2.5 2.5 0 0 0 17.5 11A2.5 2.5 0 0 1 20 13.5V15a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5V9a5 5 0 0 1 4-4.9', 'M10 4V2.5'],
  intestins: ['M6 4c0-.8.7-1.5 1.5-1.5h9A1.5 1.5 0 0 1 18 4c0 .8-.7 1.5-1.5 1.5h-8A1.5 1.5 0 0 0 7 7c0 .8.7 1.5 1.5 1.5h8A1.5 1.5 0 0 1 18 10c0 .8-.7 1.5-1.5 1.5h-9A1.5 1.5 0 0 0 6 13c0 .8.7 1.5 1.5 1.5h9A1.5 1.5 0 0 1 17 16c0 .8-.7 1.5-1.5 1.5h-9A1.5 1.5 0 0 0 5 19v1'],
  respiration: ['M12 3v10', 'M12 13c-.6-2.7-2.7-5-5.3-5C4.7 8 3.5 9.2 3.5 11.3v5.2C3.5 18.4 5 20 6.8 20c2.5 0 5-2.3 5.2-7z', 'M12 13c.6-2.7 2.7-5 5.3-5 2 0 3.2 1.2 3.2 3.3v5.2c0 1.9-1.5 3.5-3.3 3.5-2.5 0-5-2.3-5.2-7z'],
  muscles: ['M7 9a5 5 0 0 1 10 0v6a5 5 0 0 1-10 0z', 'M10 9h4', 'M10 12h4', 'M10 15h4'],
  glycemie: ['M12 3s-7 7.5-7 11.5a7 7 0 0 0 14 0C19 10.5 12 3 12 3z', 'M8 15l2-2 2 2 2-2 2 2'],
  peau: ['M5 12a7 7 0 0 1 14 0', 'M8 13a4 4 0 0 1 8 0', 'M10.5 14a1.5 1.5 0 0 1 3 0', 'M11.5 15.5a.5.5 0 0 1 1 0'],
  douleur: ['M13 3L4 14h6l-1 8 9-12h-6l1-7z']
};
function DiagIcon({
  id,
  size = 26
}) {
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      display: 'block'
    }
  }, DIAG_ICONS[id].map((d, i) => React.createElement("path", {
    key: i,
    d: d
  })));
}
function OrganDiagnostic() {
  const [currentId, setCurrentId] = useStateW(null);
  const [swapping, setSwapping] = useStateW(false);
  const current = DIAG_ORGANS.find(o => o.id === currentId);
  const open = id => {
    if (!currentId) {
      setCurrentId(id);
      return;
    }
    if (id === currentId) return;
    setSwapping(true);
    setTimeout(() => {
      setCurrentId(id);
      setSwapping(false);
    }, 200);
  };
  const close = () => setCurrentId(null);
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape' && currentId) close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [currentId]);
  return React.createElement("div", {
    className: "ic-diag",
    style: {
      margin: '20px 0 8px'
    }
  }, React.createElement("div", {
    style: {
      position: 'relative',
      background: '#fff',
      border: '1px solid rgba(0,0,0,0.08)',
      borderRadius: 18,
      overflow: 'hidden',
      display: 'grid'
    }
  }, React.createElement("div", {
    style: {
      gridArea: '1 / 1',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 4,
      padding: 8,
      opacity: currentId ? 0 : 1,
      pointerEvents: currentId ? 'none' : 'auto',
      transition: 'opacity 280ms cubic-bezier(0.22,0.61,0.36,1)'
    }
  }, DIAG_ORGANS.map(o => React.createElement("button", {
    key: o.id,
    type: "button",
    onClick: () => open(o.id),
    "aria-label": `Voir les symptômes : ${o.name}`,
    className: "ic-diag-tile",
    style: {
      '--c': o.color,
      '--cbg': o.bg,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      padding: '20px 8px 18px',
      background: 'transparent',
      border: 0,
      borderRadius: 12,
      cursor: 'pointer',
      color: o.color,
      fontFamily: 'inherit',
      transition: 'background 260ms cubic-bezier(0.22,0.61,0.36,1)'
    }
  }, React.createElement(DiagIcon, {
    id: o.id,
    size: 26
  }), React.createElement("span", {
    style: {
      fontSize: 11.5,
      fontWeight: 500,
      whiteSpace: 'nowrap',
      color: '#4a4a4a',
      letterSpacing: '-0.005em'
    }
  }, o.name)))), React.createElement("div", {
    style: {
      gridArea: '1 / 1',
      opacity: currentId ? 1 : 0,
      pointerEvents: currentId ? 'auto' : 'none',
      transition: 'opacity 280ms cubic-bezier(0.22,0.61,0.36,1)',
      padding: '20px 22px 24px',
      display: 'flex',
      flexDirection: 'column'
    }
  }, current && React.createElement(React.Fragment, null, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 16,
      paddingBottom: 14,
      borderBottom: '1px solid rgba(0,0,0,0.08)'
    }
  }, React.createElement("button", {
    type: "button",
    onClick: close,
    "aria-label": "Retour à la liste",
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: 'transparent',
      border: '1px solid rgba(0,0,0,0.08)',
      cursor: 'pointer',
      color: '#4a4a4a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      fontFamily: 'inherit'
    }
  }, React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("path", {
    d: "M19 12H5"
  }), React.createElement("path", {
    d: "M12 19l-7-7 7-7"
  }))), React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 10,
      background: current.bg,
      color: current.color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      opacity: swapping ? 0 : 1,
      transition: 'opacity 200ms'
    }
  }, React.createElement(DiagIcon, {
    id: current.id,
    size: 22
  })), React.createElement("span", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontStyle: 'italic',
      fontWeight: 500,
      fontSize: 22,
      letterSpacing: '-0.015em',
      color: current.color,
      flex: 1,
      minWidth: 0,
      opacity: swapping ? 0 : 1,
      transition: 'opacity 200ms'
    }
  }, current.name)), React.createElement("div", {
    className: "ic-diag-cols",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20,
      opacity: swapping ? 0 : 1,
      transition: 'opacity 200ms'
    }
  }, React.createElement("div", null, React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 11.5,
      fontWeight: 500,
      letterSpacing: '0.02em',
      padding: '4px 9px',
      borderRadius: 999,
      marginBottom: 10,
      color: '#b94848',
      background: '#f6e8e8'
    }
  }, React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: '#b94848'
    }
  }), "En alerte"), React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.55,
      color: '#1b1b1b',
      margin: 0
    }
  }, current.alert)), React.createElement("div", null, React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 11.5,
      fontWeight: 500,
      letterSpacing: '0.02em',
      padding: '4px 9px',
      borderRadius: 999,
      marginBottom: 10,
      color: '#527d54',
      background: '#e9efe7'
    }
  }, React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: '#527d54'
    }
  }), "En équilibre"), React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.55,
      color: '#1b1b1b',
      margin: 0
    }
  }, current.balance)))))), React.createElement("style", null, `
        .ic-diag-tile:hover { background: var(--cbg) !important; }
        .ic-diag-tile:active { transform: scale(0.97); }
        .ic-diag-tile:focus-visible { outline: 2px solid var(--c); outline-offset: 2px; }
        @media (max-width: 500px) {
          .ic-diag-cols { grid-template-columns: 1fr !important; gap: 14px !important; }
        }
        @media (max-width: 420px) {
          .ic-diag-tile { padding: 14px 4px 12px !important; gap: 8px !important; }
          .ic-diag-tile span { font-size: 10.5px !important; }
        }
      `));
}
Object.assign(window, {
  OrganDiagnostic
});
const {
  useEffect: useEffectG,
  useRef: useRefG,
  useState: useStateG
} = React;
const STEPS = [{
  id: 'pensee',
  num: '01',
  title: 'La pensée',
  desc: 'Positive ou négative — activité électrique',
  chip: '✋ Méditation',
  action: 'interrompt',
  accent: '#9B7FE8',
  bg: '#F4EEFB',
  ink: '#6B4FA8'
}, {
  id: 'cerveau',
  num: '02',
  title: "La naissance de l'émotion",
  desc: 'Zones positives ou négatives renforcées',
  chip: '🎯 Visualisation',
  action: 'recâblage',
  accent: '#5E8BD9',
  bg: '#ECF2FB',
  ink: '#3A5FA0'
}, {
  id: 'nerveux',
  num: '03',
  title: 'Système nerveux',
  desc: 'Sympathique (alerte) ou parasympathique (repos)',
  chip: '🌬 Respiration',
  action: 'nerf vague',
  accent: '#4E7A5F',
  bg: '#E8EFE9',
  ink: '#14362B'
}, {
  id: 'hormones',
  num: '04',
  title: 'Hormones',
  desc: "Cortisol · Adrénaline — amplifient l'état",
  accent: '#E8A558',
  bg: '#FBF2E6',
  ink: '#A06522'
}, {
  id: 'corps',
  num: '05',
  title: 'Le corps réagit',
  desc: 'Tensions, fatigue, brouillard, palpitations…',
  accent: '#E87885',
  bg: '#FBEDEF',
  ink: '#A84953'
}, {
  id: 'boucle',
  num: '↻',
  title: 'Nouvelles pensées',
  desc: 'La boucle se referme — le pattern se renforce',
  accent: '#9B9BA8',
  bg: '#F2F2F4',
  ink: '#5A5A66',
  isLoop: true
}, {
  id: 'pratiques',
  num: '✱',
  title: 'Les pratiques méditatives',
  desc: 'Tes 3 leviers de régulation — Méditation · Respiration · Visualisation',
  chip: '🧘 Briser',
  action: 'la boucle',
  accent: '#4E9E8A',
  bg: '#E9F4F0',
  ink: '#2E6A5C',
  isPractice: true
}];
const CONN_LABELS = ['Active des zones du cerveau', 'Signal électrique vers le SNA', 'Ordre de sécrétion hormonale', 'Sensations physiques dans le corps', 'Ces sensations génèrent de nouvelles pensées'];
function NervousSystemGuide({
  onGo
}) {
  const progressRef = useRefG(null);
  const [visibleSet, setVisibleSet] = useStateG(new Set());
  useEffectG(() => {
    let ticking = false;
    const update = () => {
      const s = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const r = h > 0 ? Math.min(1, s / h) : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${r})`;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setVisibleSet(prev => new Set([...prev, e.target.id]));
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px 100px 0px'
    });
    document.querySelectorAll('.ns-stage-section').forEach(s => obs.observe(s));
    return () => {
      window.removeEventListener('scroll', onScroll);
      obs.disconnect();
    };
  }, []);
  const scrollTo = id => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY,
      behavior: 'smooth'
    });
  };
  return React.createElement("div", {
    style: {
      background: '#faf8f4',
      color: '#1a1a1a',
      fontFamily: "'DM Sans',sans-serif",
      minHeight: '100vh',
      position: 'relative',
      lineHeight: 1.55
    }
  }, React.createElement(GuideStyles, null), React.createElement("div", {
    ref: progressRef,
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: 4,
      background: 'linear-gradient(90deg,#9B7FE8,#5E8BD9,#6FC48E,#E8A558,#E87885,#9B9BA8)',
      transformOrigin: 'left center',
      transform: 'scaleX(0)',
      zIndex: 100,
      transition: 'transform .1s linear'
    }
  }), React.createElement("header", {
    id: "top",
    style: {
      minHeight: '100vh',
      padding: '60px 20px 48px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, React.createElement("div", {
    style: {
      maxWidth: 'min(1100px, 92vw)',
      width: '100%'
    }
  }, React.createElement("img", {
    src: LOGO_SRC,
    alt: "Inner Clarity",
    style: {
      width: 96,
      height: 96,
      borderRadius: 20,
      objectFit: 'contain',
      margin: '0 auto 20px',
      display: 'block'
    }
  }), React.createElement("div", {
    style: {
      textAlign: 'left',
      marginBottom: 48
    }
  }, React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: '#9a958b',
      marginBottom: 14
    }
  }, "Guide · 5 étapes"), React.createElement("h1", {
    style: {
      fontSize: 'clamp(30px, 5vw, 46px)',
      fontWeight: 600,
      letterSpacing: '-0.025em',
      margin: '0 0 18px',
      lineHeight: 1.1
    }
  }, "Et si ce que tu ressens dans ton corps venait d'une ", React.createElement("em", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontStyle: 'italic',
      fontWeight: 500
    }
  }, "suractivation"), " de ton système nerveux ?"), React.createElement("p", {
    style: {
      fontSize: 'clamp(16px, 1.8vw, 19px)',
      color: '#4a4a4a',
      margin: '0 0 28px',
      lineHeight: 1.5,
      fontWeight: 300,
      maxWidth: '56ch'
    }
  }, "Comprendre l'effet de la méditation sur ton corps. ", React.createElement("em", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontStyle: 'italic',
      color: '#9a958b',
      fontSize: '0.85em'
    }
  }, "(Robin Meuter kinésithérapeute, 2026)")), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      margin: '16px 0 0',
      padding: '14px 20px',
      background: '#e9efe7',
      borderRadius: 14,
      cursor: 'pointer'
    },
    onClick: () => onGo && onGo('test')
  }, React.createElement("span", {
    style: {
      fontSize: 13.5,
      color: '#14362B',
      fontWeight: 500,
      flex: 1
    }
  }, "Avant de lire ce guide, je te conseille de faire le test pour évaluer ton système nerveux."), React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: '#14362B',
      whiteSpace: 'nowrap'
    }
  }, "Faire le test →")), React.createElement("p", {
    style: {
      fontSize: 14,
      color: '#9a958b',
      margin: '24px 0 22px',
      fontFamily: "'Fraunces',serif",
      fontStyle: 'italic'
    }
  }, "Clique sur l'organe concerné pour voir ce qui se joue."), React.createElement(OrganDiagnostic, null), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      fontSize: 16,
      color: '#4a4a4a',
      lineHeight: 1.6,
      fontWeight: 300,
      marginTop: 20,
      marginBottom: 4,
      paddingLeft: 16,
      borderLeft: '2px solid #ebe8e2'
    }
  }, React.createElement("p", {
    style: {
      margin: 0,
      color: '#1b1b1b',
      fontWeight: 400
    }
  }, "Si tu te reconnais dans un ou plusieurs de ces symptômes, ce guide est pour toi."), React.createElement("p", {
    style: {
      margin: 0
    }
  }, "J'ai longtemps été confronté à plusieurs de ces symptômes, sans jamais vraiment comprendre comment en sortir. Un jour, en pratiquant la méditation, j'ai pris conscience de l'effet direct de la pensée sur la physiologie — et ce que j'avais appris durant mes études m'a permis d'établir le lien entre la pensée et le corps."), React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Mon parcours de kiné m'a d'abord appris à lire le corps ; la pratique méditative m'a appris à remonter plus haut, à la pensée qui déclenche tout. En croisant les deux, une logique apparaît : une cascade de réactions physiologiques, prévisible, et surtout réversible."), React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Voici cette logique, vulgarisée en 5 étapes. Suis le schéma ci-dessous — prends ton temps."))), React.createElement(ViciousLoop, {
    steps: STEPS.slice(0, 6),
    practice: STEPS[6],
    labels: CONN_LABELS,
    onPick: id => scrollTo('section-' + id)
  }), React.createElement("p", {
    style: {
      marginTop: 32,
      color: '#9a9a9a',
      fontSize: 13,
      fontFamily: "'Fraunces',serif",
      fontStyle: 'italic',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      animation: 'nsBob 2s ease-in-out infinite'
    }
  }, "Continue à scroller ", React.createElement("span", null, "↓")))), React.createElement(Section, {
    id: "pensee",
    step: STEPS[0],
    visible: visibleSet.has('section-pensee'),
    onNext: () => scrollTo('section-cerveau'),
    nextLabel: "Zones du cerveau"
  }, React.createElement("p", {
    className: "ns-prose"
  }, "Quand une pensée survient, en fonction de son origine (positive ou négative), elle active certaines zones de ton cerveau. Une pensée positive active des zones associées au positif, une pensée négative active des zones associées au négatif.", React.createElement("br", null), "Cette pensée, c'est le début d'une cascade de réactions dans tout ton corps."), React.createElement(Retain, null, "La pensée n'est pas juste \"dans la tête\", c'est une impulsion électrique bien réelle.")), React.createElement(Section, {
    id: "cerveau",
    step: STEPS[1],
    visible: visibleSet.has('section-cerveau'),
    onNext: () => scrollTo('section-nerveux'),
    nextLabel: "Système nerveux"
  }, React.createElement("p", {
    className: "ns-prose",
    style: {
      marginBottom: 8
    }
  }, "Ces zones sont constituées de neurones. Lorsqu'une pensée survient, le signal électrique vient stimuler des zones précises, et c'est l'activation de ces zones qui forme une émotion."), React.createElement("div", {
    style: {
      margin: '4px 0 0'
    }
  }, React.createElement(BrainEmotionWidget, null)), React.createElement("p", {
    className: "ns-prose"
  }, "Une pensée inquiétante allume les zones d'alerte (formant l'anxiété ou la peur), tandis qu'une pensée rassurante allume les zones de calme (formant la sécurité). C'est cette émotion qui va ensuite déterminer l'activation du système nerveux ainsi que la libération d'hormones — ces 2 processus impactant tout notre corps."), React.createElement(Callout, null, "💡 Plus on sollicite une zone, plus les connexions entre les neurones se renforcent. Plus elles se renforcent, plus l'émotion que l'on sollicite souvent devient automatique. Entraînant avec elle la même activation nerveuse et la même cascade hormonale."), React.createElement("p", {
    className: "ns-prose"
  }, "Une personne qui pense souvent de manière négative aura, par défaut, ces zones d'alerte souvent activées — et inversement pour quelqu'un qui pense plutôt positivement."), React.createElement(Retain, null, "La pensée active des zones du cerveau qui forment l'émotion — et plus on répète ce chemin, plus notre cerveau l'emprunte facilement. C'est ce qu'on appelle la neuroplasticité, une notion essentielle pour reconfigurer ton système nerveux.")), React.createElement(Section, {
    id: "nerveux",
    step: STEPS[2],
    visible: visibleSet.has('section-nerveux'),
    onNext: () => scrollTo('section-hormones'),
    nextLabel: "Hormones"
  }, React.createElement("p", {
    className: "ns-prose"
  }, "C'est l'émotion générée par notre cerveau à l'étape précédente qui va dicter le comportement de notre système nerveux autonome. Celui-ci fonctionne avec deux grands « régimes » :"), React.createElement("ul", {
    className: "ns-list"
  }, React.createElement("li", null, React.createElement("strong", null, "Le système nerveux sympathique (Mode Survie) :"), " c'est le régime d'urgence et de stress. Il agit comme la pédale d'accélération de ton corps."), React.createElement("li", null, React.createElement("strong", null, "Le système nerveux parasympathique (Mode Repos) :"), " c'est le régime de calme et de récupération. Il agit comme la pédale de frein.")), React.createElement(Callout, null, "💡 Ces 2 systèmes gèrent l'activation de tous les organes de notre corps. Ce n'est pas un interrupteur ON/OFF. C'est une jauge — un niveau d'activation qui se déplace progressivement dans un sens ou dans l'autre."), React.createElement("div", {
    style: {
      margin: '48px 0'
    }
  }, React.createElement(NervousSystemGauge, null)), React.createElement(Retain, null, "Selon l'émotion ressentie, ta biologie bascule entre repos et survie — et c'est l'équilibre entre ces deux systèmes qui te maintient stable.")), React.createElement(Section, {
    id: "hormones",
    step: STEPS[3],
    visible: visibleSet.has('section-hormones'),
    onNext: () => scrollTo('section-corps'),
    nextLabel: "Le corps réagit"
  }, React.createElement("p", {
    className: "ns-prose"
  }, "Selon le système nerveux actif, ton cerveau déclenche la libération d'hormones — des messagers chimiques qui voyagent dans le sang et ", React.createElement("strong", null, "verrouillent l'état en cours"), ". Elles sont la signature biochimique de ton émotion."), React.createElement("div", {
    style: {
      margin: '16px 0 20px'
    }
  }, React.createElement(HormoneWidget, null)), React.createElement("p", {
    className: "ns-prose"
  }, "Aucune de ces hormones n'est « mauvaise ». Tu as besoin des deux familles pour vivre : l'une pour agir, l'autre pour récupérer. ", React.createElement("strong", null, "Le problème, c'est le déséquilibre."), " Quand un système reste activé trop longtemps — ou qu'il s'effondre — les concentrations hormonales se dérèglent, le corps suit, et les symptômes apparaissent : fatigue, insomnies, digestion fragile, anxiété, brouillard…"), React.createElement(Retain, null, "Ce n'est pas « parasympathique = bien, sympathique = mal ». C'est l'", React.createElement("strong", null, "équilibre"), " entre les deux qui te maintient en bonne santé. Tout le travail consiste à revenir vers cet équilibre.")), React.createElement(Section, {
    id: "corps",
    step: STEPS[4],
    visible: visibleSet.has('section-corps'),
    onNext: () => scrollTo('section-boucle'),
    nextLabel: "La boucle se referme"
  }, React.createElement("p", {
    className: "ns-prose"
  }, "Ces hormones et cette activation nerveuse ont des effets très concrets et physiques sur ton corps. C'est ta biologie qui répond directement à tes pensées. Tu peux ressentir ces effets à travers ton cœur, ton estomac, tes muscles, ta respiration… selon que ton système nerveux est en mode survie ou en mode repos."), React.createElement(OrganExplorer, null), React.createElement(Retain, null, "Ton corps est le miroir de ton système nerveux et donc de ta pensée.")), React.createElement(Section, {
    id: "boucle",
    step: STEPS[5],
    visible: visibleSet.has('section-boucle'),
    onNext: () => scrollTo('section-pratiques'),
    nextLabel: "Les pratiques méditatives"
  }, React.createElement("div", {
    style: {
      background: '#faf6ef',
      padding: '32px 40px',
      borderRadius: 24,
      border: '1px solid #f0ebe3',
      marginBottom: 32,
      boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      fontSize: 18,
      color: '#4a4a4a',
      lineHeight: 1.65,
      fontWeight: 300
    }
  }, React.createElement("p", {
    style: {
      margin: 0
    }
  }, "C'est le point le plus crucial de tout ce processus : la chaîne d'événements que nous venons de voir n'est pas une ligne droite, c'est un cercle."), React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Les sensations physiques qui apparaissent dans ton corps (les tensions, la respiration courte, la boule au ventre) envoient un signal de retour à ton cerveau."), React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Le cerveau analyse cet état physique et en conclut : « Mon corps est en état d'alerte, c'est donc qu'il y a un vrai danger. » Il va alors naturellement générer de nouvelles pensées du même type pour justifier ce qu'il ressent. Ces pensées relancent l'émotion, qui réactive le système nerveux, et le cycle recommence."), React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Avec le temps, le corps s'habitue à baigner dans cette chimie. Cet état de tension devient ton mode par défaut."))), React.createElement(Retain, null, "Ce stress constant n'est pas ton identité, c'est un simple programme biologique. Et comme tout apprentissage neurologique, il peut être court-circuité et rééduqué.")), React.createElement(Section, {
    id: "pratiques",
    step: STEPS[6],
    visible: visibleSet.has('section-pratiques'),
    isLast: true
  }, React.createElement("p", {
    className: "ns-prose"
  }, "Avec ma formation scientifique, j'ai toujours eu besoin de comprendre comment les choses fonctionnent. Cela fait maintenant près de deux ans que je me passionne pour les techniques de méditation, et c'est justement cette logique physiologique qui m'a convaincu de m'y plonger."), React.createElement("p", {
    className: "ns-prose"
  }, "Je sais qu'il est utile, voire indispensable pour beaucoup d'entre nous, de comprendre ce cheminement rationnel avant de se lancer. Pour commencer à briser tes propres automatismes, les trois pratiques ci-dessous sont un excellent point de départ. Non seulement leur efficacité est vérifiée scientifiquement, mais c'est grâce à cette validation que nous savons exactement ", React.createElement("strong", null, "à quel endroit de la boucle elles agissent"), "."), React.createElement(PracticesCarousel, null), React.createElement(Retain, null, "Chacune de ces pratiques cible un maillon précis de la boucle. Ensemble, elles te redonnent la main sur ton état intérieur.")), React.createElement("footer", {
    style: {
      padding: '80px 20px 120px',
      textAlign: 'center',
      background: '#fff',
      borderTop: '1px solid #ebe8e2'
    }
  }, React.createElement("div", {
    style: {
      maxWidth: 560,
      margin: '0 auto'
    }
  }, React.createElement("h2", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontWeight: 400,
      fontSize: 'clamp(26px, 4vw, 36px)',
      margin: '0 0 14px',
      letterSpacing: '-0.02em'
    }
  }, "Prêt à ", React.createElement("em", {
    style: {
      color: '#5a5a5a',
      fontWeight: 300
    }
  }, "sortir de la boucle"), " ?"), React.createElement("p", {
    style: {
      color: '#5a5a5a',
      fontSize: 15.5,
      lineHeight: 1.6,
      margin: '0 0 12px'
    }
  }, "Maintenant que tu as fait ton test et lu ce guide, tu comprends le mécanisme. La prochaine étape\xA0: passer à la pratique."), React.createElement("p", {
    style: {
      color: '#5a5a5a',
      fontSize: 15.5,
      lineHeight: 1.6,
      margin: '0 0 32px'
    }
  }, "Mon accompagnement individuel de 6 semaines est conçu pour ça\xA0: chaque semaine, on cible ensemble une étape de la chaîne pour t'apprendre à briser le cercle vicieux et retrouver ta régulation. À la fin du parcours, tu auras les clés pour gérer tes réactions en toute autonomie. Si tu veux en parler, je te propose un appel découverte gratuit de 15 à 20 minutes pour échanger sur tes résultats et voir si cet accompagnement est fait pour toi."), React.createElement("button", {
    onClick: () => window.open('https://calendly.com/meuter-robin/30min', '_blank'),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '16px 30px',
      background: '#14362B',
      color: '#fff',
      borderRadius: 9999,
      border: 'none',
      cursor: 'pointer',
      fontSize: 15,
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, "Réserver mon appel découverte ", React.createElement("span", null, "→")))));
}
function ViciousLoop({
  steps,
  practice,
  labels,
  onPick
}) {
  const [isDesktop, setIsDesktop] = useStateG(typeof window !== 'undefined' && window.matchMedia('(min-width: 900px)').matches);
  useEffectG(() => {
    const mq = window.matchMedia('(min-width: 900px)');
    const on = e => setIsDesktop(e.matches);
    mq.addEventListener ? mq.addEventListener('change', on) : mq.addListener(on);
    return () => {
      mq.removeEventListener ? mq.removeEventListener('change', on) : mq.removeListener(on);
    };
  }, []);
  return React.createElement("div", {
    style: {
      margin: '0 auto',
      width: '100%'
    }
  }, isDesktop ? React.createElement(ViciousLoopCircle, {
    steps: steps,
    labels: labels,
    onPick: onPick
  }) : React.createElement(ViciousLoopStack, {
    steps: steps,
    labels: labels,
    onPick: onPick
  }), React.createElement("div", {
    style: {
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
      position: 'relative',
      zIndex: 2
    }
  }, React.createElement("div", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontStyle: 'italic',
      fontSize: 13,
      color: '#9a9a9a',
      letterSpacing: '0.01em'
    }
  }, "Sortir de la boucle"), React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 420
    }
  }, React.createElement(StageCard, {
    step: practice,
    onClick: () => onPick(practice.id),
    small: true
  }))));
}
function ViciousLoopCircle({
  steps,
  labels,
  onPick
}) {
  const N = steps.length;
  const size = 640;
  const cx = size / 2,
    cy = size / 2;
  const R = 238;
  const ringR = 200;
  const angleFor = i => -90 + i * 360 / N;
  const cardW = 200;
  return React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: size,
      margin: '0 auto',
      aspectRatio: '1 / 1'
    }
  }, React.createElement("svg", {
    viewBox: `0 0 ${size} ${size}`,
    width: "100%",
    height: "100%",
    style: {
      display: 'block',
      overflow: 'visible'
    },
    "aria-hidden": "true"
  }, React.createElement("defs", null, React.createElement("linearGradient", {
    id: "vl-grad",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "1"
  }, steps.map((s, i) => React.createElement("stop", {
    key: i,
    offset: `${i / (steps.length - 1) * 100}%`,
    stopColor: s.accent
  }))), React.createElement("filter", {
    id: "vl-glow",
    x: "-20%",
    y: "-20%",
    width: "140%",
    height: "140%"
  }, React.createElement("feGaussianBlur", {
    stdDeviation: "3"
  }))), React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: ringR,
    fill: "none",
    stroke: "url(#vl-grad)",
    strokeWidth: "18",
    opacity: "0.07",
    filter: "url(#vl-glow)"
  }), React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: ringR,
    fill: "none",
    stroke: "#ebe8e2",
    strokeWidth: "1.5"
  }), React.createElement("circle", {
    className: "vl-flow",
    cx: cx,
    cy: cy,
    r: ringR,
    fill: "none",
    stroke: "url(#vl-grad)",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeDasharray: "12 16"
  }), steps.map((s, i) => {
    const a = angleFor(i) + 360 / N / 2;
    const rad = a * Math.PI / 180;
    const ax = cx + ringR * Math.cos(rad);
    const ay = cy + ringR * Math.sin(rad);
    const rot = a + 90;
    const next = steps[(i + 1) % N];
    return React.createElement("g", {
      key: 'arr-' + i,
      transform: `translate(${ax} ${ay}) rotate(${rot})`
    }, React.createElement("path", {
      d: "M -5 -4 L 0 0 L -5 4",
      fill: "none",
      stroke: next.accent,
      strokeWidth: "2.25",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }));
  })), React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      textAlign: 'center',
      pointerEvents: 'none',
      width: 180
    }
  }, React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: '#9a958b',
      marginBottom: 6
    }
  }, "Cercle vicieux"), React.createElement("div", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontSize: 22,
      fontWeight: 500,
      color: '#1b1b1b',
      lineHeight: 1.15,
      letterSpacing: '-0.02em'
    }
  }, React.createElement("em", {
    style: {
      fontStyle: 'italic'
    }
  }, "Pensée"), React.createElement("span", {
    style: {
      color: '#c4bfb3',
      margin: '0 6px'
    }
  }, "·"), "Corps"), React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#9a958b',
      fontFamily: "'Fraunces',serif",
      fontStyle: 'italic',
      marginTop: 6
    }
  }, "Une cascade qui se renforce")), steps.map((s, i) => {
    const a = angleFor(i);
    const rad = a * Math.PI / 180;
    const xPct = 50 + R / size * 100 * Math.cos(rad);
    const yPct = 50 + R / size * 100 * Math.sin(rad);
    return React.createElement("div", {
      key: s.id,
      style: {
        position: 'absolute',
        left: `${xPct}%`,
        top: `${yPct}%`,
        transform: 'translate(-50%, -50%)',
        width: cardW
      }
    }, React.createElement(CircleCard, {
      step: s,
      onClick: () => onPick(s.id)
    }));
  }));
}
function ViciousLoopStack({
  steps,
  labels,
  onPick
}) {
  return React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 520,
      margin: '0 auto',
      padding: '0 8px'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 14
    }
  }, React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: '#9a958b'
    }
  }, "Cercle vicieux ↻")), steps.map((s, i) => React.createElement(React.Fragment, {
    key: s.id
  }, React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, React.createElement(StageCard, {
    step: s,
    onClick: () => onPick(s.id),
    small: true
  })), i < steps.length - 1 && labels && labels[i] && React.createElement("div", {
    className: "vl-conn-gap",
    style: {
      position: 'relative',
      minHeight: 38,
      paddingLeft: 52,
      display: 'flex',
      alignItems: 'center',
      '--from': steps[i].accent,
      '--to': steps[i + 1].accent
    }
  }, React.createElement("span", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontStyle: 'italic',
      fontSize: 12.5,
      color: '#9a9a9a'
    }
  }, labels[i])))));
}
function CircleCard({
  step,
  onClick
}) {
  return React.createElement("a", {
    href: '#section-' + step.id,
    onClick: e => {
      e.preventDefault();
      onClick && onClick();
    },
    style: {
      display: 'block',
      padding: '12px 14px 14px',
      background: '#fff',
      border: `1.5px solid ${step.accent}`,
      borderRadius: 16,
      textDecoration: 'none',
      color: '#1a1a1a',
      boxShadow: '0 6px 22px rgba(30,20,10,0.06)',
      transition: 'transform .3s, box-shadow .3s',
      position: 'relative',
      overflow: 'hidden',
      isolation: 'isolate',
      zIndex: 1
    },
    onMouseOver: e => {
      e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
      e.currentTarget.style.boxShadow = '0 14px 34px rgba(30,20,10,0.12)';
    },
    onMouseOut: e => {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = '0 6px 22px rgba(30,20,10,0.06)';
    }
  }, React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: step.bg,
      opacity: 0.45,
      zIndex: -1
    }
  }), React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      marginBottom: 2
    }
  }, React.createElement("span", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontSize: 22,
      fontWeight: 500,
      color: step.ink,
      lineHeight: 1,
      letterSpacing: '-0.02em'
    }
  }, step.num), React.createElement("span", {
    style: {
      fontFamily: "'DM Sans',sans-serif",
      fontSize: 14.5,
      fontWeight: 600,
      color: step.ink,
      lineHeight: 1.2
    }
  }, step.title)), React.createElement("p", {
    style: {
      fontSize: 11.5,
      color: '#6a6a6a',
      margin: 0,
      lineHeight: 1.35,
      fontWeight: 400
    }
  }, step.desc));
}
function StageCard({
  step,
  onClick,
  small
}) {
  const pad = small ? '20px 22px 20px 76px' : '28px 28px 28px 100px';
  const numSize = small ? 30 : 52;
  const numLeft = small ? 20 : 28;
  return React.createElement("a", {
    href: '#section-' + step.id,
    onClick: e => {
      e.preventDefault();
      onClick && onClick();
    },
    style: {
      position: 'relative',
      display: 'block',
      padding: pad,
      background: '#fff',
      border: `1.5px solid ${step.accent}`,
      borderRadius: small ? 18 : 22,
      textDecoration: 'none',
      color: '#1a1a1a',
      cursor: 'pointer',
      overflow: 'hidden',
      isolation: 'isolate',
      transition: 'transform .35s, box-shadow .35s'
    },
    onMouseOver: e => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.06)';
    },
    onMouseOut: e => {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = '';
    }
  }, React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: step.bg,
      opacity: 0.5,
      zIndex: -1
    }
  }), React.createElement("span", {
    style: {
      position: 'absolute',
      top: '50%',
      left: numLeft,
      transform: 'translateY(-50%)',
      fontFamily: "'Fraunces',serif",
      fontSize: numSize,
      fontWeight: 500,
      color: step.ink,
      lineHeight: 1,
      letterSpacing: '-0.03em',
      opacity: 0.9
    }
  }, step.num), step.chip && React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: small ? 11 : 11.5,
      fontWeight: 500,
      padding: '3px 9px',
      borderRadius: 9999,
      background: '#fff',
      border: `1px solid ${step.accent}`,
      color: step.ink,
      marginBottom: 7,
      letterSpacing: '0.01em'
    }
  }, React.createElement("span", null, step.chip), React.createElement("span", {
    style: {
      opacity: 0.45,
      fontSize: 10
    }
  }, "→"), React.createElement("span", {
    style: {
      color: '#5a5a5a',
      fontWeight: 400
    }
  }, step.action)), React.createElement("h3", {
    style: {
      fontFamily: small ? "'DM Sans',sans-serif" : "'Fraunces',serif",
      fontSize: small ? 16.5 : 'clamp(24px, 4vw, 32px)',
      fontWeight: small ? 600 : 400,
      margin: '0 0 3px',
      color: step.ink,
      letterSpacing: '-0.015em'
    }
  }, step.title), React.createElement("p", {
    style: {
      fontSize: small ? 13 : 15,
      color: '#5a5a5a',
      margin: 0,
      lineHeight: 1.45
    }
  }, step.desc));
}
function Section({
  id,
  step,
  visible,
  onNext,
  nextLabel,
  isLast,
  children
}) {
  return React.createElement("section", {
    id: 'section-' + id,
    className: "ns-stage-section",
    style: {
      position: 'relative',
      padding: '16px 20px',
      scrollMarginTop: 20
    }
  }, React.createElement("div", {
    style: {
      maxWidth: 'min(1100px, 92vw)',
      margin: '0 auto',
      position: 'relative'
    }
  }, React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 5,
      padding: '28px 28px 28px 100px',
      background: step.bg,
      border: `1.5px solid ${step.accent}`,
      borderRadius: 22,
      overflow: 'hidden',
      marginBottom: 20,
      opacity: visible ? 1 : 0,
      transform: visible ? 'scale(1) translateY(0)' : 'scale(0.98) translateY(10px)',
      transition: 'opacity .4s cubic-bezier(0.16,1,0.3,1), transform .4s cubic-bezier(0.16,1,0.3,1)'
    }
  }, React.createElement("span", {
    style: {
      position: 'absolute',
      top: '50%',
      left: 28,
      transform: 'translateY(-50%)',
      fontFamily: "'Fraunces',serif",
      fontSize: step.isLoop ? 44 : 52,
      fontWeight: 500,
      color: step.ink,
      opacity: 0.9,
      lineHeight: 1,
      letterSpacing: '-0.04em',
      zIndex: 1
    }
  }, step.num), React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, step.chip && React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 11.5,
      fontWeight: 500,
      padding: '4px 10px',
      borderRadius: 9999,
      background: '#fff',
      border: `1px solid ${step.accent}`,
      color: step.ink,
      marginBottom: 8
    }
  }, React.createElement("span", null, step.chip), React.createElement("span", {
    style: {
      opacity: 0.45,
      fontSize: 10
    }
  }, "→"), React.createElement("span", {
    style: {
      color: '#5a5a5a',
      fontWeight: 400
    }
  }, step.action)), React.createElement("h2", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontWeight: 400,
      fontSize: 'clamp(24px, 4vw, 32px)',
      color: step.ink,
      margin: '0 0 6px',
      letterSpacing: '-0.015em'
    }
  }, step.title), React.createElement("p", {
    style: {
      fontSize: 15,
      color: '#5a5a5a',
      margin: 0
    }
  }, step.desc))), React.createElement("div", {
    style: {
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(10px)',
      transition: 'opacity .4s .05s cubic-bezier(0.16,1,0.3,1), transform .4s .05s cubic-bezier(0.16,1,0.3,1)'
    }
  }, children), !isLast && React.createElement("div", {
    style: {
      marginTop: 10,
      paddingTop: 6,
      borderTop: '1px dashed #ebe8e2',
      textAlign: 'center'
    }
  }, React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNext && onNext();
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      color: '#9a9a9a',
      textDecoration: 'none',
      fontFamily: "'Fraunces',serif",
      fontStyle: 'italic',
      fontSize: 14,
      transition: 'color .3s'
    },
    onMouseOver: e => e.currentTarget.style.color = '#5a5a5a',
    onMouseOut: e => e.currentTarget.style.color = '#9a9a9a'
  }, "Étape suivante : ", nextLabel, " ", React.createElement("span", null, "↓")))));
}
function Retain({
  children
}) {
  return React.createElement("div", {
    style: {
      borderLeft: '4px solid #000',
      paddingLeft: 20,
      paddingTop: 8,
      paddingBottom: 8,
      margin: '32px 0'
    }
  }, React.createElement("p", {
    style: {
      fontWeight: 500,
      color: '#000',
      margin: 0,
      lineHeight: 1.55
    }
  }, "➡️ À RETENIR : ", children));
}
function Callout({
  children
}) {
  return React.createElement("div", {
    style: {
      background: '#f5f5f7',
      padding: 20,
      borderRadius: 16,
      margin: '8px 0 12px'
    }
  }, React.createElement("p", {
    style: {
      color: '#4a4a4a',
      margin: 0,
      fontWeight: 300,
      lineHeight: 1.6
    }
  }, children));
}
const PRACTICES = [{
  emoji: '✋',
  title: 'Méditation de pleine conscience',
  tag: 'Le coupe-circuit',
  target: 'la pensée',
  color: '#9B7FE8',
  bg: '#F4EEFB',
  ink: '#6B4FA8',
  text: "Elle agit tout au début de la chaîne. Il ne s'agit pas de contrôler ou d'effacer tes pensées — elles seront toujours là. Il s'agit d'apprendre à les observer sans t'y accrocher. En refusant de les nourrir, tu les empêches de grandir et de maintenir la sur-activation de ton système nerveux. Le signal d'alarme s'éteint avant que l'engrenage ne s'emballe."
}, {
  emoji: '🌬',
  title: 'Respiration',
  tag: 'La pédale de frein',
  target: 'le système nerveux',
  color: '#4E7A5F',
  bg: '#E8EFE9',
  ink: '#2E5A3F',
  text: "Technique d'intervention redoutable quand ton système nerveux est déjà en surchauffe. Elle agit comme un frein direct pour le ramener à l'équilibre. La cohérence cardiaque en est un exemple : en rythmant ton souffle, tu stimules mécaniquement ton nerf vague. C'est un ordre biologique clair envoyé à ton corps pour quitter le mode survie."
}, {
  emoji: '🎯',
  title: 'Visualisation',
  tag: 'Le recâblage neuronal',
  target: "l'émotion",
  color: '#5E8BD9',
  bg: '#ECF2FB',
  ink: '#3A6BC0',
  text: "Ton cerveau ne fait pas la différence entre ce que tu vis réellement et ce que tu imagines intensément. En suscitant volontairement des émotions positives, tu renforces les connexions dans les zones associées à la sécurité. C'est la neuroplasticité : plus tu pratiques, plus ces nouveaux chemins s'ancrent et plus l'apaisement devient automatique."
}, {
  emoji: '🧬',
  title: 'Neuroplasticité',
  tag: 'Le principe commun',
  target: 'tout le système',
  color: '#C97E4E',
  bg: '#F8EDE3',
  ink: '#8A4E28',
  text: "C'est le socle scientifique des trois pratiques. Ton cerveau n'est pas figé : il se recâble en permanence. À chaque action répétée, les neurones impliqués se connectent plus solidement, et l'action devient automatique — c'est vrai pour tout, du vélo aux pensées anxieuses. Les techniques méditatives exploitent délibérément ce mécanisme : elles sollicitent les bons circuits, suffisamment et assez souvent, pour réécrire le câblage par défaut. C'est pour ça qu'une pratique devient plus efficace avec le temps : tu n'apprends pas une technique, tu reprogrammes littéralement tes activations nerveuses et hormonales."
}];
function PracticesCarousel() {
  const scrollerRef = useRefG(null);
  const [active, setActive] = useStateG(0);
  const [progress, setProgress] = useStateG(0);
  useEffectG(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      const p = max > 0 ? el.scrollLeft / max : 0;
      setProgress(p);
      const i = Math.round(p * (PRACTICES.length - 1));
      setActive(i);
    };
    el.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
    return () => el.removeEventListener('scroll', onScroll);
  }, []);
  const goTo = i => {
    const el = scrollerRef.current;
    if (!el) return;
    const cards = el.querySelectorAll('[data-card]');
    if (!cards[i]) return;
    el.scrollTo({
      left: cards[i].offsetLeft,
      behavior: 'smooth'
    });
  };
  const nudge = dir => goTo(Math.max(0, Math.min(PRACTICES.length - 1, active + dir)));
  return React.createElement("div", {
    style: {
      position: 'relative',
      margin: '20px 0 12px'
    }
  }, React.createElement("div", {
    ref: scrollerRef,
    className: "ic-practices-carousel",
    style: {
      display: 'flex',
      gap: 16,
      overflowX: 'auto',
      scrollSnapType: 'x mandatory',
      scrollBehavior: 'smooth',
      WebkitOverflowScrolling: 'touch',
      scrollbarWidth: 'none',
      padding: '4px 2px 12px',
      cursor: 'grab'
    }
  }, PRACTICES.map(p => React.createElement("div", {
    key: p.title,
    "data-card": true,
    style: {
      flex: '0 0 100%',
      scrollSnapAlign: 'center',
      display: 'flex'
    }
  }, React.createElement(PracticeCard, {
    p: p
  })))), React.createElement("div", {
    style: {
      marginTop: 8,
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '0 2px'
    }
  }, React.createElement("div", {
    style: {
      flex: 1,
      height: 3,
      borderRadius: 2,
      background: '#ebe8e2',
      position: 'relative',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: `${progress * 100}%`,
      background: 'linear-gradient(to right, #9B7FE8, #4E7A5F, #5E8BD9)',
      transition: 'width .15s linear',
      borderRadius: 2
    }
  })), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, PRACTICES.map((p, i) => React.createElement("button", {
    key: i,
    onClick: () => goTo(i),
    "aria-label": p.title,
    style: {
      width: i === active ? 22 : 8,
      height: 8,
      borderRadius: 4,
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      background: i === active ? p.ink : '#d4d1cb',
      transition: 'all .3s cubic-bezier(0.22,1,0.36,1)'
    }
  }))), React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#9a9a9a',
      fontVariantNumeric: 'tabular-nums',
      minWidth: 32,
      textAlign: 'right'
    }
  }, active + 1, React.createElement("span", {
    style: {
      opacity: 0.4
    }
  }, "/", PRACTICES.length)), React.createElement("button", {
    onClick: () => nudge(1),
    "aria-label": "Suivant",
    disabled: active === PRACTICES.length - 1,
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      border: '1px solid #e5e1d9',
      background: '#fff',
      cursor: active === PRACTICES.length - 1 ? 'default' : 'pointer',
      opacity: active === PRACTICES.length - 1 ? 0.3 : 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#3a3a3a',
      fontSize: 15,
      transition: 'all .2s',
      flexShrink: 0,
      position: 'relative'
    }
  }, "→", active === 0 && React.createElement("span", {
    style: {
      position: 'absolute',
      inset: -4,
      borderRadius: '50%',
      border: '2px solid #4E9E8A',
      opacity: 0.55,
      animation: 'icPulseRing 1.8s ease-out infinite'
    }
  }))), React.createElement("style", null, `
        .ic-practices-carousel::-webkit-scrollbar { display: none; }
        @keyframes icPulseRing {
          0%   { transform: scale(1);   opacity: 0.55; }
          80%  { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `));
}
function PracticeCard({
  p
}) {
  return React.createElement("div", {
    style: {
      width: '100%',
      boxSizing: 'border-box',
      background: p.bg,
      borderRadius: 20,
      padding: 'clamp(22px, 4vw, 30px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      border: `1.5px solid ${p.ink}15`,
      boxShadow: '0 2px 12px rgba(0,0,0,0.02)'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 14
    }
  }, React.createElement("div", {
    style: {
      fontSize: 22,
      lineHeight: 1,
      flexShrink: 0,
      width: 44,
      height: 44,
      borderRadius: 12,
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: `1px solid ${p.ink}20`
    }
  }, p.emoji), React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, React.createElement("div", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontSize: 'clamp(18px, 2.6vw, 22px)',
      color: p.ink,
      letterSpacing: '-0.015em',
      lineHeight: 1.2
    }
  }, p.title), React.createElement("div", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontStyle: 'italic',
      fontSize: 13,
      color: p.color,
      opacity: 0.85,
      marginTop: 3
    }
  }, p.tag))), React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignSelf: 'flex-start',
      alignItems: 'center',
      gap: 6,
      padding: '5px 11px',
      borderRadius: 999,
      background: '#fff',
      border: `1px solid ${p.ink}25`,
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.6px',
      textTransform: 'uppercase',
      color: p.ink
    }
  }, "Agit sur", React.createElement("span", {
    style: {
      opacity: 0.4
    }
  }, "→"), React.createElement("span", {
    style: {
      color: p.color,
      fontWeight: 700
    }
  }, p.target)), React.createElement("div", {
    style: {
      fontSize: 'clamp(14px, 2.2vw, 15.5px)',
      color: '#3a3a3a',
      lineHeight: 1.6,
      fontWeight: 300
    }
  }, p.text));
}
function GuideStyles() {
  return React.createElement("style", null, `
    .ns-prose { font-size:18px; color:#4a4a4a; font-weight:300; line-height:1.65; margin:0 0 14px; max-width: 72ch; }
    .ns-prose strong { color:#000; font-weight:500; }
    .ns-list { list-style:disc; padding-left:24px; margin:0 0 14px; font-size:18px; color:#4a4a4a; font-weight:300; line-height:1.65; max-width: 72ch; }
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

    /* Vicious loop ring flow (desktop: dashes travel clockwise around the circle) */
    @keyframes vlFlow { from { stroke-dashoffset: 0; } to { stroke-dashoffset: -56; } }
    .vl-flow { animation: vlFlow 3.5s linear infinite; }

    /* ═══ Mobile stack: vertical multicolored rail between cards ═══ */
    .vl-conn-gap { position: relative; }
    .vl-conn-gap::before {
      content: ''; position: absolute;
      left: 30px; top: -6px; bottom: -6px; width: 3px;
      background: linear-gradient(to bottom, var(--from, #ccc), var(--to, #ccc));
      border-radius: 2px;
      mask-image: repeating-linear-gradient(
        to bottom,
        #000 0px, #000 12px,
        transparent 12px, transparent 28px
      );
      -webkit-mask-image: repeating-linear-gradient(
        to bottom,
        #000 0px, #000 12px,
        transparent 12px, transparent 28px
      );
      animation: vlConnScroll 2s linear infinite;
    }
    @keyframes vlConnScroll {
      from { mask-position: 0 0; -webkit-mask-position: 0 0; }
      to   { mask-position: 0 28px; -webkit-mask-position: 0 28px; }
    }
    @media (prefers-reduced-motion: reduce) {
      .vl-conn-gap::before { animation: none; }
    }
    @media (max-width:600px) {
      .ns-prose, .ns-list { font-size:16px; }
    }
  `);
}
Object.assign(window, {
  NervousSystemGuide
});
const HOME_NAV = [{
  id: 'home-hero',
  label: 'Accueil'
}, {
  id: 'home-modes',
  label: 'Deux modes'
}, {
  id: 'home-boucle',
  label: 'La boucle'
}, {
  id: 'section-accompagnement',
  label: 'Accompagnement'
}, {
  id: 'home-parcours',
  label: 'Ton parcours'
}];
const HOME_CASCADE = [{
  label: 'Une pensée',
  icon: '◎',
  color: '#8a6bb1'
}, {
  label: 'Une émotion',
  icon: '◈',
  color: '#4a7fb0'
}, {
  label: 'Le système nerveux',
  icon: '⟁',
  color: '#d98142'
}, {
  label: 'Les hormones',
  icon: '✦',
  color: '#c84d4d'
}, {
  label: 'Les symptômes',
  icon: '♥',
  color: '#14362B'
}];
const HOME_MODES = {
  left: {
    tag: 'Sympathique',
    sub: 'Mode alerte',
    color: '#e8a07a',
    items: ["Cœur qui s'emballe", 'Respiration courte', 'Muscles tendus', 'Digestion bloquée', 'Mental en surchauffe']
  },
  right: {
    tag: 'Parasympathique',
    sub: 'Mode équilibre',
    color: '#9fc3a8',
    items: ['Cœur apaisé', 'Respiration ample', 'Muscles relâchés', 'Digestion fluide', 'Esprit clair']
  }
};
const HOME_TREE_STAGES = {
  1: {
    ground: 'M72,100 L128,100',
    trunk: 'M100,100 L100,85',
    canopy: {
      cy: 76,
      r: 9
    },
    roots: ['M100,100 L100,110']
  },
  2: {
    ground: 'M56,100 L144,100',
    trunk: 'M100,100 L100,67',
    canopy: {
      cy: 52,
      r: 15
    },
    roots: ['M100,100 L100,119', 'M100,100 Q92,109 83,113', 'M100,100 Q108,109 117,113']
  },
  3: {
    ground: 'M42,100 L158,100',
    trunk: 'M100,100 L100,56',
    canopy: {
      cy: 35,
      r: 21
    },
    roots: ['M100,100 L100,126', 'M100,100 Q90,112 77,118', 'M100,100 Q110,112 123,118', 'M100,100 Q86,104 66,107', 'M100,100 Q114,104 134,107']
  },
  4: {
    ground: 'M30,100 L170,100',
    trunk: 'M100,100 L100,47',
    canopy: {
      cy: 23,
      r: 24
    },
    roots: ['M100,100 L100,134', 'M100,100 Q88,116 72,124', 'M100,100 Q112,116 128,124', 'M100,100 Q84,106 58,111', 'M100,100 Q116,106 142,111', 'M100,100 Q94,122 88,132', 'M100,100 Q106,122 112,132']
  }
};
function HomeTree({
  stage,
  width
}) {
  const s = HOME_TREE_STAGES[stage];
  let di = 0;
  const nd = () => {
    di += 0.14;
    return di.toFixed(2) + 's';
  };
  return React.createElement("svg", {
    width: width,
    viewBox: "0 0 200 150",
    fill: "none",
    "aria-hidden": "true",
    style: {
      display: 'block',
      overflow: 'visible',
      height: 'auto'
    }
  }, React.createElement("path", {
    className: "ht-d",
    d: s.ground,
    stroke: "#14362B",
    strokeOpacity: "0.2",
    strokeWidth: "1.5",
    pathLength: "1",
    style: {
      '--td': '0s'
    }
  }), React.createElement("path", {
    className: "ht-d",
    d: s.trunk,
    stroke: "#14362B",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    pathLength: "1",
    style: {
      '--td': nd()
    }
  }), React.createElement("circle", {
    className: "ht-d",
    cx: "100",
    cy: s.canopy.cy,
    r: s.canopy.r,
    stroke: "#527d54",
    strokeWidth: "2",
    pathLength: "1",
    style: {
      '--td': nd()
    }
  }), s.roots.map((r, i) => React.createElement("path", {
    key: i,
    className: "ht-d",
    d: r,
    stroke: "#14362B",
    strokeOpacity: "0.5",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    pathLength: "1",
    style: {
      '--td': nd()
    }
  })));
}
function homeClamp01(v) {
  return Math.min(1, Math.max(0, v));
}
function useHomeScrub(ref, fn) {
  useEffectG(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      fn(1, true);
      return;
    }
    let raf = 0;
    const tick = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const total = Math.max(1, r.height - vh);
      fn(homeClamp01(-r.top / total), false);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    tick();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}
function HomePage({
  onGo
}) {
  const rootRef = useRefG(null);
  const progressRef = useRefG(null);
  const dotsRef = useRefG(null);
  const heroInnerRef = useRefG(null);
  const modesRef = useRefG(null);
  const modesInnerRef = useRefG(null);
  const boucleRef = useRefG(null);
  const chainPhaseRef = useRefG(null);
  const chainListRef = useRefG(null);
  const loopPhaseRef = useRefG(null);
  const loopExtraRef = useRefG(null);
  const scrollToId = id => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.getBoundingClientRect().top + window.pageYOffset - 8,
      behavior: 'smooth'
    });
  };
  useEffectG(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight || 1;
      const p = homeClamp01((window.pageYOffset || 0) / max);
      if (progressRef.current) progressRef.current.style.transform = 'scaleX(' + p.toFixed(4) + ')';
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  useEffectG(() => {
    const root = rootRef.current;
    if (!root || !('IntersectionObserver' in window)) return;
    const secs = HOME_NAV.map(n => root.querySelector('#' + n.id)).filter(Boolean);
    const setActive = idx => {
      if (!dotsRef.current) return;
      const dots = dotsRef.current.querySelectorAll('.ic-dot');
      dots.forEach((d, i) => d.classList.toggle('on', i === idx));
    };
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const idx = secs.indexOf(e.target);
          if (idx >= 0) setActive(idx);
        }
      });
    }, {
      rootMargin: '-45% 0px -45% 0px',
      threshold: 0
    });
    secs.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, []);
  useEffectG(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = Array.prototype.slice.call(root.querySelectorAll('.ic-reveal'));
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach(e => e.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, []);
  useEffectG(() => {
    const el = heroInnerRef.current;
    if (!el) return;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    let raf = 0;
    const tick = () => {
      raf = 0;
      const vh = window.innerHeight || 1;
      const p = homeClamp01((window.pageYOffset || 0) / (vh * 0.85));
      el.style.opacity = (1 - p).toFixed(3);
      el.style.transform = 'translateY(' + (p * -44).toFixed(1) + 'px) scale(' + (1 - p * 0.07).toFixed(4) + ')';
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    tick();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  useHomeScrub(modesRef, (p, reduced) => {
    const root = modesInnerRef.current;
    if (!root || reduced) return;
    const L = root.querySelectorAll('[data-ml]');
    const R = root.querySelectorAll('[data-mr]');
    const div = root.querySelector('[data-mdiv]');
    const tail = root.querySelector('[data-mtail]');
    L.forEach((el, i) => {
      const t = homeClamp01((p - (0.03 + i * 0.058)) / 0.06);
      el.style.opacity = (0.2 + 0.8 * t).toFixed(3);
      el.style.transform = 'translateX(' + ((t - 1) * 16).toFixed(1) + 'px)';
    });
    if (div) div.style.transform = 'scaleY(' + homeClamp01((p - 0.38) / 0.1).toFixed(3) + ')';
    R.forEach((el, i) => {
      const t = homeClamp01((p - (0.46 + i * 0.058)) / 0.06);
      el.style.opacity = (0.2 + 0.8 * t).toFixed(3);
      el.style.transform = 'translateX(' + ((1 - t) * 16).toFixed(1) + 'px)';
    });
    if (tail) {
      const t = homeClamp01((p - 0.84) / 0.12);
      tail.style.opacity = t.toFixed(3);
      tail.style.transform = 'translateY(' + ((1 - t) * 20).toFixed(1) + 'px)';
    }
  });
  useHomeScrub(boucleRef, (p, reduced) => {
    if (reduced) return;
    const list = chainListRef.current;
    if (!list) return;
    list.querySelectorAll('[data-cs]').forEach((el, i) => {
      const t = homeClamp01((p - (0.02 + i * 0.13)) / 0.11);
      el.style.opacity = t.toFixed(3);
      el.style.transform = 'translateY(' + ((1 - t) * 22).toFixed(1) + 'px) scale(' + (0.94 + 0.06 * t).toFixed(4) + ')';
    });
    list.querySelectorAll('[data-cl]').forEach((el, i) => {
      const t = homeClamp01((p - (0.12 + i * 0.13)) / 0.08);
      el.style.transform = 'scale(' + t.toFixed(3) + ')';
    });
  });
  const heroTitle = "Ton système nerveux a besoin d'équilibre.";
  return React.createElement("div", {
    ref: rootRef,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%'
    }
  }, React.createElement("div", {
    className: "ic-progress",
    "aria-hidden": "true"
  }, React.createElement("div", {
    className: "ic-progress-fill",
    ref: progressRef
  })), React.createElement("nav", {
    className: "ic-dots",
    "aria-label": "Navigation des sections",
    ref: dotsRef
  }, HOME_NAV.map((n, i) => React.createElement("button", {
    key: n.id,
    type: "button",
    className: 'ic-dot' + (i === 0 ? ' on' : ''),
    onClick: () => scrollToId(n.id),
    "aria-label": n.label
  }, React.createElement("span", {
    className: "ic-dot-label"
  }, n.label)))), React.createElement("section", {
    id: "home-hero",
    style: {
      width: '100%',
      minHeight: '100vh',
      background: '#faf8f4',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 24px 88px',
      position: 'relative',
      textAlign: 'center',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    className: "ic-hero-bg",
    "aria-hidden": "true"
  }, React.createElement("span", {
    className: "ic-blob ic-blob-a"
  }), React.createElement("span", {
    className: "ic-blob ic-blob-b"
  }), React.createElement("span", {
    className: "ic-grain"
  })), React.createElement("p", {
    className: "ic-edge",
    "aria-hidden": "true"
  }, "Science du cerveau · Pratiques méditatives"), React.createElement("div", {
    ref: heroInnerRef,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      willChange: 'opacity, transform',
      position: 'relative',
      zIndex: 1
    }
  }, React.createElement("div", {
    className: "ic-hero-logo",
    style: {
      position: 'relative'
    }
  }, React.createElement("span", {
    className: "ic-ring",
    "aria-hidden": "true"
  }), React.createElement("span", {
    className: "ic-ring ic-ring-2",
    "aria-hidden": "true"
  }), React.createElement("span", {
    className: "ic-ring ic-ring-3",
    "aria-hidden": "true"
  }), React.createElement("img", {
    src: LOGO_SRC,
    alt: "Inner Clarity",
    style: {
      width: 'clamp(100px, 12vw, 136px)',
      height: 'auto',
      borderRadius: '50%',
      display: 'block'
    }
  })), React.createElement("p", {
    className: "ic-kicker ic-fade-1",
    style: {
      margin: '26px 0 18px',
      color: '#527d54'
    }
  }, "Régulation du système nerveux"), React.createElement("h1", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontWeight: 400,
      fontStyle: 'italic',
      fontSize: 'clamp(38px, 6.2vw, 72px)',
      letterSpacing: '-0.022em',
      color: '#14362B',
      margin: '0 0 22px',
      lineHeight: 1.1,
      maxWidth: 860
    }
  }, heroTitle.split(' ').map((w, i) => React.createElement("span", {
    key: i,
    className: "ic-w",
    style: {
      '--wd': 0.12 + i * 0.07 + 's'
    }
  }, w, i < heroTitle.split(' ').length - 1 ? '\u00A0' : ''))), React.createElement("p", {
    className: "ic-fade-2",
    style: {
      fontSize: 'clamp(17px, 1.9vw, 21px)',
      color: '#5a5a5a',
      fontWeight: 300,
      maxWidth: 560,
      margin: '0 0 36px',
      lineHeight: 1.6
    }
  }, "Évalue ton état. Comprends la mécanique.", React.createElement("br", null), "Apprends à te réguler."), React.createElement("div", {
    className: "ic-fade-3",
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, React.createElement("button", {
    type: "button",
    className: "ic-pill ic-pill-dark",
    onClick: () => onGo('test')
  }, "Faire le test gratuit ", React.createElement("span", {
    "aria-hidden": "true"
  }, "→")), React.createElement("button", {
    type: "button",
    className: "ic-pill ic-pill-ghost",
    onClick: () => onGo('guide')
  }, "Lire le guide")), React.createElement("p", {
    className: "ic-fade-3",
    style: {
      fontSize: 14,
      color: '#9a958b',
      margin: '20px 0 0',
      fontFamily: "'Fraunces',serif",
      fontStyle: 'italic'
    }
  }, "Aucune inscription requise. Tout est en accès libre."), React.createElement("div", {
    className: "ic-reveal",
    style: {
      marginTop: 'clamp(18px, 3.5vh, 36px)',
      '--d': '1.1s'
    }
  }, React.createElement(HomeTree, {
    stage: 1,
    width: 92
  }))), React.createElement("button", {
    type: "button",
    className: "ic-scrollcue ic-fade-3",
    onClick: () => scrollToId('home-modes'),
    "aria-label": "Découvrir"
  }, React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("path", {
    d: "M6 9l6 6 6-6"
  })))), React.createElement("section", {
    id: "home-modes",
    ref: modesRef,
    style: {
      width: '100%',
      height: '320vh',
      background: '#0e231c',
      position: 'relative'
    }
  }, React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      overflow: 'hidden'
    }
  }, React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      width: 'min(80vw, 820px)',
      aspectRatio: '1',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(127,169,140,0.10), rgba(127,169,140,0) 62%)',
      pointerEvents: 'none'
    }
  }), React.createElement("div", {
    ref: modesInnerRef,
    style: {
      width: '100%',
      maxWidth: 920,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative'
    }
  }, React.createElement("p", {
    className: "ic-kicker",
    style: {
      color: '#7fa98c',
      marginBottom: 14
    }
  }, "Ce qui se passe en toi"), React.createElement("h2", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontWeight: 400,
      fontSize: 'clamp(28px, 4.6vw, 52px)',
      letterSpacing: '-0.02em',
      color: '#f5f3ee',
      margin: '0 0 clamp(28px, 5.5vh, 56px)',
      lineHeight: 1.12,
      textAlign: 'center'
    }
  }, "Deux modes. Un seul équilibre."), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 2px 1fr',
      gap: 'clamp(14px, 3.5vw, 52px)',
      width: '100%',
      alignItems: 'stretch'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'clamp(10px, 1.8vh, 17px)',
      alignItems: 'flex-end',
      textAlign: 'right'
    }
  }, React.createElement("div", {
    "data-ml": true,
    style: {
      opacity: 0.2,
      willChange: 'opacity, transform',
      marginBottom: 6
    }
  }, React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'clamp(11px, 1.3vw, 13px)',
      fontWeight: 700,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: HOME_MODES.left.color
    }
  }, HOME_MODES.left.tag), React.createElement("p", {
    style: {
      margin: '3px 0 0',
      fontFamily: "'Fraunces',serif",
      fontStyle: 'italic',
      fontSize: 'clamp(13px, 1.5vw, 16px)',
      color: 'rgba(245,243,238,0.55)'
    }
  }, HOME_MODES.left.sub)), HOME_MODES.left.items.map((it, i) => React.createElement("div", {
    key: i,
    "data-ml": true,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      opacity: 0.2,
      willChange: 'opacity, transform'
    }
  }, React.createElement("span", {
    style: {
      fontSize: 'clamp(15px, 2.1vw, 20px)',
      fontWeight: 300,
      color: '#f5f3ee',
      lineHeight: 1.3
    }
  }, it), React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: HOME_MODES.left.color,
      flexShrink: 0
    }
  })))), React.createElement("div", {
    "data-mdiv": true,
    "aria-hidden": "true",
    style: {
      width: 2,
      background: 'linear-gradient(to bottom, ' + HOME_MODES.left.color + '88, ' + HOME_MODES.right.color + '88)',
      transformOrigin: 'top center',
      transform: 'scaleY(0)',
      willChange: 'transform',
      borderRadius: 1
    }
  }), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'clamp(10px, 1.8vh, 17px)',
      alignItems: 'flex-start',
      textAlign: 'left'
    }
  }, React.createElement("div", {
    "data-mr": true,
    style: {
      opacity: 0.2,
      willChange: 'opacity, transform',
      marginBottom: 6
    }
  }, React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'clamp(11px, 1.3vw, 13px)',
      fontWeight: 700,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: HOME_MODES.right.color
    }
  }, HOME_MODES.right.tag), React.createElement("p", {
    style: {
      margin: '3px 0 0',
      fontFamily: "'Fraunces',serif",
      fontStyle: 'italic',
      fontSize: 'clamp(13px, 1.5vw, 16px)',
      color: 'rgba(245,243,238,0.55)'
    }
  }, HOME_MODES.right.sub)), HOME_MODES.right.items.map((it, i) => React.createElement("div", {
    key: i,
    "data-mr": true,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      opacity: 0.2,
      willChange: 'opacity, transform'
    }
  }, React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: HOME_MODES.right.color,
      flexShrink: 0
    }
  }), React.createElement("span", {
    style: {
      fontSize: 'clamp(15px, 2.1vw, 20px)',
      fontWeight: 300,
      color: '#f5f3ee',
      lineHeight: 1.3
    }
  }, it))))), React.createElement("p", {
    "data-mtail": true,
    style: {
      fontSize: 'clamp(16px, 2vw, 21px)',
      color: '#9fc3a8',
      fontWeight: 300,
      margin: 'clamp(28px, 5.5vh, 52px) auto 0',
      maxWidth: 620,
      lineHeight: 1.65,
      textAlign: 'center',
      opacity: 0,
      willChange: 'opacity, transform'
    }
  }, "Le stress chronique te bloque en mode alerte.", React.createElement("br", null), React.createElement("span", {
    style: {
      color: '#f5f3ee'
    }
  }, "Rebasculer vers l'équilibre, ça s'apprend."))))), React.createElement("section", {
    "aria-hidden": "true",
    style: {
      width: '100%',
      background: '#fff',
      display: 'flex',
      justifyContent: 'center',
      padding: 'clamp(56px, 9vh, 96px) 24px 0'
    }
  }, React.createElement("div", {
    className: "ic-reveal"
  }, React.createElement(HomeTree, {
    stage: 2,
    width: 140
  }))), React.createElement("section", {
    id: "home-boucle",
    ref: boucleRef,
    style: {
      width: '100%',
      height: '240vh',
      background: '#fff',
      position: 'relative'
    }
  }, React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      height: '100vh',
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    ref: chainPhaseRef,
    className: "hb-phase",
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      willChange: 'opacity, transform'
    }
  }, React.createElement("span", {
    className: "hb-bg",
    "aria-hidden": "true"
  }, React.createElement("span", null)), React.createElement("p", {
    className: "ic-kicker",
    style: {
      marginBottom: 12,
      position: 'relative'
    }
  }, "La réaction en chaîne"), React.createElement("h2", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontWeight: 400,
      fontSize: 'clamp(34px, 5.6vw, 68px)',
      letterSpacing: '-0.025em',
      color: '#14362B',
      margin: '0 0 clamp(28px, 6vh, 64px)',
      lineHeight: 1.08,
      textAlign: 'center',
      position: 'relative'
    }
  }, "Une pensée ", React.createElement("em", {
    style: {
      fontStyle: 'italic'
    }
  }, "suffit.")), React.createElement("div", {
    ref: chainListRef,
    className: "hb-chain"
  }, HOME_CASCADE.map((s, i) => React.createElement(React.Fragment, {
    key: s.label
  }, i > 0 && React.createElement("div", {
    "data-cl": true,
    className: "hb-link",
    "aria-hidden": "true",
    style: {
      background: 'linear-gradient(var(--dir, to bottom), ' + HOME_CASCADE[i - 1].color + ', ' + s.color + ')',
      transform: 'scale(0)',
      willChange: 'transform'
    }
  }), React.createElement("div", {
    "data-cs": true,
    className: "hb-node",
    style: {
      opacity: 0,
      willChange: 'opacity, transform',
      '--c': s.color
    }
  }, React.createElement("span", {
    className: "hb-orb",
    "aria-hidden": "true"
  }, React.createElement("span", null, s.icon)), React.createElement("span", {
    className: "hb-txt"
  }, React.createElement("span", {
    className: "hb-num"
  }, '0' + (i + 1)), React.createElement("span", {
    className: "hb-label"
  }, s.label)))))), React.createElement("p", {
    style: {
      fontSize: 'clamp(14px, 1.7vw, 17px)',
      color: '#9a958b',
      fontWeight: 300,
      fontFamily: "'Fraunces',serif",
      fontStyle: 'italic',
      margin: 'clamp(26px, 6vh, 64px) 0 0',
      textAlign: 'center',
      maxWidth: 460,
      lineHeight: 1.6,
      position: 'relative'
    }
  }, "Comprendre comment une pensée devient un symptôme."), React.createElement("button", {
    type: "button",
    className: "ic-pill ic-pill-dark",
    style: {
      marginTop: 22,
      position: 'relative'
    },
    onClick: () => onGo('guide')
  }, "Lire le guide sur la pensée ", React.createElement("span", {
    "aria-hidden": "true"
  }, "→"))))), React.createElement("section", {
    id: "section-accompagnement",
    style: {
      width: '100%',
      minHeight: '100vh',
      background: '#14362B',
      padding: 'clamp(80px, 13vh, 150px) 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
  }, React.createElement("span", {
    className: "ic-acc-glow",
    "aria-hidden": "true"
  }), React.createElement("div", {
    className: "ic-acc-grid"
  }, React.createElement("div", {
    className: "ic-reveal ic-acc-photo"
  }, React.createElement("div", {
    className: "ic-acc-frame"
  }, React.createElement("img", {
    src: ROBIN_PHOTO,
    alt: "Robin Meuter en méditation"
  })), React.createElement("div", {
    className: "ic-acc-bio"
  }, React.createElement("p", {
    className: "ic-acc-name"
  }, "Robin Meuter"), React.createElement("p", {
    className: "ic-acc-role"
  }, "Kinésithérapeute · Fondateur d'Inner Clarity"), React.createElement("p", {
    className: "ic-acc-text"
  }, "En tant que kiné, je vois chaque jour à quel point le stress se loge dans le corps : une nuque qui reste tendue, une respiration bloquée, un ventre noué. Je t'explique simplement ce qui se passe en toi, puis je te montre comment calmer ton système nerveux avec des pratiques concrètes."), React.createElement("div", {
    className: "ic-acc-creds"
  }, ['Kinésithérapeute', 'Yoga 200h', 'Neurosciences · Harvard'].map(c => React.createElement("span", {
    key: c
  }, c))))), React.createElement("div", {
    className: "ic-acc-content"
  }, React.createElement("p", {
    className: "ic-kicker ic-reveal",
    style: {
      color: '#7fa98c',
      margin: '0 0 12px'
    }
  }, "Accompagnement"), React.createElement("h2", {
    className: "ic-reveal",
    style: {
      fontFamily: "'Fraunces',serif",
      fontWeight: 400,
      fontSize: 'clamp(36px, 5.4vw, 66px)',
      letterSpacing: '-0.025em',
      color: '#f5f3ee',
      margin: '0 0 22px',
      lineHeight: 1.06,
      '--d': '.06s'
    }
  }, "De la compréhension", React.createElement("br", null), React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: '#cfe0d3'
    }
  }, "à la maîtrise.")), React.createElement("p", {
    className: "ic-reveal",
    style: {
      fontSize: 'clamp(16px, 1.8vw, 18px)',
      color: '#b9cfc0',
      margin: '0 0 30px',
      lineHeight: 1.7,
      fontWeight: 300,
      maxWidth: 580,
      '--d': '.12s'
    }
  }, "6 semaines de suivi individuel, 100\xA0% en visio. Chaque semaine\xA0: une séance d'une heure, la pratique ensemble, puis un programme d'entraînement adapté à ton profil."), React.createElement("div", {
    className: "ic-reveal ic-acc-facts",
    style: {
      '--d': '.15s'
    }
  }, [['6', 'semaines'], ['1 h', 'par semaine'], ['100 %', 'en visio']].map(([v, l]) => React.createElement("div", {
    key: l
  }, React.createElement("span", {
    className: "ic-acc-fv"
  }, v), React.createElement("span", {
    className: "ic-acc-fl"
  }, l)))), React.createElement("div", {
    className: "ic-reveal ic-acc-chips",
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      margin: '0 0 40px',
      '--d': '.18s'
    }
  }, ['Pleine conscience', 'Visualisation', 'Respiration'].map(t => React.createElement("span", {
    key: t,
    style: {
      padding: '9px 19px',
      borderRadius: 999,
      fontSize: 14,
      fontWeight: 500,
      color: '#d9e6dc',
      border: '1px solid rgba(245,243,238,0.22)',
      letterSpacing: '0.02em'
    }
  }, t))), React.createElement("div", {
    className: "ic-reveal",
    style: {
      background: '#faf8f4',
      borderRadius: 22,
      padding: 'clamp(24px, 4vw, 32px)',
      maxWidth: 560,
      width: '100%',
      textAlign: 'left',
      '--d': '.1s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 18
    }
  }, React.createElement("div", {
    style: {
      flex: '1 1 260px'
    }
  }, React.createElement("h3", {
    style: {
      fontSize: 19,
      fontWeight: 700,
      color: '#14362B',
      margin: '0 0 6px',
      letterSpacing: '-0.01em'
    }
  }, "Appel découverte gratuit"), React.createElement("p", {
    style: {
      fontSize: 15,
      margin: 0,
      lineHeight: 1.6,
      color: '#6a6a6a'
    }
  }, "15 à 20 min pour analyser tes résultats et voir si cet accompagnement est fait pour toi.")), React.createElement("button", {
    type: "button",
    className: "ic-pill ic-pill-dark",
    style: {
      whiteSpace: 'nowrap'
    },
    onClick: () => window.open('https://calendly.com/meuter-robin/30min', '_blank')
  }, "Prendre rendez-vous ", React.createElement("span", {
    "aria-hidden": "true"
  }, "→")))))), React.createElement("section", {
    id: "home-parcours",
    style: {
      width: '100%',
      background: '#faf8f4',
      padding: 'clamp(56px, 8vh, 90px) 24px clamp(70px, 10vh, 110px)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, React.createElement("span", {
    className: "ic-parcours-ring",
    "aria-hidden": "true"
  }), React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative'
    }
  }, React.createElement("div", {
    className: "ic-reveal",
    "aria-hidden": "true",
    style: {
      marginBottom: 'clamp(36px, 6vh, 60px)'
    }
  }, React.createElement(HomeTree, {
    stage: 3,
    width: 170
  })), React.createElement("p", {
    className: "ic-kicker ic-reveal",
    style: {
      margin: '0 0 12px',
      textAlign: 'center'
    }
  }, "Ton parcours"), React.createElement("h2", {
    className: "ic-reveal",
    style: {
      fontFamily: "'Fraunces',serif",
      fontWeight: 400,
      fontSize: 'clamp(28px, 4.4vw, 48px)',
      letterSpacing: '-0.02em',
      color: '#14362B',
      margin: '0 auto clamp(40px, 6vh, 56px)',
      lineHeight: 1.12,
      textAlign: 'center',
      maxWidth: 550,
      '--d': '.08s'
    }
  }, "Trois étapes pour t'enraciner."), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
      gap: 18,
      width: '100%'
    }
  }, [{
    num: '01',
    title: 'Évalue',
    desc: "29 questions pour cartographier l'état de ton système nerveux.",
    action: 'test',
    cta: 'Commencer le test'
  }, {
    num: '02',
    title: 'Comprends',
    desc: "Le guide interactif t'explique le trajet exact d'une émotion, de la pensée au symptôme.",
    action: 'guide',
    cta: 'Lire le guide'
  }, {
    num: '03',
    title: 'Agis',
    desc: "Un accompagnement individuel de 6 semaines pour apprendre à te réguler durablement.",
    action: 'accompagnement',
    cta: 'En savoir plus'
  }].map((c, i) => React.createElement("div", {
    key: c.num,
    className: "ic-reveal ic-card",
    style: {
      '--d': i * 0.1 + 's'
    }
  }, React.createElement("span", {
    style: {
      fontFamily: "'Fraunces',serif",
      fontSize: 'clamp(46px, 5vw, 62px)',
      fontWeight: 300,
      color: '#14362B',
      opacity: 0.18,
      lineHeight: 1
    }
  }, c.num), React.createElement("h3", {
    style: {
      margin: '14px 0 8px',
      fontSize: 24,
      fontWeight: 700,
      color: '#1b1b1b',
      letterSpacing: '-0.015em'
    }
  }, c.title), React.createElement("p", {
    style: {
      margin: 0,
      color: '#5a5a5a',
      lineHeight: 1.6,
      flex: 1,
      fontSize: 15.5,
      fontWeight: 300
    }
  }, c.desc), React.createElement("button", {
    type: "button",
    className: "ic-cardlink",
    onClick: () => {
      if (c.action === 'accompagnement') {
        scrollToId('section-accompagnement');
      } else {
        onGo(c.action);
      }
    }
  }, c.cta, " ", React.createElement("span", {
    "aria-hidden": "true"
  }, "→"))))))), React.createElement("section", {
    style: {
      width: '100%',
      padding: 'clamp(60px, 9vh, 90px) 24px 84px',
      background: '#faf8f4',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }
  }, React.createElement("div", {
    className: "ic-reveal",
    style: {
      marginBottom: 22
    }
  }, React.createElement(HomeTree, {
    stage: 4,
    width: 220
  })), React.createElement("p", {
    className: "ic-reveal",
    style: {
      fontFamily: "'Fraunces',serif",
      fontStyle: 'italic',
      fontSize: 16,
      color: '#9a958b',
      maxWidth: 480,
      lineHeight: 1.6,
      margin: 0,
      '--d': '.08s'
    }
  }, "Inner Clarity — Science du cerveau & pratiques méditatives.", React.createElement("br", null), "Robin Meuter, kinésithérapeute. 2026.")), React.createElement("style", null, `
        /* Kicker label */
        .ic-kicker { font-size: 12px; font-weight: 600; color: #9a958b; text-transform: uppercase; letter-spacing: 0.18em; margin: 0; }

        /* Hero word-by-word entrance */
        .ic-w { display: inline-block; opacity: 0; filter: blur(10px); transform: translateY(20px); animation: icWordIn .9s cubic-bezier(.22,.61,.36,1) forwards; animation-delay: var(--wd, 0s); }
        @keyframes icWordIn { to { opacity: 1; filter: blur(0); transform: translateY(0); } }
        .ic-fade-1, .ic-fade-2, .ic-fade-3 { opacity: 0; transform: translateY(16px); animation: icFadeUp .9s cubic-bezier(.22,.61,.36,1) forwards; }
        .ic-fade-1 { animation-delay: .05s; }
        .ic-fade-2 { animation-delay: .65s; }
        .ic-fade-3 { animation-delay: .85s; }
        @keyframes icFadeUp { to { opacity: 1; transform: translateY(0); } }
        .ic-hero-logo { opacity: 0; transform: scale(.92); animation: icLogoIn 1.1s cubic-bezier(.22,.61,.36,1) forwards; }
        @keyframes icLogoIn { to { opacity: 1; transform: scale(1); } }

        /* Reveal on scroll (léger zoom) */
        .ic-reveal { opacity: 0; transform: translateY(28px) scale(.97); transition: opacity .85s cubic-bezier(.22,.61,.36,1), transform .85s cubic-bezier(.22,.61,.36,1); transition-delay: var(--d, 0s); will-change: opacity, transform; }
        .ic-reveal.in { opacity: 1; transform: none; }

        /* Arbre : tracé progressif */
        .ht-d { stroke-dasharray: 1; stroke-dashoffset: 1; transition: stroke-dashoffset 1.2s cubic-bezier(.22,.61,.36,1); transition-delay: var(--td, 0s); }
        .ic-reveal.in .ht-d { stroke-dashoffset: 0; }

        /* Chaîne : verticale mobile, horizontale desktop */
        .hb-chain { position: relative; display: flex; flex-direction: column; align-items: flex-start; width: min(340px, 100%); }
        .hb-node { display: flex; align-items: center; gap: 16px; }
        .hb-orb { width: 48px; height: 48px; border-radius: 50%; flex-shrink: 0; background: #fff; border: 1px solid #ebe8e2; box-shadow: 0 10px 28px rgba(20,54,43,0.08); display: flex; align-items: center; justify-content: center; position: relative; }
        .hb-orb > span { width: 100%; height: 100%; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--c); font-size: 17px; background: radial-gradient(circle, color-mix(in oklab, var(--c) 14%, #fff), #fff 72%); }
        .hb-txt { display: flex; flex-direction: column; gap: 2px; }
        .hb-num { font-family: 'Fraunces', serif; font-style: italic; font-size: 13px; color: #b0a9a0; }
        .hb-label { font-size: 17px; font-weight: 600; color: #1b1b1b; letter-spacing: -0.01em; line-height: 1.2; }
        .hb-link { width: 2px; height: clamp(14px, 2.6vh, 26px); margin-left: 23px; transform-origin: top center; border-radius: 1px; }
        .hb-bg { position: absolute; left: 50%; top: 50%; width: min(1100px, 130vw); aspect-ratio: 1; transform: translate(-50%,-50%); border-radius: 50%; border: 1px solid rgba(20,54,43,0.07); background: radial-gradient(circle, rgba(127,169,140,0.10), rgba(127,169,140,0) 55%); pointer-events: none; }
        .hb-bg > span { position: absolute; inset: 14%; border-radius: 50%; border: 1px solid rgba(20,54,43,0.05); }
        @media (min-width: 900px) {
          .hb-chain { flex-direction: row; align-items: flex-start; justify-content: center; width: min(1120px, calc(100vw - 120px)); }
          .hb-node { flex: 1 1 0; min-width: 0; flex-direction: column; text-align: center; gap: 18px; }
          .hb-orb { width: clamp(64px, 6.4vw, 84px); height: clamp(64px, 6.4vw, 84px); }
          .hb-orb > span { font-size: clamp(20px, 2vw, 26px); }
          .hb-orb::after { content: ''; position: absolute; inset: -9px; border-radius: 50%; border: 1px solid color-mix(in oklab, var(--c) 22%, transparent); }
          .hb-txt { align-items: center; gap: 6px; }
          .hb-num { font-size: 14px; }
          .hb-label { font-size: clamp(16px, 1.55vw, 20px); text-wrap: balance; }
          .hb-link { flex: 0 1 clamp(20px, 4vw, 72px); width: auto; height: 2px; margin: calc(clamp(64px, 6.4vw, 84px) / 2) -6px 0; transform-origin: left center; --dir: to right; }
        }

        /* Pills */
        .ic-pill { display: inline-flex; align-items: center; gap: 8px; padding: 15px 28px; font-size: 15px; font-weight: 600; border-radius: 9999px; cursor: pointer; font-family: inherit; transition: transform .25s cubic-bezier(.22,.61,.36,1), box-shadow .25s, background .25s, color .25s, border-color .25s; }
        .ic-pill:active { transform: scale(.97); }
        .ic-pill-dark { color: #fff; background: #14362B; border: none; }
        .ic-pill-dark:hover { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(20,54,43,0.28); }
        .ic-pill-ghost { color: #14362B; background: transparent; border: 1.5px solid #cfc9bd; }
        .ic-pill-ghost:hover { border-color: #14362B; transform: translateY(-2px); }

        /* Parcours cards */
        .ic-card { background: #fff; border-radius: 26px; padding: 36px 32px; border: 1px solid #ebe8e2; display: flex; flex-direction: column; transition: transform .45s cubic-bezier(.22,.61,.36,1), box-shadow .45s, opacity .85s cubic-bezier(.22,.61,.36,1); }
        .ic-card:hover { transform: translateY(-6px); box-shadow: 0 24px 50px rgba(20,54,43,0.09); }
        .ic-cardlink { align-self: flex-start; margin-top: 20px; padding: 0; background: transparent; border: none; cursor: pointer; font-family: inherit; font-size: 14.5px; font-weight: 600; color: #14362B; display: inline-flex; align-items: center; gap: 7px; transition: gap .25s; }
        .ic-cardlink:hover { gap: 12px; }

        /* Scroll progress bar */
        .ic-progress { position: fixed; top: 0; left: 0; right: 0; height: 3px; z-index: 60; pointer-events: none; background: rgba(20,54,43,0.06); }
        .ic-progress-fill { height: 100%; background: linear-gradient(90deg, #14362B, #527d54); transform-origin: 0 50%; transform: scaleX(0); }

        /* Section dot navigation */
        @media (max-width: 760px) { .ic-dots { display: none !important; } }
        .ic-dots { position: fixed; right: 22px; top: 50%; transform: translateY(-50%); z-index: 55; display: flex; flex-direction: column; gap: 18px; mix-blend-mode: exclusion; }
        .ic-dot { position: relative; width: 14px; height: 14px; padding: 0; border: none; background: transparent; cursor: pointer; display: flex; align-items: center; justify-content: center; }
        .ic-dot::after { content: ''; width: 8px; height: 8px; border-radius: 50%; background: #9b988f; transition: transform .35s cubic-bezier(.22,.61,.36,1), background .35s; }
        .ic-dot:hover::after { background: #d7d4ca; }
        .ic-dot.on::after { background: #e8e5da; transform: scale(1.6); }
        .ic-dot-label { position: absolute; right: 22px; top: 50%; transform: translateY(-50%) translateX(8px); white-space: nowrap; font-size: 12px; font-weight: 600; color: #14362B; background: #fff; padding: 5px 12px; border-radius: 999px; box-shadow: 0 6px 18px rgba(20,54,43,.12); opacity: 0; pointer-events: none; transition: opacity .25s, transform .25s; }
        .ic-dot:hover .ic-dot-label { opacity: 1; transform: translateY(-50%) translateX(0); }

        /* Hero scroll cue */
        .ic-scrollcue { position: absolute; bottom: 26px; left: 50%; margin-left: -22px; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; border: none; background: transparent; cursor: pointer; color: #9a958b; transition: color .25s; }
        .ic-scrollcue:hover { color: #14362B; }
        .ic-scrollcue svg { animation: icBob 2s cubic-bezier(.45,0,.55,1) infinite; }
        @keyframes icBob { 0%, 100% { transform: translateY(-3px); opacity: .55; } 50% { transform: translateY(4px); opacity: 1; } }

        /* ── Habillage : fond ambiant du hero ── */
        .ic-hero-bg { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }
        .ic-blob { position: absolute; border-radius: 50%; filter: blur(70px); }
        .ic-blob-a { width: 56vw; height: 56vw; max-width: 780px; max-height: 780px; left: -16vw; top: -20vw; background: radial-gradient(circle, rgba(127,169,140,0.22), rgba(127,169,140,0) 65%); }
        .ic-blob-b { width: 50vw; height: 50vw; max-width: 700px; max-height: 700px; right: -14vw; bottom: -16vw; background: radial-gradient(circle, rgba(213,196,160,0.28), rgba(213,196,160,0) 65%); }
        .ic-grain { position: absolute; inset: 0; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E"); }

        /* Anneaux de respiration autour du logo */
        .ic-ring { position: absolute; left: 50%; top: 50%; width: 100%; height: 100%; border-radius: 50%; border: 1px solid rgba(82,125,84,0.4); transform: translate(-50%,-50%); opacity: 0; animation: icBreath 7.2s cubic-bezier(.45,0,.55,1) infinite; pointer-events: none; }
        .ic-ring-2 { animation-delay: 2.4s; }
        .ic-ring-3 { animation-delay: 4.8s; }
        @keyframes icBreath { 0% { transform: translate(-50%,-50%) scale(1.02); opacity: 0; } 20% { opacity: .55; } 100% { transform: translate(-50%,-50%) scale(2.1); opacity: 0; } }

        /* Texte vertical en bord de page (desktop) */
        .ic-edge { position: absolute; left: 34px; top: 50%; writing-mode: vertical-rl; transform: translateY(-50%) rotate(180deg); font-size: 11px; font-weight: 600; letter-spacing: .3em; text-transform: uppercase; color: #b9b3a6; margin: 0; z-index: 1; }
        @media (max-width: 1100px) { .ic-edge { display: none; } }

        /* Parcours : anneaux décoratifs */
        .ic-parcours-ring { position: absolute; left: 50%; top: clamp(-180px, -12vw, -90px); transform: translateX(-50%); width: min(720px, 92vw); aspect-ratio: 1; border-radius: 50%; border: 1px solid rgba(20,54,43,0.09); pointer-events: none; }
        .ic-parcours-ring::before { content: ''; position: absolute; inset: 10%; border-radius: 50%; border: 1px solid rgba(20,54,43,0.05); }

        /* Accompagnement : grille + photo en arche */
        .ic-acc-glow { position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); width: min(120vw, 980px); aspect-ratio: 1; border-radius: 50%; background: radial-gradient(circle, rgba(127,169,140,0.13), rgba(127,169,140,0) 62%); pointer-events: none; }
        .ic-acc-grid { position: relative; display: grid; grid-template-columns: 1fr; gap: clamp(40px, 6vw, 72px); width: 100%; max-width: 1020px; align-items: center; justify-items: center; }
        .ic-acc-photo { width: min(300px, 76vw); }
        .ic-acc-frame { position: relative; }
        .ic-acc-frame img { display: block; width: 100%; aspect-ratio: 3 / 4; object-fit: cover; border-radius: 999px 999px 22px 22px; }
        .ic-acc-frame::after { content: ''; position: absolute; inset: -12px; border-radius: 999px 999px 30px 30px; border: 1px solid rgba(245,243,238,0.2); pointer-events: none; }
        .ic-acc-bio { margin: 28px auto 0; text-align: center; max-width: 360px; display: flex; flex-direction: column; align-items: center; }
        .ic-acc-name { margin: 0; font-family: 'Fraunces', serif; font-size: 22px; color: #f5f3ee; letter-spacing: -0.01em; }
        .ic-acc-role { margin: 4px 0 14px; font-family: 'Fraunces', serif; font-style: italic; font-size: 14.5px; color: #8fb39b; }
        .ic-acc-text { margin: 0 0 16px; font-size: 14.5px; line-height: 1.65; color: #c9d8cd; font-weight: 300; text-wrap: pretty; }
        .ic-acc-creds { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; }
        .ic-acc-creds span { font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #d9e6dc; padding: 6px 11px; border-radius: 999px; background: rgba(245,243,238,0.08); }
        .ic-acc-caption { margin: 20px 0 0; text-align: center; font-family: 'Fraunces', serif; font-style: italic; font-size: 14.5px; color: rgba(245,243,238,0.55); }
        .ic-acc-content { display: flex; flex-direction: column; align-items: center; text-align: center; }
        .ic-acc-chips { justify-content: center; }
        .ic-acc-facts { display: flex; gap: clamp(22px, 4vw, 44px); margin: 0 0 28px; padding: 20px 0; border-top: 1px solid rgba(245,243,238,0.14); border-bottom: 1px solid rgba(245,243,238,0.14); width: 100%; max-width: 580px; justify-content: center; }
        .ic-acc-facts > div { display: flex; flex-direction: column; gap: 4px; }
        .ic-acc-fv { font-family: 'Fraunces', serif; font-size: clamp(26px, 3vw, 34px); color: #f5f3ee; line-height: 1; }
        .ic-acc-fl { font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: #8fb39b; }
        @media (min-width: 980px) {
          .ic-acc-facts { justify-content: flex-start; }
          .ic-acc-grid { grid-template-columns: 400px 1fr; justify-items: stretch; max-width: 1140px; }
          .ic-acc-content { align-items: flex-start; text-align: left; }
          .ic-acc-photo { width: 100%; max-width: 400px; justify-self: center; }
          .ic-acc-chips { justify-content: flex-start; }
        }

        @media (prefers-reduced-motion: reduce) {
          .ic-w, .ic-fade-1, .ic-fade-2, .ic-fade-3, .ic-hero-logo { animation: none !important; opacity: 1 !important; transform: none !important; filter: none !important; }
          .ic-reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
          .ic-scrollcue svg { animation: none !important; }
          .ic-ring { animation: none !important; opacity: .3 !important; }
          .ht-d { stroke-dashoffset: 0 !important; transition: none !important; }
          #home-modes, #home-boucle { height: auto !important; }
          #home-modes > div, #home-boucle > div { position: static !important; height: auto !important; padding: 90px 24px !important; overflow: visible !important; }
          #home-boucle .hb-phase { position: static !important; opacity: 1 !important; transform: none !important; pointer-events: auto !important; }
          #home-boucle .hb-phase + .hb-phase { margin-top: 70px; }
          .hb-extra, [data-ml], [data-mr], [data-cs], [data-mtail] { opacity: 1 !important; transform: none !important; }
          [data-cl], [data-mdiv] { transform: none !important; }
        }
        @media (max-width: 980px) { .ic-dots { display: none; } }
        @media (max-width: 640px) {
          .ic-reveal { transform: translateY(22px) scale(.98); transition-duration: .65s; }
          .ic-pill { padding: 14px 24px; font-size: 14px; }
          .ic-card { padding: 28px 24px; }
        }
      `));
}
function AboutPage({
  onGo
}) {
  return React.createElement("div", {
    style: {
      background: '#faf8f4',
      minHeight: '100vh'
    }
  }, React.createElement("section", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      padding: 'clamp(60px,8vw,90px) 24px 0',
      textAlign: 'center'
    }
  }, React.createElement("p", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: '#9a958b',
      textTransform: 'uppercase',
      letterSpacing: '0.15em',
      margin: '0 0 12px'
    }
  }, "Inner Clarity"), React.createElement("h1", {
    style: {
      fontSize: 'clamp(32px, 5vw, 48px)',
      fontWeight: 700,
      letterSpacing: '-0.025em',
      color: '#1b1b1b',
      margin: '0 0 8px',
      lineHeight: 1.1
    }
  }, "Qui sommes-nous ?"), React.createElement("p", {
    style: {
      fontSize: 15,
      color: '#6a6a6a',
      margin: '0 0 0',
      lineHeight: 1.6
    }
  }, "Les personnes derrière Inner Clarity.")), React.createElement("section", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      padding: '56px 24px 64px'
    }
  }, React.createElement("div", {
    className: "about-card",
    style: {
      display: 'grid',
      gridTemplateColumns: '340px 1fr',
      gap: 48,
      background: '#fff',
      borderRadius: 28,
      padding: '40px 44px',
      border: '1px solid #ebe8e2',
      boxShadow: '0 4px 24px rgba(0,0,0,0.03)'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, React.createElement("img", {
    src: ROBIN_PHOTO,
    alt: "Robin Meuter",
    style: {
      width: '100%',
      borderRadius: 20,
      objectFit: 'cover',
      aspectRatio: '3/4'
    }
  }), React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, React.createElement("p", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: '#14362B',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      margin: '0 0 4px',
      background: '#E8EFE9',
      padding: '6px 14px',
      borderRadius: 999,
      display: 'inline-flex'
    }
  }, "Kinésithérapeute · Yoga 200h · Neurosciences (Harvard)"))), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, React.createElement("h2", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: '#1b1b1b',
      margin: '0 0 6px'
    }
  }, "Robin Meuter"), React.createElement("p", {
    style: {
      fontSize: 13,
      color: '#9a958b',
      margin: '0 0 24px',
      fontFamily: "'Fraunces',serif",
      fontStyle: 'italic'
    }
  }, "Fondateur d'Inner Clarity"), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      fontSize: 15,
      color: '#4a4a4a',
      lineHeight: 1.65,
      fontWeight: 300
    }
  }, React.createElement("p", {
    style: {
      margin: 0
    }
  }, "J'ai toujours été passionné par le fonctionnement du corps — anatomie, physiologie, biochimie. Comprendre ce qui se passe sous la surface, c'est ce qui m'a amené à la kinésithérapie."), React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Pourtant, pendant des années, j'étais moi-même quelqu'un de très stressé — sans vraiment m'en rendre compte. Ma sœur, psychologue, m'avait initié à la pleine conscience. Je pratiquais ponctuellement, dans les périodes de tension, comme un outil de secours. Sans réelle compréhension."), React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Puis un événement marquant a tout changé. J'ai pris conscience que j'étais perpétuellement enfermé dans mes pensées — et que ces pensées avaient un effet direct sur mon corps. Des tensions, une respiration courte, un système nerveux en alerte permanente."), React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Grâce à ma formation, j'ai pu relier ce que je ressentais à la physiologie : le lien entre la pensée, l'activation nerveuse, la sécrétion hormonale et les symptômes. Les pratiques méditatives ne sont pas du bien-être vague — ce sont des leviers biologiques précis."), React.createElement("p", {
    style: {
      margin: 0,
      color: '#1b1b1b',
      fontWeight: 400
    }
  }, "Nous vivons dans une société où l'on a besoin de comprendre avant d'agir. Saisir la logique derrière ces pratiques, c'est la porte d'entrée. Ensuite, elles nous invitent à lâcher prise. C'est ce que je veux transmettre avec Inner Clarity."))))), React.createElement("section", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      padding: '0 24px 64px'
    }
  }, React.createElement("div", {
    className: "about-card",
    style: {
      display: 'grid',
      gridTemplateColumns: '340px 1fr',
      gap: 48,
      background: '#fff',
      borderRadius: 28,
      padding: '40px 44px',
      border: '1px solid #ebe8e2',
      boxShadow: '0 4px 24px rgba(0,0,0,0.03)'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, React.createElement("img", {
    src: JUSTINE_PHOTO,
    alt: "Justine Meuter",
    style: {
      width: '100%',
      borderRadius: 20,
      objectFit: 'cover',
      aspectRatio: '3/4'
    }
  }), React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, React.createElement("p", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: '#4a7fb0',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      margin: '0 0 4px',
      background: '#eaf1f8',
      padding: '6px 14px',
      borderRadius: 999,
      display: 'inline-flex'
    }
  }, "Psychologue · Psychothérapeute familiale · EMDR"))), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, React.createElement("h2", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: '#1b1b1b',
      margin: '0 0 6px'
    }
  }, "Justine Meuter"), React.createElement("p", {
    style: {
      fontSize: 13,
      color: '#9a958b',
      margin: '0 0 24px',
      fontFamily: "'Fraunces',serif",
      fontStyle: 'italic'
    }
  }, "Co-fondatrice d'Inner Clarity"), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      fontSize: 15,
      color: '#4a4a4a',
      lineHeight: 1.65,
      fontWeight: 300
    }
  }, React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Justine est psychologue et psychothérapeute familiale. Formée à la psychothérapie EMDR, elle porte une attention particulière aux processus de régulation du système nerveux."), React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Elle est passionnée par la manière dont la pensée, la respiration et le corps soutiennent l'équilibre émotionnel et relationnel."), React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Elle découvre la méditation en 2016 lors d'un cycle de pleine conscience. Depuis, cette pratique fait partie intégrante de son quotidien, qu'elle cultive avec engagement et patience, notamment à travers des retraites, des rencontres humaines et des pratiques quotidiennes."))))), React.createElement("section", {
    style: {
      maxWidth: 700,
      margin: '0 auto',
      padding: '0 24px 80px',
      textAlign: 'center'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, React.createElement("button", {
    onClick: () => onGo('test'),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '16px 30px',
      fontSize: 15,
      fontWeight: 600,
      color: '#fff',
      background: '#14362B',
      borderRadius: 9999,
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'inherit'
    }
  }, "Faire le test ", React.createElement("span", null, "→")), React.createElement("button", {
    onClick: () => onGo('guide'),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '16px 30px',
      fontSize: 15,
      fontWeight: 600,
      color: '#14362B',
      background: 'transparent',
      borderRadius: 9999,
      border: '1.5px solid #14362B',
      cursor: 'pointer',
      fontFamily: 'inherit'
    }
  }, "Lire le guide"))), React.createElement("style", null, `
        @media (max-width: 768px) {
          .about-card { grid-template-columns: 1fr !important; gap: 28px !important; padding: 24px 22px !important; }
          .about-card img { max-width: 280px; margin: 0 auto; }
          .about-card > div:first-child > div:last-child { text-align: center; }
        }
      `));
}
function WorkshopsPage({
  onGo
}) {
  const programme = ["Le mécanisme de la pensée et son effet direct sur le corps", "Le lien entre pensée, système nerveux et émotions", "Des repères concrets pour reprendre la main sur le mental", "Une méditation guidée en clôture (≈ 20 min)"];
  return React.createElement("div", {
    style: {
      background: '#faf8f4',
      minHeight: '100vh'
    }
  }, React.createElement("section", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      padding: 'clamp(60px,8vw,90px) 24px 0',
      textAlign: 'center'
    }
  }, React.createElement("p", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: '#9a958b',
      textTransform: 'uppercase',
      letterSpacing: '0.15em',
      margin: '0 0 12px'
    }
  }, "Inner Clarity"), React.createElement("h1", {
    style: {
      fontSize: 'clamp(32px, 5vw, 48px)',
      fontWeight: 700,
      letterSpacing: '-0.025em',
      color: '#1b1b1b',
      margin: '0 0 8px',
      lineHeight: 1.1
    }
  }, "Formations & Conférences"), React.createElement("p", {
    style: {
      fontSize: 15,
      color: '#6a6a6a',
      margin: 0,
      lineHeight: 1.6
    }
  }, "Des rendez-vous pour comprendre, puis pratiquer.")), React.createElement("section", {
    style: {
      maxWidth: 1040,
      margin: '0 auto',
      padding: '48px 24px 24px'
    }
  }, React.createElement("div", {
    className: "conf-card",
    style: {
      display: 'grid',
      gridTemplateColumns: '300px 1fr',
      background: '#fff',
      borderRadius: 28,
      overflow: 'hidden',
      border: '1px solid #ebe8e2',
      boxShadow: '0 8px 40px rgba(20,54,43,0.06)'
    }
  }, React.createElement("div", {
    className: "conf-stub",
    style: {
      background: '#14362B',
      color: '#f4f1e8',
      padding: '44px 36px',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }
  }, React.createElement("p", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: '#9ec3ad',
      margin: '0 0 28px'
    }
  }, "Prochaine conférence"), React.createElement("div", {
    style: {
      marginBottom: 28
    }
  }, React.createElement("div", {
    style: {
      fontSize: 72,
      fontWeight: 700,
      lineHeight: 0.9,
      letterSpacing: '-0.04em'
    }
  }, "20"), React.createElement("div", {
    style: {
      fontSize: 18,
      fontFamily: "'Fraunces',serif",
      fontStyle: 'italic',
      color: '#e6ddc8',
      marginTop: 6
    }
  }, "juin 2026"), React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#9ec3ad',
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      marginTop: 6
    }
  }, "Samedi")), React.createElement("div", {
    style: {
      height: 1,
      background: 'rgba(255,255,255,0.14)',
      margin: '0 0 24px'
    }
  }), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      fontSize: 14,
      lineHeight: 1.5
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 10,
      color: '#9ec3ad',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      marginBottom: 4
    }
  }, "Lieu"), React.createElement("div", {
    style: {
      color: '#f4f1e8',
      fontWeight: 500
    }
  }, "Kinesport"), React.createElement("div", {
    style: {
      color: '#cdd8cf'
    }
  }, "Couvin")), React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 10,
      color: '#9ec3ad',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      marginBottom: 4
    }
  }, "Format"), React.createElement("div", {
    style: {
      color: '#cdd8cf'
    }
  }, "Conférence + méditation guidée")))), React.createElement("div", {
    style: {
      padding: 'clamp(32px,4vw,48px)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignSelf: 'flex-start',
      padding: '6px 14px',
      borderRadius: 999,
      background: '#E8EFE9',
      color: '#14362B',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      marginBottom: 18
    }
  }, "Conférence"), React.createElement("h2", {
    style: {
      fontSize: 'clamp(26px,3.4vw,34px)',
      fontWeight: 700,
      letterSpacing: '-0.025em',
      color: '#1b1b1b',
      margin: '0 0 10px',
      lineHeight: 1.1
    }
  }, "Le mécanisme de la pensée"), React.createElement("p", {
    style: {
      fontSize: 16,
      color: '#9a958b',
      fontFamily: "'Fraunces',serif",
      fontStyle: 'italic',
      margin: '0 0 22px'
    }
  }, "Comprendre comment naissent nos pensées — et comment s'en libérer."), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      fontSize: 15,
      color: '#4a4a4a',
      lineHeight: 1.65,
      fontWeight: 300,
      marginBottom: 26
    }
  }, React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Une conférence pour explorer comment se forment nos pensées, comment elles activent notre système nerveux et influencent directement notre corps. Robin partage une approche claire, ancrée dans la physiologie et les neurosciences."), React.createElement("p", {
    style: {
      margin: 0,
      color: '#1b1b1b',
      fontWeight: 400
    }
  }, "La rencontre se clôture par une méditation guidée — pour passer de la compréhension à l'expérience.")), React.createElement("div", {
    style: {
      marginBottom: 30
    }
  }, React.createElement("p", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: '#14362B',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      margin: '0 0 14px'
    }
  }, "Au programme"), React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, programme.map((item, i) => React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      fontSize: 15,
      color: '#4a4a4a',
      lineHeight: 1.5
    }
  }, React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 20,
      height: 20,
      borderRadius: 999,
      background: '#E8EFE9',
      color: '#14362B',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12,
      fontWeight: 700,
      marginTop: 1
    }
  }, "✓"), item)))), React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 26,
      borderTop: '1px solid #ebe8e2'
    }
  }, React.createElement("p", {
    style: {
      fontSize: 13,
      color: '#6a6a6a',
      margin: 0,
      lineHeight: 1.5
    }
  }, "Inscriptions bientôt ouvertes. Places limitées."))))), React.createElement("section", {
    style: {
      maxWidth: 700,
      margin: '0 auto',
      padding: '24px 24px 80px',
      textAlign: 'center'
    }
  }, React.createElement("p", {
    style: {
      fontSize: 14,
      color: '#9a958b',
      margin: '0 0 20px',
      lineHeight: 1.6
    }
  }, "Une question avant de t'inscrire\xA0? Commence par découvrir notre approche."), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, React.createElement("button", {
    onClick: () => onGo('guide'),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '16px 30px',
      fontSize: 15,
      fontWeight: 600,
      color: '#14362B',
      background: 'transparent',
      borderRadius: 9999,
      border: '1.5px solid #14362B',
      cursor: 'pointer',
      fontFamily: 'inherit'
    }
  }, "Lire le guide"), React.createElement("button", {
    onClick: () => onGo('about'),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '16px 30px',
      fontSize: 15,
      fontWeight: 600,
      color: '#14362B',
      background: 'transparent',
      borderRadius: 9999,
      border: '1.5px solid #14362B',
      cursor: 'pointer',
      fontFamily: 'inherit'
    }
  }, "Qui sommes-nous\xA0?"))), React.createElement("style", null, `
        @media (max-width: 760px) {
          .conf-card { grid-template-columns: 1fr !important; }
          .conf-stub { flex-direction: row !important; flex-wrap: wrap; align-items: center; gap: 24px; padding: 28px 28px !important; }
          .conf-stub > p { width: 100%; margin-bottom: 0 !important; }
        }
      `));
}
Object.assign(window, {
  WorkshopsPage
});
function LegalPage() {
  const LEGAL_UPDATED = '14 octobre 2026';
  const S = ({
    title,
    children
  }) => React.createElement("section", {
    className: "ic-legal-sec"
  }, React.createElement("h3", null, title), children);
  return React.createElement("div", {
    className: "ic-legal"
  }, React.createElement("div", {
    className: "ic-legal-wrap"
  }, React.createElement("p", {
    className: "ic-legal-kicker"
  }, "Inner Clarity"), React.createElement("h1", null, "Mentions légales ", React.createElement("em", null, "et confidentialité")), React.createElement("h2", null, "Mentions légales"), React.createElement(S, {
    title: "Éditeur"
  }, React.createElement("dl", {
    className: "ic-legal-dl"
  }, React.createElement("dt", null, "Éditeur"), React.createElement("dd", null, "Robin Meuter, Inner Clarity (indépendant en personne physique)"), React.createElement("dt", null, "Adresse"), React.createElement("dd", null, "Rue de la Buche 1/0002, 5660 Pesche (Couvin), Belgique"), React.createElement("dt", null, "Email"), React.createElement("dd", null, "meuter.robin@gmail.com"), React.createElement("dt", null, "Téléphone"), React.createElement("dd", null, React.createElement("a", {
    href: "tel:+32471244229"
  }, "+32 471 24 42 29")), React.createElement("dt", null, "Numéro d'entreprise (BCE)"), React.createElement("dd", null, "0770.470.703"))), React.createElement(S, {
    title: "Hébergeur"
  }, React.createElement("p", null, "Hostinger International Ltd, 61 Lordou Vironos Street, 6023 Larnaca, Chypre")), React.createElement(S, {
    title: "Propriété intellectuelle"
  }, React.createElement("p", null, "Les textes, visuels, le test et le guide présents sur ce site appartiennent à Inner Clarity. Toute reproduction, même partielle, sans autorisation écrite préalable est interdite.")), React.createElement(S, {
    title: "Avertissement"
  }, React.createElement("p", null, "Le contenu de ce site est informatif et éducatif. Il ne remplace pas un avis médical.")), React.createElement("h2", null, "Politique de confidentialité"), React.createElement(S, {
    title: "Responsable du traitement"
  }, React.createElement("p", null, "Robin Meuter, Inner Clarity, Rue de la Buche 1/0002, 5660 Pesche (Couvin), Belgique. Email : meuter.robin@gmail.com. Téléphone : +32 471 24 42 29.")), React.createElement(S, {
    title: "Aucune donnée demandée"
  }, React.createElement("p", null, "Le site ne te demande aucune donnée personnelle : pas de compte, pas de formulaire, pas de cookie, aucun outil de statistiques ni de publicité.")), React.createElement(S, {
    title: "Le test et ton bilan"
  }, React.createElement("p", null, "Tes réponses au test sont calculées dans ton navigateur. Elles ne sont ni envoyées ni conservées. Le bilan PDF est créé sur ton appareil.")), React.createElement(S, {
    title: "Journaux techniques de l'hébergeur"
  }, React.createElement("p", null, "L'hébergeur enregistre des journaux techniques (adresse IP, date, page consultée) pour la sécurité du site, pendant une durée limitée. Base légale : intérêt légitime.")), React.createElement(S, {
    title: "Services externes"
  }, React.createElement("p", null, "Les liens vers Calendly, Systeme.io, WhatsApp ou d'autres services t'emmènent chez eux, et leur propre politique de confidentialité s'applique.")), React.createElement(S, {
    title: "Tes droits"
  }, React.createElement("p", null, "Tu peux demander l'accès, la rectification, l'effacement de tes données ou t'opposer à leur traitement, par email. Tu peux aussi introduire une plainte auprès de l'Autorité de protection des données : ", React.createElement("a", {
    href: "https://www.autoriteprotectiondonnees.be",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "www.autoriteprotectiondonnees.be"), ".")), React.createElement("p", {
    className: "ic-legal-date"
  }, "Dernière mise à jour : ", LEGAL_UPDATED)), React.createElement("style", null, `
        .ic-legal { background: #faf8f4; flex: 1; padding: clamp(60px, 8vw, 96px) 24px 72px; }
        .ic-legal-wrap { max-width: 720px; margin: 0 auto; }
        .ic-legal-kicker { font-size: 11px; font-weight: 600; color: #9a958b; text-transform: uppercase; letter-spacing: 0.15em; margin: 0 0 12px; }
        .ic-legal h1 { font-size: clamp(30px, 4.6vw, 44px); font-weight: 700; letter-spacing: -0.025em; color: #1b1b1b; margin: 0 0 clamp(36px, 5vw, 56px); line-height: 1.1; }
        .ic-legal h1 em { font-family: 'Fraunces', serif; font-style: italic; font-weight: 400; color: #14362B; }
        .ic-legal h2 { font-size: 13px; font-weight: 700; color: #14362B; text-transform: uppercase; letter-spacing: 0.14em; margin: 48px 0 6px; padding-bottom: 14px; border-bottom: 1px solid #14362B; }
        .ic-legal-wrap > h2:first-of-type { margin-top: 0; }
        .ic-legal-sec { padding: 20px 0; border-bottom: 1px solid #ebe8e2; }
        .ic-legal h3 { font-size: 16px; font-weight: 600; color: #1b1b1b; margin: 0 0 8px; letter-spacing: -0.01em; }
        .ic-legal p { font-size: 15px; line-height: 1.7; color: #4a4a4a; margin: 0; font-weight: 300; text-wrap: pretty; }
        .ic-legal a { color: #14362B; text-decoration: underline; text-underline-offset: 3px; }
        .ic-legal a:hover { color: #527d54; }
        .ic-legal-dl { display: grid; grid-template-columns: minmax(0, 200px) minmax(0, 1fr); gap: 10px 20px; margin: 0; font-size: 15px; line-height: 1.6; }
        .ic-legal-dl dt { color: #9a958b; }
        .ic-legal-dl dd { margin: 0; color: #1b1b1b; }
        .ic-legal-date { margin-top: 28px !important; font-size: 13px !important; color: #9a958b !important; }
        @media (max-width: 600px) { .ic-legal-dl { grid-template-columns: 1fr; gap: 2px; } .ic-legal-dl dd { margin-bottom: 10px; } }
      `));
}
function PlaceholderPage({
  title,
  bg,
  accent = '#14362B'
}) {
  return React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: bg,
      padding: '120px 24px',
      minHeight: '80vh'
    }
  }, React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 560
    }
  }, React.createElement("span", {
    style: {
      display: 'inline-block',
      padding: '4px 14px',
      borderRadius: 9999,
      background: '#fff',
      border: `1px solid ${accent}33`,
      color: accent,
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      marginBottom: 20
    }
  }, "En construction"), React.createElement("h1", {
    style: {
      fontSize: 'clamp(32px, 5vw, 52px)',
      fontWeight: 700,
      letterSpacing: '-0.025em',
      color: accent,
      margin: '0 0 16px',
      lineHeight: 1.1
    }
  }, title), React.createElement("p", {
    style: {
      color: '#5a5a5a',
      fontSize: 17,
      lineHeight: 1.6,
      margin: 0
    }
  }, "Cette page est en cours de préparation. Reviens bientôt pour découvrir le contenu.")));
}
Object.assign(window, {
  HomePage,
  PlaceholderPage
});
const {
  useState: useStateA,
  useEffect: useEffectA
} = React;
const TWEAK_DEFAULTS = {
  "accent": "#14362B",
  "bgTone": "cool",
  "startView": "home"
};
const ROUTE_PATHS = {
  home: '/',
  test: '/test',
  guide: '/guide',
  about: '/a-propos',
  workshops: '/formations',
  legal: '/mentions-legales'
};
function routeFromPath(pathname) {
  const p = (pathname || '/').replace(/\/+$/, '') || '/';
  const hit = Object.keys(ROUTE_PATHS).find(k => ROUTE_PATHS[k] === p);
  return hit || 'home';
}
function App() {
  const [route, setRouteState] = useStateA(() => routeFromPath(window.location.pathname));
  const setRoute = React.useCallback(r => {
    if (!ROUTE_PATHS[r]) r = 'home';
    if (window.location.pathname !== ROUTE_PATHS[r]) {
      try {
        window.history.pushState({
          route: r
        }, '', ROUTE_PATHS[r]);
      } catch (e) {}
    }
    setRouteState(r);
  }, []);
  useEffectA(() => {
    const onPop = () => setRouteState(routeFromPath(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);
  const [testScreen, setTestScreen] = useStateA('welcome');
  const [answers, setAnswers] = useStateA([]);
  const [tweaks, setTweaks] = useStateA(TWEAK_DEFAULTS);
  const [tweaksOpen, setTweaksOpen] = useStateA(false);
  useEffectA(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, [route]);
  useEffectA(() => {
    const onMsg = ev => {
      const m = ev.data || {};
      if (m.type === '__activate_edit_mode') setTweaksOpen(true);
      if (m.type === '__deactivate_edit_mode') setTweaksOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const updateTweak = (k, v) => {
    const next = {
      ...tweaks,
      [k]: v
    };
    setTweaks(next);
    try {
      window.parent.postMessage({
        type: '__edit_mode_set_keys',
        edits: {
          [k]: v
        }
      }, '*');
    } catch (e) {}
  };
  useEffectA(() => {
    const tone = tweaks.bgTone;
    const map = {
      apple: '#fbfbfd',
      warm: '#faf8f4',
      cool: '#f7f9fb',
      neutral: '#fafafa'
    };
    document.body.style.backgroundColor = map[tone] || map.apple;
  }, [tweaks.bgTone]);
  const handleStart = () => {
    setAnswers([]);
    setTestScreen('quiz');
  };
  const handleComplete = fa => {
    setAnswers(fa);
    setTestScreen('result');
  };
  const handleRestart = () => {
    setTestScreen('welcome');
    setAnswers([]);
  };
  return React.createElement("div", {
    "data-screen-label": route === 'guide' ? 'Guide Système Nerveux' : route === 'home' ? 'Accueil' : route === 'about' ? 'Qui sommes-nous' : route === 'workshops' ? 'Formations' : route === 'legal' ? 'Mentions légales' : 'Test Inner Clarity',
    style: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement(Navigation, {
    route: route,
    setRoute: setRoute
  }), React.createElement("main", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, route === 'home' && React.createElement(HomePage, {
    onGo: setRoute
  }), route === 'test' && React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      background: '#faf8f4'
    }
  }, testScreen === 'welcome' && React.createElement(WelcomeScreen, {
    onStart: handleStart,
    onGoGuide: () => setRoute('guide')
  }), testScreen === 'quiz' && React.createElement(QuizScreen, {
    onComplete: handleComplete
  }), testScreen === 'result' && React.createElement(ResultScreen, {
    answers: answers,
    onRestart: handleRestart,
    onGoGuide: () => setRoute('guide')
  })), route === 'guide' && React.createElement(NervousSystemGuide, {
    onGo: setRoute
  }), route === 'about' && React.createElement(AboutPage, {
    onGo: setRoute
  }), route === 'workshops' && React.createElement(PlaceholderPage, {
    title: "Formations & Conférences",
    bg: "#F8F5E9"
  }), route === 'legal' && React.createElement(LegalPage, null)), React.createElement("footer", {
    className: "ic-legal-foot"
  }, React.createElement("a", {
    href: "/mentions-legales",
    onClick: e => {
      e.preventDefault();
      setRoute('legal');
    }
  }, "Mentions légales et confidentialité")), React.createElement("div", {
    className: `tweaks-panel${tweaksOpen ? ' visible' : ''}`
  }, React.createElement("h4", null, "Tweaks"), React.createElement("div", {
    className: "tweaks-row"
  }, React.createElement("label", null, "Page"), React.createElement("div", {
    className: "opt-btns"
  }, [['home', 'Accueil'], ['test', 'Test'], ['guide', 'Guide'], ['about', 'À propos'], ['workshops', 'Formations']].map(([v, lbl]) => React.createElement("button", {
    key: v,
    className: route === v ? 'active' : '',
    onClick: () => {
      setRoute(v);
      updateTweak('startView', v);
    }
  }, lbl)))), route === 'test' && React.createElement("div", {
    className: "tweaks-row"
  }, React.createElement("label", null, "Étape du test"), React.createElement("div", {
    className: "opt-btns"
  }, ['welcome', 'quiz', 'result'].map(v => React.createElement("button", {
    key: v,
    className: testScreen === v ? 'active' : '',
    onClick: () => {
      if (v === 'result' && answers.length === 0) {
        setAnswers(QUESTIONS.map((q, i) => ({
          questionId: q.id,
          value: 30 + i * 7 % 60
        })));
      }
      setTestScreen(v);
    }
  }, v)))), React.createElement("div", {
    className: "tweaks-row"
  }, React.createElement("label", null, "Teinte du fond"), React.createElement("div", {
    className: "opt-btns"
  }, ['apple', 'warm', 'cool', 'neutral'].map(v => React.createElement("button", {
    key: v,
    className: tweaks.bgTone === v ? 'active' : '',
    onClick: () => updateTweak('bgTone', v)
  }, v))))));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));