import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import ProgressBar from 'react-native-progress/Bar';
import { DatePickerModal } from 'react-native-paper-dates';
import theme from '../styles/theme';
import InputField from '../components/InputField';

type FormScreenNavigationProp = StackNavigationProp<RootStackParamList, 'FormScreen'>;

type Props = {
  navigation: FormScreenNavigationProp;
};

const FormScreen: React.FC<Props> = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const handleNext = () => {
    navigation.navigate('FormScreentwo'); 
  };

  return (
    <View style={styles.container}>
      <ProgressBar progress={0.33} width={null} height={4} color={theme.colors.primary} />

      <Text style={styles.title}>Personal Info</Text>
      <Text style={styles.subtitle}>Please provide your personal details</Text>
      <Text style={styles.label}>Your Full Name</Text>
      <InputField label='Name' placeholder="Enter your full name" />  
      <Text style={styles.label}>Select Date Of Birth</Text>
      <TouchableOpacity onPress={() => setOpen(true)} style={styles.pictureContainer}>
        <Image source={require('../assets/Calender.png')} style={styles.picture} />
      </TouchableOpacity>

      <DatePickerModal
        disableStatusBarPadding
        locale="en"
        mode="single"
        visible={open}
        onDismiss={() => setOpen(false)}
        date={date}
        onConfirm={({ date }) => {
          setOpen(false);
          setDate(date);
        }}
      />
      
      <Text style={styles.selectedDateText}>Date Of Birth: {date.toDateString()}</Text>
      <Text style={styles.label}>Your city of residence</Text>
      <InputField label='City' placeholder="Enter your city" />   

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
  subtitle: {
    fontSize: theme.fonts.medium,
    color: theme.colors.secondary,
    fontWeight: 'bold',
    marginBottom: theme.spacing.large,
  },
  label: {
    fontSize: theme.fonts.medium,
    color: theme.colors.secondary,
    marginTop: theme.spacing.medium,
  },
  pictureContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', 
    height: 150, 
    marginVertical: theme.spacing.small,
  },
  picture: {
    width: 100, 
    height: 100, 
  },
  selectedDateText: {
    fontSize: theme.fonts.medium,
    color: theme.colors.secondary,
    marginTop: theme.spacing.small,
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

export default FormScreen;
