import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button({ title, onPress, variant = 'primary' }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, variant === 'secondary' && styles.secondary]}
      onPress={onPress}
    >
      <Text style={[styles.text, variant === 'secondary' && styles.secondaryText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#E53935',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#E53935',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryText: {
    color: '#E53935',
  },
});
