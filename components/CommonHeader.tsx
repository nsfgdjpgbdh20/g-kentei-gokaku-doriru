import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "@/context/theme-context";
// import { ArrowLeft } from "lucide-react-native";
import { useSafeAreaInsets, SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

interface CommonHeaderProps {
  title: string;
  showBackButton?: boolean;
  onBack?: () => void;
}

const CommonHeader: React.FC<CommonHeaderProps> = ({ title, showBackButton = false, onBack }) => {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();
  const router = useRouter();

  if (!title) return null;

  return (
    <SafeAreaView edges={["top"]} style={{ backgroundColor: colors.background }}>
      <View style={[styles.header, { paddingTop: insets.top, backgroundColor: colors.background }]}> 
        {showBackButton && (
          <TouchableOpacity style={styles.backButton} onPress={onBack || (() => router.back())}>
            {/* <ArrowLeft size={24} color={colors.text} /> */}
          </TouchableOpacity>
        )}
        <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
        {/* 右側スペース確保用 */}
        {showBackButton ? <View style={styles.backButton} /> : <View style={{ width: 40 }} />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 8,
    minHeight: 56,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default CommonHeader; 