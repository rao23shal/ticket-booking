import HomeScreen from "./src/HomeScreen";
import OtpScreen from "./src/OtpScreen";
import BookingScreen from "./src/BookingScreen";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GroundDetailScreen from "./src/GroundDetailScreen";
 const Stack=createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
    <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:false}}/>
    <Stack.Screen name='OtpScreen' component={OtpScreen} options={{headerShown:false}}/>
    <Stack.Screen name='BookingScreen' component={BookingScreen} options={{headerShown:false}}/>
    <Stack.Screen name='GroundDetailScreen' component={GroundDetailScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

