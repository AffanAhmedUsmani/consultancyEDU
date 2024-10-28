import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Animated } from 'react-native';
import theme from '../styles/theme';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type LoadingPageNavigationProp = StackNavigationProp<RootStackParamList, 'LoadingPage'>;

type Props = {
  navigation: LoadingPageNavigationProp;
};

const motivationalQuotes = [
  "The Best place to find consultancy.",
  "You have dreamt of going abroad, we will make it a reality.",
  "Empowering your dreams, one step at a time.",
  "Your success is our priority.",
  "Global opportunities, local guidance.",
  "Bridging the gap between dreams and reality.",
  "Your journey, our expertise.",
  "Trusted advice for your global ambitions.",
  "Unlocking potential, one consultation at a time.",
  "Turning dreams into destinations.",
  "Charting a path to your success.",
  "Expert guidance for your global future.",
  "Your future, our mission.",
  "Step into a world of endless opportunities.",
  "Guiding your path to success.",
  "We pave the way to your dreams.",
  "Your aspirations, our inspiration.",
  "Making your dreams a reality.",
  "Navigating your future, together.",
  "The consultancy that cares."
];

const LoadingPage: React.FC<Props> = ({ navigation }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 20000); 

    return () => {
      console.log("Cleaning up timer."); // Debug log
      clearTimeout(timer); // Cleanup on unmount
    };
  }, [navigation]);

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const rotation = new Animated.Value(0);

  // Rotating animation for the loader
  useEffect(() => {
    const animateLoader = () => {
      Animated.loop(
        Animated.timing(rotation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        })
      ).start();
    };
    animateLoader();
  }, [rotation]);

  // Change quotes every 10 seconds
  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % motivationalQuotes.length);
    }, 2500);

    return () => clearInterval(quoteInterval);
  }, []);

  // Color rotation setup
  const [colorIndex, setColorIndex] = useState(0);
  const circleColors = [
    '#A8E6CE', // Light Green
    '#DCEDC8', // Lighter Green
    '#C5E1A5', // Lighter Lime Green
    '#9CCC65', // Lime Green
    '#7CB342', // Darker Lime Green
    '#558B2F', // Sea Green
    '#388E3C', // Darker Green
    '#2E7D32'  // Dark Green
  ];

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % circleColors.length);
    }, 100); // Change color every 0.5 seconds

    return () => clearInterval(colorInterval);
  }, [circleColors.length]);

  const numberOfCircles = 8; // Number of circles to show
  const radius = 40; // Radius of the circular path

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/edfryLogo.png')} style={styles.logo} />
      </View>
      <Text style={styles.brandName}>Edfry</Text>
      <Text style={styles.motivationalText}>{motivationalQuotes[currentQuoteIndex]}</Text>
      <View style={styles.loaderContainer}>
        {Array.from({ length: numberOfCircles }).map((_, index) => {
          const angle = (index * (2 * Math.PI)) / numberOfCircles; // Calculate angle for each circle
          const x = radius * Math.cos(angle); // X position based on angle
          const y = radius * Math.sin(angle); // Y position based on angle

          // Get the color for the current animation
          const circleColor = circleColors[(index + colorIndex) % circleColors.length]; // Rotate colors

          return (
            <Animated.View
              key={index}
              style={[
                styles.loaderCircle,
                {
                  backgroundColor: circleColor, // Set color for each circle
                  transform: [
                    { translateX: x },
                    { translateY: y },
                    {
                      rotate: rotation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '360deg'], // Rotate circles around center
                      }),
                    },
                  ],
                },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.backgroundMain,
  },
  logoContainer: {
    borderTopLeftRadius: 440,
    borderTopRightRadius: 440,
    backgroundColor: theme.colors.background,
    marginTop: theme.spacing.small,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 20,
    alignSelf: 'center',
    width: 150,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  brandName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: theme.colors.secondary,
    textAlign: 'center',
    marginVertical: 10,
  },
  motivationalText: {
    paddingTop : theme.fonts.medium,
    fontSize: theme.fonts.medium,
    color: theme.colors.secondary,
    textAlign: 'center',
    marginBottom: theme.spacing.large,
    marginHorizontal: 20,
  },
  loaderContainer: {
    position: 'relative',
    width: 100, 
    height: 100, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderCircle: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
  },
});

export default LoadingPage;
