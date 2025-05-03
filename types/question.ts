export interface Question {
  id: number;
  chapter: string;
  stem: string;
  choices: string[];
  answerIndex: number;
  explanation: string;
}