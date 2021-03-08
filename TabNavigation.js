import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

class AllToDo extends React.Component {   
  render() {    
    return (
      <SafeAreaView
      style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}
  >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>AllToDo!</Text>
        </View>
    </SafeAreaView>
    );
  }
}

class ActiveToDo extends React.Component {
  render() {
    return (
      <SafeAreaView
      style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}
  >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>ActiveToDo!</Text>
        </View>
    </SafeAreaView>
    );
  }
}

class CompletedToDo extends React.Component {
  render() {
    return (
      <SafeAreaView
      style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}
  >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>CompletedToDo!</Text>
        </View>
    </SafeAreaView>
    );
  }
}

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'All') {
                  iconName = focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline';
                } else if (route.name === 'Active') {
                  iconName = focused ? 'ios-list-box' : 'ios-list';
                } else {
                  iconName = 'ios-list';
                }
    
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}
          >
              <Tab.Screen name="All" component={AllToDo} />
              <Tab.Screen name="Active" component={ActiveToDo} />
              <Tab.Screen name="Completed" component={CompletedToDo} />
          </Tab.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
  );
}