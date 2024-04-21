import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './src/screens/Login';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

const DetailsScreen = () => {
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
};

const LaundryAdminStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        // navigationKey={isSignedIn ? 'user' : 'guest'}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        // navigationKey={isSignedIn ? 'user' : 'guest'}
        name="Details"
        component={DetailsScreen}
      />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
