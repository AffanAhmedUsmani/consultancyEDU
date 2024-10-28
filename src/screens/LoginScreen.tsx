import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import Button from '../components/Button';
import theme from '../styles/theme';
import InputField from '../components/InputField';
type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};


const LoginScreen: React.FC<Props> = ({ navigation }) => {
  return (
    
      <View style={styles.adjust}>
        <Image source={require('../assets/edfryLogo.png')} style={styles.logo} />
        <Text style={styles.title}>Sign in</Text>
        <Text style={styles.subtitle}>Please sign in to contact the consultant</Text>

        <InputField label='email'/>
        <InputField label='password'/>

        <TouchableOpacity onPress={() => console.log('Forgot Password')} style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
        <Button
  title="Sign In"
  onPress={() => {
    console.log("Sign In Success"); 
    navigation.navigate('LoadingPage'); 
  }}
  style={styles.signInButton}
  textStyle={styles.signInButtonText}
/>

        <Text style={styles.orText}>or continue with</Text>

        <View style={styles.socialLogin}>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../assets/google.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../assets/facebook.png')} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.createAccount}>Create an account</Text>
        </TouchableOpacity>
      </View>
    
  );
};

const styles = StyleSheet.create({
  adjust: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '30%',
    height: '30%',
    alignSelf: 'center',
    resizeMode: 'contain',
    marginBottom: '1%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: theme.colors.secondary,
    textAlign: 'center',
  },
  subtitle: {
    paddingTop : theme.fonts.medium,
    fontSize: theme.fonts.medium,
    color: theme.colors.secondary,
    textAlign: 'center',
    marginBottom: theme.spacing.large,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: theme.colors.border,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: theme.spacing.medium,
    backgroundColor: theme.colors.textLight,
    marginBottom: theme.spacing.medium,
    fontSize: theme.fonts.medium,
    color: theme.colors.secondary,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: theme.spacing.medium,
  },
  forgotPasswordText: {
    color: theme.colors.primary,
    fontSize: theme.fonts.small,
  },
  signInButton: {
    backgroundColor: theme.colors.primary,
    width: '100%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.large,
  },
  signInButtonText: {
    color: theme.colors.textLight,
    fontSize: theme.fonts.large,
    fontWeight: 'bold',
  },
  orText: {
    fontSize: theme.fonts.small,
    color: theme.colors.accent,
    marginVertical: theme.spacing.medium,
  },
  socialLogin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginBottom: theme.spacing.large,
  },
  socialButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.textLight,
    borderRadius: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  socialIcon: {
    width: 25,
    height: 25,
  },
  createAccount: {
    fontSize: theme.fonts.medium,
    color: theme.colors.secondary,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
