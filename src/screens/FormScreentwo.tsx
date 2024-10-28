import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import ProgressBar from 'react-native-progress/Bar';
import theme from '../styles/theme';
import InputField from '../components/InputField';

type FormScreentwoNavigationProp = StackNavigationProp<RootStackParamList, 'FormScreentwo'>;

type Props = {
  navigation: FormScreentwoNavigationProp;
};

const FormScreentwo: React.FC<Props> = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate('FormScreenthree'); 
  };

  return (
    <View style={styles.container}>
      <ProgressBar progress={0.66} width={null} height={4} color={theme.colors.primary} />

      <Text style={styles.title}>Previous Education</Text>
      <Text style={styles.subtitle}>Please provide your previous or current education details</Text>
      <Text style={styles.label}>What was your last qualification</Text>
      <InputField label='LastQualification' placeholder="Your last qualification" /> 
      <Text style={styles.label}>What was your marks/grade in last qualification</Text>
      <InputField label='Grade' placeholder="Your marks/grade" /> 
      <Text style={styles.label}>From which institute you qualified</Text>
      <InputField label='Institute' placeholder="Your institute name" /> 

      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.colors.backgroundMain,
    padding: theme.spacing.large,
  },
  label: {
    fontSize: theme.fonts.medium,
    color: theme.colors.secondary,
    marginTop: theme.spacing.medium,
  },
  title: {
    fontSize: theme.fonts.xlarge,
    fontWeight: 'bold',
    color: theme.colors.secondary,
    marginVertical: theme.spacing.large,
  },
  subtitle: {
    fontSize: theme.fonts.medium,
    color: theme.colors.secondary,
    fontWeight: 'bold',
    marginBottom: theme.spacing.large,
  },
  nextButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: theme.spacing.large,
  },
  buttonText: {
    color: theme.colors.textLight,
    fontSize: theme.fonts.large,
    fontWeight: 'bold',
  },
});

export default FormScreentwo;
