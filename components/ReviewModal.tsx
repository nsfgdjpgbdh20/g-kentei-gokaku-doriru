import React, { useState } from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from "@/context/theme-context";

interface ReviewModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (rating: number, comment: string) => void;
}

const MAX_STARS = 5;

const ReviewModal: React.FC<ReviewModalProps> = ({ visible, onClose, onSubmit }) => {
  const { colors } = useTheme();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleStarPress = (star: number) => {
    setRating(star);
  };

  const handleSend = () => {
    if (rating === 0) return;
    onSubmit(rating, comment);
    setRating(0);
    setComment("");
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={[styles.modal, { backgroundColor: colors.card }]}> 
          <Text style={[styles.title, { color: colors.text }]}>アプリのレビューをお願いします</Text>
          <View style={styles.starsRow}>
            {[...Array(MAX_STARS)].map((_, i) => (
              <TouchableOpacity key={i} onPress={() => handleStarPress(i + 1)}>
                <MaterialIcons
                  name={i < rating ? "star" : "star-border"}
                  size={32}
                  color={colors.accent}
                />
              </TouchableOpacity>
            ))}
          </View>
          <TextInput
            style={[styles.input, { color: colors.text, borderColor: colors.border }]}
            placeholder="ご意見・ご感想（任意）"
            placeholderTextColor={colors.textSecondary}
            value={comment}
            onChangeText={setComment}
            multiline
            numberOfLines={3}
            maxLength={200}
          />
          <View style={styles.buttonRow}>
            <TouchableOpacity style={[styles.button, { backgroundColor: colors.border }]} onPress={onClose}>
              <Text style={{ color: colors.text }}>キャンセル</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: colors.primary }]}
              onPress={handleSend}
              disabled={rating === 0}
            >
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>送信</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '85%',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  starsRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    minHeight: 60,
    textAlignVertical: 'top',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 4,
  },
});

export default ReviewModal; 