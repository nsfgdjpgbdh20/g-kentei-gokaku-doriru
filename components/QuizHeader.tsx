import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";
import { MaterialIcons } from '@expo/vector-icons';

interface QuizHeaderProps {
  onExit: () => void;
  timeRemaining: number;
  isTimeWarning: boolean;
  answeredCount: number;
  totalCount: number;
  colors: {
    text: string;
    error: string;
    card: string;
  };
  insets: EdgeInsets;
  formatTime: (time: number) => string;
}

const QuizHeader: React.FC<QuizHeaderProps> = ({
  onExit,
  timeRemaining,
  isTimeWarning,
  answeredCount,
  totalCount,
  colors,
  insets,
  formatTime,
}) => {
  return (
    <View style={[styles.header, { paddingTop: Math.max(insets.top, 10) }]}> 
      <TouchableOpacity style={styles.exitButton} onPress={onExit}>
        <MaterialIcons name="close" size={20} color={colors.text} />
      </TouchableOpacity>
      <View style={styles.timerContainer}>
        <MaterialIcons name="access-time" size={20} color={isTimeWarning ? colors.error : colors.text} />
        <Text style={[
          styles.timerText,
          { color: isTimeWarning ? colors.error : colors.text }
        ]}>
          {formatTime(timeRemaining)}
        </Text>
      </View>
      <View style={[styles.progressBadge, { backgroundColor: colors.card }]}> 
        <Text style={[styles.progressText, { color: colors.text }]}> 
          {answeredCount}/{totalCount}
        </Text>
      </View>
    </View>
  );
};

export default QuizHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  exitButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  timerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  timerText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 6,
  },
  progressBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  progressText: {
    fontSize: 14,
    fontWeight: "500",
  },
}); 