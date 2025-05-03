import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useTheme } from "@/context/theme-context";
import { useProgressStore } from "@/stores/progress-store";
import { useQuestionStore } from "@/stores/question-store";
import ProgressBar from "./ProgressBar";
import { CHAPTERS } from "@/constants/chapters";

export default function ChapterProgressList() {
  const { colors } = useTheme();
  const { chapterProgress } = useProgressStore();
  const { questions } = useQuestionStore();
  
  // Get unique chapters
  const chapters = CHAPTERS;
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {chapters.map((chapter) => {
        const progress = chapterProgress[chapter] || 0;
        
        return (
          <View 
            key={chapter}
            style={[styles.chapterItem, { backgroundColor: colors.card }]}
          >
            <Text style={[styles.chapterName, { color: colors.text }]}>
              {chapter}
            </Text>
            <View style={styles.progressContainer}>
              <ProgressBar progress={progress} height={6} />
              <Text style={[styles.progressText, { color: colors.textSecondary }]}>
                {progress}%
              </Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 16,
  },
  chapterItem: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  chapterName: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 12,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  progressText: {
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 8,
    width: 40,
    textAlign: "right",
  },
});