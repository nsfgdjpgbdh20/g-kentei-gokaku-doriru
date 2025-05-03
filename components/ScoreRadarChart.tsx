import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { useTheme } from "@/context/theme-context";
import { useProgressStore } from "@/stores/progress-store";
import { useQuestionStore } from "@/stores/question-store";
import Svg, { Polygon, Line, Circle, Text as SvgText } from "react-native-svg";
import { sampleQuestions } from "@/data/sample-questions";
import { CHAPTERS } from "@/constants/chapters";

export default function ScoreRadarChart() {
  const { colors } = useTheme();
  const { chapterProgress, getChapterAverageScores } = useProgressStore();
  const { questions } = useQuestionStore();
  
  // 章のリストを取得
  const chapters = CHAPTERS;
  
  // 章ごとの平均スコアを取得
  const averageScores = getChapterAverageScores();
  
  // 表示する章を最大6つに制限
  const displayChapters = chapters.slice(0, 6);
  
  // チャートのサイズと中心点
  const width = Dimensions.get("window").width - 32; // 画面幅から余白を引く
  const height = 200;
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(centerX, centerY) - 30;
  
  // 各章の角度を計算
  const angleStep = (2 * Math.PI) / displayChapters.length;
  
  // 最新スコアの頂点座標を計算
  const latestPoints = displayChapters.map((chapter, index) => {
    const score = chapterProgress[chapter] || 0;
    const ratio = score / 100;
    const angle = index * angleStep - Math.PI / 2; // -90度から開始
    
    const x = centerX + radius * ratio * Math.cos(angle);
    const y = centerY + radius * ratio * Math.sin(angle);
    
    return { x, y };
  });
  
  // 平均スコアの頂点座標を計算
  const averagePoints = displayChapters.map((chapter, index) => {
    const score = averageScores[chapter] || 0;
    const ratio = score / 100;
    const angle = index * angleStep - Math.PI / 2; // -90度から開始
    
    const x = centerX + radius * ratio * Math.cos(angle);
    const y = centerY + radius * ratio * Math.sin(angle);
    
    return { x, y };
  });
  
  // 軸の頂点座標を計算
  const axisPoints = displayChapters.map((_, index) => {
    const angle = index * angleStep - Math.PI / 2; // -90度から開始
    
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    
    return { x, y };
  });
  
  // ポリゴンのポイント文字列を生成
  const latestPolygonPoints = latestPoints.map(p => `${p.x},${p.y}`).join(" ");
  const averagePolygonPoints = averagePoints.map(p => `${p.x},${p.y}`).join(" ");
  
  // 同心円の半径
  const circleRadii = [0.25, 0.5, 0.75, 1].map(r => r * radius);
  
  return (
    <View style={styles.container}>
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: colors.primary }]} />
          <Text style={[styles.legendText, { color: colors.text }]}>最新</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: colors.accent }]} />
          <Text style={[styles.legendText, { color: colors.text }]}>平均</Text>
        </View>
      </View>
      
      <Svg width={width} height={height}>
        {/* 同心円（25%, 50%, 75%, 100%） */}
        {circleRadii.map((r, i) => (
          <Circle
            key={i}
            cx={centerX}
            cy={centerY}
            r={r}
            stroke={colors.border}
            strokeWidth={1}
            fill="none"
          />
        ))}
        
        {/* 軸線 */}
        {axisPoints.map((point, index) => (
          <Line
            key={index}
            x1={centerX}
            y1={centerY}
            x2={point.x}
            y2={point.y}
            stroke={colors.border}
            strokeWidth={1}
          />
        ))}
        
        {/* 章のラベル */}
        {displayChapters.map((chapter, index) => {
          const angle = index * angleStep - Math.PI / 2;
          const labelRadius = radius + 20;
          const x = centerX + labelRadius * Math.cos(angle);
          const y = centerY + labelRadius * Math.sin(angle);
          
          // ラベルの配置調整
          let anchorX = "middle";
          let anchorY = "middle";
          
          if (angle < -Math.PI / 4 && angle > -3 * Math.PI / 4) {
            anchorY = "end";
          } else if (angle > Math.PI / 4 && angle < 3 * Math.PI / 4) {
            anchorY = "start";
          }
          
          if (angle > -Math.PI / 4 && angle < Math.PI / 4) {
            anchorX = "start";
          } else if (angle > 3 * Math.PI / 4 || angle < -3 * Math.PI / 4) {
            anchorX = "end";
          }
          
          return (
            <SvgText
              key={index}
              x={x}
              y={y}
              fill={colors.textSecondary}
              fontSize="10"
              textAnchor={anchorX as any}
              alignmentBaseline={anchorY as any}
            >
              {chapter}
            </SvgText>
          );
        })}
        
        {/* 平均スコアのポリゴン */}
        <Polygon
          points={averagePolygonPoints}
          fill={`${colors.accent}40`} // 40は透明度25%
          stroke={colors.accent}
          strokeWidth={2}
        />
        
        {/* 最新スコアのポリゴン */}
        <Polygon
          points={latestPolygonPoints}
          fill={`${colors.primary}40`} // 40は透明度25%
          stroke={colors.primary}
          strokeWidth={2}
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  legendContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 8,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 4,
  },
  legendText: {
    fontSize: 12,
  },
});