import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type ResultScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ResultScreen'>;

type Props = {
  navigation: ResultScreenNavigationProp;
};

const ResultScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Result Page with filters and multiple options</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('DetailsScreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ResultScreen;
