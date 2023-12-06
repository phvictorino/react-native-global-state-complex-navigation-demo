import { Alert } from "react-native";

import { Layout } from "../components/Layout";
import { PrimaryButton } from "../components/PrimaryButton";

export const PaymentMethodsScreen = () => {
  const handleSkipPaymentMethods = () => {
    Alert.alert("Skipping payment methods");
  };

  return (
    <Layout
      text="Payment Methods"
      Button={<PrimaryButton onPress={handleSkipPaymentMethods}>Here</PrimaryButton>}
    />
  );
};
