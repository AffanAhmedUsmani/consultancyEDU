import React, { useState } from 'react';
import { TextInput, StyleSheet, TextInputProps, View, Text } from 'react-native';
import theme from '../styles/theme';

type InputFieldProps = TextInputProps & {
  label: string; // Keep the label prop to store the value
};

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, ...props }) => {
  const [focused, setFocused] = useState(false); // State to track focus
  const [inputValue, setInputValue] = useState(''); // Local state to store the input value

  // Handle input change and set the input value
  const handleInputChange = (value: string) => {
    setInputValue(value);
    // If you want to pass the value to a parent component, you can call props.onChangeText(value) here
  };

  return (
    <View style={styles.container}>
      {/* Only show the label if the input is empty */}
      {!inputValue && !placeholder && (
        <Text style={[styles.label, focused && styles.labelFocused]}>{label}</Text>
      )}
      <TextInput
        style={[styles.input, focused && styles.inputFocused]}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={inputValue ? undefined : placeholder} // Hide placeholder if input has value
        placeholderTextColor={theme.colors.placeholder} // Style for the placeholder
        value={inputValue} // Set the value of the TextInput
        onChangeText={handleInputChange} // Handle text change
        underlineColorAndroid="transparent" // For Android
        selectionColor="transparent" // Prevents the blue highlight when text is selected
        blurOnSubmit={true} // Dismiss the keyboard on submit
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    width: '100%',
  },
  label: {
    position: 'absolute',
    left: 10,
    top: 12,
    fontSize: 16,
    color: '#aaa', // Gray color for label
  },
  labelFocused: {
    top: -10,
    fontSize: 12,
    color: theme.colors.secondary, // Color for label when focused
  },
  input: {
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.secondary, // Bottom border color
    paddingHorizontal: 0, // Remove padding for a seamless look
    fontSize: 16,
    color: theme.colors.secondary, // Text color
    marginBottom: 10,
    borderColor: 'transparent', // Set border color to transparent
  },
  inputFocused: {
    outlineWidth: 0, 
    borderBottomColor: theme.colors.secondary, // Keep the border bottom transparent
  },
});

export default InputField;
