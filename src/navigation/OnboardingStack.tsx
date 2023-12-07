import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LocationScreen, NotificationsScreen, PaymentMethodsScreen } from "../screens/onboarding";
import { useAppSelector } from "../store";

export type OnboardingStackParamList = {
  Notifications: undefined;
  Location: undefined;
  PaymentMethods: undefined;
};

const Onboarding = createNativeStackNavigator<OnboardingStackParamList>();

export const OnboardingStack = () => {
  const { hasSeenLocationScreen, hasSeenNotificationsScreen, hasSeenPaymentMethodsScreen } =
    useAppSelector((state) => state.settings);

  return (
    <Onboarding.Navigator screenOptions={{ headerShown: false }}>
      {!hasSeenNotificationsScreen && (
        <Onboarding.Screen name="Notifications" component={NotificationsScreen} />
      )}
      {!hasSeenLocationScreen && <Onboarding.Screen name="Location" component={LocationScreen} />}
      {!hasSeenPaymentMethodsScreen && (
        <Onboarding.Screen name="PaymentMethods" component={PaymentMethodsScreen} />
      )}
    </Onboarding.Navigator>
  );
};
