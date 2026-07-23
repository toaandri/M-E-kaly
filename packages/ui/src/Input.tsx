import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {}

export function Input({ style, ...props }: InputProps) {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholderTextColor="#9E9E9E"
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#FAFAFA',
  },
});
