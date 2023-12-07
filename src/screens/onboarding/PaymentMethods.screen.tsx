import { Layout } from "../../components/Layout";
import { PrimaryButton } from "../../components/PrimaryButton";
import { useAppDispatch } from "../../store";
import { setHasSeenPaymentMethodsScreen } from "../../store/settings.slice";

export const PaymentMethodsScreen = () => {
  const dispatch = useAppDispatch();
  const handleSkipPaymentMethods = () => {
    dispatch(setHasSeenPaymentMethodsScreen(true));
  };

  return (
    <Layout
      text="Payment Methods"
      Button={<PrimaryButton onPress={handleSkipPaymentMethods}>Skip</PrimaryButton>}
    />
  );
};
