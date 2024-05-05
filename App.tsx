/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  NavigationContainer,
} from "@react-navigation/native";
import Home from './src/screens/home';
import Tickets from './src/screens/Tickets';
import Events from './src/screens/events';
import Profile from './src/screens/profile';
import OnboardingScreen from './src/screens/onBoardingScreen';
import LoginScreen from './src/screens/auth/LoginScreen';
import RegistrationScreen from './src/screens/auth/RegistrationScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AppStack() {
  return (
      <Tab.Navigator
          screenOptions={{
              tabBarActiveTintColor: Colors.primary,
              tabBarStyle: {
                  position: 'absolute',
                  // bottom: 10,
                  height: 72,
                  paddingBottom: 20,
                  width: '100%',
                  // marginLeft: 20,
                  shadowColor: "white",
                  backgroundColor: 'white',
              },
              headerShown: false,
          }}
          sceneContainerStyle={{
              marginBottom: 62,
          }}>
          <Tab.Screen
              name="Home"
              component={Home}
              options={{
                  tabBarIcon: ({color, size}) => (
                      <MaterialCommunityIcons name="home" color={color} size={25} />
                  ),
                  tabBarLabelStyle: {
                      fontSize: 10,
                      fontFamily: 'Poppins-bold',
                  },
              }}
          />
          <Tab.Screen
              name="Events"
              component={Events}
              options={{
                  tabBarIcon: ({color, size}) => (
                      <MaterialCommunityIcons
                          name="hospital-box-outline"
                          color={color}
                          size={25}
                      />
                  ),
                  tabBarLabelStyle: {
                      fontSize: 10,
                      fontFamily: 'Poppins-bold',
                  },
                  tabBarLabel: 'Events',
              }}
          />
          <Tab.Screen
              name="Tickets"
              component={Tickets}
              options={{
                  tabBarIcon: ({color, size}) => (
                      <MaterialCommunityIcons
                          name="map-marker"
                          color={color}
                          size={25}
                      />
                  ),
                  tabBarLabelStyle: {
                      fontSize: 10,
                      fontFamily: 'Poppins-bold',
                  },
                  tabBarLabel: 'Location',
              }}
          />
          <Tab.Screen
              name="Profile"
              component={Profile}
              options={{
                  tabBarIcon: ({color, size}) => (
                      <MaterialCommunityIcons
                          name="rocket-outline"
                          color={color}
                          size={25}
                      />
                  ),
                  tabBarLabelStyle: {
                      fontSize: 10,
                      fontFamily: 'Poppins-bold',
                  },
                  tabBarLabel: 'Profile',
              }}
          />

      </Tab.Navigator>

  );
}

function App(): React.JSX.Element {


  return (
   <NavigationContainer>
    <Stack.Navigator
          screenOptions={{
              headerShown:false,
          }}
      >
          <Stack.Screen name="onbording" component={OnboardingScreen} />
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="register" component={RegistrationScreen} />
          <Stack.Screen name="home" component={AppStack} />
      </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
