import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import {
  HomeScreen,
  LocationScreen,
  NotificationsScreen,
  OnboardingHomeScreen,
  PaymentMethodsScreen,
} from "../screens";
import { useAppSelector } from "../store";

export type MainRouter = {
  OnboardingHome: undefined;
  Notifications: undefined;
  Location: undefined;
  PaymentMethods: undefined;
  Home: undefined;
};

const MainStack = createNativeStackNavigator<MainRouter>();
export const Router = () => {
  const {
    hasSeenOnboarding,
    hasSeenLocationScreen,
    hasSeenNotificationsScreen,
    hasSeenPaymentMethodsScreen,
  } = useAppSelector((state) => state.settings);

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <MainStack.Navigator>
          {!hasSeenOnboarding && (
            <MainStack.Screen name="OnboardingHome" component={OnboardingHomeScreen} />
          )}
          {!hasSeenNotificationsScreen && (
            <MainStack.Screen name="Notifications" component={NotificationsScreen} />
          )}
          {!hasSeenLocationScreen && (
            <MainStack.Screen name="Location" component={LocationScreen} />
          )}
          {!hasSeenPaymentMethodsScreen && (
            <MainStack.Screen name="PaymentMethods" component={PaymentMethodsScreen} />
          )}
          <MainStack.Screen name="Home" component={HomeScreen} />
        </MainStack.Navigator>
      </NavigationContainer>
    </>
  );
};
