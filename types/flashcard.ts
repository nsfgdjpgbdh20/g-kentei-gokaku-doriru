export interface Flashcard {
  id: number;
  term: string;
  definition: string;
  chapter: string;
  
  // SM-2 algorithm fields
  interval?: number;
  repetitions?: number;
  easeFactor?: number;
  nextReview?: string;
}