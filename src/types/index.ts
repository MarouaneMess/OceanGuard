export interface SystemType {
  humanSystem: string;
  oceanSystem: string;
  description: string;
  icon: 'heart' | 'droplets' | 'thermometer' | 'brain' | 'shield' | 'waves';
  details: string[];
  impact: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  hint: string;
}

export interface Fact {
  title: string;
  description: string;
  source: string;
}