import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import CalendarioScreen from './Screens/CalendarioScreen';
import VibracionScreen from './Screens/VibracionScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Calendar" component={CalendarioScreen} />
        <Stack.Screen name="Vibracion" component={VibracionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//CalendarScreen
//VibracionScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c2691',
    alignItems: 'center',
    justifyContent: 'center',
  },
});