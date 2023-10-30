import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Login from './Components/Login';
import Home from './Components/Home';
import Expense from './Components/Expense';
import Income from './Components/Income';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Login' component={Login} />
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Expense' component={Expense} />
        <Tab.Screen name='Income' component={Income} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
