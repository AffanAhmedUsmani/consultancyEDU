import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import theme from '../styles/theme';

type CustomHeaderProps = {
  showBackButton?: boolean; // Optional prop to determine if the back button should be shown
};

const CustomHeader: React.FC<CustomHeaderProps> = ({ children, showBackButton }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerWrapper}>
      {showBackButton && (
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={require('../assets/back.png')} style={styles.logo} />
        </TouchableOpacity>
      )}
      <View style={styles.childWrapper}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    width: '92%',
    height: '96%',
    borderTopLeftRadius: 440,
    borderTopRightRadius: 440,
    backgroundColor: theme.colors.backgroundMain,
    marginTop: theme.spacing.small,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 20,
    alignSelf: 'center',
  },
  childWrapper: {
    flex: 1, // This allows the child wrapper to take the full height
    justifyContent: 'flex-start', // Align children at the start
    padding: theme.spacing.medium, // Add padding for better spacing
  },
  backButton: {
    position: 'absolute',
    top: theme.spacing.medium, // Adjust to position properly
    left: theme.spacing.medium, // Adjust to position properly
    zIndex: 10, // Ensure it appears on top of other elements
  },
  logo: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default CustomHeader;
