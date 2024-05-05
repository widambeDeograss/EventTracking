import React from 'react';
import {Dimensions, Image, View} from 'react-native';
import {Text} from 'react-native-paper';
import {styles} from '../../styles/obBoardingGlobalStyles';
import {Button} from 'react-native-paper';
import {bordingImage} from '../../components/entryFile'

const {width, height} = Dimensions.get('window');

const OnboardingScreen = ({navigation}:any) => {
  return (
    <View style={styles.content}>
          <View>
          <Image
        source={bordingImage}
        style={styles.imageSty}
      />
          </View>
      <Text style={styles.bordTxt}>
        Experience the ultimate journey through artistry with our innovative
        event tracking system. Seamlessly follow your favorite artists, discover
        new exhibitions, and stay up-to date with the latest cultural
        happenings—all at your fingertips. Immerse yourself in a world where
        creativity knows no bounds, and let our cutting-edge tracking technology
        guide you through a captivating exploration of artistic expression.
      </Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('login')}
        style={styles.button}>
        Get Started
      </Button>
    </View>
  );
};

export default OnboardingScreen;
