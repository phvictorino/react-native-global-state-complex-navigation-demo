import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";

import { Layout } from "../../components/Layout";
import { PrimaryButton } from "../../components/PrimaryButton";
import { MainStackParamList } from "../../navigation/MainStack";
import { useAppDispatch } from "../../store";
import {
  setHasSeenLocationScreen,
  setHasSeenNotificationsScreen,
  setHasSeenPaymentMethodsScreen,
} from "../../store/settings.slice";

type Props = NativeStackScreenProps<MainStackParamList, "Home">;
export const HomeScreen = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();

  const handleResetAll = () => {
    dispatch(setHasSeenPaymentMethodsScreen(false));
    dispatch(setHasSeenNotificationsScreen(false));
    dispatch(setHasSeenLocationScreen(false));
    setTimeout(() => {
      navigation.navigate("OnboardingStack");
    }, 500);
  };

  const handlePushRegistrationScreen = () => {
    navigation.navigate("UserRegistration");
  };

  return (
    <Layout text="Welcome to the app after the verifications">
      <View style={{ flex: 1, justifyContent: "flex-end", gap: 8, alignItems: "center" }}>
        <PrimaryButton onPress={handlePushRegistrationScreen}>Go to Registration</PrimaryButton>
        <PrimaryButton onPress={handleResetAll}>Reset All</PrimaryButton>
      </View>
    </Layout>
  );
};
