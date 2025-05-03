import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Modal, 
  Platform 
} from "react-native";
import { useTheme } from "@/context/theme-context";
import DateTimePicker from "@react-native-community/datetimepicker";

interface CustomDateTimePickerProps {
  mode: "date" | "time";
  value: string;
  onConfirm: (value: string) => void;
  onCancel: () => void;
}

export default function CustomDateTimePicker({
  mode,
  value,
  onConfirm,
  onCancel
}: CustomDateTimePickerProps) {
  const { colors } = useTheme();
  
  // Parse the initial value
  const initialDate = () => {
    const date = new Date();
    if (mode === "time" && value) {
      const [hours, minutes] = value.split(":").map(Number);
      date.setHours(hours);
      date.setMinutes(minutes);
    }
    return date;
  };
  
  const [date, setDate] = useState(initialDate());
  
  const onChange = (event: any, selectedDate?: Date) => {
    if (Platform.OS === "android") {
      if (event.type === "dismissed") {
        onCancel();
        return;
      }
      
      if (selectedDate) {
        handleConfirm(selectedDate);
      }
    } else {
      const currentDate = selectedDate || date;
      setDate(currentDate);
    }
  };
  
  const handleConfirm = (selectedDate: Date) => {
    if (mode === "time") {
      const hours = selectedDate.getHours().toString().padStart(2, "0");
      const minutes = selectedDate.getMinutes().toString().padStart(2, "0");
      onConfirm(`${hours}:${minutes}`);
    } else {
      onConfirm(selectedDate.toISOString().split("T")[0]);
    }
  };
  
  // For iOS, we show a modal with buttons
  if (Platform.OS === "ios") {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={onCancel}
      >
        <View style={styles.centeredView}>
          <View style={[styles.modalView, { backgroundColor: colors.card }]}>
            <View style={styles.header}>
              <TouchableOpacity onPress={onCancel}>
                <Text style={[styles.headerButton, { color: colors.primary }]}>
                  キャンセル
                </Text>
              </TouchableOpacity>
              <Text style={[styles.headerTitle, { color: colors.text }]}>
                {mode === "time" ? "時刻を選択" : "日付を選択"}
              </Text>
              <TouchableOpacity onPress={() => handleConfirm(date)}>
                <Text style={[styles.headerButton, { color: colors.primary }]}>
                  完了
                </Text>
              </TouchableOpacity>
            </View>
            
            <DateTimePicker
              value={date}
              mode={mode}
              display="spinner"
              onChange={onChange}
              style={styles.picker}
              textColor={colors.text}
            />
          </View>
        </View>
      </Modal>
    );
  }
  
  // For Android, we just show the native picker
  return (
    <DateTimePicker
      value={date}
      mode={mode}
      is24Hour={true}
      display="default"
      onChange={onChange}
    />
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  headerButton: {
    fontSize: 16,
    fontWeight: "500",
  },
  picker: {
    height: 200,
  },
});