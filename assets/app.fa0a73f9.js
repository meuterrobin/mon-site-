/* Inner Clarity: met à jour le titre et la description quand on change de page */
(function () {
  var P = {"/": {"title": "Inner Clarity | Régulation du système nerveux et méditation", "description": "Apprends à calmer ton système nerveux, à gérer ton mental et à retrouver la paix intérieure, avec une méditation expliquée par les neurosciences. Test gratuit."}, "/test": {"title": "Test gratuit : ta présence au quotidien | Inner Clarity", "description": "20 questions, environ 4 minutes. Choisis ce que tu aimerais régler (stress, pensées, concentration, décisions, confiance…), mesure ce que tu vis et ta présence, puis télécharge ton bilan. Gratuit, sans inscription."}, "/guide": {"title": "Comprendre son système nerveux et la méditation | Inner Clarity", "description": "Palpitations, tensions, fatigue, mental qui tourne en boucle : comprends comment tes pensées activent ton système nerveux et comment la méditation agit sur ton corps."}, "/a-propos": {"title": "Qui sommes-nous | Inner Clarity", "description": "Robin Meuter, kinésithérapeute formé en neurosciences et professeur de yoga, et Justine Meuter, psychologue et psychothérapeute EMDR : qui nous sommes et pourquoi Inner Clarity existe."}, "/formations": {"title": "Formations et conférences | Inner Clarity", "description": "Programmes et conférences pour apprendre à réguler ton système nerveux par la respiration, la pleine conscience et la visualisation."}, "/mentions-legales": {"title": "Mentions légales et confidentialité | Inner Clarity", "description": "Mentions légales et politique de confidentialité du site Inner Clarity. Le site ne collecte aucune donnée personnelle."}};
  function upd() {
    var p = location.pathname.replace(/\/+$/, '') || '/';
    if (/^\/test\//i.test(p)) p = '/test';
    var d = P[p] || P['/'];
    document.title = d.title;
    var m = document.querySelector('meta[name="description"]'); if (m) m.setAttribute('content', d.description);
    var c = document.querySelector('link[rel="canonical"]'); if (c) c.setAttribute('href', 'https://innerclarity.io' + (p === '/' ? '/' : p));
  }
  var ps = history.pushState;
  history.pushState = function () { var r = ps.apply(this, arguments); try { upd(); } catch (e) {} return r; };
  window.addEventListener('popstate', function () { try { upd(); } catch (e) {} });
})();

function _extends() {
  return (
    (_extends = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }),
    _extends.apply(null, arguments)
  );
} /* ═══ data.jsx ═══ */ // Emotions + organs data (guide)
/* ═══ data.jsx ═══ */ // Keep old EMOTIONS and ORGANS for the guide widgets
const EMOTIONS = {
  joie: {
    icon: "😊",
    name: "Joie",
    color: "#E8A117",
    tag: "Circuit de récompense",
    regions: ["striatum", "prefrontal", "cingulate"],
    regionNames: "Striatum · Cortex préfrontal · Cingulaire antérieur",
    connections: ["c-prefrontal-striatum", "c-cingulate-striatum", "c-prefrontal-cingulate"],
  },
  amour: {
    icon: "🥰",
    name: "Amour",
    color: "#E85D75",
    tag: "Zones du lien",
    regions: ["striatum", "insula", "cingulate"],
    regionNames: "Noyau accumbens · Insula · Cingulaire antérieur",
    connections: ["c-striatum-accumbens", "c-insula-cingulate", "c-cingulate-striatum"],
  },
  peur: {
    icon: "😨",
    name: "Peur",
    color: "#6B4B9A",
    tag: "Zones d'alerte",
    regions: ["amygdala", "hypothalamus", "hippocampus"],
    regionNames: "Amygdale · Hypothalamus · Hippocampe",
    connections: ["c-amygdala-hypothalamus", "c-amygdala-hippocampus"],
  },
  colere: {
    icon: "😠",
    name: "Colère",
    color: "#D64545",
    tag: "Zones d'alerte",
    regions: ["amygdala", "hypothalamus", "prefrontal"],
    regionNames: "Amygdale · Hypothalamus · Cortex préfrontal",
    connections: ["c-amygdala-hypothalamus", "c-amygdala-prefrontal"],
  },
  tristesse: {
    icon: "😢",
    name: "Tristesse",
    color: "#4A7FD1",
    tag: "Zones du repli",
    regions: ["cingulate", "insula", "prefrontal"],
    regionNames: "Cingulaire subgénual · Insula · Cortex préfrontal",
    connections: ["c-insula-cingulate", "c-insula-prefrontal", "c-prefrontal-cingulate"],
  },
  stress: {
    icon: "😰",
    name: "Stress",
    color: "#E8862E",
    tag: "Zones d'alerte",
    regions: ["amygdala", "hypothalamus", "hippocampus", "prefrontal"],
    regionNames: "Amygdale · Hypothalamus · Hippocampe · Préfrontal",
    connections: ["c-amygdala-hypothalamus", "c-amygdala-hippocampus", "c-amygdala-prefrontal"],
  },
};
const ORGANS = [
  { id: "coeur", name: "Le Cœur", sympa: "Rythme accéléré, palpitations, hausse de tension.", para: "Rythme calme, régulier et apaisé." },
  { id: "poumons", name: "Poumons", sympa: "Respiration courte, haute et saccadée.", para: "Respiration profonde, ample et abdominale." },
  {
    id: "estomac",
    name: "Estomac",
    sympa: "Digestion bloquée, boule au ventre, nausées.",
    para: "Digestion fluide, sensation de légèreté.",
  },
  { id: "intestins", name: "Intestins", sympa: "Ventre tendu, crampes, transit perturbé.", para: "Ventre souple, transit régulier." },
  { id: "muscles", name: "Muscles", sympa: "Nuque raide, mâchoires serrées, épaules hautes.", para: "Corps relâché, muscles détendus." },
  {
    id: "vessie",
    name: "Vessie",
    sympa: "Envie pressante et soudaine (urgence liée au stress).",
    para: "Fonctionnement normal, aucune urgence.",
  },
  { id: "bouche", name: "Bouche", sympa: "Sèche, pâteuse, difficulté à avaler.", para: "Normalement hydratée, salivation fluide." },
];
window.EMOTIONS = EMOTIONS;
window.ORGANS = ORGANS; /* ═══ icons.jsx ═══ */ // Minimal icon components (replacing lucide-react)
const Icon = ({ children, size = 24, stroke = 1.6, ...rest }) =>
  /*#__PURE__*/ React.createElement(
    "svg",
    _extends(
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: stroke,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      rest,
    ),
    children,
  );
const MenuIcon = (p) =>
  /*#__PURE__*/ React.createElement(
    Icon,
    p,
    /*#__PURE__*/ React.createElement("line", { x1: "4", y1: "7", x2: "20", y2: "7" }),
    /*#__PURE__*/ React.createElement("line", { x1: "4", y1: "17", x2: "20", y2: "17" }),
  );
const XIcon = (p) =>
  /*#__PURE__*/ React.createElement(
    Icon,
    p,
    /*#__PURE__*/ React.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
    /*#__PURE__*/ React.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
  );
const ArrowRightIcon = (p) =>
  /*#__PURE__*/ React.createElement(
    Icon,
    p,
    /*#__PURE__*/ React.createElement("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
    /*#__PURE__*/ React.createElement("polyline", { points: "12 5 19 12 12 19" }),
  );
const BrainIcon = (p) =>
  /*#__PURE__*/ React.createElement(
    Icon,
    _extends({}, p, { stroke: 1.2 }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M9.5 3a3 3 0 0 0-3 3v1a3 3 0 0 0-2 5 3 3 0 0 0 2 5v1a3 3 0 0 0 3 3c.83 0 1.5-.67 1.5-1.5V4.5C11 3.67 10.33 3 9.5 3z",
    }),
    /*#__PURE__*/ React.createElement("path", {
      d: "M14.5 3a3 3 0 0 1 3 3v1a3 3 0 0 1 2 5 3 3 0 0 1-2 5v1a3 3 0 0 1-3 3c-.83 0-1.5-.67-1.5-1.5V4.5C13 3.67 13.67 3 14.5 3z",
    }),
  );
const ShareIcon = (p) =>
  /*#__PURE__*/ React.createElement(
    Icon,
    p,
    /*#__PURE__*/ React.createElement("circle", { cx: "18", cy: "5", r: "3" }),
    /*#__PURE__*/ React.createElement("circle", { cx: "6", cy: "12", r: "3" }),
    /*#__PURE__*/ React.createElement("circle", { cx: "18", cy: "19", r: "3" }),
    /*#__PURE__*/ React.createElement("line", { x1: "8.59", y1: "13.51", x2: "15.42", y2: "17.49" }),
    /*#__PURE__*/ React.createElement("line", { x1: "15.41", y1: "6.51", x2: "8.59", y2: "10.49" }),
  );
const RotateIcon = (p) =>
  /*#__PURE__*/ React.createElement(
    Icon,
    p,
    /*#__PURE__*/ React.createElement("polyline", { points: "1 4 1 10 7 10" }),
    /*#__PURE__*/ React.createElement("path", { d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10" }),
  );
Object.assign(window, { Icon, MenuIcon, XIcon, ArrowRightIcon, BrainIcon, ShareIcon, RotateIcon }); /* ═══ navigation.jsx ═══ */ // Floating hamburger + overlay menu
const { useState } = React;
function Navigation({ route, setRoute }) {
  const [open, setOpen] = useState(false);
  const go = (r) => {
    setOpen(false);
    setRoute(r);
    window.scrollTo({ top: 0 });
  };
  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    /*#__PURE__*/ React.createElement(
      "header",
      { style: { position: "fixed", top: 0, right: 0, zIndex: 50, padding: 24, pointerEvents: "none" } },
      /*#__PURE__*/ React.createElement(
        "button",
        {
          onClick: () => setOpen(true),
          "aria-label": "Menu",
          style: {
            pointerEvents: "auto",
            padding: 12,
            background: "#fff",
            borderRadius: 9999,
            border: "1px solid #f0f0f1",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background .2s",
          },
          onMouseOver: (e) => (e.currentTarget.style.background = "#f5f5f7"),
          onMouseOut: (e) => (e.currentTarget.style.background = "#fff"),
        },
        /*#__PURE__*/ React.createElement(MenuIcon, { size: 24 }),
      ),
    ),
    open &&
      /*#__PURE__*/ React.createElement(
        "div",
        {
          style: {
            position: "fixed",
            inset: 0,
            zIndex: 60,
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            animation: "fade .3s ease",
          },
        },
        /*#__PURE__*/ React.createElement(
          "div",
          { style: { padding: 24, display: "flex", justifyContent: "flex-end" } },
          /*#__PURE__*/ React.createElement(
            "button",
            {
              onClick: () => setOpen(false),
              style: {
                padding: 12,
                background: "#f5f5f7",
                borderRadius: 9999,
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              },
            },
            /*#__PURE__*/ React.createElement(XIcon, { size: 24 }),
          ),
        ),
        /*#__PURE__*/ React.createElement(
          "nav",
          {
            style: {
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: 28,
              padding: "32px clamp(32px, 8vw, 64px) 0",
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              color: "#111",
            },
          },
          /*#__PURE__*/ React.createElement(
            "button",
            { onClick: () => go("home"), style: { ...navLinkStyle, color: route === "home" ? "#14362B" : "#111" } },
            "Accueil",
          ),
          /*#__PURE__*/ React.createElement(
            "button",
            { onClick: () => go("test"), style: { ...navLinkStyle, color: route === "test" ? "#14362B" : "#111" } },
            "Test",
          ),
          /*#__PURE__*/ React.createElement(
            "button",
            { onClick: () => go("guide"), style: { ...navLinkStyle, color: route === "guide" ? "#14362B" : "#111" } },
            "Comprendre le Syst\xE8me Nerveux",
          ),
          /*#__PURE__*/ React.createElement(
            "button",
            { onClick: () => go("about"), style: { ...navLinkStyle, color: route === "about" ? "#14362B" : "#111" } },
            "Qui sommes-nous ?",
          ),
        ),
      ),
    /*#__PURE__*/ React.createElement(
      "style",
      null,
      `
        @keyframes fade { from { opacity:0 } to { opacity:1 } }
      `,
    ),
  );
}
const navLinkStyle = {
  background: "transparent",
  border: "none",
  padding: 0,
  cursor: "pointer",
  font: "inherit",
  color: "inherit",
  textAlign: "left",
  transition: "color .2s",
};
window.Navigation = Navigation;
/* ═══ test components (welcome + quiz + result + radar) ═══ */ const ROBIN_PHOTO = "/assets/robin-meuter.webp";
const JUSTINE_PHOTO = "/assets/justine-meuter.webp";
const LOGO_SRC = "/assets/logo.png";
const testFont = "'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif";
const testFontSerif = "'Fraunces', Georgia, serif";
const testEase = "cubic-bezier(0.22, 0.61, 0.36, 1)";
/* ═══ Test présence : données ═══ */ const IC_SCALE = [
  ["Pas du tout", 0],
  ["Un peu", 25],
  ["Moyennement", 50],
  ["Beaucoup", 75],
  ["Tout \xE0 fait", 100],
].map(([label, value]) => ({ label, value }));
const IC_SCALE_OPTS = IC_SCALE.map((o) => ({ key: o.value, label: o.label, p: o.value }));
const IC_THEME_ORDER = ["stress", "pensees", "concentration", "decision", "bonheur", "confiance", "procrastination"];
const IC_THEMES = {
  stress: {
    card: "Me sentir moins stressé(e)",
    name: "Stress et anxiété",
    scoreLabel: "Ton niveau de stress",
    short: "ton stress",
    symptom: "stress et anxiété",
    questions: [
      ["Je fais tout dans l'urgence, très vite.", "L'esprit est déjà à la chose suivante"],
      ["Je suis tendu(e) même quand tout va bien, comme si j'étais toujours sur mes gardes.", "Le corps reste en mode alerte"],
      ["J'imagine le pire avant même que les choses arrivent.", "L'esprit est dans le futur"],
      ["Le soir, j'ai du mal à décrocher de ma journée.", "L'esprit est resté dans la journée"],
      ["Même quand j'ai du temps libre, je n'arrive pas à me poser.", "Le corps ne sait plus redescendre"],
    ],
  },
  pensees: {
    card: "Arrêter de trop penser",
    name: "Je pense trop",
    scoreLabel: "Ta surchauffe mentale",
    short: "ta surchauffe mentale",
    symptom: "pensées qui tournent en boucle",
    questions: [
      ["Je rejoue des conversations dans ma tête en me demandant ce que j'aurais dû dire.", "L'esprit est dans le passé"],
      ["Je mets du temps à m'endormir parce que mes pensées tournent.", "Le mental ne s'arrête plus"],
      ["Une petite remarque peut me trotter dans la tête pendant des heures.", "L'esprit reste accroché au passé"],
      ["Même dans un moment agréable, une partie de ma tête est ailleurs.", "Absent de l'instant"],
      ["J'ai l'impression d'avoir une conversation permanente dans ma tête.", "Le mental ne se tait jamais"],
    ],
  },
  concentration: {
    card: "Rester concentré(e) plus longtemps",
    name: "Concentration",
    scoreLabel: "Ta dispersion",
    short: "ta dispersion",
    symptom: "difficulté à se concentrer",
    questions: [
      ["Je n'arrive pas à rester concentré(e) longtemps sur une même tâche.", "L'attention ne tient pas dans l'instant"],
      ["Le moindre bruit ou mouvement autour de moi me fait décrocher.", "L'attention est happée par l'extérieur"],
      ["Quand j'essaie de me concentrer, mon esprit part très vite ailleurs.", "L'esprit s'échappe sans que je le remarque"],
      ["Je commence une tâche et je me retrouve sur mon téléphone sans m'en rendre compte.", "Pilote automatique"],
      ["Je relis plusieurs fois la même phrase sans l'avoir vraiment lue.", "Les yeux lisent, l'esprit est ailleurs"],
    ],
  },
  decision: {
    card: "Prendre mes décisions plus sereinement",
    name: "Prise de décision",
    scoreLabel: "Ton indécision",
    short: "ton indécision",
    symptom: "indécision",
    questions: [
      ["J'analyse toutes les situations possibles avant de prendre une décision.", "L'esprit est dans les scénarios futurs"],
      ["Face à un choix important, je me sens perdu(e).", "Coupé(e) de son ressenti"],
      ["Je repousse des décisions importantes parce que j'hésite trop.", "L'esprit tourne en rond au lieu d'écouter"],
      ["Une fois ma décision prise, je continue à me demander si c'était la bonne.", "L'esprit revient sans cesse en arrière"],
      [
        "Je demande l'avis de plusieurs personnes avant de trancher, parce que je ne me fais pas confiance.",
        "Coupé(e) de sa propre voix intérieure",
      ],
    ],
  },
  bonheur: {
    card: "Me sentir plus heureux(se)",
    name: "Bonheur",
    scoreLabel: "Ton insatisfaction",
    short: "ton insatisfaction",
    symptom: "insatisfaction",
    questions: [
      ["Je vis de beaux moments, mais je pense déjà à la suite.", "L'esprit est dans le futur"],
      ["J'ai l'impression que les journées passent sans que j'en profite vraiment.", "Pilote automatique"],
      ["Je me dis que je serai heureux(se) quand j'aurai atteint tel objectif.", "Le bonheur est repoussé à plus tard"],
      ["Je me compare aux autres et ça me pèse.", "L'esprit est dans la vie des autres"],
      [
        "Dès que j'ai un moment libre, je le remplis (téléphone, série, sortie) plutôt que de simplement être là.",
        "Je remplis le vide au lieu de l'habiter",
      ],
    ],
  },
  confiance: {
    card: "Avoir plus confiance en moi",
    name: "Confiance en soi",
    scoreLabel: "Ton manque de confiance",
    short: "ton manque de confiance",
    symptom: "manque de confiance",
    questions: [
      ["Je doute de moi, même pour des choses que je sais faire.", "Je crois mes pensées plutôt que mon expérience"],
      ["Ma petite voix intérieure est souvent dure avec moi.", "Le mental critique, et je l'écoute"],
      ["Avant de parler ou d'agir, je me demande ce que les autres vont penser de moi.", "L'esprit est dans la tête des autres"],
      ["Je n'ose pas me lancer, par peur de me tromper ou d'être jugé(e).", "L'esprit vit l'échec avant qu'il arrive"],
      ["Quand on me fait un compliment, j'ai du mal à y croire.", "La pensée « pas assez » parle plus fort que la réalité"],
    ],
  },
  procrastination: {
    card: "Arrêter de tout remettre à plus tard",
    name: "Procrastination",
    scoreLabel: "Ta procrastination",
    short: "ta procrastination",
    symptom: "procrastination",
    questions: [
      [
        "Je remets à plus tard des choses importantes, même quand j'ai le temps de les faire.",
        "L'esprit compte sur un « plus tard » idéal",
      ],
      ["Avant de commencer une tâche, je me sens lourd(e), comme si quelque chose me retenait.", "Le corps freine, et je ne l'écoute pas"],
      ["Je fais plein de petites choses faciles pour éviter celle qui compte vraiment.", "Je fuis l'inconfort au lieu de l'accueillir"],
      ["Je me sens coupable de ne pas avancer, mais je n'arrive pas à m'y mettre.", "Le mental juge au lieu d'agir"],
      ["J'attends d'être motivé(e) ou dans le bon état pour commencer.", "L'esprit attend un moment futur au lieu d'agir maintenant"],
    ],
  },
};
const IC_LEVERS = {
  pc: {
    name: "Pleine conscience",
    full: "Méditation de pleine conscience",
    on: "agit sur la pensée",
    text: "Observer tes pensées sans t'y accrocher, pour couper la réaction en chaîne dès le début.",
  },
  re: {
    name: "Respiration",
    full: "Respiration",
    on: "agit sur le système nerveux",
    text: "Rythmer ton souffle pour stimuler le nerf vague et faire sortir ton corps du mode alerte.",
  },
  vi: {
    name: "Visualisation",
    full: "Visualisation",
    on: "agit sur l'émotion",
    text: "Susciter volontairement des émotions positives pour renforcer les circuits de la sécurité.",
  },
  np: { name: "Neuroplasticité" },
};
/* Les 15 questions gardent leur numéro (les anciens liens de résultat restent valables) ;
   seul l'ordre d'affichage change, voir IC_P_BLOCKS. */
const IC_PRESENCE = [
  {
    text: "Je repère quand je me raconte une histoire dans ma tête, et je fais la différence avec ce qui se passe réellement.",
    learn: "La souffrance vient souvent de l'histoire, pas de ce qui arrive",
    lever: "pc",
    train:
      "En méditation de pleine conscience, tu t'entraînes à voir une pensée arriver et à la nommer, sans la suivre. Plus tu la repères tôt, moins l'histoire a le temps de grandir.",
  },
  {
    text: "Je pense que ma personnalité « est comme ça » et que je ne peux pas vraiment changer.",
    learn: "Le cerveau peut changer à tout âge",
    inverted: true,
    lever: "np",
    train:
      "Ton cerveau se recâble à chaque répétition. Une pratique courte et régulière renforce de nouveaux circuits, et ce que tu prenais pour ton caractère devient une habitude qui se change.",
  },
  {
    text: "Je suis à l'aise avec le fait de ne pas savoir, ou de ne pas tout contrôler.",
    learn: "Le besoin de contrôle nourrit le mental",
    lever: "pc",
    train:
      "Tu t'entraînes à rester avec une pensée ou une sensation inconfortable sans chercher à la régler tout de suite. Le besoin de contrôle se relâche quand ton corps apprend qu'il n'y a pas de danger.",
  },
  {
    text: "Je peux repenser à des moments difficiles de mon passé sans me laisser envahir par l'émotion.",
    learn: "On peut regarder son passé sans le revivre",
    lever: "re",
    train:
      "Tu apprends d'abord à calmer ton corps par la respiration, puis à observer un souvenir depuis cet état de calme. Le souvenir reste, c'est la réaction de ton corps qui change.",
  },
  {
    text: "Je perçois rapidement les tensions ou les inconforts dans mon corps.",
    learn: "Le corps parle avant d'avoir mal",
    lever: "pc",
    train:
      "Avec le scan corporel, tu passes ton attention sur chaque zone du corps, quelques minutes par jour. Tu repères les tensions quand elles commencent, pas quand elles font mal.",
  },
  {
    text: "Lorsque j'essaie de ressentir les différentes parties de mon corps (chaleur, picotements, énergie)…",
    learn: "Le corps entier peut se ressentir",
    lever: "pc",
    train:
      "Tu entraînes ton attention à ressentir une zone à la fois, des mains vers le reste du corps. La sensibilité s'étend avec la pratique, comme un muscle qui se réveille.",
    options: [
      { label: "Je me concentre sur mes mains, mais je ne ressens rien de particulier.", short: "Rien de particulier", value: 0 },
      { label: "Je ressens ces sensations uniquement dans mes extrémités (mains, pieds).", short: "Extrémités", value: 25 },
      { label: "Je les sens remonter dans mes membres (bras, jambes).", short: "Membres", value: 50 },
      { label: "Je les ressens aussi dans mon tronc (colonne, poitrine, cou).", short: "Tronc", value: 75 },
      { label: "Je les ressens distinctement dans tout mon corps.", short: "Tout le corps", value: 100 },
    ],
  },
  {
    text: "Quand je respire profondément, je sens où ma respiration circule librement et où elle bloque.",
    learn: "La respiration révèle les tensions cachées",
    lever: "re",
    train:
      "Tu apprends à suivre ton souffle dans le ventre, les côtes et la poitrine. Là où il ne passe pas, il y a une tension à relâcher, et la respiration devient ton outil pour la trouver.",
  },
  {
    text: "Quand je ressens une émotion, je remarque ce qu'elle fait dans mon corps (gorge serrée, ventre noué, chaleur).",
    learn: "Chaque émotion s'inscrit dans le corps",
    lever: "pc",
    train:
      "Tu t'entraînes à localiser chaque émotion dans ton corps au moment où elle arrive. Une émotion que tu sens monter, tu peux l'accompagner avant qu'elle déborde.",
  },
  {
    text: "Quand une tension revient dans mon corps (nuque, mâchoire, ventre), je sais quelle pensée l'a déclenchée.",
    learn: "Les blocages du corps portent la trace de nos pensées",
    lever: "pc",
    train:
      "Tu apprends à remonter la chaîne : de la tension à l'émotion, puis à la pensée qui l'a lancée. Une fois le lien vu, la tension n'est plus un mystère, c'est un signal.",
  },
  {
    text: "Je peux facilement rester 5 minutes dans le silence total, sans aucune distraction.",
    learn: "Le calme est accessible en quelques minutes",
    lever: "pc",
    train:
      "On commence court, avec une pratique guidée, puis on allonge. Le silence devient confortable quand ton système nerveux a appris à redescendre.",
  },
  {
    text: "Pendant une activité, mon attention est sur ce que je vois, entends et ressens, pas sur la suite ni sur ce qui s'est passé.",
    learn: "Les sens ramènent dans l'instant",
    lever: "pc",
    train:
      "Tu utilises tes sens comme point d'ancrage, plusieurs fois par jour : ce que tu vois, ce que tu entends, ce que tu touches. Chaque retour aux sens coupe le pilote automatique.",
  },
  {
    text: "Quand je mange, mon attention est sur le goût et les sensations, pas ailleurs dans ma tête.",
    learn: "Chaque geste du quotidien peut devenir une pratique",
    lever: "pc",
    train:
      "Tu choisis un geste du quotidien (un repas, une douche, un trajet) et tu en fais ta pratique du jour. Pas de temps en plus : tu entraînes ta présence dans ce que tu fais déjà.",
  },
  {
    text: "Quand mes pensées s'accélèrent, je sais les ralentir.",
    learn: "Le mental peut se ralentir",
    lever: "re",
    train:
      "La cohérence cardiaque ralentit le rythme du cœur, et le mental suit. Quelques minutes de respiration rythmée suffisent à faire redescendre le flot de pensées.",
  },
  {
    text: "Quand une émotion désagréable s'installe, je sais passer à un état plus positif en quelques minutes.",
    learn: "Une émotion se transforme quand on sait comment",
    lever: "vi",
    train:
      "Avec la visualisation, tu apprends à susciter volontairement une émotion positive. Ton cerveau renforce les circuits que tu utilises : plus tu pratiques, plus cet état devient facile à retrouver.",
  },
  {
    text: "Quand je me sens submergé(e), j'ai des outils concrets pour retrouver mon calme.",
    learn: "Le calme s'apprend, avec des outils simples",
    lever: "re",
    train:
      "Tu repars avec un protocole simple à utiliser en situation : une respiration pour freiner, puis un retour de l'attention dans le corps. Tu sais quoi faire dès les premières minutes.",
  },
];
/* Ordre d'affichage : du plus concret (le corps) au plus fin (le mental), puis le quotidien. */
const IC_P_BLOCKS = [
  { label: "Ton corps", ids: [4, 5, 6, 7, 8] },
  { label: "Ton mental", ids: [0, 2, 1, 3, 12] },
  { label: "Ton quotidien", ids: [9, 10, 11, 13, 14] },
];
const IC_P_ORDER = IC_P_BLOCKS.reduce((a, b) => a.concat(b.ids), []);
const IC_PILOT = {
  text: "As-tu déjà remarqué que tu fonctionnes en pilote automatique ?",
  sub: "Le pilote automatique, c'est quand tu fais quelque chose pendant que ton esprit est ailleurs. Par exemple, conduire, manger ou te doucher en pensant à autre chose.",
  options: [
    {
      id: "a",
      label: "Je ne sais pas vraiment ce que c'est.",
      result: (y) => "Le pilote automatique, c'est justement ce qu'on ne voit pas. Ta présence est à " + y + " %.",
    },
    {
      id: "b",
      label: "Non, je n'y prête pas attention. Je pense être plutôt dans le présent.",
      result: (y) =>
        "Tu penses être dans le présent, et pourtant ta présence est à " +
        y +
        " %. C'est le propre du pilote automatique : on ne le voit pas tant qu'on n'y prête pas attention.",
    },
    {
      id: "c",
      label: "J'y prête attention, et je remarque que je suis souvent ailleurs, mais je ne sais pas comment changer ça.",
      result: () => "Tu as déjà commencé à le voir. C'est la première étape, et la suite s'apprend.",
    },
    {
      id: "d",
      label: "Oui, et je m'entraîne à revenir dans le moment présent.",
      result: () => "Tu t'entraînes déjà. Tes réponses montrent où concentrer ton entraînement.",
    },
    {
      id: "e",
      label: "Je connais la présence et j'accède à un état de plénitude qui ne dépend d'aucun facteur extérieur.",
      result: () => "Tu connais déjà cet état. Tes réponses montrent ce qui t'en éloigne encore au quotidien.",
    },
  ],
};
const IC_SYMPTOMS = [
  "stress et anxiété",
  "pensées qui tournent en boucle",
  "difficulté à se concentrer",
  "indécision",
  "procrastination",
  "manque de confiance",
  "insatisfaction",
  "troubles du sommeil",
  "tensions dans le corps",
  "fatigue et brouillard mental",
  "irritabilité",
  "problèmes dans les relations",
];
const IC_STEPS = [
  ...[0, 1, 2, 3, 4].map((i) => ({ kind: "q", part: "s", i })),
  { kind: "mid" },
  ...IC_P_ORDER.map((i, n) => ({ kind: "q", part: "p", i, n })),
  { kind: "pilot" },
  { kind: "reveal" },
  { kind: "result" },
];
const IC_PRESET_POS = { choose: -1, intro: -1, question: 0, mid: 5, pilot: 21, reveal: 22, result: 23 };
const IC_MOCK = { s: [75, 100, 50, 75, 25], p: [25, 75, 50, 25, 50, 25, 50, 75, 25, 0, 50, 25, 50, 25, 50], pilot: "b" };
const icNb = (s) =>
  String(s)
    .replace(/ ([?!:;%»])/g, "\u00A0$1")
    .replace(/« /g, "«\u00A0");
const icScaleLabel = (v) => (IC_SCALE.find((o) => o.value === v) || {}).label || "–";
function icPresenceLabel(i, v, full) {
  const q = IC_PRESENCE[i];
  if (q.options) {
    const o = q.options.find((x) => x.value === v);
    return o ? (full ? o.label : o.short) : "–";
  }
  return icScaleLabel(v);
}
function icReadThemeParam() {
  try {
    const m = window.location.pathname.match(/^\/test\/([^\/]+)\/?$/i);
    const v = (m && decodeURIComponent(m[1])) || new URLSearchParams(window.location.search).get("theme");
    if (!v) return null;
    const k = v
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z]/g, "");
    return IC_THEMES[k] ? k : null;
  } catch (e) {
    return null;
  }
}
function icSymptomScore(themeId, answers) {
  return Math.round(IC_THEMES[themeId].questions.reduce((s, _, i) => s + (answers["s" + i] || 0), 0) / 5);
}
function icCompute(themeId, answers) {
  const T = IC_THEMES[themeId];
  const symptom = icSymptomScore(themeId, answers);
  const eff = IC_PRESENCE.map((q, i) => {
    const v = answers["p" + i] || 0;
    return q.inverted ? 100 - v : v;
  });
  const presence = Math.round(eff.reduce((a, b) => a + b, 0) / IC_PRESENCE.length);
  const hits = T.questions
    .map((q, i) => ({ q: q[0], insight: q[1], v: answers["s" + i] || 0 }))
    .filter((x) => x.v >= 75)
    .sort((a, b) => b.v - a.v)
    .slice(0, 3)
    .map((x) => ({ ...x, ans: icScaleLabel(x.v) }));
  const lows = IC_PRESENCE.map((q, i) => ({
    i,
    q: q.text,
    insight: q.learn,
    train: q.train,
    lever: q.lever,
    eff: eff[i],
    ans: icPresenceLabel(i, answers["p" + i] || 0),
  }))
    .sort((a, b) => a.eff - b.eff)
    .slice(0, 3);
  return { symptom, presence, hits, lows };
}
function useIcCount(target, dur = 1200, delay = 0) {
  const [v, setV] = React.useState(0);
  React.useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setV(target);
      return;
    }
    let raf = 0,
      t0 = 0;
    const to = setTimeout(() => {
      const tick = (t) => {
        if (!t0) t0 = t;
        const p = Math.min(1, (t - t0) / dur);
        setV(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => {
      clearTimeout(to);
      cancelAnimationFrame(raf);
    };
  }, [target]);
  return v;
}
function IcThemeIcon({ id, size = 22 }) {
  const p = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };
  switch (id) {
    case "stress":
      return /*#__PURE__*/ React.createElement(
        "svg",
        p,
        /*#__PURE__*/ React.createElement("path", { d: "M2.5 12h4l2.2-5.5 4.6 11 2.2-5.5h6" }),
      );
    case "pensees":
      return /*#__PURE__*/ React.createElement(
        "svg",
        p,
        /*#__PURE__*/ React.createElement("path", { d: "M12 11.25a1.5 1.5 0 0 1 3 0a3 3 0 0 1-6 0a4.5 4.5 0 0 1 9 0a6 6 0 0 1-12 0" }),
      );
    case "concentration":
      return /*#__PURE__*/ React.createElement(
        "svg",
        p,
        /*#__PURE__*/ React.createElement("circle", { cx: "12", cy: "12", r: "8.5" }),
        /*#__PURE__*/ React.createElement("circle", { cx: "12", cy: "12", r: "4.5" }),
        /*#__PURE__*/ React.createElement("circle", { cx: "12", cy: "12", r: "1", fill: "currentColor" }),
      );
    case "decision":
      return /*#__PURE__*/ React.createElement(
        "svg",
        p,
        /*#__PURE__*/ React.createElement("path", { d: "M12 21v-7.5" }),
        /*#__PURE__*/ React.createElement("path", { d: "M12 13.5 6.5 7" }),
        /*#__PURE__*/ React.createElement("path", { d: "M12 13.5 17.5 7" }),
        /*#__PURE__*/ React.createElement("path", { d: "M6 11V6.5h4.5" }),
        /*#__PURE__*/ React.createElement("path", { d: "M18 11V6.5h-4.5" }),
      );
    case "bonheur":
      return /*#__PURE__*/ React.createElement(
        "svg",
        p,
        /*#__PURE__*/ React.createElement("circle", { cx: "12", cy: "12", r: "4" }),
        /*#__PURE__*/ React.createElement("path", {
          d: "M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4",
        }),
      );
    case "confiance":
      return /*#__PURE__*/ React.createElement(
        "svg",
        p,
        /*#__PURE__*/ React.createElement("path", { d: "M2.5 19.5h19L15 8.5l-3.5 6L9 11z" }),
        /*#__PURE__*/ React.createElement("path", { d: "M15 8.5V4l3 1.2-3 1.2" }),
      );
    case "procrastination":
      return /*#__PURE__*/ React.createElement(
        "svg",
        p,
        /*#__PURE__*/ React.createElement("path", { d: "M6.5 3h11M6.5 21h11" }),
        /*#__PURE__*/ React.createElement("path", { d: "M8 3v2.5c0 2.5 4 4 4 6.5s-4 4-4 6.5V21M16 3v2.5c0 2.5-4 4-4 6.5s4 4 4 6.5V21" }),
      );
    default:
      return null;
  }
}
/* ═══ Test présence : PDF ═══ */ const IC_EMAIL = "meuter.robin@gmail.com";
const IC_CAL = "https://calendly.com/meuter-robin/30min";
const IC_DEFI_MAIN = "Prends conscience du temps que tu passes dans ta tête au cours de ta journée.";
const IC_DEFI_SUB = "Observe simplement, sans juger. On pourra en parler pendant l'analyse.";
const icCurve = (p) => 0.08 + 0.84 / (1 + Math.exp((p - 50) / 15));
const icLinkPts = (presence) => {
  const p0 = Math.max(8, Math.min(70, presence));
  return { p0, p1: Math.min(p0 + 30, 92) };
};
const icQuad = (A, B, C, t) => [
  (1 - t) * (1 - t) * A[0] + 2 * (1 - t) * t * C[0] + t * t * B[0],
  (1 - t) * (1 - t) * A[1] + 2 * (1 - t) * t * C[1] + t * t * B[1],
];
const icArcCtrl = (A, B) => {
  const dx = B[0] - A[0],
    dy = B[1] - A[1];
  return [(A[0] + B[0]) / 2 + dy * 0.32, (A[1] + B[1]) / 2 - dx * 0.32];
};
function icLinkCopy(T, symptom, presence) {
  const fem = /^Ta /.test(T.scoreLabel);
  return {
    title: "Plus ta présence monte, plus " + T.short + " descend.",
    text:
      symptom < 40
        ? T.scoreLabel +
          " est plutôt " +
          (fem ? "basse" : "bas") +
          " aujourd'hui. Mais avec une présence à " +
          presence +
          " %, " +
          (fem ? "elle" : "il") +
          " peut remonter vite dès que la pression augmente. Travailler ta présence, c'est te protéger avant que ça déborde."
        : "La présence n'est pas un trait de caractère. C'est une capacité qui s'entraîne, comme un muscle, et elle peut énormément progresser. Chaque pas gagné en présence agit directement sur " +
          T.short +
          ".",
  };
}
function icLoadScript(urls) {
  return urls.reduce(
    (p, src) =>
      p.catch(
        () =>
          new Promise((res, rej) => {
            const sc = document.createElement("script");
            sc.src = src;
            sc.onload = res;
            sc.onerror = () => {
              sc.remove();
              rej(new Error(src));
            };
            document.head.appendChild(sc);
          }),
      ),
    Promise.reject(),
  );
}
let icPdfLibs = null;
let icLogoData = null;
function icLoadLogo() {
  if (icLogoData) return Promise.resolve();
  return fetch(LOGO_SRC)
    .then((r) => r.blob())
    .then(
      (b) =>
        new Promise((res) => {
          const fr = new FileReader();
          fr.onload = () => {
            icLogoData = fr.result;
            res();
          };
          fr.onerror = () => res();
          fr.readAsDataURL(b);
        }),
    )
    .catch(() => {});
}
function icLoadPdfLibs() {
  if (!icPdfLibs) {
    icPdfLibs = (
      window.jspdf && window.jspdf.jsPDF
        ? Promise.resolve()
        : icLoadScript([
            "/assets/jspdf-2.5.1.umd.min.js",
            "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",
            "https://unpkg.com/jspdf@2.5.1/dist/jspdf.umd.min.js",
          ])
    )
      .then(() =>
        window.jspdf.jsPDF.API.autoTable
          ? null
          : icLoadScript([
              "/assets/jspdf-autotable-3.8.2.min.js",
              "https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js",
              "https://unpkg.com/jspdf-autotable@3.8.2/dist/jspdf.plugin.autotable.min.js",
            ]),
      )
      .then(() => icLoadLogo())
      .then(() => window.jspdf.jsPDF)
      .catch((e) => {
        icPdfLibs = null;
        throw e;
      });
  }
  return icPdfLibs;
}
const icPdfTxt = (s) =>
  icNb(String(s))
    .replace(/…/g, "...")
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, "-")
    .replace(/œ/g, "oe")
    .replace(/\u202F/g, "\u00A0")
    .replace(/[^\x00-\xFF]/g, "");
const icRGB = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
function icBuildPdf(JsPDF, d, k2) {
  const doc = new JsPDF({ unit: "mm", format: "a4", orientation: "portrait", compress: true });
  const W = 210,
    H = 297,
    M = 15,
    CW = W - 2 * M;
  const G = "#14362B",
    G2 = "#527d54",
    SOFT = "#5a5a5a",
    MUTED = "#756f64";
  const t = icPdfTxt,
    rgb = icRGB,
    TOP = { baseline: "top" };
  const fill = (h) => doc.setFillColor(...rgb(h)),
    ink = (h) => doc.setTextColor(...rgb(h)),
    stroke = (h) => doc.setDrawColor(...rgb(h));
  const font = (f, s, z) => {
    doc.setFont(f, s);
    doc.setFontSize(z);
  };
  const LH = 1.3,
    lh = (z) => z * LH * 0.3528;
  doc.setLineHeightFactor(LH);
  const caps = (s, x, y, col, z = 7.2) => {
    font("helvetica", "bold", z);
    ink(col);
    doc.setCharSpace(0.35);
    doc.text(t(s).toUpperCase(), x, y, TOP);
    doc.setCharSpace(0);
  };
  const dateLong = new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
  const header = (title, sub) => {
    try {
      if (icLogoData) doc.addImage(icLogoData, "PNG", M, 11, 12, 12, "iclogo", "FAST");
    } catch (e) {}
    font("times", "normal", 18);
    ink(G);
    doc.text(t(title), M + 16, 10.8, TOP);
    caps(sub, M + 16, 19.2, G2, 7);
    font("helvetica", "normal", 8.5);
    ink(SOFT);
    doc.text(t(dateLong), W - M, 15.4, { baseline: "top", align: "right" });
    stroke(G);
    doc.setLineWidth(0.35);
    doc.line(M, 27, W - M, 27);
  };
  /* Page 1 */ const IP = 6,
    IW = CW - 2 * IP;
  const prep = (list, k) =>
    list.map((it) => {
      font("helvetica", "normal", 9 * k);
      const ql = doc.splitTextToSize(t(it.q), IW - 32);
      font("times", "normal", 12.5 * k);
      const il = doc.splitTextToSize(t(it.insight), IW - 5);
      return { it, ql, il, h: 3.4 + ql.length * lh(9 * k) + 1.4 + il.length * lh(12.5 * k) + 3.4 };
    });
  const groupH = (rows) => 10.5 + rows.reduce((s, r) => s + r.h, 0) + 1.5;
  font("helvetica", "normal", 10);
  const pl = d.pilotText ? doc.splitTextToSize(t(d.pilotText), 150) : [];
  const SC_Y = 33,
    SC_H = 46;
  const lk = icLinkCopy(d.T, d.symptom, d.presence);
  const BP = 6,
    VW = 54,
    TX = M + BP + VW + 8,
    TW = M + CW - BP - TX,
    TZ = 13,
    XZ = 8.8,
    SZ = 8.8;
  font("times", "italic", TZ);
  const btl = doc.splitTextToSize(t(lk.title), TW);
  font("helvetica", "normal", XZ);
  const btx = doc.splitTextToSize(t(lk.text), TW);
  const segs = [
    ["Envoie-moi ce PDF à ", 0],
    [IC_EMAIL, "mailto:" + IC_EMAIL],
    [" et réserve ton analyse gratuite : ", 0],
    ["calendly.com/meuter-robin/30min", IC_CAL],
  ];
  const segTot = segs.reduce((a, [s, u]) => {
    font("helvetica", u ? "bold" : "normal", SZ);
    return a + doc.getTextWidth(t(s));
  }, 0);
  const sendLines =
    segTot <= CW
      ? [[0, 1, 2, 3]]
      : [
          [0, 1],
          [2, 3],
        ];
  const tch = btl.length * lh(TZ) + 2 + btx.length * lh(XZ);
  const BH = Math.max(35, tch + 2 * BP),
    BY = SC_Y + SC_H + 6;
  const PLY = BY + BH + 7;
  const listY = PLY + (pl.length ? pl.length * lh(10) + 9 : 2);
  const LIMIT = H - 14 - sendLines.length * lh(SZ) - 5;
  let k1 = 1,
    R1 = null,
    R2 = null;
  for (const k of [1, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6]) {
    k1 = k;
    R1 = d.hits.length ? prep(d.hits, k) : null;
    R2 = prep(d.lows, k);
    if (listY + 10 + (R1 ? groupH(R1) + 4 : 0) + groupH(R2) <= LIMIT) break;
  }
  header("Ton bilan", d.T.name);
  fill("#f6f4ee");
  doc.roundedRect(M, SC_Y, CW, SC_H, 4, 4, "F");
  const score = (cx, label, v, col, bar) => {
    font("helvetica", "bold", 9);
    ink(SOFT);
    doc.text(t(label), cx, SC_Y + 8, { baseline: "top", align: "center" });
    font("times", "normal", 48);
    const nw = doc.getTextWidth(String(v));
    font("times", "normal", 18);
    const pw = doc.getTextWidth("%");
    const sx = cx - (nw + 1.2 + pw) / 2,
      base = SC_Y + 33;
    font("times", "normal", 48);
    ink(col);
    doc.text(String(v), sx, base);
    font("times", "normal", 18);
    ink("#b0a9a0");
    doc.text("%", sx + nw + 1.2, base);
    const bw = 48,
      bx = cx - bw / 2,
      by = base + 5;
    fill("#e8e2d6");
    doc.roundedRect(bx, by, bw, 1.6, 0.8, 0.8, "F");
    if (v > 0) {
      fill(bar);
      doc.roundedRect(bx, by, Math.max(1.6, (bw * v) / 100), 1.6, 0.8, 0.8, "F");
    }
  };
  score(M + CW / 4, d.T.scoreLabel, d.symptom, "#b8692f", "#d98142");
  stroke("#e0dacd");
  doc.setLineWidth(0.25);
  doc.line(M + CW / 2, SC_Y + 8, M + CW / 2, SC_Y + 40);
  score(M + (CW * 3) / 4, "Ta présence", d.presence, G, G2);
  if (pl.length) {
    font("helvetica", "normal", 10);
    ink("#4a4a4a");
    doc.text(pl, W / 2, PLY, { baseline: "top", align: "center" });
  }
  let y = listY;
  font("times", "normal", 17);
  ink(G);
  doc.text(t("Ce que tes réponses montrent"), M, y, TOP);
  y += 10;
  const drawGroup = (title, rows) => {
    const h = groupH(rows);
    fill("#faf8f4");
    stroke("#ebe8e2");
    doc.setLineWidth(0.25);
    doc.roundedRect(M, y, CW, h, 3.5, 3.5, "FD");
    caps(title, M + IP, y + 5.4, G2);
    let yy = y + 10.5;
    rows.forEach((r, i) => {
      if (i) {
        stroke("#ebe6dc");
        doc.setLineWidth(0.2);
        doc.line(M + IP, yy, M + CW - IP, yy);
      }
      const qy = yy + 3.4;
      font("helvetica", "normal", 9 * k1);
      ink("#6a6a6a");
      doc.text(r.ql, M + IP, qy, TOP);
      const lbl = t(r.it.ans).toUpperCase(),
        cs = 0.25;
      font("helvetica", "bold", 6.4);
      const bw = doc.getTextWidth(lbl) + cs * (lbl.length - 1) + 5,
        bh = 4.4,
        bx = M + CW - IP - bw,
        by = qy - 0.6;
      fill("#efebe3");
      doc.roundedRect(bx, by, bw, bh, 2.2, 2.2, "F");
      ink("#8a847a");
      doc.setCharSpace(cs);
      doc.text(lbl, bx + 2.5, by + bh / 2 + 0.1, { baseline: "middle" });
      doc.setCharSpace(0);
      const iy = qy + r.ql.length * lh(9 * k1) + 1.4;
      fill("#7fa98c");
      doc.circle(M + IP + 1, iy + lh(12.5 * k1) / 2 - 0.2, 0.85, "F");
      font("times", "normal", 12.5 * k1);
      ink(G);
      doc.text(r.il, M + IP + 4.5, iy, TOP);
      yy += r.h;
    });
    y += h + 4;
  };
  if (R1) drawGroup("Ce que ça révèle", R1);
  drawGroup("Ce que ça apprend", R2);
  const ok1 = y - 4 <= LIMIT;
  const SL_Y = Math.min(y + 1, H - 14 - sendLines.length * lh(SZ));
  fill("#f6f4ee");
  doc.roundedRect(M, BY, CW, BH, 4, 4, "F");
  const vx0 = M + BP + 1,
    vx1 = M + BP + VW,
    legT = BY + BH - 6.6,
    vy1 = legT - 4.8,
    vy0 = BY + 9;
  const PX = (p) => vx0 + 2.5 + ((vx1 - vx0 - 4.5) * p) / 100,
    PY = (p) => vy1 - 1.5 - (vy1 - vy0 - 3) * icCurve(p);
  font("helvetica", "bold", 6.4);
  ink("#b8692f");
  doc.text(t(d.T.scoreLabel), vx0, BY + 4.6, TOP);
  stroke("#d8d2c6");
  doc.setLineWidth(0.3);
  doc.line(vx0, vy0, vx0, vy1);
  doc.line(vx0, vy1, vx1, vy1);
  doc.setLineCap("round");
  doc.setLineWidth(0.9);
  const cA = rgb("#d98142"),
    cB = rgb(G2);
  for (let i = 0; i < 50; i++) {
    const f = i / 49;
    doc.setDrawColor(...cA.map((v, j) => Math.round(v + (cB[j] - v) * f)));
    doc.line(PX(i * 2), PY(i * 2), PX(i * 2 + 2), PY(i * 2 + 2));
  }
  const { p0, p1 } = icLinkPts(d.presence),
    A = [PX(p0), PY(p0)],
    B = [PX(p1), PY(p1)],
    C = icArcCtrl(A, B);
  stroke("#cfc9bd");
  doc.setLineWidth(0.3);
  doc.setLineDashPattern([0.8, 0.8], 0);
  doc.line(A[0], A[1] + 2.4, A[0], vy1);
  const arc = [];
  for (let i = 0; i <= 14; i++) arc.push(icQuad(A, B, C, 0.16 + (0.66 * i) / 14));
  stroke(G2);
  doc.setLineWidth(0.45);
  doc.setLineDashPattern([1, 0.8], 0);
  doc.lines(
    arc.slice(1).map((q, i) => [q[0] - arc[i][0], q[1] - arc[i][1]]),
    arc[0][0],
    arc[0][1],
    [1, 1],
    "S",
  );
  doc.setLineDashPattern([], 0);
  const tip = icQuad(A, B, C, 0.86),
    pre = icQuad(A, B, C, 0.8),
    ul = Math.hypot(tip[0] - pre[0], tip[1] - pre[1]) || 1,
    u = [(tip[0] - pre[0]) / ul, (tip[1] - pre[1]) / ul];
  const bs = [tip[0] - u[0] * 1.7, tip[1] - u[1] * 1.7];
  fill(G2);
  doc.triangle(tip[0], tip[1], bs[0] - u[1] * 0.9, bs[1] + u[0] * 0.9, bs[0] + u[1] * 0.9, bs[1] - u[0] * 0.9, "F");
  fill("#ffffff");
  stroke(G2);
  doc.setLineWidth(0.45);
  doc.circle(B[0], B[1], 1.3, "FD");
  fill("#ffffff");
  doc.circle(A[0], A[1], 2, "F");
  fill(G);
  doc.circle(A[0], A[1], 1.35, "F");
  doc.setLineCap("butt");
  font("helvetica", "bold", 6.2);
  ink(G2);
  doc.text(t(d.presence + " %"), A[0], vy1 + 1.2, { baseline: "top", align: "center" });
  doc.text(t("Ta présence"), vx1, vy1 + 1.2, { baseline: "top", align: "right" });
  font("helvetica", "normal", 6.2);
  ink(SOFT);
  fill(G);
  doc.circle(vx0 + 0.9, legT + 1.05, 0.9, "F");
  const l1 = t("Toi aujourd'hui");
  doc.text(l1, vx0 + 2.6, legT, TOP);
  const lx = vx0 + 2.6 + doc.getTextWidth(l1) + 4;
  fill("#ffffff");
  stroke(G2);
  doc.setLineWidth(0.35);
  doc.circle(lx + 0.9, legT + 1.05, 0.8, "FD");
  doc.text(t("Avec plus de présence"), lx + 2.6, legT, TOP);
  stroke("#e0dacd");
  doc.setLineWidth(0.25);
  doc.line(TX - 4, BY + BP, TX - 4, BY + BH - BP);
  let ty = BY + (BH - tch) / 2;
  font("times", "italic", TZ);
  ink(G);
  doc.text(btl, TX, ty, TOP);
  ty += btl.length * lh(TZ) + 2;
  font("helvetica", "normal", XZ);
  ink("#4a4a4a");
  doc.text(btx, TX, ty, TOP);
  sendLines.forEach((ln, li) => {
    const parts = ln.map((si, j) => {
      const [s, url] = segs[si];
      const txt = t(j === 0 ? s.replace(/^ /, "") : s);
      font("helvetica", url ? "bold" : "normal", SZ);
      return { txt, url, w: doc.getTextWidth(txt) };
    });
    let x = W / 2 - parts.reduce((a, p) => a + p.w, 0) / 2;
    const yy = SL_Y + li * lh(SZ);
    parts.forEach((p) => {
      font("helvetica", p.url ? "bold" : "normal", SZ);
      ink(p.url ? G : SOFT);
      doc.text(p.txt, x, yy, TOP);
      if (p.url) {
        doc.link(x, yy - 0.4, p.w, lh(SZ), { url: p.url });
        stroke(G2);
        doc.setLineWidth(0.2);
        doc.line(x, yy + SZ * 0.3528 * 0.92, x + p.w, yy + SZ * 0.3528 * 0.92);
      }
      x += p.w;
    });
  });
  /* Page 2 */ doc.addPage();
  header("Toutes tes réponses", d.T.name);
  fill("#fcefe4");
  stroke("#efd3bb");
  doc.setLineWidth(0.2);
  doc.roundedRect(M, 31.4, 3.4, 3.4, 0.7, 0.7, "FD");
  font("helvetica", "normal", 7.8);
  ink(SOFT);
  doc.text(
    t("Fond coloré : points d'attention (Beaucoup ou Tout \xE0 fait pour ce que tu vis, Pas du tout ou Un peu pour ta présence)."),
    M + 5.4,
    31.6,
    TOP,
  );
  const k = k2;
  const tbl = (head, body, hl, startY) =>
    doc.autoTable({
      startY,
      head: [head.map(t)],
      body: body.map((r) => r.map(t)),
      theme: "plain",
      margin: { left: M, right: M, top: 20, bottom: 14 },
      rowPageBreak: "avoid",
      styles: {
        font: "helvetica",
        fontSize: 8.6 * k,
        textColor: rgb("#1b1b1b"),
        cellPadding: { top: 1.7 * k, bottom: 1.7 * k, left: 2.4, right: 2.4 },
        valign: "middle",
        overflow: "linebreak",
        lineWidth: 0,
      },
      headStyles: {
        fillColor: rgb(G),
        textColor: rgb("#f5f3ee"),
        fontStyle: "bold",
        fontSize: 8 * k,
        cellPadding: { top: 2.1 * k, bottom: 2.1 * k, left: 2.4, right: 2.4 },
      },
      columnStyles: {
        0: { cellWidth: 7, halign: "center", textColor: rgb(MUTED), fontSize: 7.6 * k },
        2: { cellWidth: 42, textColor: rgb(G), fontStyle: "bold" },
      },
      didParseCell: (c) => {
        if (c.section !== "body") return;
        if (hl[c.row.index]) {
          c.cell.styles.fillColor = rgb("#fcefe4");
          if (c.column.index === 2) c.cell.styles.textColor = rgb("#b8692f");
        }
        if (c.column.index === 2 && String(c.cell.raw).length > 24) c.cell.styles.fontStyle = "normal";
      },
      didDrawCell: (c) => {
        if (c.section !== "body" || c.column.index !== 0) return;
        stroke("#ebe6dc");
        doc.setLineWidth(0.2);
        doc.line(M, c.cell.y + c.cell.height, W - M, c.cell.y + c.cell.height);
      },
    });
  const a = d.answers;
  tbl(
    ["", "Ce que tu vis · " + d.T.name, "Ta réponse"],
    d.T.questions.map((q, i) => [String(i + 1), q[0], icScaleLabel(a["s" + i])]),
    d.T.questions.map((_, i) => (a["s" + i] || 0) >= 75),
    38,
  );
  tbl(
    ["", "Ta présence", "Ta réponse"],
    IC_PRESENCE.map((q, i) => [String(i + 1), q.text + (q.inverted ? " (question inversée)" : ""), icPresenceLabel(i, a["p" + i], true)]),
    IC_PRESENCE.map((q, i) => {
      const v = a["p" + i];
      if (v == null) return false;
      return (q.inverted ? 100 - v : v) <= 25;
    }),
    doc.lastAutoTable.finalY + 5,
  );
  tbl(
    ["", "Pilote automatique (non compté dans le score)", "Ta réponse"],
    [["", IC_PILOT.text, d.pilotOpt ? d.pilotOpt.label : "–"]],
    [false],
    doc.lastAutoTable.finalY + 5,
  );
  const endY = doc.lastAutoTable.finalY;
  const FP = 7;
  font("times", "italic", 11.5);
  const dl = doc.splitTextToSize(t(IC_DEFI_MAIN), CW - 2 * FP);
  font("helvetica", "normal", 8.8);
  const dl2 = doc.splitTextToSize(t(IC_DEFI_SUB), CW - 2 * FP);
  const divY = 10.6 + dl.length * lh(11.5) + 1 + dl2.length * lh(8.8) + 4;
  const fh = divY + 18.2,
    fy = H - 13 - fh;
  fill(G);
  doc.roundedRect(M, fy, CW, fh, 4, 4, "F");
  caps("Ton défi des prochains jours", M + FP, fy + 6, "#8fb39b");
  font("times", "italic", 11.5);
  ink("#f5f3ee");
  doc.text(dl, M + FP, fy + 10.6, TOP);
  font("helvetica", "normal", 8.8);
  ink("#c9d8cd");
  doc.text(dl2, M + FP, fy + 10.6 + dl.length * lh(11.5) + 1, TOP);
  stroke("#2f5546");
  doc.setLineWidth(0.25);
  doc.line(M + FP, fy + divY, M + CW - FP, fy + divY);
  const cy = fy + divY + 4.5,
    c2 = M + CW / 2 + 2;
  caps("Ton analyse gratuite (30 minutes)", M + FP, cy, "#8fb39b", 6.6);
  caps("Envoie-moi ce PDF par email", c2, cy, "#8fb39b", 6.6);
  font("helvetica", "bold", 10);
  ink("#ffffff");
  const cal = "calendly.com/meuter-robin/30min";
  doc.text(cal, M + FP, cy + 4.6, TOP);
  doc.link(M + FP, cy + 4.2, doc.getTextWidth(cal), 4.6, { url: IC_CAL });
  doc.text(IC_EMAIL, c2, cy + 4.6, TOP);
  doc.link(c2, cy + 4.2, doc.getTextWidth(IC_EMAIL), 4.6, { url: "mailto:" + IC_EMAIL });
  const n = doc.getNumberOfPages();
  for (let i = 1; i <= n; i++) {
    doc.setPage(i);
    font("helvetica", "normal", 7.2);
    ink("#aaa49b");
    doc.text("Inner Clarity · Robin & Justine Meuter", M, H - 7.5);
    doc.text(i + " / " + n, W - M, H - 7.5, { align: "right" });
  }
  return { doc, ok: ok1 && n === 2 && endY + 5 <= fy };
}
const IC_INAPP = (() => {
  try {
    const u = navigator.userAgent || "";
    if (/Instagram/i.test(u)) return "Instagram";
    if (/Messenger|MESSENGER/.test(u)) return "Messenger";
    if (/FBAN|FBAV|FB_IAB|FBIOS/.test(u)) return "Facebook";
    if (/musical_ly|BytedanceWebview|TikTok/i.test(u)) return "TikTok";
    if (/LinkedInApp/i.test(u)) return "LinkedIn";
    if (/Snapchat/i.test(u)) return "Snapchat";
    return null;
  } catch (e) {
    return null;
  }
})();
function icBuildPdfFile(d) {
  return icLoadPdfLibs().then((JsPDF) => {
    let res;
    for (let k = 1; k >= 0.66; k -= 0.015) {
      res = icBuildPdf(JsPDF, d, k);
      if (res.ok) break;
    }
    const now = new Date(),
      p = (x) => String(x).padStart(2, "0");
    const name =
      "bilan-inner-clarity-" + d.themeId + "-" + now.getFullYear() + "-" + p(now.getMonth() + 1) + "-" + p(now.getDate()) + ".pdf";
    const blob = res.doc.output("blob");
    let file = null;
    try {
      file = new File([blob], name, { type: "application/pdf" });
    } catch (e) {}
    return { blob, name, file, url: URL.createObjectURL(blob) };
  });
}
function icSavePdf(x) {
  const a = document.createElement("a");
  a.href = x.url;
  a.download = x.name;
  a.rel = "noopener";
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  setTimeout(() => a.remove(), 1000);
}
function icCanShareFile(x) {
  try {
    return !!(x.file && navigator.share && navigator.canShare && navigator.canShare({ files: [x.file] }));
  } catch (e) {
    return false;
  }
}
function icEncodeResult(answers, pilot) {
  let s = "";
  for (let i = 0; i < 5; i++) s += Math.max(0, Math.min(4, Math.round((answers["s" + i] || 0) / 25)));
  for (let i = 0; i < 15; i++) s += Math.max(0, Math.min(4, Math.round((answers["p" + i] || 0) / 25)));
  return s + (pilot || "");
}
function icReadSaved() {
  try {
    if (!icReadThemeParam()) return null;
    const v = new URLSearchParams(window.location.search).get("r");
    if (!v || !/^[0-4]{20}[a-e]$/.test(v)) return null;
    const n = v
      .slice(0, 20)
      .split("")
      .map((c) => Number(c) * 25);
    return { s: n.slice(0, 5), p: n.slice(5, 20), pilot: v[20] };
  } catch (e) {
    return null;
  }
}
function icGeneratePDF(d) {
  return icBuildPdfFile(d).then((x) => {
    icSavePdf(x);
    return x;
  });
}
function icCopyFallback(s) {
  const ta = document.createElement("textarea");
  ta.value = s;
  ta.setAttribute("readonly", "");
  ta.style.cssText = "position:fixed;top:0;left:0;opacity:0";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
  } catch (e) {}
  ta.remove();
}
function icCopy(s) {
  if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(s).catch(() => icCopyFallback(s));
  icCopyFallback(s);
  return Promise.resolve();
}
/* ═══ Test présence : écrans ═══ */ function IctChoose({ current, onPick }) {
  return /*#__PURE__*/ React.createElement(
    "div",
    { className: "ict-stage ict-choose" },
    /*#__PURE__*/ React.createElement(
      "div",
      { className: "ict-choose-head" },
      /*#__PURE__*/ React.createElement(
        "h1",
        { className: "ict-title ict-f" },
        icNb("Qu'est-ce qui te pose le plus problème en ce moment ?"),
      ),
      /*#__PURE__*/ React.createElement(
        "p",
        { className: "ict-meta ict-f", style: { "--d": ".1s" } },
        "20 questions \xB7 4 minutes \xB7 r\xE9sultat imm\xE9diat",
      ),
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      { className: "ict-cards" },
      IC_THEME_ORDER.map((id, i) =>
        /*#__PURE__*/ React.createElement(
          "button",
          {
            key: id,
            type: "button",
            className: "ict-card" + (current === id ? " on" : ""),
            style: { "--i": i },
            onClick: () => onPick(id),
          },
          /*#__PURE__*/ React.createElement(
            "span",
            { className: "ict-card-ic" },
            /*#__PURE__*/ React.createElement(IcThemeIcon, { id: id }),
          ),
          /*#__PURE__*/ React.createElement("span", { className: "ict-card-label" }, IC_THEMES[id].card),
          /*#__PURE__*/ React.createElement("span", { className: "ict-card-arrow", "aria-hidden": "true" }, "\u2192"),
        ),
      ),
    ),
    React.createElement("p", { className: "ict-trust" }, "Gratuit \xB7 Sans inscription \xB7 Aucune donn\xE9e collect\xE9e"),
    React.createElement("a", { className: "ict-legal", href: "/mentions-legales" }, "Mentions l\xE9gales et confidentialit\xE9"),
  );
}
function IctIntro({ id, T, onStart }) {
  return /*#__PURE__*/ React.createElement(
    "div",
    { className: "ict-stage center" },
    /*#__PURE__*/ React.createElement(
      "div",
      { className: "ict-orb ict-f" },
      /*#__PURE__*/ React.createElement("span", { className: "ict-ring" }),
      /*#__PURE__*/ React.createElement("span", { className: "ict-ring r2" }),
      /*#__PURE__*/ React.createElement("span", { className: "ict-ring r3" }),
      /*#__PURE__*/ React.createElement(IcThemeIcon, { id: id, size: 32 }),
    ),
    /*#__PURE__*/ React.createElement("h1", { className: "ict-title ict-f", style: { "--d": ".12s" } }, T.name),
    /*#__PURE__*/ React.createElement(
      "p",
      { className: "ict-lead ict-f", style: { "--d": ".24s" } },
      "5 questions sur ce que tu vis, puis 15 sur ce qui se joue en dessous. 4 minutes. Pour chaque phrase, dis juste \xE0 quel point elle te ressemble. \xC0 la fin : ton score, ce qui l'explique et par o\xF9 commencer.",
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      { className: "ict-f", style: { "--d": ".36s" } },
      /*#__PURE__*/ React.createElement(
        "button",
        { type: "button", className: "ict-pill", onClick: onStart },
        "Commencer ",
        /*#__PURE__*/ React.createElement("span", { "aria-hidden": "true" }, "\u2192"),
      ),
    ),
  );
}
function IctQuestion({ kicker, count, text, sub, options, selected, onPick, long }) {
  const size = text.length > 105 ? " l" : text.length > 68 ? " m" : "";
  return /*#__PURE__*/ React.createElement(
    "div",
    { className: "ict-stage" },
    /*#__PURE__*/ React.createElement(
      "p",
      { className: "ict-kicker ict-f" },
      kicker,
      count && /*#__PURE__*/ React.createElement("span", null, count),
    ),
    /*#__PURE__*/ React.createElement("h2", { className: "ict-qtext ict-f" + size, style: { "--d": ".05s" } }, icNb(text)),
    sub && /*#__PURE__*/ React.createElement("p", { className: "ict-qsub ict-f", style: { "--d": ".1s" } }, icNb(sub)),
    /*#__PURE__*/ React.createElement(
      "div",
      { className: "ict-opts", role: "radiogroup" },
      options.map((o, i) =>
        /*#__PURE__*/ React.createElement(
          "button",
          {
            key: o.key,
            type: "button",
            role: "radio",
            "aria-checked": selected === o.key,
            className: "ict-opt" + (long ? " long" : "") + (selected === o.key ? " on" : ""),
            style: { "--i": i },
            onClick: () => onPick(o.key),
          },
          o.p != null && /*#__PURE__*/ React.createElement("span", { className: "ict-pie", style: { "--p": o.p }, "aria-hidden": "true" }),
          /*#__PURE__*/ React.createElement("span", null, icNb(o.label)),
        ),
      ),
    ),
  );
}
function IctMid({ T, score, onNext }) {
  const v = useIcCount(score, 1200, 300);
  return /*#__PURE__*/ React.createElement(
    "div",
    { className: "ict-stage center" },
    /*#__PURE__*/ React.createElement("p", { className: "ict-mid-label ict-f" }, T.scoreLabel),
    /*#__PURE__*/ React.createElement(
      "p",
      { className: "ict-big ict-f", style: { "--d": ".08s" }, "aria-label": score + " %" },
      v,
      /*#__PURE__*/ React.createElement("small", null, "%"),
    ),
    /*#__PURE__*/ React.createElement(
      "p",
      { className: "ict-mid-a ict-f", style: { "--d": ".9s" } },
      "Ce score mesure ce que tu ressens. Maintenant, cherchons d'o\xF9 \xE7a vient.",
    ),
    /*#__PURE__*/ React.createElement(
      "p",
      { className: "ict-mid-b ict-f", style: { "--d": "1.05s" } },
      icNb(
        "Les 15 questions suivantes évaluent ta présence. Certaines vont te sembler exigeantes : c'est normal, ce sont des capacités qui s'entraînent.",
      ),
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      { className: "ict-f", style: { "--d": "1.2s" } },
      /*#__PURE__*/ React.createElement(
        "button",
        { type: "button", className: "ict-pill", onClick: onNext },
        "Continuer ",
        /*#__PURE__*/ React.createElement("span", { "aria-hidden": "true" }, "\u2192"),
      ),
    ),
  );
}
function IctReveal({ T, onNext }) {
  return /*#__PURE__*/ React.createElement(
    "div",
    { className: "ict-stage center ict-reveal" },
    /*#__PURE__*/ React.createElement("h2", { className: "ict-rev-title ict-f" }, "Le manque de pr\xE9sence peut g\xE9n\xE9rer"),
    /*#__PURE__*/ React.createElement(
      "div",
      { className: "ict-chips" },
      IC_SYMPTOMS.map((s, i) =>
        /*#__PURE__*/ React.createElement(
          "span",
          { key: s, className: "ict-chip" + (s === T.symptom ? " hi" : ""), style: { "--i": i } },
          s,
        ),
      ),
    ),
    /*#__PURE__*/ React.createElement(
      "p",
      { className: "ict-rev-text ict-f", style: { "--d": "1.5s" } },
      "Tous ces sympt\xF4mes ont la m\xEAme racine. C'est pour \xE7a qu'en travaillant ta pr\xE9sence, tu agis sur tous \xE0 la fois.",
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      { className: "ict-f", style: { "--d": "1.7s" } },
      /*#__PURE__*/ React.createElement(
        "button",
        { type: "button", className: "ict-pill light", onClick: onNext },
        "Voir mon r\xE9sultat ",
        /*#__PURE__*/ React.createElement("span", { "aria-hidden": "true" }, "\u2192"),
      ),
    ),
  );
}
function IctInsight({ it }) {
  return /*#__PURE__*/ React.createElement(
    "div",
    { className: "ict-ins" },
    /*#__PURE__*/ React.createElement(
      "p",
      { className: "ict-ins-q" },
      icNb(it.q),
      " ",
      /*#__PURE__*/ React.createElement("b", null, it.ans),
    ),
    /*#__PURE__*/ React.createElement(
      "p",
      { className: "ict-ins-a" },
      /*#__PURE__*/ React.createElement("span", { "aria-hidden": "true" }, "\u2192"),
      icNb(it.insight),
    ),
  );
}
function IctLink({ T, symptom, presence }) {
  const c = icLinkCopy(T, symptom, presence);
  const { p0, p1 } = icLinkPts(presence);
  const X = (p) => 44 + p * 3.36,
    Y = (p) => 160 - icCurve(p) * 130;
  const curve = Array.from({ length: 51 }, (_, i) => X(i * 2).toFixed(1) + "," + Y(i * 2).toFixed(1)).join(" ");
  const A = [X(p0), Y(p0)],
    B = [X(p1), Y(p1)],
    C = icArcCtrl(A, B);
  const arc = Array.from({ length: 17 }, (_, i) =>
    icQuad(A, B, C, 0.14 + (0.7 * i) / 16)
      .map((v) => v.toFixed(1))
      .join(","),
  ).join(" ");
  return /*#__PURE__*/ React.createElement(
    "div",
    { className: "ict-lk ict-f", style: { "--d": ".7s" } },
    /*#__PURE__*/ React.createElement("p", { className: "ict-law" }, icNb(c.title)),
    /*#__PURE__*/ React.createElement(
      "svg",
      {
        className: "ict-lk-svg",
        viewBox: "0 0 400 200",
        role: "img",
        "aria-label": "Courbe : quand la présence monte, " + T.short + " descend. Toi aujourd'hui : " + presence + " % de présence.",
      },
      /*#__PURE__*/ React.createElement(
        "defs",
        null,
        /*#__PURE__*/ React.createElement(
          "linearGradient",
          { id: "ictLkGrad", gradientUnits: "userSpaceOnUse", x1: "44", y1: "0", x2: "380", y2: "0" },
          /*#__PURE__*/ React.createElement("stop", { offset: "0", stopColor: "#d98142" }),
          /*#__PURE__*/ React.createElement("stop", { offset: "1", stopColor: "#527d54" }),
        ),
        /*#__PURE__*/ React.createElement(
          "marker",
          {
            id: "ictLkHead",
            viewBox: "0 0 10 10",
            refX: "5",
            refY: "5",
            markerUnits: "userSpaceOnUse",
            markerWidth: "11",
            markerHeight: "11",
            orient: "auto",
          },
          /*#__PURE__*/ React.createElement("path", { d: "M0 0L10 5L0 10z", fill: "#527d54" }),
        ),
      ),
      /*#__PURE__*/ React.createElement("path", { d: "M28 14V178H392", fill: "none", stroke: "#e0dacd", strokeWidth: "1.5" }),
      /*#__PURE__*/ React.createElement("text", { x: "36", y: "20", className: "ict-lk-ax sym" }, T.scoreLabel),
      /*#__PURE__*/ React.createElement("text", { x: "392", y: "197", textAnchor: "end", className: "ict-lk-ax pre" }, "Ta pr\xE9sence"),
      /*#__PURE__*/ React.createElement("polyline", {
        points: curve,
        fill: "none",
        stroke: "url(#ictLkGrad)",
        strokeWidth: "4",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      /*#__PURE__*/ React.createElement("line", {
        x1: A[0],
        y1: A[1] + 13,
        x2: A[0],
        y2: "178",
        stroke: "#cfc9bd",
        strokeWidth: "1.5",
        strokeDasharray: "3 4",
      }),
      /*#__PURE__*/ React.createElement(
        "text",
        { x: A[0], y: "197", textAnchor: "middle", className: "ict-lk-ax pre" },
        presence + "\u00A0%",
      ),
      /*#__PURE__*/ React.createElement("polyline", {
        className: "ict-lk-arrow",
        points: arc,
        fill: "none",
        stroke: "#527d54",
        strokeWidth: "2",
        strokeDasharray: "5 5",
        strokeLinecap: "round",
        markerEnd: "url(#ictLkHead)",
      }),
      /*#__PURE__*/ React.createElement("circle", { cx: B[0], cy: B[1], r: "7.5", fill: "#fff", stroke: "#527d54", strokeWidth: "2.5" }),
      /*#__PURE__*/ React.createElement("circle", { className: "ict-lk-pulse", cx: A[0], cy: A[1], r: "16", fill: "#14362B" }),
      /*#__PURE__*/ React.createElement("circle", { cx: A[0], cy: A[1], r: "8", fill: "#14362B", stroke: "#fff", strokeWidth: "3" }),
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      { className: "ict-lk-legend" },
      /*#__PURE__*/ React.createElement("span", null, /*#__PURE__*/ React.createElement("i", { className: "me" }), "Toi aujourd'hui"),
      /*#__PURE__*/ React.createElement(
        "span",
        null,
        /*#__PURE__*/ React.createElement("i", { className: "next" }),
        "Avec plus de pr\xE9sence",
      ),
    ),
    /*#__PURE__*/ React.createElement("p", { className: "ict-lk-text" }, icNb(c.text)),
  );
}
function IctPriority({ it, n }) {
  const lv = IC_LEVERS[it.lever];
  return React.createElement(
    "div",
    { className: "ict-prio" },
    React.createElement(
      "div",
      { className: "ict-prio-top" },
      React.createElement("span", { className: "ict-prio-n" }, "Priorité " + n),
      lv && React.createElement("span", { className: "ict-lever" }, React.createElement("i", null), lv.name),
    ),
    React.createElement("h3", { className: "ict-prio-h" }, icNb(it.insight)),
    React.createElement("p", { className: "ict-prio-q" }, icNb(it.q), " ", React.createElement("b", null, it.ans)),
    it.train &&
      React.createElement(
        "p",
        { className: "ict-prio-how" },
        React.createElement("strong", null, "Comment ça s'entraîne"),
        icNb(it.train),
      ),
  );
}
function IctMethod({ lows }) {
  const mine = {};
  lows.forEach((x) => (mine[x.lever] = true));
  return React.createElement(
    "section",
    { className: "ict-method ict-f", style: { "--d": "1.1s" } },
    React.createElement("p", { className: "ict-defi-k" }, "L'accompagnement"),
    React.createElement("h2", { className: "ict-h2" }, "Comment on fait monter ta présence"),
    React.createElement(
      "p",
      { className: "ict-method-p" },
      icNb("La présence s'entraîne avec trois pratiques. Chacune agit sur un maillon précis, et tes réponses montrent par laquelle commencer."),
    ),
    ["pc", "re", "vi"].map((k, i) =>
      React.createElement(
        "div",
        { key: k, className: "ict-lv" },
        React.createElement("span", { className: "ict-lv-dot", "aria-hidden": "true" }, i + 1),
        React.createElement(
          "div",
          null,
          React.createElement("p", { className: "ict-lv-t" }, IC_LEVERS[k].full, React.createElement("span", null, IC_LEVERS[k].on)),
          React.createElement("p", { className: "ict-lv-d" }, IC_LEVERS[k].text),
          mine[k] && React.createElement("span", { className: "ict-lv-b" }, "Ta priorité"),
        ),
      ),
    ),
    React.createElement(
      "div",
      { className: "ict-facts" },
      React.createElement("div", null, React.createElement("b", null, "6"), React.createElement("span", null, "semaines")),
      React.createElement("div", null, React.createElement("b", null, "1 h"), React.createElement("span", null, "par semaine")),
      React.createElement("div", null, React.createElement("b", null, "100 %"), React.createElement("span", null, "en visio")),
    ),
    React.createElement(
      "p",
      { className: "ict-method-f" },
      icNb("Un suivi individuel : chaque semaine, une séance ensemble, puis un programme d'entraînement adapté à ton profil."),
    ),
  );
}
function IctResult({ themeId, answers, pilot, onRestart, keep }) {
  const T = IC_THEMES[themeId];
  const r = React.useMemo(() => icCompute(themeId, answers), [themeId, answers]);
  const sv = useIcCount(r.symptom, 1300, 250);
  const pv = useIcCount(r.presence, 1300, 400);
  const [pdf, setPdf] = React.useState("idle");
  const pilotOpt = IC_PILOT.options.find((o) => o.id === pilot);
  const pilotText = pilotOpt ? pilotOpt.result(r.presence) : null;
  const prios = r.lows.filter((x) => x.eff < 100);
  const busy = pdf === "busy";
  const pdfRef = React.useRef(null),
    pdfJob = React.useRef(null);
  const [copied, setCopied] = React.useState(false);
  const pdfData = { themeId, T, answers, pilotOpt, symptom: r.symptom, presence: r.presence, pilotText, hits: r.hits, lows: r.lows };
  const ensurePdf = () =>
    pdfRef.current
      ? Promise.resolve(pdfRef.current)
      : pdfJob.current ||
        (pdfJob.current = icBuildPdfFile(pdfData).then(
          (x) => (pdfRef.current = x),
          (e) => {
            pdfJob.current = null;
            throw e;
          },
        ));
  const resultPath = "/test/" + themeId + "?r=" + icEncodeResult(answers, pilot);
  React.useEffect(() => {
    icLoadPdfLibs().catch(() => {});
    if (keep) {
      try {
        window.history.replaceState(window.history.state, "", resultPath);
      } catch (e) {}
    }
    const id = setTimeout(() => {
      ensurePdf().catch(() => {});
    }, 1800);
    return () => clearTimeout(id);
  }, []);
  const deliver = (x) => {
    if (IC_INAPP) {
      if (icCanShareFile(x)) {
        navigator.share({ files: [x.file], title: "Mon bilan Inner Clarity" }).then(
          () => setPdf("done"),
          (e) => setPdf(e && e.name === "AbortError" ? "idle" : "inapp"),
        );
        return;
      }
      setPdf("inapp");
      return;
    }
    icSavePdf(x);
    setPdf("done");
  };
  const download = () => {
    if (busy) return;
    if (pdfRef.current) {
      deliver(pdfRef.current);
      return;
    }
    setPdf("busy");
    ensurePdf().then(deliver, () => setPdf("error"));
  };
  const copyLink = () => {
    icCopy(window.location.origin + resultPath).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };
  return /*#__PURE__*/ React.createElement(
    "div",
    { className: "ict-res" },
    /*#__PURE__*/ React.createElement(
      "section",
      { className: "ict-res-head" },
      /*#__PURE__*/ React.createElement(
        "p",
        { className: "ict-kicker ict-f" },
        "Ton r\xE9sultat",
        /*#__PURE__*/ React.createElement("span", null, T.name),
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        { className: "ict-scores" },
        /*#__PURE__*/ React.createElement(
          "div",
          { className: "ict-score sym ict-f", style: { "--d": ".1s" } },
          /*#__PURE__*/ React.createElement("p", { className: "ict-score-label" }, T.scoreLabel),
          /*#__PURE__*/ React.createElement(
            "p",
            { className: "ict-score-num", "aria-label": r.symptom + " %" },
            sv,
            /*#__PURE__*/ React.createElement("small", null, "%"),
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            { className: "ict-score-bar" },
            /*#__PURE__*/ React.createElement("i", { style: { width: r.symptom + "%" } }),
          ),
        ),
        /*#__PURE__*/ React.createElement("span", { className: "ict-sep", "aria-hidden": "true" }),
        /*#__PURE__*/ React.createElement(
          "div",
          { className: "ict-score pre ict-f", style: { "--d": ".2s" } },
          /*#__PURE__*/ React.createElement("p", { className: "ict-score-label" }, "Ta pr\xE9sence"),
          /*#__PURE__*/ React.createElement(
            "p",
            { className: "ict-score-num", "aria-label": r.presence + " %" },
            pv,
            /*#__PURE__*/ React.createElement("small", null, "%"),
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            { className: "ict-score-bar" },
            /*#__PURE__*/ React.createElement("i", { style: { width: r.presence + "%" } }),
          ),
        ),
      ),
      /*#__PURE__*/ React.createElement(IctLink, { T: T, symptom: r.symptom, presence: r.presence }),
    ),
    /*#__PURE__*/ React.createElement(
      "section",
      { className: "ict-f", style: { "--d": "1s" } },
      pilotText && /*#__PURE__*/ React.createElement("p", { className: "ict-pilot" }, icNb(pilotText)),
      /*#__PURE__*/ React.createElement("h2", { className: "ict-h2" }, "Ce que tes r\xE9ponses montrent"),
      r.hits.length > 0 &&
        /*#__PURE__*/ React.createElement(
          "div",
          { className: "ict-group" },
          /*#__PURE__*/ React.createElement("p", { className: "ict-group-k" }, "Ce que \xE7a r\xE9v\xE8le"),
          r.hits.map((it, i) => /*#__PURE__*/ React.createElement(IctInsight, { key: i, it: it })),
        ),
    ),
    prios.length > 0 &&
      React.createElement(
        "section",
        { className: "ict-f", style: { "--d": "1.05s" } },
        React.createElement("h2", { className: "ict-h2" }, prios.length > 1 ? "Tes " + prios.length + " priorit\xE9s" : "Ta priorit\xE9"),
        React.createElement(
          "p",
          { className: "ict-sub" },
          icNb("Ce sont les capacit\xE9s o\xF9 tu as le plus de marge aujourd'hui. Chacune s'entra\xEEne, et voici comment."),
        ),
        prios.map((it, i) => React.createElement(IctPriority, { key: it.i, it: it, n: i + 1 })),
      ),
    /*#__PURE__*/ React.createElement(
      "section",
      { className: "ict-defi ict-f", style: { "--d": "1.1s" } },
      /*#__PURE__*/ React.createElement("p", { className: "ict-defi-k" }, "Ton d\xE9fi des prochains jours"),
      /*#__PURE__*/ React.createElement("p", { className: "ict-defi-q" }, icNb(IC_DEFI_MAIN)),
      /*#__PURE__*/ React.createElement("p", { className: "ict-defi-t" }, icNb(IC_DEFI_SUB)),
    ),
    React.createElement(IctMethod, { lows: prios }),
    /*#__PURE__*/ React.createElement(
      "section",
      { className: "ict-final ict-f", style: { "--d": "1.2s" } },
      /*#__PURE__*/ React.createElement("h2", { className: "ict-final-h" }, "Ton analyse gratuite (30\xA0minutes)"),
      /*#__PURE__*/ React.createElement(
        "p",
        { className: "ict-final-p" },
        icNb(
          "On regarde ensemble tes résultats et ce qu'ils disent de toi. Si tu le souhaites, je t'explique comment on peut travailler ta présence ensemble. Aucune obligation : si ça ne t'intéresse pas, tu repars simplement avec cette analyse et une meilleure compréhension de toi.",
        ),
      ),
      /*#__PURE__*/ React.createElement(
        "a",
        { className: "ict-pill huge", href: IC_CAL, target: "_blank", rel: "noopener noreferrer" },
        "R\xE9server mon analyse gratuite ",
        /*#__PURE__*/ React.createElement("span", { "aria-hidden": "true" }, "\u2192"),
      ),
      /*#__PURE__*/ React.createElement(
        "p",
        { className: "ict-final-r" },
        "Pense \xE0 t\xE9l\xE9charger tes r\xE9sultats et \xE0 me les envoyer avant l'appel.",
      ),
    ),
    /*#__PURE__*/ React.createElement(
      "section",
      { className: "ict-send ict-f", style: { "--d": "1.3s" } },
      /*#__PURE__*/ React.createElement(
        "p",
        { className: "ict-send-t" },
        "N'oublie pas de t\xE9l\xE9charger ton r\xE9sultat pour me l'envoyer \xE0 ",
        /*#__PURE__*/ React.createElement("a", { href: "mailto:" + IC_EMAIL }, IC_EMAIL),
        ".",
      ),
      /*#__PURE__*/ React.createElement(
        "button",
        { type: "button", className: "ict-pill big", onClick: download, disabled: busy },
        busy
          ? "Préparation du PDF…"
          : /*#__PURE__*/ React.createElement(
              React.Fragment,
              null,
              /*#__PURE__*/ React.createElement(
                "svg",
                {
                  width: "19",
                  height: "19",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  "aria-hidden": "true",
                },
                /*#__PURE__*/ React.createElement("path", { d: "M12 4v11M7 10.5l5 5 5-5M5 20h14" }),
              ),
              "T\xE9l\xE9charger mon r\xE9sultat (PDF)",
            ),
      ),
      pdf === "error" &&
        /*#__PURE__*/ React.createElement(
          "p",
          { className: "ict-send-err" },
          "Le t\xE9l\xE9chargement n'a pas fonctionn\xE9. V\xE9rifie ta connexion et r\xE9essaie.",
        ),
      pdf === "done" &&
        !IC_INAPP &&
        pdfRef.current &&
        React.createElement(
          "p",
          { className: "ict-send-s ict-send-help" },
          icNb("Le t\xE9l\xE9chargement ne d\xE9marre pas ? "),
          React.createElement("a", { href: pdfRef.current.url, target: "_blank", rel: "noopener" }, "Ouvre ton bilan ici"),
        ),
      pdf === "inapp" &&
        React.createElement(
          "div",
          { className: "ict-inapp" },
          React.createElement(
            "p",
            null,
            React.createElement("strong", null, "Le t\xE9l\xE9chargement est bloqu\xE9 dans " + IC_INAPP + "."),
            icNb(
              "Ouvre cette page dans ton navigateur : touche les trois petits points en haut \xE0 droite, puis \xAB Ouvrir dans le navigateur \xBB. Tes r\xE9sultats seront toujours l\xE0.",
            ),
          ),
          React.createElement("p", { className: "ict-inapp-s" }, "Ou copie le lien de tes r\xE9sultats et colle-le dans Safari ou Chrome."),
          React.createElement(
            "button",
            { type: "button", className: "ict-copy" + (copied ? " ok" : ""), onClick: copyLink },
            copied ? "Lien copi\xE9" : "Copier le lien de mes r\xE9sultats",
          ),
        ),
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      { className: "ict-res-foot" },
      /*#__PURE__*/ React.createElement("button", { type: "button", className: "ict-link", onClick: onRestart }, "Refaire le test"),
      React.createElement("a", { className: "ict-link", href: "/mentions-legales" }, "Mentions l\xE9gales"),
    ),
  );
}
function InnerTest({ preset }) {
  const mock = !!preset && preset !== "choose" && preset !== "intro";
  const [entry, setEntry] = React.useState(() => (preset === "intro" || (!preset && icReadThemeParam()) ? "intro" : "choose"));
  const [theme, setTheme] = React.useState(() => (!preset && icReadThemeParam()) || (preset && preset !== "choose" ? "stress" : null));
  const [answers, setAnswers] = React.useState(() => {
    if (!mock) {
      const sv = !preset && icReadSaved();
      if (!sv) return {};
      const a = {};
      sv.s.forEach((v, i) => (a["s" + i] = v));
      sv.p.forEach((v, i) => (a["p" + i] = v));
      return a;
    }
    const a = {};
    IC_MOCK.s.forEach((v, i) => (a["s" + i] = v));
    IC_MOCK.p.forEach((v, i) => (a["p" + i] = v));
    return a;
  });
  const [pilot, setPilot] = React.useState(() => (mock ? IC_MOCK.pilot : ((!preset && icReadSaved()) || {}).pilot || null));
  const [pos, setPos] = React.useState(() => (preset ? (IC_PRESET_POS[preset] ?? -1) : icReadSaved() ? IC_PRESET_POS.result : -1));
  const [dir, setDir] = React.useState(1);
  const [leaving, setLeaving] = React.useState(false);
  const busy = React.useRef(false);
  const go = (next, d = 1, delay = 0, before) => {
    if (busy.current) return;
    busy.current = true;
    setTimeout(() => {
      setLeaving(true);
      setTimeout(() => {
        before && before();
        setDir(d);
        setPos(next);
        setLeaving(false);
        busy.current = false;
        window.scrollTo(0, 0);
      }, 280);
    }, delay);
  };
  const pick = (key, value) => {
    if (busy.current) return;
    setAnswers((a) => ({ ...a, [key]: value }));
    go(pos + 1, 1, 170);
  };
  const choose = (id) => {
    if (busy.current) return;
    if (id !== theme) {
      setAnswers({});
      setPilot(null);
    }
    if (!preset) {
      try {
        window.history.replaceState(window.history.state, "", "/test/" + id);
      } catch (e) {}
    }
    setTheme(id);
    go(0, 1, 170);
  };
  const restart = () =>
    go(-1, -1, 0, () => {
      if (!preset) {
        try {
          window.history.replaceState(window.history.state, "", "/test");
        } catch (e) {}
      }
      setEntry("choose");
      setTheme(null);
      setAnswers({});
      setPilot(null);
    });
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const n = parseInt(e.key, 10);
      if (!(n >= 1 && n <= 5)) return;
      const btn = document.querySelectorAll(".ict-screen:not(.is-out) .ict-opt")[n - 1];
      if (btn) btn.click();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const T = theme ? IC_THEMES[theme] : null;
  const baseTitle = React.useRef(document.title);
  React.useEffect(() => {
    if (preset) return;
    document.title = T ? "Test " + T.name.charAt(0).toLowerCase() + T.name.slice(1) + " | Inner Clarity" : baseTitle.current;
  }, [theme]);
  React.useEffect(
    () => () => {
      if (!preset) document.title = baseTitle.current;
    },
    [],
  );
  const step = pos >= 0 && T ? IC_STEPS[pos] : null;
  const done = pos < 0 ? 0 : pos <= 5 ? pos : pos <= 22 ? pos - 1 : 21;
  const showBar = !!step && step.kind !== "result";
  const showBack = !!step && step.kind !== "result";
  const dark = !!step && step.kind === "reveal";
  let content;
  if (!step) {
    content =
      entry === "intro" && T
        ? /*#__PURE__*/ React.createElement(IctIntro, { id: theme, T: T, onStart: () => go(0) })
        : /*#__PURE__*/ React.createElement(IctChoose, { current: theme, onPick: choose });
  } else if (step.kind === "q" && step.part === "s") {
    const key = "s" + step.i;
    content = /*#__PURE__*/ React.createElement(IctQuestion, {
      kicker: "Ce que tu vis",
      count: step.i + 1 + " / 5",
      text: T.questions[step.i][0],
      options: IC_SCALE_OPTS,
      selected: answers[key],
      onPick: (v) => pick(key, v),
    });
  } else if (step.kind === "q") {
    const q = IC_PRESENCE[step.i],
      key = "p" + step.i;
    content = /*#__PURE__*/ React.createElement(IctQuestion, {
      kicker: IC_P_BLOCKS[Math.floor(step.n / 5)].label,
      count: step.n + 1 + " / 15",
      text: q.text,
      options: q.options ? q.options.map((o) => ({ key: o.value, label: o.label, p: o.value })) : IC_SCALE_OPTS,
      long: !!q.options,
      selected: answers[key],
      onPick: (v) => pick(key, v),
    });
  } else if (step.kind === "mid") {
    content = /*#__PURE__*/ React.createElement(IctMid, { T: T, score: icSymptomScore(theme, answers), onNext: () => go(pos + 1) });
  } else if (step.kind === "pilot") {
    content = /*#__PURE__*/ React.createElement(IctQuestion, {
      kicker: "Derni\xE8re question",
      text: IC_PILOT.text,
      sub: IC_PILOT.sub,
      options: IC_PILOT.options.map((o) => ({ key: o.id, label: o.label })),
      long: true,
      selected: pilot,
      onPick: (v) => {
        if (busy.current) return;
        setPilot(v);
        go(pos + 1, 1, 170);
      },
    });
  } else if (step.kind === "reveal") {
    content = /*#__PURE__*/ React.createElement(IctReveal, { T: T, onNext: () => go(pos + 1) });
  } else {
    content = /*#__PURE__*/ React.createElement(IctResult, {
      themeId: theme,
      answers: answers,
      pilot: pilot,
      onRestart: restart,
      keep: !preset,
    });
  }
  return /*#__PURE__*/ React.createElement(
    "div",
    { className: "ict" + (dark ? " ict-dark" : ""), style: { fontFamily: testFont } },
    /*#__PURE__*/ React.createElement(
      "div",
      { className: "ict-bg", "aria-hidden": "true" },
      /*#__PURE__*/ React.createElement("span", { className: "ict-blob ict-blob-a" }),
      /*#__PURE__*/ React.createElement("span", { className: "ict-blob ict-blob-b" }),
    ),
    showBar &&
      /*#__PURE__*/ React.createElement(
        "div",
        { className: "ict-progress", "aria-hidden": "true" },
        /*#__PURE__*/ React.createElement("div", { style: { transform: "scaleX(" + done / 21 + ")" } }),
      ),
    showBack &&
      /*#__PURE__*/ React.createElement(
        "button",
        { type: "button", className: "ict-back", onClick: () => go(pos - 1, -1) },
        /*#__PURE__*/ React.createElement("span", { "aria-hidden": "true" }, "\u2190"),
        " Retour",
      ),
    /*#__PURE__*/ React.createElement(
      "div",
      { key: pos + "-" + entry, className: "ict-screen" + (leaving ? " is-out" : dir < 0 ? " is-in-back" : " is-in") },
      content,
    ),
    /*#__PURE__*/ React.createElement("style", null, ICT_CSS),
  );
}
const ICT_CSS = `
.ict{position:relative;flex:1;display:flex;flex-direction:column;min-height:100vh;min-height:100svh;background:#faf8f4;color:#1b1b1b;overflow:hidden;transition:background-color .9s cubic-bezier(.22,.61,.36,1)}
.ict.ict-dark{background:#0e231c}
.ict a{text-decoration:none}
.ict-bg{position:absolute;inset:0;pointer-events:none;overflow:hidden;transition:opacity .9s}
.ict-dark .ict-bg{opacity:0}
.ict-blob{position:absolute;border-radius:50%;filter:blur(70px)}
.ict-blob-a{width:70vw;height:70vw;max-width:720px;max-height:720px;left:-22vw;top:-24vw;background:radial-gradient(circle,rgba(127,169,140,.2),rgba(127,169,140,0) 65%)}
.ict-blob-b{width:64vw;height:64vw;max-width:640px;max-height:640px;right:-20vw;bottom:-18vw;background:radial-gradient(circle,rgba(213,196,160,.26),rgba(213,196,160,0) 65%)}
.ict-progress{position:fixed;top:0;left:0;right:0;height:3px;z-index:55;background:rgba(20,54,43,.07);pointer-events:none}
.ict-progress>div{height:100%;background:linear-gradient(90deg,#14362B,#527d54);transform-origin:0 50%;transition:transform .6s cubic-bezier(.22,.61,.36,1)}
.ict-dark .ict-progress{background:rgba(245,243,238,.08)}
.ict-dark .ict-progress>div{background:linear-gradient(90deg,#7fa98c,#c9d8cd)}
.ict-back{position:absolute;top:24px;left:12px;z-index:5;height:50px;padding:0 12px;display:inline-flex;align-items:center;gap:8px;background:transparent;border:none;cursor:pointer;font-family:inherit;font-size:12px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#756f64;transition:color .2s}
.ict-back span{font-size:16px;letter-spacing:0}
.ict-back:hover{color:#14362B}
.ict-dark .ict-back{color:rgba(245,243,238,.55)}
.ict-dark .ict-back:hover{color:#f5f3ee}
.ict-screen{position:relative;z-index:1;flex:1;display:flex;flex-direction:column;width:100%}
.ict-screen.is-in{animation:ictIn .6s cubic-bezier(.22,.61,.36,1) both}
.ict-screen.is-in-back{animation:ictInBack .6s cubic-bezier(.22,.61,.36,1) both}
.ict-screen.is-out{opacity:0;transform:translateY(-12px);transition:opacity .28s ease,transform .28s ease}
@keyframes ictIn{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@keyframes ictInBack{from{opacity:0;transform:translateY(-18px)}to{opacity:1;transform:none}}
@keyframes ictUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
.ict-f{animation:ictUp .7s cubic-bezier(.22,.61,.36,1) both;animation-delay:var(--d,0s)}
.ict-stage{flex:1;width:100%;max-width:560px;margin:0 auto;padding:clamp(100px,14vh,140px) 24px 56px;display:flex;flex-direction:column}
.ict-stage.center{justify-content:center;align-items:center;text-align:center;padding-top:96px}
.ict-stage.center>p,.ict-stage.center>h1,.ict-stage.center>h2{width:100%}
.ict-stage.center .ict-title{line-height:1.14}
.ict-kicker{margin:0 0 18px;display:flex;align-items:center;gap:12px;font-size:12px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:#527d54}
.ict-kicker span{color:#756f64;letter-spacing:.08em}
.ict-title{margin:0 0 14px;font-family:'Fraunces',Georgia,serif;font-style:italic;font-weight:400;font-size:clamp(32px,7.6vw,54px);line-height:1.08;letter-spacing:-.022em;color:#14362B;text-wrap:balance}
.ict-meta{margin:0 0 34px;font-size:12px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:#756f64}
.ict-choose{max-width:580px}
.ict-choose-head{text-align:center}
.ict-cards{display:flex;flex-direction:column;gap:10px;width:100%}
.ict-card{display:flex;align-items:center;gap:16px;width:100%;padding:11px 20px 11px 11px;background:#fff;border:1px solid #ebe8e2;border-radius:22px;cursor:pointer;font-family:inherit;text-align:left;color:#1b1b1b;font-size:16.5px;font-weight:500;line-height:1.3;-webkit-tap-highlight-color:transparent;animation:ictUp .6s cubic-bezier(.22,.61,.36,1) both;animation-delay:calc(.15s + var(--i) * .05s);transition:border-color .25s,box-shadow .3s,translate .3s cubic-bezier(.22,.61,.36,1)}
.ict-card-ic{flex-shrink:0;width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#eef2ea;color:#14362B;transition:background .25s,color .25s}
.ict-card-label{flex:1;min-width:0}
.ict-card-arrow{color:#b0a9a0;font-size:17px;transition:translate .3s cubic-bezier(.22,.61,.36,1),color .3s}
.ict-card:active{scale:.985}
.ict-card.on{border-color:#14362B}
.ict-card.on .ict-card-ic{background:#14362B;color:#f5f3ee}
@media (hover:hover){.ict-card:hover{border-color:#cdd6c9;box-shadow:0 14px 32px rgba(20,54,43,.08);translate:0 -2px}.ict-card:hover .ict-card-ic{background:#14362B;color:#f5f3ee}.ict-card:hover .ict-card-arrow{translate:4px 0;color:#14362B}}
.ict-orb{position:relative;width:88px;height:88px;border-radius:50%;background:#fff;border:1px solid #ebe8e2;box-shadow:0 14px 36px rgba(20,54,43,.08);display:flex;align-items:center;justify-content:center;color:#14362B;margin-bottom:34px}
.ict-ring{position:absolute;inset:0;border-radius:50%;border:1px solid rgba(82,125,84,.4);opacity:0;animation:ictBreath 7.2s cubic-bezier(.45,0,.55,1) infinite;pointer-events:none}
.ict-ring.r2{animation-delay:2.4s}.ict-ring.r3{animation-delay:4.8s}
@keyframes ictBreath{0%{transform:scale(1.02);opacity:0}20%{opacity:.55}100%{transform:scale(2.2);opacity:0}}
.ict-lead{margin:6px 0 36px;font-size:clamp(17px,4.4vw,19px);line-height:1.6;color:#5a5a5a;max-width:420px;text-wrap:pretty}
.ict-pill{display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:17px 34px;font-size:16px;font-weight:600;border-radius:9999px;cursor:pointer;font-family:inherit;border:none;background:#14362B;color:#fff;-webkit-tap-highlight-color:transparent;transition:translate .25s cubic-bezier(.22,.61,.36,1),box-shadow .25s,border-color .25s,opacity .2s}
.ict-pill:active{scale:.97}
.ict-pill:disabled{opacity:.7;cursor:default}
.ict-pill.light{background:#f5f3ee;color:#14362B}
.ict-pill.ghost{background:transparent;color:#14362B;border:1.5px solid #cfc9bd}
@media (hover:hover){.ict-pill:hover{translate:0 -2px;box-shadow:0 12px 28px rgba(20,54,43,.24)}.ict-pill.ghost:hover{border-color:#14362B;box-shadow:none}.ict-pill.light:hover{box-shadow:0 12px 30px rgba(0,0,0,.3)}}
.ict-qtext{margin:0 0 30px;font-family:inherit;font-weight:600;font-size:clamp(23px,5.8vw,32px);line-height:1.26;letter-spacing:-.018em;color:#14362B;text-wrap:pretty}
.ict-qtext.m{font-size:clamp(21px,5.3vw,28px);line-height:1.3}
.ict-qtext.l{font-size:clamp(19px,4.8vw,25px);line-height:1.36}
.ict-qsub{margin:-14px 0 26px;font-size:15px;line-height:1.55;color:#6a6a6a;text-wrap:pretty}
.ict-opts{display:flex;flex-direction:column;gap:10px}
.ict-opt{display:flex;align-items:center;gap:14px;width:100%;min-height:58px;padding:14px 20px;text-align:left;background:#fff;border:1px solid #e6e1d7;border-radius:18px;cursor:pointer;font-family:inherit;font-size:16.5px;font-weight:500;line-height:1.35;color:#1b1b1b;-webkit-tap-highlight-color:transparent;animation:ictUp .55s cubic-bezier(.22,.61,.36,1) both;animation-delay:calc(.12s + var(--i) * .045s);transition:background-color .2s,border-color .2s,color .2s,box-shadow .25s,translate .25s cubic-bezier(.22,.61,.36,1)}
.ict-opt.long{font-size:15px;line-height:1.45;padding:14px 18px}
.ict-opt:active{scale:.985}
.ict-opt.on{background:#14362B;border-color:#14362B;color:#fff}
@media (hover:hover){.ict-opt:not(.on):hover{border-color:#14362B;translate:0 -1px;box-shadow:0 10px 24px rgba(20,54,43,.07)}}
.ict-pie{flex-shrink:0;width:18px;height:18px;border-radius:50%;border:1.5px solid #7fa98c;background:conic-gradient(#7fa98c calc(var(--p) * 1%),transparent 0)}
.ict-opt.on .ict-pie{border-color:#fff;background:conic-gradient(#fff calc(var(--p) * 1%),transparent 0)}
.ict-mid-label{margin:0 0 4px;font-family:'Fraunces',Georgia,serif;font-style:italic;font-size:clamp(22px,5.6vw,30px);color:#527d54}
.ict-big{margin:0 0 30px;font-family:'Fraunces',Georgia,serif;font-weight:400;font-size:clamp(104px,32vw,168px);line-height:.95;letter-spacing:-.045em;color:#14362B;font-variant-numeric:tabular-nums}
.ict-big small{font-size:.36em;letter-spacing:0;margin-left:.1em;color:#756f64}
.ict-mid-a{margin:0 0 12px;font-size:clamp(18px,4.6vw,21px);line-height:1.5;font-weight:500;color:#1b1b1b;max-width:440px;text-wrap:pretty}
.ict-mid-b{margin:0 0 36px;font-size:15.5px;line-height:1.6;color:#6a6a6a;max-width:420px;text-wrap:pretty}
.ict-reveal{max-width:660px}
.ict-rev-title{margin:0 0 30px;font-family:'Fraunces',Georgia,serif;font-weight:400;font-size:clamp(30px,7.4vw,50px);line-height:1.1;letter-spacing:-.02em;color:#f5f3ee;text-wrap:balance}
.ict-chips{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin:0 0 36px}
.ict-chip{padding:9px 15px;border-radius:999px;border:1px solid rgba(245,243,238,.2);color:#c9d8cd;font-size:14.5px;line-height:1.2;animation:ictChip .6s cubic-bezier(.22,.61,.36,1) calc(.35s + var(--i) * .08s) both}
.ict-chip.hi{background:#f5f3ee;border-color:#f5f3ee;color:#14362B;font-weight:600;animation:ictChip .6s cubic-bezier(.22,.61,.36,1) calc(.35s + var(--i) * .08s) both,ictGlow 2.6s ease-out 1.9s infinite}
@keyframes ictChip{from{opacity:0;transform:translateY(8px) scale(.96)}to{opacity:1;transform:none}}
@keyframes ictGlow{0%{box-shadow:0 0 0 0 rgba(245,243,238,.4)}100%{box-shadow:0 0 0 16px rgba(245,243,238,0)}}
.ict-rev-text{margin:0 0 36px;font-size:clamp(17px,4.4vw,19px);line-height:1.6;color:#c9d8cd;max-width:440px;text-wrap:pretty}
.ict-res{width:100%;max-width:640px;margin:0 auto;padding:clamp(96px,13vh,130px) 22px 80px;display:flex;flex-direction:column;gap:clamp(52px,10vw,76px)}
.ict-res-head{text-align:center}
.ict-res-head .ict-kicker{justify-content:center}
.ict-scores{display:grid;grid-template-columns:minmax(0,1fr) 1px minmax(0,1fr);gap:clamp(14px,4vw,40px);margin-top:26px}
.ict-sep{background:#e4dfd5}
.ict-score{display:flex;flex-direction:column;align-items:center;text-align:center}
.ict-score-label{flex:1;margin:0 0 10px;display:flex;align-items:flex-end;justify-content:center;font-size:14px;font-weight:600;line-height:1.3;color:#5a5a5a;text-wrap:balance}
.ict-score-num{margin:0;font-family:'Fraunces',Georgia,serif;font-weight:400;font-size:clamp(62px,18vw,112px);line-height:.95;letter-spacing:-.045em;font-variant-numeric:tabular-nums}
.ict-score-num small{font-size:.38em;margin-left:.08em;letter-spacing:0;color:#756f64}
.ict-score-bar{width:100%;max-width:180px;height:4px;border-radius:99px;background:#ebe6dc;margin-top:18px;overflow:hidden}
.ict-score-bar i{display:block;height:100%;border-radius:99px;transform-origin:0 50%;animation:ictBar 1.3s cubic-bezier(.22,.61,.36,1) .35s both}
@keyframes ictBar{from{transform:scaleX(0)}}
.ict-score.sym .ict-score-num{color:#b8692f}
.ict-score.sym .ict-score-bar i{background:#d98142}
.ict-score.pre .ict-score-num{color:#14362B}
.ict-score.pre .ict-score-bar i{background:#527d54}
.ict-law{margin:40px auto 0;font-family:'Fraunces',Georgia,serif;font-style:italic;font-size:clamp(22px,5.4vw,28px);line-height:1.3;color:#14362B;max-width:480px;text-wrap:balance}
.ict-pilot{margin:0 auto 30px;font-size:16.5px;line-height:1.6;color:#4a4a4a;max-width:470px;text-align:center;text-wrap:pretty}
.ict-h2{margin:0 0 22px;font-family:'Fraunces',Georgia,serif;font-weight:400;font-size:clamp(27px,6.2vw,36px);line-height:1.15;letter-spacing:-.015em;color:#14362B;text-align:center}
.ict-group{background:#fff;border:1px solid #ebe8e2;border-radius:22px;padding:6px 22px 8px;margin-bottom:12px}
.ict-group-k{margin:18px 0 2px;font-size:11.5px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#527d54}
.ict-ins{padding:16px 0;border-top:1px solid #f0ede7}
.ict-group-k+.ict-ins{border-top:none}
.ict-ins-q{margin:0 0 8px;font-size:14.5px;line-height:1.5;color:#6a6a6a;text-wrap:pretty}
.ict-ins-q b{display:inline-block;margin-left:6px;padding:3px 9px;border-radius:99px;background:#f3f0ea;font-size:10.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8a847a;white-space:nowrap;vertical-align:1px}
.ict-ins-a{margin:0;display:flex;gap:10px;font-family:inherit;font-weight:600;font-size:17px;line-height:1.4;letter-spacing:-.005em;color:#14362B;text-wrap:pretty}
.ict-ins-a span{color:#527d54;font-weight:400;font-size:16px;line-height:1.5}
.ict-send{background:#fff;border:1px solid #e3ddd1;border-radius:26px;padding:30px 20px 24px;text-align:center;box-shadow:0 18px 44px rgba(20,54,43,.07)}
.ict-send-t{margin:0 auto 22px;max-width:440px;font-size:17px;line-height:1.55;font-weight:500;color:#1b1b1b;text-wrap:pretty}
.ict-pill.big{width:100%;max-width:440px;padding:23px 24px;font-size:18.5px}
.ict-send-t a{color:#14362B;font-weight:700;text-decoration:underline;text-decoration-color:#b9c9bd;text-underline-offset:3px;overflow-wrap:anywhere}
.ict-lk{margin:40px auto 0;background:#fff;border:1px solid #ebe8e2;border-radius:24px;padding:30px clamp(14px,4vw,30px) 28px}
.ict-lk .ict-law{margin:0 auto 18px}
.ict-lk-svg{display:block;width:100%;max-width:440px;height:auto;margin:0 auto;overflow:visible}
.ict-lk-ax{font-size:14px;font-weight:600}.ict-lk-ax.sym{fill:#b8692f}.ict-lk-ax.pre{fill:#527d54}
.ict-lk-arrow{animation:ictLkFlow 1.1s linear infinite}
@keyframes ictLkFlow{to{stroke-dashoffset:-20}}
.ict-lk-pulse{opacity:0;transform-box:fill-box;transform-origin:center;animation:ictLkPulse 2.6s ease-out 1s infinite}
@keyframes ictLkPulse{0%{transform:scale(.5);opacity:.3}100%{transform:scale(1.7);opacity:0}}
.ict-lk-legend{display:flex;flex-wrap:wrap;justify-content:center;gap:8px 22px;margin:14px 0 18px;font-size:13.5px;font-weight:500;color:#5a5a5a}
.ict-lk-legend span{display:inline-flex;align-items:center;gap:8px}
.ict-lk-legend i{width:12px;height:12px;border-radius:50%;box-sizing:border-box}.ict-lk-legend i.me{background:#14362B}.ict-lk-legend i.next{border:2px solid #527d54;background:#fff}
.ict-lk-text{margin:0 auto;max-width:470px;font-size:16.5px;line-height:1.6;color:#4a4a4a;text-wrap:pretty}
@media (prefers-reduced-motion:reduce){.ict-lk-arrow,.ict-lk-pulse{animation:none}}
.ict-send-err{margin:12px 0 0;font-size:14px;color:#b8692f}
.ict-send-help a{color:#14362B;font-weight:600;text-decoration:underline;text-underline-offset:3px}
.ict-inapp{margin:18px auto 0;max-width:440px;padding:18px 18px 16px;background:#f6f4ee;border-radius:18px;text-align:left}
.ict-inapp p{margin:0;font-size:15px;line-height:1.55;color:#1b1b1b;text-wrap:pretty}
.ict-inapp strong{display:block;margin-bottom:6px;color:#b8692f}
.ict-inapp .ict-inapp-s{margin:12px 0;font-size:13.5px;color:#6b665d}
.ict-mail{margin:18px auto 0;max-width:400px;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:10px 14px;padding:12px 14px;background:#f6f4ee;border-radius:18px}
.ict-mail a{font-size:16.5px;font-weight:600;color:#14362B;overflow-wrap:anywhere;-webkit-user-select:all;user-select:all}
.ict-copy{flex-shrink:0;min-height:44px;padding:0 18px;border-radius:12px;border:1px solid #d8d2c6;background:#fff;font-family:inherit;font-size:14px;font-weight:600;color:#14362B;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color .2s,border-color .2s,color .2s}
.ict-copy.ok{background:#14362B;border-color:#14362B;color:#fff}
@media (hover:hover){.ict-copy:not(.ok):hover{border-color:#14362B}}
.ict-send-s{margin:12px 0 0;font-size:13.5px;line-height:1.5;color:#8a847a}
.ict-defi{background:#eef2ea;border-radius:24px;padding:30px 24px;text-align:center}
.ict-defi-k{margin:0 0 12px;font-size:11.5px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#527d54}
.ict-defi-q{margin:0 auto 10px;max-width:440px;font-family:'Fraunces',Georgia,serif;font-style:italic;font-size:clamp(21px,5.4vw,25px);line-height:1.3;color:#14362B;text-wrap:balance}
.ict-defi-t{margin:0 auto;max-width:420px;font-size:15.5px;line-height:1.6;color:#4f5f55;text-wrap:pretty}
.ict-final{background:#14362B;border-radius:28px;padding:40px 22px 30px;text-align:center}
.ict-final-h{margin:0 0 16px;font-family:'Fraunces',Georgia,serif;font-weight:400;font-size:clamp(29px,7.2vw,40px);line-height:1.12;letter-spacing:-.015em;color:#f5f3ee;text-wrap:balance}
.ict-final-p{margin:0 auto 30px;max-width:470px;font-size:16px;line-height:1.65;color:#c9d8cd;text-wrap:pretty}
.ict-pill.huge{width:100%;max-width:440px;padding:23px 24px;font-size:18.5px;background:#f5f3ee;color:#14362B}
@media (hover:hover){.ict-pill.huge:hover{box-shadow:0 14px 34px rgba(0,0,0,.32)}}
.ict-final-r{margin:16px auto 0;max-width:380px;font-size:13.5px;line-height:1.5;color:#8fb39b;text-wrap:pretty}
.ict-res-foot{display:flex;flex-direction:column;align-items:center;gap:2px;margin-top:-28px}
.ict-link{margin-top:8px;padding:8px;background:none;border:none;cursor:pointer;font-family:inherit;font-size:14px;color:#756f64;text-decoration:underline;text-underline-offset:4px;text-decoration-color:#d8d2c6;transition:color .2s}
.ict-link:hover{color:#14362B}
.ict-trust{margin:26px 0 0;text-align:center;font-size:12px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#756f64}
.ict a.ict-legal{display:block;margin:14px auto 0;padding:8px;text-align:center;font-size:12.5px;color:#756f64;text-decoration:underline;text-underline-offset:3px;text-decoration-color:#d8d2c6}
.ict a.ict-link{text-decoration:underline;font-size:13px}
.ict-sub{margin:-10px auto 22px;max-width:470px;font-size:16px;line-height:1.6;color:#4a4a4a;text-align:center;text-wrap:pretty}
.ict-prio{background:#fff;border:1px solid #ebe8e2;border-radius:22px;padding:20px 22px 22px;margin-bottom:12px}
.ict-prio-top{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:14px}
.ict-prio-n{font-family:'Fraunces',Georgia,serif;font-style:italic;font-size:15.5px;color:#756f64}
.ict-lever{display:inline-flex;align-items:center;gap:7px;padding:6px 11px;border-radius:99px;background:#e8efe9;color:#14362B;font-size:10.5px;font-weight:700;letter-spacing:.09em;text-transform:uppercase;white-space:nowrap}
.ict-lever i{width:7px;height:7px;border-radius:50%;background:#527d54}
.ict-prio-h{margin:0 0 8px;font-size:19px;font-weight:600;line-height:1.3;letter-spacing:-.012em;color:#14362B;text-wrap:pretty}
.ict-prio-q{margin:0 0 16px;font-size:14.5px;line-height:1.5;color:#6a6a6a;text-wrap:pretty}
.ict-prio-q b{display:inline-block;margin-left:6px;padding:3px 9px;border-radius:99px;background:#f3f0ea;font-size:10.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#6f695f;white-space:nowrap;vertical-align:1px}
.ict-prio-how{margin:0;padding-top:15px;border-top:1px solid #f0ede7;font-size:15.5px;line-height:1.6;color:#2d2d2d;text-wrap:pretty}
.ict-prio-how strong{display:block;margin-bottom:5px;font-size:11.5px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#527d54}
.ict-method{background:#fff;border:1px solid #ebe8e2;border-radius:26px;padding:30px clamp(18px,5vw,34px) 26px;text-align:left}
.ict-method .ict-defi-k{text-align:center}
.ict-method .ict-h2{margin-bottom:12px;text-wrap:balance}
.ict-method-p{margin:0 auto 20px;max-width:470px;font-size:16px;line-height:1.6;color:#4a4a4a;text-align:center;text-wrap:pretty}
.ict-lv{display:flex;gap:14px;padding:16px 0;border-top:1px solid #f0ede7}
.ict-lv-dot{flex-shrink:0;width:36px;height:36px;border-radius:50%;background:#e8efe9;color:#14362B;display:flex;align-items:center;justify-content:center;font-family:'Fraunces',Georgia,serif;font-style:italic;font-size:16px}
.ict-lv-t{margin:1px 0 4px;font-size:16.5px;font-weight:600;line-height:1.3;color:#1b1b1b}
.ict-lv-t span{display:block;margin-top:2px;font-size:13px;font-weight:500;color:#527d54}
.ict-lv-d{margin:0;font-size:15px;line-height:1.55;color:#4a4a4a;text-wrap:pretty}
.ict-lv-b{display:inline-block;margin-top:9px;padding:4px 10px;border-radius:99px;background:#14362B;color:#f5f3ee;font-size:10.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase}
.ict-facts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;padding-top:22px;border-top:1px solid #f0ede7;text-align:center}
.ict-facts b{display:block;font-family:'Fraunces',Georgia,serif;font-weight:400;font-size:clamp(25px,6.4vw,32px);line-height:1;color:#14362B}
.ict-facts span{display:block;margin-top:7px;font-size:11px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#6a6a6a}
.ict-method-f{margin:20px auto 0;max-width:470px;font-size:14.5px;line-height:1.6;color:#6a6a6a;text-align:center;text-wrap:pretty}
@media (prefers-reduced-motion:reduce){.ict *,.ict-screen{animation-duration:.01s !important;animation-delay:0s !important;transition-duration:.01s !important}.ict-ring{display:none}.ict-chip.hi{animation:none}}
`;
window.InnerTest = InnerTest; // BrainEmotionWidget, NervousSystemGauge, OrganExplorer
const { useState: useStateW } = React; // ─── Brain + Emotions ──────────────────────────────────────────────
function BrainEmotionWidget() {
  const [active, setActive] = useStateW(null);
  const isActiveRegion = (id) => active && EMOTIONS[active].regions.includes(id);
  const isActiveConn = (id) => active && EMOTIONS[active].connections.includes(id);
  const col = (id) => (isActiveRegion(id) ? EMOTIONS[active].color : "transparent");
  const cCol = (id) => (isActiveConn(id) ? EMOTIONS[active].color : "transparent");
  const cur = active ? EMOTIONS[active] : null;
  return /*#__PURE__*/ React.createElement(
    "div",
    { style: { fontFamily: "'DM Sans',sans-serif", color: "#1a1a1a", maxWidth: 520, margin: "0 auto", padding: "8px 16px 0" } },
    /*#__PURE__*/ React.createElement(
      "div",
      { style: { display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 6, marginBottom: 8 } },
      Object.entries(EMOTIONS).map(([k, e]) =>
        /*#__PURE__*/ React.createElement(
          "button",
          {
            key: k,
            onClick: () => setActive(k),
            style: {
              background: active === k ? "#1a1a1a" : "transparent",
              border: "1px solid " + (active === k ? "#1a1a1a" : "#ebe8e2"),
              borderRadius: 14,
              padding: "10px 4px 8px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              transition: "all .25s",
            },
          },
          /*#__PURE__*/ React.createElement("span", { style: { fontSize: 24, lineHeight: 1 } }, e.icon),
          /*#__PURE__*/ React.createElement(
            "span",
            { style: { fontFamily: "'Fraunces',serif", fontSize: 12, fontStyle: "italic", color: active === k ? "#fff" : "#5a5a5a" } },
            e.name,
          ),
        ),
      ),
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        style: { position: "relative", width: "100%", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center" },
      },
      /*#__PURE__*/ React.createElement(
        "svg",
        { viewBox: "0 0 640 420", style: { width: "100%", height: "100%", overflow: "visible" } },
        /*#__PURE__*/ React.createElement(
          "defs",
          null,
          /*#__PURE__*/ React.createElement(
            "radialGradient",
            { id: "icBrainGrad", cx: "35%", cy: "30%", r: "85%" },
            /*#__PURE__*/ React.createElement("stop", { offset: "0%", stopColor: "#f5ebe0" }),
            /*#__PURE__*/ React.createElement("stop", { offset: "50%", stopColor: "#e8d4bf" }),
            /*#__PURE__*/ React.createElement("stop", { offset: "100%", stopColor: "#c9a98a" }),
          ),
          /*#__PURE__*/ React.createElement(
            "radialGradient",
            { id: "icCerebellumGrad", cx: "40%", cy: "30%", r: "80%" },
            /*#__PURE__*/ React.createElement("stop", { offset: "0%", stopColor: "#e8d4bf" }),
            /*#__PURE__*/ React.createElement("stop", { offset: "100%", stopColor: "#b8946f" }),
          ),
          /*#__PURE__*/ React.createElement(
            "linearGradient",
            { id: "icStemGrad", x1: "0%", y1: "0%", x2: "100%", y2: "0%" },
            /*#__PURE__*/ React.createElement("stop", { offset: "0%", stopColor: "#d9b898" }),
            /*#__PURE__*/ React.createElement("stop", { offset: "100%", stopColor: "#a98566" }),
          ),
          /*#__PURE__*/ React.createElement(
            "filter",
            { id: "icSoftGlow" },
            /*#__PURE__*/ React.createElement("feGaussianBlur", { stdDeviation: "3" }),
          ),
        ),
        /*#__PURE__*/ React.createElement(
          "g",
          null,
          /*#__PURE__*/ React.createElement("path", {
            d: "M 395,340 C 398,360 402,385 410,400 L 430,400 C 436,385 438,360 438,338 Z",
            fill: "url(#icStemGrad)",
          }),
          /*#__PURE__*/ React.createElement("path", {
            d: "M 445,260 C 490,258 520,275 520,310 C 520,340 495,355 465,355 C 440,355 420,348 415,325 C 412,300 420,270 445,260 Z",
            fill: "url(#icCerebellumGrad)",
          }),
          /*#__PURE__*/ React.createElement("path", {
            d: "M 150,255 C 115,238 92,195 102,150 C 115,100 165,70 225,62 C 310,54 400,62 455,92 C 510,122 535,170 528,220 C 522,258 498,280 465,285 C 440,288 420,282 410,275 C 395,310 355,330 300,330 C 250,330 195,312 170,290 C 158,280 150,268 150,255 Z",
            fill: "url(#icBrainGrad)",
          }),
          /*#__PURE__*/ React.createElement(
            "g",
            { stroke: "#8a6a4a", strokeWidth: "0.9", strokeOpacity: "0.45", fill: "none", strokeLinecap: "round" },
            /*#__PURE__*/ React.createElement("path", { d: "M 145,200 Q 170,180 195,190" }),
            /*#__PURE__*/ React.createElement("path", { d: "M 155,175 Q 185,155 215,165" }),
            /*#__PURE__*/ React.createElement("path", { d: "M 280,75 Q 275,130 260,200 Q 250,245 240,285", strokeOpacity: "0.55" }),
            /*#__PURE__*/ React.createElement("path", { d: "M 310,80 Q 330,115 325,155" }),
            /*#__PURE__*/ React.createElement("path", { d: "M 350,75 Q 370,110 365,155" }),
            /*#__PURE__*/ React.createElement("path", { d: "M 220,275 Q 270,265 315,270" }),
            /*#__PURE__*/ React.createElement("path", { d: "M 460,150 Q 490,170 510,200" }),
            /*#__PURE__*/ React.createElement("path", { d: "M 205,245 Q 280,235 365,255", strokeOpacity: "0.6" }),
          ),
        ),
        /*#__PURE__*/ React.createElement(
          "g",
          { style: { color: col("prefrontal"), opacity: isActiveRegion("prefrontal") ? 1 : 0, transition: "opacity .5s" } },
          /*#__PURE__*/ React.createElement("ellipse", {
            cx: "155",
            cy: "165",
            rx: "32",
            ry: "42",
            fill: "currentColor",
            fillOpacity: "0.5",
          }),
          /*#__PURE__*/ React.createElement("ellipse", {
            cx: "155",
            cy: "165",
            rx: "18",
            ry: "26",
            fill: "currentColor",
            fillOpacity: "0.85",
          }),
        ),
        /*#__PURE__*/ React.createElement(
          "g",
          { style: { color: col("cingulate"), opacity: isActiveRegion("cingulate") ? 1 : 0, transition: "opacity .5s" } },
          /*#__PURE__*/ React.createElement("path", {
            d: "M 200,145 Q 260,118 330,140 Q 335,148 328,155 Q 265,138 205,158 Q 198,152 200,145 Z",
            fill: "currentColor",
            fillOpacity: "0.75",
          }),
        ),
        /*#__PURE__*/ React.createElement(
          "g",
          { style: { color: col("striatum"), opacity: isActiveRegion("striatum") ? 1 : 0, transition: "opacity .5s" } },
          /*#__PURE__*/ React.createElement("ellipse", {
            cx: "260",
            cy: "200",
            rx: "22",
            ry: "16",
            fill: "currentColor",
            fillOpacity: "0.5",
          }),
          /*#__PURE__*/ React.createElement("ellipse", {
            cx: "260",
            cy: "200",
            rx: "12",
            ry: "9",
            fill: "currentColor",
            fillOpacity: "0.9",
          }),
        ),
        /*#__PURE__*/ React.createElement(
          "g",
          { style: { color: col("insula"), opacity: isActiveRegion("insula") ? 1 : 0, transition: "opacity .5s" } },
          /*#__PURE__*/ React.createElement("path", {
            d: "M 230,230 Q 250,220 270,235 Q 275,250 260,258 Q 238,258 228,245 Q 224,237 230,230 Z",
            fill: "currentColor",
            fillOpacity: "0.75",
          }),
        ),
        /*#__PURE__*/ React.createElement(
          "g",
          { style: { color: col("amygdala"), opacity: isActiveRegion("amygdala") ? 1 : 0, transition: "opacity .5s" } },
          /*#__PURE__*/ React.createElement("ellipse", {
            cx: "275",
            cy: "275",
            rx: "13",
            ry: "10",
            transform: "rotate(-15 275 275)",
            fill: "currentColor",
            fillOpacity: "0.5",
          }),
          /*#__PURE__*/ React.createElement("ellipse", {
            cx: "275",
            cy: "275",
            rx: "8",
            ry: "6",
            transform: "rotate(-15 275 275)",
            fill: "currentColor",
            fillOpacity: "0.95",
          }),
        ),
        /*#__PURE__*/ React.createElement(
          "g",
          { style: { color: col("hippocampus"), opacity: isActiveRegion("hippocampus") ? 1 : 0, transition: "opacity .5s" } },
          /*#__PURE__*/ React.createElement("path", {
            d: "M 295,280 Q 320,275 335,285 Q 340,293 333,298 Q 318,290 298,294 Q 290,290 295,280 Z",
            fill: "currentColor",
            fillOpacity: "0.75",
          }),
        ),
        /*#__PURE__*/ React.createElement(
          "g",
          { style: { color: col("hypothalamus"), opacity: isActiveRegion("hypothalamus") ? 1 : 0, transition: "opacity .5s" } },
          /*#__PURE__*/ React.createElement("circle", { cx: "310", cy: "240", r: "10", fill: "currentColor", fillOpacity: "0.5" }),
          /*#__PURE__*/ React.createElement("circle", { cx: "310", cy: "240", r: "5", fill: "currentColor", fillOpacity: "0.95" }),
        ),
        /*#__PURE__*/ React.createElement(
          "g",
          { strokeWidth: "1.4", fill: "none", strokeLinecap: "round", strokeDasharray: "3 4" },
          [
            ["c-prefrontal-striatum", "M 155,165 Q 210,180 260,200"],
            ["c-prefrontal-cingulate", "M 165,155 Q 195,140 230,142"],
            ["c-cingulate-striatum", "M 270,148 Q 270,170 260,200"],
            ["c-striatum-accumbens", "M 260,200 Q 285,218 310,235"],
            ["c-amygdala-hypothalamus", "M 275,270 Q 295,252 310,242"],
            ["c-amygdala-hippocampus", "M 285,272 Q 305,275 320,282"],
            ["c-amygdala-prefrontal", "M 268,270 Q 210,240 165,180"],
            ["c-insula-cingulate", "M 250,232 Q 255,195 265,158"],
            ["c-insula-prefrontal", "M 235,235 Q 195,205 165,180"],
          ].map(([id, d]) =>
            /*#__PURE__*/ React.createElement("path", {
              key: id,
              d: d,
              stroke: cCol(id),
              strokeOpacity: isActiveConn(id) ? 0.45 : 0,
              style: { transition: "stroke-opacity .6s, stroke .6s" },
            }),
          ),
        ),
      ),
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      { style: { marginTop: 4, textAlign: "center", minHeight: 44 } },
      !active
        ? /*#__PURE__*/ React.createElement(
            "div",
            { style: { fontFamily: "'Fraunces',serif", fontStyle: "italic", fontSize: 15, color: "#9a9a9a" } },
            "Touche une \xE9motion pour voir son activation",
          )
        : /*#__PURE__*/ React.createElement(
            React.Fragment,
            null,
            /*#__PURE__*/ React.createElement(
              "div",
              null,
              /*#__PURE__*/ React.createElement(
                "span",
                {
                  style: {
                    display: "inline-block",
                    fontFamily: "'Fraunces',serif",
                    fontStyle: "italic",
                    fontSize: 14,
                    padding: "5px 14px",
                    borderRadius: 9999,
                    background: cur.color + "1F",
                    color: cur.color,
                    marginBottom: 10,
                  },
                },
                cur.tag,
              ),
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              { style: { fontSize: 13, color: "#5a5a5a", lineHeight: 1.5, marginBottom: 16 } },
              cur.regionNames,
            ),
          ),
    ),
  );
} // ─── Nervous System Gauge ─────────────────────────────────────────
const lerp = (a, b, t) => a + (b - a) * t;
const GAUGE_ZONES = [
  {
    id: "para",
    key: "Parasympathique excessif",
    mode: "Mode léthargie",
    range: [0, 30],
    color: "#2955a8",
    bg: "#eef2fc",
    border: "#4a7ddc",
    bgSoft: "#f5f7fd",
    borderSoft: "#dde4f5",
    thought: "Tout ralentit…",
    thoughtSub: "« Je n'arrive plus à démarrer »",
    symptoms: [
      "Bradycardie : rythme cardiaque trop lent",
      "Hypotension : tension artérielle basse",
      "Fatigue profonde, manque d'énergie",
      "Digestion trop lente, lourdeur",
      "Apathie, démotivation",
      "Somnolence en journée",
      "Sensation de « brouillard », ralentissement mental",
    ],
  },
  {
    id: "eq",
    key: "Équilibre",
    mode: "Homéostasie",
    range: [30, 70],
    color: "#2d7a4a",
    bg: "#edf5ef",
    border: "#4e9e6d",
    bgSoft: "#f4f9f5",
    borderSoft: "#d8e8de",
    thought: "Tout est à sa place.",
    thoughtSub: "« Je suis présent et disponible »",
    symptoms: [
      "Rythme cardiaque régulier, HRV élevée",
      "Tension stable",
      "Respiration ample et naturelle",
      "Digestion fluide",
      "Calme alerte, concentration claire",
      "Énergie disponible et ajustable",
      "Sommeil réparateur",
    ],
  },
  {
    id: "sympa",
    key: "Sympathique excessif",
    mode: "Mode survie",
    range: [70, 100],
    color: "#c94a1a",
    bg: "#fef0e8",
    border: "#e06030",
    bgSoft: "#fdf6f2",
    borderSoft: "#f5e0d5",
    thought: "Urgence !",
    thoughtSub: "« Je dois tout gérer, tout de suite »",
    symptoms: [
      "Tachycardie : rythme cardiaque accéléré",
      "Hypertension : tension qui monte",
      "Respiration courte et thoracique",
      "Digestion bloquée, boule au ventre",
      "Tension musculaire, mâchoires serrées",
      "Hypervigilance, pensées qui tournent",
      "Sommeil fragmenté, réveils nocturnes",
    ],
  },
];
function getZone(val) {
  if (val < 30) return GAUGE_ZONES[0];
  if (val > 70) return GAUGE_ZONES[2];
  return GAUGE_ZONES[1];
}
function NervousSystemGauge() {
  const [val, setVal] = useStateW(50);
  const t = val / 100;
  const zone = getZone(val); // Face color: blue-ish left, green center, orange right
  let faceFill, faceStroke;
  if (t < 0.3) {
    const p = t / 0.3; // 0 at far left, 1 at zone edge
    faceFill = `rgb(${Math.round(lerp(180, 235, p))},${Math.round(lerp(205, 235, p))},${Math.round(lerp(240, 200, p))})`;
    faceStroke = "#4a7ddc";
  } else if (t < 0.7) {
    faceFill = "#f4e9c6";
    faceStroke = "#c9a646";
  } else {
    const p = (t - 0.7) / 0.3;
    faceFill = `rgb(${Math.round(lerp(244, 255, p))},${Math.round(lerp(233, 180, p))},${Math.round(lerp(198, 80, p))})`;
    faceStroke = `rgb(${Math.round(lerp(201, 200, p))},${Math.round(lerp(166, 80, p))},70)`;
  } // Eyes: droopy/closed at far left (lethargy), normal in middle, wide at far right (alarm)
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
  } // Mouth: flat/frown on lethargy side, smile center, tense on survival side
  let mouthD, mouthSW;
  if (t < 0.15) {
    mouthD = "M266 282 Q280 278, 294 282";
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
    mouthD = "M266 280 Q280 287, 294 280";
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
  const zzOp = t < 0.2 ? Math.min(1, (0.2 - t) / 0.2) : 0; // Needle rotation: -90° at left, 0 center, +90° right
  const needleAngle = (val - 50) * 1.8;
  return /*#__PURE__*/ React.createElement(
    "div",
    { style: { maxWidth: 920, width: "100%", margin: "0 auto", fontFamily: "Inter,sans-serif", color: "#2d2d2d" } },
    /*#__PURE__*/ React.createElement(
      "div",
      {
        style: {
          position: "relative",
          width: "100%",
          height: "clamp(220px, 42vw, 310px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          marginBottom: 10,
        },
      },
      /*#__PURE__*/ React.createElement(
        "svg",
        { viewBox: "0 0 560 300", style: { width: "100%", maxWidth: 560, height: "auto", overflow: "visible" } },
        /*#__PURE__*/ React.createElement(
          "defs",
          null,
          /*#__PURE__*/ React.createElement(
            "linearGradient",
            { id: "arcGrad", x1: "0%", y1: "0%", x2: "100%", y2: "0%" },
            /*#__PURE__*/ React.createElement("stop", { offset: "0%", stopColor: "#4a7ddc" }),
            /*#__PURE__*/ React.createElement("stop", { offset: "25%", stopColor: "#b8cef0" }),
            /*#__PURE__*/ React.createElement("stop", { offset: "38%", stopColor: "#7fb58f" }),
            /*#__PURE__*/ React.createElement("stop", { offset: "50%", stopColor: "#4e9e6d" }),
            /*#__PURE__*/ React.createElement("stop", { offset: "62%", stopColor: "#7fb58f" }),
            /*#__PURE__*/ React.createElement("stop", { offset: "75%", stopColor: "#f0c8a8" }),
            /*#__PURE__*/ React.createElement("stop", { offset: "100%", stopColor: "#e06030" }),
          ),
        ),
        /*#__PURE__*/ React.createElement("path", {
          d: "M 50 270 A 230 230 0 0 1 510 270",
          fill: "none",
          stroke: "url(#arcGrad)",
          strokeWidth: "26",
          strokeLinecap: "round",
        }),
        [0.3, 0.7].map((p, i) => {
          const a = Math.PI * (1 - p);
          const x1 = 280 + Math.cos(a) * 218;
          const y1 = 270 - Math.sin(a) * 218;
          const x2 = 280 + Math.cos(a) * 244;
          const y2 = 270 - Math.sin(a) * 244;
          return /*#__PURE__*/ React.createElement("line", {
            key: i,
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2,
            stroke: "#fff",
            strokeWidth: "2",
            opacity: "0.85",
          });
        }),
        /*#__PURE__*/ React.createElement(
          "text",
          { x: "30", y: "95", textAnchor: "start", fontSize: "11", fontWeight: "700", fill: "#2955a8", letterSpacing: "0.8" },
          "L\xC9THARGIE",
        ),
        /*#__PURE__*/ React.createElement(
          "text",
          { x: "280", y: "22", textAnchor: "middle", fontSize: "12", fontWeight: "700", fill: "#2d7a4a", letterSpacing: "0.8" },
          "\xC9QUILIBRE",
        ),
        /*#__PURE__*/ React.createElement(
          "text",
          { x: "530", y: "95", textAnchor: "end", fontSize: "11", fontWeight: "700", fill: "#c94a1a", letterSpacing: "0.8" },
          "SURVIE",
        ),
        /*#__PURE__*/ React.createElement(
          "g",
          { transform: `rotate(${needleAngle}, 280, 270)`, style: { transition: "transform .5s cubic-bezier(0.22,1,0.36,1)" } },
          /*#__PURE__*/ React.createElement("line", {
            x1: "280",
            y1: "270",
            x2: "280",
            y2: "75",
            stroke: "#1a1a1a",
            strokeWidth: "3",
            strokeLinecap: "round",
          }),
          /*#__PURE__*/ React.createElement("circle", { cx: "280", cy: "75", r: "4", fill: "#1a1a1a" }),
        ),
        /*#__PURE__*/ React.createElement(
          "g",
          { style: { transition: "all .4s ease" } },
          /*#__PURE__*/ React.createElement("circle", {
            cx: "280",
            cy: "270",
            r: "26",
            fill: faceFill,
            stroke: faceStroke,
            strokeWidth: "2.5",
          }),
          /*#__PURE__*/ React.createElement("ellipse", { cx: "271", cy: 264 + eyeOffsetY, rx: eyeRx, ry: eyeRy, fill: "#2d2d2d" }),
          /*#__PURE__*/ React.createElement("ellipse", { cx: "289", cy: 264 + eyeOffsetY, rx: eyeRx, ry: eyeRy, fill: "#2d2d2d" }),
          /*#__PURE__*/ React.createElement("path", {
            d: mouthD,
            fill: "none",
            stroke: "#2d2d2d",
            strokeWidth: mouthSW,
            strokeLinecap: "round",
          }),
          /*#__PURE__*/ React.createElement(
            "g",
            { opacity: sweatOp },
            /*#__PURE__*/ React.createElement("ellipse", { cx: "302", cy: "258", rx: "3", ry: "5", fill: "#88ccff" }),
          ),
          /*#__PURE__*/ React.createElement(
            "g",
            { opacity: zzOp, fill: "#4a7ddc", fontSize: "11", fontWeight: "700", fontFamily: "Inter" },
            /*#__PURE__*/ React.createElement("text", { x: "302", y: "252" }, "z"),
            /*#__PURE__*/ React.createElement("text", { x: "308", y: "244" }, "Z"),
          ),
        ),
      ),
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      { style: { position: "relative", width: "100%", height: 30, marginBottom: 6 } },
      /*#__PURE__*/ React.createElement("div", {
        style: {
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          height: 10,
          borderRadius: 5,
          transform: "translateY(-50%)",
          background: "linear-gradient(to right, #4a7ddc 0%, #b8cef0 25%, #4e9e6d 45%, #4e9e6d 55%, #f0c8a8 75%, #e06030 100%)",
        },
      }),
      /*#__PURE__*/ React.createElement("input", {
        type: "range",
        min: "0",
        max: "100",
        value: val,
        onChange: (e) => setVal(parseInt(e.target.value)),
        style: {
          position: "absolute",
          width: "100%",
          top: 0,
          height: 30,
          appearance: "none",
          background: "transparent",
          cursor: "pointer",
          zIndex: 2,
        },
      }),
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 20,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        },
      },
      /*#__PURE__*/ React.createElement("span", { style: { color: "#2955a8" } }, "Repos"),
      /*#__PURE__*/ React.createElement("span", { style: { color: "#2d7a4a" } }, "\xC9quilibre"),
      /*#__PURE__*/ React.createElement("span", { style: { color: "#c94a1a" } }, "Survie"),
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      { style: { position: "relative", minHeight: 280 } },
      GAUGE_ZONES.map((z) => {
        const isActive = z.id === zone.id;
        return /*#__PURE__*/ React.createElement(
          "div",
          {
            key: z.id,
            style: {
              position: isActive ? "relative" : "absolute",
              inset: isActive ? "auto" : 0,
              top: isActive ? "auto" : 0,
              opacity: isActive ? 1 : 0,
              transform: isActive ? "translateY(0)" : "translateY(8px)",
              transition: "opacity .45s cubic-bezier(0.22,1,0.36,1), transform .45s cubic-bezier(0.22,1,0.36,1)",
              pointerEvents: isActive ? "auto" : "none",
              borderRadius: 18,
              padding: "22px 22px 24px",
              background: z.bg,
              border: `2px solid ${z.border}`,
              boxShadow: `0 10px 30px ${z.border}22`,
            },
          },
          /*#__PURE__*/ React.createElement(
            "div",
            { style: { display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap", marginBottom: 4 } },
            /*#__PURE__*/ React.createElement(
              "span",
              { style: { fontWeight: 800, fontSize: 13, letterSpacing: "1.4px", textTransform: "uppercase", color: z.color } },
              z.key,
            ),
            /*#__PURE__*/ React.createElement(
              "span",
              { style: { fontFamily: "'Fraunces',serif", fontStyle: "italic", fontSize: 13, color: z.color, opacity: 0.75 } },
              z.mode,
            ),
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            { style: { fontFamily: "'Fraunces',serif", fontSize: 19, color: z.color, marginBottom: 16, lineHeight: 1.35 } },
            z.thought,
            " ",
            /*#__PURE__*/ React.createElement("span", { style: { fontStyle: "italic", opacity: 0.7, fontSize: 15 } }, z.thoughtSub),
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: { fontWeight: 700, fontSize: 10.5, letterSpacing: "1px", textTransform: "uppercase", marginBottom: 8, color: "#999" },
            },
            "Ce que tu ressens",
          ),
          /*#__PURE__*/ React.createElement(
            "ul",
            {
              style: {
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
                gap: "4px 20px",
              },
            },
            z.symptoms.map((s) =>
              /*#__PURE__*/ React.createElement(
                "li",
                { key: s, style: { fontSize: 13, color: "#444", padding: "4px 0 4px 14px", position: "relative", lineHeight: 1.45 } },
                /*#__PURE__*/ React.createElement("span", {
                  style: {
                    position: "absolute",
                    left: 0,
                    top: 10,
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: z.color,
                    display: "inline-block",
                  },
                }),
                s,
              ),
            ),
          ),
        );
      }),
    ),
  );
} // ─── Organ Explorer ───────────────────────────────────────────────
function OrganExplorer() {
  const [active, setActive] = useStateW("coeur");
  const cur = ORGANS.find((o) => o.id === active) || ORGANS[0];
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      style: {
        margin: "32px 0",
        background: "#fff",
        border: "1px solid #f0f0f1",
        borderRadius: 16,
        padding: 16,
        boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
      },
    },
    /*#__PURE__*/ React.createElement(
      "div",
      { style: { display: "flex", overflowX: "auto", gap: 8, paddingBottom: 12, marginBottom: 16, scrollbarWidth: "none" } },
      ORGANS.map((o) =>
        /*#__PURE__*/ React.createElement(
          "button",
          {
            key: o.id,
            onClick: () => setActive(o.id),
            style: {
              padding: "6px 16px",
              fontSize: 12,
              fontWeight: 500,
              borderRadius: 9999,
              whiteSpace: "nowrap",
              cursor: "pointer",
              background: active === o.id ? "#1a1a1a" : "#f5f5f7",
              border: "1px solid " + (active === o.id ? "#1a1a1a" : "#e5e5ea"),
              color: active === o.id ? "#fff" : "#666",
              transition: "all .15s",
            },
          },
          o.name,
        ),
      ),
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 12 } },
      /*#__PURE__*/ React.createElement(
        "div",
        { style: { padding: 16, borderRadius: 12, background: "rgba(254,235,214,0.5)", borderLeft: "4px solid #fb923c" } },
        /*#__PURE__*/ React.createElement(
          "h4",
          {
            style: {
              fontSize: 10,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              fontWeight: 700,
              color: "#c2410c",
              margin: "0 0 4px",
            },
          },
          "Mode Survie",
        ),
        /*#__PURE__*/ React.createElement("p", { style: { fontSize: 14, color: "#1d1d1f", lineHeight: 1.45, margin: 0 } }, cur.sympa),
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        { style: { padding: 16, borderRadius: 12, background: "rgba(219,234,254,0.5)", borderLeft: "4px solid #60a5fa" } },
        /*#__PURE__*/ React.createElement(
          "h4",
          {
            style: {
              fontSize: 10,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              fontWeight: 700,
              color: "#1d4ed8",
              margin: "0 0 4px",
            },
          },
          "Mode Repos",
        ),
        /*#__PURE__*/ React.createElement("p", { style: { fontSize: 14, color: "#1d1d1f", lineHeight: 1.45, margin: 0 } }, cur.para),
      ),
    ),
  );
} // ─── Hormone Explorer ─────────────────────────────────────────────
const HORMONES = [
  // Sympathique
  {
    id: "adrenaline",
    name: "Adrénaline",
    system: "sympathique",
    tagline: "La décharge immédiate",
    effect: "Accélère le cœur, ouvre les bronches, tend les muscles. Prépare à l'action en quelques secondes.",
  },
  {
    id: "noradrenaline",
    name: "Noradrénaline",
    system: "sympathique",
    tagline: "Vigilance & focus",
    effect: "Augmente l'attention, contracte les vaisseaux, redirige le sang vers les muscles. Te maintient en alerte.",
  },
  {
    id: "cortisol",
    name: "Cortisol",
    system: "sympathique",
    tagline: "Stress prolongé",
    effect: "Maintient le corps en alerte sur la durée. En excès : sommeil perturbé, immunité affaiblie, brouillard mental.",
  },
  {
    id: "glucagon",
    name: "Glucagon",
    system: "sympathique",
    tagline: "Carburant d'urgence",
    effect: "Libère du glucose dans le sang pour nourrir muscles et cerveau en mode action.",
  }, // Parasympathique
  {
    id: "acetylcholine",
    name: "Acétylcholine",
    system: "parasympathique",
    tagline: "Le frein du nerf vague",
    effect: "Ralentit le cœur, approfondit la respiration, relance la digestion. C'est la signature chimique du calme.",
  },
  {
    id: "ocytocine",
    name: "Ocytocine",
    system: "parasympathique",
    tagline: "Lien & sécurité",
    effect: "Libérée au contact, à la confiance. Apaise le système nerveux et réduit la perception du danger.",
  },
  {
    id: "sérotonine",
    name: "Sérotonine",
    system: "parasympathique",
    tagline: "Équilibre & bien-être",
    effect: "Stabilise l'humeur, régule le sommeil, l'appétit et la digestion (95 % produite dans l'intestin).",
  },
  {
    id: "gaba",
    name: "GABA",
    system: "parasympathique",
    tagline: "Neuromédiateur apaisant",
    effect: "Principal frein du système nerveux. Réduit l'excitation neuronale et favorise la détente.",
  },
  {
    id: "melatonine",
    name: "Mélatonine",
    system: "parasympathique",
    tagline: "Récupération",
    effect: "Déclenche le sommeil profond et la régénération cellulaire. Sécrétée quand la lumière baisse.",
  },
];
const SYS = {
  sympathique: { label: "Sympathique", sub: "Survie · action", color: "#c94a1a", bg: "#fef0e8", border: "#e06030", soft: "#fdf6f2" },
  parasympathique: {
    label: "Parasympathique",
    sub: "Repos · régénération",
    color: "#2955a8",
    bg: "#eef2fc",
    border: "#4a7ddc",
    soft: "#f5f7fd",
  },
};
function HormoneWidget() {
  const [active, setActive] = useStateW("adrenaline");
  const cur = HORMONES.find((h) => h.id === active);
  const sys = SYS[cur.system];
  return /*#__PURE__*/ React.createElement(
    "div",
    { style: { maxWidth: 820, margin: "0 auto", fontFamily: "Inter,sans-serif" } },
    /*#__PURE__*/ React.createElement(
      "div",
      { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 18 }, className: "ic-hw-cols" },
      ["sympathique", "parasympathique"].map((key) => {
        const s = SYS[key];
        const activeHere = cur.system === key;
        return /*#__PURE__*/ React.createElement(
          "div",
          {
            key: key,
            style: {
              padding: "12px 14px 14px",
              borderRadius: 14,
              background: activeHere ? s.bg : "#fafaf8",
              border: `1.5px solid ${activeHere ? s.border : "#ebe8e2"}`,
              transition: "all .35s",
            },
          },
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                fontSize: 10.5,
                fontWeight: 700,
                letterSpacing: "1.2px",
                color: s.color,
                textTransform: "uppercase",
                marginBottom: 2,
              },
            },
            s.label,
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: { fontFamily: "'Fraunces',serif", fontStyle: "italic", fontSize: 12, color: s.color, opacity: 0.7, marginBottom: 10 },
            },
            s.sub,
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            { style: { display: "flex", gap: 6, flexWrap: "wrap" } },
            HORMONES.filter((h) => h.system === key).map((h) =>
              /*#__PURE__*/ React.createElement(
                "button",
                {
                  key: h.id,
                  onClick: () => setActive(h.id),
                  style: {
                    padding: "6px 12px",
                    borderRadius: 999,
                    fontSize: 12.5,
                    fontWeight: 500,
                    cursor: "pointer",
                    background: active === h.id ? "#1a1a1a" : "#fff",
                    color: active === h.id ? "#fff" : "#2d2d2d",
                    border: `1px solid ${active === h.id ? "#1a1a1a" : "#e5e1d9"}`,
                    transition: "all .2s",
                  },
                },
                h.name,
              ),
            ),
          ),
        );
      }),
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        style: {
          padding: "18px 22px",
          borderRadius: 14,
          background: "#fff",
          border: `1.5px solid ${sys.border}`,
          transition: "border-color .35s",
        },
      },
      /*#__PURE__*/ React.createElement(
        "div",
        { style: { display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap", marginBottom: 6 } },
        /*#__PURE__*/ React.createElement(
          "span",
          { style: { fontFamily: "'Fraunces',serif", fontSize: 22, color: "#1a1a1a", letterSpacing: "-0.015em" } },
          cur.name,
        ),
        /*#__PURE__*/ React.createElement(
          "span",
          { style: { fontFamily: "'Fraunces',serif", fontStyle: "italic", fontSize: 13, color: sys.color } },
          "\xB7 ",
          cur.tagline,
        ),
      ),
      /*#__PURE__*/ React.createElement("div", { style: { fontSize: 14.5, color: "#4a4a4a", lineHeight: 1.55 } }, cur.effect),
    ),
    /*#__PURE__*/ React.createElement(
      "style",
      null,
      `
        @media (max-width: 560px) {
          .ic-hw-cols { grid-template-columns: 1fr !important; }
        }
      `,
    ),
  );
}
Object.assign(window, { BrainEmotionWidget, NervousSystemGauge, OrganExplorer, HormoneWidget }); // ─── Organ Diagnostic (hero widget) ───────────────────────────────
// Compact 3×3 grid that swaps in-place for a detail panel. Mobile-first.
const DIAG_ORGANS = [
  {
    id: "cerveau",
    name: "Cerveau",
    color: "#8a6bb1",
    bg: "#f1ecf6",
    alert: "Brouillard mental, difficultés à décider, maux de tête, pertes de mémoire, concentration difficile.",
    balance: "Esprit clair, décisions fluides, mémoire nette, concentration soutenue, sérénité mentale.",
  },
  {
    id: "coeur",
    name: "Cœur",
    color: "#c84d4d",
    bg: "#fbeeee",
    alert: "Hypertension, palpitations, oppression thoracique, rythme rapide.",
    balance: "Tension stable, rythme cardiaque lent, battements amples.",
  },
  {
    id: "estomac",
    name: "Estomac",
    color: "#d98142",
    bg: "#fbf0e6",
    alert: "Acidité, reflux, nœud à l'estomac, crampes.",
    balance: "Digestion confortable, légèreté, appétit régulé.",
  },
  {
    id: "intestins",
    name: "Intestins",
    color: "#c9a23a",
    bg: "#faf4df",
    alert: "Ballonnements, constipation, transit bloqué, douleurs.",
    balance: "Transit fluide et régulier, confort abdominal.",
  },
  {
    id: "respiration",
    name: "Respiration",
    color: "#4a7fb0",
    bg: "#eaf1f8",
    alert: "Respiration haute et courte, sensation d'étouffement, \naccélération de la fréquence respiratoire.\n",
    balance: "Respiration profonde et diaphragmatique, souffle calme et ample.",
  },
  {
    id: "muscles",
    name: "Muscles",
    color: "#4a9a8b",
    bg: "#e7f3f0",
    alert: "Tensions, raideurs, tremblements, besoin impérieux de bouger.\nhypertonie. \n",
    balance: "Souplesse articulaire, fluidité du mouvement, relâchement.",
  },
  {
    id: "glycemie",
    name: "Glycémie",
    color: "#6d9b54",
    bg: "#eef4e7",
    alert: "Fringales sucrées, augmentation de la glycémie,\ncoups de fatigue.\n",
    balance: "Glycémie stable, énergie durable, pas de « crash ».",
  },
  {
    id: "peau",
    name: "Peau",
    color: "#c5758d",
    bg: "#f9ecef",
    alert: "Hypersensibilité, démangeaisons, rougeurs, chaleur diffuse.",
    balance: "Peau apaisée, calme, bonne régulation thermique.",
  },
  {
    id: "douleur",
    name: "Douleur",
    color: "#6b7684",
    bg: "#eef0f2",
    alert: "Douleurs diffuses, inflammation, hypersensibilité au moindre stimulus.",
    balance: "Confort physique, seuil de douleur normal, récupération rapide.",
  },
];
const DIAG_ICONS = {
  cerveau: [
    "M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",
    "M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",
  ],
  coeur: ["M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"],
  estomac: [
    "M10 4h1.5A3.5 3.5 0 0 1 15 7.5v1A2.5 2.5 0 0 0 17.5 11A2.5 2.5 0 0 1 20 13.5V15a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5V9a5 5 0 0 1 4-4.9",
    "M10 4V2.5",
  ],
  intestins: [
    "M6 4c0-.8.7-1.5 1.5-1.5h9A1.5 1.5 0 0 1 18 4c0 .8-.7 1.5-1.5 1.5h-8A1.5 1.5 0 0 0 7 7c0 .8.7 1.5 1.5 1.5h8A1.5 1.5 0 0 1 18 10c0 .8-.7 1.5-1.5 1.5h-9A1.5 1.5 0 0 0 6 13c0 .8.7 1.5 1.5 1.5h9A1.5 1.5 0 0 1 17 16c0 .8-.7 1.5-1.5 1.5h-9A1.5 1.5 0 0 0 5 19v1",
  ],
  respiration: [
    "M12 3v10",
    "M12 13c-.6-2.7-2.7-5-5.3-5C4.7 8 3.5 9.2 3.5 11.3v5.2C3.5 18.4 5 20 6.8 20c2.5 0 5-2.3 5.2-7z",
    "M12 13c.6-2.7 2.7-5 5.3-5 2 0 3.2 1.2 3.2 3.3v5.2c0 1.9-1.5 3.5-3.3 3.5-2.5 0-5-2.3-5.2-7z",
  ],
  muscles: ["M7 9a5 5 0 0 1 10 0v6a5 5 0 0 1-10 0z", "M10 9h4", "M10 12h4", "M10 15h4"],
  glycemie: ["M12 3s-7 7.5-7 11.5a7 7 0 0 0 14 0C19 10.5 12 3 12 3z", "M8 15l2-2 2 2 2-2 2 2"],
  peau: ["M5 12a7 7 0 0 1 14 0", "M8 13a4 4 0 0 1 8 0", "M10.5 14a1.5 1.5 0 0 1 3 0", "M11.5 15.5a.5.5 0 0 1 1 0"],
  douleur: ["M13 3L4 14h6l-1 8 9-12h-6l1-7z"],
};
function DiagIcon({ id, size = 26 }) {
  return /*#__PURE__*/ React.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.6",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      style: { display: "block" },
    },
    DIAG_ICONS[id].map((d, i) => /*#__PURE__*/ React.createElement("path", { key: i, d: d })),
  );
}
function OrganDiagnostic() {
  const [currentId, setCurrentId] = useStateW(null);
  const [swapping, setSwapping] = useStateW(false);
  const current = DIAG_ORGANS.find((o) => o.id === currentId);
  const open = (id) => {
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
    const onKey = (e) => {
      if (e.key === "Escape" && currentId) close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [currentId]);
  return /*#__PURE__*/ React.createElement(
    "div",
    { className: "ic-diag", style: { margin: "20px 0 8px" } },
    /*#__PURE__*/ React.createElement(
      "div",
      {
        style: {
          position: "relative",
          background: "#fff",
          border: "1px solid rgba(0,0,0,0.08)",
          borderRadius: 18,
          overflow: "hidden",
          display: "grid",
        },
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          style: {
            gridArea: "1 / 1",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 4,
            padding: 8,
            opacity: currentId ? 0 : 1,
            pointerEvents: currentId ? "none" : "auto",
            transition: "opacity 280ms cubic-bezier(0.22,0.61,0.36,1)",
          },
        },
        DIAG_ORGANS.map((o) =>
          /*#__PURE__*/ React.createElement(
            "button",
            {
              key: o.id,
              type: "button",
              onClick: () => open(o.id),
              "aria-label": `Voir les symptômes : ${o.name}`,
              className: "ic-diag-tile",
              style: {
                "--c": o.color,
                "--cbg": o.bg,
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                padding: "20px 8px 18px",
                background: "transparent",
                border: 0,
                borderRadius: 12,
                cursor: "pointer",
                color: o.color,
                fontFamily: "inherit",
                transition: "background 260ms cubic-bezier(0.22,0.61,0.36,1)",
              },
            },
            /*#__PURE__*/ React.createElement(DiagIcon, { id: o.id, size: 26 }),
            /*#__PURE__*/ React.createElement(
              "span",
              { style: { fontSize: 11.5, fontWeight: 500, whiteSpace: "nowrap", color: "#4a4a4a", letterSpacing: "-0.005em" } },
              o.name,
            ),
          ),
        ),
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          style: {
            gridArea: "1 / 1",
            opacity: currentId ? 1 : 0,
            pointerEvents: currentId ? "auto" : "none",
            transition: "opacity 280ms cubic-bezier(0.22,0.61,0.36,1)",
            padding: "20px 22px 24px",
            display: "flex",
            flexDirection: "column",
          },
        },
        current &&
          /*#__PURE__*/ React.createElement(
            React.Fragment,
            null,
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 16,
                  paddingBottom: 14,
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
                },
              },
              /*#__PURE__*/ React.createElement(
                "button",
                {
                  type: "button",
                  onClick: close,
                  "aria-label": "Retour \xE0 la liste",
                  style: {
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    background: "transparent",
                    border: "1px solid rgba(0,0,0,0.08)",
                    cursor: "pointer",
                    color: "#4a4a4a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontFamily: "inherit",
                  },
                },
                /*#__PURE__*/ React.createElement(
                  "svg",
                  {
                    width: "15",
                    height: "15",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  },
                  /*#__PURE__*/ React.createElement("path", { d: "M19 12H5" }),
                  /*#__PURE__*/ React.createElement("path", { d: "M12 19l-7-7 7-7" }),
                ),
              ),
              /*#__PURE__*/ React.createElement(
                "div",
                {
                  style: {
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    background: current.bg,
                    color: current.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    opacity: swapping ? 0 : 1,
                    transition: "opacity 200ms",
                  },
                },
                /*#__PURE__*/ React.createElement(DiagIcon, { id: current.id, size: 22 }),
              ),
              /*#__PURE__*/ React.createElement(
                "span",
                {
                  style: {
                    fontFamily: "'Fraunces',serif",
                    fontStyle: "italic",
                    fontWeight: 500,
                    fontSize: 22,
                    letterSpacing: "-0.015em",
                    color: current.color,
                    flex: 1,
                    minWidth: 0,
                    opacity: swapping ? 0 : 1,
                    transition: "opacity 200ms",
                  },
                },
                current.name,
              ),
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                className: "ic-diag-cols",
                style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, opacity: swapping ? 0 : 1, transition: "opacity 200ms" },
              },
              /*#__PURE__*/ React.createElement(
                "div",
                null,
                /*#__PURE__*/ React.createElement(
                  "span",
                  {
                    style: {
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 11.5,
                      fontWeight: 500,
                      letterSpacing: "0.02em",
                      padding: "4px 9px",
                      borderRadius: 999,
                      marginBottom: 10,
                      color: "#b94848",
                      background: "#f6e8e8",
                    },
                  },
                  /*#__PURE__*/ React.createElement("span", { style: { width: 5, height: 5, borderRadius: "50%", background: "#b94848" } }),
                  "En alerte",
                ),
                /*#__PURE__*/ React.createElement(
                  "p",
                  { style: { fontSize: 14, lineHeight: 1.55, color: "#1b1b1b", margin: 0 } },
                  current.alert,
                ),
              ),
              /*#__PURE__*/ React.createElement(
                "div",
                null,
                /*#__PURE__*/ React.createElement(
                  "span",
                  {
                    style: {
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 11.5,
                      fontWeight: 500,
                      letterSpacing: "0.02em",
                      padding: "4px 9px",
                      borderRadius: 999,
                      marginBottom: 10,
                      color: "#527d54",
                      background: "#e9efe7",
                    },
                  },
                  /*#__PURE__*/ React.createElement("span", { style: { width: 5, height: 5, borderRadius: "50%", background: "#527d54" } }),
                  "En \xE9quilibre",
                ),
                /*#__PURE__*/ React.createElement(
                  "p",
                  { style: { fontSize: 14, lineHeight: 1.55, color: "#1b1b1b", margin: 0 } },
                  current.balance,
                ),
              ),
            ),
          ),
      ),
    ),
    /*#__PURE__*/ React.createElement(
      "style",
      null,
      `
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
      `,
    ),
  );
}
Object.assign(window, { OrganDiagnostic }); /* ═══ guide.jsx ═══ */ // Nervous System Guide page — hero schema + 6 sections + footer
const { useEffect: useEffectG, useRef: useRefG, useState: useStateG } = React;
const STEPS = [
  {
    id: "pensee",
    num: "01",
    title: "La pensée",
    desc: "Positive ou négative : activité électrique",
    chip: "✋ Méditation",
    action: "interrompt",
    accent: "#9B7FE8",
    bg: "#F4EEFB",
    ink: "#6B4FA8",
  },
  {
    id: "cerveau",
    num: "02",
    title: "La naissance de l'émotion",
    desc: "Zones positives ou négatives renforcées",
    chip: "🎯 Visualisation",
    action: "recâblage",
    accent: "#5E8BD9",
    bg: "#ECF2FB",
    ink: "#3A5FA0",
  },
  {
    id: "nerveux",
    num: "03",
    title: "Système nerveux",
    desc: "Sympathique (alerte) ou parasympathique (repos)",
    chip: "🌬 Respiration",
    action: "nerf vague",
    accent: "#4E7A5F",
    bg: "#E8EFE9",
    ink: "#14362B",
  },
  {
    id: "hormones",
    num: "04",
    title: "Hormones",
    desc: "Cortisol · Adrénaline : amplifient l'état",
    accent: "#E8A558",
    bg: "#FBF2E6",
    ink: "#A06522",
  },
  {
    id: "corps",
    num: "05",
    title: "Le corps réagit",
    desc: "Tensions, fatigue, brouillard, palpitations…",
    accent: "#E87885",
    bg: "#FBEDEF",
    ink: "#A84953",
  },
  {
    id: "boucle",
    num: "↻",
    title: "Nouvelles pensées",
    desc: "La boucle se referme, le pattern se renforce",
    accent: "#9B9BA8",
    bg: "#F2F2F4",
    ink: "#5A5A66",
    isLoop: true,
  },
  {
    id: "pratiques",
    num: "✱",
    title: "Les pratiques méditatives",
    desc: "Tes 3 leviers de régulation : Méditation · Respiration · Visualisation",
    chip: "🧘 Briser",
    action: "la boucle",
    accent: "#4E9E8A",
    bg: "#E9F4F0",
    ink: "#2E6A5C",
    isPractice: true,
  },
];
const CONN_LABELS = [
  "Active des zones du cerveau",
  "Signal électrique vers le SNA",
  "Ordre de sécrétion hormonale",
  "Sensations physiques dans le corps",
  "Ces sensations génèrent de nouvelles pensées",
];
function NervousSystemGuide({ onGo }) {
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
    window.addEventListener("scroll", onScroll, { passive: true });
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisibleSet((prev) => new Set([...prev, e.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px 100px 0px" },
    );
    document.querySelectorAll(".ns-stage-section").forEach((s) => obs.observe(s));
    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: "smooth" });
  };
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      style: {
        background: "#faf8f4",
        color: "#1a1a1a",
        fontFamily: "'DM Sans',sans-serif",
        minHeight: "100vh",
        position: "relative",
        lineHeight: 1.55,
      },
    },
    /*#__PURE__*/ React.createElement(GuideStyles, null),
    /*#__PURE__*/ React.createElement("div", {
      ref: progressRef,
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 4,
        background: "linear-gradient(90deg,#9B7FE8,#5E8BD9,#6FC48E,#E8A558,#E87885,#9B9BA8)",
        transformOrigin: "left center",
        transform: "scaleX(0)",
        zIndex: 100,
        transition: "transform .1s linear",
      },
    }),
    /*#__PURE__*/ React.createElement(
      "header",
      {
        id: "top",
        style: {
          minHeight: "100vh",
          padding: "60px 20px 48px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
      },
      /*#__PURE__*/ React.createElement(
        "div",
        { style: { maxWidth: "min(1100px, 92vw)", width: "100%" } },
        /*#__PURE__*/ React.createElement("img", {
          src: LOGO_SRC,
          alt: "Inner Clarity",
          style: { width: 96, height: 96, borderRadius: 20, objectFit: "contain", margin: "0 auto 20px", display: "block" },
        }),
        /*#__PURE__*/ React.createElement(
          "div",
          { style: { textAlign: "left", marginBottom: 48 } },
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#756f64",
                marginBottom: 14,
              },
            },
            "Guide \xB7 5 \xE9tapes",
          ),
          /*#__PURE__*/ React.createElement(
            "h1",
            {
              style: {
                fontSize: "clamp(30px, 5vw, 46px)",
                fontWeight: 600,
                letterSpacing: "-0.025em",
                margin: "0 0 18px",
                lineHeight: 1.1,
              },
            },
            "Et si ce que tu ressens dans ton corps venait d'une ",
            /*#__PURE__*/ React.createElement(
              "em",
              { style: { fontFamily: "'Fraunces',serif", fontStyle: "italic", fontWeight: 500 } },
              "suractivation",
            ),
            " de ton syst\xE8me nerveux ?",
          ),
          /*#__PURE__*/ React.createElement(
            "p",
            {
              style: {
                fontSize: "clamp(16px, 1.8vw, 19px)",
                color: "#4a4a4a",
                margin: "0 0 28px",
                lineHeight: 1.5,
                fontWeight: 300,
                maxWidth: "56ch",
              },
            },
            "Comprendre l'effet de la m\xE9ditation sur ton corps. ",
            /*#__PURE__*/ React.createElement(
              "em",
              { style: { fontFamily: "'Fraunces',serif", fontStyle: "italic", color: "#756f64", fontSize: "0.85em" } },
              "(Robin Meuter kin\xE9sith\xE9rapeute, 2026)",
            ),
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 14,
                margin: "16px 0 0",
                padding: "14px 20px",
                background: "#e9efe7",
                borderRadius: 14,
                cursor: "pointer",
              },
              onClick: () => onGo && onGo("test"),
            },
            /*#__PURE__*/ React.createElement(
              "span",
              { style: { fontSize: 13.5, color: "#14362B", fontWeight: 500, flex: 1 } },
              "Avant de lire ce guide, je te conseille de faire le test pour \xE9valuer ton syst\xE8me nerveux.",
            ),
            /*#__PURE__*/ React.createElement(
              "span",
              { style: { fontSize: 13, fontWeight: 600, color: "#14362B", whiteSpace: "nowrap" } },
              "Faire le test \u2192",
            ),
          ),
          /*#__PURE__*/ React.createElement(
            "p",
            { style: { fontSize: 14, color: "#756f64", margin: "24px 0 22px", fontFamily: "'Fraunces',serif", fontStyle: "italic" } },
            "Clique sur l'organe concern\xE9 pour voir ce qui se joue.",
          ),
          /*#__PURE__*/ React.createElement(OrganDiagnostic, null),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: 14,
                fontSize: 16,
                color: "#4a4a4a",
                lineHeight: 1.6,
                fontWeight: 300,
                marginTop: 20,
                marginBottom: 4,
                paddingLeft: 16,
                borderLeft: "2px solid #ebe8e2",
              },
            },
            /*#__PURE__*/ React.createElement(
              "p",
              { style: { margin: 0, color: "#1b1b1b", fontWeight: 400 } },
              "Si tu te reconnais dans un ou plusieurs de ces sympt\xF4mes, ce guide est pour toi.",
            ),
            /*#__PURE__*/ React.createElement(
              "p",
              { style: { margin: 0 } },
              "J'ai longtemps \xE9t\xE9 confront\xE9 \xE0 plusieurs de ces sympt\xF4mes, sans jamais vraiment comprendre comment en sortir. Un jour, en pratiquant la m\xE9ditation, j'ai pris conscience de l'effet direct de la pens\xE9e sur la physiologie, et ce que j'avais appris durant mes \xE9tudes m'a permis d'\xE9tablir le lien entre la pens\xE9e et le corps.",
            ),
            /*#__PURE__*/ React.createElement(
              "p",
              { style: { margin: 0 } },
              "Mon parcours de kin\xE9 m'a d'abord appris \xE0 lire le corps ; la pratique m\xE9ditative m'a appris \xE0 remonter plus haut, \xE0 la pens\xE9e qui d\xE9clenche tout. En croisant les deux, une logique appara\xEEt : une cascade de r\xE9actions physiologiques, pr\xE9visible, et surtout r\xE9versible.",
            ),
            /*#__PURE__*/ React.createElement(
              "p",
              { style: { margin: 0 } },
              "Voici cette logique, vulgaris\xE9e en 5 \xE9tapes. Suis le sch\xE9ma ci-dessous, prends ton temps.",
            ),
          ),
        ),
        /*#__PURE__*/ React.createElement(ViciousLoop, {
          steps: STEPS.slice(0, 6),
          practice: STEPS[6],
          labels: CONN_LABELS,
          onPick: (id) => scrollTo("section-" + id),
        }),
        /*#__PURE__*/ React.createElement(
          "p",
          {
            style: {
              marginTop: 32,
              color: "#9a9a9a",
              fontSize: 13,
              fontFamily: "'Fraunces',serif",
              fontStyle: "italic",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              animation: "nsBob 2s ease-in-out infinite",
            },
          },
          "Continue \xE0 scroller ",
          /*#__PURE__*/ React.createElement("span", null, "\u2193"),
        ),
      ),
    ),
    /*#__PURE__*/ React.createElement(
      Section,
      {
        id: "pensee",
        step: STEPS[0],
        visible: visibleSet.has("section-pensee"),
        onNext: () => scrollTo("section-cerveau"),
        nextLabel: "Zones du cerveau",
      },
      /*#__PURE__*/ React.createElement(
        "p",
        { className: "ns-prose" },
        "Quand une pens\xE9e survient, en fonction de son origine (positive ou n\xE9gative), elle active certaines zones de ton cerveau. Une pens\xE9e positive active des zones associ\xE9es au positif, une pens\xE9e n\xE9gative active des zones associ\xE9es au n\xE9gatif.",
        /*#__PURE__*/ React.createElement("br", null),
        "Cette pens\xE9e, c'est le d\xE9but d'une cascade de r\xE9actions dans tout ton corps.",
      ),
      /*#__PURE__*/ React.createElement(
        Retain,
        null,
        "La pens\xE9e n'est pas juste \"dans la t\xEAte\", c'est une impulsion \xE9lectrique bien r\xE9elle.",
      ),
    ),
    /*#__PURE__*/ React.createElement(
      Section,
      {
        id: "cerveau",
        step: STEPS[1],
        visible: visibleSet.has("section-cerveau"),
        onNext: () => scrollTo("section-nerveux"),
        nextLabel: "Syst\xE8me nerveux",
      },
      /*#__PURE__*/ React.createElement(
        "p",
        { className: "ns-prose", style: { marginBottom: 8 } },
        "Ces zones sont constitu\xE9es de neurones. Lorsqu'une pens\xE9e survient, le signal \xE9lectrique vient stimuler des zones pr\xE9cises, et c'est l'activation de ces zones qui forme une \xE9motion.",
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        { style: { margin: "4px 0 0" } },
        /*#__PURE__*/ React.createElement(BrainEmotionWidget, null),
      ),
      /*#__PURE__*/ React.createElement(
        "p",
        { className: "ns-prose" },
        "Une pens\xE9e inqui\xE9tante allume les zones d'alerte (formant l'anxi\xE9t\xE9 ou la peur), tandis qu'une pens\xE9e rassurante allume les zones de calme (formant la s\xE9curit\xE9). C'est cette \xE9motion qui va ensuite d\xE9terminer l'activation du syst\xE8me nerveux ainsi que la lib\xE9ration d'hormones, ces 2 processus impactant tout notre corps.",
      ),
      /*#__PURE__*/ React.createElement(
        Callout,
        null,
        "\uD83D\uDCA1 Plus on sollicite une zone, plus les connexions entre les neurones se renforcent. Plus elles se renforcent, plus l'\xE9motion que l'on sollicite souvent devient automatique. Entra\xEEnant avec elle la m\xEAme activation nerveuse et la m\xEAme cascade hormonale.",
      ),
      /*#__PURE__*/ React.createElement(
        "p",
        { className: "ns-prose" },
        "Une personne qui pense souvent de mani\xE8re n\xE9gative aura, par d\xE9faut, ces zones d'alerte souvent activ\xE9es, et inversement pour quelqu'un qui pense plut\xF4t positivement.",
      ),
      /*#__PURE__*/ React.createElement(
        Retain,
        null,
        "La pens\xE9e active des zones du cerveau qui forment l'\xE9motion, et plus on r\xE9p\xE8te ce chemin, plus notre cerveau l'emprunte facilement. C'est ce qu'on appelle la neuroplasticit\xE9, une notion essentielle pour reconfigurer ton syst\xE8me nerveux.",
      ),
    ),
    /*#__PURE__*/ React.createElement(
      Section,
      {
        id: "nerveux",
        step: STEPS[2],
        visible: visibleSet.has("section-nerveux"),
        onNext: () => scrollTo("section-hormones"),
        nextLabel: "Hormones",
      },
      /*#__PURE__*/ React.createElement(
        "p",
        { className: "ns-prose" },
        "C'est l'\xE9motion g\xE9n\xE9r\xE9e par notre cerveau \xE0 l'\xE9tape pr\xE9c\xE9dente qui va dicter le comportement de notre syst\xE8me nerveux autonome. Celui-ci fonctionne avec deux grands \xAB r\xE9gimes \xBB :",
      ),
      /*#__PURE__*/ React.createElement(
        "ul",
        { className: "ns-list" },
        /*#__PURE__*/ React.createElement(
          "li",
          null,
          /*#__PURE__*/ React.createElement("strong", null, "Le syst\xE8me nerveux sympathique (Mode Survie) :"),
          " c'est le r\xE9gime d'urgence et de stress. Il agit comme la p\xE9dale d'acc\xE9l\xE9ration de ton corps.",
        ),
        /*#__PURE__*/ React.createElement(
          "li",
          null,
          /*#__PURE__*/ React.createElement("strong", null, "Le syst\xE8me nerveux parasympathique (Mode Repos) :"),
          " c'est le r\xE9gime de calme et de r\xE9cup\xE9ration. Il agit comme la p\xE9dale de frein.",
        ),
      ),
      /*#__PURE__*/ React.createElement(
        Callout,
        null,
        "\uD83D\uDCA1 Ces 2 syst\xE8mes g\xE8rent l'activation de tous les organes de notre corps. Ce n'est pas un interrupteur ON/OFF. C'est une jauge : un niveau d'activation qui se d\xE9place progressivement dans un sens ou dans l'autre.",
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        { style: { margin: "48px 0" } },
        /*#__PURE__*/ React.createElement(NervousSystemGauge, null),
      ),
      /*#__PURE__*/ React.createElement(
        Retain,
        null,
        "Selon l'\xE9motion ressentie, ta biologie bascule entre repos et survie, et c'est l'\xE9quilibre entre ces deux syst\xE8mes qui te maintient stable.",
      ),
    ),
    /*#__PURE__*/ React.createElement(
      Section,
      {
        id: "hormones",
        step: STEPS[3],
        visible: visibleSet.has("section-hormones"),
        onNext: () => scrollTo("section-corps"),
        nextLabel: "Le corps r\xE9agit",
      },
      /*#__PURE__*/ React.createElement(
        "p",
        { className: "ns-prose" },
        "Selon le syst\xE8me nerveux actif, ton cerveau d\xE9clenche la lib\xE9ration d'hormones : des messagers chimiques qui voyagent dans le sang et ",
        /*#__PURE__*/ React.createElement("strong", null, "verrouillent l'\xE9tat en cours"),
        ". Elles sont la signature biochimique de ton \xE9motion.",
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        { style: { margin: "16px 0 20px" } },
        /*#__PURE__*/ React.createElement(HormoneWidget, null),
      ),
      /*#__PURE__*/ React.createElement(
        "p",
        { className: "ns-prose" },
        "Aucune de ces hormones n'est \xAB mauvaise \xBB. Tu as besoin des deux familles pour vivre : l'une pour agir, l'autre pour r\xE9cup\xE9rer. ",
        /*#__PURE__*/ React.createElement("strong", null, "Le probl\xE8me, c'est le d\xE9s\xE9quilibre."),
        " Quand un syst\xE8me reste activ\xE9 trop longtemps, ou qu'il s'effondre, les concentrations hormonales se d\xE9r\xE8glent, le corps suit, et les sympt\xF4mes apparaissent : fatigue, insomnies, digestion fragile, anxi\xE9t\xE9, brouillard\u2026",
      ),
      /*#__PURE__*/ React.createElement(
        Retain,
        null,
        "Ce n'est pas \xAB parasympathique = bien, sympathique = mal \xBB. C'est l'",
        /*#__PURE__*/ React.createElement("strong", null, "\xE9quilibre"),
        " entre les deux qui te maintient en bonne sant\xE9. Tout le travail consiste \xE0 revenir vers cet \xE9quilibre.",
      ),
    ),
    /*#__PURE__*/ React.createElement(
      Section,
      {
        id: "corps",
        step: STEPS[4],
        visible: visibleSet.has("section-corps"),
        onNext: () => scrollTo("section-boucle"),
        nextLabel: "La boucle se referme",
      },
      /*#__PURE__*/ React.createElement(
        "p",
        { className: "ns-prose" },
        "Ces hormones et cette activation nerveuse ont des effets tr\xE8s concrets et physiques sur ton corps. C'est ta biologie qui r\xE9pond directement \xE0 tes pens\xE9es. Tu peux ressentir ces effets \xE0 travers ton c\u0153ur, ton estomac, tes muscles, ta respiration\u2026 selon que ton syst\xE8me nerveux est en mode survie ou en mode repos.",
      ),
      /*#__PURE__*/ React.createElement(OrganExplorer, null),
      /*#__PURE__*/ React.createElement(Retain, null, "Ton corps est le miroir de ton syst\xE8me nerveux et donc de ta pens\xE9e."),
    ),
    /*#__PURE__*/ React.createElement(
      Section,
      {
        id: "boucle",
        step: STEPS[5],
        visible: visibleSet.has("section-boucle"),
        onNext: () => scrollTo("section-pratiques"),
        nextLabel: "Les pratiques m\xE9ditatives",
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          style: {
            background: "#faf6ef",
            padding: "32px 40px",
            borderRadius: 24,
            border: "1px solid #f0ebe3",
            marginBottom: 32,
            boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
          },
        },
        /*#__PURE__*/ React.createElement(
          "div",
          {
            style: { display: "flex", flexDirection: "column", gap: 24, fontSize: 18, color: "#4a4a4a", lineHeight: 1.65, fontWeight: 300 },
          },
          /*#__PURE__*/ React.createElement(
            "p",
            { style: { margin: 0 } },
            "C'est le point le plus crucial de tout ce processus : la cha\xEEne d'\xE9v\xE9nements que nous venons de voir n'est pas une ligne droite, c'est un cercle.",
          ),
          /*#__PURE__*/ React.createElement(
            "p",
            { style: { margin: 0 } },
            "Les sensations physiques qui apparaissent dans ton corps (les tensions, la respiration courte, la boule au ventre) envoient un signal de retour \xE0 ton cerveau.",
          ),
          /*#__PURE__*/ React.createElement(
            "p",
            { style: { margin: 0 } },
            "Le cerveau analyse cet \xE9tat physique et en conclut : \xAB Mon corps est en \xE9tat d'alerte, c'est donc qu'il y a un vrai danger. \xBB Il va alors naturellement g\xE9n\xE9rer de nouvelles pens\xE9es du m\xEAme type pour justifier ce qu'il ressent. Ces pens\xE9es relancent l'\xE9motion, qui r\xE9active le syst\xE8me nerveux, et le cycle recommence.",
          ),
          /*#__PURE__*/ React.createElement(
            "p",
            { style: { margin: 0 } },
            "Avec le temps, le corps s'habitue \xE0 baigner dans cette chimie. Cet \xE9tat de tension devient ton mode par d\xE9faut.",
          ),
        ),
      ),
      /*#__PURE__*/ React.createElement(
        Retain,
        null,
        "Ce stress constant n'est pas ton identit\xE9, c'est un simple programme biologique. Et comme tout apprentissage neurologique, il peut \xEAtre court-circuit\xE9 et r\xE9\xE9duqu\xE9.",
      ),
    ),
    /*#__PURE__*/ React.createElement(
      Section,
      { id: "pratiques", step: STEPS[6], visible: visibleSet.has("section-pratiques"), isLast: true },
      /*#__PURE__*/ React.createElement(
        "p",
        { className: "ns-prose" },
        "Avec ma formation scientifique, j'ai toujours eu besoin de comprendre comment les choses fonctionnent. Cela fait maintenant pr\xE8s de deux ans que je me passionne pour les techniques de m\xE9ditation, et c'est justement cette logique physiologique qui m'a convaincu de m'y plonger.",
      ),
      /*#__PURE__*/ React.createElement(
        "p",
        { className: "ns-prose" },
        "Je sais qu'il est utile, voire indispensable pour beaucoup d'entre nous, de comprendre ce cheminement rationnel avant de se lancer. Pour commencer \xE0 briser tes propres automatismes, les trois pratiques ci-dessous sont un excellent point de d\xE9part. Non seulement leur efficacit\xE9 est v\xE9rifi\xE9e scientifiquement, mais c'est gr\xE2ce \xE0 cette validation que nous savons exactement ",
        /*#__PURE__*/ React.createElement("strong", null, "\xE0 quel endroit de la boucle elles agissent"),
        ".",
      ),
      /*#__PURE__*/ React.createElement(PracticesCarousel, null),
      /*#__PURE__*/ React.createElement(
        Retain,
        null,
        "Chacune de ces pratiques cible un maillon pr\xE9cis de la boucle. Ensemble, elles te redonnent la main sur ton \xE9tat int\xE9rieur.",
      ),
    ),
    /*#__PURE__*/ React.createElement(
      "footer",
      { style: { padding: "80px 20px 120px", textAlign: "center", background: "#fff", borderTop: "1px solid #ebe8e2" } },
      /*#__PURE__*/ React.createElement(
        "div",
        { style: { maxWidth: 560, margin: "0 auto" } },
        /*#__PURE__*/ React.createElement(
          "h2",
          {
            style: {
              fontFamily: "'Fraunces',serif",
              fontWeight: 400,
              fontSize: "clamp(26px, 4vw, 36px)",
              margin: "0 0 14px",
              letterSpacing: "-0.02em",
            },
          },
          "Pr\xEAt \xE0 ",
          /*#__PURE__*/ React.createElement("em", { style: { color: "#5a5a5a", fontWeight: 300 } }, "sortir de la boucle"),
          " ?",
        ),
        /*#__PURE__*/ React.createElement(
          "p",
          { style: { color: "#5a5a5a", fontSize: 15.5, lineHeight: 1.6, margin: "0 0 12px" } },
          "Maintenant que tu as fait ton test et lu ce guide, tu comprends le m\xE9canisme. La prochaine \xE9tape\xA0: passer \xE0 la pratique.",
        ),
        /*#__PURE__*/ React.createElement(
          "p",
          { style: { color: "#5a5a5a", fontSize: 15.5, lineHeight: 1.6, margin: "0 0 32px" } },
          "Mon accompagnement individuel de 6 semaines est con\xE7u pour \xE7a\xA0: chaque semaine, on cible ensemble une \xE9tape de la cha\xEEne pour t'apprendre \xE0 briser le cercle vicieux et retrouver ta r\xE9gulation. \xC0 la fin du parcours, tu auras les cl\xE9s pour g\xE9rer tes r\xE9actions en toute autonomie. Si tu veux en parler, je te propose un appel d\xE9couverte gratuit de 15 \xE0 20 minutes pour \xE9changer sur tes r\xE9sultats et voir si cet accompagnement est fait pour toi.",
        ),
        /*#__PURE__*/ React.createElement(
          "button",
          {
            onClick: () => window.open("https://calendly.com/meuter-robin/30min", "_blank"),
            style: {
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "16px 30px",
              background: "#14362B",
              color: "#fff",
              borderRadius: 9999,
              border: "none",
              cursor: "pointer",
              fontSize: 15,
              fontWeight: 600,
              fontFamily: "inherit",
            },
          },
          "R\xE9server mon appel d\xE9couverte ",
          /*#__PURE__*/ React.createElement("span", null, "\u2192"),
        ),
      ),
    ),
  );
}
function ViciousLoop({ steps, practice, labels, onPick }) {
  const [isDesktop, setIsDesktop] = useStateG(typeof window !== "undefined" && window.matchMedia("(min-width: 900px)").matches);
  useEffectG(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    const on = (e) => setIsDesktop(e.matches);
    mq.addEventListener ? mq.addEventListener("change", on) : mq.addListener(on);
    return () => {
      mq.removeEventListener ? mq.removeEventListener("change", on) : mq.removeListener(on);
    };
  }, []);
  return /*#__PURE__*/ React.createElement(
    "div",
    { style: { margin: "0 auto", width: "100%" } },
    isDesktop
      ? /*#__PURE__*/ React.createElement(ViciousLoopCircle, { steps: steps, labels: labels, onPick: onPick })
      : /*#__PURE__*/ React.createElement(ViciousLoopStack, { steps: steps, labels: labels, onPick: onPick }),
    /*#__PURE__*/ React.createElement(
      "div",
      { style: { marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center", gap: 10, position: "relative", zIndex: 2 } },
      /*#__PURE__*/ React.createElement(
        "div",
        { style: { fontFamily: "'Fraunces',serif", fontStyle: "italic", fontSize: 13, color: "#9a9a9a", letterSpacing: "0.01em" } },
        "Sortir de la boucle",
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        { style: { width: "100%", maxWidth: 420 } },
        /*#__PURE__*/ React.createElement(StageCard, { step: practice, onClick: () => onPick(practice.id), small: true }),
      ),
    ),
  );
}
/* ── Desktop: true geometric circle ── */ function ViciousLoopCircle({ steps, labels, onPick }) {
  const N = steps.length;
  const size = 640;
  const cx = size / 2,
    cy = size / 2;
  const R = 238;
  const ringR = 200;
  const angleFor = (i) => -90 + (i * 360) / N;
  const cardW = 200;
  return /*#__PURE__*/ React.createElement(
    "div",
    { style: { position: "relative", width: "100%", maxWidth: size, margin: "0 auto", aspectRatio: "1 / 1" } },
    /*#__PURE__*/ React.createElement(
      "svg",
      {
        viewBox: `0 0 ${size} ${size}`,
        width: "100%",
        height: "100%",
        style: { display: "block", overflow: "visible" },
        "aria-hidden": "true",
      },
      /*#__PURE__*/ React.createElement(
        "defs",
        null,
        /*#__PURE__*/ React.createElement(
          "linearGradient",
          { id: "vl-grad", x1: "0", y1: "0", x2: "1", y2: "1" },
          steps.map((s, i) =>
            /*#__PURE__*/ React.createElement("stop", { key: i, offset: `${(i / (steps.length - 1)) * 100}%`, stopColor: s.accent }),
          ),
        ),
        /*#__PURE__*/ React.createElement(
          "filter",
          { id: "vl-glow", x: "-20%", y: "-20%", width: "140%", height: "140%" },
          /*#__PURE__*/ React.createElement("feGaussianBlur", { stdDeviation: "3" }),
        ),
      ),
      /*#__PURE__*/ React.createElement("circle", {
        cx: cx,
        cy: cy,
        r: ringR,
        fill: "none",
        stroke: "url(#vl-grad)",
        strokeWidth: "18",
        opacity: "0.07",
        filter: "url(#vl-glow)",
      }),
      /*#__PURE__*/ React.createElement("circle", { cx: cx, cy: cy, r: ringR, fill: "none", stroke: "#ebe8e2", strokeWidth: "1.5" }),
      /*#__PURE__*/ React.createElement("circle", {
        className: "vl-flow",
        cx: cx,
        cy: cy,
        r: ringR,
        fill: "none",
        stroke: "url(#vl-grad)",
        strokeWidth: "3",
        strokeLinecap: "round",
        strokeDasharray: "12 16",
      }),
      steps.map((s, i) => {
        const a = angleFor(i) + 360 / N / 2;
        const rad = (a * Math.PI) / 180;
        const ax = cx + ringR * Math.cos(rad);
        const ay = cy + ringR * Math.sin(rad);
        const rot = a + 90;
        const next = steps[(i + 1) % N];
        return /*#__PURE__*/ React.createElement(
          "g",
          { key: "arr-" + i, transform: `translate(${ax} ${ay}) rotate(${rot})` },
          /*#__PURE__*/ React.createElement("path", {
            d: "M -5 -4 L 0 0 L -5 4",
            fill: "none",
            stroke: next.accent,
            strokeWidth: "2.25",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
        );
      }),
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        style: {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          textAlign: "center",
          pointerEvents: "none",
          width: 180,
        },
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          style: { fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#756f64", marginBottom: 6 },
        },
        "Cercle vicieux",
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          style: {
            fontFamily: "'Fraunces',serif",
            fontSize: 22,
            fontWeight: 500,
            color: "#1b1b1b",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          },
        },
        /*#__PURE__*/ React.createElement("em", { style: { fontStyle: "italic" } }, "Pens\xE9e"),
        /*#__PURE__*/ React.createElement("span", { style: { color: "#c4bfb3", margin: "0 6px" } }, "\xB7"),
        "Corps",
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        { style: { fontSize: 12, color: "#756f64", fontFamily: "'Fraunces',serif", fontStyle: "italic", marginTop: 6 } },
        "Une cascade qui se renforce",
      ),
    ),
    steps.map((s, i) => {
      const a = angleFor(i);
      const rad = (a * Math.PI) / 180;
      const xPct = 50 + (R / size) * 100 * Math.cos(rad);
      const yPct = 50 + (R / size) * 100 * Math.sin(rad);
      return /*#__PURE__*/ React.createElement(
        "div",
        { key: s.id, style: { position: "absolute", left: `${xPct}%`, top: `${yPct}%`, transform: "translate(-50%, -50%)", width: cardW } },
        /*#__PURE__*/ React.createElement(CircleCard, { step: s, onClick: () => onPick(s.id) }),
      );
    }),
  );
}
/* ── Mobile: stacked cards, serpentine animated rail that loops back ── */ function ViciousLoopStack({ steps, labels, onPick }) {
  return /*#__PURE__*/ React.createElement(
    "div",
    { style: { position: "relative", maxWidth: 520, margin: "0 auto", padding: "0 8px" } },
    /*#__PURE__*/ React.createElement(
      "div",
      { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 14 } },
      /*#__PURE__*/ React.createElement(
        "span",
        { style: { fontSize: 10.5, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#756f64" } },
        "Cercle vicieux \u21BB",
      ),
    ),
    steps.map((s, i) =>
      /*#__PURE__*/ React.createElement(
        React.Fragment,
        { key: s.id },
        /*#__PURE__*/ React.createElement(
          "div",
          { style: { position: "relative", zIndex: 1 } },
          /*#__PURE__*/ React.createElement(StageCard, { step: s, onClick: () => onPick(s.id), small: true }),
        ),
        i < steps.length - 1 &&
          labels &&
          labels[i] &&
          /*#__PURE__*/ React.createElement(
            "div",
            {
              className: "vl-conn-gap",
              style: {
                position: "relative",
                minHeight: 38,
                paddingLeft: 52,
                display: "flex",
                alignItems: "center",
                "--from": steps[i].accent,
                "--to": steps[i + 1].accent,
              },
            },
            /*#__PURE__*/ React.createElement(
              "span",
              { style: { fontFamily: "'Fraunces',serif", fontStyle: "italic", fontSize: 12.5, color: "#9a9a9a" } },
              labels[i],
            ),
          ),
      ),
    ),
  );
}
function CircleCard({ step, onClick }) {
  return /*#__PURE__*/ React.createElement(
    "a",
    {
      href: "#section-" + step.id,
      onClick: (e) => {
        e.preventDefault();
        onClick && onClick();
      },
      style: {
        display: "block",
        padding: "12px 14px 14px",
        background: "#fff",
        border: `1.5px solid ${step.accent}`,
        borderRadius: 16,
        textDecoration: "none",
        color: "#1a1a1a",
        boxShadow: "0 6px 22px rgba(30,20,10,0.06)",
        transition: "transform .3s, box-shadow .3s",
        position: "relative",
        overflow: "hidden",
        isolation: "isolate",
        zIndex: 1,
      },
      onMouseOver: (e) => {
        e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
        e.currentTarget.style.boxShadow = "0 14px 34px rgba(30,20,10,0.12)";
      },
      onMouseOut: (e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "0 6px 22px rgba(30,20,10,0.06)";
      },
    },
    /*#__PURE__*/ React.createElement("span", {
      style: { position: "absolute", inset: 0, background: step.bg, opacity: 0.45, zIndex: -1 },
    }),
    /*#__PURE__*/ React.createElement(
      "div",
      { style: { display: "flex", alignItems: "baseline", gap: 8, marginBottom: 2 } },
      /*#__PURE__*/ React.createElement(
        "span",
        {
          style: {
            fontFamily: "'Fraunces',serif",
            fontSize: 22,
            fontWeight: 500,
            color: step.ink,
            lineHeight: 1,
            letterSpacing: "-0.02em",
          },
        },
        step.num,
      ),
      /*#__PURE__*/ React.createElement(
        "span",
        { style: { fontFamily: "'DM Sans',sans-serif", fontSize: 14.5, fontWeight: 600, color: step.ink, lineHeight: 1.2 } },
        step.title,
      ),
    ),
    /*#__PURE__*/ React.createElement(
      "p",
      { style: { fontSize: 11.5, color: "#6a6a6a", margin: 0, lineHeight: 1.35, fontWeight: 400 } },
      step.desc,
    ),
  );
}
function StageCard({ step, onClick, small }) {
  const pad = small ? "20px 22px 20px 76px" : "28px 28px 28px 100px";
  const numSize = small ? 30 : 52;
  const numLeft = small ? 20 : 28;
  return /*#__PURE__*/ React.createElement(
    "a",
    {
      href: "#section-" + step.id,
      onClick: (e) => {
        e.preventDefault();
        onClick && onClick();
      },
      style: {
        position: "relative",
        display: "block",
        padding: pad,
        background: "#fff",
        border: `1.5px solid ${step.accent}`,
        borderRadius: small ? 18 : 22,
        textDecoration: "none",
        color: "#1a1a1a",
        cursor: "pointer",
        overflow: "hidden",
        isolation: "isolate",
        transition: "transform .35s, box-shadow .35s",
      },
      onMouseOver: (e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.06)";
      },
      onMouseOut: (e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "";
      },
    },
    /*#__PURE__*/ React.createElement("span", { style: { position: "absolute", inset: 0, background: step.bg, opacity: 0.5, zIndex: -1 } }),
    /*#__PURE__*/ React.createElement(
      "span",
      {
        style: {
          position: "absolute",
          top: "50%",
          left: numLeft,
          transform: "translateY(-50%)",
          fontFamily: "'Fraunces',serif",
          fontSize: numSize,
          fontWeight: 500,
          color: step.ink,
          lineHeight: 1,
          letterSpacing: "-0.03em",
          opacity: 0.9,
        },
      },
      step.num,
    ),
    step.chip &&
      /*#__PURE__*/ React.createElement(
        "span",
        {
          style: {
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: small ? 11 : 11.5,
            fontWeight: 500,
            padding: "3px 9px",
            borderRadius: 9999,
            background: "#fff",
            border: `1px solid ${step.accent}`,
            color: step.ink,
            marginBottom: 7,
            letterSpacing: "0.01em",
          },
        },
        /*#__PURE__*/ React.createElement("span", null, step.chip),
        /*#__PURE__*/ React.createElement("span", { style: { opacity: 0.45, fontSize: 10 } }, "\u2192"),
        /*#__PURE__*/ React.createElement("span", { style: { color: "#5a5a5a", fontWeight: 400 } }, step.action),
      ),
    /*#__PURE__*/ React.createElement(
      "h3",
      {
        style: {
          fontFamily: small ? "'DM Sans',sans-serif" : "'Fraunces',serif",
          fontSize: small ? 16.5 : "clamp(24px, 4vw, 32px)",
          fontWeight: small ? 600 : 400,
          margin: "0 0 3px",
          color: step.ink,
          letterSpacing: "-0.015em",
        },
      },
      step.title,
    ),
    /*#__PURE__*/ React.createElement(
      "p",
      { style: { fontSize: small ? 13 : 15, color: "#5a5a5a", margin: 0, lineHeight: 1.45 } },
      step.desc,
    ),
  );
}
function Section({ id, step, visible, onNext, nextLabel, isLast, children }) {
  return /*#__PURE__*/ React.createElement(
    "section",
    { id: "section-" + id, className: "ns-stage-section", style: { position: "relative", padding: "16px 20px", scrollMarginTop: 20 } },
    /*#__PURE__*/ React.createElement(
      "div",
      { style: { maxWidth: "min(1100px, 92vw)", margin: "0 auto", position: "relative" } },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          style: {
            position: "relative",
            zIndex: 5,
            padding: "28px 28px 28px 100px",
            background: step.bg,
            border: `1.5px solid ${step.accent}`,
            borderRadius: 22,
            overflow: "hidden",
            marginBottom: 20,
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1) translateY(0)" : "scale(0.98) translateY(10px)",
            transition: "opacity .4s cubic-bezier(0.16,1,0.3,1), transform .4s cubic-bezier(0.16,1,0.3,1)",
          },
        },
        /*#__PURE__*/ React.createElement(
          "span",
          {
            style: {
              position: "absolute",
              top: "50%",
              left: 28,
              transform: "translateY(-50%)",
              fontFamily: "'Fraunces',serif",
              fontSize: step.isLoop ? 44 : 52,
              fontWeight: 500,
              color: step.ink,
              opacity: 0.9,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              zIndex: 1,
            },
          },
          step.num,
        ),
        /*#__PURE__*/ React.createElement(
          "div",
          { style: { position: "relative", zIndex: 1 } },
          step.chip &&
            /*#__PURE__*/ React.createElement(
              "span",
              {
                style: {
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 11.5,
                  fontWeight: 500,
                  padding: "4px 10px",
                  borderRadius: 9999,
                  background: "#fff",
                  border: `1px solid ${step.accent}`,
                  color: step.ink,
                  marginBottom: 8,
                },
              },
              /*#__PURE__*/ React.createElement("span", null, step.chip),
              /*#__PURE__*/ React.createElement("span", { style: { opacity: 0.45, fontSize: 10 } }, "\u2192"),
              /*#__PURE__*/ React.createElement("span", { style: { color: "#5a5a5a", fontWeight: 400 } }, step.action),
            ),
          /*#__PURE__*/ React.createElement(
            "h2",
            {
              style: {
                fontFamily: "'Fraunces',serif",
                fontWeight: 400,
                fontSize: "clamp(24px, 4vw, 32px)",
                color: step.ink,
                margin: "0 0 6px",
                letterSpacing: "-0.015em",
              },
            },
            step.title,
          ),
          /*#__PURE__*/ React.createElement("p", { style: { fontSize: 15, color: "#5a5a5a", margin: 0 } }, step.desc),
        ),
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          style: {
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(10px)",
            transition: "opacity .4s .05s cubic-bezier(0.16,1,0.3,1), transform .4s .05s cubic-bezier(0.16,1,0.3,1)",
          },
        },
        children,
      ),
      !isLast &&
        /*#__PURE__*/ React.createElement(
          "div",
          { style: { marginTop: 10, paddingTop: 6, borderTop: "1px dashed #ebe8e2", textAlign: "center" } },
          /*#__PURE__*/ React.createElement(
            "a",
            {
              href: "#",
              onClick: (e) => {
                e.preventDefault();
                onNext && onNext();
              },
              style: {
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: "#9a9a9a",
                textDecoration: "none",
                fontFamily: "'Fraunces',serif",
                fontStyle: "italic",
                fontSize: 14,
                transition: "color .3s",
              },
              onMouseOver: (e) => (e.currentTarget.style.color = "#5a5a5a"),
              onMouseOut: (e) => (e.currentTarget.style.color = "#9a9a9a"),
            },
            "\xC9tape suivante : ",
            nextLabel,
            " ",
            /*#__PURE__*/ React.createElement("span", null, "\u2193"),
          ),
        ),
    ),
  );
}
function Retain({ children }) {
  return /*#__PURE__*/ React.createElement(
    "div",
    { style: { borderLeft: "4px solid #000", paddingLeft: 20, paddingTop: 8, paddingBottom: 8, margin: "32px 0" } },
    /*#__PURE__*/ React.createElement(
      "p",
      { style: { fontWeight: 500, color: "#000", margin: 0, lineHeight: 1.55 } },
      "\u27A1\uFE0F \xC0 RETENIR : ",
      children,
    ),
  );
}
function Callout({ children }) {
  return /*#__PURE__*/ React.createElement(
    "div",
    { style: { background: "#f5f5f7", padding: 20, borderRadius: 16, margin: "8px 0 12px" } },
    /*#__PURE__*/ React.createElement("p", { style: { color: "#4a4a4a", margin: 0, fontWeight: 300, lineHeight: 1.6 } }, children),
  );
}
const PRACTICES = [
  {
    emoji: "✋",
    title: "Méditation de pleine conscience",
    tag: "Le coupe-circuit",
    target: "la pensée",
    color: "#9B7FE8",
    bg: "#F4EEFB",
    ink: "#6B4FA8",
    text: "Elle agit tout au début de la chaîne. Il ne s'agit pas de contrôler ou d'effacer tes pensées : elles seront toujours là. Il s'agit d'apprendre à les observer sans t'y accrocher. En refusant de les nourrir, tu les empêches de grandir et de maintenir la sur-activation de ton système nerveux. Le signal d'alarme s'éteint avant que l'engrenage ne s'emballe.",
  },
  {
    emoji: "🌬",
    title: "Respiration",
    tag: "La pédale de frein",
    target: "le système nerveux",
    color: "#4E7A5F",
    bg: "#E8EFE9",
    ink: "#2E5A3F",
    text: "Technique d'intervention redoutable quand ton système nerveux est déjà en surchauffe. Elle agit comme un frein direct pour le ramener à l'équilibre. La cohérence cardiaque en est un exemple : en rythmant ton souffle, tu stimules mécaniquement ton nerf vague. C'est un ordre biologique clair envoyé à ton corps pour quitter le mode survie.",
  },
  {
    emoji: "🎯",
    title: "Visualisation",
    tag: "Le recâblage neuronal",
    target: "l'émotion",
    color: "#5E8BD9",
    bg: "#ECF2FB",
    ink: "#3A6BC0",
    text: "Ton cerveau ne fait pas la différence entre ce que tu vis réellement et ce que tu imagines intensément. En suscitant volontairement des émotions positives, tu renforces les connexions dans les zones associées à la sécurité. C'est la neuroplasticité : plus tu pratiques, plus ces nouveaux chemins s'ancrent et plus l'apaisement devient automatique.",
  },
  {
    emoji: "🧬",
    title: "Neuroplasticité",
    tag: "Le principe commun",
    target: "tout le système",
    color: "#C97E4E",
    bg: "#F8EDE3",
    ink: "#8A4E28",
    text: "C'est le socle scientifique des trois pratiques. Ton cerveau n'est pas figé : il se recâble en permanence. À chaque action répétée, les neurones impliqués se connectent plus solidement, et l'action devient automatique. C'est vrai pour tout, du vélo aux pensées anxieuses. Les techniques méditatives exploitent délibérément ce mécanisme : elles sollicitent les bons circuits, suffisamment et assez souvent, pour réécrire le câblage par défaut. C'est pour ça qu'une pratique devient plus efficace avec le temps : tu n'apprends pas une technique, tu reprogrammes littéralement tes activations nerveuses et hormonales.",
  },
];
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
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, []);
  const goTo = (i) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cards = el.querySelectorAll("[data-card]");
    if (!cards[i]) return;
    el.scrollTo({ left: cards[i].offsetLeft, behavior: "smooth" });
  };
  const nudge = (dir) => goTo(Math.max(0, Math.min(PRACTICES.length - 1, active + dir)));
  return /*#__PURE__*/ React.createElement(
    "div",
    { style: { position: "relative", margin: "20px 0 12px" } },
    /*#__PURE__*/ React.createElement(
      "div",
      {
        ref: scrollerRef,
        className: "ic-practices-carousel",
        style: {
          display: "flex",
          gap: 16,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          padding: "4px 2px 12px",
          cursor: "grab",
        },
      },
      PRACTICES.map((p) =>
        /*#__PURE__*/ React.createElement(
          "div",
          { key: p.title, "data-card": true, style: { flex: "0 0 100%", scrollSnapAlign: "center", display: "flex" } },
          /*#__PURE__*/ React.createElement(PracticeCard, { p: p }),
        ),
      ),
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      { style: { marginTop: 8, display: "flex", alignItems: "center", gap: 14, padding: "0 2px" } },
      /*#__PURE__*/ React.createElement(
        "div",
        { style: { flex: 1, height: 3, borderRadius: 2, background: "#ebe8e2", position: "relative", overflow: "hidden" } },
        /*#__PURE__*/ React.createElement("div", {
          style: {
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: `${progress * 100}%`,
            background: "linear-gradient(to right, #9B7FE8, #4E7A5F, #5E8BD9)",
            transition: "width .15s linear",
            borderRadius: 2,
          },
        }),
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        { style: { display: "flex", gap: 6 } },
        PRACTICES.map((p, i) =>
          /*#__PURE__*/ React.createElement("button", {
            key: i,
            onClick: () => goTo(i),
            "aria-label": p.title,
            style: {
              width: i === active ? 22 : 8,
              height: 8,
              borderRadius: 4,
              border: "none",
              padding: 0,
              cursor: "pointer",
              background: i === active ? p.ink : "#d4d1cb",
              transition: "all .3s cubic-bezier(0.22,1,0.36,1)",
            },
          }),
        ),
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        { style: { fontSize: 12, color: "#9a9a9a", fontVariantNumeric: "tabular-nums", minWidth: 32, textAlign: "right" } },
        active + 1,
        /*#__PURE__*/ React.createElement("span", { style: { opacity: 0.4 } }, "/", PRACTICES.length),
      ),
      /*#__PURE__*/ React.createElement(
        "button",
        {
          onClick: () => nudge(1),
          "aria-label": "Suivant",
          disabled: active === PRACTICES.length - 1,
          style: {
            width: 34,
            height: 34,
            borderRadius: "50%",
            border: "1px solid #e5e1d9",
            background: "#fff",
            cursor: active === PRACTICES.length - 1 ? "default" : "pointer",
            opacity: active === PRACTICES.length - 1 ? 0.3 : 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#3a3a3a",
            fontSize: 15,
            transition: "all .2s",
            flexShrink: 0,
            position: "relative",
          },
        },
        "\u2192",
        active === 0 &&
          /*#__PURE__*/ React.createElement("span", {
            style: {
              position: "absolute",
              inset: -4,
              borderRadius: "50%",
              border: "2px solid #4E9E8A",
              opacity: 0.55,
              animation: "icPulseRing 1.8s ease-out infinite",
            },
          }),
      ),
    ),
    /*#__PURE__*/ React.createElement(
      "style",
      null,
      `
        .ic-practices-carousel::-webkit-scrollbar { display: none; }
        @keyframes icPulseRing {
          0%   { transform: scale(1);   opacity: 0.55; }
          80%  { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `,
    ),
  );
}
function PracticeCard({ p }) {
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      style: {
        width: "100%",
        boxSizing: "border-box",
        background: p.bg,
        borderRadius: 20,
        padding: "clamp(22px, 4vw, 30px)",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        border: `1.5px solid ${p.ink}15`,
        boxShadow: "0 2px 12px rgba(0,0,0,0.02)",
      },
    },
    /*#__PURE__*/ React.createElement(
      "div",
      { style: { display: "flex", alignItems: "flex-start", gap: 14 } },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          style: {
            fontSize: 22,
            lineHeight: 1,
            flexShrink: 0,
            width: 44,
            height: 44,
            borderRadius: 12,
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: `1px solid ${p.ink}20`,
          },
        },
        p.emoji,
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        { style: { flex: 1, minWidth: 0 } },
        /*#__PURE__*/ React.createElement(
          "div",
          {
            style: {
              fontFamily: "'Fraunces',serif",
              fontSize: "clamp(18px, 2.6vw, 22px)",
              color: p.ink,
              letterSpacing: "-0.015em",
              lineHeight: 1.2,
            },
          },
          p.title,
        ),
        /*#__PURE__*/ React.createElement(
          "div",
          { style: { fontFamily: "'Fraunces',serif", fontStyle: "italic", fontSize: 13, color: p.color, opacity: 0.85, marginTop: 3 } },
          p.tag,
        ),
      ),
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      {
        style: {
          display: "inline-flex",
          alignSelf: "flex-start",
          alignItems: "center",
          gap: 6,
          padding: "5px 11px",
          borderRadius: 999,
          background: "#fff",
          border: `1px solid ${p.ink}25`,
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.6px",
          textTransform: "uppercase",
          color: p.ink,
        },
      },
      "Agit sur",
      /*#__PURE__*/ React.createElement("span", { style: { opacity: 0.4 } }, "\u2192"),
      /*#__PURE__*/ React.createElement("span", { style: { color: p.color, fontWeight: 700 } }, p.target),
    ),
    /*#__PURE__*/ React.createElement(
      "div",
      { style: { fontSize: "clamp(14px, 2.2vw, 15.5px)", color: "#3a3a3a", lineHeight: 1.6, fontWeight: 300 } },
      p.text,
    ),
  );
}
function GuideStyles() {
  return /*#__PURE__*/ React.createElement(
    "style",
    null,
    `
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
  `,
  );
}
Object.assign(window, { NervousSystemGuide }); /* ═══ pages.jsx ═══ */ // Home, About, Workshops — new pages from upstream repo
const HOME_NAV = [
  { id: "home-hero", label: "Accueil" },
  { id: "home-modes", label: "Deux modes" },
  { id: "home-boucle", label: "La boucle" },
  { id: "section-accompagnement", label: "Accompagnement" },
  { id: "home-parcours", label: "Ton parcours" },
];
const HOME_CASCADE = [
  { label: "Une pensée", icon: "◎", color: "#8a6bb1" },
  { label: "Une émotion", icon: "◈", color: "#4a7fb0" },
  { label: "Le système nerveux", icon: "⟁", color: "#d98142" },
  { label: "Les hormones", icon: "✦", color: "#c84d4d" },
  { label: "Les symptômes", icon: "♥", color: "#14362B" },
];
const HOME_MODES = {
  left: {
    tag: "Sympathique",
    sub: "Mode alerte",
    color: "#e8a07a",
    items: ["Cœur qui s'emballe", "Respiration courte", "Muscles tendus", "Digestion bloquée", "Mental en surchauffe"],
  },
  right: {
    tag: "Parasympathique",
    sub: "Mode équilibre",
    color: "#9fc3a8",
    items: ["Cœur apaisé", "Respiration ample", "Muscles relâchés", "Digestion fluide", "Esprit clair"],
  },
};
const HOME_TREE_STAGES = {
  1: { ground: "M72,100 L128,100", trunk: "M100,100 L100,85", canopy: { cy: 76, r: 9 }, roots: ["M100,100 L100,110"] },
  2: {
    ground: "M56,100 L144,100",
    trunk: "M100,100 L100,67",
    canopy: { cy: 52, r: 15 },
    roots: ["M100,100 L100,119", "M100,100 Q92,109 83,113", "M100,100 Q108,109 117,113"],
  },
  3: {
    ground: "M42,100 L158,100",
    trunk: "M100,100 L100,56",
    canopy: { cy: 35, r: 21 },
    roots: [
      "M100,100 L100,126",
      "M100,100 Q90,112 77,118",
      "M100,100 Q110,112 123,118",
      "M100,100 Q86,104 66,107",
      "M100,100 Q114,104 134,107",
    ],
  },
  4: {
    ground: "M30,100 L170,100",
    trunk: "M100,100 L100,47",
    canopy: { cy: 23, r: 24 },
    roots: [
      "M100,100 L100,134",
      "M100,100 Q88,116 72,124",
      "M100,100 Q112,116 128,124",
      "M100,100 Q84,106 58,111",
      "M100,100 Q116,106 142,111",
      "M100,100 Q94,122 88,132",
      "M100,100 Q106,122 112,132",
    ],
  },
};
function HomeTree({ stage, width }) {
  const s = HOME_TREE_STAGES[stage];
  let di = 0;
  const nd = () => {
    di += 0.14;
    return di.toFixed(2) + "s";
  };
  return /*#__PURE__*/ React.createElement(
    "svg",
    {
      width: width,
      viewBox: "0 0 200 150",
      fill: "none",
      "aria-hidden": "true",
      style: { display: "block", overflow: "visible", height: "auto" },
    },
    /*#__PURE__*/ React.createElement("path", {
      className: "ht-d",
      d: s.ground,
      stroke: "#14362B",
      strokeOpacity: "0.2",
      strokeWidth: "1.5",
      pathLength: "1",
      style: { "--td": "0s" },
    }),
    /*#__PURE__*/ React.createElement("path", {
      className: "ht-d",
      d: s.trunk,
      stroke: "#14362B",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      pathLength: "1",
      style: { "--td": nd() },
    }),
    /*#__PURE__*/ React.createElement("circle", {
      className: "ht-d",
      cx: "100",
      cy: s.canopy.cy,
      r: s.canopy.r,
      stroke: "#527d54",
      strokeWidth: "2",
      pathLength: "1",
      style: { "--td": nd() },
    }),
    s.roots.map((r, i) =>
      /*#__PURE__*/ React.createElement("path", {
        key: i,
        className: "ht-d",
        d: r,
        stroke: "#14362B",
        strokeOpacity: "0.5",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        pathLength: "1",
        style: { "--td": nd() },
      }),
    ),
  );
}
function homeClamp01(v) {
  return Math.min(1, Math.max(0, v));
}
function useHomeScrub(ref, fn) {
  useEffectG(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}
function HomePage({ onGo }) {
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
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 8, behavior: "smooth" });
  };
  /* Top progress bar */ useEffectG(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight || 1;
      const p = homeClamp01((window.pageYOffset || 0) / max);
      if (progressRef.current) progressRef.current.style.transform = "scaleX(" + p.toFixed(4) + ")";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  /* Section dots */ useEffectG(() => {
    const root = rootRef.current;
    if (!root || !("IntersectionObserver" in window)) return;
    const secs = HOME_NAV.map((n) => root.querySelector("#" + n.id)).filter(Boolean);
    const setActive = (idx) => {
      if (!dotsRef.current) return;
      const dots = dotsRef.current.querySelectorAll(".ic-dot");
      dots.forEach((d, i) => d.classList.toggle("on", i === idx));
    };
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = secs.indexOf(e.target);
            if (idx >= 0) setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    secs.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);
  /* Reveal on enter */ useEffectG(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = Array.prototype.slice.call(root.querySelectorAll(".ic-reveal"));
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
  /* Hero scrub: fades + zooms away while scrolling */ useEffectG(() => {
    const el = heroInnerRef.current;
    if (!el) return;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let raf = 0;
    const tick = () => {
      raf = 0;
      const vh = window.innerHeight || 1;
      const p = homeClamp01((window.pageYOffset || 0) / (vh * 0.85));
      el.style.opacity = (1 - p).toFixed(3);
      el.style.transform = "translateY(" + (p * -44).toFixed(1) + "px) scale(" + (1 - p * 0.07).toFixed(4) + ")";
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  /* Deux modes : sympathique s'allume, puis parasympathique */ useHomeScrub(modesRef, (p, reduced) => {
    const root = modesInnerRef.current;
    if (!root || reduced) return;
    const L = root.querySelectorAll("[data-ml]");
    const R = root.querySelectorAll("[data-mr]");
    const div = root.querySelector("[data-mdiv]");
    const tail = root.querySelector("[data-mtail]");
    L.forEach((el, i) => {
      const t = homeClamp01((p - (0.03 + i * 0.058)) / 0.06);
      el.style.opacity = (0.2 + 0.8 * t).toFixed(3);
      el.style.transform = "translateX(" + ((t - 1) * 16).toFixed(1) + "px)";
    });
    if (div) div.style.transform = "scaleY(" + homeClamp01((p - 0.38) / 0.1).toFixed(3) + ")";
    R.forEach((el, i) => {
      const t = homeClamp01((p - (0.46 + i * 0.058)) / 0.06);
      el.style.opacity = (0.2 + 0.8 * t).toFixed(3);
      el.style.transform = "translateX(" + ((1 - t) * 16).toFixed(1) + "px)";
    });
    if (tail) {
      const t = homeClamp01((p - 0.84) / 0.12);
      tail.style.opacity = t.toFixed(3);
      tail.style.transform = "translateY(" + ((1 - t) * 20).toFixed(1) + "px)";
    }
  });
  /* La boucle : la chaîne se construit, puis zoom vers le cercle vicieux */ useHomeScrub(boucleRef, (p, reduced) => {
    if (reduced) return;
    const list = chainListRef.current;
    if (!list) return;
    list.querySelectorAll("[data-cs]").forEach((el, i) => {
      const t = homeClamp01((p - (0.02 + i * 0.13)) / 0.11);
      el.style.opacity = t.toFixed(3);
      el.style.transform = "translateY(" + ((1 - t) * 22).toFixed(1) + "px) scale(" + (0.94 + 0.06 * t).toFixed(4) + ")";
    });
    list.querySelectorAll("[data-cl]").forEach((el, i) => {
      const t = homeClamp01((p - (0.12 + i * 0.13)) / 0.08);
      el.style.transform = "scale(" + t.toFixed(3) + ")";
    });
  });
  const heroTitle = "Ton système nerveux a besoin d'équilibre.";
  return /*#__PURE__*/ React.createElement(
    "div",
    { ref: rootRef, style: { display: "flex", flexDirection: "column", alignItems: "center", width: "100%" } },
    /*#__PURE__*/ React.createElement(
      "div",
      { className: "ic-progress", "aria-hidden": "true" },
      /*#__PURE__*/ React.createElement("div", { className: "ic-progress-fill", ref: progressRef }),
    ),
    /*#__PURE__*/ React.createElement(
      "nav",
      { className: "ic-dots", "aria-label": "Navigation des sections", ref: dotsRef },
      HOME_NAV.map((n, i) =>
        /*#__PURE__*/ React.createElement(
          "button",
          {
            key: n.id,
            type: "button",
            className: "ic-dot" + (i === 0 ? " on" : ""),
            onClick: () => scrollToId(n.id),
            "aria-label": n.label,
          },
          /*#__PURE__*/ React.createElement("span", { className: "ic-dot-label" }, n.label),
        ),
      ),
    ),
    /*#__PURE__*/ React.createElement(
      "section",
      {
        id: "home-hero",
        style: {
          width: "100%",
          minHeight: "100vh",
          background: "#faf8f4",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 24px 88px",
          position: "relative",
          textAlign: "center",
          overflow: "hidden",
        },
      },
      /*#__PURE__*/ React.createElement(
        "div",
        { className: "ic-hero-bg", "aria-hidden": "true" },
        /*#__PURE__*/ React.createElement("span", { className: "ic-blob ic-blob-a" }),
        /*#__PURE__*/ React.createElement("span", { className: "ic-blob ic-blob-b" }),
        /*#__PURE__*/ React.createElement("span", { className: "ic-grain" }),
      ),
      /*#__PURE__*/ React.createElement(
        "p",
        { className: "ic-edge", "aria-hidden": "true" },
        "Science du cerveau \xB7 Pratiques m\xE9ditatives",
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          ref: heroInnerRef,
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            willChange: "opacity, transform",
            position: "relative",
            zIndex: 1,
          },
        },
        /*#__PURE__*/ React.createElement(
          "div",
          { className: "ic-hero-logo", style: { position: "relative" } },
          /*#__PURE__*/ React.createElement("span", { className: "ic-ring", "aria-hidden": "true" }),
          /*#__PURE__*/ React.createElement("span", { className: "ic-ring ic-ring-2", "aria-hidden": "true" }),
          /*#__PURE__*/ React.createElement("span", { className: "ic-ring ic-ring-3", "aria-hidden": "true" }),
          /*#__PURE__*/ React.createElement("img", {
            src: LOGO_SRC,
            alt: "Inner Clarity",
            style: { width: "clamp(100px, 12vw, 136px)", height: "auto", borderRadius: "50%", display: "block" },
          }),
        ),
        /*#__PURE__*/ React.createElement(
          "p",
          { className: "ic-kicker ic-fade-1", style: { margin: "26px 0 18px", color: "#527d54" } },
          "R\xE9gulation du syst\xE8me nerveux",
        ),
        /*#__PURE__*/ React.createElement(
          "h1",
          {
            style: {
              fontFamily: "'Fraunces',serif",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "clamp(38px, 6.2vw, 72px)",
              letterSpacing: "-0.022em",
              color: "#14362B",
              margin: "0 0 22px",
              lineHeight: 1.1,
              maxWidth: 860,
            },
          },
          heroTitle
            .split(" ")
            .map((w, i) =>
              /*#__PURE__*/ React.createElement(
                "span",
                { key: i, className: "ic-w", style: { "--wd": 0.12 + i * 0.07 + "s" } },
                w,
                i < heroTitle.split(" ").length - 1 ? "\u00A0" : "",
              ),
            ),
        ),
        /*#__PURE__*/ React.createElement(
          "p",
          {
            className: "ic-fade-2",
            style: {
              fontSize: "clamp(17px, 1.9vw, 21px)",
              color: "#5a5a5a",
              fontWeight: 300,
              maxWidth: 560,
              margin: "0 0 36px",
              lineHeight: 1.6,
            },
          },
          "\xC9value ton \xE9tat. Comprends la m\xE9canique.",
          /*#__PURE__*/ React.createElement("br", null),
          "Apprends \xE0 te r\xE9guler.",
        ),
        /*#__PURE__*/ React.createElement(
          "div",
          { className: "ic-fade-3", style: { display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" } },
          /*#__PURE__*/ React.createElement(
            "button",
            { type: "button", className: "ic-pill ic-pill-dark", onClick: () => onGo("test") },
            "Faire le test gratuit ",
            /*#__PURE__*/ React.createElement("span", { "aria-hidden": "true" }, "\u2192"),
          ),
          /*#__PURE__*/ React.createElement(
            "button",
            { type: "button", className: "ic-pill ic-pill-ghost", onClick: () => onGo("guide") },
            "Lire le guide",
          ),
        ),
        /*#__PURE__*/ React.createElement(
          "p",
          {
            className: "ic-fade-3",
            style: { fontSize: 14, color: "#756f64", margin: "20px 0 0", fontFamily: "'Fraunces',serif", fontStyle: "italic" },
          },
          "Aucune inscription requise. Tout est en acc\xE8s libre.",
        ),
        /*#__PURE__*/ React.createElement(
          "div",
          { className: "ic-reveal", style: { marginTop: "clamp(18px, 3.5vh, 36px)", "--d": "1.1s" } },
          /*#__PURE__*/ React.createElement(HomeTree, { stage: 1, width: 92 }),
        ),
      ),
      /*#__PURE__*/ React.createElement(
        "button",
        { type: "button", className: "ic-scrollcue ic-fade-3", onClick: () => scrollToId("home-modes"), "aria-label": "D\xE9couvrir" },
        /*#__PURE__*/ React.createElement(
          "svg",
          {
            width: "22",
            height: "22",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          /*#__PURE__*/ React.createElement("path", { d: "M6 9l6 6 6-6" }),
        ),
      ),
    ),
    /*#__PURE__*/ React.createElement(
      "section",
      { id: "home-modes", ref: modesRef, style: { width: "100%", height: "320vh", background: "#0e231c", position: "relative" } },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          style: {
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            overflow: "hidden",
          },
        },
        /*#__PURE__*/ React.createElement("span", {
          "aria-hidden": "true",
          style: {
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            width: "min(80vw, 820px)",
            aspectRatio: "1",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(127,169,140,0.10), rgba(127,169,140,0) 62%)",
            pointerEvents: "none",
          },
        }),
        /*#__PURE__*/ React.createElement(
          "div",
          {
            ref: modesInnerRef,
            style: { width: "100%", maxWidth: 920, display: "flex", flexDirection: "column", alignItems: "center", position: "relative" },
          },
          /*#__PURE__*/ React.createElement(
            "p",
            { className: "ic-kicker", style: { color: "#7fa98c", marginBottom: 14 } },
            "Ce qui se passe en toi",
          ),
          /*#__PURE__*/ React.createElement(
            "h2",
            {
              style: {
                fontFamily: "'Fraunces',serif",
                fontWeight: 400,
                fontSize: "clamp(28px, 4.6vw, 52px)",
                letterSpacing: "-0.02em",
                color: "#f5f3ee",
                margin: "0 0 clamp(28px, 5.5vh, 56px)",
                lineHeight: 1.12,
                textAlign: "center",
              },
            },
            "Deux modes. Un seul \xE9quilibre.",
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "1fr 2px 1fr",
                gap: "clamp(14px, 3.5vw, 52px)",
                width: "100%",
                alignItems: "stretch",
              },
            },
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "clamp(10px, 1.8vh, 17px)",
                  alignItems: "flex-end",
                  textAlign: "right",
                },
              },
              /*#__PURE__*/ React.createElement(
                "div",
                { "data-ml": true, style: { opacity: 0.2, willChange: "opacity, transform", marginBottom: 6 } },
                /*#__PURE__*/ React.createElement(
                  "p",
                  {
                    style: {
                      margin: 0,
                      fontSize: "clamp(11px, 1.3vw, 13px)",
                      fontWeight: 700,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: HOME_MODES.left.color,
                    },
                  },
                  HOME_MODES.left.tag,
                ),
                /*#__PURE__*/ React.createElement(
                  "p",
                  {
                    style: {
                      margin: "3px 0 0",
                      fontFamily: "'Fraunces',serif",
                      fontStyle: "italic",
                      fontSize: "clamp(13px, 1.5vw, 16px)",
                      color: "rgba(245,243,238,0.55)",
                    },
                  },
                  HOME_MODES.left.sub,
                ),
              ),
              HOME_MODES.left.items.map((it, i) =>
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    key: i,
                    "data-ml": true,
                    style: { display: "flex", alignItems: "center", gap: 11, opacity: 0.2, willChange: "opacity, transform" },
                  },
                  /*#__PURE__*/ React.createElement(
                    "span",
                    { style: { fontSize: "clamp(15px, 2.1vw, 20px)", fontWeight: 300, color: "#f5f3ee", lineHeight: 1.3 } },
                    it,
                  ),
                  /*#__PURE__*/ React.createElement("span", {
                    "aria-hidden": "true",
                    style: { width: 7, height: 7, borderRadius: "50%", background: HOME_MODES.left.color, flexShrink: 0 },
                  }),
                ),
              ),
            ),
            /*#__PURE__*/ React.createElement("div", {
              "data-mdiv": true,
              "aria-hidden": "true",
              style: {
                width: 2,
                background: "linear-gradient(to bottom, " + HOME_MODES.left.color + "88, " + HOME_MODES.right.color + "88)",
                transformOrigin: "top center",
                transform: "scaleY(0)",
                willChange: "transform",
                borderRadius: 1,
              },
            }),
            /*#__PURE__*/ React.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "clamp(10px, 1.8vh, 17px)",
                  alignItems: "flex-start",
                  textAlign: "left",
                },
              },
              /*#__PURE__*/ React.createElement(
                "div",
                { "data-mr": true, style: { opacity: 0.2, willChange: "opacity, transform", marginBottom: 6 } },
                /*#__PURE__*/ React.createElement(
                  "p",
                  {
                    style: {
                      margin: 0,
                      fontSize: "clamp(11px, 1.3vw, 13px)",
                      fontWeight: 700,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: HOME_MODES.right.color,
                    },
                  },
                  HOME_MODES.right.tag,
                ),
                /*#__PURE__*/ React.createElement(
                  "p",
                  {
                    style: {
                      margin: "3px 0 0",
                      fontFamily: "'Fraunces',serif",
                      fontStyle: "italic",
                      fontSize: "clamp(13px, 1.5vw, 16px)",
                      color: "rgba(245,243,238,0.55)",
                    },
                  },
                  HOME_MODES.right.sub,
                ),
              ),
              HOME_MODES.right.items.map((it, i) =>
                /*#__PURE__*/ React.createElement(
                  "div",
                  {
                    key: i,
                    "data-mr": true,
                    style: { display: "flex", alignItems: "center", gap: 11, opacity: 0.2, willChange: "opacity, transform" },
                  },
                  /*#__PURE__*/ React.createElement("span", {
                    "aria-hidden": "true",
                    style: { width: 7, height: 7, borderRadius: "50%", background: HOME_MODES.right.color, flexShrink: 0 },
                  }),
                  /*#__PURE__*/ React.createElement(
                    "span",
                    { style: { fontSize: "clamp(15px, 2.1vw, 20px)", fontWeight: 300, color: "#f5f3ee", lineHeight: 1.3 } },
                    it,
                  ),
                ),
              ),
            ),
          ),
          /*#__PURE__*/ React.createElement(
            "p",
            {
              "data-mtail": true,
              style: {
                fontSize: "clamp(16px, 2vw, 21px)",
                color: "#9fc3a8",
                fontWeight: 300,
                margin: "clamp(28px, 5.5vh, 52px) auto 0",
                maxWidth: 620,
                lineHeight: 1.65,
                textAlign: "center",
                opacity: 0,
                willChange: "opacity, transform",
              },
            },
            "Le stress chronique te bloque en mode alerte.",
            /*#__PURE__*/ React.createElement("br", null),
            /*#__PURE__*/ React.createElement("span", { style: { color: "#f5f3ee" } }, "Rebasculer vers l'\xE9quilibre, \xE7a s'apprend."),
          ),
        ),
      ),
    ),
    /*#__PURE__*/ React.createElement(
      "section",
      {
        "aria-hidden": "true",
        style: { width: "100%", background: "#fff", display: "flex", justifyContent: "center", padding: "clamp(56px, 9vh, 96px) 24px 0" },
      },
      /*#__PURE__*/ React.createElement(
        "div",
        { className: "ic-reveal" },
        /*#__PURE__*/ React.createElement(HomeTree, { stage: 2, width: 140 }),
      ),
    ),
    /*#__PURE__*/ React.createElement(
      "section",
      { id: "home-boucle", ref: boucleRef, style: { width: "100%", height: "240vh", background: "#fff", position: "relative" } },
      /*#__PURE__*/ React.createElement(
        "div",
        { style: { position: "sticky", top: 0, height: "100vh", overflow: "hidden" } },
        /*#__PURE__*/ React.createElement(
          "div",
          {
            ref: chainPhaseRef,
            className: "hb-phase",
            style: {
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
              willChange: "opacity, transform",
            },
          },
          /*#__PURE__*/ React.createElement(
            "span",
            { className: "hb-bg", "aria-hidden": "true" },
            /*#__PURE__*/ React.createElement("span", null),
          ),
          /*#__PURE__*/ React.createElement(
            "p",
            { className: "ic-kicker", style: { marginBottom: 12, position: "relative" } },
            "La r\xE9action en cha\xEEne",
          ),
          /*#__PURE__*/ React.createElement(
            "h2",
            {
              style: {
                fontFamily: "'Fraunces',serif",
                fontWeight: 400,
                fontSize: "clamp(34px, 5.6vw, 68px)",
                letterSpacing: "-0.025em",
                color: "#14362B",
                margin: "0 0 clamp(28px, 6vh, 64px)",
                lineHeight: 1.08,
                textAlign: "center",
                position: "relative",
              },
            },
            "Une pens\xE9e ",
            /*#__PURE__*/ React.createElement("em", { style: { fontStyle: "italic" } }, "suffit."),
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            { ref: chainListRef, className: "hb-chain" },
            HOME_CASCADE.map((s, i) =>
              /*#__PURE__*/ React.createElement(
                React.Fragment,
                { key: s.label },
                i > 0 &&
                  /*#__PURE__*/ React.createElement("div", {
                    "data-cl": true,
                    className: "hb-link",
                    "aria-hidden": "true",
                    style: {
                      background: "linear-gradient(var(--dir, to bottom), " + HOME_CASCADE[i - 1].color + ", " + s.color + ")",
                      transform: "scale(0)",
                      willChange: "transform",
                    },
                  }),
                /*#__PURE__*/ React.createElement(
                  "div",
                  { "data-cs": true, className: "hb-node", style: { opacity: 0, willChange: "opacity, transform", "--c": s.color } },
                  /*#__PURE__*/ React.createElement(
                    "span",
                    { className: "hb-orb", "aria-hidden": "true" },
                    /*#__PURE__*/ React.createElement("span", null, s.icon),
                  ),
                  /*#__PURE__*/ React.createElement(
                    "span",
                    { className: "hb-txt" },
                    /*#__PURE__*/ React.createElement("span", { className: "hb-num" }, "0" + (i + 1)),
                    /*#__PURE__*/ React.createElement("span", { className: "hb-label" }, s.label),
                  ),
                ),
              ),
            ),
          ),
          /*#__PURE__*/ React.createElement(
            "p",
            {
              style: {
                fontSize: "clamp(14px, 1.7vw, 17px)",
                color: "#756f64",
                fontWeight: 300,
                fontFamily: "'Fraunces',serif",
                fontStyle: "italic",
                margin: "clamp(26px, 6vh, 64px) 0 0",
                textAlign: "center",
                maxWidth: 460,
                lineHeight: 1.6,
                position: "relative",
              },
            },
            "Comprendre comment une pens\xE9e devient un sympt\xF4me.",
          ),
          /*#__PURE__*/ React.createElement(
            "button",
            {
              type: "button",
              className: "ic-pill ic-pill-dark",
              style: { marginTop: 22, position: "relative" },
              onClick: () => onGo("guide"),
            },
            "Lire le guide sur la pens\xE9e ",
            /*#__PURE__*/ React.createElement("span", { "aria-hidden": "true" }, "\u2192"),
          ),
        ),
      ),
    ),
    /*#__PURE__*/ React.createElement(
      "section",
      {
        id: "section-accompagnement",
        style: {
          width: "100%",
          minHeight: "100vh",
          background: "#14362B",
          padding: "clamp(80px, 13vh, 150px) 24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        },
      },
      /*#__PURE__*/ React.createElement("span", { className: "ic-acc-glow", "aria-hidden": "true" }),
      /*#__PURE__*/ React.createElement(
        "div",
        { className: "ic-acc-grid" },
        /*#__PURE__*/ React.createElement(
          "div",
          { className: "ic-reveal ic-acc-photo" },
          /*#__PURE__*/ React.createElement(
            "div",
            { className: "ic-acc-frame" },
            /*#__PURE__*/ React.createElement("img", { src: ROBIN_PHOTO, alt: "Robin Meuter en m\xE9ditation" }),
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            { className: "ic-acc-bio" },
            /*#__PURE__*/ React.createElement("p", { className: "ic-acc-name" }, "Robin Meuter"),
            /*#__PURE__*/ React.createElement("p", { className: "ic-acc-role" }, "Kin\xE9sith\xE9rapeute \xB7 Fondateur d'Inner Clarity"),
            /*#__PURE__*/ React.createElement(
              "p",
              { className: "ic-acc-text" },
              "En tant que kin\xE9, je vois chaque jour \xE0 quel point le stress se loge dans le corps : une nuque qui reste tendue, une respiration bloqu\xE9e, un ventre nou\xE9. Je t'explique simplement ce qui se passe en toi, puis je te montre comment calmer ton syst\xE8me nerveux avec des pratiques concr\xE8tes.",
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              { className: "ic-acc-creds" },
              ["Kinésithérapeute", "Yoga 200h", "Neurosciences · Harvard"].map((c) =>
                /*#__PURE__*/ React.createElement("span", { key: c }, c),
              ),
            ),
          ),
        ),
        /*#__PURE__*/ React.createElement(
          "div",
          { className: "ic-acc-content" },
          /*#__PURE__*/ React.createElement(
            "p",
            { className: "ic-kicker ic-reveal", style: { color: "#7fa98c", margin: "0 0 12px" } },
            "Accompagnement",
          ),
          /*#__PURE__*/ React.createElement(
            "h2",
            {
              className: "ic-reveal",
              style: {
                fontFamily: "'Fraunces',serif",
                fontWeight: 400,
                fontSize: "clamp(36px, 5.4vw, 66px)",
                letterSpacing: "-0.025em",
                color: "#f5f3ee",
                margin: "0 0 22px",
                lineHeight: 1.06,
                "--d": ".06s",
              },
            },
            "De la compr\xE9hension",
            /*#__PURE__*/ React.createElement("br", null),
            /*#__PURE__*/ React.createElement("em", { style: { fontStyle: "italic", color: "#cfe0d3" } }, "\xE0 la ma\xEEtrise."),
          ),
          /*#__PURE__*/ React.createElement(
            "p",
            {
              className: "ic-reveal",
              style: {
                fontSize: "clamp(16px, 1.8vw, 18px)",
                color: "#b9cfc0",
                margin: "0 0 30px",
                lineHeight: 1.7,
                fontWeight: 300,
                maxWidth: 580,
                "--d": ".12s",
              },
            },
            "6 semaines de suivi individuel, 100\xA0% en visio. Chaque semaine\xA0: une s\xE9ance d'une heure, la pratique ensemble, puis un programme d'entra\xEEnement adapt\xE9 \xE0 ton profil.",
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            { className: "ic-reveal ic-acc-facts", style: { "--d": ".15s" } },
            [
              ["6", "semaines"],
              ["1 h", "par semaine"],
              ["100 %", "en visio"],
            ].map(([v, l]) =>
              /*#__PURE__*/ React.createElement(
                "div",
                { key: l },
                /*#__PURE__*/ React.createElement("span", { className: "ic-acc-fv" }, v),
                /*#__PURE__*/ React.createElement("span", { className: "ic-acc-fl" }, l),
              ),
            ),
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              className: "ic-reveal ic-acc-chips",
              style: { display: "flex", gap: 8, flexWrap: "wrap", margin: "0 0 40px", "--d": ".18s" },
            },
            ["Pleine conscience", "Visualisation", "Respiration"].map((t) =>
              /*#__PURE__*/ React.createElement(
                "span",
                {
                  key: t,
                  style: {
                    padding: "9px 19px",
                    borderRadius: 999,
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#d9e6dc",
                    border: "1px solid rgba(245,243,238,0.22)",
                    letterSpacing: "0.02em",
                  },
                },
                t,
              ),
            ),
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              className: "ic-reveal",
              style: {
                background: "#faf8f4",
                borderRadius: 22,
                padding: "clamp(24px, 4vw, 32px)",
                maxWidth: 560,
                width: "100%",
                textAlign: "left",
                "--d": ".1s",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 18,
              },
            },
            /*#__PURE__*/ React.createElement(
              "div",
              { style: { flex: "1 1 260px" } },
              /*#__PURE__*/ React.createElement(
                "h3",
                { style: { fontSize: 19, fontWeight: 700, color: "#14362B", margin: "0 0 6px", letterSpacing: "-0.01em" } },
                "Appel d\xE9couverte gratuit",
              ),
              /*#__PURE__*/ React.createElement(
                "p",
                { style: { fontSize: 15, margin: 0, lineHeight: 1.6, color: "#6a6a6a" } },
                "15 \xE0 20 min pour analyser tes r\xE9sultats et voir si cet accompagnement est fait pour toi.",
              ),
            ),
            /*#__PURE__*/ React.createElement(
              "button",
              {
                type: "button",
                className: "ic-pill ic-pill-dark",
                style: { whiteSpace: "nowrap" },
                onClick: () => window.open("https://calendly.com/meuter-robin/30min", "_blank"),
              },
              "Prendre rendez-vous ",
              /*#__PURE__*/ React.createElement("span", { "aria-hidden": "true" }, "\u2192"),
            ),
          ),
        ),
      ),
    ),
    /*#__PURE__*/ React.createElement(
      "section",
      {
        id: "home-parcours",
        style: {
          width: "100%",
          background: "#faf8f4",
          padding: "clamp(56px, 8vh, 90px) 24px clamp(70px, 10vh, 110px)",
          position: "relative",
          overflow: "hidden",
        },
      },
      /*#__PURE__*/ React.createElement("span", { className: "ic-parcours-ring", "aria-hidden": "true" }),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          style: { maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", position: "relative" },
        },
        /*#__PURE__*/ React.createElement(
          "div",
          { className: "ic-reveal", "aria-hidden": "true", style: { marginBottom: "clamp(36px, 6vh, 60px)" } },
          /*#__PURE__*/ React.createElement(HomeTree, { stage: 3, width: 170 }),
        ),
        /*#__PURE__*/ React.createElement(
          "p",
          { className: "ic-kicker ic-reveal", style: { margin: "0 0 12px", textAlign: "center" } },
          "Ton parcours",
        ),
        /*#__PURE__*/ React.createElement(
          "h2",
          {
            className: "ic-reveal",
            style: {
              fontFamily: "'Fraunces',serif",
              fontWeight: 400,
              fontSize: "clamp(28px, 4.4vw, 48px)",
              letterSpacing: "-0.02em",
              color: "#14362B",
              margin: "0 auto clamp(40px, 6vh, 56px)",
              lineHeight: 1.12,
              textAlign: "center",
              maxWidth: 550,
              "--d": ".08s",
            },
          },
          "Trois \xE9tapes pour t'enraciner.",
        ),
        /*#__PURE__*/ React.createElement(
          "div",
          { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: 18, width: "100%" } },
          [
            {
              num: "01",
              title: "Évalue",
              desc: "20 questions pour mesurer ce que tu vis et ta présence.",
              action: "test",
              cta: "Commencer le test",
            },
            {
              num: "02",
              title: "Comprends",
              desc: "Le guide interactif t'explique le trajet exact d'une émotion, de la pensée au symptôme.",
              action: "guide",
              cta: "Lire le guide",
            },
            {
              num: "03",
              title: "Agis",
              desc: "Un accompagnement individuel de 6 semaines pour apprendre à te réguler durablement.",
              action: "accompagnement",
              cta: "En savoir plus",
            },
          ].map((c, i) =>
            /*#__PURE__*/ React.createElement(
              "div",
              { key: c.num, className: "ic-reveal ic-card", style: { "--d": i * 0.1 + "s" } },
              /*#__PURE__*/ React.createElement(
                "span",
                {
                  style: {
                    fontFamily: "'Fraunces',serif",
                    fontSize: "clamp(46px, 5vw, 62px)",
                    fontWeight: 300,
                    color: "#14362B",
                    opacity: 0.18,
                    lineHeight: 1,
                  },
                },
                c.num,
              ),
              /*#__PURE__*/ React.createElement(
                "h3",
                { style: { margin: "14px 0 8px", fontSize: 24, fontWeight: 700, color: "#1b1b1b", letterSpacing: "-0.015em" } },
                c.title,
              ),
              /*#__PURE__*/ React.createElement(
                "p",
                { style: { margin: 0, color: "#5a5a5a", lineHeight: 1.6, flex: 1, fontSize: 15.5, fontWeight: 300 } },
                c.desc,
              ),
              /*#__PURE__*/ React.createElement(
                "button",
                {
                  type: "button",
                  className: "ic-cardlink",
                  onClick: () => {
                    if (c.action === "accompagnement") {
                      scrollToId("section-accompagnement");
                    } else {
                      onGo(c.action);
                    }
                  },
                },
                c.cta,
                " ",
                /*#__PURE__*/ React.createElement("span", { "aria-hidden": "true" }, "\u2192"),
              ),
            ),
          ),
        ),
      ),
    ),
    /*#__PURE__*/ React.createElement(
      "section",
      {
        style: {
          width: "100%",
          padding: "clamp(60px, 9vh, 90px) 24px 84px",
          background: "#faf8f4",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        },
      },
      /*#__PURE__*/ React.createElement(
        "div",
        { className: "ic-reveal", style: { marginBottom: 22 } },
        /*#__PURE__*/ React.createElement(HomeTree, { stage: 4, width: 220 }),
      ),
      /*#__PURE__*/ React.createElement(
        "p",
        {
          className: "ic-reveal",
          style: {
            fontFamily: "'Fraunces',serif",
            fontStyle: "italic",
            fontSize: 16,
            color: "#756f64",
            maxWidth: 480,
            lineHeight: 1.6,
            margin: 0,
            "--d": ".08s",
          },
        },
        "Inner Clarity \xB7 Science du cerveau & pratiques m\xE9ditatives.",
        /*#__PURE__*/ React.createElement("br", null),
        "Robin Meuter, kin\xE9sith\xE9rapeute. 2026.",
      ),
    ),
    /*#__PURE__*/ React.createElement(
      "style",
      null,
      `
        /* Kicker label */
        .ic-kicker { font-size: 12px; font-weight: 600; color: #756f64; text-transform: uppercase; letter-spacing: 0.18em; margin: 0; }

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
        .ic-scrollcue { position: absolute; bottom: 26px; left: 50%; margin-left: -22px; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; border: none; background: transparent; cursor: pointer; color: #756f64; transition: color .25s; }
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
      `,
    ),
  );
}
function AboutPage({ onGo }) {
  return /*#__PURE__*/ React.createElement(
    "div",
    { style: { background: "#faf8f4", minHeight: "100vh" } },
    /*#__PURE__*/ React.createElement(
      "section",
      { style: { maxWidth: 1100, margin: "0 auto", padding: "clamp(60px,8vw,90px) 24px 0", textAlign: "center" } },
      /*#__PURE__*/ React.createElement(
        "p",
        {
          style: {
            fontSize: 11,
            fontWeight: 600,
            color: "#756f64",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            margin: "0 0 12px",
          },
        },
        "Inner Clarity",
      ),
      /*#__PURE__*/ React.createElement(
        "h1",
        {
          style: {
            fontFamily: "'Fraunces',Georgia,serif",
            fontSize: "clamp(34px, 5.4vw, 54px)",
            fontWeight: 400,
            letterSpacing: "-0.022em",
            color: "#14362B",
            margin: "0 0 10px",
            lineHeight: 1.1,
          },
        },
        "Qui sommes-nous ?",
      ),
      /*#__PURE__*/ React.createElement(
        "p",
        { style: { fontSize: 15, color: "#6a6a6a", margin: "0 0 0", lineHeight: 1.6 } },
        "Les personnes derri\xE8re Inner Clarity.",
      ),
    ),
    /*#__PURE__*/ React.createElement(
      "section",
      { style: { maxWidth: 1100, margin: "0 auto", padding: "56px 24px 64px" } },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "about-card",
          style: {
            display: "grid",
            gridTemplateColumns: "340px 1fr",
            gap: 48,
            background: "#fff",
            borderRadius: 28,
            padding: "40px 44px",
            border: "1px solid #ebe8e2",
            boxShadow: "0 4px 24px rgba(0,0,0,0.03)",
          },
        },
        /*#__PURE__*/ React.createElement(
          "div",
          { style: { display: "flex", flexDirection: "column", gap: 16 } },
          /*#__PURE__*/ React.createElement("img", {
            src: ROBIN_PHOTO,
            alt: "Robin Meuter",
            style: { width: "100%", borderRadius: 20, objectFit: "cover", aspectRatio: "3/4" },
          }),
          /*#__PURE__*/ React.createElement(
            "div",
            { style: { textAlign: "center" } },
            /*#__PURE__*/ React.createElement(
              "p",
              {
                style: {
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#14362B",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  margin: "0 0 4px",
                  background: "#E8EFE9",
                  padding: "6px 14px",
                  borderRadius: 999,
                  display: "inline-flex",
                },
              },
              "Kin\xE9sith\xE9rapeute \xB7 Yoga 200h \xB7 Neurosciences (Harvard)",
            ),
          ),
        ),
        /*#__PURE__*/ React.createElement(
          "div",
          { style: { display: "flex", flexDirection: "column", justifyContent: "center" } },
          /*#__PURE__*/ React.createElement(
            "h2",
            { style: { fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em", color: "#1b1b1b", margin: "0 0 6px" } },
            "Robin Meuter",
          ),
          /*#__PURE__*/ React.createElement(
            "p",
            { style: { fontSize: 13, color: "#756f64", margin: "0 0 24px", fontFamily: "'Fraunces',serif", fontStyle: "italic" } },
            "Fondateur d'Inner Clarity",
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: 16,
                fontSize: 16.5,
                color: "#4a4a4a",
                lineHeight: 1.7,
                fontWeight: 400,
              },
            },
            /*#__PURE__*/ React.createElement(
              "p",
              { style: { margin: 0 } },
              "J'ai toujours \xE9t\xE9 passionn\xE9 par le fonctionnement du corps : anatomie, physiologie, biochimie. Comprendre ce qui se passe sous la surface, c'est ce qui m'a amen\xE9 \xE0 la kin\xE9sith\xE9rapie.",
            ),
            /*#__PURE__*/ React.createElement(
              "p",
              { style: { margin: 0 } },
              "Pourtant, pendant des ann\xE9es, j'\xE9tais moi-m\xEAme quelqu'un de tr\xE8s stress\xE9, sans vraiment m'en rendre compte. Ma s\u0153ur, psychologue, m'avait initi\xE9 \xE0 la pleine conscience. Je pratiquais ponctuellement, dans les p\xE9riodes de tension, comme un outil de secours. Sans r\xE9elle compr\xE9hension.",
            ),
            /*#__PURE__*/ React.createElement(
              "p",
              { style: { margin: 0 } },
              "Puis un \xE9v\xE9nement marquant a tout chang\xE9. J'ai pris conscience que j'\xE9tais perp\xE9tuellement enferm\xE9 dans mes pens\xE9es, et que ces pens\xE9es avaient un effet direct sur mon corps. Des tensions, une respiration courte, un syst\xE8me nerveux en alerte permanente.",
            ),
            /*#__PURE__*/ React.createElement(
              "p",
              { style: { margin: 0 } },
              "Gr\xE2ce \xE0 ma formation, j'ai pu relier ce que je ressentais \xE0 la physiologie : le lien entre la pens\xE9e, l'activation nerveuse, la s\xE9cr\xE9tion hormonale et les sympt\xF4mes. Les pratiques m\xE9ditatives ne sont pas du bien-\xEAtre vague : ce sont des leviers biologiques pr\xE9cis.",
            ),
            /*#__PURE__*/ React.createElement(
              "p",
              { style: { margin: 0, color: "#1b1b1b", fontWeight: 400 } },
              "Nous vivons dans une soci\xE9t\xE9 o\xF9 l'on a besoin de comprendre avant d'agir. Saisir la logique derri\xE8re ces pratiques, c'est la porte d'entr\xE9e. Ensuite, elles nous invitent \xE0 l\xE2cher prise. C'est ce que je veux transmettre avec Inner Clarity.",
            ),
          ),
        ),
      ),
    ),
    /*#__PURE__*/ React.createElement(
      "section",
      { style: { maxWidth: 1100, margin: "0 auto", padding: "0 24px 64px" } },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "about-card",
          style: {
            display: "grid",
            gridTemplateColumns: "340px 1fr",
            gap: 48,
            background: "#fff",
            borderRadius: 28,
            padding: "40px 44px",
            border: "1px solid #ebe8e2",
            boxShadow: "0 4px 24px rgba(0,0,0,0.03)",
          },
        },
        /*#__PURE__*/ React.createElement(
          "div",
          { style: { display: "flex", flexDirection: "column", gap: 16 } },
          /*#__PURE__*/ React.createElement("img", {
            src: JUSTINE_PHOTO,
            alt: "Justine Meuter",
            style: { width: "100%", borderRadius: 20, objectFit: "cover", aspectRatio: "3/4" },
          }),
          /*#__PURE__*/ React.createElement(
            "div",
            { style: { textAlign: "center" } },
            /*#__PURE__*/ React.createElement(
              "p",
              {
                style: {
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#4a7fb0",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  margin: "0 0 4px",
                  background: "#eaf1f8",
                  padding: "6px 14px",
                  borderRadius: 999,
                  display: "inline-flex",
                },
              },
              "Psychologue \xB7 Psychoth\xE9rapeute familiale \xB7 EMDR",
            ),
          ),
        ),
        /*#__PURE__*/ React.createElement(
          "div",
          { style: { display: "flex", flexDirection: "column", justifyContent: "center" } },
          /*#__PURE__*/ React.createElement(
            "h2",
            { style: { fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em", color: "#1b1b1b", margin: "0 0 6px" } },
            "Justine Meuter",
          ),
          /*#__PURE__*/ React.createElement(
            "p",
            { style: { fontSize: 13, color: "#756f64", margin: "0 0 24px", fontFamily: "'Fraunces',serif", fontStyle: "italic" } },
            "Co-fondatrice d'Inner Clarity",
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: 16,
                fontSize: 16.5,
                color: "#4a4a4a",
                lineHeight: 1.7,
                fontWeight: 400,
              },
            },
            /*#__PURE__*/ React.createElement(
              "p",
              { style: { margin: 0 } },
              "Justine est psychologue et psychoth\xE9rapeute familiale. Form\xE9e \xE0 la psychoth\xE9rapie EMDR, elle porte une attention particuli\xE8re aux processus de r\xE9gulation du syst\xE8me nerveux.",
            ),
            /*#__PURE__*/ React.createElement(
              "p",
              { style: { margin: 0 } },
              "Elle est passionn\xE9e par la mani\xE8re dont la pens\xE9e, la respiration et le corps soutiennent l'\xE9quilibre \xE9motionnel et relationnel.",
            ),
            /*#__PURE__*/ React.createElement(
              "p",
              { style: { margin: 0 } },
              "Elle d\xE9couvre la m\xE9ditation en 2016 lors d'un cycle de pleine conscience. Depuis, cette pratique fait partie int\xE9grante de son quotidien, qu'elle cultive avec engagement et patience, notamment \xE0 travers des retraites, des rencontres humaines et des pratiques quotidiennes.",
            ),
          ),
        ),
      ),
    ),
    /*#__PURE__*/ React.createElement(
      "section",
      { style: { maxWidth: 700, margin: "0 auto", padding: "0 24px 80px", textAlign: "center" } },
      /*#__PURE__*/ React.createElement(
        "div",
        { style: { display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" } },
        /*#__PURE__*/ React.createElement(
          "button",
          {
            onClick: () => onGo("test"),
            style: {
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "16px 30px",
              fontSize: 15,
              fontWeight: 600,
              color: "#fff",
              background: "#14362B",
              borderRadius: 9999,
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
            },
          },
          "Faire le test ",
          /*#__PURE__*/ React.createElement("span", null, "\u2192"),
        ),
        /*#__PURE__*/ React.createElement(
          "button",
          {
            onClick: () => onGo("guide"),
            style: {
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "16px 30px",
              fontSize: 15,
              fontWeight: 600,
              color: "#14362B",
              background: "transparent",
              borderRadius: 9999,
              border: "1.5px solid #14362B",
              cursor: "pointer",
              fontFamily: "inherit",
            },
          },
          "Lire le guide",
        ),
      ),
    ),
    /*#__PURE__*/ React.createElement(
      "style",
      null,
      `
        @media (max-width: 768px) {
          .about-card { grid-template-columns: 1fr !important; gap: 28px !important; padding: 24px 22px !important; }
          .about-card img { max-width: 280px; margin: 0 auto; }
          .about-card > div:first-child > div:last-child { text-align: center; }
        }
      `,
    ),
  );
}
function WorkshopsPage({ onGo }) {
  const programme = [
    "Le mécanisme de la pensée et son effet direct sur le corps",
    "Le lien entre pensée, système nerveux et émotions",
    "Des repères concrets pour reprendre la main sur le mental",
    "Une méditation guidée en clôture (≈ 20 min)",
  ];
  return /*#__PURE__*/ React.createElement(
    "div",
    { style: { background: "#faf8f4", minHeight: "100vh" } },
    /*#__PURE__*/ React.createElement(
      "section",
      { style: { maxWidth: 1100, margin: "0 auto", padding: "clamp(60px,8vw,90px) 24px 0", textAlign: "center" } },
      /*#__PURE__*/ React.createElement(
        "p",
        {
          style: {
            fontSize: 11,
            fontWeight: 600,
            color: "#756f64",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            margin: "0 0 12px",
          },
        },
        "Inner Clarity",
      ),
      /*#__PURE__*/ React.createElement(
        "h1",
        {
          style: {
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            color: "#1b1b1b",
            margin: "0 0 8px",
            lineHeight: 1.1,
          },
        },
        "Formations & Conf\xE9rences",
      ),
      /*#__PURE__*/ React.createElement(
        "p",
        { style: { fontSize: 15, color: "#6a6a6a", margin: 0, lineHeight: 1.6 } },
        "Des rendez-vous pour comprendre, puis pratiquer.",
      ),
    ),
    /*#__PURE__*/ React.createElement(
      "section",
      { style: { maxWidth: 1040, margin: "0 auto", padding: "48px 24px 24px" } },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          className: "conf-card",
          style: {
            display: "grid",
            gridTemplateColumns: "300px 1fr",
            background: "#fff",
            borderRadius: 28,
            overflow: "hidden",
            border: "1px solid #ebe8e2",
            boxShadow: "0 8px 40px rgba(20,54,43,0.06)",
          },
        },
        /*#__PURE__*/ React.createElement(
          "div",
          {
            className: "conf-stub",
            style: {
              background: "#14362B",
              color: "#f4f1e8",
              padding: "44px 36px",
              display: "flex",
              flexDirection: "column",
              position: "relative",
            },
          },
          /*#__PURE__*/ React.createElement(
            "p",
            {
              style: {
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#9ec3ad",
                margin: "0 0 28px",
              },
            },
            "Prochaine conf\xE9rence",
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            { style: { marginBottom: 28 } },
            /*#__PURE__*/ React.createElement(
              "div",
              { style: { fontSize: 72, fontWeight: 700, lineHeight: 0.9, letterSpacing: "-0.04em" } },
              "20",
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              { style: { fontSize: 18, fontFamily: "'Fraunces',serif", fontStyle: "italic", color: "#e6ddc8", marginTop: 6 } },
              "juin 2026",
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              { style: { fontSize: 13, color: "#9ec3ad", textTransform: "uppercase", letterSpacing: "0.12em", marginTop: 6 } },
              "Samedi",
            ),
          ),
          /*#__PURE__*/ React.createElement("div", { style: { height: 1, background: "rgba(255,255,255,0.14)", margin: "0 0 24px" } }),
          /*#__PURE__*/ React.createElement(
            "div",
            { style: { display: "flex", flexDirection: "column", gap: 18, fontSize: 14, lineHeight: 1.5 } },
            /*#__PURE__*/ React.createElement(
              "div",
              null,
              /*#__PURE__*/ React.createElement(
                "div",
                { style: { fontSize: 10, color: "#9ec3ad", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 4 } },
                "Lieu",
              ),
              /*#__PURE__*/ React.createElement("div", { style: { color: "#f4f1e8", fontWeight: 500 } }, "Kinesport"),
              /*#__PURE__*/ React.createElement("div", { style: { color: "#cdd8cf" } }, "Couvin"),
            ),
            /*#__PURE__*/ React.createElement(
              "div",
              null,
              /*#__PURE__*/ React.createElement(
                "div",
                { style: { fontSize: 10, color: "#9ec3ad", textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 4 } },
                "Format",
              ),
              /*#__PURE__*/ React.createElement("div", { style: { color: "#cdd8cf" } }, "Conf\xE9rence + m\xE9ditation guid\xE9e"),
            ),
          ),
        ),
        /*#__PURE__*/ React.createElement(
          "div",
          { style: { padding: "clamp(32px,4vw,48px)", display: "flex", flexDirection: "column" } },
          /*#__PURE__*/ React.createElement(
            "span",
            {
              style: {
                display: "inline-flex",
                alignSelf: "flex-start",
                padding: "6px 14px",
                borderRadius: 999,
                background: "#E8EFE9",
                color: "#14362B",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 18,
              },
            },
            "Conf\xE9rence",
          ),
          /*#__PURE__*/ React.createElement(
            "h2",
            {
              style: {
                fontSize: "clamp(26px,3.4vw,34px)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                color: "#1b1b1b",
                margin: "0 0 10px",
                lineHeight: 1.1,
              },
            },
            "Le m\xE9canisme de la pens\xE9e",
          ),
          /*#__PURE__*/ React.createElement(
            "p",
            { style: { fontSize: 16, color: "#756f64", fontFamily: "'Fraunces',serif", fontStyle: "italic", margin: "0 0 22px" } },
            "Comprendre comment naissent nos pens\xE9es, et comment s'en lib\xE9rer.",
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: 14,
                fontSize: 15,
                color: "#4a4a4a",
                lineHeight: 1.65,
                fontWeight: 300,
                marginBottom: 26,
              },
            },
            /*#__PURE__*/ React.createElement(
              "p",
              { style: { margin: 0 } },
              "Une conf\xE9rence pour explorer comment se forment nos pens\xE9es, comment elles activent notre syst\xE8me nerveux et influencent directement notre corps. Robin partage une approche claire, ancr\xE9e dans la physiologie et les neurosciences.",
            ),
            /*#__PURE__*/ React.createElement(
              "p",
              { style: { margin: 0, color: "#1b1b1b", fontWeight: 400 } },
              "La rencontre se cl\xF4ture par une m\xE9ditation guid\xE9e, pour passer de la compr\xE9hension \xE0 l'exp\xE9rience.",
            ),
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            { style: { marginBottom: 30 } },
            /*#__PURE__*/ React.createElement(
              "p",
              {
                style: {
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#14362B",
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  margin: "0 0 14px",
                },
              },
              "Au programme",
            ),
            /*#__PURE__*/ React.createElement(
              "ul",
              { style: { listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 11 } },
              programme.map((item, i) =>
                /*#__PURE__*/ React.createElement(
                  "li",
                  {
                    key: i,
                    style: { display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15, color: "#4a4a4a", lineHeight: 1.5 },
                  },
                  /*#__PURE__*/ React.createElement(
                    "span",
                    {
                      style: {
                        flexShrink: 0,
                        width: 20,
                        height: 20,
                        borderRadius: 999,
                        background: "#E8EFE9",
                        color: "#14362B",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 12,
                        fontWeight: 700,
                        marginTop: 1,
                      },
                    },
                    "\u2713",
                  ),
                  item,
                ),
              ),
            ),
          ),
          /*#__PURE__*/ React.createElement(
            "div",
            { style: { marginTop: "auto", paddingTop: 26, borderTop: "1px solid #ebe8e2" } },
            /*#__PURE__*/ React.createElement(
              "p",
              { style: { fontSize: 13, color: "#6a6a6a", margin: 0, lineHeight: 1.5 } },
              "Inscriptions bient\xF4t ouvertes. Places limit\xE9es.",
            ),
          ),
        ),
      ),
    ),
    /*#__PURE__*/ React.createElement(
      "section",
      { style: { maxWidth: 700, margin: "0 auto", padding: "24px 24px 80px", textAlign: "center" } },
      /*#__PURE__*/ React.createElement(
        "p",
        { style: { fontSize: 14, color: "#756f64", margin: "0 0 20px", lineHeight: 1.6 } },
        "Une question avant de t'inscrire\xA0? Commence par d\xE9couvrir notre approche.",
      ),
      /*#__PURE__*/ React.createElement(
        "div",
        { style: { display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" } },
        /*#__PURE__*/ React.createElement(
          "button",
          {
            onClick: () => onGo("guide"),
            style: {
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "16px 30px",
              fontSize: 15,
              fontWeight: 600,
              color: "#14362B",
              background: "transparent",
              borderRadius: 9999,
              border: "1.5px solid #14362B",
              cursor: "pointer",
              fontFamily: "inherit",
            },
          },
          "Lire le guide",
        ),
        /*#__PURE__*/ React.createElement(
          "button",
          {
            onClick: () => onGo("about"),
            style: {
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "16px 30px",
              fontSize: 15,
              fontWeight: 600,
              color: "#14362B",
              background: "transparent",
              borderRadius: 9999,
              border: "1.5px solid #14362B",
              cursor: "pointer",
              fontFamily: "inherit",
            },
          },
          "Qui sommes-nous\xA0?",
        ),
      ),
    ),
    /*#__PURE__*/ React.createElement(
      "style",
      null,
      `
        @media (max-width: 760px) {
          .conf-card { grid-template-columns: 1fr !important; }
          .conf-stub { flex-direction: row !important; flex-wrap: wrap; align-items: center; gap: 24px; padding: 28px 28px !important; }
          .conf-stub > p { width: 100%; margin-bottom: 0 !important; }
        }
      `,
    ),
  );
}
Object.assign(window, { WorkshopsPage });
function LegalPage() {
  const LEGAL_UPDATED = "14 octobre 2026";
  const S = ({ title, children }) =>
    /*#__PURE__*/ React.createElement(
      "section",
      { className: "ic-legal-sec" },
      /*#__PURE__*/ React.createElement("h3", null, title),
      children,
    );
  return /*#__PURE__*/ React.createElement(
    "div",
    { className: "ic-legal" },
    /*#__PURE__*/ React.createElement(
      "div",
      { className: "ic-legal-wrap" },
      /*#__PURE__*/ React.createElement("p", { className: "ic-legal-kicker" }, "Inner Clarity"),
      /*#__PURE__*/ React.createElement(
        "h1",
        null,
        "Mentions l\xE9gales ",
        /*#__PURE__*/ React.createElement("em", null, "et confidentialit\xE9"),
      ),
      /*#__PURE__*/ React.createElement("h2", null, "Mentions l\xE9gales"),
      /*#__PURE__*/ React.createElement(
        S,
        { title: "\xC9diteur" },
        /*#__PURE__*/ React.createElement(
          "dl",
          { className: "ic-legal-dl" },
          /*#__PURE__*/ React.createElement("dt", null, "\xC9diteur"),
          /*#__PURE__*/ React.createElement("dd", null, "Robin Meuter, Inner Clarity (ind\xE9pendant en personne physique)"),
          /*#__PURE__*/ React.createElement("dt", null, "Adresse"),
          /*#__PURE__*/ React.createElement("dd", null, "Rue de la Buche 1/0002, 5660 Pesche (Couvin), Belgique"),
          /*#__PURE__*/ React.createElement("dt", null, "Email"),
          /*#__PURE__*/ React.createElement("dd", null, "meuter.robin@gmail.com"),
          /*#__PURE__*/ React.createElement("dt", null, "T\xE9l\xE9phone"),
          /*#__PURE__*/ React.createElement(
            "dd",
            null,
            /*#__PURE__*/ React.createElement("a", { href: "tel:+32471244229" }, "+32 471 24 42 29"),
          ),
          /*#__PURE__*/ React.createElement("dt", null, "Num\xE9ro d'entreprise (BCE)"),
          /*#__PURE__*/ React.createElement("dd", null, "0770.470.703"),
        ),
      ),
      /*#__PURE__*/ React.createElement(
        S,
        { title: "H\xE9bergeur" },
        /*#__PURE__*/ React.createElement("p", null, "Hostinger International Ltd, 61 Lordou Vironos Street, 6023 Larnaca, Chypre"),
      ),
      /*#__PURE__*/ React.createElement(
        S,
        { title: "Propri\xE9t\xE9 intellectuelle" },
        /*#__PURE__*/ React.createElement(
          "p",
          null,
          "Les textes, visuels, le test et le guide pr\xE9sents sur ce site appartiennent \xE0 Inner Clarity. Toute reproduction, m\xEAme partielle, sans autorisation \xE9crite pr\xE9alable est interdite.",
        ),
      ),
      /*#__PURE__*/ React.createElement(
        S,
        { title: "Avertissement" },
        /*#__PURE__*/ React.createElement(
          "p",
          null,
          "Le contenu de ce site est informatif et \xE9ducatif. Il ne remplace pas un avis m\xE9dical.",
        ),
      ),
      /*#__PURE__*/ React.createElement("h2", null, "Politique de confidentialit\xE9"),
      /*#__PURE__*/ React.createElement(
        S,
        { title: "Responsable du traitement" },
        /*#__PURE__*/ React.createElement(
          "p",
          null,
          "Robin Meuter, Inner Clarity, Rue de la Buche 1/0002, 5660 Pesche (Couvin), Belgique. Email : meuter.robin@gmail.com. T\xE9l\xE9phone : +32 471 24 42 29.",
        ),
      ),
      /*#__PURE__*/ React.createElement(
        S,
        { title: "Aucune donn\xE9e demand\xE9e" },
        /*#__PURE__*/ React.createElement(
          "p",
          null,
          "Le site ne te demande aucune donn\xE9e personnelle : pas de compte, pas de formulaire, pas de cookie, aucun outil de statistiques ni de publicit\xE9.",
        ),
      ),
      /*#__PURE__*/ React.createElement(
        S,
        { title: "Le test et ton bilan" },
        /*#__PURE__*/ React.createElement(
          "p",
          null,
          "Tes r\xE9ponses au test sont calcul\xE9es dans ton navigateur. Elles ne sont ni envoy\xE9es ni conserv\xE9es. Le bilan PDF est cr\xE9\xE9 sur ton appareil.",
        ),
      ),
      /*#__PURE__*/ React.createElement(
        S,
        { title: "Journaux techniques de l'h\xE9bergeur" },
        /*#__PURE__*/ React.createElement(
          "p",
          null,
          "L'h\xE9bergeur enregistre des journaux techniques (adresse IP, date, page consult\xE9e) pour la s\xE9curit\xE9 du site, pendant une dur\xE9e limit\xE9e. Base l\xE9gale : int\xE9r\xEAt l\xE9gitime.",
        ),
      ),
      /*#__PURE__*/ React.createElement(
        S,
        { title: "Services externes" },
        /*#__PURE__*/ React.createElement(
          "p",
          null,
          "Les liens vers Calendly, Systeme.io, WhatsApp ou d'autres services t'emm\xE8nent chez eux, et leur propre politique de confidentialit\xE9 s'applique.",
        ),
      ),
      /*#__PURE__*/ React.createElement(
        S,
        { title: "Tes droits" },
        /*#__PURE__*/ React.createElement(
          "p",
          null,
          "Tu peux demander l'acc\xE8s, la rectification, l'effacement de tes donn\xE9es ou t'opposer \xE0 leur traitement, par email. Tu peux aussi introduire une plainte aupr\xE8s de l'Autorit\xE9 de protection des donn\xE9es : ",
          /*#__PURE__*/ React.createElement(
            "a",
            { href: "https://www.autoriteprotectiondonnees.be", target: "_blank", rel: "noopener noreferrer" },
            "www.autoriteprotectiondonnees.be",
          ),
          ".",
        ),
      ),
      /*#__PURE__*/ React.createElement("p", { className: "ic-legal-date" }, "Derni\xE8re mise \xE0 jour : ", LEGAL_UPDATED),
    ),
    /*#__PURE__*/ React.createElement(
      "style",
      null,
      `
        .ic-legal { background: #faf8f4; flex: 1; padding: clamp(60px, 8vw, 96px) 24px 72px; }
        .ic-legal-wrap { max-width: 720px; margin: 0 auto; }
        .ic-legal-kicker { font-size: 11px; font-weight: 600; color: #756f64; text-transform: uppercase; letter-spacing: 0.15em; margin: 0 0 12px; }
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
        .ic-legal-dl dt { color: #756f64; }
        .ic-legal-dl dd { margin: 0; color: #1b1b1b; }
        .ic-legal-date { margin-top: 28px !important; font-size: 13px !important; color: #756f64 !important; }
        @media (max-width: 600px) { .ic-legal-dl { grid-template-columns: 1fr; gap: 2px; } .ic-legal-dl dd { margin-bottom: 10px; } }
      `,
    ),
  );
}
function PlaceholderPage({ title, bg, accent = "#14362B" }) {
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      style: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: bg,
        padding: "120px 24px",
        minHeight: "80vh",
      },
    },
    /*#__PURE__*/ React.createElement(
      "div",
      { style: { textAlign: "center", maxWidth: 560 } },
      /*#__PURE__*/ React.createElement(
        "span",
        {
          style: {
            display: "inline-block",
            padding: "4px 14px",
            borderRadius: 9999,
            background: "#fff",
            border: `1px solid ${accent}33`,
            color: accent,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 20,
          },
        },
        "En construction",
      ),
      /*#__PURE__*/ React.createElement(
        "h1",
        {
          style: {
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            color: accent,
            margin: "0 0 16px",
            lineHeight: 1.1,
          },
        },
        title,
      ),
      /*#__PURE__*/ React.createElement(
        "p",
        { style: { color: "#5a5a5a", fontSize: 17, lineHeight: 1.6, margin: 0 } },
        "Cette page est en cours de pr\xE9paration. Reviens bient\xF4t pour d\xE9couvrir le contenu.",
      ),
    ),
  );
}
Object.assign(window, { HomePage, PlaceholderPage }); /* ═══ app.jsx ═══ */ // App root — routing + test flow + Tweaks
const { useState: useStateA, useEffect: useEffectA } = React;
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/ { accent: "#14362B", bgTone: "cool", startView: "home" }; /*EDITMODE-END*/
const ROUTE_PATHS = { home: "/", test: "/test", guide: "/guide", about: "/a-propos", workshops: "/formations", legal: "/mentions-legales" };
function routeFromPath(pathname) {
  const p = (pathname || "/").replace(/\/+$/, "") || "/";
  if (/^\/test\//i.test(p)) return "test";
  const hit = Object.keys(ROUTE_PATHS).find((k) => ROUTE_PATHS[k] === p);
  return hit || "home";
}
/* Pied de page commun (le test a ses propres liens, pour ne pas distraire pendant les questions) */
const IC_INSTAGRAM = "https://www.instagram.com/robin_meuter/";
const IC_FOOT_CSS = `
.ic-foot{background:#faf8f4;border-top:1px solid #ebe8e2;padding:34px 24px 26px}
.ic-foot-in{max-width:1100px;margin:0 auto;display:flex;flex-direction:column;align-items:center;gap:20px;text-align:center}
.ic-foot-brand{display:flex;align-items:center;gap:12px;background:none;border:none;padding:0;cursor:pointer;font-family:inherit;text-align:left}
.ic-foot-brand img{width:38px;height:38px;border-radius:50%;display:block}
.ic-foot-brand b{display:block;font-size:15px;font-weight:700;letter-spacing:-.01em;color:#14362B}
.ic-foot-brand span{display:block;margin-top:1px;font-size:12px;color:#756f64}
.ic-foot-nav{display:flex;flex-wrap:wrap;justify-content:center;gap:4px 6px}
.ic-foot-nav a{padding:9px 12px;font-size:14px;font-weight:500;color:#14362B;text-decoration:none;border-radius:99px;transition:background .2s}
.ic-foot-nav a:hover{background:#eef2ea}
.ic-foot-legal{margin:0;font-size:12.5px;line-height:1.6;color:#756f64}
.ic-foot-legal a{color:#756f64;text-decoration:underline;text-underline-offset:3px;text-decoration-color:#d8d2c6}
.ic-foot-legal a:hover{color:#14362B}
@media (min-width:860px){.ic-foot-in{flex-direction:row;flex-wrap:wrap;justify-content:space-between;text-align:left}.ic-foot-legal{flex-basis:100%;padding-top:18px;border-top:1px solid #ebe8e2}}
`;
function SiteFooter({ setRoute }) {
  const link = (r, href, label) =>
    React.createElement(
      "a",
      {
        href: href,
        onClick: (e) => {
          e.preventDefault();
          setRoute(r);
        },
      },
      label,
    );
  return React.createElement(
    "footer",
    { className: "ic-foot" },
    React.createElement(
      "div",
      { className: "ic-foot-in" },
      React.createElement(
        "button",
        { type: "button", className: "ic-foot-brand", onClick: () => setRoute("home"), "aria-label": "Inner Clarity, retour à l'accueil" },
        React.createElement("img", { src: LOGO_SRC, alt: "", width: "38", height: "38", loading: "lazy" }),
        React.createElement("span", null, React.createElement("b", null, "Inner Clarity"), React.createElement("span", null, "Régulation du système nerveux")),
      ),
      React.createElement(
        "nav",
        { className: "ic-foot-nav", "aria-label": "Pied de page" },
        link("test", "/test", "Test gratuit"),
        link("guide", "/guide", "Guide"),
        link("about", "/a-propos", "Qui sommes-nous"),
        React.createElement("a", { href: IC_INSTAGRAM, target: "_blank", rel: "noopener noreferrer" }, "Instagram"),
      ),
      React.createElement(
        "p",
        { className: "ic-foot-legal" },
        "© " + new Date().getFullYear() + " Inner Clarity · Robin Meuter · ",
        link("legal", "/mentions-legales", "Mentions légales et confidentialité"),
      ),
    ),
    React.createElement("style", null, IC_FOOT_CSS),
  );
}
function App() {
  const [route, setRouteState] = useStateA(() => (icReadThemeParam() ? "test" : routeFromPath(window.location.pathname)));
  const setRoute = React.useCallback((r) => {
    if (!ROUTE_PATHS[r]) r = "home";
    if (window.location.pathname !== ROUTE_PATHS[r]) {
      try {
        window.history.pushState({ route: r }, "", ROUTE_PATHS[r]);
      } catch (e) {}
    }
    setRouteState(r);
  }, []);
  useEffectA(() => {
    const onPop = () => setRouteState(icReadThemeParam() ? "test" : routeFromPath(window.location.pathname));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  const [testPreset, setTestPreset] = useStateA(null);
  const [testKey, setTestKey] = useStateA(0);
  const [tweaks, setTweaks] = useStateA(TWEAK_DEFAULTS);
  const [tweaksOpen, setTweaksOpen] = useStateA(false);
  useEffectA(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [route]); // Tweaks edit-mode wiring
  useEffectA(() => {
    const onMsg = (ev) => {
      const m = ev.data || {};
      if (m.type === "__activate_edit_mode") setTweaksOpen(true);
      if (m.type === "__deactivate_edit_mode") setTweaksOpen(false);
    };
    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);
  const updateTweak = (k, v) => {
    const next = { ...tweaks, [k]: v };
    setTweaks(next);
    try {
      window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [k]: v } }, "*");
    } catch (e) {}
  }; // Apply bgTone
  useEffectA(() => {
    const tone = tweaks.bgTone;
    const map = { apple: "#fbfbfd", warm: "#faf8f4", cool: "#f7f9fb", neutral: "#fafafa" };
    document.body.style.backgroundColor = map[tone] || map.apple;
  }, [tweaks.bgTone]);
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      "data-screen-label":
        route === "guide"
          ? "Guide Système Nerveux"
          : route === "home"
            ? "Accueil"
            : route === "about"
              ? "Qui sommes-nous"
              : route === "workshops"
                ? "Formations"
                : route === "legal"
                  ? "Mentions légales"
                  : "Test Inner Clarity",
      style: { minHeight: "100vh", display: "flex", flexDirection: "column" },
    },
    /*#__PURE__*/ React.createElement(Navigation, { route: route, setRoute: setRoute }),
    /*#__PURE__*/ React.createElement(
      "main",
      { style: { flex: 1, display: "flex", flexDirection: "column" } },
      route === "home" && /*#__PURE__*/ React.createElement(HomePage, { onGo: setRoute }),
      route === "test" && /*#__PURE__*/ React.createElement(InnerTest, { key: testKey, preset: testPreset }),
      route === "guide" && /*#__PURE__*/ React.createElement(NervousSystemGuide, { onGo: setRoute }),
      route === "about" && /*#__PURE__*/ React.createElement(AboutPage, { onGo: setRoute }),
      route === "workshops" && /*#__PURE__*/ React.createElement(PlaceholderPage, { title: "Formations & Conf\xE9rences", bg: "#F8F5E9" }),
      route === "legal" && /*#__PURE__*/ React.createElement(LegalPage, null),
    ),
    route !== "test" && React.createElement(SiteFooter, { setRoute: setRoute }),
    /*#__PURE__*/ React.createElement(
      "div",
      { className: `tweaks-panel${tweaksOpen ? " visible" : ""}` },
      /*#__PURE__*/ React.createElement("h4", null, "Tweaks"),
      /*#__PURE__*/ React.createElement(
        "div",
        { className: "tweaks-row" },
        /*#__PURE__*/ React.createElement("label", null, "Page"),
        /*#__PURE__*/ React.createElement(
          "div",
          { className: "opt-btns" },
          [
            ["home", "Accueil"],
            ["test", "Test"],
            ["guide", "Guide"],
            ["about", "À propos"],
            ["workshops", "Formations"],
          ].map(([v, lbl]) =>
            /*#__PURE__*/ React.createElement(
              "button",
              {
                key: v,
                className: route === v ? "active" : "",
                onClick: () => {
                  setRoute(v);
                  updateTweak("startView", v);
                },
              },
              lbl,
            ),
          ),
        ),
      ),
      route === "test" &&
        /*#__PURE__*/ React.createElement(
          "div",
          { className: "tweaks-row" },
          /*#__PURE__*/ React.createElement("label", null, "\xC9tape du test (exemple : stress)"),
          /*#__PURE__*/ React.createElement(
            "div",
            { className: "opt-btns" },
            [
              ["choose", "Choix"],
              ["intro", "Accueil thème"],
              ["question", "Question"],
              ["mid", "Intermédiaire"],
              ["pilot", "Pilote"],
              ["reveal", "Révélation"],
              ["result", "Résultat"],
            ].map(([v, lbl]) =>
              /*#__PURE__*/ React.createElement(
                "button",
                {
                  key: v,
                  className: testPreset === v ? "active" : "",
                  onClick: () => {
                    setTestPreset(v);
                    setTestKey((k) => k + 1);
                  },
                },
                lbl,
              ),
            ),
          ),
        ),
      /*#__PURE__*/ React.createElement(
        "div",
        { className: "tweaks-row" },
        /*#__PURE__*/ React.createElement("label", null, "Teinte du fond"),
        /*#__PURE__*/ React.createElement(
          "div",
          { className: "opt-btns" },
          ["apple", "warm", "cool", "neutral"].map((v) =>
            /*#__PURE__*/ React.createElement(
              "button",
              { key: v, className: tweaks.bgTone === v ? "active" : "", onClick: () => updateTweak("bgTone", v) },
              v,
            ),
          ),
        ),
      ),
    ),
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/ React.createElement(App, null));
