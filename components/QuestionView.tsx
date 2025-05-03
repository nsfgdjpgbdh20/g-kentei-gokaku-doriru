import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useTheme } from "@/context/theme-context";
import { Question } from "@/types/question";
import { CheckCircle, XCircle } from "lucide-react-native";

interface QuestionViewProps {
  question: Question;
  onSelectAnswer: (index: number, isCorrect: boolean) => void;
  feedbackStatus: 'correct' | 'incorrect' | null;
}

export default function QuestionView({
  question,
  onSelectAnswer,
  feedbackStatus
}: QuestionViewProps) {
  const { colors } = useTheme();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  
  const handlePressChoice = (index: number) => {
    if (feedbackStatus !== null) return;
    
    setSelectedIndex(index);
    const isCorrect = index === question.answerIndex;
    onSelectAnswer(index, isCorrect);
  };

  const showExplanation = feedbackStatus !== null;

  return (
    <View style={styles.container}>
      <View style={[styles.questionCard, { backgroundColor: colors.card }]}>
        <Text style={[styles.chapterText, { color: colors.textSecondary }]}>
          {question.chapter}
        </Text>
        
        <Text style={[styles.questionText, { color: colors.text }]}>
          {question.stem}
        </Text>
      </View>
      
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.choicesContainer}>
          {question.choices.map((choice, index) => {
            const isSelected = selectedIndex === index;
            const isCorrectAnswer = question.answerIndex === index;
            
            let backgroundColor = colors.border;
            if (feedbackStatus === 'correct' && isSelected) {
              backgroundColor = colors.successLight;
            } else if (feedbackStatus === 'incorrect' && isSelected) {
              backgroundColor = colors.errorLight;
            } else if (feedbackStatus === 'incorrect' && isCorrectAnswer) {
              backgroundColor = colors.successLight;
            }
            
            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.choiceButton,
                  { backgroundColor }
                ]}
                onPress={() => handlePressChoice(index)}
                disabled={feedbackStatus !== null}
              >
                <View style={styles.choiceContent}>
                  <Text style={[styles.choiceText, { color: colors.text }]}>
                    {choice}
                  </Text>
                  
                  {(feedbackStatus === 'correct' && isSelected) || (feedbackStatus === 'incorrect' && isCorrectAnswer) ? (
                    <CheckCircle size={20} color={colors.success} />
                  ) : null}
                  
                  {feedbackStatus === 'incorrect' && isSelected ? (
                    <XCircle size={20} color={colors.error} />
                  ) : null}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        
        {showExplanation && (
          <View style={[styles.explanationCard, { backgroundColor: colors.card }]}>
            <Text style={[styles.explanationTitle, { color: colors.text }]}>
              解説
            </Text>
            <Text style={[styles.explanationText, { color: colors.textSecondary }]}>
              {question.explanation}
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  questionCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  chapterText: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 8,
  },
  questionText: {
    fontSize: 16,
    lineHeight: 24,
  },
  scrollContainer: {
    flex: 1,
    marginTop: 8,
  },
  choicesContainer: {
    marginBottom: 16,
  },
  choiceButton: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  choiceContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  choiceText: {
    fontSize: 16,
    flex: 1,
    marginRight: 8,
  },
  explanationCard: {
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginTop: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 24,
  },
  explanationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  explanationText: {
    fontSize: 14,
    lineHeight: 22,
  },
});