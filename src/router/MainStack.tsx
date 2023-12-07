import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import { OnboardingStack } from "./OnboardingStack";
import { HomeScreen, WelcomeScreen } from "../screens";
import { useAppSelector } from "../store";

export type MainStackParamList = {
  Welcome: undefined;
  OnboardingStack: undefined;
  Home: undefined;
};

const Main = createNativeStackNavigator<MainStackParamList>();
export const Router = () => {
  const { hasSeenNotificationsScreen, hasSeenLocationScreen, hasSeenPaymentMethodsScreen } =
    useAppSelector((state) => state.settings);

  const hasSeenOnboarding =
    hasSeenNotificationsScreen && hasSeenLocationScreen && hasSeenPaymentMethodsScreen;

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Main.Screen name="Welcome" component={WelcomeScreen} />
        <Main.Navigator>
          {!hasSeenOnboarding && (
            <Main.Screen
              name="OnboardingStack"
              component={OnboardingStack}
              options={{ headerShown: false }}
            />
          )}
          <Main.Screen name="Home" component={HomeScreen} />
        </Main.Navigator>
      </NavigationContainer>
    </>
  );
};
