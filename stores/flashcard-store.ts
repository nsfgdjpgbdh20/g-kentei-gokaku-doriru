import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Flashcard } from "@/types/flashcard";
import { sampleFlashcards } from "@/data/sample-flashcards";
import dayjs from "dayjs";

interface FlashcardState {
  flashcards: Flashcard[];
  initialized: boolean;
  studiedToday: number[]; // 今日学習したカードID
  lastStudiedDate: string | null; // 最後に学習した日付
  
  // Computed
  dueCards: Flashcard[];
  totalMastered: () => number;
  getTodayStudiedCount: () => number;
  
  // Actions
  loadFlashcards: () => void;
  getDueCardsByChapter: (chapter: string | null) => Flashcard[];
  updateCardProgress: (id: number, quality: number) => void;
  resetFlashcards: () => void;
  addFlashcard: (term: string, definition: string, chapter: string) => void;
}

export const useFlashcardStore = create<FlashcardState>()(
  persist(
    (set, get) => ({
      flashcards: [],
      initialized: false,
      studiedToday: [],
      lastStudiedDate: null,
      
      get dueCards() {
        const flashcards = get().flashcards;
        const today = new Date();
        const due = flashcards.filter(card => {
          return !card.nextReview || new Date(card.nextReview) <= today;
        });
        // もしdueが0枚なら全カードを返す（初回学習やリセット直後対応）
        if (due.length === 0) return [...flashcards];
        return due;
      },
      
      totalMastered: () => {
        const flashcards = get().flashcards;
        return flashcards.filter(card => (card.repetitions ?? 0) >= 1).length;
      },
      
      getTodayStudiedCount: () => {
        const { studiedToday } = get();
        return studiedToday.length;
      },
      
      loadFlashcards: () => {
        const { initialized, flashcards } = get();
        const targetCount = 100; // 期待するカード数

        // 初期化済みだがカード数が違う場合、強制的に再読み込み
        if (initialized && flashcards.length !== targetCount) {
            // このまま下の処理に進み、サンプルデータをロードする
        }
        // 初期化済みでカード数も正しい場合は何もしない
        else if (initialized) {
          return;
        }

        // 初回ロード、または強制再読み込みの場合
        const loadedCards = sampleFlashcards.map(card => ({
          ...card,
          nextReview: undefined,
          interval: undefined,
          repetitions: undefined,
          easeFactor: undefined
        }));
        set({
          flashcards: loadedCards,
          initialized: true // initialized は true に設定
        });
      },
      
      getDueCardsByChapter: (chapter) => {
        const { flashcards, initialized } = get();
        
        // 初期化されていない場合は初期化
        if (!initialized) {
          get().loadFlashcards();
        }
        
        const today = new Date();
        
        // フィルタリング
        const filteredCards = flashcards.filter(card => {
          // 学習予定かどうか
          const isDue = !card.nextReview || new Date(card.nextReview) <= today;
          // 章でフィルタリング
          const isChapterMatch = chapter === null || card.chapter === chapter;
          
          return isDue && isChapterMatch;
        });
        
        // 学習予定のカードがない場合は、全てのカードを返す（初回学習用）
        if (filteredCards.length === 0) {
          return flashcards.filter(card => chapter === null || card.chapter === chapter);
        }
        
        return filteredCards;
      },
      
      updateCardProgress: (id: number, quality: number) =>
        set((state) => {
          // 日付が変わったらstudiedTodayをリセット
          const today = new Date().toISOString().split("T")[0];
          let studiedToday = state.studiedToday;
          let lastStudiedDate = state.lastStudiedDate;
          if (lastStudiedDate !== today) {
            studiedToday = [];
            lastStudiedDate = today;
          }
          // まだ今日学習していないカードなら追加
          if (!studiedToday.includes(id)) {
            studiedToday = [...studiedToday, id];
          }
          const newFlashcards = state.flashcards.map((c) => {
            if (c.id !== id) return c;
            let repetitions = typeof c.repetitions === 'number' ? c.repetitions : 0;
            let interval = typeof c.interval === 'number' ? c.interval : 1;
            let easeFactor = typeof c.easeFactor === 'number' ? c.easeFactor : 2.5;
            if (quality === 5) {
              repetitions += 1;
              if (repetitions === 1) {
                interval = 1;
              } else if (repetitions === 2) {
                interval = 6;
              } else {
                interval = Math.round(interval * easeFactor);
              }
              easeFactor = Math.max(1.3, easeFactor + 0.1 - (5 - quality) * 0.08);
            } else {
              repetitions = 0;
              interval = 1;
              easeFactor = Math.max(1.3, easeFactor - 0.2);
            }
            return {
              ...c,
              repetitions,
              interval,
              easeFactor,
              nextReview: dayjs().add(interval, 'day').toISOString(),
            };
          });
          return { ...state, flashcards: newFlashcards, studiedToday, lastStudiedDate };
        }),
      
      resetFlashcards: () => {
        // Reset progress but keep the cards
        const { flashcards } = get();
        const resetCards = flashcards.map(card => ({
          ...card,
          interval: undefined,
          repetitions: undefined,
          easeFactor: undefined,
          nextReview: undefined,
        }));
        set({ flashcards: resetCards, studiedToday: [], lastStudiedDate: null });
      },
      
      addFlashcard: (term, definition, chapter) => {
        const { flashcards } = get();
        const maxId = flashcards.length > 0 ? Math.max(...flashcards.map(card => card.id)) : 0;
        const newCard = {
          id: maxId + 1,
          term,
          definition,
          chapter
        };
        set({ flashcards: [...flashcards, newCard] });
      },
    }),
    {
      name: "g-kentei-flashcards-v5",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);