import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Question } from "@/types/question";
import { sampleQuestions } from "@/data/sample-questions";

// --- AsyncStorage デバッグクリア --- 削除
// // この行は問題解決後に必ず削除してください！
// AsyncStorage.removeItem("g-kentei-questions-v3");
// AsyncStorage.removeItem("g-kentei-progress-v2"); // 念のためprogressストアもクリア
// console.log("Cleared AsyncStorage keys for debugging.");
// --------------------------------

interface QuestionState {
  questions: Question[];
  version: string;
  testProgress: {
    questions: Question[];
    answers: (number | null)[];
    flagged: boolean[];
    timeRemaining: number;
    currentIndex: number;
  } | null;
  
  // Actions
  loadQuestions: () => void;
  setQuestions: (questions: Question[], version: string) => void;
  getFullTestQuestions: (count: number) => Question[];
  getMiniTestQuestions: (count: number, chapter?: string | null) => Question[];
  saveTestProgress: (progress: any) => Promise<void>;
  loadTestProgress: () => Promise<any>;
  resetQuestions: () => void;
}

export const useQuestionStore = create<QuestionState>()(
  persist(
    (set, get) => ({
      questions: [],
      version: "1.0.0",
      testProgress: null,
      
      loadQuestions: () => {
        // If no questions are loaded, use sample questions
        if (get().questions.length === 0) {
          set({ questions: sampleQuestions, version: "1.0.0" });
        }
      },
      
      setQuestions: (questions, version) => {
        set({ questions, version });
      },
      
      getFullTestQuestions: (count) => {
        const { questions } = get();
        
        // If not enough questions, return all available
        if (questions.length <= count) {
          return [...questions];
        }
        
        // Shuffle and select questions
        return shuffleArray([...questions]).slice(0, count);
      },
      
      getMiniTestQuestions: (count, chapter = null) => {
        const { questions } = get();
        
        // Filter by chapter if specified
        const filteredQuestions = chapter 
          ? questions.filter(q => q.chapter === chapter)
          : questions;
        
        // If not enough questions, return all available
        if (filteredQuestions.length <= count) {
          return [...filteredQuestions];
        }
        
        // Shuffle and select questions
        return shuffleArray([...filteredQuestions]).slice(0, count);
      },
      
      saveTestProgress: async (progress) => {
        set({ testProgress: progress });
      },
      
      loadTestProgress: async () => {
        return get().testProgress;
      },
      
      resetQuestions: () => {
        set({ testProgress: null });
      },
    }),
    {
      name: "g-kentei-questions-v4",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

// Helper function to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}