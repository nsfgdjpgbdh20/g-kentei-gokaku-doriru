import React from "react";
import { Tabs } from "expo-router";
import { useColorScheme, Platform, Dimensions } from "react-native";
import { Home, BookOpen, Layers, Settings } from "lucide-react-native";
import { useTheme } from "@/context/theme-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { theme, colors } = useTheme();
  const windowWidth = Dimensions.get('window').width;
  const insets = useSafeAreaInsets();
  
  // 画面サイズに基づいてアイコンとラベルのサイズを調整
  const getIconSize = () => {
    if (windowWidth < 350) return 18;
    return 20;
  };
  
  const getLabelStyle = () => {
    if (windowWidth < 350) {
      return {
        fontSize: 10,
      };
    }
    return {
      fontSize: 11,
    };
  };
  
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.tabIconDefault,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.border,
          height: Platform.OS === 'ios' ? 85 : 60, // iOSでは安全領域を考慮
          paddingBottom: Platform.OS === 'ios' ? 28 : 8,
          paddingTop: 6,
        },
        headerShown: true, // ヘッダーを表示
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTitleStyle: {
          color: colors.text,
        },
        tabBarLabelStyle: getLabelStyle(),
        tabBarIconStyle: {
          marginTop: 2,
        },
        // iPhoneのノッチやカメラ部分を考慮したパディング
        headerStatusBarHeight: insets.top,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "ホーム",
          tabBarIcon: ({ color }) => <Home size={getIconSize()} color={color} />,
          headerTitle: "G検定合格ドリル",
        }}
      />
      <Tabs.Screen
        name="quiz"
        options={{
          title: "クイズ",
          headerTitle: "クイズ",
          tabBarIcon: ({ color }) => <BookOpen size={getIconSize()} color={color} />,
        }}
      />
      <Tabs.Screen
        name="cards"
        options={{
          title: "カード",
          tabBarIcon: ({ color }) => <Layers size={getIconSize()} color={color} />,
          headerTitle: "フラッシュカード",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "設定",
          tabBarIcon: ({ color }) => <Settings size={getIconSize()} color={color} />,
          headerTitle: "設定",
        }}
      />
    </Tabs>
  );
}