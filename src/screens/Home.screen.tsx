import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";

import { Layout } from "../components/Layout";
import { PrimaryButton } from "../components/PrimaryButton";
import { MainRouter } from "../router";
import { useAppDispatch } from "../store";
import {
  setHasSeenLocationScreen,
  setHasSeenNotificationsScreen,
  setHasSeenOnboarding,
  setHasSeenPaymentMethodsScreen,
} from "../store/settings.slice";

type Props = NativeStackScreenProps<MainRouter, "Home">;
export const HomeScreen = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();

  const handleResetHasSeenOnboarding = () => {
    dispatch(setHasSeenOnboarding(false));
  };

  const handleResetHasSeenPaymentMethods = () => {
    dispatch(setHasSeenPaymentMethodsScreen(false));
  };

  const handleResetHasSeenNotifications = () => {
    dispatch(setHasSeenNotificationsScreen(false));
  };

  const handleResetHasSeenLocation = () => {
    dispatch(setHasSeenLocationScreen(false));
  };

  const handleResetAll = () => {
    dispatch(setHasSeenOnboarding(false));
    dispatch(setHasSeenPaymentMethodsScreen(false));
    dispatch(setHasSeenNotificationsScreen(false));
    dispatch(setHasSeenLocationScreen(false));
  };

  return (
    <Layout text="Welcome to the app after the verifications">
      <View style={{ flex: 1, justifyContent: "space-evenly", alignItems: "center" }}>
        <PrimaryButton onPress={handleResetHasSeenOnboarding}>
          Reset - hasSeenOnboarding
        </PrimaryButton>
        <PrimaryButton onPress={handleResetHasSeenPaymentMethods}>
          Reset - hasSeenPaymentMethods
        </PrimaryButton>
        <PrimaryButton onPress={handleResetHasSeenNotifications}>
          Reset - hasSeenNotifications
        </PrimaryButton>
        <PrimaryButton onPress={handleResetHasSeenLocation}>Reset - hasSeenLocation</PrimaryButton>
        <PrimaryButton onPress={handleResetAll}>Reset All</PrimaryButton>
      </View>
    </Layout>
  );
};
