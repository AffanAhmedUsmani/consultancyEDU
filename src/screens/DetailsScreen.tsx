import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'DetailsScreen'>;

type Props = {
  navigation: DetailsScreenNavigationProp;
};

const DetailsScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Details Page</Text>
      <Button title="Go to Result" onPress={() => navigation.navigate('ResultScreen')} />
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

export default DetailsScreen;
