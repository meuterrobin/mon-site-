import { Question } from '../types';

export const questions: Question[] = [
  // Axe 1 : Conscience & Connexion Corporelle
  {
    id: 'q1',
    text: 'Je perçois rapidement les tensions ou inconforts dans mon corps.',
    category: 'Conscience & Connexion Corporelle',
    coefficient: 0.5,
  },
  {
    id: 'q2',
    text: 'Lorsque j\'essaie de ressentir les différentes parties de mon corps (chaleur, picotements, énergie)...',
    category: 'Conscience & Connexion Corporelle',
    coefficient: 2,
    options: [
      { value: 1, label: 'Je me concentre sur mes mains, mais je ne ressens rien de particulier.' },
      { value: 2, label: 'Je peux ressentir ces sensations uniquement au niveau de mes extrémités (mains, pieds).' },
      { value: 3, label: 'En plus des extrémités, je peux les ressentir remonter dans mes membres (bras, jambes).' },
      { value: 4, label: 'En plus des membres, je les ressens au niveau de mon tronc (colonne vertébrale, poitrine, cou).' },
      { value: 5, label: 'Je suis capable de ressentir ces sensations distinctement dans l\'intégralité de mon corps.' },
    ],
  },
  {
    id: 'q3',
    text: 'J’ai conscience de l\'impact direct de mes émotions négatives sur mon corps.',
    category: 'Conscience & Connexion Corporelle',
    coefficient: 1,
  },
  {
    id: 'q4',
    text: 'Je prête attention à ma respiration pour réguler mon stress.',
    category: 'Conscience & Connexion Corporelle',
    coefficient: 1,
  },
  {
    id: 'q5',
    text: 'Je suis capable de discerner le lien exact entre ma pensée du moment et la sensation corporelle qu’elle provoque.',
    category: 'Conscience & Connexion Corporelle',
    coefficient: 2,
  },
  {
    id: 'q6',
    text: 'Lorsqu’une partie de mon corps est crispée, je sais utiliser des techniques pour la débloquer.',
    category: 'Conscience & Connexion Corporelle',
    coefficient: 2,
  },

  // Axe 2 : Présence & Distraction
  {
    id: 'q7',
    text: 'Mon attention saute facilement d’une chose à l’autre.',
    category: 'Présence & Distraction',
    isInverted: true,
    coefficient: 0.5,
  },
  {
    id: 'q8',
    text: 'J’ai le besoin compulsif de me distraire (téléphone, série, podcast) dès que je ne fais rien.',
    category: 'Présence & Distraction',
    isInverted: true,
    coefficient: 0.5,
  },
  {
    id: 'q9',
    text: 'Je peux facilement rester 5 minutes dans le silence total, sans aucune distraction.',
    category: 'Présence & Distraction',
    coefficient: 1,
  },
  {
    id: 'q10',
    text: 'Je suis capable de ralentir mentalement quand je le décide.',
    category: 'Présence & Distraction',
    coefficient: 2,
  },

  // Axe 3 : Conscience quotidienne
  {
    id: 'q11',
    text: 'Quand je conduis ou que je marche : je suis attentif(ve) à mon environnement plutôt que perdu(e) dans mes pensées.',
    category: 'Conscience quotidienne',
    coefficient: 1,
  },
  {
    id: 'q12',
    text: 'Quand je mange : je suis pleinement dans l’expérience plutôt que distrait(e) mentalement.',
    category: 'Conscience quotidienne',
    coefficient: 1,
  },
  {
    id: 'q13',
    text: 'Je fais confiance à mon intuition pour prendre des décisions.',
    category: 'Conscience quotidienne',
    coefficient: 1,
  },
  {
    id: 'q14',
    text: 'J’analyse tout à l\'excès avant d’agir, au point de parfois me bloquer.',
    category: 'Conscience quotidienne',
    isInverted: true,
    coefficient: 0.5,
  },

  // Axe 4 : Conscience mental
  {
    id: 'q15',
    text: 'Je suis souvent projeté(e) dans le passé en ruminant sur mes erreurs.',
    category: 'Conscience mental',
    isInverted: true,
    coefficient: 0.5,
  },
  {
    id: 'q16',
    text: 'J’imagine presque toujours un scénario négatif pour ce qui va se passer.',
    category: 'Conscience mental',
    isInverted: true,
    coefficient: 0.5,
  },
  {
    id: 'q17',
    text: 'Je me compare souvent aux autres.',
    category: 'Conscience mental',
    isInverted: true,
    coefficient: 0.5,
  },
  {
    id: 'q18',
    text: 'J\'ai tendance à juger les autres.',
    category: 'Conscience mental',
    isInverted: true,
    coefficient: 0.5,
  },
  {
    id: 'q19',
    text: 'J\'accepte facilement d\'avoir tort.',
    category: 'Conscience mental',
    coefficient: 1,
  },
  {
    id: 'q20',
    text: 'Je pense que ma personnalité "est comme ça" et que je ne peux pas vraiment changer.',
    category: 'Conscience mental',
    isInverted: true,
    coefficient: 2,
  },
  {
    id: 'q21',
    text: 'Mon passé influence mes choix et mes décisions dans le présent.',
    category: 'Conscience mental',
    isInverted: true,
    coefficient: 2,
  },
  {
    id: 'q22',
    text: 'Je suis à l\'aise avec le fait de ne pas savoir (ou de ne pas tout contrôler).',
    category: 'Conscience mental',
    coefficient: 2,
  },

  // Axe 5 : Maîtrise Émotionnelle & Résilience
  {
    id: 'q23',
    text: 'Je me laisse vite emporter par la peur ou le stress lorsqu\'un événement compliqué arrive.',
    category: 'Maîtrise Émotionnelle & Résilience',
    isInverted: true,
    coefficient: 0.5,
  },
  {
    id: 'q24',
    text: 'Mon humeur est fortement influencée par celle des autres.',
    category: 'Maîtrise Émotionnelle & Résilience',
    isInverted: true,
    coefficient: 0.5,
  },
  {
    id: 'q25',
    text: 'Je suis rancunier(e) et je pardonne difficilement aux autres.',
    category: 'Maîtrise Émotionnelle & Résilience',
    isInverted: true,
    coefficient: 1,
  },
  {
    id: 'q26',
    text: 'J’ai conscience de l\'impact direct de mes pensées sur mon humeur.',
    category: 'Maîtrise Émotionnelle & Résilience',
    coefficient: 1,
  },
  {
    id: 'q27',
    text: 'Je comprends très vite le fonctionnement et les émotions des autres personnes.',
    category: 'Maîtrise Émotionnelle & Résilience',
    coefficient: 1,
  },
  {
    id: 'q28',
    text: 'Je peux repenser à des éléments durs de mon passé sans me laisser envahir par l\'émotion.',
    category: 'Maîtrise Émotionnelle & Résilience',
    coefficient: 2,
  },
  {
    id: 'q29',
    text: 'Je suis capable d’influencer mon émotion délibérément pour passer d’un état négatif à positif en quelques secondes.',
    category: 'Maîtrise Émotionnelle & Résilience',
    coefficient: 2,
  },
  {
    id: 'q30',
    text: "J'apprécie profondément la solitude choisie : je m'y sens en paix, sans aucun besoin de combler un vide.",
    category: 'Maîtrise Émotionnelle & Résilience',
    coefficient: 2,
  },
];
