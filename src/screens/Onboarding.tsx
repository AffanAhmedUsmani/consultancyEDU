import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import theme from '../styles/theme';

const onboardingData = [
  {
    image: require('../assets/onboarding2.png'), // Replace with your image path
    heading: "Welcome",
    description: "Welcome! Let's get started with finding the best options for your study abroad plans.",
  },
  {
    image: require('../assets/onboarding1.png'), // Replace with your image path
    heading: "The Best Place",
    description: "The best place to find consultancy and make your dreams come true.",
  },
  {
    image: require('../assets/onboarding3.png'), // Replace with your image path
    heading: "Let's Go!",
    description: "We will ask some questions to assess the best results for you.",
  }
];

const Onboarding = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const navigation = useNavigation();

  const handleNext = () => {
    if (currentScreen < onboardingData.length - 1) {
      setCurrentScreen(currentScreen + 1);
    } else {
      navigation.navigate('FormScreen'); // Navigate to FormScreen on last screen
    }
  };

  const renderDots = () => {
    return (
        <View style={styles.dotsContainer}>
        {onboardingData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index < currentScreen
                ? styles.lightestDot // Previously visited screens
                : index === currentScreen
                ? styles.lightDot    // Current screen
                : styles.activeDot   // Next upcoming screens
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderDots()}
      <View style={styles.imageContainer}>
        <Image source={onboardingData[currentScreen].image} style={styles.image} />
      </View>
      <Text style={styles.heading}>{onboardingData[currentScreen].heading}</Text>
      <Text style={styles.description}>{onboardingData[currentScreen].description}</Text>
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  imageContainer: {
    marginBottom: 30,
  },
  image: {
    width: 300,
    height: 400, // Set a fixed height for consistent layout
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.secondary, // Replace with your theme color
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555', // Replace with your theme color
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  activeDot: {
    backgroundColor: '#A8E6CE', // Dark Green
  },
  lightDot: {
    backgroundColor: '#7CB342', // Darker Green
  },
  lightestDot: {
    backgroundColor: '#558B2F', // Sea Green
  },
  nextButton: {
    alignSelf: 'flex-end', // Position the text on the right side
    marginRight: 20, // Adds space from the edge
    marginTop: 10, // Adds space from the elements above
  },
  nextButtonText: {
    color: theme.colors.secondary, // Blue color to make it look like a link
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Onboarding;
