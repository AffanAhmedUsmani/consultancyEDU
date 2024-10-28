// components/FilterSlider.tsx
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import theme from '../styles/theme';

const FilterSlider = () => {
  const filters = ['Online', 'City', 'Scholarship', 'Tuition < 50k', 'Low Grades'];
  
  return (
    <View style={styles.container}>
      <MaterialIcons name="filter-list" size={24} color={theme.colors.secondary} style={styles.icon} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {filters.map((filter, index) => (
          <View key={index} style={styles.filterOption}>
            <Text style={styles.filterText}>{filter}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: theme.spacing.medium,
  },
  icon: {
    marginRight: theme.spacing.small,
  },
  filterOption: {
    backgroundColor: '#e0f2f1',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: theme.spacing.small,
  },
  filterText: {
    color: '#00695c',
    fontSize: theme.fonts.small,
    fontWeight: 'bold',
  },
});

export default FilterSlider;
