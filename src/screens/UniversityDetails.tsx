import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Button, Linking } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import theme from '../styles/theme';

type UniversityDetailsNavigationProp = StackNavigationProp<RootStackParamList, 'UniversityDetails'>;

type Props = {
  navigation: UniversityDetailsNavigationProp;
  route: {
    params: {
      universityName: string;
    };
  };
};

const UniversityDetails: React.FC<Props> = ({ navigation, route }) => {
  const { universityName } = route.params;

  // Function to handle opening the link
  const handleContactConsultant = () => {
    Linking.openURL("https://www.linkedin.com/in/affan-ahmed-0b859521a/");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image source={require('../assets/back.png')} style={styles.logo} />
      </TouchableOpacity>
      <ScrollView style={styles.scrolling}>
        
        {/* Picture Slider */}
        <ScrollView horizontal style={styles.pictureSlider} showsHorizontalScrollIndicator={false}>
          <Image source={require('../assets/uniimage1.jpg')} style={styles.uniImage} />
          <Image source={require('../assets/uniimage2.jpg')} style={styles.uniImage} />
          <Image source={require('../assets/uniimage3.jpg')} style={styles.uniImage} />
        </ScrollView>

        {/* University Name and Address */}
        <Text style={styles.uniName}>{universityName}</Text>
        <Text style={styles.uniAddress}>123 University Ave, City, Country</Text>

        {/* Description Section */}
        <Text style={styles.sectionHeading}>Description</Text>
        <Text style={styles.descriptionText}>
          The University of London is a prestigious federation of 17 independent member institutions, founded in 1836.
          It is renowned for its academic excellence and diverse range of programs, from humanities to sciences.
          Many of its colleges, such as UCL and King's College London, rank among the world's top universities.
        </Text>

        {/* Scholarships Section */}
        <Text style={styles.sectionHeading}>Scholarships</Text>
        {["Merit-Based Scholarship: Up to 100% tuition coverage for top-performing students.",
          "Need-Based Grants: Financial assistance based on family income and financial need.",
          "International Student Scholarship: Partial scholarships for outstanding international applicants."]
          .map((item, index) => (
            <View key={index} style={styles.listItemContainer}>
              <View style={styles.bulletPoint} />
              <Text style={styles.listItem}>{item}</Text>
            </View>
          ))}

        {/* Programs Section */}
        <Text style={styles.sectionHeading}>Programs</Text>
        {["Bachelor of Science in Computer Science",
          "Master of Business Administration",
          "PhD in Environmental Studies",
          "Bachelor of Arts in Psychology"]
          .map((item, index) => (
            <View key={index} style={styles.listItemContainer}>
              <View style={styles.bulletPoint} />
              <Text style={styles.listItem}>{item}</Text>
            </View>
          ))}

        {/* Facilities Section */}
        <Text style={styles.sectionHeading}>Facilities</Text>
        {["Modern libraries", "Advanced research labs", "On-campus accommodation", "Sports complex and recreational centers"]
          .map((item, index) => (
            <View key={index} style={styles.listItemContainer}>
              <View style={styles.bulletPoint} />
              <Text style={styles.listItem}>{item}</Text>
            </View>
          ))}

        {/* Consultant Section */}
        <Text style={styles.consultantHeading}>Consultant</Text>
        <Image source={require('../assets/consultant.jpg')} style={styles.consultantImage} />
        <Text style={styles.consultantName}>Affan Ahmed</Text>
        <Button style={styles.nextButton} title="Contact Consultant" onPress={handleContactConsultant} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: theme.spacing.large,
    paddingBottom: theme.spacing.large, 
    backgroundColor: theme.colors.backgroundMain,
  },
  scrolling: {
    height: 100,
  },
      
  backButton: {
    position: 'absolute',
    top: theme.spacing.medium,
    left: theme.spacing.medium,
    zIndex: 10,
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  pictureSlider: {
    marginVertical: theme.spacing.large,
    flexDirection: 'row',
  },
  uniImage: {
    width: 250,
    height: 150,
    marginRight: theme.spacing.medium,
    borderRadius: 8,
  },
  uniName: {
    fontSize: theme.fonts.xlarge,
    fontWeight: 'bold',
    color: theme.colors.secondary,
    textAlign: 'left',
    marginBottom: theme.spacing.small,
  },
  uniAddress: {
    fontSize: theme.fonts.medium,
    color: theme.colors.accent,
    marginBottom: theme.spacing.large,
  },
  sectionHeading: {
    fontSize: theme.fonts.large,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginTop: theme.spacing.large,
    marginBottom: theme.spacing.small,
  },
  descriptionText: {
    fontSize: theme.fonts.medium,
    color: theme.colors.secondary,
    marginBottom: theme.spacing.large,
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.small,
  },
  bulletPoint: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'green',
    marginRight: theme.spacing.small,
  },
  listItem: {
    fontSize: theme.fonts.medium,
    color: theme.colors.secondary,
  },
  consultantHeading: {
    fontSize: theme.fonts.large,
    fontWeight: 'bold',
    color: theme.colors.primary,
    textAlign: 'center',
    marginVertical: theme.spacing.large,
  },
  consultantImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
  },
  consultantName: {
    fontSize: theme.fonts.medium,
    fontWeight: 'bold',
    color: theme.colors.secondary,
    textAlign: 'center',
    marginVertical: theme.spacing.small,
  },
  nextButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 15,
    borderRadius: 8,
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
  },
});

export default UniversityDetails;
