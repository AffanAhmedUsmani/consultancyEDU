// components/UniversityCard.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

type UniversityCardProps = {
  logo: any;
  name: string;
  location: string;
  onPress: () => void;
};

const UniversityCard: React.FC<UniversityCardProps> = ({ logo, name, location, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={logo} style={styles.logo} />
    <View style={styles.infoContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.location}>{location}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 16,
    borderRadius: 8,
  },
  infoContainer: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    color: '#666',
  },
});

export default UniversityCard;
