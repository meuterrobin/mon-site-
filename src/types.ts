export type Category = 
  | 'Conscience & Connexion Corporelle' 
  | 'Présence & Distraction' 
  | 'Conscience quotidienne' 
  | 'Conscience mental' 
  | 'Maîtrise Émotionnelle & Résilience';

export interface QuestionOption {
  value: number;
  label: string;
}

export interface Question {
  id: string;
  text: string;
  category: Category;
  isInverted?: boolean;
  coefficient: number;
  options?: QuestionOption[];
}

export interface Answer {
  questionId: string;
  value: number; // 0 to 100
}
