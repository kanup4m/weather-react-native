import React from 'react';
import ContextProvider from './context/Context'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/homeScreen'
import Hourly from './screens/Hourly'
import { colors } from './utils/index'
import { Ionicons } from '@expo/vector-icons';
import Daily from './screens/Daily';

const Tab = createBottomTabNavigator();
const { PRIMARY_COLOR, SECONDARY_COLOR } = colors


export default function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Current') {
                iconName = focused
                  ? 'ios-thermometer'
                  : 'md-thermometer';
              } else if (route.name === 'Hourly') {
                iconName = focused ? 'ios-time' : 'md-time';
              } else if (route.name === 'Daily') {
                iconName = focused ? 'md-calendar' : 'ios-calendar';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: PRIMARY_COLOR,
            inactiveTintColor: SECONDARY_COLOR,
          }}
        >
          <Tab.Screen name="Current" component={HomeScreen} />
          <Tab.Screen name="Hourly" component={Hourly} />
          <Tab.Screen name="Daily" component={Daily} />
        </Tab.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}

