// screens/InitialScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import theme from '../styles/theme';
import FilterSlider from '../components/FilterSlider';
import UniversityCard from '../components/UniversityCard';

type InitialScreenNavigationProp = StackNavigationProp<RootStackParamList, 'InitialScreen'>;

type Props = {
  navigation: InitialScreenNavigationProp;
};

const InitialScreen: React.FC<Props> = ({ navigation }) => {
  const universities = [
    { logo: require('../assets/unilogo1.png'), name: 'University A', location: 'City A' },
    { logo: require('../assets/unilogo2.png'), name: 'University B', location: 'City B' },
    { logo: require('../assets/unilogo3.png'), name: 'University C', location: 'City C' },
    { logo: require('../assets/unilogo4.png'), name: 'University D', location: 'City D' },
    { logo: require('../assets/unilogo5.png'), name: 'University E', location: 'City E' },
  ];

  const reloadPage = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'InitialScreen' }],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topRightContainer}>
        <Image source={require('../assets/topleft.png')} style={styles.picture} />
      </View>

      <Text style={styles.title}>Results are here!</Text>
      <Text style={styles.subtitle}>Check out the following list of institutes</Text>

      <FilterSlider />

      <ScrollView style={styles.universityList}>
        {universities.map((uni, index) => (
          <UniversityCard
            key={index}
            logo={uni.logo}
            name={uni.name}
            location={uni.location}
            onPress={() => navigation.navigate('UniversityDetails', { universityName: uni.name })}
          />
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.nextButton} onPress={reloadPage}>
        <Text style={styles.nextButtonText}>Search Again</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.large,
    backgroundColor: theme.colors.backgroundMain,
  },
  topRightContainer: {
    position: 'absolute',
    top: theme.spacing.large,
    right: theme.spacing.large,
  },
  picture: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: theme.fonts.xlarge,
    fontWeight: 'bold',
    color: theme.colors.secondary,
    textAlign: 'left',
    marginTop: theme.spacing.large + 100,
    marginBottom: theme.spacing.small,
  },
  subtitle: {
    fontSize: theme.fonts.medium,
    color: theme.colors.secondary,
    textAlign: 'left',
    marginBottom: theme.spacing.medium,
  },
  universityList: {
    height: 200,
    marginVertical: theme.spacing.medium,
  },
  nextButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 15,
    borderRadius: 8,
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    color: theme.colors.textLight,
    fontSize: theme.fonts.large,
    fontWeight: 'bold',
  },
});

export default InitialScreen;
