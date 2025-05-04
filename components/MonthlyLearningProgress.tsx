import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@/context/theme-context";
import { MaterialIcons } from '@expo/vector-icons';
// import { Calendar } from "lucide-react-native";

interface MonthlyLearningProgressProps {
  currentDays: number;
  goalDays: number;
}

export default function MonthlyLearningProgress({ 
  currentDays, 
  goalDays 
}: MonthlyLearningProgressProps) {
  const { colors } = useTheme();
  
  // 進捗率を計算（最大100%）
  const progressPercentage = Math.min(100, (currentDays / goalDays) * 100);
  
  // 現在の月を取得
  const currentMonth = new Date().toLocaleDateString('ja-JP', { month: 'long' });
  
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <View style={styles.titleContainer}>
          <MaterialIcons name="calendar-today" size={18} color={colors.primary} />
          <Text style={[styles.title, { color: colors.text }]}>
            {currentMonth}の学習目標
          </Text>
        </View>
        <Text style={[styles.counter, { color: colors.text }]}>
          {currentDays}/{goalDays}日
        </Text>
      </View>
      
      <View style={[styles.progressBarContainer, { backgroundColor: colors.border }]}>
        <View 
          style={[
            styles.progressBar, 
            { 
              width: `${progressPercentage}%`,
              backgroundColor: getProgressColor(progressPercentage, colors)
            }
          ]} 
        />
      </View>
      
      <Text style={[styles.motivationText, { color: colors.textSecondary }]}>
        {getMotivationMessage(currentDays, goalDays)}
      </Text>
    </View>
  );
}

// 進捗に応じた色を返す
function getProgressColor(percentage: number, colors: any) {
  if (percentage >= 100) return colors.success;
  if (percentage >= 50) return colors.primary;
  return colors.warning;
}

// 進捗に応じたメッセージを返す
function getMotivationMessage(current: number, goal: number) {
  const percentage = (current / goal) * 100;
  
  if (percentage >= 100) {
    return "素晴らしい！今月の目標を達成しました！";
  } else if (percentage >= 75) {
    return "順調に進んでいます！このまま続けましょう。";
  } else if (percentage >= 50) {
    return "半分まで来ました！コツコツ続けていきましょう。";
  } else if (percentage >= 25) {
    return "良いスタートです！定期的に学習を続けましょう。";
  } else {
    return "今月も学習を始めましょう！毎日少しずつでも効果的です。";
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    padding: 16,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
  counter: {
    fontSize: 16,
    fontWeight: "bold",
  },
  progressBarContainer: {
    height: 12,
    borderRadius: 6,
    marginBottom: 12,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    borderRadius: 6,
  },
  motivationText: {
    fontSize: 14,
    textAlign: "center",
  },
});