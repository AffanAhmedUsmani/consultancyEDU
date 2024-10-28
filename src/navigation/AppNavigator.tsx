import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import InitialScreen from '../screens/InitialScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ResultScreen from '../screens/ResultScreen';
import FormScreen from '../screens/FormScreen';
import SignupScreen from '../screens/SignupScreen';
import CustomHeader from '../components/CustomHeader';
import LoadingPage from '../screens/LoadingPage';
import Onboarding from '../screens/Onboarding';
import FormScreentwo from '../screens/FormScreentwo';
import LoadingPagetwo from '../screens/LoadingPagetwo';
import UniversityDetails from '../screens/UniversityDetails';
import FormScreenthree from '../screens/FormScreenthree';

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  InitialScreen: undefined;
  DetailsScreen: undefined;
  ResultScreen: undefined;
  FormScreen: undefined;
  FormScreentwo: undefined;
  FormScreenthree: undefined;
  LoadingPage: undefined;
  Onboarding: undefined;
  LoadingPagetwo: undefined;
  UniversityDetails: { universityName: string };
};

const Stack = createStackNavigator<RootStackParamList>();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login">
        {({ navigation }) => (
          <CustomHeader>
            <LoginScreen navigation={navigation} />
          </CustomHeader>
        )}
      </Stack.Screen>
      <Stack.Screen name="Signup">
        {({ navigation }) => (
          <CustomHeader showBackButton>
            <SignupScreen navigation={navigation} />
          </CustomHeader>
        )}
      </Stack.Screen>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      
      <Stack.Screen name="InitialScreen" component={InitialScreen}/>
        
      
      <Stack.Screen name="DetailsScreen">
        {({ navigation }) => (
          <CustomHeader showBackButton>
            <DetailsScreen navigation={navigation} />
          </CustomHeader>
        )}
      </Stack.Screen>
      <Stack.Screen name="ResultScreen">
        {({ navigation }) => (
          <CustomHeader showBackButton>
            <ResultScreen navigation={navigation} />
          </CustomHeader>
        )}
      </Stack.Screen>
      <Stack.Screen name="UniversityDetails" component={UniversityDetails} />
      <Stack.Screen name="LoadingPage" component={LoadingPage} />
      <Stack.Screen name="LoadingPagetwo" component={LoadingPagetwo} />
      <Stack.Screen name="FormScreen" component={FormScreen} />
      <Stack.Screen name="FormScreentwo" component={FormScreentwo} />
      <Stack.Screen name="FormScreenthree" component={FormScreenthree} />

    </Stack.Navigator>
  );
}

export default AppNavigator;
