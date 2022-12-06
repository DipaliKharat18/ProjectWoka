import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Image} from 'react-native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from './src/screen/SplashScreen';
import MainScreen from './src/screen/mainScreen';
import Intro from './src/screen/Intro';
import Home from './src/screen/Home';
import HomeScreen from './src/screen/HomeScreen';
import AgeValidation from './src/screen/AgeValidation';
import GetStart from './src/screen/GetStart';
import Otp from './src/screen/Otp';
import Accounts from './src/screen/Accounts';
import ExploreWoka from './src/screen/ExploreWoka';
import MyList from './src/screen/MyList';
import {COLORS} from './src/screen/common';
// import { TransitionPresets } from '@react-navigation/stack';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import CreateAccount from './src/screen/CreateAccount';
import Login from './src/screen/Login';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarInactiveTintColor: COLORS.primary,
          tabBarActiveTintColor: COLORS.primary,
          tabBarIcon: ({focused, color, size}) => (
            <Image source={require('./src/assets/Images/home-icon.png')} />
          ),
          tabBarStyle: {
            height: 70,
            paddingBottom: 15,
            fontSize: 13,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen
        name="ExploreWoka"
        component={ExploreWoka}
        options={{
          tabBarLabel: 'Explore Woka',
          tabBarInactiveTintColor: COLORS.primary,
          tabBarActiveTintColor: COLORS.primary,
          tabBarIcon: ({focused, color, size}) => (
            <Image source={require('./src/assets/Images/woka-icon.png')} />
          ),
          tabBarStyle: {
            height: 70,
            paddingBottom: 15,
            fontSize: 13,
            display: 'none',
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen
        name="MyList"
        component={MyList}
        options={{
          tabBarLabel: 'My List',
          tabBarInactiveTintColor: COLORS.primary,
          tabBarActiveTintColor: COLORS.primary,
          tabBarIcon: ({focused, color, size}) => (
            <Image source={require('./src/assets/Images/heart-icon.png')} />
          ),
          tabBarStyle: {
            height: 70,
            paddingBottom: 15,
            fontSize: 13,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          ...TransitionPresets.ModalFadeTransition,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="AgeValidation" component={AgeValidation} />
        <Stack.Screen name="GetStart" component={GetStart} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="Accounts" component={Accounts} />
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="HomeScreen" component={Tabs} />
        <Stack.Screen
          name="ExploreWoka"
          component={Tabs}
          listeners={navigation => ({
            tabPress: event => {
              event.preventDefault();
              navigation.navigate('ExploreWoka');
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
