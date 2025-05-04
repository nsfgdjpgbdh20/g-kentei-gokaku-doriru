import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, Platform, SafeAreaView } from "react-native";
import { router } from "expo-router";
import { useTheme } from "@/context/theme-context";
import { useProgressStore } from "@/stores/progress-store";
import { useQuestionStore } from "@/stores/question-store";
import { useNotificationStore } from "@/stores/notification-store";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from '@expo/vector-icons';
import * as Haptics from "expo-haptics";
import ProgressBar from "@/components/ProgressBar";
import MonthlyLearningProgress from "@/components/MonthlyLearningProgress";
import ScoreRadarChart from "@/components/ScoreRadarChart";
import { checkForQuestionUpdates } from "@/utils/question-updater";
import { scheduleNotification } from "@/utils/notifications";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CommonHeader from "../../components/CommonHeader";
import { useFlashcardStore } from "@/stores/flashcard-store";
import Svg, { Circle, Path, Text as SvgText } from "react-native-svg";

export default function HomeScreen() {
  const { colors } = useTheme();
  const { progress, lastScore, monthlyLearningDays, getAverageScore, testHistory, questionsEverCorrect } = useProgressStore();
  const { questions, loadQuestions } = useQuestionStore();
  const { notificationTime } = useNotificationStore();
  const { flashcards, studiedToday } = useFlashcardStore();
  const getTodayStudiedCount = () => studiedToday.length;
  const insets = useSafeAreaInsets();
  
  // 今日解いたクイズ数を計算
  const today = new Date().toISOString().split("T")[0];
  const todayAnsweredCount = testHistory
    .filter(test => test.date === today)
    .reduce((sum, test) => sum + (test.answeredCount || 0), 0);
  
  const averageScore = getAverageScore();
  
  // 変更: masteryRate の計算をコンポーネント内に移動
  const calculateMasteryRate = () => {
    // クイズ問題の習得数（1回でも正解）
    const masteredQuestions = questionsEverCorrect ? Object.keys(questionsEverCorrect).length : 0;
    
    // フラッシュカードの習得数（repetitions >= 1）
    const masteredCards = flashcards.filter(card => (card.repetitions ?? 0) >= 1).length;

    const totalQuestionsCount = questions.length;
    const totalFlashcardsCount = flashcards.length;
    const total = totalQuestionsCount + totalFlashcardsCount;
    
    if (total === 0) return 0;
    
    return Math.round(((masteredQuestions + masteredCards) / total) * 100);
  };
  const masteryRate = calculateMasteryRate();
  
  useEffect(() => {
    // Load questions on first launch
    loadQuestions();
    
    // Check for updates
    checkForQuestionUpdates().catch(error => {
      console.log("Failed to check for updates:", error);
    });
    
    // Schedule notification
    if (Platform.OS !== "web") {
      scheduleNotification(notificationTime);
    }
  }, []);

  const handlePressAction = (action: string) => {
    if (Platform.OS !== "web") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    switch (action) {
      case "miniTest":
        router.push("/quiz/mini-test");
        break;
      case "flashcards":
        router.push("/cards/study");
        break;
      default:
        break;
    }
  };

  const getRecommendedAction = () => {
    if (progress < 30) {
      return "miniTest";
    } else {
      return "flashcards";
    }
  };

  const recommendedAction = getRecommendedAction();
  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}> 
      <CommonHeader title="" />
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.progressContainer}>
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 12 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: colors.text }}>アプリ習得済み率</Text>
            <TouchableOpacity
              onPress={() => {
                Alert.alert(
                  "習得済みの条件",
                  "1回以上正解した問題・カードが習得済みとみなされます。"
                );
              }}
              style={{ marginLeft: 6 }}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
                <Circle cx="12" cy="12" r="10" stroke={colors.textSecondary} strokeWidth={2} fill={colors.card} />
                <SvgText
                  x="12"
                  y="16"
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="bold"
                  fill={colors.textSecondary}
                  fontFamily="Arial"
                >i</SvgText>
              </Svg>
            </TouchableOpacity>
          </View>
          <ProgressBar progress={masteryRate} />
          <Text style={{ textAlign: "right", marginTop: 4, color: colors.text }}>{masteryRate}%</Text>
        </View>
        
        <View style={styles.recommendedSection}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>今日の学習タスク</Text>
          <View style={styles.taskList}>
            {/* フラッシュカードタスク */}
            <View style={[styles.taskItem, { backgroundColor: colors.card }, getTodayStudiedCount() >= 10 && { backgroundColor: colors.success + '22' }]}> 
              <View style={[styles.taskCheckCircle, getTodayStudiedCount() >= 10 && { borderColor: colors.success, backgroundColor: colors.success }]}> 
                {getTodayStudiedCount() >= 10 ? (
                  <MaterialIcons name="check" size={24} color={colors.primary} />
                ) : null}
              </View>
              <Text style={[styles.taskText, { color: colors.text }, getTodayStudiedCount() >= 10 && { color: colors.success }]}>フラッシュカードを10枚学習 <Text style={[styles.taskProgress, { color: colors.textSecondary }]}>（{getTodayStudiedCount()}/10）</Text></Text>
            </View>
            {/* クイズタスク */}
            <View style={[styles.taskItem, { backgroundColor: colors.card }, todayAnsweredCount >= 10 && { backgroundColor: colors.success + '22' }]}> 
              <View style={[styles.taskCheckCircle, todayAnsweredCount >= 10 && { borderColor: colors.success, backgroundColor: colors.success }]}> 
                {todayAnsweredCount >= 10 ? (
                  <MaterialIcons name="check" size={24} color={colors.primary} />
                ) : null}
              </View>
              <Text style={[styles.taskText, { color: colors.text }, todayAnsweredCount >= 10 && { color: colors.success }]}>クイズを10問解く <Text style={[styles.taskProgress, { color: colors.textSecondary }]}>（{todayAnsweredCount}/10）</Text></Text>
            </View>
          </View>
        </View>
        
        <View style={styles.actionsSection}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>学習メニュー</Text>
          <View style={styles.actionsGrid}>
            <TouchableOpacity
              style={[styles.actionButton, { backgroundColor: colors.card }]}
              onPress={() => {
                if (Platform.OS !== "web") {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                }
                router.push('/(tabs)/quiz');
              }}
            >
              <MaterialIcons name="menu-book" size={24} color={colors.primary} />
              <Text style={[styles.actionText, { color: colors.text }]}>クイズ</Text>
              <Text style={[styles.actionSubtext, { color: colors.textSecondary }]}>設問形式で学習</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionButton, { backgroundColor: colors.card }]}
              onPress={() => {
                if (Platform.OS !== "web") {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                }
                router.push('/(tabs)/cards');
              }}
            >
              <MaterialIcons name="layers" size={24} color={colors.primary} />
              <Text style={[styles.actionText, { color: colors.text }]}>フラッシュカード</Text>
              <Text style={[styles.actionSubtext, { color: colors.textSecondary }]}>重要用語の暗記</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  progressContainer: {
    marginBottom: 24,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  statItem: {
    alignItems: "center",
    flex: 1,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 4,
  },
  statLabel: {
    fontSize: 12,
  },
  monthlyProgressContainer: {
    marginBottom: 24,
  },
  chartContainer: {
    marginBottom: 24,
    height: 220,
  },
  recommendedSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  taskList: {
    gap: 12,
    marginTop: 8,
    marginBottom: 8,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginBottom: 4,
  },
  taskCheckCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#CCC',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    backgroundColor: '#FFF',
  },
  taskCheckMark: {
    // fontSize: 18, // アイコンに変更したので不要かも
    // color: '#fff', // アイコン側で指定
    // fontWeight: 'bold',
    // textAlign: 'center',
    // lineHeight: 22, // アイコンには不要
  },
  taskText: {
    fontSize: 16,
    fontFamily: 'NotoSansJP-Regular',
    flex: 1,
  },
  taskProgress: {
    fontSize: 14,
    color: '#888',
    fontFamily: 'NotoSansJP-Regular',
  },
  actionsSection: {
    marginBottom: 24,
  },
  actionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  actionButton: {
    width: "48%",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: "center",
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  actionText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 4,
  },
  actionSubtext: {
    fontSize: 12,
    textAlign: "center",
  },
  scrollContent: {
    padding: 16,
  },
});