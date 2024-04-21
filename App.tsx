import {View, Text, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CreditCard, Package, Users} from 'lucide-react-native';
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';

import LoginScreen from './src/screens/Login';
import store from './src/redux/store';
import {colors} from './src/constants';

const Stack = createNativeStackNavigator();
const Tabs = AnimatedTabBarNavigator();

const TransactionScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>Transaction</Text>
    </View>
  );
};

const CustomerScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>Customer</Text>
    </View>
  );
};

const ProductScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>Product</Text>
    </View>
  );
};

const LaundryAdminTabs = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Transaksi"
      appearance={{
        floating: true,
      }}
      tabBarOptions={{
        activeTintColor: colors.background,
        inactiveTintColor: colors.primary,
        activeBackgroundColor: colors.primary,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size}: {focused: boolean; size: number}) => {
          let icon;
          if (route.name === 'Transaksi') {
            icon = (
              <CreditCard
                color={focused ? colors.background : colors.primary}
                size={size}
              />
            );
          } else if (route.name === 'Pelanggan') {
            icon = (
              <Users
                color={focused ? colors.background : colors.primary}
                size={size}
              />
            );
          } else if (route.name === 'Produk') {
            icon = (
              <Package
                color={focused ? colors.background : colors.primary}
                size={size}
              />
            );
          }
          return icon;
        },
      })}>
      <Tabs.Screen name="Transaksi" component={TransactionScreen} />
      <Tabs.Screen name="Pelanggan" component={CustomerScreen} />
      <Tabs.Screen name="Produk" component={ProductScreen} />
    </Tabs.Navigator>
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
    <Provider store={store}>
      <NavigationContainer>
        <LaundryAdminTabs />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
});
