import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";

import {
  HomeScreen,
  LocationScreen,
  NotificationsScreen,
  OnboardingHomeScreen,
  PaymentMethodsScreen,
} from "./src/screens";
import store from "./src/store";

const MainStack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <MainStack.Navigator>
          <MainStack.Screen name="OnboardingHome" component={OnboardingHomeScreen} />
          <MainStack.Screen name="Notifications" component={NotificationsScreen} />
          <MainStack.Screen name="Location" component={LocationScreen} />
          <MainStack.Screen name="PaymentMethods" component={PaymentMethodsScreen} />
          <MainStack.Screen name="Home" component={HomeScreen} />
        </MainStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
