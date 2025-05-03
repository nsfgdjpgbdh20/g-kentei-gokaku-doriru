import { create } from "zustand";

interface UIState {
  selectedQuizChapter: string | null;
  setSelectedQuizChapter: (chapter: string | null) => void;
}

export const useUIStateStore = create<UIState>()((set) => ({
  selectedQuizChapter: null, // 初期値は null (全分野)
  setSelectedQuizChapter: (chapter) => set({ selectedQuizChapter: chapter }),
})); 