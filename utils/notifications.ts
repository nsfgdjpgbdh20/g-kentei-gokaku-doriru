import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

// 通知許可をリクエストする関数を追加
export async function requestNotificationPermission() {
  if (Platform.OS === "web") return true;
  const { status } = await Notifications.requestPermissionsAsync();
  return status === "granted";
}

// Configure notifications
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export async function scheduleNotification(time: string) {
  if (Platform.OS === "web") return;
  // 追加: 通知許可を確認
  const granted = await requestNotificationPermission();
  if (!granted) {
    return;
  }
  // Cancel existing notifications first
  await cancelAllNotifications();
  
  // Parse time
  const [hours, minutes] = time.split(":").map(Number);
  
  // Create trigger for daily notification at specified time
  let trigger: any;
  if (Platform.OS === "android") {
    trigger = {
      hour: hours,
      minute: minutes,
      repeats: true,
      type: "daily",
    };
  } else {
    trigger = {
      hour: hours,
      minute: minutes,
      repeats: true,
      type: "calendar",
    };
  }
  
  // Schedule notification
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "G検定合格ドリル",
      body: "今日の学習を始めましょう！10問だけ解いて実力アップ！",
      sound: true,
    },
    trigger,
  });
}

export async function cancelAllNotifications() {
  if (Platform.OS === "web") return;
  
  await Notifications.cancelAllScheduledNotificationsAsync();
}