import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, Vibration,View ,Text} from 'react-native';

const COLOR = {orange:'#F97B22',cream:'#FEE8B0',greenlight:'#9CA777',greendark:'#7C9070'};

import Home from './src/Pages/Home';
import Contact from './src/Pages/Contact';
import Search from './src/Pages/Search';
import Project from './src/Pages/Project';
import Profile from './src/Pages/Profile';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 10,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: COLOR.cream,
            borderRadius: 15,
            borderWidth:1,
            borderColor:COLOR.greendark,
            height: 50,
            ...styles.shadow
          },
        }}
      >
        <Tab.Screen name="Search" component={Search}options={{
          tabBarIcon:({focused}) => (
            <View style={{alignItems: 'center',justifyContent:'center'}}>
              <Image
              source={require('./src/Assets/Icon/search.png')}
              resizeMode='contain'
              style={{
                width:25,
                height:25,
                tintColor: focused ? COLOR.orange : COLOR.greendark,

              }}
              />
            </View>
          )
        }} />
        <Tab.Screen name="Contact" component={Contact}options={{
          tabBarIcon:({focused}) => (
            <View style={{alignItems: 'center',justifyContent:'center'}}>
              <Image
              source={require('./src/Assets/Icon/contact.png')}
              resizeMode='contain'
              style={{
                width:25,
                height:25,
                tintColor: focused ? COLOR.orange : COLOR.greendark,

              }}
              />
            </View>
          )
        }} />
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon:({focused}) => (
            <View style={{alignItems: 'center',justifyContent:'center'}}>
              <Image
              source={require('./src/Assets/Icon/home.png')}
              resizeMode='contain'
              style={{
                width:40,
                height:40,
                tintColor: focused ? COLOR.orange : COLOR.greendark,
              }}
              />
            </View>
          )
        }} />
        <Tab.Screen name="Project" component={Project}options={{
          tabBarIcon:({focused}) => (
            <View style={{alignItems: 'center',justifyContent:'center'}}>
              <Image
              source={require('./src/Assets/Icon/project.png')}
              resizeMode='contain'
              style={{
                width:25,
                height:25,
                tintColor: focused ? COLOR.orange : COLOR.greendark,

              }}
              />
            </View>
          )
        }} />
        <Tab.Screen name="Profile" component={Profile}options={{
          tabBarIcon:({focused}) => (
            <View style={{alignItems: 'center',justifyContent:'center'}}>
              <Image
              source={require('./src/Assets/Icon/profile.png')}
              resizeMode='contain'
              style={{
                width:25,
                height:25,
                tintColor: focused ? COLOR.orange : COLOR.greendark,

              }}
              />
            </View>
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  shadow:{
    shadowColor:'#7F5DF0',
    shadowOffset:{
      width:0,
      height:10,
    },
    shadowOpacity:0.25,
    shadowRadius:3.5,
    elevation:5
  },
})
