import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import ProgressBar from 'react-native-progress/Bar';
import theme from '../styles/theme';
import InputField from '../components/InputField';

type FormScreenthreeNavigationProp = StackNavigationProp<RootStackParamList, 'FormScreenthree'>;

type Props = {
  navigation: FormScreenthreeNavigationProp;
};

const FormScreenthree: React.FC<Props> = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate('LoadingPagetwo'); 
  };

  return (
    <View style={styles.container}>
      <ProgressBar progress={0.99} width={null} height={4} color={theme.colors.primary} />

      <Text style={styles.title}>Future Education Planning</Text>
      <Text style={styles.subtitle}>Please provide details for your future education plan</Text>

      <Text style={styles.label}>Which academic qualification do you aim to pursue
      abroad</Text>
      <InputField label='AcademicQualification' placeholder="Your preferred academic qualification" /> 
      <Text style={styles.label}>Which country are you aiming to go for</Text>
      <InputField label='Country' placeholder="Your preferred country" /> 
      <Text style={styles.label}>How much can you spend on your academic
      qualification per year in USD</Text>
      <InputField label='YearlySpending' placeholder="Yearly spending in USD" /> 

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
  title: {
    fontSize: theme.fonts.xlarge,
    fontWeight: 'bold',
    color: theme.colors.secondary,
    marginVertical: theme.spacing.large,
  },
  label: {
    fontSize: theme.fonts.medium,
    color: theme.colors.secondary,
    marginTop: theme.spacing.medium,
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

export default FormScreenthree;
